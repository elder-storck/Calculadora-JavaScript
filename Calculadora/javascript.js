var buttonnumber1 = document.getElementById('1');
var buttonnumber2 = document.getElementById('2');
var buttonnumber3 = document.getElementById('3');
var buttonnumber4 = document.getElementById('4');
var buttonnumber5 = document.getElementById('5');
var buttonnumber6 = document.getElementById('6');
var buttonnumber7 = document.getElementById('7');
var buttonnumber8 = document.getElementById('8');
var buttonnumber9 = document.getElementById('9');
var button,number0 = document.getElementById('0');
//var number = document.getElementById('');

let operator1 ='', operator2='', resultBuffer ='';


var keysNumbers = document.getElementById('keysDiv');
keysNumbers.addEventListener('click', e => {
    console.log(e.target)
})


var buttonsomar = document.getElementById('somar');
buttonsomar.onclick = function(){
    resultBuffer = operator1 + operator2;
    console.log(resultBuffer);
}