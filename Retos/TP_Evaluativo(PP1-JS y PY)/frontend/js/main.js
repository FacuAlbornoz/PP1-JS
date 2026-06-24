const API_URL = "http://127.0.0.1:8000/productos/";

//ELEMENTOS DEL DOM
const SECCION_LISTA = document.getElementById("seccion-lista");
const SECCION_FAVORITOS = document.getElementById("seccion-favoritos");
const SECCION_FORMULARIO = document.getElementById("seccion-formulario");

const NAV_LISTA_BTN = document.getElementById("nav-lista-btn");
const NAV_FAVS_BTN = document.getElementById("nav-favs-btn");
const NAV_FORM_BTN = document.getElementById("nav-form-btn");

const GALERIA_ARTICULOS = document.getElementById("galeria-articulos");
const GALERIA_FAVORITOS = document.getElementById("galeria-favoritos");
const FORM_ARTICULO = document.getElementById("form-articulo");

//LOCAL STORAGE (Favoritos)
function getFavorites() {
  const favs = localStorage.getItem('mis_favoritos');
  return favs ? JSON.parse(favs) : [];
}

function toggleFavorite(articulo) {
  let favs = getFavorites();
  const index = favs.findIndex((fav) => fav.id === articulo.id);

  if (index !== -1) {
    favs = favs.filter((fav) => fav.id !== articulo.id);
  } else {
    favs.push(articulo);
  }

  localStorage.setItem('mis_favoritos', JSON.stringify(favs));
  
  if (SECCION_FAVORITOS.classList.contains("block")) {
    renderFavoritos();
  } else {
    obtenerArticulos(); 
  }
}

//PETICIONES A LA API (CRUD)

async function obtenerArticulos() {
  try {
    const respuesta = await fetch(API_URL);
    const datos = await respuesta.json();
    renderArticulos(datos, GALERIA_ARTICULOS);
  } catch (error) {
    console.error("Error al obtener artículos:", error);
  }
}

async function buscarPorIdParaEditar(id) {
  try {
    const respuesta = await fetch(`${API_URL}${id}`);
    const articulo = await respuesta.json();

    document.getElementById("form-id").value = articulo.id;
    document.getElementById("form-nombre").value = articulo.nombre;
    document.getElementById("form-precio").value = articulo.precio;
    document.getElementById("form-marca").value = articulo.marca;
    document.getElementById("form-activo").checked = articulo.activo;

    document.getElementById("titulo-form").textContent = "Editar Artículo";
    cambiarVista("formulario");

  } catch (error) {
    console.error("Error al buscar artículo:", error);
  }
}

