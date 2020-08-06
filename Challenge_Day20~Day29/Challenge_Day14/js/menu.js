var btn1 = document.querySelector(".b1")
var it = document.querySelector(".it")
var menuDiv = document.querySelector(".menu")
var isOpen = false;
function itHandler(){
    if(isOpen){
        menuDiv.style.left = "-550px";
        isOpen = false;
    }
    else{
        menuDiv.style.left = "0px";
        isOpen = true;
    }
}
it.addEventListener("click",itHandler)