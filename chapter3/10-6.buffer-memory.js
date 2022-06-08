import fs from 'fs'

console.log('before:', process.memoryUsage().rss); //rss 로 메모리 체크

const data1 = fs.readFileSync('./big.txt');
fs.writeFileSync('./big2.txt', data1);
console.log('buffer:' , process.memoryUsage().rss)