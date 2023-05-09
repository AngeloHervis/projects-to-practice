/*let opcao = "5"

do {
    opcao = prompt(
        "Seja bem-vindo(a)\n" + 
        "\nEscolha uma das opções abaixo:" + 
        "\n1. Opção Um" +
        "\n2. Opção Dois" +
        "\n3. Opção Três" +
        "\n4. Opção Quatro" +
        "\n5. Encerrar"
    )
} while (opcao !== "5")

if (opcao === "5"){
    alert("O sistema está sendo encerrado!! ")} */

let saldo = prompt("Olá, qual é o seu saldo inicial?")
saldo = parseFloat(saldo)
let opcao = ""

do {
    opcao = prompt(
        "Saldo disponível: R$ " + saldo + 
        "\n1. Adicionar dinheiro" + 
        "\n2. Remover dinheiro" + 
        "\n3. Sair"
    )

    switch (opcao) {
        case "1":
            saldo += parseFloat(prompt("Informe o valor a ser adicionado:"))
            break
        case "2":
            saldo -= parseFloat(prompt("Informe o valor a ser removido:"))
            break
        case "3":
            alert("Saindo...")
            break
            default:
                alert("Opção Inválida!")
    }
} while (opcao !== "3")