const { When, setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60000);

/**
 * Step: User wait for certain number of seconds without any action
 *
 * @param timeInSeconds - time to wait
 *
 * @example: When I wait for 5 seconds
 */
When('I wait for {int} seconds', function(timeInSeconds) {
    return browser.sleep(timeInSeconds * 1000);
});