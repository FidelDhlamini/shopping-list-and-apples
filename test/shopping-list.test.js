// shopping-list tests here
it("should return warning message if nothing is typed", function () {
   var instance = ShoppingList();
    assert.equal("Enter an item to add to your shopping list", instance.addItem(""));
    
});
it("should add item typed in", function () {
    var instance = ShoppingList();
    assert.equal("item added", instance.addItem("apple"));

});
it("should return all the items added", function () {
    var instance = ShoppingList();
    assert.equal('[]', instance.getItems());

});




