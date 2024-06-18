const Mate = {};

function suma(a, b){
    return a + b;
}
function resta(a, b){
    return a - b;
}
function multiplicacion(a, b){
    return a * b;
}
function division(a, b){
    
    if (b != 0){

        return a / b;
}
    else{
        return "Error: No se puede dividir entre cero"
    }
} 

Mate.suma = suma
Mate.resta = resta
Mate.multiplicacion = multiplicacion
Mate.division = division
module.exports = Mate;

/*     
console.log("Suma de 10 y 5:", suma(10, 5))
console.log("Resta de 10 y 5:", resta(10, 5))
console.log("Multiplicación de 10 por 5:", multiplicacion(10, 5))
console.log("División de 10 por 5:", division(10, 5))
*/
