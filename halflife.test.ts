import { halflife } from "./halflife";
import { halflifestore } from "./halflifestore";

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
const storepage = new halflifestore(driver);
//Boiler Plate above
//Below we will compile our testing

//Hitting the landing page logo
//When interacting with lego in chrome, you need to use 'async' keyword

describe("Validating halflife top nav", async () => {
  test("hitting half-life landing page", async () => {
    await page.navigate();

    let currentUrl = await driver.getCurrentUrl();
    await page.takeScreenshot("screenshots/landingpage");
    expect(currentUrl).toBe("https://www.half-life.com/en/alyx/");
  });

  test("Hitting halflife home", async () => {
    await page.navigate();
    await page.click(page.halflifehome);
    let currentUrl = await driver.getCurrentUrl();
    await page.takeScreenshot("screenshots/homepage");
    expect(currentUrl).toBe("https://www.half-life.com/en/home");
  });

  test("Hitting halflife nav button", async () => {
    await page.click(page.halflife);
    let currentUrl = await driver.getCurrentUrl();
    await page.takeScreenshot("screenshots/halflife");
    expect(currentUrl).toBe("https://www.half-life.com/en/halflife");
  });

  test("Hitting halflife2 nav button", async () => {
    await page.click(page.halflife2);
    let currentUrl = await driver.getCurrentUrl();
    await page.takeScreenshot("screenshots/halflife2");
    expect(currentUrl).toBe("https://www.half-life.com/en/halflife2");
  });

  test("Hitting episode1 button", async () => {
    await page.click(page.halflifeE1);
    let currentUrl = await driver.getCurrentUrl();
    await page.takeScreenshot("screenshots/halflifeE1");
    expect(currentUrl).toBe("https://www.half-life.com/en/episode1");
  });

  test("Hitting episode2 button", async () => {
    await page.click(page.halflifeE2);
    let currentUrl = await driver.getCurrentUrl();
    await page.takeScreenshot("screenshots/halflifeE2");
    expect(currentUrl).toBe("https://www.half-life.com/en/episode2");
  });

  test("Hitting halflife: alyx button", async () => {
    await page.click(page.halflifealyx);
    let currentUrl = await driver.getCurrentUrl();
    await page.takeScreenshot("screenshots/halflifealyx");
    expect(currentUrl).toBe("https://www.half-life.com/en/alyx");
  });
  test("Hitting valve store from halflife site", async () => {
    await page.click(page.visitstore);
    let currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).toBe(
      "https://valvestore.forfansbyfans.com/title/half-life.html"
    );
  });
  afterAll(async () => {
    await driver.quit();
  });
});

// describe("Testing Valvestore", async () => {
//   test("select black mesa", async () => {
//     await storepage.navigate();
//     await storepage.click(storepage.blackmesa);
//     await storepage.click(storepage.addtocart);
//   });

//   afterAll(async () => {
//     await driver.quit();
//   });
// });
