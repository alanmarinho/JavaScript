function calculaJuros(valor, juros){
    return (valor + (valor * juros))
}

function calculaDesconto(valor, desconto){
    return (valor - (valor * desconto))


}

function limpar() {
    let resultadoDiv;
    
    resultadoDiv = document.getElementById("div1");
    resultadoDiv.innerHTML = "Resultado: <br>"
    document.getElementById('valor').value = "";
    document.getElementById('formaPag').value = "";
}

function executa(event) {
    event.preventDefault();
    let valor, dropBox, taxa, formaPag
    let resultadoDiv;

    valor = Number(document.getElementById('valor').value);
    dropBox = document.getElementById('formaPag');
    formaPag = dropBox.options[dropBox.selectedIndex].dataset.type;
    taxa = Number(dropBox.value);

    resultadoDiv = document.getElementById("div1");
    resultadoDiv.innerHTML = "Resultado: <br>"
    
    if(formaPag == 'desconto'){
        resultadoDiv.innerHTML = `O valor do produto com ${taxa *100}% de desconto é: ${calculaDesconto(valor, taxa)}`;
    }else{
        resultadoDiv.innerHTML = `O valor do produto com ${taxa *100}% de juros é: ${calculaJuros(valor, taxa)}`;
    }
}