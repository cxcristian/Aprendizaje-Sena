/*Declara variables para el tiempo actual (tiempo, inicializado en 0), el límite (30 minutos) y el costo total (costo, inicializado en 0).
Antes del bucle, usa un condicional if para verificar si tiempo es 0. Si es así, muestra un mensaje como "Error: El tiempo no puede ser cero" y termina el programa.
Usa un bucle while que se ejecute mientras tiempo sea menor que el límite (30 minutos).
Dentro del bucle, incrementa tiempo en 5 minutos.
Usa un condicional if-else para calcular el costo de los 5 minutos actuales: multiplica 5 por $0.5 si tiempo es menor o igual a 15, o por $0.3 si es mayor.
Suma el costo calculado al costo total.
Muestra un mensaje en cada iteración con el tiempo acumulado y el costo acumulado (por ejemplo, "Tiempo: 5 minutos, Costo: $2.5").
Al salir del bucle, muestra el costo total de la entrega.*/

let tiempo = 0;       // Tiempo inicializado en 0
let limite = 30;      // Límite de 30 minutos
let costo = 0;        // Costo inicializado en 0

if (tiempo === 0) {
    console.log("Error: El tiempo no puede ser cero");
} else {
    while (tiempo < limite) {
        tiempo += 5; 

        if (tiempo <= 15) {
        
            costo += 5 * 0.5; 
        } else {
            // Si tiempo es mayor a 15, costo es 5 * 0.3 = 1.5 por bloque
            costo += 5 * 0.3;
        }

        // Mostrar tiempo acumulado y costo acumulado (usando template string)
        console.log(`Tiempo: ${tiempo} minutos, Costo acumulado: $${costo}`);
    }

    console.log(`Costo total de la entrega: $${costo}`);
}
