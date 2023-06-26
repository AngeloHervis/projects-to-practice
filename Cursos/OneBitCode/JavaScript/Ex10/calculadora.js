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
  valores.raio = '';

  switch(opção) {
    case '1':
      valores.base = parseFloat(prompt("Qual é o valor da base do triângulo?"));
      valores.altura = parseFloat(prompt("Qual é o valor da altura do triângulo?"));
      calcularAreaTriangulo(valores.base, valores.altura);
      break;

    case '2':
          valores.base = parseFloat(prompt("Qual é o valor da base do retângulo?"));
          valores.altura = parseFloat(prompt("Qual é o valor da altura do retângulo?"));
          calcularAreaRetângulo(valores.base, valores.altura);
          break;

    case '3':
          valores.lado = parseFloat(prompt("Qual é o valor do lado do quadrado?"));
          calcularAreaQuadrado(valores.lado);
          break;

    case '4':
          valores.baseMaior = parseFloat(prompt("Qual é o valor da base maior do trapézio?"));
          valores.baseMenor = parseFloat(prompt("Qual é o valor da base menor do trapézio?"));
          valores.altura = parseFloat(prompt("Qual é o valor da altura do trapézio?"));
          calcularAreaTrapezio(valores.baseMaior, valores.baseMenor, valores.altura);
          break;

    case '5':
                valores.raio = parseFloat(prompt("Qual é o valor do raio do círculo?"));
      calcularAreaCirculo(valores.raio);
      break;

    case '6':
          alert("Saindo do programa...")

        default:
            alert("Opção inválida. Por favor, escolha novamente.");
            break;
    }


  }
  function calcularAreaTriangulo(base, altura) {
    alert("O valor da área do triângulo é: " + (base * altura) / 2);
  }
  
  function calcularAreaRetângulo(base, altura) {
    alert("O valor da área do retângulo é: " + (base * altura));
  }
  function calcularAreaQuadrado(lado) {
    alert("O valor da área do quadrado é: " + (lado * lado));
  }
  function calcularAreaTrapezio(baseMaior, baseMenor, altura) {
    alert("O valor da área do trapézio é: " + ((baseMaior + baseMenor) * altura) / 2);
  }
  function calcularAreaCirculo(raio) {
    alert("O valor da área do círculo é: " + parseFloat(3.14) * (raio * raio));
  }
