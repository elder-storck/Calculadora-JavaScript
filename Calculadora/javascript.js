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
                display.textContent = '/';

                keyPreviousAction = true;
                break;
            case 'multiplicar':
                display.textContent = '*';
                keyPreviousAction = true;
                break;
            case 'subtrair':
                display.textContent = '-';
                keyPreviousAction = true;
                break;
            case 'somar':
                operator1 = parseFloat(display.textContent);
                display.textContent = '+';
                action = 'somar'
                keyPreviousAction = true;
                break;
            case 'igual':
                
                if(action === 'somar'){
                    operator2 = parseFloat(display.textContent);
                    display.textContent = operator1 + operator2;    
                }
                keyPreviousAction = true;
                break;
            case 'apagar':
                display.textContent = 'ERROR';
                break;
            case 'limpar':
                display.textContent = '0'
                break;
        }
    }else{
        //operator1 = operator1 + (key.textContent);
        //console.log(operator1);
    }





   }    
})

