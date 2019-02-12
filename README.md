# kvapi

__kvapi__ is modified short name of __Quick API__.

It's __TypeScript DevStack__ for fast creation __Node.JS REST API__ application for fast 

## Goal and The Idea Behind

Goal of this project is that we can only with fork of it, config new API EP and in few minutes prepare it to production, 
because DevStack has all needed stuff inside.

As many frameworks and DevStack you should be capable create functionality isolate from core code. Thanks to that
you can upgrade packages separately from you code and stay up to date.

## What's inside?

### Folder structure

Important folder structure looks like this:

```
├── src
│   ├── config
│   ├── providers
│   └── router
└── test
```

- __src__ - All source code containing TS syntax and you can use it of course in your code too. 
  - __config__ - Folder with config files which is loaded via package [enco](https://www.npmjs.com/package/enco).
  If you like to change config loading method, just do it in file */src/index.ts* in method `getConfig`
  - __provider__ - Folder with services singleton providers which is passed together with config to all routes definitions.
  Services is created via DI container package [kontik](https://www.npmjs.com/package/kontik).
  - __router__ - Here is all routes loaded to express router. Every file should contain one route created by definition
  you can find here: [kudy](https://www.npmjs.com/package/kudy).
- __test__ - Here you can define all needed test. Everything is here ready for it. Just write `npm run test` to console.


### Tools


#### express.js

url: https://expressjs.com

For HTTP layer. No more comment needed ... I hope.


#### nodemon

url: https://www.npmjs.com/package/nodemon 

Great tool for development when every change in eny file will hot reload application.


#### kontik

url: https://www.npmjs.com/package/kontik

Simple DI container for singleton service provisioning.


#### kudy

url: https://www.npmjs.com/package/kudy

Tool for simple routes definition.


#### enco

url: https://www.npmjs.com/package/enco

Great package for config loading depends on environment.


#### ts lint

url: https://palantir.github.io/tslint/

Because even superheroes needs codex.


#### mocha

url: https://mochajs.org

You know ... for testing.


#### chai

url: https://www.chaijs.com

Another great tool for testing.


