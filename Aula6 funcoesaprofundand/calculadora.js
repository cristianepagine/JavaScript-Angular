function calculadora(){
    const operacao = Number (prompt("Escolha uma operação: \n 1 - Soma(+) \n 2 - Subtração(-) \n 3 - Divisão Real(/) \n 4 - Divisão Inteira(%) \n 5 - Multiplcação(x) \n 6 - Potenciação(**)"));

if(!operacao || operacao >= 7){
    alert("Operação inválida, tente novamente");
    calculadora();
}else{
    
    let n1 = Number (prompt('Insira o primeiro valor'));
    let n2 = Number (prompt('Insira o segundo valor'));
    let resultado;
    //valida se o caractere é um numero
    if (!n1 || !n2){
        alert("Erro parametros inválidos");
        calculadora();
    }else{
        function soma(){
            resultado = n1+n2;
            alert(`${n1} + ${n2} = ${resultado}`);
            novaoperacao();
        }
        function subtracao(){
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`);
            novaoperacao();
        }
        function divisaoreal(){
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`);
            novaoperacao();
        }
        function divisaointeira(){
            resultado = n1 % n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é: ${resultado}`);
            novaoperacao();
        }
        function multiplicacao(){
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`);
            novaoperacao();
        }
        function potenciacao(){
            resultado = n1 ** n2;
            alert(`${n1} ** ${n2} = ${resultado}`);
            novaoperacao();
        }
        function novaoperacao(){
           let opcao = prompt("Deseja realizar uma nova operação: \n 1 - Sim \n 2 - Não");
           if (opcao ==1){
            calculadora();
           }else if (opcao==2){
        alert("Até Mais")
           }else{
            alert("Digite uma opção válida");
            novaoperacao();
           }
        }
    }
  
    
    /*if (operacao ==1){
        soma();
    }else if (operacao == 2 ){
    subtracao();
    }else if (operacao ==3 ){
        divisaoreal();
        }else if (operacao == 4 ){
            divisaointeira();
            }else if (operacao == 5){
                multiplicacao();
                }else if (operacao == 6){
                    potenciacao();
                    }
                }*/
        switch(operacao){
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                divisaoreal();
                break;
            case 4:
                divisaointeira();
                break;
            case 5:
                multiplicacao();
                break;
            case 6:
                potenciacao();
                break;
        }
}
}

calculadora();
