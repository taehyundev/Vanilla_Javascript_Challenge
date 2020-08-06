var action1 = document.querySelector(".action1")
var btn1 = document.querySelector(".btn1")
var action2 = document.querySelector(".action2")
var btn2 = document.querySelector(".btn2")
var action3 = document.querySelector(".action3")
var btn3 = document.querySelector(".btn3")
const color = ["rgb(93, 185, 246)","rgb(246, 187, 93)","rgb(93, 246, 182)"];
var colorNum = 1
const WHITE = "white"
const GRAY = "gray"
const BLACK = "black"
function setClass(action, btn){

    action.style.backgroundColor = color[colorNum]
    btn.style.backgroundColor = color[colorNum]
    action.style.color = BLACK
    btn.style.color = BLACK

    action = document.querySelector(`.action${colorNum}`)
    btn = document.querySelector(`.btn${colorNum}`)
    colorNum++
    console.log(action)

    action.style.backgroundColor = WHITE
    btn.style.backgroundColor = WHITE
    action.style.color = GRAY
    btn.style.color = GRAY
  
}
function setColor(){
    //처음은 1번째
    console.log(colorNum)
    let action = document.querySelector(`.action${colorNum+1}`)
    let btn = document.querySelector(`.btn${colorNum+1}`)
    if(colorNum==3){
        colorNum = 0
        console.log(colorNum)
        action1.style.backgroundColor = color[colorNum]
        btn1.style.backgroundColor = color[colorNum]
        action1.style.color = BLACK
        btn1.style.color = BLACK

        action3.style.backgroundColor = WHITE
        btn3.style.backgroundColor = WHITE
        action3.style.color = GRAY
        btn3.style.color = GRAY
        colorNum++
    }else{
     setClass(action,btn)
    }
}
function initColor(){
    action1.style.backgroundColor = WHITE
    btn1.style.backgroundColor = WHITE
    
    action2.style.backgroundColor = WHITE
    btn2.style.backgroundColor = WHITE
    
    action3.style.backgroundColor = WHITE
    btn3.style.backgroundColor = WHITE

    
    action1.style.color = GRAY
    btn1.style.color = GRAY

    action2.style.color = GRAY
    btn2.style.color = GRAY

    action3.style.color = GRAY
    btn3.style.color = GRAY
}
function Handler1(){
    initColor()
    colorNum = 3
    setColor()
}
function Handler2(){
    initColor()
    colorNum = 1
    setColor()
}
function Handler3(){
    initColor()
    colorNum = 2
    setColor()
}
setInterval(setColor, 5000);
action1.addEventListener("click",Handler1)
btn1.addEventListener("click",Handler1)

action2.addEventListener("click",Handler2)
btn2.addEventListener("click",Handler2)


action3.addEventListener("click",Handler3)
btn3.addEventListener("click",Handler3)