import faker from "faker";

function mount(el) {
  let cartItems = "";

  cartItems += "<h1>Cart</h1>";

  for (let i = 0; i < 10; i++) {
    const amount = faker.commerce.price();
    cartItems += `<div>${i + 1}. ${amount}</div>`;
  }

  el.innerHTML = cartItems;
}

// Context situation 1
// running this file in development in isolation
// we are using local index.html file
// which definitely has an element of dev-products
// we want to immediately render our app into that element

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart-local");
  if (el) {
    mount(el);
  }
}

// Context situation 2
// we are running this file in development or production
// through a container app
// there is no guarantee that an element with an id of dev-products exists
// we do not want to try to render the app immediately
//
export { mount };
