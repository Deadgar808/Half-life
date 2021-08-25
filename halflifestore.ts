import { By, until, WebDriver } from "selenium-webdriver";
const fs = require("fs");
//Imported Boiler Plate/Page Object model ^^^^^^^^^^^^^^^^^^^^^^

//Here we export our class "Half-life" from our test file
export class halflifestore {
  driver: WebDriver;

  url: string =
    "https://www.valvestore.forfansbyfans.com/title/half-life.html/";

  //Below we should change the variables for our xpaths to accommodate Lego.com and our testing

  //locator for continue button to proceed to correct Half-Life
  visitstore: By = By.xpath("h3[normalize-space()='Visit the Shop']");
  halflifestore: By = By.xpath("//a[normalize-space()='HALF-LIFE']/");
  blackmesa: By = By.xpath(
    "//div[@id='display_newests']//div[contains(@class,'slider')]//div[1]//a[1]//img[1]"
  );
  addtocart: By = By.xpath("//a[normalize-space()='ADD TO CART']");
  viewcart: By = By.xpath("//a[normalize-space()='VIEW CART']");
  qtyadd1: By = By.xpath("//button[normalize-space()='+']");
  qtyupdate: By = By.xpath("//a[normalize-space()='Update']");
  qtyremove: By = By.xpath("//a[normalize-space()='Update']");
  continue: By = By.xpath("//a[normalize-space()='Continue']");
  addtowishlist: By = By.xpath("//a[normalize-space()='Continue']");
  newwishlistname: By = By.xpath("//input[@id='wishlist_name']");
  savewishlistname: By = By.xpath("//input[@id='wishlist_name']");
  wishlistpage: By = By.xpath("//a[@id='wishlist-total']");
  removewishlistacct: By = By.xpath("//i[@class='icon-account-remove2']");
  wishlistacctremoveconfirm: By = By.xpath(
    "//i[@class='icon-account-remove2']"
  );
  checkout: By = By.xpath("//a[normalize-space()='CHECKOUT']");

  guestcheckout: By = By.xpath("//h3[normalize-space()='Guest Checkout']");
  fName: By = By.xpath("//input[@name='payment_firstname']");
  lName: By = By.xpath("//input[@name='payment_lastname']");
  street: By = By.xpath("//input[@name='payment_address_1']");
  city: By = By.xpath("//input[@name='payment_city']");
  country: By = By.xpath(
    "//div[@id='payment-address']//div[@class='content']//div[@class='marginInner']//div[@class='new ']//div[@class='col-lg-24 required']//div[@class='form-group']//div[@class='rowElem jqtransformdone']//div[@class='jqTransformSelectWrapper']//div//span[contains(text(),'- Select Country -')]"
  );
  state: By = By.xpath(
    "//div[contains(@class,'new')]//div[@class='col-lg-12']//div[@class='form-group']//div[@class='rowElem zone_select jqtransformdone']//div[@class='jqTransformSelectWrapper']//div//span[contains(text(),'- Select State/Province -')]"
  );
  postcode: By = By.xpath("//input[@name='payment_postcode']");
  phone: By = By.xpath("//input[@name='payment_phone']");
  nextstep: By = By.xpath("//a[normalize-space()='NEXT STEP']");
  shippingmethod: By = By.xpath("//a[@id='button-shipping-method']");
  paymentsbox: By = By.xpath(
    "//div[@class='rowElem jqtransformdone']//div[1]//label[1]"
  );
  madetoorder: By = By.xpath(
    "//div[@class='rowElem jqtransformdone']//div[1]//label[2]"
  );
  paymentnextstep: By = By.xpath("//a[@id='button-term']");
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
