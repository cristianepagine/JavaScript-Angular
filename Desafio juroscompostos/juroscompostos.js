let valorInicial = parseFloat(gets());
let taxaJuros = parseFloat(gets());
let periodo = parseInt(gets());

let valorFinal = valorInicial * (1 + taxaJuros) ** periodo;

print(`Valor final do investimento: R$ ${valorFinal.toFixed(2)}`);
