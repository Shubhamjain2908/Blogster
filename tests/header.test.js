const puppeteer = require('puppeteer');

test('Adds two numbers', () => {
    const sum = 1 + 2;

    expect(sum).toEqual(3);
});

//For Chromium error => npm install puppeteer --unsafe-perm=true --allow-root
test('We can launch a browser', async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('localhost:3000');
});