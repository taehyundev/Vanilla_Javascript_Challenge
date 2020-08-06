var btn1 = document.querySelector(".b1")
var btn2 = document.querySelector(".b2")
var btn3 = document.querySelector(".b3")
var modalForm = document.getElementById("md_form")
var cancelBtn = document.querySelector(".cancel")
var confirmBtn = document.querySelector(".confirm")
var md_contents = document.querySelector(".md_contents")
var overlay = document.querySelector(".overlay")
const HIDDEN = "hidden"
var contents = ""

function openModal(contents){
    md_contents.innerHTML = contents
    overlay.classList.remove(HIDDEN)
    modalForm.classList.remove(HIDDEN)
}
function closeModal(){
    overlay.classList.add(HIDDEN)
    modalForm.classList.add(HIDDEN)
}

btn1.addEventListener("click",()=>{
    contents = `"버튼1"을 클릭하였습니다.`
    openModal(contents)
})

btn2.addEventListener("click",()=>{
    contents = `"버튼2"을 클릭하였습니다.`
    openModal(contents)
})

btn3.addEventListener("click",()=>{
    contents = `"버튼3"을 클릭하였습니다.`
    openModal(contents)
})
modalForm.addEventListener("mouseover",()=>{
    confirmBtn.style.backgroundColor = "rgb(59, 190, 59)";
})

modalForm.addEventListener("mouseout",()=>{
    confirmBtn.style.backgroundColor = "rgb(52, 71, 55)";
})

confirmBtn.addEventListener("click",()=>{
    console.log(contents + "라는 정보가 확인되었습니다.")
    closeModal()
})
cancelBtn.addEventListener("click",closeModal)