function retornarMaior() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);

    var maiorValor = Math.max(valor1, valor2);

    document.getElementById("resultado").textContent = "O maior valor é: " + maiorValor;
}