/*
1)Створити набір тестових даних
2)Написати тест, використовуючи набір тестових даних
Наприклад для https://lms.ithillel.ua/ використовуючи як приклад дані
let loginData = [
    {
        email:"studigradilyagmail.com",
        pass:"1w24r231jr",
        result:"Неправильна адреса електронної пошти",
        locator:`//li[@class="validation-messages__item ng-star-inserted"]`
    },
    {
        email:"studigradilya@gmail.com",
        pass:"1w24r231jr",
        result:"Ви ввели невірну адресу електронної пошти або пароль",
        locator:`//p[@class="page-login__actions-validation ng-star-inserted"]`
    },
]
*/

import { test } from "node:test"
import { expect } from "@playwright/test";
import { chromium } from "playwright";

let loginData = [
    {
        email: "",
        password: "",
        result: "Please enter an email address or phone number",
        locator: `//*[@for="session_key" and @role="alert"]`
    },
    {
        email: "kate",
        password: "",
        result: "Please enter a password",
        locator: `//*[@for="session_password" and @role="alert"]`
    },
    {
        email: "",
        password: "test",
        result: "Please enter an email address or phone number",
        locator: `//*[@for="session_key" and @role="alert"]`
    },
    {
        email: "test",
        password: "test",
        result: "The password you provided must have at least 6 characters",
        locator: `//*[@for="session_password" and @role="alert"]`
    },
]

loginData.forEach(({ email, password, result, locator }) => {
    test("Testing not valid login cases", async() => {
        const browser = await chromium.launch({headless: false});
        const page = await browser.newPage();
        // let homePage = new homePage(email, password, result, locator);
        await page.goto("https://www.linkedin.com/");
        await page.locator(`//*[@autocomplete="username"]`).fill(email);
        await page.locator(`//*[@name="session_password"]`).fill(password);
        await page.locator(`//*[@type="submit"]`).click();
        expect(page.locator(locator)).toHaveText(result);  

        await page.close();
        await browser.close();
    })
})