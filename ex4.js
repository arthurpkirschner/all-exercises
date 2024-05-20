function calcularMedias() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

    var mediaAritmetica = (num1 + num2 + num3) / 3;
    var mediaPonderada = (num1 * 3 + num2 * 2 + num3 * 5) / 10; // soma dos pesos é 10
    var somaDasMedias = mediaAritmetica + mediaPonderada;
    var mediaDasMedias = somaDasMedias / 2;

    document.getElementById("mediaAritmetica").textContent = "Média aritmética: " + mediaAritmetica.toFixed(2);
    document.getElementById("mediaPonderada").textContent = "Média ponderada: " + mediaPonderada.toFixed(2);
    document.getElementById("somaMedias").textContent = "Soma das médias: " + somaDasMedias.toFixed(2);
    document.getElementById("mediaDasMedias").textContent = "Média das médias: " + mediaDasMedias.toFixed(2);
}