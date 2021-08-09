const { When, setDefaultTimeout } = require('cucumber');
const { browser } = require('protractor');
setDefaultTimeout(60000);

/**
 * Step: User navigates to certain URL
 * @param {String} url - certain url
 *
 * @example: When I navigate to "https://www.epam.com/"
 */
When('I navigate to {string}', function(url) {
    return browser.get(url);
});

/**
 * Step: User click to certain element
 * @param {String} locator - locator of element to click
 *
 * @example: When I click on element ""
 */
When('I click on element {string}', async function(locator) {
    const webElement = await browser.element(by.css(locator))

    return webElement.click();
});
