const express = require('express')
const path = require('path')
const app = express()

app.set('port', process.env.PORT || 3000);

//app.use 는 모든 요청에 실행 된다.
app.use((req,res, next) => {
    console.log('모든 요청에 실행하고 싶어요')
    next();
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/about', (req, res) => {
    res.send('hello express')
})


app.post('/', (req, res) => {
    res.send('hello express!');
})


//여기서는 앞에서 보내오는 주소를 받아서 그거에 맞게 이름을 변경 가능하다.
//와일드 카드나 범위가 넓은 것들은 아래에 둔다.
app.get('/category/:name', (req,res) => {
    res.send(`hello ${req.params.name}`)
})

app.listen(app.get('port'),  () => {
    console.log('익스프레스 서버 실행')
})