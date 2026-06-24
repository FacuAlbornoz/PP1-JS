const persona = {
    nombre: "Juan",
    edad: 30,
    status: "admin" //guest, user, admin
}


//------------------------------------------------------------------------------------------------------------------------
if (persona.edad > 18) {
    console.log("Es mayor de edad");
} else if (persona.edad === 18) {
    console.log("Tiene 18 años");
} else {
    console.log("Es menor de edad");
}
//------------------------------------------------------------------------------------------------------------------------
switch (persona.status) {
    case "admin":
        console.log("Es un administrador");
        break;
    case "user":
        console.log("Es un usuario");
        break;
    case "guest":
        console.log("Es un invitado");
        break;
    default:
        console.log("No se reconoce el status");
}
//------------------------------------------------------------------------------------------------------------------------
let visibilidad = persona.status === "admin" ? "visible" : "oculto";// Si es admin, visibilidad será "visible", de lo contrario será "oculto"
console.log(`El elemento es ${visibilidad}`);

let visibilidad2 = persona.status === "admin" && "visible"; // Si es admin, visibilidad será "visible", de lo contrario será false
console.log(`El elemento es ${visibilidad2}`);

function saludar(nombre = 'mundo') { // Parámetro con valor por defecto
    console.log(`Hola, ${nombre}!`);
}
saludar("Juan"); // Salida: Hola, Juan!
saludar(); // Salida: Hola, mundo!
//------------------------------------------------------------------------------------------------------------------------

function operador(num1, num2, operador) {
    let resultado;
    if (typeof num1 === "number" && typeof num2 === "number") {
        switch (operador) {
            case "+":
                resultado = num1 + num2;
                console.log(`El resultado de la suma es: ${resultado}`);
                break;
            case "-":
                resultado = num1 - num2;
                console.log(`El resultado de la resta es: ${resultado}`);
                break;
            default:
                console.log("Operador no reconocido");
        }
    }else{
        console.log("Al menos uno no es un numero");
    }
}
operador("Juan", 5); // Al menos uno no es un numero
operador(10, 5); // Operador no reconocido
operador(10, 5, "+"); // Ambos son numeros
operador(10, 5, "-"); // Ambos son numeros

//------------------------------------------------------------------------------------------------------------------------
// Ambas funciones hacen lo mismo, pero la segunda es una función flecha, que es una forma más concisa de escribir funciones en JavaScript.
function multiplicar(a, b) {
    return a * b;
}

const multiplicararrow = (a, b) => a * b;

console.log(multiplicar(5, 3)); // Salida: 15
console.log(multiplicararrow(5, 3)); // Salida: 15