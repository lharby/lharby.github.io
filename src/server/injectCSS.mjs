import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const indexFile = path.join(__dirname, '..', '..', 'studio-malarkey/', 'html/', 'index');
const cssFile = path.join(__dirname, '..', '..', 'app/', 'css/', 'critical.css');
const openingStr = '<!-- inject critical css --><style>';
const cssStr = fs.readFileSync(cssFile, 'utf8', (err, fileData)=> {
    if (err) {
        console.log(err);
    }
    return fileData;

});

const newStr = openingStr + cssStr;

fs.readFile(`${indexFile}.bak.html`, 'utf8', (err, fileData) => {
    if (err) { 
        console.log(err);
    }
    const result = fileData.replace(openingStr, newStr);
    fs.writeFile(`${indexFile}.html`, result, 'utf8', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Finished');
    });
});
