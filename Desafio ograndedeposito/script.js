//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let valor = parseFloat(gets());
let saldoNovo = 0;

if (valor > 0) {
    saldoNovo = saldoNovo + valor;
    print(`Deposito realizado com sucesso! \n Saldo atual: R$ ${saldoNovo.toFixed(2)}`);

} else if (valor < 0) {
    print(`Valor invalido! Digite um valor maior que zero.`);
} else {
    print(`Encerrando o programa...`);
}