const addNoteScreen = require("../../screenobjects/android/add-note.screen");

describe('Add Notes', () => {
    it('Skip Tutorial', async () => {
        await addNoteScreen.skipBtn.click();

        await expect(addNoteScreen.addNoteText).toBeDisplayed();
    });

    it('add a note, save changes & verify note', async () => {
        await addNoteScreen.addNoteText.click();
        await addNoteScreen.textOption.click();
        await expect(addNoteScreen.textEditing).toBeDisplayed();

        // add note title   
        await addNoteScreen.noteHeading.addValue("Fav Anime List");

        // add note body   
        await addNoteScreen.noteBody.addValue("Naruto\nOnePiece\nDragon Ball");

        //save changes
        await addNoteScreen.saveNote();

        //assertion
        await expect(addNoteScreen.editBtn).toBeDisplayed();
        await expect(addNoteScreen.viewNote).toHaveText("Naruto\nOnePiece\nDragon Ball");
    });
});