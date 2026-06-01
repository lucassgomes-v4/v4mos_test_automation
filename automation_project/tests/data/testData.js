/**
 * testData - Armazena todas as variáveis e dados utilizados nos testes
 */
export const testData = {
  // URLs
  urls: {
    baseUrl: 'https://playwright.dev/',
    homePage: 'https://playwright.dev/',
  },

  // Dados de teste
  user: {
    email: 'test@example.com',
    password: 'Password123!',
    name: 'Test User',
  },

  // Textos esperados
  expectedTexts: {
    pageTitle: 'Playwright',
    installationHeading: 'Installation',
  },

  // Timeouts
  timeouts: {
    short: 5000,
    medium: 10000,
    long: 30000,
  },
};
