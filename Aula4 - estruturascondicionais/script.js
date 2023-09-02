//estruturas de decisão em js
var jogador1 = 0;
var jogador2 = 0;
var placar = 0;
if(jogador1 > 0 && jogador2 == 0){
    console.log('Jogador 1 marcou ponto');
    placar = jogador1 > jogador2;
    console.log(placar);

}
else if(jogador2 > 0 && jogador1 == 0){
    console.log('jogador 2 marcou ponto');
    placar = jogador2 > jogador1;
    console.log(placar);

}
else{
    console.log('Empate')
    placar = jogador1 == jogador2;
    console.log(placar);
}
//if ternario
if(jogador1 > 0 && jogador2 > 0 ? console.log('ambos marcaram'):console.log('nenhum marcou'));

//estruturas de controle em js
switch (placar){
    case placar = jogador1 > jogador2:
    console.log('Player 1 win');
    break;
    case placar = jogador2 > jogador1:
        console.log('Player 2 win');
        break;

    case placar = jogador1 == jogador2:
    console.log('Empataram Heim');
    break;
}

//estruturas de repetição
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5',];
let object = {propriedade1: 'valor1', propriedade2 : 'valor2', propriedade3: 'valor3',}
//for executa uma instrução ate que ela seja falsa
for(let indice = 0; indice<array.length; indice++){
    console.log(indice);

}
//for in é uma repetição a partir de uma propriedade
for (objeto in object){
    console.log(objeto);
}
//for of é uma repetição a partir de um valor
//com array
for(obj of array){
console.log(obj);
}
//com object
for(ob of object.propriedade2){
    console.log(ob);

}
//while executa uma instrução enquanto a condição for verdadeira, verificação antes da execução
var a = 0
while(a<10){
    a++
    console.log(a);
}
// do while, executa uma instrução ate que a condição seja falta, verificação apos a execuçao

var b = 1;
do{
    b++;
    console.log(b)
}while(b<5);