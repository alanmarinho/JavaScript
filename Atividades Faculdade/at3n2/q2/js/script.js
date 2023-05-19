function pesoIdel(altura, sexo) {
    let pesoIdeal
    sexo = sexo.toUpperCase();
    if (sexo == "M") {
        return ((72.7 * altura) - 58.0).toFixed(2);
    } else return ((62.1 * altura) - 44.7).toFixed(2);
}

function limpar() {
    let resultadoDiv;
    
    resultadoDiv = document.getElementById("div1");
    resultadoDiv.innerHTML = "Resultado: <br>"
    document.getElementById('altura').value = "";
    document.getElementById('sexo').value = "";
}

function executa(event) {
    event.preventDefault();
    let altura, sexo
    let resultadoDiv;

    altura = Number(document.getElementById('altura').value);
    sexo = document.getElementById('sexo').value;
    resultadoDiv = document.getElementById("div1");

    resultadoDiv.innerHTML = "Resultado: <br>"
    resultadoDiv.innerHTML += `Peso ideal: ${pesoIdel(altura, sexo)}`
}