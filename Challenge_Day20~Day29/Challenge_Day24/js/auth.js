var btn = document.querySelector(".login")
var userName =""
const userInfo ={
    0:{
        "name" : "kang",
        "ID":"cake12690",
        "PW":1234
    },
    1:{    
        "name": "tae",
        "ID":"asd",
        "PW":123
    },
    2:{    
        "name": "me",
        "ID":"me",
        "PW":123
    }
}
function auth(idx,get_id, get_pw){
    var id = document.getElementsByName("id")[0].value
    var pw = document.getElementsByName("pwd")[0].value
    console.log(get_id+ " "+ id)
    if(get_id == id && get_pw == pw) {
        userName = userInfo[idx].name
        return true;
    }
    return false;
}
btn.addEventListener("click", ()=>{
    var resultDiv = document.getElementById("result")
     for(var i=0;i<Object.keys(userInfo).length;i++){
         console.log(userInfo[i].ID)
        var result = auth(i,userInfo[i].ID,userInfo[i].PW)
        console.log(userName[i])
        if(result === true) {
            obj = {
                name:userInfo[i]["name"],
                id:userInfo[i]["ID"],
                "login-status":true
            }
            localStorage.setItem("userinfo",JSON.stringify(obj))
            break;
        }
    }
    console.log(result)
    if(result){
        console.log("success")
        resultDiv.innerHTML = `Welcome, ${userName} `
        location.href = "answer.htm"
    }else{
        resultDiv.innerHTML = `U cant login :( because Values ​​do not match`    
    }
})