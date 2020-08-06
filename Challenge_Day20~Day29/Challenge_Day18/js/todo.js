//toDo Option
var Btn = document.querySelector(".btn")
var todoDiv = document.getElementById("todolist")
var toDoTitle = "<h1>todo list - Challenge_Day18</h1>"
var list = [],
    TDList = false;
    //TDList 가 todo 존재 유무

//check Option
const KEY = "TODO_LIST"


function setToDo(contents){
    if(contents !== ""){
        var ob = {"contents":contents,
                "check":"non-check"}
        var find = false;
        for(var i =0; i< list.length;i++){
            if(list[i].contents=== ob.contents){
                find= true;
            }
        }
        if(!find) list.push(ob)
        else alert("Nop!")
    }else alert("Nop!")
    save(KEY,list)
    showlist(todoDiv, toDoTitle, list)
}

function getToDo(){
    if(TDList)
        list =  JSON.parse(localStorage.getItem("TODO_LIST"))
        console.log(list)
}
function btnEventHandler(){
   window.location.reload()
    var contents = document.querySelector(".contents").value
    setToDo(contents)
    document.querySelector(".contents").value = ""
    console.log(list)
}
//즉시 실행 함수
(function init(){
    if(localStorage.getItem("TODO_LIST")==null || JSON.parse(localStorage.getItem("TODO_LIST")).length ===0){
        TDList = false
        todoDiv.innerHTML = `${toDoTitle} <br><h3>오늘의 플랜을 추가해주세요!</h3>`
    }else{
        TDList = true
        getToDo()
        showlist(todoDiv, toDoTitle, list)
    }    
    var chkAll = document.querySelectorAll(".chk")
    var removeAll = document.querySelectorAll(".remove")
    for(var i =0; i <chkAll.length; i++){
        //checkBtn
        check(chkAll[i],list,KEY)
        //removeBtn
        remove(removeAll[i],list, KEY)
    }
    
    Btn.addEventListener("click", btnEventHandler)
    document.onkeydown = (e)=>{
        if(e.keyCode===13)
            btnEventHandler()
    }  
})()

