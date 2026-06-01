/**
 * helpers - Funções utilitárias reutilizáveis
 */

/**
 * Aguarda um elemento estar visível
 */
export async function waitForElement(page, selector, timeout = 5000) {
  await page.waitForSelector(selector, { timeout });
}

/**
 * Aguarda um texto aparecer na página
 */
export async function waitForText(page, text, timeout = 5000) {
  await page.waitForFunction(
    (searchText) => document.body.textContent.includes(searchText),
    searchText,
    { timeout }
  );
}

/**
 * Tira screenshot de um elemento
 */
export async function captureScreenshot(page, path) {
  await page.screenshot({ path });
}

/**
 * Realiza scroll até um elemento
 */
export async function scrollToElement(page, selector) {
  await page.locator(selector).scrollIntoViewIfNeeded();
}
