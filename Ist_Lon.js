var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;
var driver = new webdriver.Builder().forBrowser('phantomjs').build();
var fs = require('fs');
var colors = require('colors');
const commandLineArgs = require('command-line-args');
var useragent = "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0";
  var driver = new webdriver.Builder()
       .withCapabilities(webdriver.Capabilities.phantomjs()
       .set("phantomjs.page.settings.userAgent", useragent))
       .build();

const optionDefinitions = [
    { name: 'delete_cookie', alias: 'c', type: Boolean, defaultValue: true }
];

const options = commandLineArgs(optionDefinitions);

if(options.delete_cookie){
driver.manage().deleteAllCookies();
console.log('Cookies deleted'.green);
}
else{
console.log("Cookies not deleted".green);
}

driver.get('http://www.turkishairlines.com/tr-tr/');

driver.findElement(webdriver.By.className('one_way')).click();
driver.findElement(webdriver.By.id('godate')).click();
driver.findElement(webdriver.By.xpath('//*[@id="calendar-100000001"]/div[3]/table/tbody/tr[4]/td[4]')).click();
driver.findElement(webdriver.By.className('medium autocompletenew float-left default-value ac_input')).sendKeys('ist');
driver.findElement(webdriver.By.className('medium autocompletenew float-left default-value ac_input')).sendKeys(webdriver.Key.ENTER);
driver.findElement(webdriver.By.id('to')).sendKeys('ada');
driver.findElement(webdriver.By.id('to')).sendKeys(webdriver.Key.ENTER);
driver.findElement(webdriver.By.id('to')).sendKeys(webdriver.Key.ENTER);

driver.takeScreenshot().then(
    function(image, err) {
        require('fs').writeFile('FlightList.png', image, 'base64', function(err) {
		if(err)
			return console.log(err);
		else return console.log("Screenshot saved successfully!");
		        });
    }
);

    driver.findElement(webdriver.By.id('sideSubmitButton')).click();
    console.log('Flight chosen');

    driver.wait(until.elementLocated(By.id('firstName')));
    driver.findElement(webdriver.By.id('firstName')).sendKeys('Deneme');
    driver.findElement(webdriver.By.id('lastName')).sendKeys('Dene');
    driver.findElement(webdriver.By.id('title')).click();
    driver.findElement(webdriver.By.id('title')).sendKeys('b');
    driver.findElement(webdriver.By.id('title')).sendKeys(webdriver.Key.ENTER);
    driver.findElement(webdriver.By.id('tcKimlik')).sendKeys('63482365210');
    driver.findElement(webdriver.By.id('dobDay')).click();
    driver.findElement(webdriver.By.id('dobDay')).sendKeys('1');
    driver.findElement(webdriver.By.id('dobDay')).sendKeys(webdriver.Key.ENTER);
    driver.findElement(webdriver.By.id('dobMonth')).click();
    driver.findElement(webdriver.By.id('dobMonth')).sendKeys('ocak');
    driver.findElement(webdriver.By.id('dobMonth')).sendKeys(webdriver.Key.ENTER);
    driver.findElement(webdriver.By.id('dobYear')).click();
    driver.findElement(webdriver.By.id('dobYear')).sendKeys('1965');
    driver.findElement(webdriver.By.id('dobYear')).sendKeys(webdriver.Key.ENTER);
    driver.findElement(webdriver.By.id('eMail')).sendKeys('deneme123@gmail.com');
    driver.findElement(webdriver.By.id('ceMail')).sendKeys('deneme123@gmail.com');
    driver.findElement(webdriver.By.id('oprCode')).sendKeys('532');
    driver.findElement(webdriver.By.id('mobilePhone')).sendKeys('1111111');
    driver.findElement(webdriver.By.className('float-right ui-buttons ui-buttons-red radius-4px')).click();

    driver.wait(until.elementLocated(By.id('grandTotal')));
    driver.findElement(webdriver.By.id('grandTotal'))
        .then(element =>
            element.getText()
                .then(price => console.log('Ticket price:'+ price.red))
    );

    driver.findElement(webdriver.By.id('Box_CC')).click().then(function(){
        driver.sleep(1000);
    });
    driver.findElement(webdriver.By.id('number1')).click();
    driver.findElement(webdriver.By.id('number1')).sendKeys('4916989656739611');
    driver.findElement(webdriver.By.id('CVC')).sendKeys('127');
    driver.findElement(webdriver.By.id('chCity')).sendKeys('Mersin');
    driver.findElement(webdriver.By.id('chAdres1')).sendKeys('Mersin mersin mersin');
    driver.findElement(webdriver.By.id('expmonth')).click();
    driver.findElement(webdriver.By.id('expmonth')).sendKeys('01');
    driver.findElement(webdriver.By.id('expmonth')).sendKeys(webdriver.Key.ENTER);
    driver.findElement(webdriver.By.id('expyear')).click();
    driver.findElement(webdriver.By.id('expyear')).sendKeys('2022');
    driver.findElement(webdriver.By.id('expyear')).sendKeys(webdriver.Key.ENTER);
    driver.findElement(webdriver.By.id('chCountry')).click();
    driver.findElement(webdriver.By.id('chCountry')).sendKeys('T');
    driver.findElement(webdriver.By.id('chCountry')).sendKeys(webdriver.Key.ENTER);
    driver.findElement(webdriver.By.className('ui-icons float-right agreement ui-icons-check_off')).click().then(function(){
        driver.sleep(1000);
    });
    driver.findElement(webdriver.By.id('kk_button')).click().then(function(){
        driver.sleep(15000);
    });

    driver.findElement(webdriver.By.className('ui-box ui-box-error radius-6px'))
    .then(elem =>
        elem.getText()
            .then(errMsg => console.log('"'+errMsg.red+'"'))
    );
driver.takeScreenshot().then(
    function(image, err) {
        require('fs').writeFile('FinalScreen.png', image, 'base64', function(err) {
		if(err)
			return console.log(err);
		else return console.log("Screenshot saved successfully!");
		        });
    }
);
driver.quit();