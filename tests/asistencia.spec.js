// tests/asistencia.spec.js
const { test, expect } = require('@playwright/test');

test('Login y validación de estados en módulo Mi asistencia', async ({ page }) => {
  // 1. Abrir la página de login
  await page.goto('file://' + process.cwd() + '/frontend/login.html');

  // 2. Ingresar credenciales válidas
  await page.fill('#usuario', 'admin');
  await page.fill('#password', '1234');
  await page.click('button[type="submit"]');

  // 3. Ingresar al módulo asistencias
  await page.click('#btn-ir-asistencias');
  await page.waitForURL(/index\.html/);

  // 4. Verificar que el título del módulo está visible y correcto
  await expect(page.locator('h1')).toHaveText('Módulo: Mi Asistencia');

  // 5. Esperar que cargue el módulo
  await expect(page.locator('#nombre-asistencia')).not.toHaveText('Cargando...');
  await expect(page.locator('#estado-asistencia')).not.toHaveText('Cargando...');
  await expect(page.locator('#nombre-profesional')).not.toHaveText('Cargando...');
  await expect(page.locator('#telefono-profesional')).not.toHaveText('Cargando...');

  // 6. Verificar cambios en el estado (esperamos 10 segundos y recogemos los cambios)
  const estadosVistos = new Set();

  for (let i = 0; i < 5; i++) {
    const estado = await page.locator('#estado-asistencia').innerText();
    estadosVistos.add(estado);
    await page.waitForTimeout(2000); // Esperar 2 segundos antes de volver a leer
  }

  // 7. Verificar que al menos 2-3 estados distintos fueron vistos
  const posiblesEstados = ['Recibida', 'En camino', 'Finalizada'];
  const interseccion = posiblesEstados.filter(estado => estadosVistos.has(estado));

  expect(interseccion.length).toBeGreaterThanOrEqual(2);
});