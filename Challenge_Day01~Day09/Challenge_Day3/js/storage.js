var result = document.getElementById("showall")
var div = document.getElementById('result')
function isKey(txtKey){
    var storage = localStorage
    for(var i =0, len = storage.length; i<len;i++){
        var k = storage.key(i)
        if(k === txtKey)
            return false;
    }
    return true
}
function setBtn(){
    var txtKey =document.querySelector(".a_key").value
    var txtValue =document.querySelector(".a_value").value
    if(isKey(txtKey)&& txtKey!="" && txtValue !=""){
        localStorage.setItem(txtKey,txtValue)
        result.innerHTML = `success input <br>${txtKey} : ${txtValue} <br> u can using the value`
    }else{
        result.innerHTML = 'u cant add value becasue value is overlap'
    }
}

function getBtn(){
    var txtKey =document.querySelector(".a_key").value
    var v = document.querySelector(".a_value")
    var txtValue  = localStorage.getItem(txtKey)
    console.log(txtValue)
    if(txtValue === null){
        result.innerHTML="No Search"
    }
    else{
        v.value =txtValue
        result.innerHTML = 'success<br> 두번째 텍스트박스에 표기되었습니다.'
    }
}
function showAll(){
    var storage = localStorage
    result.innerHTML ="[show all Storage Data]<br><br>"
    for(var i=0; i<storage.length; i++){
        var k =storage.key(i)
        var v = storage.getItem(k)
        result.innerHTML += `key : ${k}, value : ${v} <br>`;
    }
}
function clearAll(){
    var storage = localStorage
    storage.clear()
}