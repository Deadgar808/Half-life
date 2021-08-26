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
  visitstore: By = By.xpath("(//button[@class='buy'])[3]");
  blackmesa: By = By.xpath('//div[@class="slider"][1]/div[@class="item"]/a');
  addtocart: By = By.css("a#button-cart");
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
  // qtyadd1: By = By.xpath("//button[normalize-space()='+']");
  // qtyupdate: By = By.xpath("//a[normalize-space()='Update']");
  // qtyremove: By = By.xpath("//a[normalize-space()='Update']");
  // continue: By = By.xpath("//a[normalize-space()='Continue']");
  // // checkout: By = By.xpath("//a[normalize-space()='CHECKOUT']");

  // guestcheckout: By = By.xpath("//h3[normalize-space()='Guest Checkout']");
  // guestemail: By = By.xpath(
  //   "//div[@class='form-group mb20']//span[@class='placeholderSpan'][normalize-space()='E-Mail Address']"
  // );
  // fName: By = By.xpath("input[placeholder='First Name']");
  // lName: By = By.xpath("//input[@placeholder='Last Name']");
  // iagree: By = By.xpath(
  //   "//body//div[@id='page']//div[@class='content']//div[@class='content']//div[2]//span[1]//a[1]"
  // );
  // ihavereviewed: By = By.xpath("//div[@id='page']//div[3]//span[1]//a[1]");
  // guestcontinue: By = By.xpath("//input[@id='button-guest']");
  // shipfName: By = By.xpath(
  //   "//div[@id='payment-address']//span[@class='placeholderSpan'][normalize-space()='First Name']"
  // );
  // shippinglName: By = By.xpath(
  //   "//div[@id='payment-address']//span[@class='placeholderSpan'][normalize-space()='Last Name']"
  // );
  // shipstreet: By = By.xpath(
  //   "//body/div[@id='page']/div[@class='container mainSection']/div[@class='row']/div[@class='checkoutPage']/div[@class='col-lg-17 col-lg-pull-7']/div[@class='checkout']/div[@class='part-2 active']/div[@class='content']/div[@class='editInfo']/div[@id='new_ui_address']/div[@id='payment-address']/div[@class='content']/div[@class='marginInner']/div[contains(@class,'new')]/div[4]/div[1]/span[1]"
  // );
  // shipcity: By = By.xpath("//input[@name='payment_city']");
  // shipcountry: By = By.xpath("//input[@name='payment_city']");
  // shipstate: By = By.xpath("//a[normalize-space()='Utah']");
  // postcode: By = By.xpath("//input[@name='payment_postcode']");
  // shipphone: By = By.xpath(
  //   "//div[@id='payment-address']//span[@class='placeholderSpan'][normalize-space()='Phone Number']"
  // );
  // shipnextstep: By = By.xpath("//a[normalize-space()='NEXT STEP']");
  // shippingmethod: By = By.xpath("//a[@id='button-shipping-method']");
  // ordertermbox: By = By.xpath("//label[@class='control-label selected']");
  // madetoorder: By = By.xpath(
  //   "//div[@class='part-4 active']//div[@class='content']//div[2]//label[1]"
  // );
  // ordertermnext: By = By.xpath("//a[@id='button-term']");
  // ccnumber: By = By.xpath("//span[normalize-space()='Card number']");
  // ccmonth: By = By.xpath("//span[normalize-space()='Card number']");
  // ccyear: By = By.xpath("//input[@placeholder='Year']");
  // cvv: By = By.xpath("//span[normalize-space()='Security Code']");
  // placeorder: By = By.xpath("//a[normalize-space()='PLACE ORDER']");
  valvestorelogo: By = By.xpath("//img[@title='Valve Store']");

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
