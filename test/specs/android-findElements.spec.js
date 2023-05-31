describe('Android Element test', () => {
    it('Find Element by accessibbility id', async() => {
        // find element by accessibility id
        const appOption = await $('~App');

        // click on element
        await appOption.click();

        // assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    });

    it('Find element by classname', async() => {
        // find element by classname
        const className = await $('android.widget.TextView');

        console.log(await className.getText());

        // Assertion
        await expect(className).toHaveText("API Demos");
    });

    xit('Find element by xpath', async () => {
        // xpath - (//tagname[@attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
        // find by resourceId
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        // find element by text
        await $('//android.widget.TextView[@text="Command two"]').click();

        // find element by text - assertion
        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText("You selected: 1 , Command two");
    });

    it('Find by UIAutomator', async () => {
        // find by text contains
        await $('android=new UiSelector().textContains("Alert")').click();  
    });

    it.only('Find multiple elements', async () => {
        const expectedList = [
            'API Demos', "Access'ibility",
            'Accessibility', 'Animation',
            'App', 'Content',
            'Graphics', 'Media',
            'NFC', 'OS',
            'Preference', 'Text',
            'Views'
        ]

        const actualList = []

        // find multiple elemennts
        const textList = await $$('android.widget.TextView');

        // loop through them
        for(const element of textList){
            actualList.push(await element.getText());
        }

        // assert the list
        await expect(actualList).toEqual(expectedList);

    });

    it.only('Input Field', async () => {
        await $('~Views').click();
        await $('//*[@text="Auto Complete"]').click();
        await $('//*[@content-desc="1. Screen Top"]').click();

        const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');

        await textField.addValue('Indonesia');

        //verify country
        await expect(textField).toHaveText('Indonesia');
    });
    
});