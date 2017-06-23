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
//process.exit(3);
}
else{
console.log('Cookies are here'.green);
//process.exit(2) ;
}

//next weeek
Date.prototype.nextWeek = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate()+7;

  return [(dd>9 ? '' : '0') + dd,
          (mm>9 ? '' : '0') + mm,
          this.getFullYear()
         ].join('.');
};
var date = new Date();
//console.log(date.nextWeek());
driver.get('http://www.turkishairlines.com/tr-tr/');

driver.findElement(webdriver.By.className('one_way')).click();
driver.findElement(webdriver.By.id('godate')).click();
driver.findElement(webdriver.By.xpath('//*[@id="calendar-100000001"]/div[3]/table/tbody/tr[4]/td[4]')).click();
driver.findElement(webdriver.By.className('medium autocompletenew float-left default-value ac_input')).sendKeys('ist');
driver.findElement(webdriver.By.className('medium autocompletenew float-left default-value ac_input')).sendKeys(webdriver.Key.ENTER);
driver.findElement(webdriver.By.id('to')).sendKeys('Lon');
driver.findElement(webdriver.By.id('to')).sendKeys(webdriver.Key.ENTER);
driver.findElement(webdriver.By.id('to')).sendKeys(webdriver.Key.ENTER);
console.log('ucus secildi'.cyan);

driver.wait(until.elementLocated(By.id('priceSummaryDetails')));
driver.findElement(By.id('priceSummaryTotalPrice'))
    .then(element =>
        element.getText()
            .then(price => console.log('Bilet fiyati:'+ price.red +' TRY'))
    );
    driver.findElement(webdriver.By.id('sideSubmitButton')).click();
    driver.wait(until.elementLocated(By.id('firstName')));
    driver.findElement(webdriver.By.id('firstName')).sendKeys('Ali');
    driver.findElement(webdriver.By.id('lastName')).sendKeys('Demir');
    driver.findElement(webdriver.By.id('title')).click();
    driver.findElement(webdriver.By.id('title')).sendKeys('b');
    driver.findElement(webdriver.By.id('title')).sendKeys(webdriver.Key.ENTER);
    driver.findElement(webdriver.By.id('tcKimlik')).sendKeys('63482365210');
driver.takeScreenshot().then(
    function(image, err) {
        require('fs').writeFile('Istanbul_Londra.png', image, 'base64', function(err) {
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