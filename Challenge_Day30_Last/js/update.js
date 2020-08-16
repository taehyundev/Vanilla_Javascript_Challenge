(function init(){
    document.querySelector(".back").addEventListener("click",()=>{
        location.href = "index.htm"
    })
    var title = document.querySelector(".title")
    var contents = document.querySelector(".contents")
    var password = document.querySelector(".password")
    var focusTable = JSON.parse(localStorage.getItem("board-focus"))

    title.value = focusTable["title"]
    contents.value = focusTable["contents"]

    var updateBtn = document.querySelector(".update-btn")
    updateBtn.addEventListener("click",()=>{
        if(password.value !== focusTable["password"]){
            alert("패스워드가 잘못되었습니다.")
            location.href ="update.htm"
        }else{
            var focus_no = JSON.parse(localStorage.getItem("board-focus"))["no"]
            var boardinfo = JSON.parse(localStorage.getItem("board-info"))
            boardinfo[focus_no]["contents"] = contents.value
            
            boardinfo[focus_no]["title"] = title.value
            //console.log(boardinfo)
            localStorage.setItem("board-info",JSON.stringify(boardinfo))
            alert("업데이트가 완료되었습니다.")
            location.href="index.htm"
        }
    })
})()