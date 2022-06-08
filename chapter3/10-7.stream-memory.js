import fs from 'fs'

console.log('before:', process.memoryUsage().rss); //rss 로 메모리 체크

const readStream = fs.createReadStream('./big.txt');
const writeStream = fs.createWriteStream('./big3.txt')
readStream.pipe(writeStream);
readStream.on('end', () => {
    console.log('stream:', process.memoryUsage().rss)
})

//파일 전송 할 때는 스트림 방식이 좋다. 