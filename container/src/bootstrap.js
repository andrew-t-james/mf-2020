const fakeFeatureFlag = Math.floor(Math.random() * 10 + 1);

if (fakeFeatureFlag >= 5) {
  import("products/ProductsIndex");
} else {
  import("products/ProductsSplitOne");
}
