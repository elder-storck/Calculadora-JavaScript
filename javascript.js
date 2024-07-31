// var buttonnumber1 = document.getElementById('1');
// var buttonnumber2 = document.getElementById('2');
// var buttonnumber3 = document.getElementById('3');
// var buttonnumber4 = document.getElementById('4');
// var buttonnumber5 = document.getElementById('5');
// var buttonnumber6 = document.getElementById('6');
// var buttonnumber7 = document.getElementById('7');
// var buttonnumber8 = document.getElementById('8');
// var buttonnumber9 = document.getElementById('9');
// var button,number0 = document.getElementById('0');
// //var number = document.getElementById('');

let operator1 =0, operator2=0, resultBuffer =0;


var keys = document.getElementById('keysDiv');
var display = document.getElementById('displayDiv')

let keyPreviousAction = false;
let action = '';


keys.addEventListener('click', e => {
   if(e.target.matches('button')){
    const key = e.target
    const keyAction = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent

    //if button is number
    if(!keyAction){
        if(display.textContent === '0'){
            display.textContent = key.textContent;
        }else if(keyPreviousAction) {
            display.textContent = key.textContent;
        } else {
            display.textContent = display.textContent + key.textContent;
        }
        keyPreviousAction = false;
    }
    if(keyAction){
        switch(keyAction){
            case 'dividir':
                operator1 = parseFloat(display.textContent);
                display.textContent = '/';
                action = keyAction;
                keyPreviousAction = true;
                break;
            case 'multiplicar':
                operator1 = parseFloat(display.textContent);
                display.textContent = '*';
                action = keyAction;
                keyPreviousAction = true;
                break;
            case 'subtrair':
                operator1 = parseFloat(display.textContent);
                display.textContent = '-';
                action = keyAction;
                keyPreviousAction = true;
                break;
            case 'somar':
                operator1 = parseFloat(display.textContent);
                display.textContent = '+';
                action = keyAction;
                keyPreviousAction = true;
                break;
            case 'igual':
                if(action === 'somar' || action === 'subtrair' || action === 'multiplicar' || action === 'dividir' ){
                    operator2 = parseFloat(display.textContent);
                    display.textContent = operation(action, operator1, operator2);
                }
                keyPreviousAction = true;
                break;
            case 'signal':
                let aux = parseFloat(display.textContent);
                aux = -aux;
                display.textContent = aux;
                
                break;
            case 'limpar':
                display.textContent = '0'
                break;
            case 'decimal':
                if(keyPreviousAction){
                    display.textContent = '0' + key.textContent;
                    keyPreviousAction = false;    
                }else{
                    display.textContent = display.textContent + key.textContent;
                }
                break;
            default:
                display.textContent = 'ERROR: Invalid Data-Action ';
        }
    }else{
        //operator1 = operator1 + (key.textContent);
        //console.log(operator1);
    }





   }    
})

function operation(action, operator1, operator2){
    if(action === 'somar')       return operator1 + operator2;
    if(action === 'subtrair')    return operator1 - operator2;
    if(action === 'multiplicar') return operator1 * operator2;
    if(action === 'dividir')     return operator1 / operator2;
    console.log('ERROR: function operation / invalid operation');
    return operator1;
}