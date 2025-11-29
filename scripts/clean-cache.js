#!/usr/bin/env node

/**
 * Clean Next.js and Webpack cache
 * Helps resolve Windows filesystem cache issues
 */

const fs = require('fs');
const path = require('path');

const cacheDirs = [
  path.join(process.cwd(), '.next', 'cache'),
  path.join(process.cwd(), '.next', 'cache', 'webpack'),
];

function removeDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return false;
  }

  try {
    fs.rmSync(dirPath, { recursive: true, force: true, maxRetries: 3 });
    return true;
  } catch (error) {
    console.error(`Error removing ${dirPath}:`, error.message);
    return false;
  }
}

console.log('Cleaning Next.js cache...\n');

let cleaned = false;
cacheDirs.forEach((dir) => {
  if (removeDir(dir)) {
    console.log(`✓ Cleaned: ${path.relative(process.cwd(), dir)}`);
    cleaned = true;
  }
});

if (!cleaned) {
  console.log('No cache directories found to clean.');
} else {
  console.log('\n✓ Cache cleaned successfully!');
  console.log('You can now run "npm run dev" or "npm run build" again.');
}

