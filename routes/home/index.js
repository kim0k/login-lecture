"use strict"; // 자바 스크립트 파일을 만들떄 항상 맨 상단에 작성, 이크마 스크립트의 문법을 준수하겠다고 명시 한다는 뜻

const express = require("express"); //require 명령어를 통해 express 모듈 다운로드
const router = express.Router(); // 변수에 expres.Router를 실행시켜 변수에 넣기

const ctrl = require("./home.ctrl"); // 현재 폴드에 있는 home.ctrl 을 불러온다 

router.get("/", ctrl.home); //경로 만들기

router.get("/login", ctrl.login); //경로 만들기

module.exports = router // 라우터를 외부에서 사용할 수 있게 만듬