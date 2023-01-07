/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
   2<23<

   ( x>y ? x : y)
 }

function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   return edad >=18 ? "Allowed" : "Not allowed"
}

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   switch(status)
   {case 1 : 
   return "Offline"
   case 2 :
      return "Away"
      default: return "Offline"}
   }

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   switch(idioma)
   {case 1: "aleman"
   return "Guten Tag"
   case 2: "mandarin"
      return "Ni Hao!"
      case 3: "ingles"
      return "Hello!"
      default: return "in"}
}

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
   switch(color)
   {case 1: "blue"
   return "This is blue"
   case 2: "red"
      return "This is red"
      case 3: "green"
      return "This is green"
      case 4: "orange"
      return "This is orange"
      default: return "Color not found"}


}

function esDiezOCinco(num) {
   // Retornar "true" si "num" es 10 o 5.
   // De lo contrario, retornar "false".
   // Tu código:
   if( num===10||num===5)return true; return false
}

function estaEnRango(num) {
   // Retornar "true" si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar "false".
   // Tu código:
   if(num<50 && num>20)return true ; return false
}

function esEntero(num) {
   // Retornar "true" si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna "false".
   // Tu código:
   if(num<1&&num>0)return false ; return true 
}

function fizzBuzz(num) {
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // De lo contrario, retorna el número.
   // Tu código:
   if(num%3===0&&num%5===0)return "fizzbuzz"
   if(num%3===0)return "fizz"
   if(num%5===0)return "buzz"
   return num
}

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si alguno de los argumentos es cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
   if(num1>num2&&num1>num2)return "Numero 1 es mayor y positivo"
   if(num1<0||num3<0||num2<0)return "Hay negativos"
   if(num3>num1&&num3>num2)return nm3 +1 
   if(num1===0||num3===0||num2===0)return "Error"
   return false
}

function esPrimo(num) {
   // Retornar True si "num" es primo.
   // De lo contrario retorna False.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   if(num===0||num===1)return false
   if(num===2||num===3||num===5||num===7)return false
   if(num%2===0|| num %3=== 0|| num%5=== 0|| num%7 === 0 )return false
}

function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   return valor ? "Soy verdadero" : "Soy falso" 
}

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar True.
   // Caso contrario, retornar False.
   // Tu código:
   return String(num). length===3
}

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
   let n =8;
   let res= 0;
   do {n=n-1 res; Number+5 }while (n>0)
   return res
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
