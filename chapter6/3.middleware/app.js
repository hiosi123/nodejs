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
app.use(express.json()); 
//client 에서 form submit 할때 
app.use(express.urlencoded({ extended: false })); // true 면 qs, false 면 qeurystring
app.use(cookieParser(process.env.COOKIE_SECRET));

// app.use('/', express.static(__dirname, 'public'));
// localhost:3000/ 요청 결로와 실제 경로

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
  name: 'session-cookie',
}));

const multer = require('multer');
const fs = require('fs');

try {
  fs.readdirSync('uploads');
} catch (error) {
  console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
  fs.mkdirSync('uploads');
}
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
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