let valor = Number(prompt("Digite uma número"));
const h1 = document.querySelector("h1");
h1.innerHTML = `Informações do número ${valor}`;
document.body.innerHTML += `Raiz quandrada: ${Math.sqrt(valor)} <br />`
document.body.innerHTML += `${valor} é inteiro?: ${!!(valor === Math.floor(valor))} <br />`
document.body.innerHTML += `${valor} é NaN: ${isNaN(valor)} <br />`
document.body.innerHTML += `Arredondade para baixo: ${Math.floor(valor)} <br />`
document.body.innerHTML += `Arredondade para cima: ${Math.ceil(valor)} <br />`
document.body.innerHTML += `Com duas casa decimais: ${valor.toFixed(2)} <br />`