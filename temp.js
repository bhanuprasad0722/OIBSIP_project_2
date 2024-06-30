/*
let num = document.getElementById("num")
let celsius = document.getElementById("celsius")
let fahrenheit = document.getElementById("fahrenheit")
let result = document.getElementById("result")
let submit = document.getElementById("submit")
*/

function convert(){
    let num = parseFloat(document.getElementById("fahrenheit").value);
    let ctemp = document.getElementById("celsius").value;
    let ftemp = document.getElementById("fahrenheit").value;
    let result = " ";

    if (isNaN(num)) {
        result = "please enter a valid number";
    } else if (ctemp) {
        result = ((num * 9/5) + 32);
    } else {
        result = ((num - 32) * 5/9);
    }
    document.getElementById("result1").textContent = result;
}