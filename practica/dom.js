// const p = document.getElementById("parrafo"); // Este método devuelve un elemento del DOM por su id
// console.log(p);
// console.log(p.parentElement);

// const card = document.querySelector("#demo-dom");
// console.log(card);
// console.log(card.children);
// const strong = document.querySelector("strong");
// console.log(strong);

// const todosLosSection = document.querySelectorAll("section");
// console.log(todosLosSection);

// const nuevo = document.createElement("em");
// nuevo.textContent = "--- Nuevo elemento creado desde JS ---";
// p.append(nuevo); //append agrega al final del elemento / prepend agrega al principio del elemento / after agrega después del elemento / before agrega antes del elemento
// p.setAttribute("data-autor", "Facundo");
// console.log(p.dataset.autor);

// p.classList.add("text-red-500", "font-bold");

// nuevo.remove(); //remueve el elemento del DOM
// p.replaceWith(document.createElement("hr")); //remueve el elemento del DOM y lo reemplaza por otro

const btn = document.getElementById("btnCambiar");
btn.addEventListener("click", () => {
    const p = document.getElementById("parrafo");
    p.textContent = "El contenido del párrafo ha sido cambiado";
    p.classList.add("text-cyan-500", "font-bold");
});


const link = document.getElementById("linkTailwind"); // Traigo el elemento del DOM
link.addEventListener("click", (event) => {
    event.preventDefault(); // Evita que se ejecute la acción por defecto del evento
    alert("Se ha prevenido la acción por defecto del evento");
});
const p = document.getElementById("parrafo");
link.addEventListener("mouseover", (event) => {
    event.preventDefault(); // Evita que se ejecute la acción por defecto del evento
    p.textContent = "El mouse está sobre el enlace";
});
link.addEventListener("mouseout", (event) => {
    event.preventDefault(); // Evita que se ejecute la acción por defecto del evento
    p.textContent = "El mouse ha salido del enlace";
});

const form = document.getElementById("formTodo");
const input = document.getElementById("inputTodo");
const lista = document.getElementById("lista");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const valor = input.value.trim();
    if (!valor) return;
    const li = document.createElement("li");
    li.innerHTML = `${valor} <button data-accion="done">✅</button> <button data-accion="eliminar">🗑️</button>`;
    lista.appendChild(li);
    form.reset();
    input.focus();
});
lista.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if(!btn) return;
    const li = btn.closest("li");
    const accion = btn.dataset.accion;
    if(accion === "done") {li.classList.add("text-green-400");}
    if(accion === "eliminar") {li.remove();}
});