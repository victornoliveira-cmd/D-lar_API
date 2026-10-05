
function atualizarDolar() {

    fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
        .then(resposta => resposta.json())
        .then(dados => {

            let dolar = dados.USDBRL;

            let valor = parseFloat(dolar.bid);
            let maior = parseFloat(dolar.high);
            let menor = parseFloat(dolar.low);

            document.getElementById("valor").innerText =
                "R$ " + valor.toFixed(2);

            document.getElementById("maior").innerText =
                "R$ " + maior.toFixed(2);

            document.getElementById("menor").innerText =
                "R$ " + menor.toFixed(2);

            document.getElementById("atualizacao").innerText =
                "Última atualização: " + new Date().toLocaleTimeString();

        })
        .catch(erro => {

            document.getElementById("valor").innerText =
                "Erro ao carregar";

            console.log(erro);

        });
}


// Atualiza assim que abrir a página
atualizarDolar();


// Atualiza a cada 10 segundos
setInterval(atualizarDolar, 10000);