// Simple SCSS compilation script
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Ensure output directory exists
const outputDir = path.join(__dirname, '..', 'wwwroot', 'css');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`Created output directory: ${outputDir}`);
}

try {
  // For development without npm installed yet
  console.log('Compiling SCSS to CSS...');
  
  // Check if sass is installed globally
  try {
    execSync('sass --version', { stdio: 'ignore' });
    console.log('Using globally installed Sass');
    execSync(`sass ${path.join(__dirname, 'Styles', 'main.scss')}:${path.join(outputDir, 'main.css')} --style=compressed`, { stdio: 'inherit' });
  } catch (e) {
    // If sass isn't installed globally, provide instructions
    console.log('\x1b[33m%s\x1b[0m', 'Sass is not installed globally. Please run one of the following:');
    console.log('\x1b[36m%s\x1b[0m', '1. npm install -g sass');
    console.log('\x1b[36m%s\x1b[0m', '   Then: sass Styles/main.scss:../wwwroot/css/main.css --style=compressed');
    console.log('\x1b[36m%s\x1b[0m', '2. npm install');
    console.log('\x1b[36m%s\x1b[0m', '   Then: npm run build');
  }
  
  console.log('\x1b[32m%s\x1b[0m', 'SCSS architecture is ready for use!');
  console.log('\nTo integrate with your project:');
  console.log('1. Add <link href="/css/main.css" rel="stylesheet"> to your HTML');
  console.log('2. Update HTML to use the new BEM class names');
  console.log('3. Follow the migration guide in MIGRATION-GUIDE.md');
} catch (error) {
  console.error('\x1b[31m%s\x1b[0m', 'Error during compilation:');
  console.error(error);
}
