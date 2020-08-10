function eventAnswer(answerbtn){
    answerbtn.addEventListener("click",()=>{
        copyAnswerBtn = answerbtn.cloneNode()
        copyAnswerBtn.innerHTML = "답하기"
        console.log(copyAnswerBtn.classList)
        copyAnswerBtn.classList.add("main-answer-btn")
        var appendPosit = answerbtn.parentNode.parentNode
        var Content = answerbtn.parentNode.parentNode.childNodes[1].innerHTML
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
            copyAnswerBtn.style.position = "relative"
            copyAnswerBtn.style.left = "90%"
            appendPosit.appendChild(textArea)
            appendPosit.appendChild(copyAnswerBtn)
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
function answerInit(){
    var answerBtn =document.querySelectorAll(".answer-btn")
    for(var i=0; i<answerBtn.length; i++){
        eventAnswer(answerBtn[i])
    }
}
answerInit()