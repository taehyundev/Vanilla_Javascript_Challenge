const spanCommnets = document.querySelector(".timer-comments")

function two_digit(n){
    if(n<10){
        return `0${n}`
    }
    return `${n}`
}
function getTime(){
    //reset을 위해서
    const timeNow = new Date()

    // 년 월 일
    var year=timeNow.getFullYear(),
    month=timeNow.getMonth() + 1,
    date=timeNow.getDate();

    // 시간
    var time = [timeNow.getHours(),timeNow.getMinutes()];

    // AM,PM
    var time_set = "오전";
    var h="", m="";
    var mn="",d=""
    if(time[0] > 12){
        time_set = "오후"
        time[0] = time[0] - 12
    }else{
        if (time[0] === 0) time[0] = 12
    }
    //2자리로 변경
    h = two_digit(time[0])
    m = two_digit(time[1])

    //2자리로 변경
    mn = two_digit(month)
    d = two_digit(date)

    var rtnTime = `${time_set} ${h}:${m}<br>${year}-${mn}-${d}`
    spanCommnets.innerHTML = rtnTime
}
(function init(){
    setInterval(getTime,1000)
})()