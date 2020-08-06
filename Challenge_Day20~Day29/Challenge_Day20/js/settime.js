var SBtn = document.querySelector(".start")
var clearBtn = document.querySelector(".clear")
var checkBtn = document.querySelector(".check")
var checkList = document.getElementById("check_list")
var showH = document.querySelector(".h")
var showM = document.querySelector(".m")
var showS = document.querySelector(".s")
var showMs = document.querySelector(".ms")
var checkpoint =0
var h=0,m=0,s=0,ms=0
var isStop = true;
function setNum(n){
    if(n<10)
        return `0${n}`
    else
        return `${n}`
}
function start(){
    isStop = false
    SBtn.innerHTML = "STOP"
    interval=setInterval(() => {
        ms++;
        if(ms===100){
            s++
            ms=0
        }
        if(s===60){
            s=0
            m++
        }
        if(m===60){
            m=0
            h++
        }
        if(h >0)showH.style.color = "black"
        if(m >0)showM.style.color = "black"
        showH.innerHTML = `${setNum(h)}:`
        showM.innerHTML = `${setNum(m)}:`
        showS.innerHTML = `${setNum(s)}`
        showMs.innerHTML = `.${setNum(ms)}`

}, 10);
}
function  stop(){
    isStop = true
    SBtn.innerHTML = "START"
    clearInterval(interval)
}
function clear(){
    checkList.innerHTML = ""
    clearInterval(interval)      
    h=m=s=ms=checkpoint= 0
    if(!isStop){
        isStop = true
        SBtn.innerHTML = "START"
    }
    showH.innerHTML = `00:`
    showM.innerHTML = `00:`
    showS.innerHTML = `00`
    showMs.innerHTML = `.00`
    showH.style.color = "rgb(160, 160, 160)"
    showM.style.color = "rgb(160, 160, 160)"
}
function SBtnHandler(){
    if(isStop)
        start()
    else
        stop()
}
function check(){
    var chk_h=0,chk_m=0,chk_s=0,chk_ms=0
    if(!isStop){
        if(checkList.innerHTML === "You cannot record. <br>"+"Start the stopWatch"|| checkpoint === 0) checkList.innerHTML = "[record list]<br>"
        chk_h = h
        chk_m = m
        chk_s = s
        chk_ms = ms
        checkpoint++
        checkList.innerHTML += `${checkpoint}st - ${setNum(chk_h)}:${setNum(chk_m)}:${setNum(chk_s)}.${setNum(chk_ms)}<br>`
        if(checkpoint===16) checkpoint =0
        // checkList.innerHTML = "<Record><br><br>";
    }else{
        checkList.innerHTML = "You cannot record. <br>"
                    +"Start the stopWatch";
    }
}
SBtn.addEventListener("click", SBtnHandler)
clearBtn.addEventListener("click", clear)
checkBtn.addEventListener("click", check)