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
  paymentFirstName: By = By.xpath(
    "//body/div[@id='page']/div[4]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/input[1]"
  );
  paymentLastName: By = By.xpath(
    "//body/div[@id='page']/div[4]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/input[1]"
  );
  paymentAddress: By = By.xpath("");
  paymentCity: By = By.xpath("");
  paymentCountryUSA: By = By.xpath("");
  paymentStateUtah: By = By.xpath("");
  paymentPostcode: By = By.xpath("");
  paymentPhone: By = By.xpath("");
  paymentNextStep: By = By.xpath("");
  shippingMethod: By = By.xpath("");
  yourOrderTerms: By = By.xpath("");
  madeToOrder: By = By.xpath("");
  orderTermsNextStep: By = By.xpath("");
  paymentCCNumber: By = By.xpath("");
  paymentCCMonth: By = By.xpath("");
  paymentCCYear: By = By.xpath("");
  paymentCCSecurityCode: By = By.xpath("");
  // qtyadd1: By = By.xpath("//button[normalize-space()='+']");
  // qtyupdate: By = By.xpath("//a[normalize-space()='Update']");
  // qtyremove: By = By.xpath("//a[normalize-space()='Update']");
  // placeorder: By = By.xpath("//a[normalize-space()='PLACE ORDER']");
  // valveLogo: By = By.xpath("//img[@title='Valve Store']");

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
