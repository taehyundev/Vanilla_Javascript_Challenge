function writeSave(key,value){
    localStorage.setItem(key,JSON.stringify(value))
}
function writeEventHandler(){
    var title = document.querySelector(".title-create").value
    var contents =  document.querySelector(".contents-create").value
    var password =  document.querySelector(".password-create").value
    var boardinfo= JSON.parse(localStorage.getItem("board-info"))
    boardinfo = boardinfo==null ? [] : boardinfo
    console.log(boardinfo)
    if(contents == "" || title== ""|| password==""){
        if(password == ""){
            alert("패스워드를 입력해주세요")
            return;
        }
        alert("빈칸입니다.")
        return;
    }
    var obj = {
        "no": boardinfo == null ? 1 : boardinfo.length,
        "title":title,
        "contents":contents,
        "password":password,
        "hit":0
    }
    boardinfo.push(obj)
    if(boardinfo === null){
        writeSave("board-info",boardinfo)
    }else{
        writeSave("board-info",boardinfo)
    }
    alert("글쓰기가 완료되었습니다.")
    location.href = "index.htm"
    
    
}

(function init(){
    document.querySelector(".write-btn").addEventListener("click",writeEventHandler)
    document.querySelector(".back").addEventListener("click",()=>{
        location.href = "index.htm" 
    })
})()