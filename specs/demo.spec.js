let config = require('../config/qa.json');
const { Builder, By, Key, util } = require('selenium-webdriver');
const Login = require('../pages/auth/login.page');
require('chromedriver');

describe('matching cities to foods', () => {

    let driver = new Builder().forBrowser('chrome').build();
    
    beforeEach(() => {
        driver.get(config.baseUrl);
        console.log('1 - beforeEach');
    });

    afterEach(() => {
        driver.close();
        console.log('1 - afterEach');
    });

    it('async/await', async () => {
        await Login.start(driver);
    });

   
});
