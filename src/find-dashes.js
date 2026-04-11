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
            if (file.endsWith('.ts') || file.endsWith('.tsx')) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });

    return arrayOfFiles;
}

const files = getAllFiles('./src');
const dashChars = [
    '\u2014', // em dash
    '\u2013', // en dash
    '\u2012', // figure dash
    '\u2015'  // horizontal bar
];

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    let hasDash = false;
    dashChars.forEach(char => {
        if (content.includes(char)) {
            hasDash = true;
        }
    });

    if (hasDash) {
        console.log(`Found dash in: ${file}`);
        // Optionally print lines
        const lines = content.split('\n');
        lines.forEach((line, index) => {
            dashChars.forEach(char => {
                if (line.includes(char)) {
                    console.log(`  L${index + 1}: ${line.trim()}`);
                }
            });
        });
    }
});
