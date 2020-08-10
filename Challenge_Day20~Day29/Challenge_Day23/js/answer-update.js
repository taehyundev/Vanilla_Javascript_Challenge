var writeBtn = document.querySelector(".write-btn")
var newQuestCt = document.querySelector(".new-question")
var list = []
var listNull = true
const anonKey = "anon_question"
function newAnserNodeAdd(obj){
    var mainDiv = document.createElement("div")
    var userInfo = document.createElement("div")
    var userName= document.createElement("span")
    var userDate= document.createElement("span")
    var profile = document.createElement("div")
    var profile_contents = document.createElement("div")
    var answerName = document.createElement("div")
    //추후 추가
    var answerTime = document.createElement("div")
    var icon = document.createElement("img")
    var answer_contents = document.createElement("div")
    var contents = document.createElement("div")
    mainDiv.classList.add("main-fin")
    userInfo.classList.add("info")
    userName.classList.add("name")
    userDate.classList.add("date")
    contents.classList.add("contents")
    icon.src = "image/ask_icon.png"
    icon.width = "40"
    icon.height = "40"
    answer_contents.style.marginLeft ="10px"
    icon.style.marginLeft = "12px"
    icon.style.marginTop = "8px"
    answerName.style.fontSize = "12px"
    profile_contents.style.position = "relative"
    profile_contents.style.top = "-45px"
    profile_contents.style.left = "60px"
    userName.innerHTML = obj["question-user"]=="anon"?"익명":obj["question-user"]
    contents.innerHTML = obj["question"]
    answerName.innerHTML = obj["answer-user"]
    answer_contents.innerHTML = obj["answer"]
    userInfo.appendChild(userName)
    userInfo.appendChild(userDate)
    mainDiv.appendChild(userInfo)
    mainDiv.appendChild(contents)
    profile.appendChild(icon)
    
    profile_contents.appendChild(answerName)
    profile.appendChild(profile_contents)
    //시간은 추후 추가
    mainDiv.appendChild(profile)
    mainDiv.appendChild(answer_contents)

    newQuestCt.appendChild(mainDiv)
    
}

function init(){

    var value = JSON.parse(localStorage.getItem(anonKey))
    if(value === null){
        listNull = true
    }else{
        
        list = value
        for(var i =list.length-1; i >= 0; i--){            
            if(!list[i]["is-reject"] && !list[i]["is-answer"] ){
                newQuestionCount++
            }else if(list[i]["is-answer"]){
                
                newAnserNodeAdd(list[i])
                finQuestionCount++
            }else if(list[i]["is-reject"]){
                rejectQuestionCount++
            }
        }
        listNull = false
    }
    
    menu_set("a")
    menu_event()
    console.log(value)    
    writeBtn.addEventListener("click",questionUpdate)
    
}
init()