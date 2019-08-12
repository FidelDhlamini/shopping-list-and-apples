// shopping list factory function here
function ShoppingList(items) {
  var items = [];

  var price = 0

  function addItem(item, price) {


    if (item === "") {
      return "Enter an item to add to your shopping list";
    }
    items.push({
      price,
      item,
    })
    return "item added"


  }
  console.log(items)

  function getCost() {
    return price;
  }

  function getItems() {
    return JSON.stringify(items)
  }

  // function getPrice(){
  //     return price;
  //     }

  return {
    addItem,
    getItems,
    getCost,
    //getPrice,
    // addToShoppingList,
  }
}