const infoForm = document.querySelector(".info-form")
const infoBar = document.querySelector(".info-bar")
var openi = false;
infoBar.addEventListener("click",()=>{
    if(!openi){
        clear()
        infoForm.classList.remove(HIDDEN)
        infoForm.style.right = "0px"
        openi = true
    }else{
        infoForm.classList.add(HIDDEN)
        infoForm.style.right = "-400px"
        openi = false;
    }
})