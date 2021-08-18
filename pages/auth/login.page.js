const { Builder, By, Key, util } = require('selenium-webdriver');

class Login {

    objects = {
        "btnStartHeader": ".welcome-content > .primary-btn",
        "btnStartNavbar": ".header-content > .right-part > .start-part > .primary-btn > .primary-text",
        "imgMetamaskLogo": ".metamask-login",
        "lknAccountBalance": ".header > .header-content > .right-part > .balance-part > .icon",
        "lknAccounOptions": ".user-part > .menu-button > .icon-part > .icon-arrow > .icon",
        "lknAccountLogout": "div > div:nth-child(4) > .primary-text > .icon-part > span"
    };

    accountOptions(driver){
        return driver.findElement(By.css(this.objects.lknAccounOptions)).click();
    };

    start(driver){
        driver.findElement(By.css(this.objects.btnStartHeader)).click(); 
        return driver.findElement(By.css(this.objects.imgMetamaskLogo)).click();
    }

}
module.exports = new  Login();