function retornarNomeProduto() {
    var codigo = document.getElementById("codigo").value;
    var nomeProduto;

    if (codigo === "001") {
        nomeProduto = "Parafuso";
    } else if (codigo === "002") {
        nomeProduto = "Porca";
    } else if (codigo === "003") {
        nomeProduto = "Prego";
    } else if (codigo === "004") {
        nomeProduto = "Diversos";
    } else {
        nomeProduto = "Código inválido";
    }

    document.getElementById("nomeProduto").textContent = "Nome do Produto: " + nomeProduto;
}