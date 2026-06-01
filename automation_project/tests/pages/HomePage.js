/**
 * HomePage - Página inicial
 * Contém métodos específicos para interagir com a página inicial
 */
import { BasePage } from './BasePage.js';

export class HomePage extends BasePage {
  // Seletores
  get getStartedLink() {
    return this.page.getByRole('link', { name: 'Get started' });
  }

  // Métodos
  async clickGetStarted() {
    await this.getStartedLink.click();
  }

  async verifyPageTitle(expectedTitle) {
    const title = await this.page.title();
    return title.includes(expectedTitle);
  }
}
