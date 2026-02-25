 //EXERCICIO1
//NAO ENTENDI COMO PODERIA COLOCAR UMA FUNCAO AQUI
/*
let mediaSala = 0.0;
let inputAlunos = parseInt(prompt("Digite a quantidade de alunos: "))
for(let i = 0; i < inputAlunos; i++){
    let inputMedia = parseFloat(prompt(`Digite a média do ${i+1}º aluno: `));
    if(isNaN(inputMedia) && inputMedia < 0){
        alert("ERRO ! Digite novamente.")
    }
    mediaSala += inputMedia / inputAlunos;
}
alert(`Média sala: ${mediaSala.toFixed(1)}`);
*/

//EXERCICIO2
/*
let nomeProduto = "";
let inputQuantidade = 0;
let resumo = "";
let inputProdutos = parseInt(prompt("Digite a quantidade de produtos recebidos no carregamento: "));
for(let i = 0; i < inputProdutos; i++){
    nomeProduto = prompt(`Digite o nome do ${i+1}º produto: `);
    inputQuantidade = parseInt(prompt(`Digite a quantidade de ${nomeProduto}:`));
    resumo += `Produto: ${nomeProduto}. Quantidade: ${inputQuantidade}.\n`;
}
alert(resumo);
*/

//EXERCICIO3
/*
let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;

let inputVoto = 0;
resumo = "";
let inputVotantes = parseInt(prompt("Digite a quantidade de votantes: "));
if(isNaN(inputVotantes) || inputVotantes <= 0){
    alert("ERRO! Digite Novamente.");
}

for(let i = 0; i < inputVotantes; i++){
    inputVoto = parseInt(prompt(`${i+1}º Votante. \nDigite o Voto: \n1 - Candidato1 \n2 - Candidato2 \n3 - Candidato3`));
    if(inputVoto == 1){
        candidato1++;
    }else if(inputVoto == 2){
        candidato2++;
    }else if(inputVoto == 3){
        candidato3++;
    }else{
        alert("ERRO! Número Inválido.");
    }
    resumo = `Candidato1: ${candidato1} Votos \nCandidato2: ${candidato2} Votos \nCandidato3: ${candidato3} Votos\n`;
}
alert(resumo);
*/

//EXERCICIO4
/*
resumo = "";
totalkcal = "";
let totalCalorias = 0;
let qtdRefeicao = parseInt(prompt("Digite a quantidade de refeições do dia: "));
if(isNaN(qtdRefeicao) || qtdRefeicao <= 0){
    alert("ERRO! Digite Novamente.");
}
for(let i = 0; i < qtdRefeicao; i++){
    let nomePrato = prompt(`Digite o nome do ${i+1}º prato: `);
    let qtdCalorias = parseFloat(prompt(`Digite a quantidade de calorias do/da ${nomePrato}:`));
    if(isNaN(qtdCalorias) || qtdCalorias <=0){
        alert("ERRO! Digite Novamente.");
        break;
    }
    totalCalorias += qtdCalorias;
    resumo += `Prato: ${nomePrato}. \nCalorias: ${qtdCalorias}.\n\n`;
}
totalkcal = totalCalorias;
alert(`${resumo}Total Calorias: ${totalkcal}`);
*/

//EXERCICIO5
/*
let gastoTotal = 0;
let media = 0;
const dias = 30;
for(let i = 0; i < dias; i++){
    let gastodia = parseInt(prompt(`Digite o gasto do ${i+1}º dia: `));
    if(isNaN(gastodia) || gastodia <= 0){
        alert("DIGITO ERRADO! Digite Novamente.");
        break;
    }
    gastoTotal += gastodia;
    media = gastoTotal / dias;
}
alert(`Gasto Total: R$${gastoTotal}. \nMédia diária: R$${media}.`);
*/
