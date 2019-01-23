const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 375,
    height: 667,
    isMobile: true
  });
  await page.goto('https://phy.one/6A1AB8E7');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();