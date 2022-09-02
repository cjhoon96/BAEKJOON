const fs = require('fs');

const readStream = fs.createReadStream('readme4.txt');
const writeStream = fs.createWriteStream('writeme3.txt');

writeStream.on('finish', () => {
  console.log('복사완료');
});

readStream.pipe(writeStream);