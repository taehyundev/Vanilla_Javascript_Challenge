var checkedDiv = document.getElementById("checked-list")

var checkList = [],
    checkTitle = "<h1>checked list - Challenge_Day18</h1>",
    TDList = false;

const CHK_KEY = "CHECK_LIST",
      KEY =  "TODO_LIST";
      
var listAll = JSON.parse(localStorage.getItem(KEY))

//toDO list 를 기반으로 check list localstorage 구성
function getCheckList(){
    //console.log(listAll)
    for(var i=0; i<listAll.length; i++){
        if(listAll[i].check === "checked"){
            checkList.push({
                "contents":listAll[i].contents,
                "check" : listAll[i].check
            })
        }
    }
    //console.log(checkList)
    save(CHK_KEY,checkList)
}

(function init(){
    getCheckList()
    if(localStorage.getItem(KEY) === null||localStorage.getItem(CHK_KEY) === null ||checkList.length===0){
        TDList = false;
        checkedDiv.innerHTML = `${checkTitle} <br>오늘 완료된 플랜이 없습니다.`
    }else{
        TDList = true;
        showlist(checkedDiv,checkTitle,checkList)
    }
    var chkAll = document.querySelectorAll(".chk")
    var removeAll = document.querySelectorAll(".remove")
    for(var i =0; i <chkAll.length; i++){
        //checkBtn
        check(chkAll[i],listAll,KEY)
        //removeBtn
        remove(removeAll[i],listAll,KEY)
    }
})()