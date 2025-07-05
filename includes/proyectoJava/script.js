// Variables del DOM
const boton = document.getElementById("change");
const titulo = document.getElementById("title");
const desc = document.getElementById("desc");
const cal = document.getElementById("cal");
const formularioActivoTexto = document.getElementById("formularioActivo");
const form = document.getElementById("dataForm");
const updateIdInput = document.getElementById("updateId");
const cargar = document.getElementById("cargar");
const linkInput = document.getElementById("linkInput");
const videoPreview = document.getElementById("videoPreview");

// Variables globales de datos
let formulario = localStorage.getItem("formulario") || "peliculas";
let peliculasDB = [];
let musicaDB = [];

// Actualiza el formulario activo
function actualizarPlaceholders() {
  if (formulario === "peliculas") {
    titulo.placeholder = "Título de la película";
    desc.placeholder = "Director";
    cal.placeholder = "Calificación";
    cal.type = "number";
    cal.min = "1";
    cal.max = "10";
    formularioActivoTexto.textContent = "Películas";
  } else {
    titulo.placeholder = "Título de la canción";
    desc.placeholder = "Artista";
    cal.placeholder = "Género";
    cal.type = "text";
    cal.removeAttribute("min");
    cal.removeAttribute("max");
    formularioActivoTexto.textContent = "Música";
  }
}

actualizarPlaceholders();

// Alternar formulario activo
boton.addEventListener("click", function (e) {
  e.preventDefault();
  formulario = formulario === "peliculas" ? "musica" : "peliculas";
  localStorage.setItem("formulario", formulario);
  actualizarPlaceholders();
});

// Agregar nuevo registro
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const nombre = titulo.value.trim();
  const autor = desc.value.trim();
  const valor = cal.value.trim();
  const link = linkInput.value.trim();

  if (!nombre || !autor || !valor) {
    alert("Por favor llena todos los campos.");
    return;
  }

  if (formulario === "peliculas") {
    const nuevaPelicula = {
      nombre: nombre,
      autor: autor,
      calificacion: valor,
      link: link
    };

    try {
      const res = await fetch("https://685b2ea289952852c2d8cfed.mockapi.io/peliculas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevaPelicula)
      });

      if (!res.ok) throw new Error("Error al agregar película");
      form.reset();
      linkInput.value = "";
      cargar.click();

    } catch (err) {
      console.error("Error:", err.message);
    }

  } else {
    const nuevaCancion = {
      titulo: nombre,
      artista: autor,
      genero: valor,
      link: link
    };

    try {
      const res = await fetch("https://685b2ea289952852c2d8cfed.mockapi.io/musica", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevaCancion)
      });

      if (!res.ok) throw new Error("Error al agregar canción");
      form.reset();
      linkInput.value = "";
      cargar.click();

    } catch (err) {
      console.error("Error:", err.message);
    }
  }
});

// Cargar datos desde la API
cargar.addEventListener("click", async function (e) {
  e.preventDefault();

  try {
    const resPeliculas = await fetch('https://685b2ea289952852c2d8cfed.mockapi.io/peliculas');
    if (!resPeliculas.ok) throw new Error("Error al cargar películas");
    peliculasDB = await resPeliculas.json();
    mostrarPeliculas(peliculasDB);

  } catch (error) {
    console.error("Error al cargar películas:", error.message);
  }

  try {
    const resMusica = await fetch('https://685b2ea289952852c2d8cfed.mockapi.io/musica');
    if (!resMusica.ok) throw new Error("Error al cargar música");
    musicaDB = await resMusica.json();
    mostrarMusica(musicaDB);

  } catch (error) {
    console.error("Error al cargar música:", error.message);
  }
});

function mostrarPeliculas(lista) {
  const tbody = document.querySelector("#moviesTable tbody");
  tbody.innerHTML = "";
  lista.forEach(p => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${p.id}</td>
      <td>${p.nombre}</td>
      <td>${p.autor}</td>
      <td>${p.calificacion}</td>
      <td><a href="${p.link}" target="_blank">Ver</a></td>
    `;
    tbody.appendChild(fila);
  });
}

function mostrarMusica(lista) {
  const tbody = document.querySelector("#musicTable tbody");
  tbody.innerHTML = "";
  lista.forEach(m => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${m.id}</td>
      <td>${m.titulo}</td>
      <td>${m.artista}</td>
      <td>${m.genero}</td>
      <td><a href="${m.link}" target="_blank">Ver</a></td>
    `;
    tbody.appendChild(fila);
  });
}

