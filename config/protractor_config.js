const path = require('path');
const yargs = require('yargs').argv;
const reporter = require('cucumber-html-reporter');


const cucumberJunitConvert = require('cucumber-junit-convert');

const options = {
  inputJsonFile: path.join(__dirname, '../reports/report.json'),
  outputXmlFile: path.join(__dirname, '../reports/cucumber-report.xml'),
}

const reportOptions = {
  theme: 'bootstrap',
  jsonFile: path.join(__dirname, '../reports/report.json'),
  output: path.join(__dirname, '../reports/cucumber-report.html'),
  reportSuitsAsScenarios: true
};

exports.config = {
  allScriptsTimeout: 60000,
  getPageTimeout: 60000,
  specs: [path.resolve('./features/**/*.feature')],
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    shardTestFiles: yargs.instances > 1,
    maxInstances: yargs.instances || 1,
    browserName: 'chrome',
  },
  directConnect: true,
  cucumberOpts: {
    require: [path.resolve('./step_definitions/**/*.js')],
    ignoreUncaughtExceptions: true,
    format: ['json:./reports/report.json', './node_modules/cucumber-pretty'],
    tags: yargs.tags || '@all'
  },
  onPrepare: () => {
    return browser.waitForAngularEnabled(false);
  },
  afterLaunch: () => {
      cucumberJunitConvert.convert(options);
      return reporter.generate(reportOptions);
  }
};
