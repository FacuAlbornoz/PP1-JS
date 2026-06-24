const frutas = [
    {nombre: "Manzana", color: "Rojo", precio: 1.5},
    {nombre: "Banana", color: "Amarillo", precio: 0.5},
    {nombre: "Naranja", color: "Naranja", precio: 0.8},
    {nombre: "Pera", color: "Verde", precio: 1.2},
    {nombre: "Uva", color: "Morado", precio: 2.0},
    {nombre: "Fresa", color: "Rojo", precio: 0.3},
    {nombre: "Kiwi", color: "Verde", precio: 1.8}
];

//-----------------------------------------------------------------------------------------------------------------------

// for (let i = 0; i < frutas.length; i++) {
//     console.log(`Fruta: ${frutas[i].nombre}, Color: ${frutas[i].color}, Precio: $${frutas[i].precio}`);
// }

//-----------------------------------------------------------------------------------------------------------------------
// let i = 0;
// while (i < frutas.length) {
//     console.log(`Fruta: ${frutas[i].nombre}, Color: ${frutas[i].color}, Precio: $${frutas[i].precio}`);
//     i++;
//     console.log("Fruta procesada");
// }

//-----------------------------------------------------------------------------------------------------------------------
// let i = 6;
// do {
//     console.log(`Fruta: ${frutas[i].nombre}, Color: ${frutas[i].color}, Precio: $${frutas[i].precio}`);
//     i++;
// }while(i < frutas.length);

//-----------------------------------------------------------------------------------------------------------------------
// for (let fruta of frutas) {
//     console.log(`Fruta: ${fruta.nombre}, Color: ${fruta.color}, Precio: $${fruta.precio}`);
// }

//-----------------------------------------------------------------------------------------------------------------------
// for (let index in frutas) {
//     console.log(`Fruta: ${frutas[index].nombre}, Index: ${index}`);
// }

//-----------------------------------------------------------------------------------------------------------------------
//forEach Map

//Hace algo en cada elemento del array, no devuelve nada
// frutas.forEach((fruta, index) => { 
//     console.log(`Fruta: ${fruta.nombre}, Color: ${fruta.color}, Precio: $${fruta.precio}, Index: ${index}`);
// });

//Devuelve un nuevo array con el resultado de la función aplicada a cada elemento del array original
// const frutasMapeadas = frutas.map((fruta) => { 
//     return fruta;
// });
// console.log(frutasMapeadas);

//-----------------------------------------------------------------------------------------------------------------------
//filter and reduce

//filter
// const soloRojo = frutas.filter(fruta => fruta.color === "Rojo");
// console.log(soloRojo);
// console.log(`Nombre de la segunda fruta roja: ${soloRojo[1].nombre}`);

//reduce
// const conteoPorColor = frutas.reduce((acumulador, fruta) => {
//     let color = fruta.color;
//     if (acumulador[color]) {
//         acumulador[color]++;
//     } else {
//         acumulador[color] = 1;
//     }
//     return acumulador;
// }, {}); // esto indica que el acumulador empieza como un objeto vacío

// console.log(conteoPorColor);



//Los bucles mas usados son forEach, map, filter y reduce. Cada uno tiene su uso específico dependiendo de lo que queramos hacer con el array. Es importante elegir el bucle adecuado para cada situación para escribir código más limpio y eficiente.