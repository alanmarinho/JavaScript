function calculaMedia(nota1, nota2, nota3) {
    let media = ((nota1 + nota2 + nota3) / 3)
    console.log(media)
    return media;
}

function statusAprovacao(media, quantidadeFaltas, cargaHoraria) {
    console.log(`2 ${media}`)
    let status
    if (media < 7) {
        status = "Reprovado por média ";
    } else {
        status = "Aprovado por média "
    }

    if (((quantidadeFaltas / cargaHoraria) * 100) > 25) {
        status += "Reprovado por falta "
    }

    return status
}

function percentualFrequencia(quantidadeFaltas, cargaHoraria) {
    return Math.abs(((quantidadeFaltas / cargaHoraria) * 100) - 100)
}

function limpar(tipo) {
    let resultadoDiv;
    if(tipo == 1){
        document.getElementById('nota1').value = "";
        document.getElementById('nota2').value = "";
        document.getElementById('nota3').value = "";
        document.getElementById('cargaHoraria').value = "";
        document.getElementById('quantFaltas').value = "";
        document.getElementById('nome').value = "";
        document.getElementById('disciplina').value = "";
    }else{

        resultadoDiv = document.getElementById("div1");
        resultadoDiv.innerHTML = "Resultado: <br>"
        document.getElementById('nota1').value = "";
        document.getElementById('nota2').value = "";
        document.getElementById('nota3').value = "";
        document.getElementById('cargaHoraria').value = "";
        document.getElementById('quantFaltas').value = "";
        document.getElementById('nome').value = "";
        document.getElementById('disciplina').value = "";
    }
}


function executa(event) {
    event.preventDefault();
    let nota1, nota2, nota3, nome, disciplina, cargaHoraria, quatFaltas
    let media, percentFrequencia, statusAprov
    let resultadoDiv;

    nota1 = Number(document.getElementById('nota1').value);
    nota2 = Number(document.getElementById('nota2').value);
    nota3 = Number(document.getElementById('nota3').value);
    cargaHoraria = Number(document.getElementById('cargaHoraria').value);
    quatFaltas = Number(document.getElementById('quantFaltas').value);
    nome = document.getElementById('nome').value;
    disciplina = document.getElementById('disciplina').value;

    media = calculaMedia(nota1, nota2, nota3)
    percentFrequencia = percentualFrequencia(quatFaltas, cargaHoraria)
    statusAprov = statusAprovacao(media, quatFaltas, cargaHoraria)

    resultadoDiv = document.getElementById("div1");
    resultadoDiv.innerHTML = "Resultado: <br>"
    resultadoDiv.innerHTML += `Nome: ${nome} <br>Média ${media.toFixed(2)} <br>Percentual de frequência ${percentFrequencia}% <br>Status Aprovação: ${statusAprov}`;

    limpar(1)
}