const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const RUTA_ARCHIVO = './datos.json';

// Si el archivo no existe, lo creamos como un arreglo vacío
if (!fs.existsSync(RUTA_ARCHIVO)) {
  fs.writeFileSync(RUTA_ARCHIVO, '[]');
}

// Leer datos del archivo JSON
function leerDatos() {
  const contenido = fs.readFileSync(RUTA_ARCHIVO, 'utf8');
  return JSON.parse(contenido);
}

// Guardar datos en el archivo JSON
function guardarDatos(datos) {
  fs.writeFileSync(RUTA_ARCHIVO, JSON.stringify(datos, null, 2));
}

// 📥 Crear (POST)
app.post('/datos', (req, res) => {
  const { nombre, edad, mensaje, link } = req.body;
  if (!nombre || !mensaje || !link || isNaN(edad)) {
    return res.status(400).json({ error: 'Faltan datos o edad inválida' });
  }

  const datos = leerDatos();
  const nuevo = {
    id: Date.now(),
    nombre,
    edad,
    mensaje,
    link
  };

  datos.push(nuevo);
  guardarDatos(datos);
  res.status(201).json(nuevo);
});

// 📄 Leer (GET)
app.get('/datos', (req, res) => {
  const datos = leerDatos();
  res.json(datos);
});

// 📝 Actualizar (PUT)
app.put('/datos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, edad, mensaje, link } = req.body;

  const datos = leerDatos();
  const index = datos.findIndex(d => d.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Dato no encontrado' });
  }

  datos[index] = { id, nombre, edad, mensaje, link };
  guardarDatos(datos);
  res.json(datos[index]);
});

// ❌ Eliminar (DELETE)
app.delete('/datos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const datos = leerDatos();
  const nuevos = datos.filter(d => d.id !== id);

  if (nuevos.length === datos.length) {
    return res.status(404).json({ error: 'Dato no encontrado para eliminar' });
  }

  guardarDatos(nuevos);
  res.json({ mensaje: 'Dato eliminado correctamente' });
});

// 🟢 Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
