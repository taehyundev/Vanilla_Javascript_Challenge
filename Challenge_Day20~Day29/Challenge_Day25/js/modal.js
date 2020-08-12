var setBtn = document.querySelector(".setting-class-btn")
var saveBtn = document.querySelector(".save-class-btn")
var loadBtn = document.querySelector(".loading-class-btn")
var resetBtn = document.querySelector(".reset-class-btn")
var overlay = document.getElementById("overlay")
var setting_class = document.querySelector(".setting_class")
var save_class = document.querySelector(".save_class")
var load_class = document.querySelector(".load_class")
var cancelBtnAll = document.querySelectorAll(".cb")
setBtn.addEventListener("click",()=>{
    overlay.classList.remove("hidden")
    setting_class.classList.remove("hidden")    
})

saveBtn.addEventListener("click",()=>{
    overlay.classList.remove("hidden")
    save_class.classList.remove("hidden") 
})

loadBtn.addEventListener("click",()=>{
    overlay.classList.remove("hidden")
    load_class.classList.remove("hidden") 

})
function cancelEvent(e,i){
    e.addEventListener("click",()=>{
        if(i===0){
            overlay.classList.add("hidden")
            setting_class.classList.add("hidden")
        }else if(i===1){
            overlay.classList.add("hidden")
            save_class.classList.add("hidden")
        }else{
            overlay.classList.add("hidden")
            load_class.classList.add("hidden") 
        }
    })
}
function init(){
    for(var i=0;i<cancelBtnAll.length;i++){
        cancelEvent(cancelBtnAll[i],i)
    }
}
init()
