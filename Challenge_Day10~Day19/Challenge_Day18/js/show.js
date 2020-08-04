function showlist(formDiv, formTitle, list){
    formDiv.innerHTML =formTitle
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
        formDiv.appendChild(formSpan)
        formSpan.appendChild(contentsSpan)
        formSpan.appendChild(chkBtn)
        formSpan.appendChild(removeBtn)
        formDiv.innerHTML += "<br>"
    }
}

function save(KEY, list){
    localStorage.setItem(KEY,JSON.stringify(list))
}
function check(e, list, KEY){
    e.addEventListener("click",()=>{
        window.location.reload()
        var span = e.parentNode.firstChild
        var todo_ele = e.parentNode.firstChild.innerHTML
        var t = todo_ele.split(' ')
        t=t.splice(3,t.length-2)
        var searchname = t.join(' ')
        for(var i=0; i<list.length;i++)
        {
            if(list[i].contents == searchname){
                console.log(list[i].check)
                if(list[i].check === "checked"){            
                    list[i].check = "non-check" 
                    e.style.color="gray"
                    span.style.textDecoration = "none"
                }
                else{
                    list[i].check = "checked"   
                    e.style.color="green"
                    span.style.textDecoration = "line-through"
                }
                console.log(list[i].check)
                
            }
        }
        save(KEY, list)       
    })
}
function remove(e, list,KEY){
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
               // formDiv.removeChild(parentNode)
            }
        }
        save(KEY, list)    
    })
}