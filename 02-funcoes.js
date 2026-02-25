//EXERCICIO1
/*
function calculadora(num1, op, num2){
    switch(op){
        case'+':
        return num1 + num2;
        case'-':
        return num1 - num2;
        case'*':
        return num1 * num2;
        case'/':
        return num1 / num2;
    }
}

function executarCalculadora(){
let inputN1 = parseInt(prompt("Digite o primeiro número: "));
if(isNaN(inputN1)){
    alert("ERRO! Digite um número válido.");
    return;
}
let inputOP = prompt("Digite a operação: \n'+' \n'-' \n'*' \n'/' ");
if(inputOP != '+' && inputOP != '-' && inputOP != '*' && inputOP != '/'){
    alert("ERRO! Operação Inválida.")
    return;
}
let inputN2 = parseInt(prompt("Digite o segundo número: "));
if(inputOP === '/' && inputN2 <= 0){
    alert("ERRO! Não existe divisão por zero.");
    return;
}
let resultado = "";
resultado = calculadora(inputN1, inputOP, inputN2);
alert(`Resultado: ${resultado}.`);
}
executarCalculadora();
*/

//EXERCICIO2
/*
function conversorMoeda(tipo, valor){
    if(tipo == 1){
        valor *= 0.18;
    }else if(tipo == 2){
        valor *= 0.1570
    }else if(tipo == 3){
        valor *= 259,1
    }
    return valor;
}

function executarConversor(){
let resultado = "";
let inputReal = parseFloat(prompt("Digite o valor em Reais (R$): "));
if(isNaN(inputReal) || inputReal <= 0){
    alert("ERRO! Número Inválido.")
    return;
}
let inputTipo = parseInt(prompt("Digite o tipo de moeda: \n1 - Dólar. \n2 - Euro. \n3 - Peso. "));
if(isNaN(inputTipo) || inputTipo != 1 && inputTipo != 2 && inputTipo != 3){
    alert("ERRO! Número Inválido.")
    return;
}
resultado = conversorMoeda(inputTipo, inputReal);
if(inputTipo == 1){
    alert(`Valor Convertido = (US$) ${resultado.toFixed(2)}`)
}else if(inputTipo == 2){
    alert(`Valor convertido = (€) ${resultado.toFixed(2)}`)
}else if(inputTipo == 3){
    alert(`Valor Convertido = ($) ${resultado.toFixed(2)}`)
}
}
executarConversor();
*/ 

//EXERCICIO3
/*
let imc = 0;
function calcularIMC(peso, altura){
    imc = (peso / (altura * altura));
    return imc;
}

function mostrarIMC(){
let resultado = "";
let inputPeso = parseFloat(prompt("Digite o seu peso (kg): "));
if(isNaN(inputPeso) || inputPeso <= 0){
    alert("Erro! Não foi possível calcular. Digite Novamente.")
    return;
}
let inputAltura = parseFloat(prompt("Digite a sua altura (m): "));
if(isNaN(inputAltura) || inputAltura <= 0){
    alert("Erro! Não foi possível calcular. Digite Novamente.");
    return;
}
resultado = calcularIMC(inputPeso, inputAltura);
if(resultado < 18.5){
    alert(`IMC: ${resultado.toFixed(2)} \nClassificação: Baixo Peso.`)
}else if(resultado >= 18.5 && resultado <= 24.99){
    alert(`IMC: ${resultado.toFixed(2)} \nClassificação: Normal.`)
}else if(resultado >= 25 && resultado <= 29.99){
    alert(`IMC: ${resultado.toFixed(2)} \nClassificação: Sobrepeso.`)
}else{
    alert(`IMC: ${resultado.toFixed(2)} \nClassificação: Obesidade.`)
}
}
mostrarIMC();
*/

