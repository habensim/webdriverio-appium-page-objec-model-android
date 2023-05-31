const addNoteScreen = require("./add-note.screen");

class EditNoteScreen {
    get firstNote(){
       return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    get moreIcon(){
        return $('~More');
    }

    get editIcon(){
        return $('//*[@text="Delete"]');
    }

    get navIcon(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trashCanItem(){
        return $('//*[@text="Trash Can"]');
    }

    async skipTutorial() {
        await addNoteScreen.skipBtn.click();

        await expect(addNoteScreen.addNoteText).toBeDisplayed();
    }

    async addAndSaveNote(noteHeading, noteBody){
        await addNoteScreen.addNoteText.click();
        await addNoteScreen.textOption.click();

        await expect(addNoteScreen.textEditing).toBeDisplayed();

        // add note title   
        await addNoteScreen.noteHeading.addValue(noteHeading);

        // add note body   
        await addNoteScreen.noteBody.addValue(noteBody);

        //save changes
        await addNoteScreen.saveNote();

        //assertion
        await expect(addNoteScreen.editBtn).toBeDisplayed();
        await expect(addNoteScreen.viewNote).toHaveText(noteBody);
    }
}

module.exports = new EditNoteScreen();