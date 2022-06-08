import fs from 'fs'
import zlib from 'zlib'
//파일을 조금씩 나눠서 만들어준다.
const readStream = fs.createReadStream('./readme3.txt', {highWaterMark: 16});
const zlibStream = zlib.createGzip() //중간에 보내지기전에 압축을 해준다. 
const writeStream = fs.createWriteStream('./writeme4.txt'); 
readStream.pipe(zlibStream).pipe(writeStream);
