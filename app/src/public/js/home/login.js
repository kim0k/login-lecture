"use strict";
const id  = document.querySelector("#id")
const psword = document.querySelector("#psword") // 질의 선택자, 두번쨰 파라미터로 넘어오는 선택자를 통해서 html의 값을 가져올 수 있다. 선택자는 html의 태그의 선택자를 말함 임의로 부여 가능
const loginBtn = document.querySelector("button")
//Dom(document object model) 문서 객체 모델 일종의 인터페이스, 자바스크립트에서 html에 존재하는 데이터를 가져와 제어 가능

loginBtn.addEventListener("click", login);

function login(){
    const req = {  // 오브젝트 형식으로 req(요쳥) 변수에 저장
        id : id.value,
        psword : psword.value,
    };
    //fetch를 사용하여 전달 어떤 경로로 전달 할지를 정해 줘야함 서버랑 프론트랑 어떤 경로를 통해저 주고 받을지 정해줘야함
    // 경로는 서버 개발자가 설계 프론트 개발자가 해당 경로를 요청하기 전에 해당 경로에 API가 만들어져 있어야 한다.
    //routes/index.js에 API가 만들어져 있지만 id와 psword를 받을 Api는 만들어져있지 않다.
    
    fetch("/login", {    // 경로, 두번쨰 파라미터로 전달할 데이터를 보내줄수 있다. 오브젝트 형식
        method: "POST", //데이터만 전달하면 안되고 body를 통해서 데이터를 전달할 떄에는 http의 메소드인 POST를 사용하여 데이터를 전송 restful API와 관련된것
        headers: { //내가 전달하는 데이터가 json형식 데이터 라는 것은 알려줘야함 헤더를 통해 표현, 오브젝트로 전달
            "Content-Type": "application/json", //데이터의 타입 명시
        },
        body: JSON.stringify(req), // json형태로 보내주기 위해 감싸줘야함, json.stringify메소드를 이용해 오브젝트를 감싸줌 json.stringify메소드는 오브젝트를 문자열로 바꿔주는 메소드
    });
    //데이터가 서버로 전달, 이러한 데이터를 서버에서 받으려면 로그인이라는 경로, 포스트 메소드로 데이터를 받을수 있는 API가 마련 되어 있어야 한다.
    //서버에는 로그인에 대한 경로 는 있는데 겟이라는 메소드로 받는 API만 있다. POST로도 해당 받을수 있는 API가 마련되어 있어야 한다.
}
