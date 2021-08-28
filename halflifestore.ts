import { By, until, WebDriver } from "selenium-webdriver";
const fs = require("fs");
//Imported Boiler Plate/Page Object model ^^^^^^^^^^^^^^^^^^^^^^

//Here we export our class "Half-life" from our test file
export class halflifestore {
  driver: WebDriver;

  //viewall: By = By.xpath("");

  url: string =
    "https://www.valvestore.forfansbyfans.com/title/half-life.html/";

  //Below we should change the variables for our xpaths to accommodate Lego.com and our testing

  //locator for continue button to proceed to correct Half-Life
  visitStore: By = By.xpath("(//button[@class='buy'])[3]");
  blackMesa: By = By.xpath('//div[@class="slider"][1]/div[@class="item"]/a');
  addToCart: By = By.css("a#button-cart");
  viewCart: By = By.css("div.checkout > a");
  itemName: By = By.css("div.info > a > h4");
  checkout: By = By.css("div.cart-button > a.pull-right");
  guestTab: By = By.id("tab_guest");
  guestEmail: By = By.xpath(
    '//div[@class="guestLogin-content"]//input[@type="text" and @name="email"]'
  );
  guestFirstName: By = By.name("firstname");
  guestLastName: By = By.name("lastname");
  termsAndConditionsCheckBox: By = By.xpath(
    '(//span[@class="jqTransformCheckboxWrapper"])[3]'
  );
  privacyCheckBox: By = By.xpath(
    '(//span[@class="jqTransformCheckboxWrapper"])[4]'
  );
  guestContinue: By = By.xpath("//input[@id='button-guest']");
  paymentFirstName: By = By.name("payment_firstname");
  paymentLastName: By = By.name("payment_lastname");
  paymentAddress: By = By.name("payment_address_1");
  paymentCity: By = By.name("payment_city");
  paymentSelectCountry: By = By.xpath(
    "//div[@id='payment-address']//span[contains(text(),'Select Country')]/following-sibling::a"
  );
  paymentCountryUSA: By = By.xpath(
    "//div[@id='payment-address']//a[@index=1 and contains(text(), 'USA')]"
  );
  paymentSelectState: By = By.xpath(
    "//div[@id='payment-address']//span[contains(text(),'Select State/Province')]/following-sibling::a"
  );
  paymentSelectUtah: By = By.xpath(
    "//div[@id='payment-address']//a[@index=57 and contains(text(),'Utah')]"
  );
  paymentPostcode: By = By.name("payment_postcode");
  paymentPhone: By = By.name("payment_phone");
  paymentNextStep: By = By.xpath("//a[@id='button-shipping-address']");
  shippingMethod: By = By.xpath("//a[@id='button-shipping-method']");
  yourOrderTerms: By = By.xpath("//label[@class='control-label']')).click()");
  madeToOrder: By = By.xpath('(//label[@class="control-label"])[1]');
  orderTermsNextStep: By = By.xpath("//a[@id='button-term']");
  paymentCCNumber: By = By.name("cc_number");
  paymentCCMonth: By = By.xpath('//input[@name="cc_expire_month"]');
  paymentCCYear: By = By.name("cc_expire_year");
  paymentCCSecurityCode: By = By.name("cc_cvv");
  paymentPlaceOrder: By = By.xpath("//a[@id='button-confirm']");
  //paymentCaptcha: By = By.xpath(
  //"(//button[@class='close']/following-sibling::h4)[2]"
  //);
  paymentError: By = By.xpath("//button[text()='×'])[1]");
  valveLogo: By = By.xpath("//a[@class='logo']");
  //valveLogo: By = By.xpath("//a[@aria-label='Valve Store']");

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  // Below is a list of async functions that I will use.

  async navigate() {
    await this.driver.get(this.url);
    await this.driver.wait(until.elementLocated(this.halflifestore));
    await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(this.halflifestore))
    );
  }
  halflifestore(
    halflifestore: any
  ): import("selenium-webdriver").WebElementCondition {
    throw new Error("Method not implemented.");
  }

  async takeScreenshot(filepath: string) {
    fs.writeFile(
      `${filepath}.png`,
      await this.driver.takeScreenshot(),
      "base64",
      (e) => {
        if (e) console.log(e);
        else console.log("screenshot saved successfully");
      }
    );
  }

  async click(elementBy: By) {
    await this.driver.wait(until.elementLocated(elementBy));
    return this.driver.findElement(elementBy).click();
  }
}
