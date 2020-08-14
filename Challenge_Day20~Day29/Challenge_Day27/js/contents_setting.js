var plusBtn = document.querySelector(".fa-plus-circle"),
    newContentsAll = document.querySelectorAll(".fa-circle"),
    containerDiv1 = document.getElementById("container").firstElementChild,
    containerDiv2= document.getElementById("container").lastElementChild;

const newContents_CLASS = ["far", "fa-circle"],
    addContents_CLASS = ["fas", "fa-plus-circle"],
    removeContents_CLASS = ["fas" ,"fa-minus-circle"];

var cnt = 0;
const c_KEY = "Container"
var first_Node = false;
function newContentsSet(e){
    //mouseover removeICON
    e.addEventListener("mouseover",()=>{
        for(var i=0; i<2; i++)
           e.classList.remove(newContents_CLASS[i])
        for(var i=0; i<2; i++)
           e.classList.add(removeContents_CLASS[i])    

    })
    //mouseout defaultICON
    e.addEventListener("mouseout",()=>{
        for(var i=0; i<2; i++)
           e.classList.remove(removeContents_CLASS[i]) 
        for(var i=0; i<2; i++)
           e.classList.add(newContents_CLASS[i]) 
    })
    e.addEventListener("click",()=>{
        console.log(e)
        e.parentNode.removeChild(e)
        cnt--;
        if(cnt >=9){
            containerDiv2.appendChild(plusBtn)
        }
    })
}

function contents_Add(){
    const ICON_TAG = document.createElement("i")
    var copy_plusBtn = plusBtn.cloneNode(true);
    for(var i=0;i<newContents_CLASS.length;i++)
        ICON_TAG.classList.add(newContents_CLASS[i])
    //default set
    ICON_TAG.classList.add("contents")
    console.log(plusBtn)
    
    cnt ++
    if(cnt >= 5){
        if(cnt ==5 ){
            containerDiv1.removeChild(plusBtn)
            containerDiv1.appendChild(ICON_TAG)
            containerDiv2.appendChild(copy_plusBtn)
        }else{
            if(cnt == 10){
                containerDiv2.removeChild(plusBtn)
                containerDiv2.appendChild(ICON_TAG)
            }else{
                containerDiv2.removeChild(plusBtn)
                containerDiv2.appendChild(ICON_TAG)
                containerDiv2.appendChild(copy_plusBtn)
            }
        }
    }else{
        containerDiv1.removeChild(plusBtn)
        containerDiv1.appendChild(ICON_TAG)
        containerDiv1.appendChild(copy_plusBtn)
    }
    newContentsAll = document.querySelectorAll(".fa-circle")
    for(var i=0; i<newContentsAll.length;i++){
        //middle Event Control
        newContentsSet(newContentsAll[i])
    }
    plusBtn = copy_plusBtn
    plusBtn.addEventListener("click",contents_Add)
}

(function init(){
    console.log("start!")
    //new Contents
    plusBtn.addEventListener("click",contents_Add)
    console.log(newContentsAll)
    for(var i=0; i<newContentsAll.length;i++){
        //middle Event Control
        newContentsSet(newContentsAll[i])
    }
})()
