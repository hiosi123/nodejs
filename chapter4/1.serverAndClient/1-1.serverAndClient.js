//서버와 클라이언트
//클라이언트가 서로 요청을 보냄
// 서는 요청을 처리


// 노드로 http 서버 만들기
// import http from 'http'
const http = require('http')

const server = http.createServer((req,res) => {
    //여기에 어떻게 응답할지 적습니다.
    res.write('<h1>Hello Node!</h1>')
    res.write('<p>Hello Server</p>')
    res.end('<p>Hello Hongseok</p>')
})
    .listen(8080);

server.on('listening',() => {
    console.log('8080번 포트에서 서버 대기 중입니다.')
})
server.on('error', (error) => {
    console.error(error);
})
//포트 하나가 하나의 프로그램