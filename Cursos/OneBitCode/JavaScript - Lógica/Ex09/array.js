let imoveis = [];
let opção = 0;

while (opção !== '3') {
  opção = prompt(
    "Imóveis Cadastrados: "  + imoveis.length + "\n" + 
    "Digite a opção desejada: \n 1 - Novo imovel \n 2 - Mostrar imóveis salvos \n 3 - Sair \n\n"
  );

  switch (opção) {
    case '1':
      const imovel = {}
      imovel.proprietario = prompt("Digite o nome do proprietário do imóvel: ")
      imovel.quartos = prompt("Quantos quartos possui o imóvel? ")
      imovel.banheiros = prompt("Quantos banheiros possui o imóvel? ")
      imovel.garagem = prompt("o imóvel possui garagem? (Sim/Não)")

      const confirmacao = confirm(
        "Salvar este Imóvel? \n" +
        "\n Proprietário: " + imovel.proprietario +
        "\n Quartos: " + imovel.quartos +
        "\n Banheiros: " + imovel.banheiros +
        "\n Possui garagem: " + imovel.garagem
         )
        if (confirmacao) {
          imoveis.push(imovel)
        }
      break

    case '2':
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " + (i + 1) +
          "Proprietário:" + imoveis[i].proprietario +
          "Quartos:" + imoveis[i].quartos +
          "Banheiros:" + imoveis[i].banheiros +
          "Garagem:" + imoveis[i].garagem 

        )
      }
      break;
    case '3':
      alert("Encerrando o programa.");
      break;
    default:
      alert("Opção inválida. Por favor, escolha novamente.");
      break;
  }
}
