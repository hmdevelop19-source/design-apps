import fs from 'fs';
import path from 'path';

const dir = './src';
const colorMap = {
  '#023047': '#000052',
  '#043e5c': '#000035', // hover for navy
  '#011e2c': '#000035', // hover in tailwind config
  '#FB8500': '#FCD526',
  '#e07700': '#e3be22', // hover for gold
  '#e27700': '#e3be22', // hover in tailwind config
  '#219EBC': '#00B0FB',
};

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.css')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(dir);
files.push('./tailwind.config.js');

let changedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  for (const [oldColor, newColor] of Object.entries(colorMap)) {
    // Case insensitive replacement for hex code
    const regex = new RegExp(oldColor, 'gi');
    content = content.replace(regex, newColor);
  }
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated:', file);
    changedCount++;
  }
});

console.log('Done! Changed files:', changedCount);
