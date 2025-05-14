/*Ejercicio 1: Procesador de nombre y edad (procesador_nombre_edad.js)
Enunciado: Escribe un programa que pida al usuario su nombre y edad usando
 prompt. Convierte la edad a un número entero. Calcula la edad en días multiplicando por 365 (constante). Verifica si el nombre tiene menos de 5 caracteres.
 Usa var para la variable del nombre, let para la edad y el resultado de la comparación, y const para la constante. Declara una variable con valor null.
  Muestra todos los resultados en la consola, incluyendo el nombre, edad en días, si el nombre es corto y el valor nulo.
*/
function ejercicio1(){
var nombre = prompt("Ingrese su nombre:");
let edad = prompt("ingrese su edad");
let edadInt = parseInt(edad);//parseo de la edad :D
const DIASVIVIDOS = edadInt * 365;
let cantLetras = nombre.length  < 5;
let nulo = null;

let mensaje = `
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Nombre:</strong> ${edadInt}</p>
    <p><strong>Edad en días:</strong> ${DIASVIVIDOS}</p>
    <p><strong>¿Nombre corto? (menos de 5 letras)</strong> ${cantLetras}</p>
    <p><strong>Valor nulo:</strong> ${nulo}</p>
    
  `;
  document.getElementById("resultado1").innerHTML = mensaje;

};
/*Ejercicio 2: Conversor de altura (conversor_altura.js)
Enunciado: Crea un script que pida al usuario su altura en metros (ej. 1.75)
 usando prompt. Convierte la entrada a un número decimal. Calcula la altura en centímetros (multiplicando por 100) y en milímetros (multiplicando centímetros por 10).
 Verifica si la altura es mayor a 1.5 metros (constante). Usa let para la altura y conversiones, var para la variable de milímetros y una variable sin asignar
  (undefined), y const para la constante de referencia. Muestra en la consola la altura en centímetros, milímetros, si es alta y el valor de la variable sin asignar.
*/
function ejercicio2(){
let altura = prompt("ingrese su altura en metros:");
altura = parseFloat(altura)
let alturaCm = altura * 100;
var alturaMlm = alturaCm * 10
const ESALTO = altura > 1.5;
var quesoRayado;

 const resultadoHTML = `
    <p><strong>Altura en cm:</strong> ${alturaCm}</p>
    <p><strong>Altura en mm:</strong> ${alturaMlm}</p>
    <p><strong>¿Es mayor a 1.5m?:</strong> ${ESALTO}</p>
    <p><strong>Valor sin asignar:</strong> ${quesoRayado}</p>
  `;
  document.getElementById("resultado2").innerHTML = resultadoHTML; 
};
/*Ejercicio 3: Calculadora de peso (calculadora_peso.js)
Enunciado: Desarrolla un programa que solicite al usuario su peso en kilogramos
 con prompt. Convierte el peso a un número decimal. Calcula el peso en gramos (multiplicando por 1000). Verifica si el peso es mayor a 70 kg (constante).
 Usa var para la entrada y la comparación, let para el peso y los gramos, y const para la constante. Crea una combinación lógica con el resultado de la comparación
  y true usando &&. Muestra en la consola el peso en gramos, si es mayor a 70 kg y el resultado de la combinación lógica.
*/

function ejercicio3(){
var entradaPeso = prompt("ingrese su peso en kg");
let peso = parseFloat(entradaPeso);
const LIMITEPESO = 70;
let pesoGr = peso *1000;
var esPesado = peso > LIMITEPESO;
let combinacionLogica = esPesado && true;

 const resultadoHTML = `
    <p><strong>Peso en gramos:</strong> ${pesoGr}</p>
    <p><strong>¿Es mayor a 70kg?:</strong> ${esPesado}</p>
    <p><strong>Resultado lógico (mayor y true):</strong> ${combinacionLogica}</p>
  `;
  document.getElementById("resultado3").innerHTML = resultadoHTML;
};

/*Ejercicio 4: Procesador de texto (procesador_texto.js)
Enunciado: Escribe un script que pida al usuario un texto con prompt. Concatena
 el texto con un saludo constante ("¡Tu texto es: "). Verifica si el texto tiene más de 10 caracteres. Usa const para el saludo, let para el texto y la comparación,
 y var para la concatenación y una variable con valor null. Aplica un operador lógico ! para negar el resultado de la comparación. Muestra en la consola el texto
  completo, si es largo, la negación y el valor nulo
*/

