var select_day = document.querySelector(".day")
var select_startClass = document.querySelector(".get-start-class")
var select_finClass = document.querySelector(".get-fin-class")
var settingBtn = document.querySelector(".calendar-setting")
const select_day_menuName = [
    "요일선택",
    "월",
    "화",
    "수",
    "목",
    "금",
    "토",
    "일",
]
const select_day_menuValue = [
    "",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
    "sun",
]
const color = [
    "rgb(151, 151, 231)",
    "rgb(167, 231, 151)",
    "rgb(231, 223, 151)",
    "rgb(231, 180, 151)",
    "rgb(199, 151, 231)",
    "rgb(231, 151, 155)"
]
var classinfo = []
const select_class_num = [
    "",
    1,2,3,4,5,6,7,8,9,10,11,12
]
function removeTable(day,r_s,r_f){
    for(var i=r_s; i<=r_f; i++){
        var r_class = `${day}-${i}`
        console.log(`td.${r_class}`)
        var get_r_class = document.querySelector(`td.${r_class}`)
        console.log(get_r_class.parentNode.removeChild(get_r_class))
        console.log("a")
    }
}
function save(){
    localStorage.setItem("classinfo",JSON.stringify(classinfo))
}
function makeSubjectRange(day, start, fin, sub, color, is_save){
    console.log(classinfo)
    var range = fin-start+1
    if(range <= 0){
        alert("범위를 정확히 설정해주세요")
    }else{
        var startClass = `${day}-${start}`
        var finClass = `${day}-${fin}`
        console.log(range)
        console.log(startClass)
        console.log(finClass)
        if(start!=fin){
            console.log(fin)
            removeTable(day,parseInt(start)+1,fin)
        }
        var getStartclass = document.querySelector(`.${startClass}`)
        console.log(getStartclass)
        getStartclass.rowSpan = range
        getStartclass.style.backgroundColor= color
        getStartclass.innerHTML = sub
        getStartclass.style.verticalAlign= "top";
        getStartclass.style.textAlign= "left";
        getStartclass.style.paddingLeft= "6px";
        getStartclass.style.color = "black";
        getStartclass.style.fontWeight = "bold"
        getStartclass.style.fontSize = "9px"
        if(is_save){  
            var obj = {
                "day":day,
                "start":start,
                "fin":fin,
                "sub":sub,
                "color":color
            }
            console.log(`dasd ${classinfo}`)
            classinfo.push(obj)
            save()
        }
    }
}

function select_menu(){
    console.log(select_day)
    for(var i=0;i<8;i++){
        var option  = document.createElement("option")
        if(i==0) option.value =""
        else option.value = select_day_menuValue[i]
        
        option.innerHTML = select_day_menuName[i]
        select_day.appendChild(option)
    }
    for(var i=0; i<=1; i++){
        for(var j=0;j<13;j++){
            var option  = document.createElement("option")
            if(j==0) option.value =""
            else option.value = select_class_num[j]
            
            if(j==0 && i==0)
                option.innerHTML = "시작교시"
            else if(j==0 && i==1)
                option.innerHTML = "마지막교시"
            else
                option.innerHTML = select_class_num[j]

            if(i==0) select_startClass.appendChild(option)
            else select_finClass.appendChild(option)
        }
    }
    var list = JSON.parse(localStorage.getItem("classinfo"))
    if(list!=null){
        classinfo = list
    }
    settingBtn.addEventListener("click",()=>{
        var day = select_day.options[select_day.selectedIndex].value
        var startValue =  select_startClass.options[select_startClass.selectedIndex].value
        var finValue = select_finClass.options[select_finClass.selectedIndex].value
        var subName = document.querySelector(".subject-name").value
        var gcolor = ""
        if(list== null) gcolor = color[0]
        gcolor = color[(classinfo.length%6)]
        if(subName ==="")
            alert("과목 이름을 제대로 표기해주세요.")
        else
            makeSubjectRange(day,startValue,finValue,subName,gcolor,true)
    })
}
select_menu()