# wasm-rust-vite-react

A vite + react + rust template to start your WebAssembly project with.

## Preparations

* rust

* nodejs

* yarn

* [wasm-pack](https://github.com/rustwasm/wasm-pack)

* [cargo-generate](https://github.com/cargo-generate/cargo-generate)

* [rsw-rs](https://github.com/rwasm/rsw-rs)



## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `dist` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br />

### `yarn build:wasm`

Builds the wasm for production to the `wasm-lib/pkg` folder.  

Your app is ready to be deployed!
