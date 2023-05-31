const EditNoteScreen = require("../../screenobjects/android/edit-note.screen");


describe('Delete Note', () => {

    it('Delete a note & check the note in trash can', async () => {
        await EditNoteScreen.skipTutorial();
        await EditNoteScreen.addAndSaveNote("TV Shows", "Friends\nBreakingBad\nPeakyBlinders");

        await driver.back();
        
        const note = await EditNoteScreen.firstNote.getText();

        await EditNoteScreen.firstNote.click();

        //click on more icon accessibility id
        await EditNoteScreen.moreIcon.click();

        //click on delete item
        await EditNoteScreen.editIcon.click();

        await driver.acceptAlert();

        // click on nav icon
        await EditNoteScreen.navIcon.click();

        // click on trash can item
        await EditNoteScreen.trashCanItem.click();

        // assertions
        // const trashCanItem = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title');

        // await expect(trashCanItem).toHaveText(note);
    });
});