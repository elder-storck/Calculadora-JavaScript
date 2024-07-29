var number1 = document.getElementById('1');
var number2 = document.getElementById('2');
var number3 = document.getElementById('3');
var number4 = document.getElementById('4');
var number5 = document.getElementById('5');
var number6 = document.getElementById('6');
var number7 = document.getElementById('7');
var number8 = document.getElementById('8');
var number9 = document.getElementById('9');
var number0 = document.getElementById('0');
//var number = document.getElementById('');

let operator1 =0, operator2=0, resultBuffer =0;

var buttonsomar = document.getElementById('somar');
buttonsomar.onclick = function(){
    resultBuffer = operator1 + operator2;
    console.log(resultBuffer);
}