(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("suggested-name", [], factory);
	else if(typeof exports === 'object')
		exports["suggested-name"] = factory();
	else
		root["suggested-name"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = suggestedName;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function median(values) {
  var half = Math.floor(values.length / 2);
  values.sort(function (a, b) {
    return a - b;
  });

  if (values.length % 2) {
    return values[half];
  }

  return (values[half - 1] + values[half]) / 2.0;
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
}

;

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

module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdWdnZXN0ZWQtbmFtZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3VnZ2VzdGVkLW5hbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3VnZ2VzdGVkLW5hbWUvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsibWVkaWFuIiwidmFsdWVzIiwiaGFsZiIsIk1hdGgiLCJmbG9vciIsImxlbmd0aCIsInNvcnQiLCJhIiwiYiIsIm1vc3RGcmVxdWVudCIsImFycmF5IiwiZmlsdGVyIiwidiIsInBvcCIsImdyb3VwIiwibWFwIiwia2V5IiwidmFsdWUiLCJoYXMiLCJnZXQiLCJjb25jYXQiLCJzZXQiLCJzdWdnZXN0ZWROYW1lIiwibmFtZXMiLCJleGNsdWRlZENoYXJhY3RlcnMiLCJ3b3JkUG9zaXRpb25zIiwiTWFwIiwid29yZFZlcnNpb25zIiwiZm9yRWFjaCIsImNoYXIiLCJuYW1lIiwicmVwbGFjZSIsIlNldCIsInNwbGl0Iiwid29yZCIsImluZGV4IiwibG93ZXJDYXNlVmFsdWUiLCJ0b0xvd2VyQ2FzZSIsIndvcmRzIiwiZW50cmllcyIsImVudHJ5Iiwiam9pbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QlcsY0FBaEIsRUFBZ0NELEtBQUssR0FBRyxDQUF4QyxDQUFMO0FBQ0FyQixXQUFLLENBQUNhLFlBQUQsRUFBZVMsY0FBZixFQUErQkYsSUFBL0IsQ0FBTDtBQUNELEtBTkg7QUFPRCxHQVRIO0FBVUEsTUFBTUksS0FBSyxHQUFHLDZCQUFJYixhQUFhLENBQUNjLE9BQWQsRUFBSixHQUNYNUIsTUFEVyxDQUNKLFVBQUE2QixLQUFLO0FBQUEsV0FBSWIsWUFBWSxDQUFDUixHQUFiLENBQWlCcUIsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTSCxXQUFULEVBQWpCLEVBQXlDaEMsTUFBekMsS0FBb0RrQixLQUFLLENBQUNsQixNQUE5RDtBQUFBLEdBREQsRUFFWFUsR0FGVyxDQUVQLFVBQUF5QixLQUFLO0FBQUEsV0FBSSxDQUFDQSxLQUFLLENBQUMsQ0FBRCxDQUFOLEVBQVd4QyxNQUFNLENBQUN3QyxLQUFLLENBQUMsQ0FBRCxDQUFOLENBQWpCLENBQUo7QUFBQSxHQUZFLEVBR1hsQyxJQUhXLENBR04sVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FBVUQsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPQyxDQUFDLENBQUMsQ0FBRCxDQUFsQjtBQUFBLEdBSE0sRUFJWE8sR0FKVyxDQUlQLFVBQUF5QixLQUFLO0FBQUEsV0FBSS9CLFlBQVksQ0FBQ2tCLFlBQVksQ0FBQ1IsR0FBYixDQUFpQnFCLEtBQUssQ0FBQyxDQUFELENBQXRCLENBQUQsQ0FBaEI7QUFBQSxHQUpFLENBQWQ7QUFNQSxTQUFPRixLQUFLLENBQUNHLElBQU4sQ0FBVyxHQUFYLENBQVA7QUFDRCIsImZpbGUiOiJzdWdnZXN0ZWQtbmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwic3VnZ2VzdGVkLW5hbWVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic3VnZ2VzdGVkLW5hbWVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wic3VnZ2VzdGVkLW5hbWVcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBtZWRpYW4odmFsdWVzKSB7XG4gIHZhciBoYWxmID0gTWF0aC5mbG9vcih2YWx1ZXMubGVuZ3RoIC8gMik7XG5cbiAgdmFsdWVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgaWYgKHZhbHVlcy5sZW5ndGggJSAyKSB7XG4gICAgcmV0dXJuIHZhbHVlc1toYWxmXTtcbiAgfVxuICByZXR1cm4gKHZhbHVlc1toYWxmIC0gMV0gKyB2YWx1ZXNbaGFsZl0pIC8gMi4wO1xuXG59XG5cbmZ1bmN0aW9uIG1vc3RGcmVxdWVudChhcnJheSkge1xuICByZXR1cm4gYXJyYXkuc29ydCgoYSwgYikgPT5cbiAgICBhcnJheS5maWx0ZXIodiA9PiB2ID09PSBhKS5sZW5ndGggLSBhcnJheS5maWx0ZXIodiA9PiB2ID09PSBiKS5sZW5ndGhcbiAgKS5wb3AoKTtcbn1cblxuZnVuY3Rpb24gZ3JvdXAobWFwLCBrZXksIHZhbHVlKSB7XG4gIGxldCB2YWx1ZXMgPSBtYXAuaGFzKGtleSkgPyBtYXAuZ2V0KGtleSkuY29uY2F0KHZhbHVlKSA6IFt2YWx1ZV07XG5cbiAgbWFwLnNldChrZXksIHZhbHVlcyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWdnZXN0ZWROYW1lKG5hbWVzLCBleGNsdWRlZENoYXJhY3RlcnMgPSBbXSkge1xuICBjb25zdCB3b3JkUG9zaXRpb25zID0gbmV3IE1hcCgpO1xuICBjb25zdCB3b3JkVmVyc2lvbnMgPSBuZXcgTWFwKCk7XG5cbiAgZXhjbHVkZWRDaGFyYWN0ZXJzLmZvckVhY2goKGNoYXIpID0+IHtcbiAgICBuYW1lcyA9IG5hbWVzLm1hcChuYW1lID0+IG5hbWUucmVwbGFjZShjaGFyLCAnJykpO1xuICB9KTtcbiAgbmFtZXMubWFwKG5hbWUgPT4gbmFtZS5yZXBsYWNlKC8gezIsfS9nLCAnICcpKVxuICAgIC5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgWy4uLm5ldyBTZXQobmFtZS5zcGxpdCgnICcpKV1cbiAgICAgICAgLmZvckVhY2goKHdvcmQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgbG93ZXJDYXNlVmFsdWUgPSB3b3JkLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBncm91cCh3b3JkUG9zaXRpb25zLCBsb3dlckNhc2VWYWx1ZSwgaW5kZXggKyAxKTtcbiAgICAgICAgICBncm91cCh3b3JkVmVyc2lvbnMsIGxvd2VyQ2FzZVZhbHVlLCB3b3JkKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIGNvbnN0IHdvcmRzID0gWy4uLndvcmRQb3NpdGlvbnMuZW50cmllcygpXVxuICAgIC5maWx0ZXIoZW50cnkgPT4gd29yZFZlcnNpb25zLmdldChlbnRyeVswXS50b0xvd2VyQ2FzZSgpKS5sZW5ndGggPT09IG5hbWVzLmxlbmd0aClcbiAgICAubWFwKGVudHJ5ID0+IFtlbnRyeVswXSwgbWVkaWFuKGVudHJ5WzFdKV0pXG4gICAgLnNvcnQoKGEsIGIpID0+IGFbMV0gLSBiWzFdKVxuICAgIC5tYXAoZW50cnkgPT4gbW9zdEZyZXF1ZW50KHdvcmRWZXJzaW9ucy5nZXQoZW50cnlbMF0pKSk7XG5cbiAgcmV0dXJuIHdvcmRzLmpvaW4oJyAnKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=