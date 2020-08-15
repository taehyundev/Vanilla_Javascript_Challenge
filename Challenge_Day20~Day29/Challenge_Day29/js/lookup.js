var lookupSpan = document.querySelector(".look-up-num")
var key = ["look-up", "look-up-time"]

var cnt = 0
function save(key,value){
    localStorage.setItem(key, JSON.stringify(value))
}

(function init(){
    var tmp =  JSON.parse(localStorage.getItem(key[0]))
    var tmp1 = JSON.parse(localStorage.getItem(key[1]))
    const time =new Date()
    console.log(tmp1)
    if(tmp1 !== null&& tmp1 !== time.getDate()){
        tmp = null
        save(key[1], time.getDate())
    }else{
        save(key[1], time.getDate())
    }

    if(tmp !== null){
        cnt = tmp
    }
    cnt++
    lookupSpan.innerHTML = `visit num : ${cnt}`
    save(key[0],cnt)
})()