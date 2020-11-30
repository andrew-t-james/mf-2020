import faker from "faker";

function main() {
  let products = "";

  products += '<div class="original-list-container">';
  products += "<h1>Original Product List</h1>";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  products += "</div>";

  document.querySelector("#dev-products").innerHTML = products;
}

export default main;
