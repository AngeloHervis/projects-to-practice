$(document).ready(function(){
    function converterMoeda() {
        // Taxas de câmbio em relação ao Real (BRL)
        const taxaDolar = 5.49;
        const taxaEuro = 6.50;
        const taxaLibra = 7.58;
        const taxaIene = 0.050;
        const taxaYuan = 0.85;

        // Obter valor em Real (BRL)
        const valorReal = $("#real").val();

        // Converter para outras moedas
        const valorDolar = valorReal / taxaDolar;
        const valorEuro = valorReal / taxaEuro;
        const valorLibra = valorReal / taxaLibra;
        const valorIene = valorReal / taxaIene;
        const valorYuan = valorReal / taxaYuan;

        // Exibir valores nas outras caixas de entrada
        $("#dolar").val(valorDolar.toFixed(2));
        $("#euro").val(valorEuro.toFixed(2));
        $("#libra").val(valorLibra.toFixed(2));
        $("#iene").val(valorIene.toFixed(2));
        $("#yuan").val(valorYuan.toFixed(2));
    }

    // Executar a função ao carregar a página
    converterMoeda();

    // Executar a função quando o valor em Real (BRL) mudar
    $("#real").on("input", function(){
        converterMoeda();
    });
});
