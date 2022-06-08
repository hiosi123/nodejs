//노드에서 기본적으로 4개 돌아간다. 

import crypto from 'crypto'

const pass = 'pass'
const salt = 'salt'
const start = Date.now()

crypto.pbkdf2(pass, salt, 1_000_000, 128,'sha512', () => {
    console.log('1', Date.now() - start)
})
crypto.pbkdf2(pass, salt, 1_000_000, 128,'sha512', () => {
    console.log('2', Date.now() - start)
})
crypto.pbkdf2(pass, salt, 1_000_000, 128,'sha512', () => {
    console.log('3', Date.now() - start)
})
crypto.pbkdf2(pass, salt, 1_000_000, 128,'sha512', () => {
    console.log('4', Date.now() - start)
})
crypto.pbkdf2(pass, salt, 1_000_000, 128,'sha512', () => {
    console.log('5', Date.now() - start)
})
crypto.pbkdf2(pass, salt, 1_000_000, 128,'sha512', () => {
    console.log('6', Date.now() - start)
})
crypto.pbkdf2(pass, salt, 1_000_000, 128,'sha512', () => {
    console.log('7', Date.now() - start)
})
crypto.pbkdf2(pass, salt, 1_000_000, 128,'sha512', () => {
    console.log('8', Date.now() - start)
})

//UV_THREADPOOL_SIZE=8 컴퓨터 사양에 맞게 조절을 할 수 있다. 효율적인 동시작업