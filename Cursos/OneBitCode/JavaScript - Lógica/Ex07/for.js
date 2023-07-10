let valor = parseInt(prompt("Digite o número a ser calculado: "));

if (!isNaN(valor)){
    let tabuada = '';

    for( i = 1; i <=10; i++) {
        let resultado = valor * i;
        tabuada += valor + ' X ' + i + ' = ' + resultado + "\n";
    }
    alert("Tabuada do " + valor + ":\n\n" + tabuada);
}
else{
    alert("O valor digitado não é um número inteiro válido")
}