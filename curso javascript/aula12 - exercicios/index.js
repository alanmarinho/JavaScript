let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

//solução 1
console.log(varA, varB, varC);
let temp = varA;
varA = varB;
varB = varC;
varC = temp;
console.log(varA, varB, varC);

varA = 'A';
varB = 'B';
varC = 'C';

//solução 2
console.log(varA, varB, varC);
[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);
