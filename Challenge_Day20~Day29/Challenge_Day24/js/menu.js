var fin_menu = document.querySelector(".fin-question-menu")
var new_menu = document.querySelector(".new-question-menu")
var reject_menu = document.querySelector(".reject-question-menu")

var newQuestionCount = 0
var rejectQuestionCount = 0
var finQuestionCount = 0

function menu_set(set){
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
    if(set==="a"){
        main_form.classList.add("select")
    }
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
    if(set==="n"){
        main_form.classList.add("select")
    }
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
    if(set==="r"){
        main_form.classList.add("select")
    }
    reject_menu.appendChild(main_form)

}

function menu_event(){
    var fin_menu_f = document.querySelector(".fin-form")
    var new_menu_f = document.querySelector(".new-form")
    var reject_menu_f = document.querySelector(".reject-form")
    reject_menu_f.addEventListener("click",()=>{
        location.href="reject.htm";
    })
    new_menu_f.addEventListener("click",()=>{
        location.href="new.htm";
    })
    fin_menu_f.addEventListener("click",()=>{
        location.href="answer.htm";
    })
}