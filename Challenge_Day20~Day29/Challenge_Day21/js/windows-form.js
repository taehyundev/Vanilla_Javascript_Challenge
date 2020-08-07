const HIDDEN = "hidden"
const windowsForm = document.querySelector(".windows-form")
const Body = document.querySelector("body")
const windowsBar = document.querySelector(".windows-bar")
var openw = false;
windowsBar.addEventListener("click",()=>{
    if(!openw){
        clear()
        windowsForm.classList.remove(HIDDEN)
        windowsForm.style.bottom = "0px"
        openw = true
    }else{
        windowsForm.classList.add(HIDDEN)
        windowsForm.style.bottom = "-600px"
        openw = false;
    }
})