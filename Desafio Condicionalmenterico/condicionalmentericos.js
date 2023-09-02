

let saldoTotal = parseInt(gets());
let valorSaque = parseInt(gets());
let saldoDisponivel ;

const contaBancaria = (saldoDisponivel, valorSaque ,saldoTotal) => {
 if (valorSaque > saldoTotal) {
  print(`Saldo insuficiente. Saque nao realizado!`);
 }
 else if (valorSaque <= saldoTotal){
    saldoDisponivel = saldoTotal-valorSaque;
      print(`Saque realizado com sucesso. Novo saldo: ${saldoDisponivel}`);
 }
 
}

contaBancaria(saldoDisponivel, valorSaque,saldoTotal)



