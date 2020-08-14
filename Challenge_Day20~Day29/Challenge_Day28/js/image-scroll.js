var body = document.querySelector("body")
const MAX_IMAGE_NUM = 3
function btnEvent(e, idx){
    e.addEventListener("click",()=>{
        var mainFrame = document.querySelector(".main-frame")
        mainFrame.src=`image/bg${idx}.jpg`
    })
}
function init(){
    for(var i=1; i<=MAX_IMAGE_NUM; i++){
        var img = document.createElement("img")
        img.src = `image/bg${i}.jpg`
        img.width = 135
        img.classList.add(`img-btn`)
        img.style.paddingRight = "15px"
        img.style.cursor = "pointer"
        body.appendChild(img)
    }
    var img = document.createElement("img")
    img.classList.add("main-frame")
    body.appendChild(img)
    var imgBtnAll =document.querySelectorAll(".img-btn")
    for(var i=0; i<imgBtnAll.length; i++){
      btnEvent(imgBtnAll[i],i+1)  
    }
}
init()