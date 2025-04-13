// Force Cloudflare to ignore root package.json
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('======= FORCING WEBSITE-ONLY BUILD =======');

// Check if we're in the right directory
const currentDir = process.cwd();
console.log(`Current directory: ${currentDir}`);

// Temporarily modify the root package.json to disable the prepare script
console.log('\n======= DISABLING PREPARE SCRIPT =======');
try {
  // Read the package.json file
  const packageJsonPath = path.join(currentDir, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // Save the original scripts
  const originalScripts = { ...packageJson.scripts };
  console.log('Original scripts:', JSON.stringify(originalScripts, null, 2));
  
  // Modify scripts to bypass problematic ones
  packageJson.scripts = {
    ...packageJson.scripts,
    optimize: 'echo "Skipping optimize script in Cloudflare environment"',
    build: 'echo "Skipping build script in Cloudflare environment"',
    prepare: 'echo "Skipping prepare script in Cloudflare environment"'
  };
  
  // Write the modified package.json
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('Modified package.json to bypass problematic scripts');
} catch (error) {
  console.error('Error modifying package.json:', error);
  // Continue anyway
}

// Force navigate to website directory
console.log('\n======= MOVING TO WEBSITE DIRECTORY =======');
process.chdir(path.join(currentDir, 'website'));
console.log(`New working directory: ${process.cwd()}`);
console.log('Website directory contents:');
console.log(execSync('ls -la').toString());

// Clean existing dist folder if it exists
console.log('\n======= CLEANING DIST FOLDER =======');
if (fs.existsSync('./dist')) {
  execSync('rm -rf ./dist');
  console.log('Removed existing dist folder');
}

// Install dependencies directly in the website folder only
console.log('\n======= INSTALLING WEBSITE DEPENDENCIES DIRECTLY =======');
execSync('npm install --no-fund --no-audit', { stdio: 'inherit' });
// Alternative if npm doesn't work: execSync('pnpm install --no-frozen-lockfile', { stdio: 'inherit' });

// Run build directly
console.log('\n======= BUILDING WEBSITE DIRECTLY =======');
execSync('npm run build', { stdio: 'inherit' });
// Alternative: execSync('pnpm build', { stdio: 'inherit' });

console.log('\n======= BUILD COMPLETED SUCCESSFULLY =======');
console.log('Dist folder contents:');
console.log(execSync('ls -la ./dist').toString());

// Confirm success to Cloudflare
process.exit(0);