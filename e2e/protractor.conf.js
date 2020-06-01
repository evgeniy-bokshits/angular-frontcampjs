// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

var ReportportalAgent = require('agent-js-jasmine');

var agent = new ReportportalAgent({
  token: '39900350-bfda-4ef2-af84-4db95603ffbc',
  endpoint: 'https://beta.demo.reportportal.io/api/v1',
  launch: 'evgeniy-bokshits_TEST_EXAMPLE',
  project: 'evgeniy-bokshits_personal',
  description: 'xz',
  attachPicturesToLogs: false,
  attributes: [
      {
          key: 'yourKey',
          value: 'yourValue'
      },
      {
          value: 'yourValue'
      }
  ]
});

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    jasmine.getEnv().addReporter(agent.getJasmineReporter());
  },
  afterLaunch:() => {
    return agent.getExitPromise();
  }

};
