var btn1 = document.querySelector(".b1")
var btn2 = document.querySelector(".b2")
var btn3 = document.querySelector(".b3")

const BLACK = "black"
const WHITE = "white"

btn1.addEventListener("mouseover",()=>{ 
    btn1.innerHTML = "클릭하세요!"
    btn1.style.color = BLACK 
})
btn2.addEventListener("mouseover",()=>{ 
    btn2.innerHTML = "클릭하세요!"
    btn2.style.color = BLACK 
})
btn3.addEventListener("mouseover",()=>{ 
    btn3.innerHTML = "클릭하세요!"
    btn3.style.color = BLACK 
})
btn1.addEventListener("mouseout",()=>{
    btn1.innerHTML = "버튼1"
    btn1.style.color = WHITE
})
btn2.addEventListener("mouseout",()=>{
    btn2.innerHTML = "버튼2"
    btn2.style.color = WHITE
})
btn3.addEventListener("mouseout",()=>{
    btn3.innerHTML = "버튼3"
    btn3.style.color = WHITE
})