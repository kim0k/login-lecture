"use strict";

const app =require("../app"); //상위 폴더의 app.js 불러오기
const PORT = 3000;

app.listen(PORT, () => { // () => 와 function()은 같음
    console.log("서버 가동");
}); //listen 명령어로 서버 열기 (포트, 파라미터)
