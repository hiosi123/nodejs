import fs from 'fs'

const readStream = fs.createReadStream('./readme3.txt', {highWaterMark:16})

const data = []
readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data:', Buffer.concat(data).toString())
})
readStream.on('error', (err) => {
    console.log('error:',err)
}) 