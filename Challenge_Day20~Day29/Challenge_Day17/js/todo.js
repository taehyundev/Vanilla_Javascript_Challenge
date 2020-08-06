var Btn = document.querySelector(".btn")
var todoDiv = document.getElementById("todolist")
var toDoTitle = "<h1>todo list</h1>"
var list = [],
    TDList = false;

//appendchild use
function showTodo(){
    todoDiv.innerHTML =toDoTitle
    for(var i =0; i < list.length; i++){
        var formSpan = document.createElement("span") 
        var contentsSpan = document.createElement("span")
        var chkBtn = document.createElement("button")
        formSpan.classList.add("ele_frm")
        contentsSpan.classList.add("ct")
        chkBtn.classList.add("btn")
        chkBtn.classList.add("chk")
        chkBtn.classList.add(`chk${i+1}`)
        contentsSpan.innerHTML = `${i+1} : ${list[i].contents}`
        if(list[i].check === "checked"){
            chkBtn.style.color="green"
            contentsSpan.style.textDecoration = "line-through"
        } 
        else{
            chkBtn.style.color="red"
            contentsSpan.style.textDecoration = "none"
        }
        chkBtn.innerHTML = "✔"
        todoDiv.appendChild(formSpan)
        formSpan.appendChild(contentsSpan)
        formSpan.appendChild(chkBtn)
        todoDiv.innerHTML += "<br>"
    }
}
function setToDo(contents){
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
    localStorage.setItem("TODO_LIST",JSON.stringify(list))
    showTodo()
    window.location.reload()
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
function check(chk){
    chk.addEventListener("click",()=>{
        var span = chk.parentNode.firstChild
        var todo_ele = chk.parentNode.firstChild.innerHTML
        var t = todo_ele.split(' ')
        t=t.splice(2,t.length-2)
        var searchname = t.join('')
        for(var i=0; i<list.length;i++)
        {
            if(list[i].contents == searchname){
                console.log(list[i].check)
                if(list[i].check === "checked"){            
                    list[i].check = "non-check" 
                    chk.style.color="red"
                    span.style.textDecoration = "none"
                }
                else{
                    list[i].check = "checked"   
                    chk.style.color="green"
                    span.style.textDecoration = "line-through"
                }
                console.log(list[i].check)
                
            }
        }
        
        localStorage.setItem("TODO_LIST",JSON.stringify(list))
    })
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
    var chkAll = document.querySelectorAll(".chk")
    console.log(`asdasd${chkAll}`)
    for(var i =0; i <chkAll.length; i++){
        check(chkAll[i])
    }
    Btn.addEventListener("click", btnEventHandler)
})()

