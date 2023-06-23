let opção = 0;

while (opção !== '6') {
  opção = prompt(
    "Digite o cálculo desejado: \n 1 - Área do triângulo \n 2 - Área do retângulo \n 3 - Área do quadrado \n 4 - Área do trapézio \n 5 - Área do círculo \n 6 - Sair \n\n"
  );

  let valores = {};
  valores.base = '';
  valores.altura = '';
  valores.lado = '';
  valores.baseMaior = '';
  valores.baseMenor = '';
  valores.pi = 3.14;
  valores.raio = '';

  switch(opção) {
    case '1':
      valores.base = parseFloat(prompt("Qual é o valor da base do triângulo?"));
      valores.altura = parseFloat(prompt("Qual é o valor da altura do triângulo?"));
      calcularAreaTriangulo(valores.base, valores.altura);
      break;


        case '2':

        case '3':

        case '4':

        case '5':

        case '6':

        default:
            alert("Opção inválida. Por favor, escolha novamente.");
            break;
    }


  }
  function calcularAreaTriangulo(base, altura) {
    alert("O valor da área do triângulo é: " + (base * altura) / 2);
  }
  
  function calcularAreaTriangulo(base, altura) {
    alert("O valor da área do triângulo é: " + (base * altura) / 2);
  }
  function calcularAreaTriangulo(base, altura) {
    alert("O valor da área do triângulo é: " + (base * altura) / 2);
  }
  function calcularAreaTriangulo(base, altura) {
    alert("O valor da área do triângulo é: " + (base * altura) / 2);
  }
  function calcularAreaTriangulo(base, altura) {
    alert("O valor da área do triângulo é: " + (base * altura) / 2);
  }
  function calcularAreaTriangulo(base, altura) {
    alert("O valor da área do triângulo é: " + (base * altura) / 2);
  }
