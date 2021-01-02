webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_image_viewer_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_image_viewer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_image_viewer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_images_big_jpg__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_images_100_jpg__ = __webpack_require__(4);
// import '../styles/image-viewer.css';
// import big from '../assets/images/big.jpg';
// import small from '../assets/images/100.jpg';
// let img = document.createElement('img');
// img.src="http://lorempixel.com/400/400";
// document.body.appendChild(img);



var img = document.createElement('img');
img.src = __WEBPACK_IMPORTED_MODULE_1__assets_images_big_jpg__["a" /* default */];
var img2 = document.createElement('img');
img2.src = __WEBPACK_IMPORTED_MODULE_2__assets_images_100_jpg__["a" /* default */];
var div = document.createElement('div');
div.appendChild(img);
div.appendChild(img2);
document.body.appendChild(div);

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, "div img{\r\n    width:10%;\r\n    border:10px solid black;\r\n}", ""]);



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("data:image/jpeg;base64,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");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "76d4007c43c44185199e22611f3aacb5.jpg");

/***/ })
]);