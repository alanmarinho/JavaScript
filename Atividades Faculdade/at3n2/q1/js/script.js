function ordenaCrescente(num1, num2, num3) {
    let maior, meio, menor;
    console.log(num1, num2, num3);
    if (num1 <= num2 && num1 <= num3) {
        menor = num1
        if (num2 <= num3) {
            meio = num2
            maior = num3
        } else {
            meio = num3
            maior = num2
        }
    } else if (num2 <= num1 && num2 <= num3){
        menor = num2
        if (num1 <= num3) {
            meio = num1
            maior = num3
        } else {
            meio = num3
            maior = num1
        }
    } else if (num3 <= num1 && num3 <= num2){
        menor = num3
        if (num1 <= num2) {
            meio = num1
            maior = num2
        } else {
            meio = num2
            maior = num1
        }
    }
    return [menor, meio, maior]
}

function ordenaDecrescente(num1, num2, num3) {
    let maior, meio, menor;
    if (num1 <= num2 && num1 <= num3) {
        menor = num1
        if (num2 <= num3) {
            meio = num2
            maior = num3
        } else {
            meio = num3
            maior = num2
        }
    } else if (num2 <= num1 && num2 <= num3){
        menor = num2
        if (num1 <= num3) {
            meio = num1
            maior = num3
        } else {
            meio = num3
            maior = num1
        }
    } else if (num3 <= num1 && num3 <= num2){
        menor = num3
        if (num1 <= num2) {
            meio = num1
            maior = num2
        } else {
            meio = num2
            maior = num1
        }
    }

    return [maior, meio, menor]
}

function limpar() {
    let resultadoDiv;
    
    resultadoDiv = document.getElementById("div1");
    resultadoDiv.innerHTML = "Resultado: <br>"
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('num3').value = "";
}

function executa(event) {
    event.preventDefault();

    let numero1, numero2, numero3;
    let resultadoDiv;
    
    resultadoDiv = document.getElementById("div1");
    numero1 = Number(document.getElementById('num1').value);
    numero2 = Number(document.getElementById('num2').value);
    numero3 = Number(document.getElementById('num3').value);

    resultadoDiv.innerHTML = "Resultado: <br>"
    resultadoDiv.innerHTML += `Crescente: ${ordenaCrescente(numero1, numero2, numero3)}</br>`;
    resultadoDiv.innerHTML += `Decrescente: ${ordenaDecrescente(numero1, numero2, numero3)}</br>`;

}