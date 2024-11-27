const https = require('https');
const fs = require('fs');
const path = require('path');

const services = [
  {
    path: 'advanced-threat-detection',
    title: 'Advanced Threat Detection'
  },
  {
    path: 'incident-response',
    title: 'Incident Response'
  },
  {
    path: 'security-assessments',
    title: 'Security Assessments'
  },
  {
    path: 'data-analytics',
    title: 'Data Analytics'
  },
  {
    path: 'ai-solutions',
    title: 'AI Solutions'
  },
  {
    path: 'rwa-tokenization',
    title: 'RWA Tokenization'
  },
  {
    path: 'blockchain-solutions',
    title: 'Blockchain Solutions'
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

async function downloadServiceImages() {
  for (const service of services) {
    const imageUrl = `https://picsum.photos/1920/1080`;
    const imagePath = `images/services/${service.path}-hero.jpg`;
    
    try {
      await downloadImage(imageUrl, imagePath);
      // Add a small delay between downloads
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`Error downloading ${imagePath}:`, error);
    }
  }
}

downloadServiceImages();
