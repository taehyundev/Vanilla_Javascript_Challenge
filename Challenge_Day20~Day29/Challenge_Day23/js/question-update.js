var writeBtn = document.querySelector(".write-btn")
var list = []
var newQuestionCount = 0
var listNull = true
const anonKey = "anon_question"

function questionUpdate(){
    var writeText = document.querySelector(".write-text").value
    if(writeText != ""){
        var obj = {"question":writeText,
                    "question-user":"anon",
                    "answer":null,
                    "answer-user":"me"
                }
        list.push(obj)
        newQuestionCount++
        saveStorage(list)
    }else{
        alert("질문을 입력해주세요!")
    }
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
        listNull = false
    }
    console.log(value)
    writeBtn.addEventListener("click",questionUpdate)
}
init()