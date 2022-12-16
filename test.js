import webdriver from "selenium-webdriver";

const driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

await driver.get('http://localhost:8001/index.html');
const text = await driver.findElement(webdriver.By.css('h1')).getText();
console.info(text);
driver.quit();
