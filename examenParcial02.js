/**
 * NOTA: El video de explicacion se encuentra adjunto en los archivos, 
 * pero tambien lo puedes ver directamente desde este link publico 
 * en drive https://drive.google.com/file/d/1EXCj3q9QXQ168PebVRPFJxSjv8GitJo7/view?usp=drive_link
 */




//   *********** THE DESCENT **********

// game loop
while (true) {
    var highestH = 0;  // variable para guardar la altura mas alta encontrada
    var highestInd = 0; //guardara el numero de index o coordenada donde se ubica la altura mas alta encontrada

    for (let i = 0; i < 8; i++) {
        const mountainH = parseInt(readline()); // representa la altura ingresada de cada montaña
        if (highestH < mountainH) { //comparara el valor guardado en highestH con el nuevo valor ingresado en mountainH
            highestH = mountainH; //cada vez que un valor de altura mayor se encuentre en los valores ingresados en mountainH se guardara en highestH como el valor mas alto
            highestInd = i; //cada vez que encontremos un valor mas alto, tambien guardaremos su numero de index (i) como coordenada para atacar
        }
    }

//al finalizar el loop, tendremos la coordenada a atacar en highestInd que contendra la altura mas alta encontrada de todos los valores
    console.log(highestInd);     // mostrara la coordenada a atacar en el turno actual

}


//---------------------------------------------------------------------------------------------------------------------
//   ********** TEMPERATURES *********

const n = parseInt(readline()); // el numero de temperaturas a analizar
var inputs = readline().split(' '); //va a separar los valores recibidos en elementos string separados

var closestToZero; //guardaremos el valor mas cercano a cero aqui
if ( n === 0){ //si no se han ingresado temperaturas mostrara 0
    closestToZero = 0 ;
} else { // si al menos 1 temperatura ha sido ingresada continuaremos con el proceso de validacion
    closestToZero = parseInt(inputs[0]); // el valor inicial de closestToZero sera el primer valor recivido en inputs (index 0)

    for (let i = 0; i < n; i++) { // loop de recorrido para comparacion de todos los valores
        const t = parseInt(inputs[i]);//t guardara el valor del valor recibido en el index i que se esta comparando en ese momento y al mismo tiempo lo convertira en numero entero

        if(Math.abs(closestToZero) > Math.abs(t)) { //cualquier valor recibido sera transformado a su valor absoluto (positivo) y se compararan para ver cual es mayor
            closestToZero = t; //si el valor closestToZero es mayor, procederemos a sustituir su valor con el valor de t que seria el valor menor, por lo tanto el mas cercano a 0
        } else if (Math.abs(closestToZero) === Math.abs(t)){ //si la condicion anterior es falsa, procederemos a comparar si ambos valores son iguales
            if (t>0){ //si los valores son iguales, compararemos si son mayores a 0
                closestToZero = t; // si es mayor a 0 actualizaremos el valor de closestToZero al valor actual de t
            }
        }
        console.error({closestToZero, inputs, t})//mostrara en consola si se genera un error

    }
}
console.log(closestToZero); //Imprime el resultado final, la temperatura mas cercana a 0