updateIdInput.addEventListener("input", async () => {
  const id = updateIdInput.value.trim();
  if (!id) {
    limpiarCampos();
    videoPreview.innerHTML = "";
    return;
  }

  if (formulario === "peliculas") {
    if (peliculasDB.length === 0) {
      const res = await fetch('https://685b2ea289952852c2d8cfed.mockapi.io/peliculas');
      peliculasDB = await res.json();
    }
    const encontrado = peliculasDB.find(p => p.id === id);
    if (encontrado) {
      titulo.value = encontrado.nombre || "";
      desc.value = encontrado.autor || "";
      cal.value = encontrado.calificacion || "";
      linkInput.value = encontrado.link || "";
      mostrarVideo(encontrado.link);
    } else {
      limpiarCampos();
      videoPreview.innerHTML = "";
    }

  } else {
    if (musicaDB.length === 0) {
      const res = await fetch('https://685b2ea289952852c2d8cfed.mockapi.io/musica');
      musicaDB = await res.json();
    }
    const encontrado = musicaDB.find(m => m.id === id);
    if (encontrado) {
      titulo.value = encontrado.titulo || "";
      desc.value = encontrado.artista || "";
      cal.value = encontrado.genero || "";
      linkInput.value = encontrado.link || "";
      mostrarVideo(encontrado.link);
    } else {
      limpiarCampos();
      videoPreview.innerHTML = "";
    }
  }
});

function limpiarCampos() {
  titulo.value = "";
  desc.value = "";
  cal.value = "";
  linkInput.value = "";
}

function mostrarVideo(link) {
  if (!link || (!link.includes("youtube.com") && !link.includes("youtu.be"))) {
    videoPreview.innerHTML = "";
    return;
  }

  let videoId = "";
  if (link.includes("youtube.com")) {
    const urlParams = new URLSearchParams(new URL(link).search);
    videoId = urlParams.get("v");
  } else if (link.includes("youtu.be")) {
    videoId = link.split("/").pop();
  }

  if (videoId) {
    videoPreview.innerHTML = `
      <iframe width="100%" height="200" 
        src="https://www.youtube.com/embed/${videoId}" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
    `;
  } else {
    videoPreview.innerHTML = "";
  }
}

const btnEliminar = document.getElementById("deleteBtn");

btnEliminar.addEventListener("click", async (e) => {
  e.preventDefault();
  const id = updateIdInput.value.trim();

  if (!id) {
    alert("Por favor ingresa un ID para eliminar.");
    return;
  }

  const url = formulario === "peliculas"
    ? `https://685b2ea289952852c2d8cfed.mockapi.io/peliculas/${id}`
    : `https://685b2ea289952852c2d8cfed.mockapi.io/musica/${id}`;

  try {
    const res = await fetch(url, { method: "DELETE" });
    if (!res.ok) throw new Error("Error al eliminar.");

    alert("Elemento eliminado correctamente.");
    updateIdInput.value = "";
    limpiarCampos();
    videoPreview.innerHTML = "";
    cargar.click();

  } catch (err) {
    console.error("Error al eliminar:", err.message);
  }
});

const btnActualizar = document.getElementById("updateBtn");

btnActualizar.addEventListener("click", async (e) => {
  e.preventDefault();
  const id = updateIdInput.value.trim();

  if (!id) {
    alert("Por favor ingresa un ID para actualizar.");
    return;
  }

  const nombre = titulo.value.trim();
  const autor = desc.value.trim();
  const valor = cal.value.trim();
  const link = linkInput.value.trim();

  if (!nombre || !autor || !valor) {
    alert("Completa todos los campos para actualizar.");
    return;
  }

  const url = formulario === "peliculas"
    ? `https://685b2ea289952852c2d8cfed.mockapi.io/peliculas/${id}`
    : `https://685b2ea289952852c2d8cfed.mockapi.io/musica/${id}`;

  const datos = formulario === "peliculas"
    ? { nombre, autor, calificacion: valor, link }
    : { titulo: nombre, artista: autor, genero: valor, link };

  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos)
    });

    if (!res.ok) throw new Error("Error al actualizar.");

    alert("Elemento actualizado correctamente.");
    updateIdInput.value = "";
    form.reset();
    linkInput.value = "";
    videoPreview.innerHTML = "";
    cargar.click();

  } catch (err) {
    console.error("Error al actualizar:", err.message);
  }
});

function mostrarVideo(link) {
  const container = document.getElementById("youtubeEmbedContainer");
  container.innerHTML = ""; // limpiar contenido anterior

  if (!link) {
    container.innerHTML = "<p>No hay video seleccionado</p>";
    return;
  }

  let videoId = "";

  // Extraer ID del video si es un link de YouTube válido
  const youtubeRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = link.match(youtubeRegex);

  if (match && match[1]) {
    videoId = match[1];
  } else {
    container.innerHTML = `<p>Link no válido de YouTube</p>`;
    return;
  }

  const iframe = document.createElement("iframe");
  iframe.width = "100%";
  iframe.height = "315";
  iframe.src = `https://www.youtube.com/embed/${videoId}`;
  iframe.frameBorder = "0";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;

  container.appendChild(iframe);
}