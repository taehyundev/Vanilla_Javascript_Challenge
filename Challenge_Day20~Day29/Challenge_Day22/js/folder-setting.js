const folderIcon = document.querySelector(".f1")
const folder_frm = document.querySelector(".folder1")
var folderOpen = document.querySelector(".fa-folder-open")
var folderSet = document.querySelector(".folder-set")
var f1_name = document.querySelector(".f1-name")
var folderName = document.querySelector(".folder1-name")

const fOpenClass = "fa-folder-open"
const fClass = "fa-folder"
const txtClass = "txt-change"
const st_folder_name = "folder-name"
var fOpen = false;
var isChange = false;
var foldername =""

function save(name){
    localStorage.setItem(st_folder_name,JSON.stringify(name))
}

function folderSetClickEvent(){
    if(!isChange){
        if(!fOpen){
            
            folderIcon.classList.remove(fClass)
            folderIcon.classList.add(fOpenClass)
            folderForm.classList.remove("hidden")
            folderSet.classList.remove("hidden")
            folderOpen.classList.remove("hidden")
            folderName.innerHTML = foldername
            fOpen = true
        }else{

            folderIcon.classList.add(fClass)
            folderIcon.classList.remove(fOpenClass)
            folderForm.classList.add("hidden")
            fOpen = false
        }
    }
}
function frmClickEvent(){
    if(!isChange){
        if(!fOpen){
            
            folderIcon.classList.remove(fClass)
            folderIcon.classList.add(fOpenClass)
            folderForm.classList.remove("hidden")
            folderSet.classList.remove("hidden")
            folderOpen.classList.remove("hidden")
            folderName.innerHTML = foldername
            fOpen = true
        }
    }
}

function folderNameChange(){
    console.log(isChange)
    console.log(fOpen)
    if(fOpen) alert("plz Folder Close")
    if(!isChange&&!fOpen){
        var txtBox = document.createElement("input")
        var spanBox = document.createElement("span")

        txtBox.type = "text"
        txtBox.classList.add(txtClass)
        spanBox.classList.add("f1-name")
        txtBox.value = f1_name.innerHTML 
        folder_frm.removeChild(f1_name) 
        folder_frm.appendChild(txtBox)

        const txtChange = document.querySelector(".txt-change")
        console.log(txtChange)
        isChange = true

        txtChange.addEventListener("keydown",(e)=>{
            if(e.key === "Enter"){
                var chName = txtChange.value
                save(chName)
                spanBox.innerHTML = chName
                folder_frm.removeChild(txtBox) 
                folder_frm.appendChild(spanBox)
                f1_name = document.querySelector(".f1-name")
                console.log(f1_name)
                
                foldername = JSON.parse(localStorage.getItem(st_folder_name))
                isChange = false
                f1_name.addEventListener("dblclick",folderNameChange)
            }
        })
    }   
}

function init(){
    foldername = JSON.parse(localStorage.getItem(st_folder_name))
    if(foldername===null){
        foldername = f1_name.innerHTML
    }else{
        f1_name.innerHTML = foldername
    }
    folder_frm.addEventListener("click",()=>{
        folder_frm.style.backgroundColor = "rgba(83, 162, 236, 0.459)"
    })
    folderSet.addEventListener("click",folderSetClickEvent)
    document.querySelector(".bg").addEventListener("click",()=>{
        clear()
    })
    f1_name.addEventListener("dblclick",folderNameChange)
    folder_frm.addEventListener("dblclick", frmClickEvent)
}
init()