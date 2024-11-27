const https = require('https');
const fs = require('fs');
const path = require('path');

const placeholders = [
  {
    path: 'testimonials/emily.jpg',
    url: 'https://picsum.photos/400/400'
  },
  {
    path: 'testimonials/sarah.jpg',
    url: 'https://picsum.photos/400/400'
  },
  {
    path: 'testimonials/michael.jpg',
    url: 'https://picsum.photos/400/400'
  },
  {
    path: 'images/case-study-placeholder.jpg',
    url: 'https://picsum.photos/800/600'
  },
  {
    path: 'images/success-stories/techcorp.jpg',
    url: 'https://picsum.photos/800/600'
  },
  {
    path: 'images/placeholder.jpg',
    url: 'https://picsum.photos/800/600'
  }
];

async function downloadImage(url, filepath) {
  const fullPath = path.join(process.cwd(), 'public', filepath);
  const dir = path.dirname(fullPath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 302) {
        // Follow redirect
        https.get(response.headers.location, (finalResponse) => {
          if (finalResponse.statusCode !== 200) {
            reject(new Error(`Failed to download image: ${finalResponse.statusCode}`));
            return;
          }

          const fileStream = fs.createWriteStream(fullPath);
          finalResponse.pipe(fileStream);

          fileStream.on('finish', () => {
            fileStream.close();
            console.log(`Downloaded: ${filepath}`);
            resolve();
          });
        }).on('error', reject);
      } else if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      } else {
        const fileStream = fs.createWriteStream(fullPath);
        response.pipe(fileStream);

        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Downloaded: ${filepath}`);
          resolve();
        });
      }
    }).on('error', reject);
  });
}

async function downloadAll() {
  for (const placeholder of placeholders) {
    try {
      await downloadImage(placeholder.url, placeholder.path);
      // Add a small delay between downloads
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`Error downloading ${placeholder.path}:`, error);
    }
  }
}

downloadAll();
