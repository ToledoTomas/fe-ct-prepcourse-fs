/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   const arrayPadre = [];

    for (const valor in objeto){
        arrayPadre.push([valor, objeto[valor]]);
    } return arrayPadre;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const objeto = {};
   for (let suma in string){
       if (string[suma] in objeto){
           objeto[string[suma]] = objeto[string[suma]] + 1
       } else {
           objeto[string[suma]] = 1
       }
   } return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let letra = string.split("");
    let mayus = "";
    let minus = "";
    let total = "";
    letra.forEach((ele)=> {
        if(ele === ele.toUpperCase()){
            mayus += ele
        } if (ele === ele.toLowerCase()){
            minus += ele
        }
    }) 
    total += `${mayus}${minus}`;
    return total;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let letras = [];
   let separar = frase.split(" ");
   for (let i=0; i<separar.length; i++){
       letras.push(separar[i].split("").reverse().join(""))
       
} return letras.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let string = numero.toString();
   let reves = string.split('');
   reves.reverse();
   if(reves.join('') == numero){
       return "Es capicua";
   } else {
       return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let letras = string.split('');
    let arrayLetras = [];
    letras.forEach((ele)=> {
        if(ele !== "a" && ele !== "b" && ele !== "c"){
            arrayLetras.push(ele);
        }
    }); 
    return(arrayLetras.join(''));
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort((a,b) => a.length - b.length);
    return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let array = [];
    for(let i=0; i<array1.length; i++){
        for(let y=0; y<array2.length; y++){
            if(array1[i] === array2[y]){
                array.push(array1[i]);
            }
        } 
    } return array;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
