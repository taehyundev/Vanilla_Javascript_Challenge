var Btn = document.querySelector(".btn")
var todoDiv = document.getElementById("todolist")
var toDoTitle = "<h1>todo list</h1>"
var list = [],
    TDList = false;

function showTodo(){
    var txt =""
    for(var i =0; i <list.length; i++){
        txt += `<br> ${i+1} : ${list[i].contents}`
    }
    todoDiv.innerHTML = `${toDoTitle}${txt}`
}

function setToDo(contents){
    var ob = {"contents":contents}
    var find = false;
    for(var i =0; i< list.length;i++){
        if(list[i].contents=== ob.contents){
            find= true;
        }
    }
    if(!find) list.push(ob)
    else alert("Nop!")
    localStorage.setItem("TODO_LIST",JSON.stringify(list))
    showTodo()
    
}

function getToDo(){
    if(TDList)
        list =  JSON.parse(localStorage.getItem("TODO_LIST"))
        console.log(list)
}
function btnEventHandler(){
    var contents = document.querySelector(".contents").value
    setToDo(contents)
    document.querySelector(".contents").value = ""
    console.log(list)
}

//즉시 실행 함수
(function init(){
    if(localStorage.getItem("TODO_LIST")==null){
        //localStorage에 값이 없음
        TDList = false
    }else{
        //값이 있음
        TDList = true
        getToDo()
        showTodo()
    }
    
    Btn.addEventListener("click", btnEventHandler)
})()

