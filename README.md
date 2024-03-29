# 🎼 [enthusiast](https://github.com/eserozvataf/enthusiast)

[![build status][build-image]][build-url]
[![npm version][npm-image]][npm-url]
[![npm download][npm-download-image]][npm-url]
[![dependencies][dep-image]][dep-url]
[![coverage status][coverage-image]][coverage-url]
[![license][license-image]][license-url]


## Update (July 2022)

DEPRECATED in favor of [hex](https://github.com/eserozvataf/hex).
See https://github.com/eserozvataf/hex for details.


## What is the Enthusiast?

Enthusiast is a stream library implementation that utilizes generator functions to make streams work in functional way.

Additionally, as a library, Enthusiast is completely tree-shanking-friendly. Your favorite module bundler can easily inline the functionality you need with no extra configuration, instead of bundling the whole Enthusiast package.


## Quick start

Execute `npm install enthusiast` or `yarn add enthusiast` to install enthusiast and its dependencies into your project directory.


## Usage of modules

### Reading a stream

```js
import fromNodeStream from 'enthusiast/fromNodeStream';
import iterate from 'evangelist/iterate';
import * as fs from 'fs';

iterate(
    // open file and read 512 bytes buffer on each generator call
    fromNodeStream(fs.createReadStream('./test.txt'), 512),
    item => {
        console.log(item.data.toString('utf8'));
    },
);
```

### Writing to a stream

```js
import toNodeStream from 'enthusiast/toNodeStream';
import compose from 'evangelist/compose';
import * as fs from 'fs';

const logFormatter = (logEntry) => `${Date.now()} ${logEntry}\n`;

const writeLog = compose(
    logFormatter,
    toNodeStream(fs.createWriteStream(‘./logFile’)),
);

writeLog('a sample log entry');
```

### Transforming a stream

```js
import fromNodeStream from 'enthusiast/fromNodeStream';
import toNodeStream from 'enthusiast/toNodeStream';
import iterate from 'evangelist/iterate';
import compose from 'evangelist/compose';
import * as fs from 'fs';

iterate(
    // open file and read 512 bytes buffer on each generator call
    fromNodeStream(fs.createReadStream('./test.txt'), 512),
    compose(
        gzip(),
        toNodeStream(fs.createWriteStream('./test.txt.gz')),
    ),
);
```


## Todo List

See [GitHub Projects](https://github.com/eserozvataf/enthusiast/projects) for more.


## Requirements

* node.js (https://nodejs.org/)


## License

Apache 2.0, for further details, please see [LICENSE](LICENSE) file


## Contributing

See [contributors.md](contributors.md)

It is publicly open for any contribution. Bugfixes, new features and extra modules are welcome.

* To contribute to code: Fork the repo, push your changes to your fork, and submit a pull request.
* To report a bug: If something does not work, please report it using [GitHub Issues](https://github.com/eserozvataf/enthusiast/issues).


## To Support

[Visit my patreon profile at patreon.com/eserozvataf](https://www.patreon.com/eserozvataf)

[build-image]: https://img.shields.io/travis/eserozvataf/enthusiast.svg?style=flat-square
[build-url]: https://travis-ci.org/eserozvataf/enthusiast
[npm-image]: https://img.shields.io/npm/v/enthusiast.svg?style=flat-square
[npm-download-image]: https://img.shields.io/npm/dt/enthusiast.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/enthusiast
[dep-image]: https://img.shields.io/david/eserozvataf/enthusiast.svg?style=flat-square
[dep-url]: https://github.com/eserozvataf/enthusiast
[coverage-image]: https://img.shields.io/codecov/c/github/eserozvataf/enthusiast.svg?style=flat-square
[coverage-url]: https://codecov.io/gh/eserozvataf/enthusiast
[license-image]: https://img.shields.io/npm/l/enthusiast.svg?style=flat-square
[license-url]: https://github.com/eserozvataf/enthusiast/blob/master/LICENSE
