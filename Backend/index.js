// Backend/index.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());

// Estados de las asistencias
const estados = ['Recibida', 'En camino', 'Finalizada'];
let estadoIndex = 0;

let asistencia = {
  nombre: "Servicio de grúa",
  estado: estados[estadoIndex],
  profesional: {
    nombre: "Peter Parker",
    telefono: "345 890 8787"
  }
};

// Endpoint REST inicial
app.get('/asistencias', (req, res) => {
  res.json(asistencia);
});

// SSE - Estado en tiempo real
app.get('/asistencias/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  const interval = setInterval(() => {
    // Simular cambio cíclico de estado
    estadoIndex = (estadoIndex + 1) % estados.length;
    asistencia.estado = estados[estadoIndex];

    res.write(`data: ${JSON.stringify(asistencia)}\n\n`);
  }, 2000); // ← Cambio cada 2 segundos

  req.on('close', () => {
    clearInterval(interval);
    res.end();
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

