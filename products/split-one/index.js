import faker from "faker";

let products = "";
products += '<div class="split-list-container">';
products += "<h1>Split Product List</h1>";

for (let i = 0; i < 10; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

products += "</div>";

document.querySelector("#dev-products").innerHTML = products;
