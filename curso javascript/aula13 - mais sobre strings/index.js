let String1 = 'texto "texto"';
let String2 = "texto 'texto'";
let String3 = "texto \"texto\""; // pode usar uma \ antes de aspas para mostrar elas no texto. Usar essa \ aantes do caractere se chama escape.
let String4 = "texto \\texto";
console.log(String1);
console.log(String2);
console.log(String3);
console.log(String4);

// as strings são indexadas, ou seja, são numeradas de 0 a n.
//             01234567
let String5 = "um texto";

// para mostrar um caractere em uma posisão expecífica e usa o chatAt
console.log(String5.charAt(3));

// para saber em qua indice uma palavra começa basta usar indexOf se não encontrar nada ele retorna -1.
console.log(String5.indexOf('texto'));
// a para definir a partir que qual indice a pesquisa começa.
console.log(String5.indexOf('texto', 4));
// para pesquisa de tras para frente, basta usar 0 lastIndexOf
console.log(String5.lastIndexOf('texto'));

