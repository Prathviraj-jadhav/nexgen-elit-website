const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function(file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
                arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
            }
        } else {
            if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.css')) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });

    return arrayOfFiles;
}

const files = getAllFiles('./src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    // More general regex for gradient replacement
    // Matches 'linear-gradient(135deg, #0A1628 0%, #1B2A4A 100%)'
    content = content.replace(/linear-gradient\(135deg, #0A1628 0%, #1B2A4A 100%\)/g, "'#000000'");
    
    // Sometimes it's without quotes in CSS
    // Matches linear-gradient(135deg, #0A1628 0%, #1B2A4A 100%)
    content = content.replace(/linear-gradient\(135deg, #0A1628 0%, #1B2A4A 100%\)/g, "#000000");

    // Replace borderColor assignments
    content = content.replace(/style\.borderColor = '#0A1628'/g, "style.borderColor = '#000000'");
    
    // Replace Tailwind hover classes (already done but safe to repeat)
    content = content.replace(/hover:bg-\[#1E2DE6\]/g, "hover:bg-[#000000]");
    content = content.replace(/hover:bg-\[#1e2de6\]/g, "hover:bg-[#000000]");

    if (content !== originalContent) {
        fs.writeFileSync(file, content);
        console.log(`Updated hovers in: ${file}`);
    }
});
