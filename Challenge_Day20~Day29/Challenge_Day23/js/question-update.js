var writeBtn = document.querySelector(".write-btn")
var newQuestCt = document.querySelector(".new-question")
var fin_menu = document.querySelector(".fin-question-menu")
var new_menu = document.querySelector(".new-question-menu")
var reject_menu = document.querySelector(".reject-question-menu")
var list = []
var newQuestionCount = 0
var rejectQuestionCount = 0
var finQuestionCount = 0
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
function saveStorage(l){
    localStorage.setItem(anonKey, JSON.stringify(l))
}
function menu_set(){
    
    var main_form = document.createElement("div")
    var menu_count = document.createElement("div")
    var menu_name = document.createElement("div")
    menu_count.classList.add("fin-count")
    menu_name.classList.add("fin-name")
    menu_count.innerHTML = finQuestionCount
    menu_name.innerHTML = "답변완료"
    main_form.classList.add("fin-form")
    main_form.appendChild(menu_count)
    main_form.appendChild(menu_name)
    fin_menu.appendChild(main_form)
    
    main_form = document.createElement("div")
    menu_count = document.createElement("div")
    menu_name = document.createElement("div")
    menu_count.classList.add("new-count")
    menu_name.classList.add("new-name")
    menu_count.innerHTML = newQuestionCount
    menu_name.innerHTML = "새질문"
    main_form.classList.add("new-form")
    main_form.appendChild(menu_count)
    main_form.appendChild(menu_name)
    new_menu.appendChild(main_form)

    main_form = document.createElement("div")
    menu_count = document.createElement("div")
    menu_name = document.createElement("div")
    menu_count.classList.add("reject-count")
    menu_name.classList.add("reject-name")
    menu_count.innerHTML = rejectQuestionCount
    menu_name.innerHTML = "거절질문"
    main_form.classList.add("reject-form")
    main_form.appendChild(menu_count)
    main_form.appendChild(menu_name)
    reject_menu.appendChild(main_form)

}
function init(){
    var value = JSON.parse(localStorage.getItem(anonKey))
    if(value === null){
        menu_set()
        listNull = true
    }else{
        
        list = value
        for(var i =0; i < list.length; i++){
            if(!list[i]["is-reject"] && !list[i]["is-answer"] )
                newQuestNodeAdd(list[i])
            newQuestionCount++
        }
        menu_set()
        listNull = false
    }
    console.log(value)
    writeBtn.addEventListener("click",questionUpdate)
}
init()