const moreView = document.querySelector(".more-view-form")
const moreBar = document.querySelector(".view-more-bar")
var openv = false;
moreBar.addEventListener("click",()=>{
    if(!openv){
        clear()
        moreView.classList.remove(HIDDEN)
        moreView.style.bottom = "0px"
        openv = true
    }else{
        moreView.classList.add(HIDDEN)
        moreView.style.bottom = "-180px"
        openv = false;
    }
})