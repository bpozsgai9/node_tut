const fs = require('fs');

//read file
/*
try {
    
    fs.readFile('./docs/blog.txt', (err, data) => {
        if (err) {
            console.log('Hiba: ', err);
        }
        console.log(data.toString());
    });

} catch (err) {
    console.log('I/O hiba!');
}

console.log('last line')
*/

//write file
/*
let newContent = 'hello world';
fs.writeFile(
    './docs/blog2.txt',
    newContent,
    () => {
        console.log('File was written!')
    }
);
*/

//directory
/*
const path = './assets';
if (!fs.existsSync(path)) {
    fs.mkdir(path, (err) => {
        if (err) console.log(err);
        console.log('Created!');
    });
} else {
    fs.rmdir(path, (err) => {        
        if (err) console.log(err);
    })
    console.log('Deleted!');
}
*/

//delete file
/*
const deletePath = './docs/deleteme.txt';
if (fs.existsSync(deletePath)) {
    fs.unlink(deletePath, (err) => {
        if (err) console.log(err);
        console.log('File deleted');
    });
}
*/
















