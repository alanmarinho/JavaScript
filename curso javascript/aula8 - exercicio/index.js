// crie um script usando constantes e variáveis que gere a seguinte saída:

// Luiz Otávio Miranda tem 30 de idade, pesa 84 kg
// tem 1.8 de altura e seu IMC é de 25.9259...
// Luiz Otávio nasceu em 1993

const nome = 'Alan';
const sobrenome = 'Marinho';
let  peso = 84;
let alturaMetro = 1.8;
let IMC
let idade = 30;
let anoNascimento

function calculaIMC(altura, peso) {
    return peso / (altura * altura);
}

function calculaAnoNascimento(idade){
    let data = new Date(); 
    ano = data.getFullYear();
    return ano - idade;
}
            
console.log(`${nome} ${sobrenome} tem ${idade} de idade, pesa ${peso} kg`);  
console.log(`tem ${alturaMetro} de altura e seu IMC é de ${calculaIMC(alturaMetro, peso)}`);  
console.log(`${nome} nasceu em ${calculaAnoNascimento(idade)}`);  