var save_list1 = document.querySelector(".save_list1")
var save_list2 = document.querySelector(".save_list2")
var save_list3 = document.querySelector(".save_list3")

var load_list1 = document.querySelector(".load_list1")
var load_list2 = document.querySelector(".load_list2")
var load_list3 = document.querySelector(".load_list3")

var resetBtn = document.querySelector(".reset-class-btn")
const key = ["list1","list2","list3"]
save_list1.addEventListener("click",()=>{
    localStorage.setItem(key[0],JSON.stringify(classinfo))
    alert("리스트1번에 저장이 완료되었습니다.")
    
    overlay.classList.add("hidden")
    save_class.classList.add("hidden") 
})
save_list2.addEventListener("click",()=>{
    localStorage.setItem(key[1],JSON.stringify(classinfo))
    alert("리스트2번에 저장이 완료되었습니다.")

    overlay.classList.add("hidden")
    save_class.classList.add("hidden") 
})
save_list3.addEventListener("click",()=>{
    localStorage.setItem(key[2],JSON.stringify(classinfo))
    alert("리스트3번에 저장이 완료되었습니다.")
    
    overlay.classList.add("hidden")
    save_class.classList.add("hidden") 
})
load_list1.addEventListener("click",()=>{
    var load=JSON.parse(localStorage.getItem(key[0]))
    localStorage.setItem("classinfo",JSON.stringify(load))
    location.reload(true)
})

load_list2.addEventListener("click",()=>{
    var load=JSON.parse(localStorage.getItem(key[1]))
    localStorage.setItem("classinfo",JSON.stringify(load))
    location.reload(true)
})

load_list3.addEventListener("click",()=>{
    var load=JSON.parse(localStorage.getItem(key[2]))
    localStorage.setItem("classinfo",JSON.stringify(load))
    location.reload(true)
})

resetBtn.addEventListener("click",()=>{
    localStorage.setItem("classinfo",JSON.stringify(null))
    location.reload(true)
})