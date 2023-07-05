# webdriverio-appium-page-object-model-android-ios and integration Browserstack
Webdriverio, Appium, Automation, Android & iOS

Automation Test for app ApiDemos-debug.apk : 
- startActivity to specific Android Activity
- Accept Alert Android Dialog
- Vertical Scrolling
- Horizontal Scrolling
- Select Datepicker
- Find element by accessibbility id
- Find element by classname
- Find element by xpath
- Find element by UIAutomator
- Find multiple elements
- Input Field

Automation Test for app ColorNote+Notepad.apk : 
- Skip Element
- Add a Note
- Delete a Note
- Page Object Model (Screen Objects)
- implement hooks
- integeration with Browserstack

Automation Test for app UIKitCatalog.app : 
- find Elements ios
- find by tag name
- find element by accessibility id
- find element by class chain
- find element by predicate string
- search field, clear, verify text empty
- Handle Alert
- Scroll down, up, left, right

Automation Test for app MVCTodo.app : 
- Input text create todo
- Handle second popup
- Verify List Todos
- Handle Datepicker
- Page Object Model 
- Handle function get by Accessibility id
- implement hooks

iOS webdriver Agent
https://github.com/facebookarchive/WebDriverAgent/wiki/Class-Chain-Queries-Construction-Rules

How to run : 
- git clone git@github.com:habensim/webdriverio-appium-page-object-model-android-ios.git
- npm install
- running emulator
- npx wdio config/wdio.android.conf.js -> for testing android
- npx wdio config/wdio.ios.conf.js -> for testing ios

# setup jsconfig, babel & eslint
- jsconfig for Autocompletion webdriverio
- babel for transpiler syntax unsupported
- eslint for statically analyzes your code to quickly find problems

run this
- npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register
- npm install eslint-plugin-wdio --save-dev

# Browserstack Documentation
- https://webdriver.io/docs/browserstack-service/
- https://www.browserstack.com/app-automate/capabilities 
- install browserstack service npm install @wdio/browserstack-service --save-dev
- running using npx wdio config/wdio.android.bs.js

# dotenv
- https://www.npmjs.com/package/dotenv
- install dotenv npm install dotenv --save
- create .env in your root folder set BROWSERSTACK_USER=userbrowserstack | BROWSERSTACK_KEY=keybrowserstack