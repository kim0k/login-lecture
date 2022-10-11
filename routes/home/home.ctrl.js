"use strict";

const home = (req, res) => {  //home라는 컨트롤러 함수를 만들고 , 이를 외부에서  사용
    res.render("home/index");  //이크마 스크립트의 문법
} ;
const login = (req, res) => {  //(경로, 파라미터(request(요청), response(응답))(브라우저에게 요청과 응답을 하기 위해))
    res.render("home/login"); //  view로./views를 디렉토리로 설정 했기 떄문에
};
module.exports = { // 모듈을 외부에서 사용할 수 있게 만듬
    home,  // 오브젝트 형식, 오브젝트는 키: 값 형식으로 키만 입력시 값으로 키와 같은 값이 들어간다.
    login,
};