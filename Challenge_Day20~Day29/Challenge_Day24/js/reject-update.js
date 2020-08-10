var writeBtn = document.querySelector(".write-btn")
var newQuestCt = document.querySelector(".new-question")
var list = []
var listNull = true
const anonKey = "anon_question"

function rejectNodeAdd(obj){
    var mainDiv = document.createElement("div")
    var userInfo = document.createElement("div")
    var userName= document.createElement("span")
    var userDate= document.createElement("span")
    var contents = document.createElement("div")
    mainDiv.classList.add("main-quest")
    userInfo.classList.add("info")
    userName.classList.add("name")
    userDate.classList.add("date")
    contents.classList.add("contents")
    userName.innerHTML = obj["question-user"]=="anon"?"익명":obj["question-user"]
    contents.innerHTML = obj["question"]
    userDate.innerHTML = obj["date"]
    userInfo.appendChild(userName)
    userInfo.appendChild(userDate)
    mainDiv.appendChild(userInfo)
    mainDiv.appendChild(contents)
    newQuestCt.appendChild(mainDiv)
    
}

function init(){
    var userinfo = JSON.parse(localStorage.getItem("userinfo"))
    if(userinfo["id"] !== "me"){
        alert("사용자가 일치하지않습니다.")
        location.href = "answer.htm"
    }else{
        console.log("login success")
        var value = JSON.parse(localStorage.getItem(anonKey))
        if(value === null){
            listNull = true
        }else{
            
            list = value
            for(var i =0; i < list.length; i++){            
                if(!list[i]["is-reject"] && !list[i]["is-answer"] ){
                    newQuestionCount++
                }else if(list[i]["is-answer"]){
                    finQuestionCount++
                }else if(list[i]["is-reject"]){
                    rejectNodeAdd(list[i])
                    rejectQuestionCount++
                }
            }
            listNull = false
        }
        
        menu_set("r")
        menu_event()
        console.log(value)
        writeBtn.addEventListener("click",questionUpdate)
    }
}
init()