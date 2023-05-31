describe('Delete Note', () => {
    it('Skip Tutorial', async () => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();

        // await expect($('//*[@text="Add note"]')).toBeDisplayed();
    });

    it('add a note, save changes & verify note', async () => {

        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();

        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        // add note title   
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
        .addValue("Fav Anime List");

        // add note body   
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
        .addValue("Naruto\nOnePiece\nDragon Ball");

        //save changes
        await driver.back();
        await driver.back();

        //assertion
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Naruto\nOnePiece\nDragon Ball");
    });

    it('Delete a note & check the note in trash can', async () => {
        await driver.back();
        
        const note = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click();

        //click on more icon accessibility id
        await $('~More').click();

        //click on delete item
        await $('//*[@text="Delete"]').click();

        await driver.acceptAlert();

        // click on nav icon
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();

        // click on trash can item
        await $('//*[@text="Trash Can"]').click();

        // assertions
        // const trashCanItem = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title');

        // await expect(trashCanItem).toHaveText(note);
    });
});