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
    await page.click(page.halfLifeHome);
    let currentUrl = await driver.getCurrentUrl();
    await page.takeScreenshot("screenshots/homepage");
    expect(currentUrl).toBe("https://www.half-life.com/en/home");
  });

  test("Hitting halflife nav button", async () => {
    await page.click(page.halfLife);
    let currentUrl = await driver.getCurrentUrl();
    await page.takeScreenshot("screenshots/halflife");
    expect(currentUrl).toBe("https://www.half-life.com/en/halflife");
  });

  test("Hitting halflife2 nav button", async () => {
    await page.click(page.halfLife2);
    let currentUrl = await driver.getCurrentUrl();
    await page.takeScreenshot("screenshots/halflife2");
    expect(currentUrl).toBe("https://www.half-life.com/en/halflife2");
  });

  test("Hitting episode1 button", async () => {
    await page.click(page.halfLifeE1);
    let currentUrl = await driver.getCurrentUrl();
    await page.takeScreenshot("screenshots/halflifeE1");
    expect(currentUrl).toBe("https://www.half-life.com/en/episode1");
  });

  test("Hitting episode2 button", async () => {
    await page.click(page.halfLifeE2);
    let currentUrl = await driver.getCurrentUrl();
    await page.takeScreenshot("screenshots/halflifeE2");
    expect(currentUrl).toBe("https://www.half-life.com/en/episode2");
  });

  test("Hitting halflife: alyx button", async () => {
    await page.click(page.halfLifeAlyx);
    let currentUrl = await driver.getCurrentUrl();
    await page.takeScreenshot("screenshots/halflifealyx");
    expect(currentUrl).toBe("https://www.half-life.com/en/alyx");
  });
  test("Hitting valve store from halflife site", async () => {
    await page.click(storepage.visitStore);
    let currentUrl = await driver.getCurrentUrl();
    await page.takeScreenshot("screenshots/visitstore");
    expect(currentUrl).toBe(
      "https://valvestore.forfansbyfans.com/title/half-life.html"
    );
  });

  test("Selecting Black Mesa Mask", async () => {
    await page.click(storepage.blackMesa);
    let currentUrl = await driver.getCurrentUrl();
    await page.takeScreenshot("screenshots/blackmesa");
    expect(currentUrl).toBe(
      "https://valvestore.forfansbyfans.com/black-mesa-mask-13518.html"
    );
  });

  test("Add to Cart", async () => {
    await page.click(storepage.addToCart);
    await page.takeScreenshot("screenshots/addToCart");
    await page.click(storepage.viewCart);
    await driver.sleep(1500);
    await page.click(storepage.checkout);
    await driver.sleep(1500);
    await page.click(storepage.guestTab);
    await driver.sleep(500);
    await page.sendKeys(storepage.guestEmail, "myEmail@mail.com");
    await page.sendKeys(storepage.guestFirstName, "Bill");
    await page.sendKeys(storepage.guestLastName, "Murray");
    await driver.sleep(1500);
    await page.takeScreenshot("screenshots/guestCheckout");
    await page.click(storepage.termsAndConditionsCheckBox);
    await page.click(storepage.privacyCheckBox);
    await driver.sleep(3000);
    await page.click(storepage.guestContinue);
    await driver.sleep(1500);
    await page.sendKeys(storepage.paymentFirstName, "Bill");
    await page.sendKeys(storepage.paymentLastName, "Murray");
    await page.sendKeys(storepage.paymentAddress, "4363 South Weymouth Place");
    await page.sendKeys(storepage.paymentCity, "West Valley City");
    await page.click(storepage.paymentSelectCountry);
    await driver.sleep(1500);
    await page.click(storepage.paymentCountryUSA);
    await page.click(storepage.paymentSelectState);
    await driver.sleep(1500);
    await page.click(storepage.paymentSelectUtah);
    await page.sendKeys(storepage.paymentPostcode, "84119");
    await page.sendKeys(storepage.paymentPhone, "8015556666");
    await page.takeScreenshot("screenshots/shipAddress");
    await console.log("clicking Next Page button");
    await page.click(storepage.paymentNextStep);
    await driver.sleep(2000);
    await page.click(storepage.shippingMethod);
    await driver.sleep(1500);
    driver.findElement(By.xpath('(//a[text()="NEXT STEP"])[2]')).click;
    await driver
      .findElement(By.xpath('//label[@class="control-label"]'))
      .click();
    await driver
      .findElement(By.xpath('(//label[@class="control-label"])[1]'))
      .click();
    await console.log("Dont click orderterms next step thing");
    //await page.click(storepage.orderTermsNextStep);
    // await page.sendKeys(storepage.paymentCCNumber, "4561456145614561");
    // await console.log("2");
    // await page.sendKeys(await storepage.paymentCCMonth, "12");
    // await console.log("3");
    // await page.sendKeys(storepage.paymentCCYear, "25");
    // await page.sendKeys(storepage.paymentCCSecurityCode, "666");
    // await driver.sleep(3000);
    // await console.log("wait for place order button");
    // await storepage.click(await storepage.paymentPlaceOrder);
    // //driver.findElement(By.id("button-confirm")).click();
    // await driver.sleep(5000);
    // //await page.click(storepage.paymentCaptcha);
    // await page.click(storepage.paymentError);
    // await driver.sleep(3000);
    // //driver.findElement(By.id("logo")).click();
    // await console.log("cancel and exit to home page");
    // await page.click(storepage.valveLogo);
    // await console.log("at home page take screenshot");
    // await page.takeScreenshot("screenshots/valveLandingPage");

    // because of Captcha I can not progress further on the checkout process
    expect(storepage.orderTermsNextStep).toBeTruthy();
  });

  afterAll(async () => {
    await driver.close();
  });
});
