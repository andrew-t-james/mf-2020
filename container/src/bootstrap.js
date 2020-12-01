const productsElement = document.querySelector("#dev-products-container");
const cartElement = document.querySelector("#dev-cart-container");
const fakeFeatureFlag = Math.floor(Math.random() * 10 + 1);

if (fakeFeatureFlag >= 5) {
  import("products/ProductsIndex").then(Module => {
    const { mount } = Module;
    mount(productsElement);
  });
  import("cart/CartIndex").then(Module => {
    const { mount } = Module;
    mount(cartElement);
  });
} else {
  import("products/ProductsSplitOne").then(Module => {
    const { mount } = Module;
    mount(productsElement);
  });
  import("cart/CartIndexSplitOne").then(Module => {
    const { mount } = Module;
    mount(cartElement);
  });
}
