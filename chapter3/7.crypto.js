//단방향 암호화(crypto)

//암호화는 가능하지만 복호화는 불가능
//암호화: 평문을 암호로 만듦
//복호화: 암호를 평문으로 해독

//단방향 암호화의 대표 주자는 해시 기법

import crypto from 'crypto'

console.log('base62:', crypto.createHash('sha512').update('비밀번호').digest('base64'))

//pbkdf2.js

crypto.randomBytes(64, (err,buf)=> {
    const salt = buf.toString('base64');
    console.log('salt:',salt)
    crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
        console.log('password:', key.toString('base64'))
    })
})

//비대칭 암호화, 