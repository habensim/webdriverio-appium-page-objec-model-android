import ListScreen from '../../screenobjects/ios/list.screen';
import ItemScreen from '../../screenobjects/ios/item.screen';

describe('Todo List', () => {
    it('Create Todo List', async() => {
       await ListScreen.createListBtn.click(); 
       await ListScreen.listNameInput.addValue("Melakukan Olahraga di pagi hari");
       await ListScreen.createBtn.click();

       await expect(ListScreen.listNameField("Melakukan Olahraga di pagi hari")).toBeExisting();

       // create Todo Item
       await ListScreen.listNameField("Melakukan Olahraga di pagi hari").click();
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