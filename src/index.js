const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://rocketseat.com.br");

  // Toda essa função vai ser executada no browser
  await page.evaluate(() => {});

  await browser.close();
})();
