function calcularReajuste() {
    var saldo = parseFloat(document.getElementById("saldoInput").value);
    var saldoReajustado = saldo * 1.01; // Reajuste de 1%
    document.getElementById("saldoReajustado").textContent = "R$ " + saldoReajustado.toFixed(2);
}