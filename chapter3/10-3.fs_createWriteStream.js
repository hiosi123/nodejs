import fs from 'fs'

const writeStream = fs.createWriteStream('./writeme2.txt')
writeStream.on('finish', () => {
    console.log('파일 쓰기 완료')
})

//나누어서 계속 보낼 수 있다, 메모리 효율적으로
writeStream.write('이 글을 씁니다 \n');
writeStream.write('한 번 더 씁니다');
writeStream.end