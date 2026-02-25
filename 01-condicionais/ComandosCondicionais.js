//COMANDOS CONDICIONAIS
//EXERCICIO1
/*
function desempenho(media){
    if(isNaN(media)){
        return "Não foi possível calcular a média do aluno ! \n Tente Novamente."
    }
    if(media <5){
        return "REPROVADO";
    }else if(media >=5 && media <=6.9){
        return "RECUPERAÇÂO";
    }else if(media >=7){
        return "APROVADO";
    }
}
let inputID = parseInt(prompt("Digite a média final do aluno: "));
let situacao = desempenho(inputID);
alert(`Situação do aluno: \n${situacao}`);
*/

//EXERCÍCIO2
/*
const valorBase = 100.00;

function mensalidade(idade){
    let valor = valorBase
    if(idade <18){
        valor *= 0.8;
    }else if(idade >60){
        valor *= 0.7;
    }
    return valor;
}

menu = 1;
while(menu != 0){
let clienteID = parseInt(prompt("Digite a idade do cliente: "));
if(isNaN(clienteID) || clienteID <= 0){
    alert("ERRO ! Idade Inválida.");
}else{
let tipoMensalidade = prompt("A mensalidade do cliente é anual ? \n 1 - SIM \n 2 - NÃO");
if(tipoMensalidade == 1){
    let valorMensalidade = (mensalidade(clienteID));
    let valorAnual = valorMensalidade * 0.9;
    alert(`O cliente pagará R$ ${valorAnual}.`);
}else if(tipoMensalidade == 2){
    let valorMensal = mensalidade(clienteID);
    alert(`O cliente pagará R$ ${valorMensal}.`);
}else{
    alert("ERRO ! Digitou a opção errada po.");
}
}
}
*/

//EXERCICIO3
/*
const precoBase = 4.50;

function valorPassagem(tipo){
    let valor = precoBase;
    if(tipo == 1){
        valor /= 2;
    }else if(tipo == 2){
        valor -= valor;
    }else if(tipo == 3){
        valor *= 0.75;
    }else if(tipo == 4){
        valor = valor;
    }else{
        return "ERRO ! Opção Inválida";
    }
    return valor;
}

menu = 1
while(menu != 0){
let inputTipo = parseInt(prompt("Digite o tipo de passagem: \n1 - Estudante. \n2 - Idoso. \n3 - Trabalhador Cadastrado. \n4 - Comum."));
if(inputTipo != 1 && inputTipo != 2 && inputTipo != 3 && inputTipo != 4){
    alert("Opção Errada. Digite Novamente.");
}
let resultado = valorPassagem(inputTipo);
alert(`Valor da Passagem: \nR$${resultado.toFixed(2)}`);
}
*/

//EXERCICIO4
/*
let resultado = "";
let golA = parseInt(prompt("Digite a quantidade de gols do time A: "));
let golB = parseInt(prompt("Digite a quantidade de gols do time B: "));
if(golA > golB){
    resultado = "Vitória do Time A !";
}else if(golA < golB){
    resultado = "Vitória do Time B !";
}else{
    resultado = "Empate !";
}
alert(resultado);
*/

//EXERCICIO5
/*
let inputID = parseInt(prompt("Digite a idade: "));
if(inputID < 12){
    alert("Classificação: Livre");
}else if(inputID >= 12 && inputID < 16){
    alert("Classificação: +12");
}else if(inputID >= 16 && inputID < 18){
    alert("Classificação: +16");
}else{
    alert("Classificação: +18");
}
*/

