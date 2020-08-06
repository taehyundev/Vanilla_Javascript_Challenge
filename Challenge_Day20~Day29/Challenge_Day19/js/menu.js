const home = document.querySelector(".home"),
    menu1 = document.querySelector(".menu1"),
    menu2 = document.querySelector(".menu2"),
    menu3 = document.querySelector(".menu3"),
    contents = document.getElementById("main-contents");

const ICON_OPEN = ["fas", "fa-book-open"]
ICON_CLOSE = ["fas", "fa-book"]
BLACK = "black"

home.onmouseover = function (e) {
    n = home.querySelectorAll(".n")
    for (var i = 0; i < n.length; i++) {
        n[i].classList.add(BLACK)
    }
}
home.onmouseout = function (e) {
    n = home.querySelectorAll(".n")
    for (var i = 0; i < n.length; i++) {
        n[i].classList.remove(BLACK)
    }
}
menu1.onmouseover = function (e) {
    n = menu1.querySelectorAll(".n")
    for (var i = 0; i < n.length; i++) {
        n[i].classList.add(BLACK)
        if(i ==0){
            for(var j=0; j < ICON_CLOSE.length;j++)
                n[i].classList.remove(ICON_CLOSE[j])

            for(var j=0; j < ICON_OPEN.length;j++)
                n[i].classList.add(ICON_OPEN[j])
        }
    }
}
menu1.onmouseout = function (e) {
    n = menu1.querySelectorAll(".n")
    for (var i = 0; i < n.length; i++) {
        n[i].classList.remove(BLACK)
        if(i ==0){
            for(var j=0; j < ICON_OPEN.length;j++)
                n[i].classList.remove(ICON_OPEN[j])

            for(var j=0; j < ICON_CLOSE.length;j++)
                n[i].classList.add(ICON_CLOSE[j])
        }
    }
}
menu2.onmouseover = function (e) {
    n = menu2.querySelectorAll(".n")
    for (var i = 0; i < n.length; i++) {
        n[i].classList.add(BLACK)
        if(i ==0){
            for(var j=0; j < ICON_CLOSE.length;j++)
                n[i].classList.remove(ICON_CLOSE[j])

            for(var j=0; j < ICON_OPEN.length;j++)
                n[i].classList.add(ICON_OPEN[j])
        }
    }
}
menu2.onmouseout = function (e) {
    n = menu2.querySelectorAll(".n")
    for (var i = 0; i < n.length; i++) {
        n[i].classList.remove(BLACK)
        if(i ==0){
            for(var j=0; j < ICON_OPEN.length;j++)
                n[i].classList.remove(ICON_OPEN[j])

            for(var j=0; j < ICON_CLOSE.length;j++)
                n[i].classList.add(ICON_CLOSE[j])
        }
    }
}
menu3.onmouseover = function (e) {
    n = menu3.querySelectorAll(".n")
    for (var i = 0; i < n.length; i++) {
        n[i].classList.add(BLACK)
        if(i ==0){
            for(var j=0; j < ICON_CLOSE.length;j++)
                n[i].classList.remove(ICON_CLOSE[j])

            for(var j=0; j < ICON_OPEN.length;j++)
                n[i].classList.add(ICON_OPEN[j])
        }
    }
}
menu3.onmouseout = function (e) {
    n = menu3.querySelectorAll(".n")
    for (var i = 0; i < n.length; i++) {
        n[i].classList.remove(BLACK)
        if(i ==0){
            for(var j=0; j < ICON_OPEN.length;j++)
                n[i].classList.remove(ICON_OPEN[j])

            for(var j=0; j < ICON_CLOSE.length;j++)
                n[i].classList.add(ICON_CLOSE[j])
        }
    }
}