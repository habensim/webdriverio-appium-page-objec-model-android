describe('Search Input Field', () => {
    it('search field, clear, verify text empty', async() => {
        // access the default search bar screen
        await $('~Search').click();
        // Search > Default > Default Search Bar
        await $('~Default').click();
        // Enter text in the search input field
        await $('//XCUIElementTypeSearchField').addValue("Keren Banget Automation iOS");
        await expect($('XCUIElementTypeSearchField')).toHaveAttr("value");
        // Clear the search input field by clicking on the 'x' button
        
        await $('~Clear text').click();
        // Verify search input field is cleared
        await expect($('XCUIElementTypeSearchField')).not.toHaveAttr("value");

    });
});