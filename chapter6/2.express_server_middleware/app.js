const express = require('express')
const path = require('path')


const app = express()

app.set('port', process.env.PORT || 3000);

//app.use 는 모든 요청에 실행 된다. 공통 미들웨어
app.use((req,res, next) => {
    console.log('모든 요청에 실행하고 싶어요')
    //next('route') - 다음꺼를 실행시킨다.
    next(); 
}, (req, res, next) => {
    try{
        console.log(asdads)
    } catch (error) {
        next (error);
    }
})

app.get('/', (req, res) => {
    //res.writeHead(200, {'Content-Type': 'application/json'});
    //res.end(JSON.stringify({hello: 'zerocho'}))

    //위에 두줄을 
    //res.json({hello: 'zerocho'})

    res.sendFile(path.join(__dirname, 'index.html'));
    console.log('hello zerocho')
})

app.get('/about', (req, res) => {
    res.send('hello express!')
})


app.post('/', (req, res) => {
    res.send('hello express!');
    
})


//여기서는 앞에서 보내오는 주소를 받아서 그거에 맞게 이름을 변경 가능하다.
//와일드 카드나 범위가 넓은 것들은 아래에 둔다.
app.get('/category/:name', (req,res) => {
    res.send(`hello ${req.params.name}`)
})

app.use((req, res, next) => {
    res.status(200).send('404 error')
})

//에러 미들 웨어는 마지막에, next 까지 붙어 있어야 error 미들 웨어가 된다.
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('에러가 발생했습니다.')
})


app.listen(app.get('port'),  () => {
    console.log('익스프레스 서버 실행')
})