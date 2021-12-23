## Minimal React and Webpack 4 boilerplate with babel

<p align="center">
    <img alt="dependencies" title="dependencies" src="https://img.shields.io/david/hashemkhalifa/webpack-react-boilerplate.svg" >
   <img alt="dependencies" title="dependencies" src="https://img.shields.io/github/last-commit/hashemkhalifa/webpack-react-boilerplate.svg" >
</p>

> Minimal webpack and react boilerplate using latest version of react and babel as well as jest and enzyme for more details about technologies used. [click](#technologies-used)
> with real time server changes ;)

> check out [Medium article](https://medium.com/@hashem.khalifa/minimal-webpack-and-react-starter-boilerplate-seriously-d90a673e134f) for more details

![Real time change](https://cdn-images-1.medium.com/max/1600/1*0Slpwk3trmF7kLeoFp5UOw.gif)

### Table of contents

[Project structure](#project-structure)

[Installation](#installation)

[Configuration](#configuration)

[Technologies used](#technologies-used)

### Project structure

```
build/
src/
|- index.jsx _______________________________ # Application entry
|- App.jsx _________________________________ # Application init
|  |- Components/
|    |- hello-world/
|       |- index.jsx _______________________ # Sample component

webpack
|- paths.js ________________________________ # webpack paths needed
|- webpack.common.js _______________________ # common webpack config
|- webpack.dev.js __________________________ # development config
|- webpack.prod.js _________________________ # production config
```

### Installation

1- Clone the boilerplate repo

`git clone git@github.com:HashemKhalifa/webpack-react-boilerplate.git`

2- `yarn` or `npm install` to install npm packages

3- start dev server using `yarn start` or `npm start`.

3- build and bundling your resources for production `yarn build` or `npm run build`.

4- run the production build from dist folder `yarn prod` or `np run prod`.

5- beauify code using `yarn format` or `npm run format`

### Configuration

- `/webpack.config.js` main webpack config that merge common and webpack environment based config.
- Prettier config `/.prettierc`.
- Husky and Browsers list config object in `/.package.json`.

#### Technologies used

- [Webpack 5](https://github.com/webpack/webpack)
- [Babel 7](https://github.com/babel/babel) [ transforming JSX and ES6,ES7,ES8 ]
- [React](https://github.com/facebook/react) `17.0.2`
- [Formik](https://formik.org/) [ for handling forms ]
- [React-Bootstrap](https://react-bootstrap.github.io/) [ UI framework ]
- [Eslint](https://github.com/eslint/eslint/) with airbnb config
- [Prettier](https://github.com/prettier/prettier) [ Code formatter ]
- [Style](https://github.com/webpack-contrib/style-loader) & [CSS Loader](https://github.com/webpack-contrib/css-loader) & [SASS-loader](https://github.com/webpack-contrib/sass-loader)
- [CSS modules](https://github.com/css-modules/css-modules) [ Isolated style based on each component ]
- [Browsers list](https://github.com/browserslist/browserslist) [ Share target browsers between different front-end tools, like Autoprefixer, Stylelint and babel-preset-env ]
- [Husky](https://typicode.github.io/husky/#/)
- [Webpack dev serve](https://github.com/webpack/webpack-dev-server)