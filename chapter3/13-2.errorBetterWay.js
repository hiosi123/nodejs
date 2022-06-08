import fs from 'fs'

setInterval(() => {
    fs.unlink('./abcdefg.js', (err) => {
        if(err) {
            console.error(err);
        }
    })
},1000)