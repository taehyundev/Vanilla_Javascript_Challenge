var boardTable = document.getElementById("notice-board");
//제목
var table_length = 0;
var menu = ["no", "board-name", "update", "remove", "visit-num"];
var tableMenuValue = ["번호","제목","수정","삭제","조회수"];

function focusWrite(e, idx){
    e.addEventListener("click",()=>{
        var no = e.parentNode.firstChild.innerHTML
        var boardinfo= JSON.parse(localStorage.getItem("board-info"))
        localStorage.setItem("board-focus",JSON.stringify(boardinfo[no]))
        location.href = "show.htm"
    })
}
function focusUpdate(e, idx){
    e.addEventListener("click",()=>{
        var boardinfo= JSON.parse(localStorage.getItem("board-info"))
        localStorage.setItem("board-focus",JSON.stringify(boardinfo[idx]))
        
        location.href = "update.htm"
    })
}
function removeElement(e,idx){
    e.addEventListener("click",()=>{
        if(confirm("정말로 삭제하시겠습니까?")){
            var pwd = prompt("비밀번호를 입력해주세요")
            var boardinfo= JSON.parse(localStorage.getItem("board-info"))
            if(boardinfo[idx]["password"]===pwd){
                boardinfo.splice(idx,1)
                for(var i=0; i<boardinfo.length;i++){
                    boardinfo[i]["no"] = i
                }
                localStorage.setItem("board-info",JSON.stringify(boardinfo))
                alert("성공적으로 삭제되었습니다.")
                location.href = "index.htm"
            }
        }
    })
}


(function makeBoard(){
    for(var i=0; i< 1;i++){
        var tr = document.createElement("tr")
        if(i==0){
            for(var j=0; j < menu.length; j++){
                var td = document.createElement("td")
                td.classList.add(`${menu[j]}-m`)
                td.innerHTML = tableMenuValue[j]
                tr.appendChild(td)
            }
            boardTable.appendChild(tr)
        }
    }
    //내용
    var boardinfo= JSON.parse(localStorage.getItem("board-info"))
    if(boardinfo !== null){
        for(var i=0; i< boardinfo.length;i++){
            var tr = document.createElement("tr") 
            for(var j=0; j < menu.length; j++){
                var td = document.createElement("td")
                td.classList.add(menu[j])
                if(j==0) td.innerHTML = boardinfo[i]["no"]
                else if(j==1){
                    td.innerHTML = boardinfo[i]["title"]
                    td.style.cursor = "pointer"
                }else if(j==2){
                    td.innerHTML = "<i class='fas fa-edit'></i>"
                }else if(j==3){
                    td.innerHTML = "<i class='fas fa-minus-circle'></i>"
                }
                else if(j==menu.length-1) td.innerHTML = boardinfo[i]["hit"]
                tr.appendChild(td)
            }
            boardTable.appendChild(tr)
        }
    }
    document.querySelector(".create-board").addEventListener("click",()=>{
        location.href = "create.htm"
    })
    var boardListAll = document.querySelectorAll(".board-name")
    for(var i=0;i<boardListAll.length;i++){
        focusWrite(boardListAll[i],i)
    }
    var removeBtn = document.querySelectorAll(".fa-minus-circle")
    for(var i=0;i<removeBtn.length;i++){
        removeElement(removeBtn[i],i)
    }
    var updateBtn = document.querySelectorAll(".fa-edit")
    for(var i=0;i<updateBtn.length;i++){
        focusUpdate(updateBtn[i],i)
    }
})()