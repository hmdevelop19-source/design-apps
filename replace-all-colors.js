import fs from 'fs';
import path from 'path';

const dir = './src';
const colorMap = {
  '#011c29': '#000020',
  '#044c70': '#000075',
  '#245171': '#1a1a75',
  '#517a95': '#333399',
  '#86a7bc': '#6666b3',
  '#b0c6d2': '#9999cc',
  '#FFB703': '#FCD526'
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
    const regex = new RegExp(oldColor, 'gi');
    content = content.replace(regex, newColor);
  }
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated:', file);
    changedCount++;
  }
});

console.log('Done mapping remnants! Changed files:', changedCount);
