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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return suggestedName; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  excludedCharacters.forEach(function (_char) {
    names = names.map(function (name) {
      return name.replace(_char, '');
    });
  });
  names.map(function (name) {
    return name.replace(/ {2,}/g, ' ');
  }).forEach(function (name) {
    _toConsumableArray(new Set(name.split(' '))).forEach(function (word, index) {
      var lowerCaseValue = word.toLowerCase();
      group(wordPositions, lowerCaseValue, index + 1);
      group(wordVersions, lowerCaseValue, word);
    });
  });

  var words = _toConsumableArray(wordPositions.entries()).filter(function (entry) {
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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdWdnZXN0ZWQtbmFtZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3VnZ2VzdGVkLW5hbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3VnZ2VzdGVkLW5hbWUvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsibWVkaWFuIiwidmFsdWVzIiwiaGFsZiIsIk1hdGgiLCJmbG9vciIsImxlbmd0aCIsInNvcnQiLCJhIiwiYiIsIm1vc3RGcmVxdWVudCIsImFycmF5IiwiZmlsdGVyIiwidiIsInBvcCIsImdyb3VwIiwibWFwIiwia2V5IiwidmFsdWUiLCJoYXMiLCJnZXQiLCJjb25jYXQiLCJzZXQiLCJzdWdnZXN0ZWROYW1lIiwibmFtZXMiLCJleGNsdWRlZENoYXJhY3RlcnMiLCJ3b3JkUG9zaXRpb25zIiwiTWFwIiwid29yZFZlcnNpb25zIiwiZm9yRWFjaCIsImNoYXIiLCJuYW1lIiwicmVwbGFjZSIsIlNldCIsInNwbGl0Iiwid29yZCIsImluZGV4IiwibG93ZXJDYXNlVmFsdWUiLCJ0b0xvd2VyQ2FzZSIsIndvcmRzIiwiZW50cmllcyIsImVudHJ5Iiwiam9pbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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LGNBQWhCLEVBQWdDRCxLQUFLLEdBQUcsQ0FBeEMsQ0FBTDtBQUNBckIsV0FBSyxDQUFDYSxZQUFELEVBQWVTLGNBQWYsRUFBK0JGLElBQS9CLENBQUw7QUFDRCxLQU5IO0FBT0QsR0FUSDs7QUFVQSxNQUFNSSxLQUFLLEdBQUcsbUJBQUliLGFBQWEsQ0FBQ2MsT0FBZCxFQUFKLEVBQ1g1QixNQURXLENBQ0osVUFBQTZCLEtBQUs7QUFBQSxXQUFJYixZQUFZLENBQUNSLEdBQWIsQ0FBaUJxQixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNILFdBQVQsRUFBakIsRUFBeUNoQyxNQUF6QyxLQUFvRGtCLEtBQUssQ0FBQ2xCLE1BQTlEO0FBQUEsR0FERCxFQUVYVSxHQUZXLENBRVAsVUFBQXlCLEtBQUs7QUFBQSxXQUFJLENBQUNBLEtBQUssQ0FBQyxDQUFELENBQU4sRUFBV3hDLE1BQU0sQ0FBQ3dDLEtBQUssQ0FBQyxDQUFELENBQU4sQ0FBakIsQ0FBSjtBQUFBLEdBRkUsRUFHWGxDLElBSFcsQ0FHTixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFVRCxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU9DLENBQUMsQ0FBQyxDQUFELENBQWxCO0FBQUEsR0FITSxFQUlYTyxHQUpXLENBSVAsVUFBQXlCLEtBQUs7QUFBQSxXQUFJL0IsWUFBWSxDQUFDa0IsWUFBWSxDQUFDUixHQUFiLENBQWlCcUIsS0FBSyxDQUFDLENBQUQsQ0FBdEIsQ0FBRCxDQUFoQjtBQUFBLEdBSkUsQ0FBZDs7QUFNQSxTQUFPRixLQUFLLENBQUNHLElBQU4sQ0FBVyxHQUFYLENBQVA7QUFDRCxDIiwiZmlsZSI6InN1Z2dlc3RlZC1uYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJzdWdnZXN0ZWQtbmFtZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzdWdnZXN0ZWQtbmFtZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzdWdnZXN0ZWQtbmFtZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIG1lZGlhbih2YWx1ZXMpIHtcbiAgdmFyIGhhbGYgPSBNYXRoLmZsb29yKHZhbHVlcy5sZW5ndGggLyAyKTtcblxuICB2YWx1ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICBpZiAodmFsdWVzLmxlbmd0aCAlIDIpIHtcbiAgICByZXR1cm4gdmFsdWVzW2hhbGZdO1xuICB9XG4gIHJldHVybiAodmFsdWVzW2hhbGYgLSAxXSArIHZhbHVlc1toYWxmXSkgLyAyLjA7XG5cbn1cblxuZnVuY3Rpb24gbW9zdEZyZXF1ZW50KGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5zb3J0KChhLCBiKSA9PlxuICAgIGFycmF5LmZpbHRlcih2ID0+IHYgPT09IGEpLmxlbmd0aCAtIGFycmF5LmZpbHRlcih2ID0+IHYgPT09IGIpLmxlbmd0aFxuICApLnBvcCgpO1xufVxuXG5mdW5jdGlvbiBncm91cChtYXAsIGtleSwgdmFsdWUpIHtcbiAgbGV0IHZhbHVlcyA9IG1hcC5oYXMoa2V5KSA/IG1hcC5nZXQoa2V5KS5jb25jYXQodmFsdWUpIDogW3ZhbHVlXTtcblxuICBtYXAuc2V0KGtleSwgdmFsdWVzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Z2dlc3RlZE5hbWUobmFtZXMsIGV4Y2x1ZGVkQ2hhcmFjdGVycyA9IFtdKSB7XG4gIGNvbnN0IHdvcmRQb3NpdGlvbnMgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IHdvcmRWZXJzaW9ucyA9IG5ldyBNYXAoKTtcblxuICBleGNsdWRlZENoYXJhY3RlcnMuZm9yRWFjaCgoY2hhcikgPT4ge1xuICAgIG5hbWVzID0gbmFtZXMubWFwKG5hbWUgPT4gbmFtZS5yZXBsYWNlKGNoYXIsICcnKSk7XG4gIH0pO1xuICBuYW1lcy5tYXAobmFtZSA9PiBuYW1lLnJlcGxhY2UoLyB7Mix9L2csICcgJykpXG4gICAgLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBbLi4ubmV3IFNldChuYW1lLnNwbGl0KCcgJykpXVxuICAgICAgICAuZm9yRWFjaCgod29yZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBsb3dlckNhc2VWYWx1ZSA9IHdvcmQudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgIGdyb3VwKHdvcmRQb3NpdGlvbnMsIGxvd2VyQ2FzZVZhbHVlLCBpbmRleCArIDEpO1xuICAgICAgICAgIGdyb3VwKHdvcmRWZXJzaW9ucywgbG93ZXJDYXNlVmFsdWUsIHdvcmQpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgY29uc3Qgd29yZHMgPSBbLi4ud29yZFBvc2l0aW9ucy5lbnRyaWVzKCldXG4gICAgLmZpbHRlcihlbnRyeSA9PiB3b3JkVmVyc2lvbnMuZ2V0KGVudHJ5WzBdLnRvTG93ZXJDYXNlKCkpLmxlbmd0aCA9PT0gbmFtZXMubGVuZ3RoKVxuICAgIC5tYXAoZW50cnkgPT4gW2VudHJ5WzBdLCBtZWRpYW4oZW50cnlbMV0pXSlcbiAgICAuc29ydCgoYSwgYikgPT4gYVsxXSAtIGJbMV0pXG4gICAgLm1hcChlbnRyeSA9PiBtb3N0RnJlcXVlbnQod29yZFZlcnNpb25zLmdldChlbnRyeVswXSkpKTtcblxuICByZXR1cm4gd29yZHMuam9pbignICcpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==