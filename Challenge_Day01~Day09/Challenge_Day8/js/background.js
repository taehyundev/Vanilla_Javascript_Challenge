const body = document.querySelector("body");
const formDiv = document.getElementById("form");
const contents = document.getElementById("form_contents");
const IMG_NUM =3;
const txt = ['js 재밌다!!', '즐거운 코딩공부', '배경 애니메이션']

function paintImage(imgnum){
    const image = new Image();
    image.src = `image/${imgnum +1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}
function changeContents(imgnum){
    contents.innerHTML = txt[imgnum]
}
function getRandom(){
    const num = Math.floor(Math.random() *3);
    return num
}

function init(){
    
    formDiv.addEventListener("click", function(){
        const random_num = getRandom()
        changeContents(random_num)
    })
    const randnum = getRandom();
    paintImage(randnum);
    changeContents(randnum)
}

init();