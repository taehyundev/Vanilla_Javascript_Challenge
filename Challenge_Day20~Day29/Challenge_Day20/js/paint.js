//클래스로 태그 불러오기
var canvas = document.getElementById("canvas")
var red = document.querySelector(".color_red")
var chmodBtn = document.querySelector('.mode')

// 기본
var ctx = canvas.getContext("2d");
var paint = false;
var fillMode = false;
ctx.fillRect(0,0,canvas.width, canvas.height);
//move 시 선이 그려지게
function moveMoveHandler(e){
    if(!fillMode){
        const x = e.offsetX
        const y = e.offsetY
        if(!paint){
            ctx.beginPath()
            ctx.moveTo(x,y)
        }else{
            ctx.lineTo(x,y)
            ctx.stroke()
        }
    }
}
function mouseDownHandler(){
    if(fillMode){
        ctx.fillRect(0,0,canvas.width, canvas.height);
    }else
        paintStart()
}
function mouseUpHandler(){
    if(!fillMode)
        paintStop()
}
function mouseOutHandler(){
    if(!fillMode)
        paintStop()
}
//Paint Start/Stop 판별
function paintStart(){
    paint = true;
}
function paintStop(){
    paint = false;
}
function setMode(){
    if(!fillMode){
         fillMode = true;
         chmodBtn.innerHTML ='paint'

    }else{
        fillMode = false;
        chmodBtn.innerHTML ='fill'
    }
 }
function init(){
    //초기 설정
    ctx.lineWidth = 2.5;
    canvas.width = 450;
    canvas.height = 450;

    //이벤트 핸들러
    canvas.addEventListener("mousemove",moveMoveHandler)
    canvas.addEventListener("mousedown",mouseDownHandler)
    canvas.addEventListener("mouseup",mouseUpHandler)
    canvas.addEventListener("mouseout",mouseOutHandler)
}
init()