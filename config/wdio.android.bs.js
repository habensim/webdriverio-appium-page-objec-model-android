require('dotenv').config()
const { config } = require('./wdio.shared.conf');

//
// ============
// Browserstack Credentials
// ============
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

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
        'platformName': 'Android',
        'appium:platformVersion': '13.0',
        'appium:deviceName':'Google Pixel 7 Pro',
        'appium:automationName':'UIAutomator2',
        ///Users/habensimanjuntak/Documents/QA/automation/myauto/mobile/webdriverio-appium-v8/app/android/ApiDemos-debug.apk
        'appium:app': "bs://35de8a5f3f6be35e9a57ed8ebbaf894432a4d731",
        'appium:autoGrantPermissions': true
    }
];

// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack'];

exports.config = config;