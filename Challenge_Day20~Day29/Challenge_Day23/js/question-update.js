var writeBtn = document.querySelector(".write-btn")
var newQuestCt = document.querySelector(".new-question")
var list = []
var listNull = true
const anonKey = "anon_question"

function two_digit(n){
    if(n<10){
        return `0${n}`
    }
    return `${n}`
}

function questionUpdate(){
    var writeText = document.querySelector(".write-text").value
    const timeNow = new Date()
    var year=timeNow.getFullYear(),
    month=timeNow.getMonth() + 1,
    date=timeNow.getDate();
    y = year-2000
    mn = two_digit(month)
    d = two_digit(date)

    if(writeText != ""){
        var obj = {"question":writeText,
                    "question-user":"anon",
                    "date":`${y}-${mn}-${d}`,
                    "answer":null,
                    "answer-user":"me",
                    "is-reject":false,
                    "is-answer":false
                }
        list.push(obj)
        newQuestionCount++
        saveStorage(list)
        newQuestNodeAdd(obj)
        alert("질문을 완료하였습니다!")
        document.querySelector(".write-text").value=""
    }else{
        alert("질문을 입력해주세요!")
    }
}
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
function saveStorage(l){
    localStorage.setItem(anonKey, JSON.stringify(l))
}

function init(){
    var value = JSON.parse(localStorage.getItem(anonKey))
    if(value === null){
        listNull = true
    }else{
        
        list = value
        for(var i =0; i < list.length; i++){
            if(!list[i]["is-reject"] && !list[i]["is-answer"] ){
                newQuestNodeAdd(list[i])
                newQuestionCount++
            }
        }
        listNull = false
    }
    
    menu_set("q")
    menu_event()
    console.log(value)
    writeBtn.addEventListener("click",questionUpdate)
}
init()