const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters', // Necessário para a geração de reporters
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter', // Necessário para a geração de reporters
    cypressMochawesomeReporterReporterOptions: {// Configurações do reporter do mochawesome
      charts: true, // Informações gráficas
      reportPageTitle: 'Relatório de Testes',
      embeddedScreenshots: true, // Adiciona automáticamente os screenshots
      inlineAssets: true, // Informa que deve ser gerado apenas um arquivo html
      saveAllAttempts: false // Caso retentativas estejam configuradas, não deve registrar todas
    },
    mochaJunitReporterReporterOptions: {// Configurações do reporter do junit
      mochaFile: 'cypress/reports/junit/results-[hash].xml'
    }
  },
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on) // Import necessário para reconhecimento das configs
      // implement node event listeners here
    },
  },
});
