// Variables
const nombre = prompt("Ingrese su nombre:");
let edad = parseInt(prompt("Ingrese su edad:"));
const password = prompt("Ingrese su contraseña:");

// Datos Ingresados
console.log("Datos ingresados:");
console.log(`Nombre: ${nombre}, Edad ${edad}, Contraseña:${password}`);

// Validacion
if (nombre == "") {
    console.log("Porfavor ingrese un nombre.");
} else if (edad < 18) {
    console.log("Acceso denegado.");
} else if (password.length < 6) { // length es para contar los caracteres de la variable
    console.log("Contraseña inválida.");
} else {
    edad = edad + 10;

    console.log(`Hola ${nombre}, en 10 años tendrás ${edad} años. Tu contraseña es: ${password}`);
}