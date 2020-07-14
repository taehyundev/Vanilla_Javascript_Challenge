var result_txtBox = document.getElementById('result')
var display_txtBox = document.getElementById('display')

function add(oper) {
    var display = document.getElementById('display'); 
    display.value = display.value + oper;
}
function calculate() {
    var display = document.getElementById('display');
    var result = eval(display.value);
    result_txtBox.setAttribute("value",result)
}
function reset() {
    display_txtBox.value = "";
    result_txtBox.value = "";
}