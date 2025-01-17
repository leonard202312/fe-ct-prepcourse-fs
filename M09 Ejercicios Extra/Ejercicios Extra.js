/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var matriz = [];
   for(prop in objeto){
      matriz.push([prop, objeto[pro]])
   }
               return matriz
   
   //var arreglo = []
   //var key = [] 
   //key = Object.keys(objeto)

   //for(var i = 0 ; key.length;i++){
     // arreglo.push([key[i],objeto[key[i]]]); 
   //}
   //return arreglo ; 
}


function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objeto ={};
    for(var i = 0 ; i< string.length;i++){
      if(objeto.hasOwnProperty(string[i])){
         objeto[string[i]] = [string[i]] + 1 
   }else{
      objeto [string[i]] = 1
  }
   
};
return objeto  

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
  
   var mayúscula = "";
   var minusculas ="";
   for(var i =0 ; i < s.length;i++){
      if(s[i] === s[i]toLewerCase()){
         minusculas = minusculas s[i]
       }else{
         mayúscula = mayúscula + s[i]
       }
   }
            return mayúscula + minusculas;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var str = "The Henry Challenge is close!"
   var newstring = [];
   for(let i=0 ; i < str.length() ; i++){
      newstring.unshift(str[i])
   }

      return newstring.join("").split(" ").reverse().join(" ")  




   //var strToArray = str.split(" ")
   //var arrayFinal = strToArray.map(function(elemento){
     // return elemento.split("").reverse().join("");
   //})
   //return arrayFinal.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   var read = numero.toString().split("").reverse().join("")
   var resultado = parseIn(read)
   if(numero === resultado){
      return "Es capicua"
   }
      return "No es capicua"
}


function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var versionModificada cadena.split("").filter((e)=> e !== "a"&& e !== "b"&& e "c").join(" ")
   
   return versionModificada




}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.

   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return array.sort(function(a,b){
      return a.length - b.length 
   })
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let newarreglo = []
   for(let i = 0; i < array1.length;i++)¨{
      if(array2.includes(array1[i])){
         newarreglo.push(array1[i])
      }
   }
   return newarreglo;
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
