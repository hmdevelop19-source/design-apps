import puppeteer from 'puppeteer';
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  await page.goto('https://hmdevelop19-source.github.io/design-apps/', {waitUntil: 'networkidle0'});
  const html = await page.content();
  console.log('HTML ROOT MATCH LENGTH:', html.match(/id="root"[^>]*>([\s\S]*?)<\/div>/)[1].trim().length);
  await browser.close();
})();
