# Module Federation simple POC

# High level overview

## Container
The container directory is the wrapper that will load in a remote. When the page is reloaded
Based on a simple flag we will dynamically load in one version of the app or another.

```js
const fakeFeatureFlag = Math.floor(Math.random() * 10 + 1);

if (fakeFeatureFlag >= 5) {
  import("products/ProductsIndex");
} else {
  import("products/ProductsSplitOne");
}```

```sh
container
  ├── node_modules
  ├── package.json
  ├── public
  │   └── index.html
  ├── src
  │   │── bootstrap
  │   └── index.js
  ├── webpack.config.js
```

## Products
The products directory contains a modules that can be loaded in to a container at run time.
The purpose of products in this example is to demonstrate a products listing being developed in isolation from another listing.
When the index file from `src` is loaded in to the container a list of 5 products will be displayed.
When the index file from `split-one` is loaded in to the container a list of 10 products will be displayed.

```sh
products
  ├── node_modules
  ├── package.json
  ├── public
  │   └── index.html
  ├── split-one
  │   └── index.js
  ├── src
  │   └── index.js
  ├── webpack.config.js
```

# Steps to run
```sh
cd container
yarn
yarn start

cd products
yarn
yarn start
```

Products will be live on [here](http://localhost:8081) and will only display the `Original Product List` by default.
The real magic is happening [here](http://localhost:8080) when visiting this app you can
refresh the page to simulate different users navigating to a page. Because the flag is this example is based
 on `Math.random` you will most likely need to refresh the page several times to see a change.
