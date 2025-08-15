# Fronted_Web
Pruebas de Automatizadas de aplicacion web con Playwright
=======
Prueba Técnica Frontend Web (Playwright)

Este proyecto es una prueba técnica el cual implmenta un sistema simple d visualizar el estado de las asistencias en tiempo real
en el modulo "Mi Asistencia", y datos de profesional asignado.  
Incluye Backend (servidor SSE para actualizacion en tiempo real o cambio de estados dentro de la aplicacion). 
Incluye Frontnd (Actualizaciones dinámicas con UI) y pruebas automatizadas con Playwright.

---
### Estructura del proyecto

Frontend_Web/
├── backend/
│   └── index.js
│
├── frontend/
│   └── index.html
│   └── login.html
|   └── app.js
|   └── styles.css
|
├── tests/
│   └── asistencia.spec.js 
│
├── node_modules/
├── package.json
├── playwright.config.js
├── README.md
├── html-report/
├── playwright-report/

---
### Datos de entreda
    usuario: admin
    contraseña: 1234
---
### Validaciones

- Ingreso al módulo "Mi Asistencia"
- Visualización de estado de asistencia en tiempo real
- Validación de datos del profesional asignado
---
### Requisitos

node.js
Playwright
---

### Indicaciones para ejecutar proyecto

1. Instalar depndencias: npm install (node js).
2. Levantar servidor backend: npm run start-backend
3. Levantar servidor frontend: npm run start-frontend
### NOTA : Se pueden levantar los dos servidores al tiempo: npm run start
4. Abrir navegador y visitar Frontend_Web/frontend/login.html para hacer login
5. Ver módulo asistencias
---
### Pruebas Automatizadas

- Ejecutar prueebas completas: npm test
- Se genera reporte de pruebas en html-report/index.html
- El reportee se puede consultar manualmente en el navegador para ver detalles
---
### Scripts de ejecuion

1.  Servidor Backend: npm run start-backend
2.  Servidor Frontend: npm run start-frontend
3.  Servidores Backend y Frontend al tiempo: npm run start
4.  Ejecucion. de pruebas automaticas completas:  npm test
---
