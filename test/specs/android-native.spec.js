describe('Android Native Feature Tests', () => {
    it('Access an Activity directly', async () => {
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");

        //pause 3s
        await driver.pause(3000);

        //assert
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });

    it('Working with dialog boxes', async () => {
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");

        // click on first dialog
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

        // accept Alert
        // await driver.acceptAlert();

        // get alert text
        console.log('ALERT TEXT --->', await driver.getAlertText());

        // click on the OK button
        await $('//*[@resource-id="android:id/button1"]').click();

        // assertion - alert box is no longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    });

    it('Vertical scrolling',  async () => {
        await $('~App').click();
        await $('~Activity').click();

        //scroll to the end (not stable if element gets moved)
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        // scrollTextIntoView - more stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        // await $('~Secure Surfaces').click();

        //asertion
        await expect($('~Secure Dialog')).toExist();
    });

    it('Horizontal Scrolling', async () => {
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Gallery1");

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');

        await driver.pause(3000);
    });

    it.only('Select Datepicker', async () => {
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.DateWidgets1");

        // get current date
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = await date.getText();
        
        // click on "change the date"
        // await $('//*[@resource-id="io.appium.android.apis:id/pickDate"]').click()
        await $('~change the date').click();

        // scroll horizontally to the right
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        // pick the 10th date from the month
        await $('//*[@text="10"]').click()

        // click ok
        await $('//*[@resource-id="android:id/button1"]').click();

        // verify updated date
        await expect(await date.getText()).not.toEqual(currentDate);

    });
});