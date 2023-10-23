// bit.ly/submitjs
var allItems = [];

console.log(allItems);

function addItems() {
  obj = {
    productName: productName.value,
    productDescription: productDescription.value,
    productPrice: productPrice.value,
  };

  if (
    productName.value &&
    productDescription.value &&
    productPrice.value !== ""
  ) {
    allItems.push(obj);
    displayItems();
  } else {
    displayError.innerHTML = `<h1>Please fill up all the boxes</h1>`;
  }
}

function editItems() {
  var newItems = prompt("choose which item to modify")
  obj = {
    productName: productName.value,
    productDescription: productDescription.value,
    productPrice: productPrice.value,
  }

  if (productName.value &&
    productDescription.value &&
    productPrice.value !== "") {
      productName.value = ""
      productDescription.value = ""
      productPrice.value = ""
  }

  allItems.splice(newItems, 1, obj)
  displayItems()
}

function deleteAny() {
  var newItems = prompt("Choose item to remove");
  allitems.splice(newItems, 1);
  displayItems();
}

function deleteAll() {
  allItems.splice(0);
  displayItems();
}

function displayItems() {
  display.innerHTML = ""
  display.innerHTML = `
  <tr>
    <th>S/N</th>
    <th>Name of Product</th>
    <th>Description</th>
    <th>Price</th>
  </tr>`;
  allItems.map(
    (items, index) =>
      (display.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${items.productName}</td>
                <td>${items.productDescription}</td>
                <td>${items.productPrice}</td>
            </tr>`)
  );
}