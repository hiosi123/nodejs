import fs from 'fs/promises'

// fs.readFile('./readme.txt', (err, data) => {
//     if(err) {
//         throw err;
//     }
//     console.log(data);
//     console.log(data.toString());
// })

//파일을 읽고 생성한다.

fs.readFile('./readme.txt') 
    .then((data) => {
        console.log(data);
        console.log(data.toString());
    })
    .catch((err) => {
        throw err;
    })

fs.writeFile('./writeme.txt','글이 입력욉니다.') 
    .then(() => {
        return fs.readFile('./writeme.txt')
    })
    .then((data) => {
        console.log(data.toString())
    })
    .catch((err) => {
        throw err;
    })
