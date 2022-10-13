// http를 이용한 라우터
// const http = require("http");//require 명령어를 통해 http 모듈 다운로드 , http는 내장 모듈 이므로 다운 X
// const app = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });//(정상응답코다, {보내는 형식; 해석 방법} )
//     if (req.url === "/") {
//         res.end("여기는 루트 입니다.")
//     } else if (req.url === "/login") {
//         res.end("여기는 로그인 화면 입니다.")
//     }
// }); //변수에 http.createServer를 실행시켜 변수에 넣기

// app.listen(3001, () => { // () => 와 function()은 같음
//     console.log("http로 가동된 서버입니다.");
// }); //listen 명령어로 서버 열기 (포트, 콜백)


//  모듈
const express = require("express"); //require 명령어를 통해 express 모듈 다운로드
const app = express(); // 변수에 express를 실행시켜 변수에 넣기


// 라우팅
const home = require("./src/routes/home"); //만들어둔 자바스크립트 파일은 불러온다, 폴더를 명시 해당 폴더에 있는 자바 스크립트 파일을 불러 오는것

// 앱 세팅
app.set("views", ("./src/views")); // views 세팅, 화면 뷰를 관리해줄 파일이 저장된 views를 두번쨰 파라미터로 지정
app.set("view engine","ejs") // 어떤 엔진으로 해석할지 , 뷰 엔진으로 ejs를 사용 함을 뜻함



app.use(express.static(`${__dirname}/src/public`)); // express.static를 사용하여 정적 경로 추가, 현재 디렉토리 이름(__dirname)을 가져와서 디렉토리의 /src/public 경로를 정적 경로로 추가
app.use(express.json()); 
//  json데이터를 parser해 올수 있도록 미들웨어 등록
app.use(express.urlencoded({ extended: true })); // body-parser의 urlencoded 설정 extended를 true 값으로 주게 되면
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use("/", home); // use는 미들웨어를 등록하는 메소드, "/"라는 경로로 들어오면 home으로 보내준다
//  express를 이용한 라우터
// app.get("/", (req, res) => {  //(경로, 파라미터(request(요청), response(응답))(브라우저에게 요청과 응답을 하기 위해))
//     res.render("home/index"); //  view로 ./views를 디렉토리로 설정 했기 떄문에 
// }); //경로 만들기

// app.get("/login", (req, res) => {  //(경로, 파라미터(request(요청), response(응답))(브라우저에게 요청과 응답을 하기 위해))
//     res.render("home/login"); //  view로./views를 디렉토리로 설정 했기 떄문에
// }); //경로 만들기

//브라우저가 요청한 경로로 이동해주는 라우팅 기능
module.exports = app;
 

