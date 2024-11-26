const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage, registerFont } = require('canvas');

// Register custom fonts if needed
// registerFont('path/to/font.ttf', { family: 'CustomFont' });

const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 630;
const SERVICES = [
  'data-analytics',
  'business-intelligence',
  'blockchain-solutions',
  'ai-machine-learning',
  'cybersecurity-assessment',
  'cloud-infrastructure',
  'cloud-security',
  'data-governance',
];

async function generateOGImage(service) {
  // Create canvas
  const canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  const ctx = canvas.getContext('2d');

  // Set background
  ctx.fillStyle = '#020817'; // Dark background
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // Add gradient overlay
  const gradient = ctx.createLinearGradient(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)'); // Blue
  gradient.addColorStop(1, 'rgba(236, 72, 153, 0.1)'); // Pink
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // Add company name
  ctx.font = 'bold 48px system-ui';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'left';
  ctx.fillText('Gray Ghost Data', 80, 120);

  // Add service name
  const serviceName = service
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  ctx.font = 'bold 72px system-ui';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(serviceName, 80, CANVAS_HEIGHT / 2);

  // Add tagline
  ctx.font = '32px system-ui';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('Professional Data Solutions', 80, CANVAS_HEIGHT / 2 + 60);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  const outputDir = path.join(process.cwd(), 'public/images/services');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(outputDir, `${service}-og.jpg`), buffer);
  console.log(`Generated OG image for ${service}`);
}

async function generateAllOGImages() {
  for (const service of SERVICES) {
    await generateOGImage(service);
  }
}

generateAllOGImages().catch(console.error);
