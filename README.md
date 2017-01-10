# Suggested name [![Build Status](https://travis-ci.org/platan/suggested-name.svg?branch=master)](https://travis-ci.org/platan/suggested-name)
JavaScript library for suggesting common name. Suggested name is composed of words occurring in all given names.

names (input)|suggested name (output)
--- | ---
**Fire** Kids Edition **Tablet 7" Display Wi-Fi 8 GB** Black <br/> **Fire Tablet 7" Display Wi-Fi 8 GB** Magneta <br/> **Fire Tablet 7" Display Wi-Fi 8 GB** Blue|**Fire Tablet 7" Display Wi-Fi 8 GB**

## Usage
```javascript
var suggestedName = require('suggested-name');

suggestedName([
    'Fire Kids Edition Tablet 7" Display Wi-Fi 8 GB Black',
    'Fire Tablet 7" Display Wi-Fi 8 GB Magneta',
    'Fire Tablet 7" Display Wi-Fi 8 GB Blue'
]); // = 'Fire Tablet 7" Display Wi-Fi 8 GB'
```
Remove given characters from names:
```javascript
suggestedName([
    'Fire Tablet (7" Display Wi-Fi 8 GB Black)',
    'Fire Tablet (7" Display Wi-Fi 8 GB Magneta)',
    'Fire Tablet (7" Display Wi-Fi 8 GB Blue)'
], ['(', ')']); // = 'Fire Tablet 7" Display Wi-Fi 8 GB'
```

More examples can be found in [tests](http://github.com/platan/suggested-name/blob/master/test/index.spec.js).

## Installation
```
npm install --save suggested-name
```

## Features

## Scripts
* `npm run build` - produces production version under the `lib` folder
* `npm run dev` - produces development version and runs a watcher
* `npm run test` - runs the tests

## Changelog
### 0.1.0 (2016-01-10)
- initial release

## Credits
This project was created using [webpack-library-starter](http://github.com/krasimir/webpack-library-starter).

## License
This project is licensed under the [MIT license](http://github.com/platan/suggested-name/blob/master/LICENSE).
