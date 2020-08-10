var idx = -1
var answer = ""
function eventAnswerForm(answerbtn){
    answerbtn.addEventListener("click",()=>{
        copyAnswerBtn = answerbtn.cloneNode()
        copyAnswerBtn.innerHTML = "답하기"
        console.log(copyAnswerBtn.classList)
        copyAnswerBtn.classList.add("main-answer-btn")
        var appendPosit = answerbtn.parentNode.parentNode
        console.log(answerbtn.parentNode.parentNode.childNodes[3])
        if((answerbtn.parentNode.parentNode.childNodes[3]==undefined)){
            var textArea = document.createElement("textarea")
            appendPosit.style.transition = "all ease 0.5s"
            appendPosit.style.height ="250px" 
            textArea.style.marginLeft = "10px"
            textArea.style.width = "98%"
            textArea.style.height = "100px"
            textArea.style.marginTop= "10px"
            textArea.style.backgroundColor = "rgb(245, 244, 244)"
            textArea.style.borderColor = "rgb(233, 233, 233)"
            textArea.placeholder = "성희롱 및 욕설은 처벌대상입니다."
            textArea.classList.add("answer-contnet")
            copyAnswerBtn.style.position = "relative"
            copyAnswerBtn.style.left = "90%"
            appendPosit.appendChild(textArea)
            appendPosit.appendChild(copyAnswerBtn) 

            var mb = document.querySelectorAll("button.main-answer-btn")
            for(var i=0; i<mb.length; i++){
                
                answerFocusing(mb[i],i)
            }
        }else{
            appendPosit.style.transition = "all ease 0.5s"
            appendPosit.style.height ="100px" 
            console.log(appendPosit.childNodes)
            appendPosit.removeChild(appendPosit.childNodes[3])
            appendPosit.removeChild(appendPosit.childNodes[3])
        }
        console.log(appendPosit)
    })
}
function eventAnswerMain(){
    answer = document.querySelectorAll("textarea")[idx+1].value
    var list = JSON.parse(localStorage.getItem("anon_question"))
    var new_list = 0
    if(answer ===""){
        alert("답변을입력해주세요")
        location.href = "new.htm"
    }else{
        for(var i=0; i <list.length;i++){
            if(!list[i]["is-answer"] && !list[i]["is-reject"]){
                if(new_list=== idx){
            
                    list[i]["answer"] = answer
                    list[i]["is-answer"] = true
                    console.log(list[i])
                    finQuestionCount++
                    saveStorage(list)
                    
                }
                new_list++
            }
        }
        console.log(answer)
        alert("답변을 완료했습니다.")
        location.href = "answer.htm"
    }
}
function answerFocusing(e, index){
    e.addEventListener("click",()=>{
        idx = index
        eventAnswerMain()
    })
}
function delAnswerForm(e,index){
    e.addEventListener("click",()=>{
        if(confirm("정말로 삭제하시겠습니까?")){
            l = JSON.parse(localStorage.getItem("anon_question"))
            var cnt =0
            for(var i=l.length-1; i>=0;i--){
                if(!l[i]["is-answer"]&&!l[i]["is-reject"]){
                    
                    if(cnt === index){
                        console.log( l[i]["is-reject"])
                        l[i]["is-reject"] = true
                        saveStorage(l)
                    }    
                    cnt ++
                }
            }
            location.href="new.htm"
        }
    })
}
function answerInit(){
    var rejectBtn =document.querySelectorAll("button.reject-btn")
    var answerBtn =document.querySelectorAll(".answer-btn")
    var answerContnet =document.querySelectorAll("textArea")
    console.log(answerBtn)
    for(var i=0; i<answerBtn.length; i++){
        eventAnswerForm(answerBtn[i])
    }
    for(var i=0; i<rejectBtn.length; i++){
        delAnswerForm(rejectBtn[i],i)
    }
    console.log(answerContnet)
}
answerInit()