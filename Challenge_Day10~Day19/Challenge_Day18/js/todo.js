var Btn = document.querySelector(".btn")
var todoDiv = document.getElementById("todolist")
var toDoTitle = "<h1>todo list - Challenge_Day18</h1>"
var list = [],
    TDList = false;

//appendchild use
function showTodo(){
    todoDiv.innerHTML =toDoTitle
    for(var i =0; i < list.length; i++){
        var formSpan = document.createElement("span") 
        var contentsSpan = document.createElement("span")
        var chkBtn = document.createElement("button")
        var removeBtn = document.createElement("button")
        formSpan.classList.add("ele_frm")
        contentsSpan.classList.add("ct")
        chkBtn.classList.add("btn")
        chkBtn.classList.add("chk")
        removeBtn.classList.add("btn")
        removeBtn.classList.add("remove")
        contentsSpan.innerHTML = `Plan ${i+1} - ${list[i].contents}`
        if(list[i].check === "checked"){
            chkBtn.style.color="green"
            contentsSpan.style.textDecoration = "line-through"
        } 
        else{
            chkBtn.style.color="gray"
            contentsSpan.style.textDecoration = "none"
        }
        chkBtn.innerHTML = "✔"
        removeBtn.innerHTML = "X"
        todoDiv.appendChild(formSpan)
        formSpan.appendChild(contentsSpan)
        formSpan.appendChild(chkBtn)
        formSpan.appendChild(removeBtn)
        todoDiv.innerHTML += "<br>"
    }
}
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

    localStorage.setItem("TODO_LIST",JSON.stringify(list))
    showTodo()
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
function check(chk){
    chk.addEventListener("click",()=>{
        window.location.reload()
        var span = chk.parentNode.firstChild
        var todo_ele = chk.parentNode.firstChild.innerHTML
        var t = todo_ele.split(' ')
        t=t.splice(3,t.length-2)
        var searchname = t.join(' ')
        for(var i=0; i<list.length;i++)
        {
            if(list[i].contents == searchname){
                console.log(list[i].check)
                if(list[i].check === "checked"){            
                    list[i].check = "non-check" 
                    chk.style.color="gray"
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
function remove(e){
    e.addEventListener("click",()=>{
        window.location.reload()
        var parentNode = e.parentNode;
      //  console.log(parentNode)
        var todo_ele = e.parentNode.firstChild.innerHTML
        var t = todo_ele.split(' ')
        t=t.splice(3,t.length-2)
        var searchname = t.join(' ')  
        for(var i=0; i<list.length;i++)
        {
            if(list[i].contents === searchname){
             //   console.log(searchname)
                list.splice(i,1)
                todoDiv.removeChild(parentNode)
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
    var removeAll = document.querySelectorAll(".remove")
    for(var i =0; i <chkAll.length; i++){
        //checkBtn
        check(chkAll[i])
     
        //removeBtn
        remove(removeAll[i])
    }
    
    Btn.addEventListener("click", btnEventHandler)
})()

