//generics
//Spread syntax can be used when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list. 
function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
  }
  
  const numArray = concatArray<number[]>([1, 5], [3]);
  const stgArray = concatArray<string[]>(["felipe", "goku"], ["vegeta"]);
  
  console.log(numArray);
  console.log(stgArray);