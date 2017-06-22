var webdriver = require('selenium-webdriver');
var Crawler = require('crawler');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;
var driver = new webdriver.Builder().forBrowser('phantomjs').build();
var fs = require('fs');

driver.manage().deleteAllCookies(); //  -> cookiesil

driver.get('http://www.turkishairlines.com/tr-tr/');
driver.findElement(webdriver.By.className('medium autocompletenew float-left default-value ac_input')).sendKeys('ada');
driver.findElement(webdriver.By.className('medium autocompletenew float-left default-value ac_input')).sendKeys(webdriver.Key.ENTER);
driver.findElement(webdriver.By.id('to')).sendKeys('Atatürk');
driver.findElement(webdriver.By.id('to')).sendKeys(webdriver.Key.ENTER);
driver.findElement(webdriver.By.id('to')).sendKeys(webdriver.Key.ENTER);

driver.wait(until.elementLocated(By.id('priceSummaryPanelContent')));
var price = driver.findElement(By.id("priceSummaryTotalPrice"));

var price = driver.findElement(By.id("priceSummaryTotalPrice"));
fs.writeFile("test.txt", price.getText(), function(err) {
    if(err) {
        return console.log(err);
    }
	
    console.log("Txt File saved successfully!");
}); 
driver.takeScreenshot().then(
    function(image, err) {
        require('fs').writeFile('THY_Bilet_No_Cookie.png', image, 'base64', function(err) {
		if(err)
			return console.log(err);
		else return console.log("Screenshot saved successfully!");
		        });
    }
);

driver.quit();

//driver.wait(until.elementLocated(By.id('priceSummaryGroupTotal')));
//console.log(driver.findElement(webdriver.By.className('price')));

//*[@id="priceSummaryTotalPrice"]
//*[@id="priceSummaryGroupTotal"]/p
//*[@id="priceSummaryGroupTotal"]
//<span class="number" id="priceSummaryTotalPrice" data-value="0">147,99</span>