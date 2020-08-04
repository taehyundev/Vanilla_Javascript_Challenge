var today = new Date();
var setDate  = false;

const TIME_KEY = "setDate";
function init(){
    var dateNow = today.getDate()
    console.log()
    var time = localStorage.getItem(TIME_KEY)
    if(time===null){
        localStorage.setItem(TIME_KEY, dateNow)
        setDate = true;
    }else{
        if(time != dateNow){
            console.log("같지않다.")
            localStorage.removeItem("CHECK_LIST")
            localStorage.removeItem("TODO_LIST")
            localStorage.setItem(TIME_KEY, dateNow)
            window.location.reload()
        }
        else
            console.log("같다.")
        setDate = true;
    }
}
init()