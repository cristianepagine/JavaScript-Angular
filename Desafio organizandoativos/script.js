  
const quantidadeAtivos = parseInt(gets());

const ativos = [];

for (let i = 0; i < quantidadeAtivos; i++) {
  const codigoAtivo = gets();
  ativos.push(codigoAtivo);
}

ativos.sort(); // Ordene o array de ativos fora do loop

for (let i = 0; i < quantidadeAtivos; i++) {
  print(ativos[i]);
}