let operator1 =0, operator2=0;         


var keys = document.getElementById('keysDiv');              
var display = document.getElementById('displayDiv');

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
        //starting calculator with zero
        if(display.textContent === '0'){
            display.textContent = key.textContent;
        //if(number after operator)
        }else if(keyPreviousAction) {
            display.textContent = key.textContent;
        } else {
            display.textContent = display.textContent + key.textContent;
        }
        keyPreviousAction = false;
    }
    //if button is not a number
    if(keyAction){
        //type of operation
        switch(keyAction){
            case 'dividir':
                operator1 = parseFloat(display.textContent);    //operator1 = number 
                display.textContent = '/';
                action = keyAction;                             //save type of operation
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