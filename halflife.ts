import { By, until, WebDriver } from "selenium-webdriver";
const fs = require("fs");
//Imported Boiler Plate/Page Object model ^^^^^^^^^^^^^^^^^^^^^^

//Here we export our class "Half-life" from our test file
export class halflife {
  driver: WebDriver;

  url: string = "https://www.half-life.com/en/alyx/";

  //Below we should change the variables for our xpaths to accommodate Lego.com and our testing

  //locator for continue button to proceed to correct Half-Life

  halflifehome: By = By.xpath("//ul[@class='top_nav']/li[@class='home']//a[1]");
  halflife: By = By.xpath("//ul[@class='top_nav']/li[@class='halflife']//a[1]");
  halflife2: By = By.xpath(
    "//ul[@class='top_nav']/li[@class='halflife2 hl2']//a[1]"
  );
  halflifeE1: By = By.xpath(
    "//ul[@class='top_nav']/li[@class='halflife2 ep1']//a[1]"
  );
  halflifeE2: By = By.xpath(
    "//ul[@class='top_nav']/li[@class='halflife2 ep2']//a[1]"
  );
  halflifealyx: By = By.xpath("//ul[@class='top_nav']/li[@class='alyx']//a[1]");
  //   By = By.xpath();
  //   By = By.xpath();
  //   By = By.xpath();

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  // Below is a list of async functions that I will use.

  async navigate() {
    await this.driver.get(this.url);
    await this.driver.wait(until.elementLocated(this.halflifehome));
    await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(this.halflifehome))
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
  async sendKeys(elementBy: By, keys) {
    await this.driver.wait(until.elementLocated(elementBy));
    return this.driver.findElement(elementBy).sendKeys(keys);
  }

  async click(elementBy: By) {
    await this.driver.wait(until.elementLocated(elementBy));
    return this.driver.findElement(elementBy).click();
  }
}
