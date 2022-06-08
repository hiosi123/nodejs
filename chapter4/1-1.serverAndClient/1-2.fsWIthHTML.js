//서버와 클라이언트
//클라이언트가 서로 요청을 보냄
// 서는 요청을 처리


// 노드로 http 서버 만들기
// import http from 'http'
const http = require('http')
const fs = require('fs').promises

const server = http.createServer(async (req,res) => {
    //여기에 어떻게 응답할지 적습니다.
    try{
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8' })
        const data = await fs.readFile('./server2.html')    
        res.end(data)
    } catch (error){
        console.error(error)
        res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8' })
        res.end(err.message);
    }

})
    .listen(8080);

server.on('listening',() => {
    console.log('8080번 포트에서 서버 대기 중입니다.')
})
server.on('error', (error) => {
    console.error(error);
})
//포트 하나가 하나의 프로그램