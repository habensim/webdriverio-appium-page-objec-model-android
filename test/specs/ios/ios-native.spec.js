describe('iOS Native Features', () => {
    it('Working with alert box', async () => {
        await $('~Alert Views').click();
        await $('~Okay / Cancel').click();

        // await $('~OK').click();

        console.log(await driver.getAlertText());
        //click cancel
        await driver.dismissAlert();

        await expect($('~OK')).not.toExist();
    });

    it.only('Working with Scrollable elements', async() => {
        //easiest
        // you can set scroll to any direction - "down", "up", "left", "right"
        await driver.execute('mobile: scroll', {direction: "down"}); 
        await driver.execute('mobile: scroll', {direction: "up"}); 

    });
});