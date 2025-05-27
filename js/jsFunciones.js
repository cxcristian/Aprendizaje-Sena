//https://jfinfosena.github.io/25adso-js/content/p3/

//ejercicio basico 
//1
//Saludo simple
//Escribe una declaración de función que reciba un nombre como parámetro y devuelva un saludo. 
// Ejemplo: saludar("Ana") → "¡Hola, Ana!".
console.log("Ejercicio básico 1")
const saludo = nombre => "Hola " + nombre
console.log(saludo("la"))


//2
//Suma de dos números
//Crea una expresión de función que sume dos números y devuelva el resultado. Ejemplo:
//sumar(3, 5) → 8.
console.log("Ejercicio básico 2")
const sumar = (num1, num2) => num1 + num2;
console.log(sumar(70,30))

//3
//Arrow function para duplicar
//Escribe una arrow function que reciba un número y devuelva su doble. 
//Ejemplo: duplicar(4) → 8.
console.log("Ejercicio básico 3")
const doble = num => num + num
console.log(doble(2))

//4
//Par o impar
//Crea una declaración de función que determine si un número es par o impar. 
//Ejemplo: esPar(6) → true, esPar(7) → false.
console.log("Ejercicio básico 4")
const esPar = num => num % 2 === 0
console.log(esPar(5))

//5
//Valor por defecto
//Escribe una función que reciba un nombre y un saludo opcional (por defecto: "Hola").
// Ejemplo: saludar("Juan") → "Hola, Juan", saludar("Ana", "Buenos días") → "Buenos días, Ana".
console.log("Ejercicio básico 5")
const saludar = (nombre,saludoDef="Hola") => saludoDef + " " +nombre 
console.log(saludar("Alondra")); 
console.log(saludar("Alondra", "Buenos días")); 

//6
//Función sin parámetros
//Crea una arrow function sin parámetros que devuelva un mensaje fijo. 
//Ejemplo: mensaje() → "¡JavaScript es genial!".
console.log("Ejercicio básico 6")
const mensajeFijo= () => "JavaScript es GENIAL"
console.log(mensajeFijo())

//IIFE simple
//Escribe una IIFE que imprima en consola "¡Soy una IIFE!" sin contaminar el ámbito global.
//console.log("Ejercicio básico 7")
//(() => console.log("¡Soy una IIFE!"))();


//ejercicio intermedio
/*
//1
Suma de un array
Crea una expresión de función que reciba un array de números y devuelva su suma usando un 
bucle o reduce. Ejemplo: sumarArray([1, 2, 3]) → 6.*/
console.log("Ejercicio intermedio 1")
function sumaArray(array){
    let suma = 0;
    for(let i= 0;i < array.length; i++){
         suma += array[i]
    }
    return suma
}
let total = sumaArray([2,2,3])
console.log(total);

//2
//Rest parameters
//Escribe una función que use rest parameters para aceptar cualquier número de argumentos 
//y devuelva su producto. Ejemplo: multiplicar(2, 3, 4) → 24.
console.log("Ejercicio intermedio 2")
function multiplicar (...numeros){
    return numeros.reduce((total, nums) =>total*nums,1)
}
console.log(multiplicar(2,3,4))

//3
//Cierre (closure)
//Crea una función que devuelva otra función que incremente un contador privado cada vez que se llame.
// Ejemplo:
/*  const contador = crearContador();
    contador(); // 1
    contador(); // 2*/ 
console.log("Ejercicio intermedio 3")
const crearContador = () => {
  let contador = 5;

  return () => ++contador;
};

const contador = crearContador();

console.log(contador()); // 1
console.log(contador()); // 2
console.log(contador()); // 3

//4
/*Método en objeto
Crea un objeto calculadora con un método sumar (usando una declaración de función) y otro método restar (usando una arrow function). Ejemplo:


calculadora.sumar(5, 3); // 8
calculadora.restar(5, 3); // 2*/
console.log("Ejercicio intermedio 4")

const calculadora = {
    sumar:function (num1, num2){
        return num1 + num2;
    },
    restar: (num1, num2) => num1 - num2
}
console.log(calculadora.sumar(5, 3)); 
console.log(calculadora.restar(5, 3));

//5
console.log("Ejercicio básico 5")
/*Factorial recursivo
Escribe una expresión de función nombrada que calcule el factorial de un número. Ejemplo: factorial(5) → 120 */
const factorial = function calcular(n) {
  if (n === 0 || n === 1) return 1;
  return n * calcular(n - 1); 
};

console.log(factorial(5)); // 120

//6
console.log("Ejercicio intermedio 6")
/**Filtrar mayores
Crea una arrow function que reciba un array de números y devuelva un nuevo array con los números mayores a 10. Ejemplo: filtrarMayores([5, 12, 8, 15]) → [12, 15]. */

const filtro= (array) => {
    return array.filter(num => num > 10);
}
console.log(filtro([5, 12, 8, 15])); // [12, 15]

//7
console.log("Ejercicio intermedio 7")
/**Parámetros por defecto avanzado
Escribe una función que calcule el área de un rectángulo con base y altura, usando valores por defecto de 1 para ambos. 
Ejemplo: calcularArea(5) → 5, calcularArea(5, 3) → 15. */

const calcularArea = (base = 1, altura = 1) => base * altura;
console.log(calcularArea(6));

//Ejercicios avanzados
//1
console.log("Ejercicio avanzados 1")
/*Callback
Crea una función que reciba un array de números y una función de callback para procesar cada elemento. Ejemplo:
procesar([1, 2, 3], num => num * 2); // [2, 4, 6] */