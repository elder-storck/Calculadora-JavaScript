console.log('Primeira Mensagem');


var nome1 = 'Elder';
let nome2 = 'outro';
const PI  = 3.14159;



let nome       = 'Elder' //string
let idade      = 23      //number
let numero     = 2.56;   //number
let maiorIdade = true    //boolean


console.log('Meu nome é '+nome+ 'e tenho ' + idade+ ' anos.')

//Object
let pessoa1 = {
    nome: "Elder",
    idade: 23,
    hobbies: ['Futebol', 'xadrez'],
    endereco:{
        rua: "102",
        numero: 62
    }
}

console.log('imprimindo pessoa1: nome='+pessoa1.nome+' idade='+pessoa1.idade+' hobbies='+pessoa1.hobbies[0]+' hobbies='+pessoa1.hobbies[1])
console.log('Endereço: Rua='+pessoa1.endereco.rua+' Number='+pessoa1.endereco.numero);


//Array

let frutas =  ["Maça", "Banana", "Laranja"];
for(let i=0; i<frutas.length; i++){
    console.log('fruta['+i+']: '+frutas[i]);
}

//Operadores Aritméticos
let soma = 10+5;            //15
let subtracao = 10-5        //10
let multiplicacao = 10*5    //50
let divisao = 10/5          //3
let resto = 11%5            //1
let exponenciacao = 10**5   //100000

//Operadores Atribuição
let a=10, b=20
console.log( a < b );   //true
console.log( a > b );   //false
console.log( a == 10 ); //true
console.log( a != 10 ); //false

//Operadores Comparativos
//Operadores Lógicos


//Functions
function somar(number1, number2){
    return number1+number2;
}

let result = somar(10, 5);
console.log('Soma é :'+ result);

//Funções como valores
const multiplicar = function(number1, number2){     //função anônima (sem nome) é definida e atribuída à variável multiplicar.
    return number1*number2;
};

result = multiplicar(10, 5);
console.log('multiplicação é :'+ result);

//Funções com parâmetros Default
function saudacao(nome='Visitante'){
    return 'Olá, '+ nome;
}

console.log(saudacao());        //"Olá Visitante"
console.log(saudacao('João'));  //"Olá João"


//Closures
function criarContador() {
    let contador = 0;
    return function() {
        contador += 1;
        return contador;
    };
}

const meuContador = criarContador();
console.log(meuContador()); // 1
console.log(meuContador()); // 2


//Criação de objetos 
let pessoa = {
    nome: "João",
    idade: 25
}
console.log(pessoa.nome);
console.log(pessoa['nome']);

pessoa.profissao = "Engenheiro"     //adicionando nova propriedade
pessoa['idade'] = 31;               //Modificando Propriedade
console.log(pessoa);                //Object { nome: "João", idade: 31, profissao: "Engenheiro" }
delete pessoa.profissao;            //Deletando Propriedade
console.log(pessoa);                //Object { nome: "João", idade: 31 }


//Os objetos também podem conter funções, conhecidas como métodos do objeto. 
//Esses métodos são definidos da mesma maneira que outras propriedades, mas seus valores são funções.
pessoa.saudacao = function(){
    console.log('Olá, meu nome é '+this.nome+' e tenho '+this.idade+' anos');
}
pessoa.saudacao();      //"Olá, meu nome é João e tenho 31 anos"



//Métodos de Objeto, this e Protótipos

function Pessoa10(nome){
    this.nome = nome;
}

Pessoa10.prototype.saudacao = function(){
    console.log('Olá, meu nome é '+this.nome+' !');
}

let pessoa2 = new Pessoa10("Elder");
pessoa2.saudacao();

//Uso de Object.create()
let protoPessoa = {
    saudacao: function(){
        console.log('Olá, meu nome é '+this.nome+' !');
    }
};

let pessoa3 = Object.create(protoPessoa);
pessoa3.nome = "Roberto";
pessoa3.saudacao();


//Método map
//O método map cria um novo array com os resultados da chamada de uma função para cada elemento do array original. 
//É frequentemente usado para transformar dados.
let numeros = [1,2,3,4,5];
let quadrados = numeros.map(num => num*num);
console.log(numeros);       //[ 1, 2, 3, 4, 5 ]
console.log(quadrados);     //[ 1, 4, 9, 16, 25 ]


// Método filter
//O método filter cria um novo array com todos os elementos que passam no teste implementado por uma função fornecida.
//É ideal para selecionar um subconjunto de elementos baseados em uma condição.
let pares =  numeros.filter(num => num % 2 == 0);
console.log(pares);


// Método reduce
// O método reduce executa uma função redutora em cada elemento do array, resultando em um único valor de saída. 
// É extremamente útil para somar elementos ou combinar dados em uma única estrutura.

let soma1 = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(soma1);


// Arrays 


//let frutas = ['maçã', 'banana', 'pera'];
for(i=0; i < frutas.length; i++){
    console.log(frutas[i]);
}

for(let fruta of frutas){
    console.log(fruta);
}

//percorre os elementos do array com metodo foreach
frutas.forEach(fruta => console.log(fruta));



//Manipulação do DOM 

// document.getElementById();  // Seleciona um elemento pelo seu ID
// document.querySelector();   //Seleciona o primeiro elemento que corresponde a um seletor CSS específico.
// document.querySelectorAll();//Retorna todos os elementos que correspondem a um seletor CSS específico


//Selecionando por ID
var conteudo = document.getElementById('conteudo');
console.log(conteudo.textContent)



// //Selecionando o primeiro elemento da classe 'mensagem'
const primeiraMensagem = document.querySelector('.mensagem');
console.log(primeiraMensagem.textContent)


// //Selecionando todos os elementos com a classe 'mensagem'
const todasMensagens = document.querySelectorAll('.mensagem');
todasMensagens.forEach(mensagem => console.log(mensagem.textContent));


conteudo.textContent = 'Novo Conteudo'; // Modificando conteudo de um elemento
//conteudo.setAttribute('class', 'nova-classe');


//Mudando Estilo 
conteudo.style.color = 'red'
conteudo.style.backgroundColor = 'yellow'

//Adicionando um evento
document.getElementById('botao').addEventListener('click', () => {conteudo.style.display = 'none';});   //esconde o 'conteudo quando o botão é clicado 


const button = document.getElementById('clickMeButton');
button.onclick = function(){
    alert('Você Clicou no botão!')
};

const inputField = document.getElementById('inputField');
inputField.addEventListener('focus', function() {
    console.log('Input está em foco!');
});

inputField.addEventListener('blur', function() {
    console.log('Input perdeu o foco!');
});


//Tipos de Eventos Comuns
//● Eventos de mouse: como click , dblclick , mouseover , mouseout .
//● Eventos de teclado: como keydown , keyup .
//● Eventos de formulário: como submit , change , focus , blur .

inputField.addEventListener('keyup',
    function(event){
        console.log('Usuário Digitou: '+event.key);
        if(event.key === 'Enter'){
            console.log('Usuário pressionou Enter!');
        }
    }
);

