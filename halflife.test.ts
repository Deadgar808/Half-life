import { halflife } from "./halflife";

import {
  WebDriver,
  Builder,
  Capabilities,
  By,
  until,
} from "selenium-webdriver";
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const page = new halflife(driver);

//Boiler Plate above
//Below we will compile our testing

//Hitting the landing page logo
//When interacting with lego in chrome, you need to use 'async' keyword

//describe("Search for Piano on lego.com landing page", async () => {

test("hitting half-life landing page", async () => {
  await page.navigate();
  await driver.sleep(3000);
  await page.click(page.homepage);

  let currentUrl = await driver.getCurrentUrl();

  expect(currentUrl).toBe("https://half-life.com/en/home");
});

afterAll(async () => {
  await driver.quit();
});
