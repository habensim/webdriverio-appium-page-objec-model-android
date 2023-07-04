import ListScreen from '../../screenobjects/ios/list.screen';
import ItemScreen from '../../screenobjects/ios/item.screen';

describe('Todo List', () => {
    before(async () => {
        await ListScreen.createListBtn.click(); 
        await ListScreen.listNameInput.addValue("Melakukan Olahraga di pagi hari");
        await ListScreen.createBtn.click();
        await expect(ListScreen.listNameField("Melakukan Olahraga di pagi hari")).toBeExisting();
        await ListScreen.listNameField("Melakukan Olahraga di pagi hari").click();
    });

    beforeEach(() => {
        console.log("BEFORE EACH HOOKS")
    });

    after(() => {
        console.log("AFTER HOOKS")
    });

    afterEach(() => {
        console.log("AFTER EACH HOOK!!")
    });

    it('Create Todo List', async() => {
       // create Todo Item
       await ItemScreen.createItem.click();
       await ItemScreen.title.addValue("Jalan Pagi");
       await ItemScreen.dueDate.click();
       await ItemScreen.datePicker.click();
       await ItemScreen.getByAccessibility("Monday, July 10").click();
       await ItemScreen.secondWindow.click();
       await ItemScreen.createBtn.click();

       //assertion
       await expect(await ItemScreen.getByAccessibility("Jalan Pagi")).toBeExisting();
       await expect(await ItemScreen.getByAccessibility("Due July 10, 2023")).toBeExisting();
    });

});