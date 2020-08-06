const sliderForm = document.querySelector(".sd_frm")
const sliderContents = document.querySelector(".sd_ct")
const bgColor = ["white", "blue", "green"]
const txtColor = ["black","white","white"]
var bgNum =0
function setBgColor(){
    sliderForm.style.backgroundColor = bgColor[bgNum]
    sliderContents.style.color = txtColor[bgNum]
}
function setBgContents(){
    sliderContents.innerHTML = `${bgNum+1} 번째 색`
}
setBg = ()=>{
    setBgColor()
    setBgContents()
    bgNum++
    if(bgNum>2) bgNum =0
}

setInterval(setBg,2000)