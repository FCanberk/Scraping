var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;
var driver = new webdriver.Builder().forBrowser('phantomjs').build();

driver.get('http://www.turkishairlines.com/tr-tr/');
//driver.wait(until.elementLocated(By.name('j_username')));
//driver.wait(until.elementIsVisible(driver.findElement(By.name('j_username'))));

driver.findElement(webdriver.By.className('medium autocompletenew float-left default-value ac_input')).sendKeys('ada');
driver.findElement(webdriver.By.className('medium autocompletenew float-left default-value ac_input')).sendKeys(webdriver.Key.ENTER);
driver.findElement(webdriver.By.id('to')).sendKeys('Atatürk');
driver.findElement(webdriver.By.id('to')).sendKeys(webdriver.Key.ENTER);
driver.findElement(webdriver.By.id('to')).sendKeys(webdriver.Key.ENTER);

driver.wait(until.elementLocated(By.id('priceSummaryPanelContent')));

driver.findElement(By.id('priceSummaryTotalPrice'))
    .then(element =>
        element.getText()
            .then(price => console.log(price))
    );

driver.takeScreenshot().then(
    function(image, err) {
        require('fs').writeFile('THY_Bilet.png', image, 'base64', function(err) {
		if(err)
		return console.log(err);
	else return console.log('Screenshot saved successfully');
        });
    }
);

driver.quit();


//console.log(driver.findElement(webdriver.By.id('priceSummaryTotalPrice')));
//driver.findElement(webdriver.By.id('email')).sendKeys('deneme@gmail.com');
//driver.findElement(webdriver.By.id('password')).sendKeys('password1');
//driver.findElement(webdriver.By.id('submit-button')).click();
//driver.findElement({name:'q'}).sendKeys(webdriver.Key.ENTER);
//driver.findElement({id:'select2-6w60-container'}).sendKeys('');
//driver.findElement({id:'select2-54sg-result-zqgp-ADA'}).click();

