const path =require('path');
const { config } = require('./wdio.shared.conf');

//
// ============
// Runner Configuration
// ============
config.port = 4723;

//
// ============
// Specs
// ============
config.specs = [
    '../test/specs/android/add-note*.js'
];

//
// ============
// Capabilities
// ============
config.capabilities = [
   {
        'appium:platformName': 'Android',
        'appium:platformVersion': '12.0',
        'appium:deviceName':'automation-v12',
        'appium:automationName':'UIAutomator2',
        ///Users/habensimanjuntak/Documents/QA/automation/myauto/mobile/webdriverio-appium-v8/app/android/ApiDemos-debug.apk
        'appium:app':path.join(process.cwd(),'app/android/ColorNote+Notepad.apk'),
        'appium:autoGrantPermissions': true
    }
];

exports.config = config;