function ejercicio4(){
let texto = prompt("ingrese un texto: ")
const MENSAJE ="Tu texto es: ";
let limit = texto.length > 10;
var concatenacion = MENSAJE + texto;
var nulo = null
let negacion = !limit;
 const resultadoHTML = `
    <p><strong>Texto completo:</strong> ${concatenacion}</p>
    <p><strong>¿Texto largo? (más de 10 caracteres):</strong> ${limit}</p>
    <p><strong>Negación (!esLargo):</strong> ${negacion}</p>
    <p><strong>Valor nulo:</strong> ${nulo}</p>
  `;
  document.getElementById("resultado4").innerHTML = resultadoHTML;

};

/*Ejercicio 5: Calculadora de área (calculadora_area.js)
Enunciado: Crea un programa que solicite al usuario el ancho y alto de un rectángulo
 con prompt. Convierte ambas entradas a números decimales. Calcula el área (ancho * alto). Verifica si el área es mayor a 50 (constante).
 Usa let para las entradas y la comparación, var para el ancho y una variable sin definir (undefined), y const para la constante. Muestra en la consola el área,
  si es mayor a 50 y el valor de la variable sin definir.
*/
function ejercicio5(){ 
let ancho = prompt("ingrese el ancho de un rectangulo");
let alto = prompt("ingrese el alto de un rectangulo");
var ancho2 = parseFloat(ancho);
alto = parseFloat(alto);
let area = ancho2 * alto;
const LIMIT = 50;
let sePaso = area > LIMIT;
var noDefinido;

const resultadoHTML = `
    <p><strong>Área:</strong> ${area}</p>
    <p><strong>¿Área mayor a 50?:</strong> ${sePaso}</p>
    <p><strong>Valor sin definir:</strong> ${noDefinido}</p>
  `;
  document.getElementById("resultado5").innerHTML = resultadoHTML;
};
/*Ejercicio 6: Conversor de tiempo (conversor_tiempo.js)
Enunciado: Desarrolla un script que pida al usuario una cantidad de horas con prompt.
 Convierte la entrada a un número decimal. Calcula los minutos (horas * 60) y los segundos (minutos * 60). Verifica si la cantidad de horas es mayor a 1.
 Usa var para las horas y los segundos, let para los minutos y la comparación, y const para las constantes de conversión. Muestra en la consola los minutos, segundos
  y si es mayor a 1 hora.
*/
function ejercicio6(){
let dato = prompt("ingrese una cantidad de horas")
var horas = parseFloat(dato);
const NUM60 = 60
let minutos = horas * NUM60
var segundos =  minutos * NUM60
let esMayor = horas > 1

const resultadoHTML = `
    <p><strong>Minutos:</strong> ${minutos}</p>
    <p><strong>Segundos:</strong> ${segundos}</p>
    <p><strong>¿Mayor a 1 hora?:</strong> ${esMayor}</p>
  `;
  document.getElementById("resultado6").innerHTML = resultadoHTML;

}
/*Ejercicio 7: Comparador de números (comparador_numeros.js)
Enunciado: Escribe un programa que solicite al usuario dos números con prompt. Convierte las entradas a números decimales.
 Calcula la suma y la diferencia de los números. Verifica si los números son estrictamente iguales (===).
 Usa let para los números y la comparación, var para las entradas y la suma, y const para el resultado de la comparación. Aplica un operador lógico || con el resultado
  de la comparación y false. Muestra en la consola la suma, diferencia, si son iguales y el resultado de la combinación lógica.
*/

function ejercicio7(){
var num1 =prompt("ingrese un numero");
let num1Dec = parseFloat(num1)
var num2 =prompt("ingrese un numero");
let num2Dec = parseFloat(num2)

var suma = num1Dec + num2Dec;
let diferencia = num1Dec - num1Dec
let igualdad = num1 === num2;
let combinacionLogica = sonIguales || false;

 const resultadoHTML = `
    <p><strong>Suma:</strong> ${suma}</p>
    <p><strong>Diferencia:</strong> ${diferencia}</p>
    <p><strong>¿Son estrictamente iguales?:</strong> ${igualdad}</p>
    <p><strong>Resultado lógico (|| false):</strong> ${combinacionLogica}</p>
  `;
  document.getElementById("resultado7").innerHTML = resultadoHTML;


};
/*Ejercicio 8: Procesador de distancia (procesador_distancia.js)
Enunciado: Crea un script que pida al usuario una distancia en kilómetros con prompt. Convierte la entrada a un número decimal.
 Calcula la distancia en metros (kilómetros * 1000) y centímetros (metros * 100). Verifica si la distancia es menor a 1 km.
 Usa const para la constante de conversión, let para la distancia y los metros, y var para la comparación y una variable con valor null.
  Muestra en la consola los metros, centímetros, si es menor a 1 km y el valor nulo.
*/

