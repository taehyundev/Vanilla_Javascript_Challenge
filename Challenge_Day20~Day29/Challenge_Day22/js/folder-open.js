var maxFormBtn = document.querySelector(".folder1-max")
var minFormBtn = document.querySelector(".folder1-min")
var closeFormBtn = document.querySelector(".folder1-close")
var maxFormIcon = document.querySelector(".window-set")
var folderForm = document.querySelector(".folder1-frm")
var isMax = false;
const MAX = "fa-window-maximize",
    RESTORE = "fa-window-restore"

function folderMaxForm(){
    if(!isMax){
        folderForm.style.top = "0%"
        folderForm.style.left = "0%"
        folderForm.style.width = "100%"
        folderForm.style.height = "100%"
        maxFormIcon.classList.remove(MAX)
        maxFormIcon.classList.add(RESTORE)
        isMax = true;
    }else{
        folderForm.style.top = "70px"
        folderForm.style.left = "200px"
        folderForm.style.width = "600px"
        folderForm.style.height = "400px"
        maxFormIcon.classList.remove(RESTORE)
        maxFormIcon.classList.add(MAX)
        isMax = false;
    }
}
function folderMinForm(){    
    folderForm.classList.add("hidden")
    folderIcon.classList.remove(fOpenClass)
    folderIcon.classList.add(fClass)
    fOpen = false
}
function folderCloseForm(){   
    folderForm.classList.add("hidden")
    folderIcon.classList.remove(fOpenClass)
    folderIcon.classList.add(fClass)
    folderSet.classList.add("hidden")
    folderOpen.classList.add("hidden")
    fOpen = false
}
maxFormBtn.addEventListener("click", folderMaxForm)
minFormBtn.addEventListener("click", folderMinForm)
closeFormBtn.addEventListener("click", folderCloseForm)