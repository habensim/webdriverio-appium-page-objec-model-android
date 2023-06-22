describe('Todo List', () => {
    it('Create Todo List', async() => {
       await $('//*[@name="Create list"]').click(); 
       await $('//*[@value="List Name"]').addValue("Melakukan Olahraga di pagi hari");
       await $('~Create').click();

       await expect(await $("~Melakukan Olahraga di pagi hari")).toBeExisting();
    });
});