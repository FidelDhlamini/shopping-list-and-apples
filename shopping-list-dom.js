// shopping-list dom code here
var itemInput = document.querySelector(".itemInput");
var priceInput = document.querySelector(".priceInput");
var costSetting = document.querySelector(".itemCostSetting");
var budgetInput = document.querySelector(".budgetInput");
var display = document.querySelector(".displayPanel")
var screen = document.querySelector(".screen")
var addBtn = document.querySelector(".addButton");
var instance = ShoppingList();


function addItems() {

    if (addBtn) {
        displayMessage = instance.addItem(itemInput.value, priceInput.value)
        displayItem = instance.getItems()


    }
    screen.innerHTML = displayItem;
    display.innerHTML = displayMessage


}
addBtn.addEventListener('click', addItems)