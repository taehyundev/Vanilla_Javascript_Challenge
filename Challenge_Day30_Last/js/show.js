var focusTable = JSON.parse(localStorage.getItem("board-focus"))
var mainTable = JSON.parse(localStorage.getItem("board-info"))

function hit_update(){
    mainTable[focusTable["no"]]["hit"]=parseInt(mainTable[focusTable["no"]]["hit"]) + 1
    localStorage.setItem("board-info",JSON.stringify(mainTable))
    return mainTable[focusTable["no"]]["hit"]
}

(function init(){
    document.querySelector(".back").addEventListener("click",()=>{
        location.href = "index.htm"
    })
    var title = document.querySelector(".title")
    var contents = document.querySelector(".contents")
    var hit = document.querySelector(".hit")
    title.innerHTML = focusTable["title"]
    contents.innerHTML = focusTable["contents"]
    hit_now = hit_update()
    hit.innerHTML = hit_now


})()