const btn = document.querySelector(".btn")
var txt = document.querySelector("textarea")
var BANLIST = ["fuck","bitch","crazy","an"]
function btnEventHandler(){
    var contents = txt.value

    console.log(contents)
    for(var e of BANLIST){
        for(var i=0; i <contents.length;i++){
            var index = contents.indexOf(e)
            if(!(index === -1)){
                var t1 =contents.substring(0,index)
                var t2 =contents.substring(index+e.length)
                contents = t1+t2
            }
        }
        console.log(contents)
    }
    txt.value = contents
}

btn.addEventListener("click",btnEventHandler)