const fakeFeatureFlag = Math.floor(Math.random() * 10 + 1);

if (fakeFeatureFlag >= 5) {
  import("products/ProductsIndex").then(m => {
    m.default();
  });
  import("cart/CartIndex").then(m => {
    m.default();
  });
} else {
  import("products/ProductsSplitOne").then(m => {
    m.default();
  });
  import("cart/CartIndexSplitOne").then(m => {
    m.default();
  });
}
