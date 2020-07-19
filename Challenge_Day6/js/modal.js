var modalBtn = document.querySelector(".btn")
var cancelBtn = document.querySelector(".cancel")
var overlay  = document.querySelector(".overlay")
var modal = document.querySelector(".modal")
var DISPLAY = "hidden"
modalBtn.addEventListener("click",()=>{
    overlay.classList.remove(DISPLAY)
    modal.classList.remove(DISPLAY)
})
cancelBtn.addEventListener("click",()=>{
    overlay.classList.add(DISPLAY)
    modal.classList.add(DISPLAY)
})