var search = document.getElementById("search")
var searchBar = document.querySelector(".search-bar")
windowsBar.addEventListener("click",()=>{
    if(!openw)
        search.onblur()
    else
        search.onfocus()
})
search.onfocus = ()=>{
    searchBar.style.border = "2px solid rgb(33, 114, 207)"
}
search.onmouseover = ()=>{
    searchBar.style.border = "2px solid rgb(165, 165, 165)"
}
search.onblur = ()=>{
    searchBar.style.borderStyle= "none"
}
search.onmouseout = ()=>{
    searchBar.style.borderStyle= "none"
}