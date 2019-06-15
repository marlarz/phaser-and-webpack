#  Phaser and Webpack
#### Basic bootstrap project with Phaser and Webpack

## Features
- Webpack
- Hot Module Replacement
- Babel
- ESLint with standard JavaScript style config

# Setup
#### 1. Clone this repo into your workspace directory
```git clone https://github.com/marlarz/phaser-and-webpack.git```

#### 2. Install node.js and yarn

#### 3. Install dependencies (you can also use npm and run ```npm install```)
Run: ```yarn```

#### 4. Starting development server
Run: 

```yarn serve```

> This will run a server serving files from your `dist` directory. It will also start watching your files for changes. The game will be available at `http://localhost:8080/`

#### 5. Building your game
Run: 

```yarn build```
> This will build your files optimized and minimized. Build game will be available in `build` directory.

## ESLint
To automatically fix your `.js` files run:

```yarn lint```