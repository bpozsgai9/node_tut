const fs = require('fs');

const readStream = fs.createReadStream(
    './assets/fuvar.csv',
    { encoding: 'utf8' }
);

const writeStream = fs.createWriteStream(
     './assets/newFile2.txt',
     { encoding: 'utf8' }
);

//read a buffer of data
/*
readStream.on("data", (chunk) => {
    
    console.log('-------- new chunk --------');
    console.log(chunk);
    
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
});
*/


//piping
readStream.pipe(writeStream);