# react-es6-alt-starter

Forked from **Y**et **A**nother **R**eact **S**tarter **K**it.

Utilizes [react-templates](http://wix.github.io/react-templates/)

## Credits

Forked from [YARSK](https://github.com/bradleyboy/yarsk)

## Usage

Fork this repo, then run:

```
npm install
npm start
```

That will fire up a webpack dev server in **hot** mode. Most changes will be reflected in the browser automatically without a browser reload. You can view the app in the browser at `http://localhost:8080`.

## Building

To generate a production build, run:

```
npm run build
```

The above command will generate a `dist` folder with the appropriate index.html file along with the minified CSS and JS files.

You can also automatically publish to GitHub pages. Just run this instead of the regular build command:

```
npm run build:gh
```

You can then view your app at `http://[yourgithubusername].github.io/[reponame]`. For example, you can load the original demo at http://bradleyboy.github.io/yarsk.

## Modifying the HTML

The HTML file is generated using the `conf/tmpl.html` file. This file is used for both the development and production build.

## Tests

The tests use Karma, Mocha and Chai through PhantomJS. See the example test in `app/Application/__tests__/index.js`. The test suite can be run like so:

```
npm test
```

To run the tests in watch mode (tests will re-run each time a file changes), use this instead:

```
npm run test:watch
```

You can generate code coverage reports with:

```
npm run test:coverage
```

See the `coverage` directory once that command is completed.

Finally, the repo is [Travis](https://travis-ci.org) ready. The `.travis.yml` file should work out of the box, just add your repo in Travis.

## Linting

If you'd like your JavaScript to be linted, copy the `.eslintrc.example` to `.eslintrc`. I've included my own defaults, feel free to modify them to your own taste. For more information on configuring ESLint, [consult its documentation](http://eslint.org/docs/rules/). Linting is run before each webpack build when a `.eslintrc` file is present.

## .editorconfig

An example `.editorconfig` file is provided with sensible defaults for JavaScript. Feel free to modify `.editorconfig.example` to match your own preferences, then renamed the file to `.editorconfig` and use an IDE or editor that supports [EditorConfig](http://editorconfig.org/).
