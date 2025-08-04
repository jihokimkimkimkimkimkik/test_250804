// 아이디가 circle인 요소를 찾아서 저장
const circle = document.querySelector("#circle");
//태그명인 article인 요소를 찾아서 저장
const article = document.querySelectorAll("article");

for(let el of article){
    el.addEventListener("mouseenter",e=>{
        //article에 마우스를 올리면 부모인 #circle의 anmation-plau-state 값을 pause로 변경
        circle.style.animationPlayState="paused";
});

el.addEventListener("mouseleave",e=>{
    //article에 마우스를 올리면 부모인 #circle의 anmation-plau-state 값을 pause로 변경
    circle.style.animationPlayState="running";
});
}
