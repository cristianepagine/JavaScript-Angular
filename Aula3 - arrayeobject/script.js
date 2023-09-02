//vetores/arrays
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array[3]);
//busca item
array.forEach(function(item, index ){console.log(item, index)});
//inclui item final
array.push("novo item");
console.log(array);
//deleta item final
array.pop();
console.log(array);
//deleta item inicio
array.shift();
console.log(array);
//insere item inicio
array.unshift("incluindo inicio");
console.log(array);
//retorna indice de um valor
console.log(array.indexOf("incluindo inicio"));
//remove ou substitui um item por um indice
array.splice(0,3);
console.log(array);
//retorna uma parte de um array existente
let novoarray = array.slice(0,2);
console.log(novoarray);
//declarando objetos
let object = {string:"string", number: 1, booleana: true, array:["array"], objectintern: {nome: "teste"}};
console.log(object);
//acessar propriedade especifica objeto
console.log(object.number);
//desestruturação objeto
var string = object.string;
console.log(string);
//outra forma de desestruturar objeto
var {booleana, number} = object;
console.log(booleana, number);