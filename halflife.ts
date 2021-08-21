import { By, until, WebDriver } from "selenium-webdriver";
//Imported Boiler Plate/Page Object model ^^^^^^^^^^^^^^^^^^^^^^

//Here we export our class "Half-life" from our test file
export class halflife {
  driver: WebDriver;

  url: string = "https://www.half-life.com/en/alyx/";

  //Below we should change the variables for our xpaths to accommodate Lego.com and our testing

  //locator for continue button to proceed to correct Half-Life

  homepage: By = By.xpath("//ul[@class='top_nav']/li[@class='alyx']//a[1]");
  //halflifelanding: By = By.xpath("//h3[text()='Half-Life: Alyx'][1]");
  //   By = By.xpath();
  //   By = By.xpath();
  //   By = By.xpath();
  //   By = By.xpath();
  //   By = By.xpath();
  //   By = By.xpath();
  //   By = By.xpath();
  //   By = By.xpath();

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  // Below is a list of async functions that I will use.

  async navigate() {
    await this.driver.get(this.url);
    await this.driver.wait(until.elementLocated(this.homepage));
    await this.driver.wait(
      until.elementIsVisible(await this.driver.findElement(this.homepage))
    );
    await this.driver.findElement(this.homepage).click();
  }

  async click(elementBy: By) {
    await this.driver.wait(until.elementLocated(elementBy));
    return this.driver.findElement(elementBy).click();
  }
}
