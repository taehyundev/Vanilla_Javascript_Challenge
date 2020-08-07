const clearBar = document.querySelector(".clear-bar")
function clear(){
    infoForm.classList.add(HIDDEN)
    infoForm.style.right = "-400px"
    
    windowsForm.classList.add(HIDDEN)
    windowsForm.style.bottom = "-600px"

    moreView.classList.add(HIDDEN)
    moreView.style.bottom = "-180px"

    openv = false;
    openw = false;
    openi = false;
}
clearBar.addEventListener("click",clear)