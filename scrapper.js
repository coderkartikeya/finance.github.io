const puppeteer=require('puppeteer');

async function scrapeProduct(url){
    const browser=await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el]=await page.$x('//*[@id="CardInstance89tNLKpdvZ6T8h77aMUR3w"]/div[2]/div[1]/div[1]/a/div[1]/img');
    const src=await el.getProperty('src');
    const srcTxt=await src.jsonValue();

    console.log({srcTxt});
}

scrapeProduct('https://www.amazon.in/');