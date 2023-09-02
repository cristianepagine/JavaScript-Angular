

let saldoAtual = parseFloat(gets());
const valorDeposito = parseFloat(gets());
const valorRetirada = parseFloat(gets());


const valorMinimo = 0.1

const contaBancaria = (saldoAtual, valorDeposito, valorRetirada) => {
 if (valorDeposito < valorMinimo || valorRetirada < valorMinimo) {
  print(`O valor do depósito ou do saque precisa ser acima de R$ ${valorMinimo.toFixed(2)}`)
 }
 else if ((saldoAtual + valorDeposito) < valorRetirada){
  print(`Seu saldo total na conta é de R$ ${(saldoAtual + valorDeposito).toFixed(2)}, o que não é suficiente para retirar R$ ${valorRetirada.toFixed(2)}.`)
 }
 else {
  print(`Saldo atualizado na conta: ${([saldoAtual + valorDeposito] - valorRetirada).toFixed(1)}`)
 }
}

contaBancaria(saldoAtual, valorDeposito, valorRetirada)


