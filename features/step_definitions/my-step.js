/**
 * to run these tests you need install Cucumber.js on your machine
 * take a look at https://github.com/cucumber/cucumber-js for more informations
 *
 * first, install Cucumber.js via NPM
 * $ npm install -g cucumber
 *
 * then go into the cucumber directory and start the tests with
 * $ cucumber.js
 */

var assert = require('assert'),
    tmpResult;

module.exports = function(){

    this.Given(/^I go on the website "([^"]*)"$/, function(url) {
        browser.url(url);
        
    });

    this.Then(/^should the title of the page be "([^"]*)"$/, function(expectedTitle) {
        var title = browser.getTitle() + "15";
        console.log("THIS IS A CUSTOMISED LOG MADE BY XIN HE..........................")
        assert.equal(title, expectedTitle, ' title is "'+ title + '" but should be "'+ expectedTitle);
    });

};