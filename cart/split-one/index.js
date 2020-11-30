import faker from "faker";

function main() {
  let cartItems = "";

  cartItems += "<h1>Cart</h1>";

  for (let i = 0; i < 10; i++) {
    const amount = faker.commerce.price();
    cartItems += `<div>${i + 1}. ${amount}</div>`;
  }

  document.querySelector("#dev-cart").innerHTML = cartItems;
}

export default main;
