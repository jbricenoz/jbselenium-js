const { Builder, By, Key, util } = require('selenium-webdriver');
require('chromedriver');

async function demo(){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('chrome-extension://edgfeenenidkoidamkeeonclbnaoihoc/home.html#initialize/metametrics-opt-in');
}

demo();