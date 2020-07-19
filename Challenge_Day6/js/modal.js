var modalBtn = document.querySelector(".btn")
var cancelBtn = document.querySelector(".cancel")
var modalDiv = document.querySelector(".chkmodal")
var chkbox1 = document.querySelector(".chkbox1")
var overlay  = document.querySelector(".overlay")
var modal = document.querySelector(".modal")
var DISPLAY = "hidden"
var cnt =0
modalBtn.addEventListener("click",()=>{
    overlay.classList.remove(DISPLAY)
    modal.classList.remove(DISPLAY)
})
cancelBtn.addEventListener("click",()=>{
    overlay.classList.add(DISPLAY)
    modal.classList.add(DISPLAY)
})
chkbox1.addEventListener("change",()=>{
    clearInterval(interval)
    console.log(chkbox1.checked)
    var isChecked = chkbox1.checked
    var checkedValue = chkbox1.value
    if(isChecked){
        modalDiv.classList.remove(DISPLAY)
        modalDiv.innerHTML = `${checkedValue} 가 선택되었습니다.`
    }

    var interval = setInterval(()=>{   
    cnt++
    console.log(1/cnt)
    modalDiv.style.opacity = 200 /cnt
    if(cnt > 500){
        modalDiv.classList.add(DISPLAY)
        clearInterval(interval)
        cnt =0
    }
    },10)
})