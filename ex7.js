function verificarImpar() {
    var numero = parseInt(document.getElementById("numero").value);

    if (numero % 2 !== 0) {
        document.getElementById("resultado").textContent = "O número é ímpar.";
    } else {
        document.getElementById("resultado").textContent = "O número não é ímpar.";
    }
}