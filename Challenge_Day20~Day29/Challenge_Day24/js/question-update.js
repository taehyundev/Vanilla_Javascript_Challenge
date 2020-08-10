var writeBtn = document.querySelector(".write-btn")
var newQuestCt = document.querySelector(".new-question")
var list = []
var listNull = true
const anonKey = "anon_question"



function newQuestNodeAdd(obj){
    var mainDiv = document.createElement("div")
    var userInfo = document.createElement("div")
    var userName= document.createElement("span")
    var userDate= document.createElement("span")
    var contents = document.createElement("div")
    var rejectBtn = document.createElement("button")
    var answerBtn = document.createElement("button")
    var btnDiv = document.createElement("div")
    mainDiv.classList.add("main-quest")
    userInfo.classList.add("info")
    userName.classList.add("name")
    userDate.classList.add("date")
    contents.classList.add("contents")
    rejectBtn.classList.add("reject-btn")
    answerBtn.classList.add("answer-btn")
    rejectBtn.classList.add("b")
    answerBtn.classList.add("b")
    btnDiv.classList.add("btn-div")
    userName.innerHTML = obj["question-user"]=="anon"?"익명":obj["question-user"]
    contents.innerHTML = obj["question"]
    userDate.innerHTML = obj["date"]
    rejectBtn.innerHTML = "거절하기"
    answerBtn.innerHTML = "답하기"
    userInfo.appendChild(userName)
    userInfo.appendChild(userDate)
    mainDiv.appendChild(userInfo)
    mainDiv.appendChild(contents)
    btnDiv.appendChild(rejectBtn)
    btnDiv.appendChild(answerBtn)
    mainDiv.appendChild(btnDiv)
    newQuestCt.appendChild(mainDiv)
    
}
function init(){
    var userinfo = JSON.parse(localStorage.getItem("userinfo"))
    if(userinfo["id"] !== "me"){
        alert("사용자가 일치하지않습니다.")
        location.href = "answer.htm"
    }else{
        var value = JSON.parse(localStorage.getItem(anonKey))
        if(value === null){
            listNull = true
        }else{
            
            list = value
            for(var i =list.length-1; i >= 0; i--){
                if(!list[i]["is-reject"] && !list[i]["is-answer"] ){
                    newQuestNodeAdd(list[i])
                    newQuestionCount++
                }else if(list[i]["is-answer"]){
                    finQuestionCount++
                }else if(list[i]["is-reject"]){
                    rejectQuestionCount++
                }
            }
            listNull = false
        }
        
        menu_set("n")
        menu_event()
        console.log(value)
        writeBtn.addEventListener("click",questionUpdate)

    }
}
init()