function ejercicio8(){
let distanciaKm = parseFloat(prompt("Ingrese una distancia en KM"));
const CONVMETROS = 1000
const CONVCM = 100;
let metros = distanciaKm * CONVMETROS;
let centimetros = metros * CONVMETROS;
var esMenor1Km = distanciaKm < 1;
var nulo = null;

const resultadoHTML = `
    <p><strong>Distancia en metros:</strong> ${metros}</p>
    <p><strong>Distancia en centímetros:</strong> ${centimetros}</p>
    <p><strong>¿Es menor a 1 km?:</strong> ${esMenor1Km}</p>
    <p><strong>Valor nulo:</strong> ${nulo}</p>
  `;
  document.getElementById("resultado8").innerHTML = resultadoHTML;
}



/*Ejercicio 9: Calculadora de precio (calculadora_precio.js)
Enunciado: Desarrolla un programa que solicite al usuario el precio de un producto con prompt. Convierte la entrada a un número decimal.
 Calcula el precio con un descuento del 10% (constante). Verifica si el precio original es mayor a 100.
 Usa var para la entrada y la comparación, let para el precio, el precio con descuento y la negación, y const para el descuento. 
 Aplica un operador lógico ! para negar el resultado de la comparación. Declara una variable undefined. Muestra en la consola el precio con descuento, si es mayor a 100,
  la negación y el valor sin asignar.
*/
function ejercicio9(){
    var precio = prompt("Ingrese el valor del producto");
    let percioDecimal = parseFloat(precio)
    const DESCUENTO = 0.10;
    let nuevoPrecio = precio - (precio * DESCUENTO)
    var esMayor = percioDecimal > 100;
    let noEsMayor = !esMayor;
    var noDefinido;

    const resultadoHTML = `
    <p><strong>Precio con descuento:</strong> ${nuevoPrecio}</p>
    <p><strong>¿Es mayor a 100?:</strong> ${esMayor}</p>
    <p><strong>Negación (no es mayor a 100):</strong> ${noEsMayor}</p>
    <p><strong>Valor sin asignar:</strong> ${noDefinido}</p>
  `;
  document.getElementById("resultado9").innerHTML = resultadoHTML;

}
/*Ejercicio 10: Procesador de datos personales (procesador_datos_personales.js)
Enunciado: Escribe un script que pida al usuario su nombre, edad y peso con prompt. Convierte la edad a un número entero y el peso a un número decimal.
 Calcula la edad en meses (edad * 12, constante) y el peso en gramos (peso * 1000).
 Verifica si el nombre está vacío (=== "") y si la edad es par (% 2 === 0). Usa let para el nombre, edad, peso y comparaciones, var para las entradas de edad 
 y los gramos, y const para la constante. Aplica un operador lógico || para combinar las comparaciones. Muestra en la consola el nombre, edad en meses, peso en gramos,
  si el nombre está vacío, si la edad es par y el resultado de la combinación lógica.
*/
function ejercicio10(){
    let nombre = prompt("ingrese su nombre:")
    let edad = prompt("ingrese su edad:")
    let peso = parseFloat(prompt("ingrese su peso:"))

    var edadInt = parseInt(edad)
    const MESESXANIO = 12;

    let edadEnMeses = edad * MESESXANIO;
    var pesoEnGramos = peso * 1000;

    let nombreVacio = nombre === "";
    let edadPar = edadInt % 2 === 0;
    
    let resultadoLogico = nombreVacio || edadPar;

    const resultadoHTML = `
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Edad en meses:</strong> ${edadEnMeses}</p>
    <p><strong>Peso en gramos:</strong> ${pesoEnGramos}</p>
    <p><strong>¿El nombre está vacío?:</strong> ${nombreVacio}</p>
    <p><strong>¿La edad es par?:</strong> ${edadPar}</p>
    <p><strong>Resultado lógico (vacío || par):</strong> ${resultadoLogico}</p>
  `;
  document.getElementById("resultado10").innerHTML = resultadoHTML;
}