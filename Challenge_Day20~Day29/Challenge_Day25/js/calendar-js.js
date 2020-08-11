
var calendarTable = document.getElementById("calendar")
var day = ["월","화","수","목","금","토","일"]
var dayClass = ["mon","tue","wed","thu","fri","sat","sun"]
var universityClass =[1,2,3,4,5,6,7,8,9,10,11,12]
var universityClassTime =[9,10,11,12,1,2,3,4,5,6,7,8]
function calendarMake(){
    for(var i=0; i<=12; i++){
        var tr = document.createElement("tr")
        if(i!=0)
            tr.classList.add(`tr-${universityClass[i-1]}`)
        for(var j=0; j<8; j++){
            var td = document.createElement("td")
            if(i==0){
                if(j==0){

                }else{
                    td.innerHTML = day[j-1]
                    td.classList.add(dayClass[j-1])
                    console.log(day[j])
                }
                tr.appendChild(td)
                calendarTable.appendChild(tr)    
            }else{
                if(j==0){     
                    td.classList.add(`class-${universityClass[i-1]}`)
                    td.width = "30px"
                    
                    td.style.verticalAlign= "top";
                    td.style.textAlign= "right";
                    td.style.paddingRight = "5px"
                    td.style.fontSize = "12px"
                    td.innerHTML = `${universityClassTime[i-1]}`
                }else{
                    td.width = "80px"
                    td.height = "40px"
                    td.classList.add(`${dayClass[j-1]}-${universityClass[i-1]}`)
                }
                tr.appendChild(td)
                calendarTable.appendChild(tr)  

            }
        }
    }

    var list = JSON.parse(localStorage.getItem("classinfo"))
    console.log("aa")
    if(list !== null){
        classinfo = list
        var classLength = list.length
        for(var i=0; i <classLength; i++){
            var set_day = classinfo[i]["day"]
            var set_start = classinfo[i]["start"]
            var set_fin = classinfo[i]["fin"]
            var set_sub = classinfo[i]["sub"]
            var set_color = classinfo[i]["color"]
            makeSubjectRange(set_day,set_start,set_fin,set_sub,set_color,false)
        }
    }
    console.log(list)
}
calendarMake()