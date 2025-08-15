// Elementos del DOM
const nombreAsistencia = document.getElementById("nombre-asistencia");
const estadoAsistencia = document.getElementById("estado-asistencia");
const nombreProfesional = document.getElementById("nombre-profesional");
const telefonoProfesional = document.getElementById("telefono-profesional");

// Cargar datos iniciales desde la API
fetch("http://localhost:3000/asistencias")
  .then(res => res.json())
  .then(data => {
    actualizarVista(data);
  });

// Conectarse al stream en tiempo real (SSE)
const eventSource = new EventSource("http://localhost:3000/asistencias/stream");

eventSource.onmessage = function (event) {
  const data = JSON.parse(event.data);
  actualizarVista(data);
};

// Actualiza la UI
function actualizarVista(data) {
  nombreAsistencia.textContent = data.nombre;
  estadoAsistencia.textContent = data.estado;
  nombreProfesional.textContent = data.profesional.nombre;
  telefonoProfesional.textContent = data.profesional.telefono;
}

