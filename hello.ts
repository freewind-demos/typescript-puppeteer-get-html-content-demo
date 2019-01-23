import * as puppeteer from 'puppeteer';

async function run() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  console.log('open github');
  await page.goto("http://github.com");

  const html = await page.evaluate(() => document.body.innerHTML);

  console.log(html);
  
  await browser.close();
}

run();
