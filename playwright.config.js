const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',        // carpeta donde están los tests
  timeout: 50000,            // timeout general para tests
  outputDir: 'test-results', // carpeta para artefactos (videos, screenshots, logs)
  reporter: [['html', { outputFolder: 'html-report' }]], // carpeta separada para reporte HTML
  use: {
    headless: false,         // abre navegador visible para ver la prueba
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,    // timeout para cada acción como click o fill
    ignoreHTTPSErrors: true, // ignora errores https para evitar problemas con certificados
    screenshot: 'on',       // Captura screenshot
    video: 'on',            // Grabacion del test
  },
});

