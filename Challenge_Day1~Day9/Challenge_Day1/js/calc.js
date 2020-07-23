var result_txtBox = document.getElementById('result')
var display_txtBox = document.getElementById('display')

function add(oper) {
    var display = document.getElementById('display'); 
    display.value = display.value + oper;
}
function calc() {
    try{
        var display = document.getElementById('display');
        var result = eval(display.value);
        result_txtBox.setAttribute("value",result)
    }catch{ // eval에서 오류가 떴을 때 처리 방법
        result_txtBox.setAttribute("value","잘못된 값을 입력받았습니다.")
        display_txtBox.value = "";
        
    }
}
function reset() {
    //초기화
    display_txtBox.setAttribute("value", "");
    result_txtBox.setAttribute("value","");     
}