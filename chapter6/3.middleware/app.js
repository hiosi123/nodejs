const express = require('express');
const morgan = require('morgan'); 
//모건은 클라이언트에서 어떤 요청이 왔는지 서버에 기록이 된다. 응답 하는데 얼마나 걸렸다
const cookieParser = require('cookie-parser');
// 쿠키 파써는
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
// 정적 파일 같은 경우는 여기서 멈추게 한다.
app.use('/', express.static(path.join(__dirname, 'public'))); //끝, 거의 모든 미들웨어들은 내부적으로 넥스트를 실행한다.
//bodyparser 을 안쓴다
//멀티 파트 데이터 형식 
app.use(express.json()); 
//client 에서 form submit 할때 
app.use(express.urlencoded({ extended: false })); // true 면 qs, false 면 qeurystring
app.use(cookieParser(process.env.COOKIE_SECRET));

// app.use('/', express.static(__dirname, 'public'));
// localhost:3000/ 요청 결로와 실제 경로

//개인마다 세션을 만들어준다,
app.use(session({
  resave: false, //보통 false 값으로
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET, //쿠키랑 같음
  cookie: {
    httpOnly: true, //자바 스크립트로 들어오는 공격을 방지함
    secure: false,
  },
  name: 'session-cookie', //connect.sid
}));

const multer = require('multer'); //폼 형태의 전송을 읽어드림
const fs = require('fs');

try {
  fs.readdirSync('uploads'); // 서버 시작 전에 먼저 실행 되는거는 sync 써도 된다.
} catch (error) {
  console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
  fs.mkdirSync('uploads');
}
const upload = multer({
  storage: multer.diskStorage({ // 멀터 안에 디스크 스토리지
    destination(req, file, done) { //어디에 저장 할꺼냐
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext); // 같은 파일이면 덮어씌워지기 때문에 Date.now() 를 해줌
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});
app.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, 'multipart.html'));
});
app.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.file);
  res.send('ok');
});

app.get('/', (req, res, next) => {
  console.log('GET / 요청에서만 실행됩니다.');
  next();
}, (req, res) => {
  throw new Error('에러는 에러 처리 미들웨어로 갑니다.')
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});