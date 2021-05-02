const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://instagram.com/rocketseat_oficial");

  // Toda essa função vai ser executada no browser
  const imgList = await page.evaluate(() => {
    // pegar todas images no posts
    const nodeList = document.querySelectorAll("article img");
    // transformar o NodeList em array
    const imgArray = [...nodeList];

    const list = imgArray.map(({ src }) => ({
      src,
    }));

    return list;
  });

  fs.writeFile("instagram.json", JSON.stringify(imgList, null, 2), (error) => {
    if (error) throw new Error("Something went wrong");

    console.log("images saved ✔");
  });

  // await browser.close();
})();
