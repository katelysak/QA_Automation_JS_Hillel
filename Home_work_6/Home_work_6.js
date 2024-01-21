const { test, expect, chromium } = require("@playwright/test")


// Amazon
test('Amazon: Atomic book is searched', async({}) => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
  
    await page.goto('https://www.amazon.ca/');
    await page.pause();
    
    await page.getByPlaceholder('Search Amazon.ca').fill('atomic habits');
    await page.getByRole('button', { name: 'Go' }).click();
  
    await expect(page.getByRole('heading', { name: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones', exact: true })).toBeVisible;
  
    await browser.close();
  })
  
  test('Amazon: Sign in modal is displayed', async({}) => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
  
    await page.goto('https://www.amazon.ca/');
    await page.pause();
  
    await page.getByRole('link', { name: 'Hello, sign in Account & Lists' }).click();
    await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible;
  })


// Apple
  test('Apple: accessories page is displayed', async({}) => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
  
    await page.goto('https://www.apple.com/ca/');
    await page.pause();
  
    await page.getByLabel('Accessories', { exact: true }).click();
    await expect(page.getByLabel('Local').getByRole('link', { name: 'Accessories' })).toHaveText('Accessories');
    await expect(page.url()).toBe('https://www.apple.com/ca/shop/accessories/all')
  })
  
  test('Apple: support form works', async({}) => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
  
    await page.goto('https://www.apple.com/ca/');
    await page.pause();
  
    await page.getByRole('link', { name: 'Support', exact: true }).click();
    await page.getByRole('textbox', { name: 'Search Support' }).click();
    await page.getByRole('textbox', { name: 'Search Support' }).fill('iphone unlocking');
    await page.getByRole('textbox', { name: 'Search Support' }).press('Enter');
  
    await expect(page.getByText('You might see this message on')).toBeVisible;
  })


  // Zara
  test('Zara: login page is displayed', async({}) => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
  
    await page.goto('https://www.zara.com/ca/');
    await page.pause();
  
    await page.getByRole('link', { name: 'LOG IN' }).click();
  
    await expect(page.getByText('Log in to your account')).toBeVisible;
    await expect(page.url()).toBe('https://www.zara.com/ca/en/logon')
  })
  
  test('Zara: register page is displayed', async({}) => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
  
    await page.goto('https://www.zara.com/ca/');
    await page.pause();
  
    await page.getByRole('link', { name: 'LOG IN' }).click();
    await page.getByRole('button', { name: 'Register' }).click()
  
    await expect(page.getByText('Personal details')).toBeVisible;
    await expect(page.url()).toBe('https://www.zara.com/ca/en/signup')
  })