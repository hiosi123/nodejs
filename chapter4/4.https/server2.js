const https = require('https');
const fs = require('fs');
//서버에서는 sync를 쓰지말아야 하는데, 써도되는 경우, 1.서버를 초기화 할때, 서버 시작되기 전에
//letsencrypt 에서 인증서를 무료로 받을 수 있다.
https.createServer({
    cert: fs.readFileSync('도메인 인증서 경로'),
    key: fs.readFileSync('도메인 비밀키 경로'),
    ca: [
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로')
    ],
}, (req,res)=> {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});;
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</P>');
})
    .listen(443, () => {
        console.log('433번 포트에서 서버 대기 중입니다.')
    })