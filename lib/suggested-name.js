(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("suggested-name", [], factory);
	else if(typeof exports === 'object')
		exports["suggested-name"] = factory();
	else
		root["suggested-name"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = suggestedName;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function median(values) {
	    var half = Math.floor(values.length / 2);
	
	    values.sort(function (a, b) {
	        return a - b;
	    });
	    if (values.length % 2) {
	        return values[half];
	    } else {
	        return (values[half - 1] + values[half]) / 2.0;
	    }
	}
	
	function mostFrequent(array) {
	    return array.sort(function (a, b) {
	        return array.filter(function (v) {
	            return v === a;
	        }).length - array.filter(function (v) {
	            return v === b;
	        }).length;
	    }).pop();
	}
	
	function group(map, key, value) {
	    var values = map.has(key) ? map.get(key).concat(value) : [value];
	
	    map.set(key, values);
	};
	
	function suggestedName(names) {
	    var excludedCharacters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	
	    var wordPositions = new Map();
	    var wordVersions = new Map();
	
	    excludedCharacters.forEach(function (char) {
	        names = names.map(function (name) {
	            return name.replace(char, '');
	        });
	    });
	    names.map(function (name) {
	        return name.replace(/ {2,}/g, ' ');
	    }).forEach(function (name) {
	        [].concat(_toConsumableArray(new Set(name.split(' ')))).forEach(function (word, index) {
	            var lowerCaseValue = word.toLowerCase();
	
	            group(wordPositions, lowerCaseValue, index + 1);
	            group(wordVersions, lowerCaseValue, word);
	        });
	    });
	    var words = [].concat(_toConsumableArray(wordPositions.entries())).filter(function (entry) {
	        return wordVersions.get(entry[0].toLowerCase()).length === names.length;
	    }).map(function (entry) {
	        return [entry[0], median(entry[1])];
	    }).sort(function (a, b) {
	        return a[1] - b[1];
	    }).map(function (entry) {
	        return mostFrequent(wordVersions.get(entry[0]));
	    });
	
	    return words.join(' ');
	}
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=suggested-name.js.map