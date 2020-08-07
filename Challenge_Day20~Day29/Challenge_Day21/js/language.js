var lan_bar = document.querySelector(".language-bar")
var lan_comments = document.querySelector(".lan-comments")
var compareTarget = "가"

lan_bar.addEventListener("click",()=>{
    if(lan_comments.innerHTML === compareTarget){
        lan_comments.innerHTML = "A"
    }else{
        lan_comments.innerHTML = "가"
    }
})