FORM_ARTICULO.addEventListener("submit", async (e) => {
  e.preventDefault();

  const idArticulo = document.getElementById("form-id").value;
  
  // Variables capturadas del formulario
  const nombreInput = document.getElementById("form-nombre").value;
  const marcaInput = document.getElementById("form-marca").value;
  const precioInput = parseFloat(document.getElementById("form-precio").value);
  const activoInput = document.getElementById("form-activo").checked;

  try {
    if (idArticulo === "") {
      // POST: Crear nuevo. Pide ProductoSchema (EXIGE el id en el objeto)
      const datosPost = {
        id: Math.floor(Math.random() * 10000) + 10, // ID random para cumplir con FastAPI
        nombre: nombreInput,
        marca: marcaInput,
        precio: precioInput,
        activo: activoInput
      };

      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosPost)
      });
      
    } else {
      // PUT: Editar. Pide ProductoUpdateSchema (NO LLEVA id en el objeto, va en la URL)
      const datosPut = {
        nombre: nombreInput,
        marca: marcaInput,
        precio: precioInput,
        activo: activoInput
      };

      await fetch(`${API_URL}${idArticulo}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosPut)
      });
    }

    FORM_ARTICULO.reset();
    document.getElementById("form-id").value = "";
    cambiarVista("lista");
    obtenerArticulos();

  } catch (error) {
    console.error("Error al guardar:", error);
  }
});

async function borrarArticulo(id) {
  if (confirm(`¿Seguro que querés borrar el artículo ID ${id}?`)) {
    try {
      await fetch(`${API_URL}${id}`, {
        method: "DELETE"
      });
      
      let favs = getFavorites();
      favs = favs.filter(f => f.id !== id);
      localStorage.setItem('mis_favoritos', JSON.stringify(favs));

      obtenerArticulos();
    } catch (error) {
      console.error("Error al borrar artículo:", error);
    }
  }
}

//RENDERIZADO DE HTML

function renderArticulos(articulos, contenedor) {
  if (!Array.isArray(articulos)) {
    contenedor.innerHTML = `<p class="col-span-full text-center text-red-500">Error al cargar los artículos. Verificá la conexión.</p>`;
    return;
  }

  contenedor.innerHTML = "";

  if (articulos.length === 0) {
    contenedor.innerHTML = `<p class="col-span-full text-center text-gray-500">No hay artículos disponibles.</p>`;
    return;
  }

  const currentFavs = getFavorites();

  articulos.forEach(articulo => {
    const isFavorite = currentFavs.find(f => f.id === articulo.id);
    
    // Etiqueta visual para saber si está activo
    const estadoTag = articulo.activo 
        ? `<span class="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">Activo</span>` 
        : `<span class="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded">Inactivo</span>`;

    const card = document.createElement("div");
    card.classList = "bg-white border rounded shadow p-4 flex flex-col justify-between";

    card.innerHTML = `
      <div>
        <div class="flex justify-between items-start">
          <h3 class="font-bold text-xl text-gray-800">${articulo.nombre}</h3>
          
          <button data-id="${articulo.id}" class="fav-btn p-1 rounded transition-colors ${isFavorite ? "text-yellow-500" : "text-gray-300 hover:text-yellow-400"}">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="${isFavorite ? "currentColor" : "none"}" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </button>
        </div>
        
        <p class="text-2xl text-blue-600 font-bold mt-2">$${articulo.precio}</p>
        <p class="text-gray-600 mt-2 text-sm capitalize">${articulo.marca}</p>
        <div class="mt-3">${estadoTag}</div>
      </div>

      <div class="mt-4 flex gap-2 border-t pt-4">
        <button class="edit-btn bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600 w-full">Editar</button>
        <button class="del-btn bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 w-full">Borrar</button>
      </div>
    `;

    const favBtn = card.querySelector(".fav-btn");
    favBtn.addEventListener("click", () => toggleFavorite(articulo));

    const editBtn = card.querySelector(".edit-btn");
    editBtn.addEventListener("click", () => buscarPorIdParaEditar(articulo.id));

    const delBtn = card.querySelector(".del-btn");
    delBtn.addEventListener("click", () => borrarArticulo(articulo.id));

    contenedor.appendChild(card);
  });
}

function renderFavoritos() {
  const favs = getFavorites();
  renderArticulos(favs, GALERIA_FAVORITOS);
}

//NAVEGACIÓN SPA
function cambiarVista(vista) {
  NAV_LISTA_BTN.className = "text-blue-200 hover:text-white px-2 py-1 transition-all";
  NAV_FAVS_BTN.className = "text-blue-200 hover:text-white px-2 py-1 transition-all";
  NAV_FORM_BTN.className = "text-blue-200 hover:text-white px-2 py-1 transition-all";

  SECCION_LISTA.classList.replace("block", "hidden");
  SECCION_FAVORITOS.classList.replace("block", "hidden");
  SECCION_FORMULARIO.classList.replace("block", "hidden");

  if (vista === "lista") {
    SECCION_LISTA.classList.replace("hidden", "block");
    NAV_LISTA_BTN.classList.add("font-bold", "border-b-2", "border-white", "text-white");
    NAV_LISTA_BTN.classList.remove("text-blue-200");
    obtenerArticulos();
  } 
  else if (vista === "favoritos") {
    SECCION_FAVORITOS.classList.replace("hidden", "block");
    NAV_FAVS_BTN.classList.add("font-bold", "border-b-2", "border-white", "text-white");
    NAV_FAVS_BTN.classList.remove("text-blue-200");
    renderFavoritos();
  } 
  else if (vista === "formulario") {
    SECCION_FORMULARIO.classList.replace("hidden", "block");
    NAV_FORM_BTN.classList.add("font-bold", "border-b-2", "border-white", "text-white");
    NAV_FORM_BTN.classList.remove("text-blue-200");
  }
}

NAV_LISTA_BTN.addEventListener("click", () => cambiarVista("lista"));
NAV_FAVS_BTN.addEventListener("click", () => cambiarVista("favoritos"));
NAV_FORM_BTN.addEventListener("click", () => {
  FORM_ARTICULO.reset();
  document.getElementById("form-id").value = "";
  document.getElementById("titulo-form").textContent = "Crear Artículo";
  cambiarVista("formulario");
});

// Inicio
obtenerArticulos();