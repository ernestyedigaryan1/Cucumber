const { Then, setDefaultTimeout } = require('cucumber');
const { expect } = require('chai');
const { browser } = require('protractor');
setDefaultTimeout(60000);

/**
 * Verify that current URL contain the certain string
 *
 * @example
 * Then I expect page url contain "sometext"
 *
 * @param expectedText - text for verification
 */
Then('I expect page url to contain {string}', async (expectedText) => {
    expect(await browser.getCurrentUrl()).to.include(expectedText);
});

/**
 * Verify that current Page title is equal to the certain string
 *
 * @example
 * Then I expect page title to be equal "KinoBase"
 *
 * @param expectedText - text for verification
 */
Then('I expect page title to be equal {string}', async (expectedText) => {
    expect(await browser.getTitle()).to.be.equal(expectedText);
});

/**
 * Verify that text on current element is equal to the certain string
 *
 * @example
 * Then I expect text on element ".container h1" should be equal "Watch Collections Online"
 *
 * @param locator - locator of element
 * @param expectedText - text for verification
 */
Then('I expect text on element {string} should be equal {string}', async (locator, expectedText) => {
    const webElement = await browser.element(by.css(locator))

    expect(await webElement.getText()).to.be.equal(expectedText);

});