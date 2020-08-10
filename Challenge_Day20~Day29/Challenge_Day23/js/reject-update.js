var newQuestCt = document.querySelector(".new-question")
var list = []
var listNull = true
const anonKey = "anon_question"
function init(){
    var value = JSON.parse(localStorage.getItem(anonKey))
    if(value === null){
        listNull = true
    }else{
        
        list = value
        for(var i =0; i < list.length; i++){            
            if(!list[i]["is-reject"] && !list[i]["is-answer"] ){
                newQuestionCount++
            }
        }
        listNull = false
    }
    
    menu_set("r")
    menu_event()
    console.log(value)
}
init()