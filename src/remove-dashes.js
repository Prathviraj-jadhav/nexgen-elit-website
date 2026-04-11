const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../src');

function walk(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      walk(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      // Replace em-dash + space with an empty string or single space?
      // User said: Remove this "— "
      // We will replace "— " with "" (empty string)
      if (content.match(/[\u2014\u2013] /)) {
        console.log(`Updating ${filePath}...`);
        const updatedContent = content.replace(/[\u2014\u2013] /g, '');
        fs.writeFileSync(filePath, updatedContent, 'utf8');
      }
    }
  });
}

walk(targetDir);
console.log('Done.');
