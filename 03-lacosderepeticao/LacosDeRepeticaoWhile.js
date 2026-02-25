//EXERCICIO1
/*
const senhaCorreta = "Ronan123";
let maxTentativas = 3;

while(maxTentativas > 0){
let inputSenha = prompt("Digite sua senha: ");
if(inputSenha === senhaCorreta){
    alert("Acesso Permitido !");
}else{
    maxTentativas -= 1;
    if(maxTentativas > 0){
    alert(`Senha Incorreta ! \nChances Restantes: ${maxTentativas}. \nDigite Novamente: `);
    }
}
if(maxTentativas == 0){
    alert("Acesso Negado !");
}
}
*/

//EXERCICIO2
/*
let menu = 1;
let somaProduto = 0;
let contadorProduto = 1;
while(menu != 0){
    menu = parseInt(prompt(`Digite o valor do ${contadorProduto}º Produto: R$ \n0 para parar.`));
    somaProduto += menu;
    contadorProduto++;
}
if(menu == 0){
    alert(`Total Valor: ${somaProduto}`);
}
*/

//EXERCICIO3
/*
function conferidor(numero, usuario){
    if(numero % 2 == 0 && usuario == 1){
        return "VOCÊ GANHOU !"
    }else if(numero % 2 == 0 && usuario == 2){
        return "VOCÊ PERDEU !"
    }else{
        return "A MÁQUINA GANHOU !"
    }
}
let soma = 0;
const meuNumero = 3
let menu = 1;
while(menu != 0){
menu = prompt("Escolha: \n1 - PAR. \n2 - ÍMPAR.");
if(menu != 1 && menu != 2){
    alert("Número Inválido. Digite Novamente.");
    break;
}
let inputNumero = parseInt(prompt("Digite um número de 1 a 5: "));
if(isNaN(inputNumero) || inputNumero <= 0 || inputNumero > 5){
    alert("ERRO ! Digite um número válido");
    break;
}
alert(`Número escolhido pela Máquina: ${meuNumero}`);
soma = inputNumero + meuNumero;
alert(conferidor(soma, menu));
}
*/

//EXERCICIO4
/*
const numeroCerto = 18;
let menu = 1;
while(menu != numeroCerto){
    menu = parseInt(prompt("Digite um número de 1 a 100: "));
    if(menu == numeroCerto){
    alert("Acertou !");
}else{
    alert("Errou !");
}
}
*/

//EXERCICIO5
/*
let qtdPalavras = 0;
let contadorPalavras = 1;
let menu = 1;
let pararPrograma = "FIM";
while(menu != pararPrograma){
    menu = prompt(`Escreva a ${contadorPalavras}º Palavra: \nDigite "FIM" para encerrar.`);
    contadorPalavras++;
    qtdPalavras++;
}
alert(`Total de Palavras: ${contadorPalavras - 2}.`);
*/ 

