const fs = require('fs');
const file = fs.createWriteStream('./big.txt');

for (let i = 0; i <= 10000000; i++) {
  file.write('1GB 의 큰 파일을 생성 \n');
}

file.end();