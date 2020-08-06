var canvas = document.getElementById("canvas")
var rangeValue = document.querySelector(".range_value")
var range = document.querySelector(".brush_range")
var ctx = canvas.getContext("2d");
function setColor(color){
    ctx.strokeStyle = color
    ctx.fillStyle = color
}

function changeHandler(){  
    var rValue =parseFloat(range.value); 
    rangeValue.innerHTML = rValue.toFixed(1);
    ctx.lineWidth = rValue;
}
function save(){
    const image = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    var imageName = prompt("Image name ?")
    if(imageName===null)
        imageName = "Example Image File"
    link.href= image;
    
    link.download = imageName;
    console.log(link)
    link.click()
}
