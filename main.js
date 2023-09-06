/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,*::before,*::after{
    box-sizing:  border-box;
}

:root{
    --header-color:#49111C;
    --main-color:#A9927D;
    --sub-color:#5e503f;
    --text-color: #f2f4f3;
}


body{
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--main-color);
}

ul{
    text-decoration: none;
    list-style: none;
}

#header{
    color: white;
    background-color: var(--header-color);
    display:flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
}

.logo{
    margin-left: 50px;
}

#navbar{
    margin-right: 50px;
}

#navbar ul{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
}

#navbar ul li{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 40px;
    text-align: center;
    
}
#navbar ul li:hover{
  cursor: pointer;
    
}


li[data-selected="true"] {
    background-color: var(--sub-color);
}

/*home styles*/
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 50%;
    background-color: var(--sub-color);
    color:var(--text-color) ;
    border-radius: 25px;
}

.container h1{
    font-size: 2.5rem;
    font-weight: 900;
}
.container .description{
    margin-top: 10px;
    padding:50px;
    font-size: 2rem;
}

/*menu styles*/

.menu{
    margin-top: 15%;
   display: grid;
   place-content: center;
   width: 50%;
   background-color: var(--sub-color);
   border-radius: 25px;
   color: var(--text-color);
}

.item-1 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 5px;
    
}

.item-2{
   
    display: flex;
    flex-direction: row-reverse;
    align-items: center
}
.img2{
    /* grid-column: 1/ 2;  */
    width: 50%;
}
.text2{
    grid-column: 2/ 3;
    width: 50%;
}
.item-3 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 5px;
    
}

.menu h2{
    text-align: center;
}
.menu-descript{
    font-size: 1.2rem;}


.menu img{
    max-width: 100%;
    
}

/*contact styles */

.contact{
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: var(--sub-color);
    border-radius: 25px;
    color:var(--text-color)
}

.contact h2{
    text-align: center;
}

.contact ul{
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 1.2rem;
}

.contact .final{
    padding:25px;
    display: grid;
    align-items: center;
}

.ending{
    width: 100%;
    font-size: 1.5rem;
}`, "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;IACtB,oBAAoB;IACpB,mBAAmB;IACnB,qBAAqB;AACzB;;;AAGA;IACI,SAAS;IACT,UAAU;IACV,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mCAAmC;AACvC;;AAEA;IACI,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,qCAAqC;IACrC,YAAY;IACZ,8BAA8B;IAC9B,eAAe;IACf,MAAM;IACN,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,kBAAkB;;AAEtB;AACA;EACE,eAAe;;AAEjB;;;AAGA;IACI,kCAAkC;AACtC;;AAEA,cAAc;AACd;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,UAAU;IACV,WAAW;IACX,kCAAkC;IAClC,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,eAAe;AACnB;;AAEA,cAAc;;AAEd;IACI,eAAe;GAChB,aAAa;GACb,qBAAqB;GACrB,UAAU;GACV,kCAAkC;GAClC,mBAAmB;GACnB,wBAAwB;AAC3B;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,YAAY;;AAEhB;;AAEA;;IAEI,aAAa;IACb,2BAA2B;IAC3B;AACJ;AACA;IACI,wBAAwB;IACxB,UAAU;AACd;AACA;IACI,iBAAiB;IACjB,UAAU;AACd;AACA;IACI,aAAa;IACb,qCAAqC;IACrC,YAAY;;AAEhB;;AAEA;IACI,kBAAkB;AACtB;AACA;IACI,iBAAiB,CAAC;;;AAGtB;IACI,eAAe;;AAEnB;;AAEA,kBAAkB;;AAElB;IACI,UAAU;IACV,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,kCAAkC;IAClC,mBAAmB;IACnB;AACJ;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB","sourcesContent":["*,*::before,*::after{\n    box-sizing:  border-box;\n}\n\n:root{\n    --header-color:#49111C;\n    --main-color:#A9927D;\n    --sub-color:#5e503f;\n    --text-color: #f2f4f3;\n}\n\n\nbody{\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--main-color);\n}\n\nul{\n    text-decoration: none;\n    list-style: none;\n}\n\n#header{\n    color: white;\n    background-color: var(--header-color);\n    display:flex;\n    justify-content: space-between;\n    position: fixed;\n    top: 0;\n    width: 100%;\n}\n\n.logo{\n    margin-left: 50px;\n}\n\n#navbar{\n    margin-right: 50px;\n}\n\n#navbar ul{\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n}\n\n#navbar ul li{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 80px;\n    height: 40px;\n    text-align: center;\n    \n}\n#navbar ul li:hover{\n  cursor: pointer;\n    \n}\n\n\nli[data-selected=\"true\"] {\n    background-color: var(--sub-color);\n}\n\n/*home styles*/\n.container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 50%;\n    height: 50%;\n    background-color: var(--sub-color);\n    color:var(--text-color) ;\n    border-radius: 25px;\n}\n\n.container h1{\n    font-size: 2.5rem;\n    font-weight: 900;\n}\n.container .description{\n    margin-top: 10px;\n    padding:50px;\n    font-size: 2rem;\n}\n\n/*menu styles*/\n\n.menu{\n    margin-top: 15%;\n   display: grid;\n   place-content: center;\n   width: 50%;\n   background-color: var(--sub-color);\n   border-radius: 25px;\n   color: var(--text-color);\n}\n\n.item-1 {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    padding: 5px;\n    \n}\n\n.item-2{\n   \n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center\n}\n.img2{\n    /* grid-column: 1/ 2;  */\n    width: 50%;\n}\n.text2{\n    grid-column: 2/ 3;\n    width: 50%;\n}\n.item-3 {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    padding: 5px;\n    \n}\n\n.menu h2{\n    text-align: center;\n}\n.menu-descript{\n    font-size: 1.2rem;}\n\n\n.menu img{\n    max-width: 100%;\n    \n}\n\n/*contact styles */\n\n.contact{\n    width: 50%;\n    height: 50%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    background-color: var(--sub-color);\n    border-radius: 25px;\n    color:var(--text-color)\n}\n\n.contact h2{\n    text-align: center;\n}\n\n.contact ul{\n    display: grid;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    font-size: 1.2rem;\n}\n\n.contact .final{\n    padding:25px;\n    display: grid;\n    align-items: center;\n}\n\n.ending{\n    width: 100%;\n    font-size: 1.5rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homePageComponent)
/* harmony export */ });
function homePageComponent() {
    const description = " where we invite you on a culinary journey to discover the vibrant and exotic flavors of Sri Lanka. Nestled in the heart of the city, our restaurant is a haven for those seeking an authentic Sri Lankan dining experience. At Spice Isle Delights, we believe in celebrating the rich tapestry of Sri Lankan cuisine, renowned for its aromatic spices, diverse ingredients, and mouthwatering dishes that reflect the island's multicultural heritage.";

const container = document.createElement('div');
container.classList.add('container');

//h1
const h1= document.createElement('h1');
h1.textContent="Welcome to Spice Isle Delights!!";
container.appendChild(h1);

//p

const p = document.createElement('p');
p.classList.add('description');
p.textContent= description;
container.appendChild(p);

return container;

}

/***/ }),

/***/ "./src/modules/buttonEventListerners.js":
/*!**********************************************!*\
  !*** ./src/modules/buttonEventListerners.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toggleBtn)
/* harmony export */ });


function toggleBtn(e,home,menu,contact){ 
    const btnList =[home,menu,contact];
    const clicked= e.target.closest('li');
    if (clicked.dataset.selected === "false"){
        btnList.forEach((x)=>{
            if(x.dataset.selected === "true"){
                x.dataset.selected = "false"
            }
        })
        clicked.dataset.selected = "true";

    }
}



/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactPageComponent)
/* harmony export */ });
/* harmony import */ var _textObjexts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textObjexts */ "./src/modules/textObjexts.js");



function createinfoComponent(){
    const div = document.createElement('div');
    div.classList.add('info')
    const h2 = document.createElement('h2');
    h2.textContent = "Contact Us:";
    const ul = document.createElement('ul');
   
    for(let i = 0;i < 4; i++){
        const li = document.createElement('li');
        li.textContent=_textObjexts__WEBPACK_IMPORTED_MODULE_0__.contactItems[i];
        ul.appendChild(li);
    }

    div.appendChild(h2);
    div.appendChild(ul);
    return div;
}
function createFinalComponent(){
    const div = document.createElement('div');
    div.classList.add('final');

    const p = document.createElement('p');
    p.classList.add('ending');
    p.textContent = _textObjexts__WEBPACK_IMPORTED_MODULE_0__.contactItems[4];

    div.appendChild(p);
    return div;
}

function contactPageComponent(){
    const contact = document.createElement('div');
    contact.classList.add('contact');


    contact.appendChild(createinfoComponent());
    contact.appendChild(createFinalComponent());
    return contact;
}

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderComponent)
/* harmony export */ });
function HeaderComponent(){
    //header
    const header = document.createElement('header');
    header.setAttribute('id','header');

    // logo
    const logo = document.createElement('div');
    logo.classList.add('logo');
    const logoH2= document.createElement('h2');
    logoH2.textContent = "Ayubowan!";
    logo.appendChild(logoH2);
    header.appendChild(logo);

    //navbar
    const navbar = document.createElement('nav');
    navbar.setAttribute('id', 'navbar');
    const ul = document.createElement('ul');

    //  btns
    const home = document.createElement('li');
    home.setAttribute('data-selected', 'true')
    home.textContent="HOME";
    ul.appendChild(home);
    const menu = document.createElement('li');
    menu.setAttribute('data-selected', 'false');
    menu.textContent="MENU";
    ul.appendChild(menu);
    const contact = document.createElement('li');
    contact.setAttribute('data-selected', 'false');
    contact.textContent="CONTACT";
    ul.appendChild(contact);

    navbar.appendChild(ul);
    header.appendChild(navbar);

    return header;
}

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuPageComponent)
/* harmony export */ });
/* harmony import */ var _curryPlatter_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curryPlatter.webp */ "./src/modules/curryPlatter.webp");
/* harmony import */ var _jaffnaSeafood_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jaffnaSeafood.webp */ "./src/modules/jaffnaSeafood.webp");
/* harmony import */ var _kottu_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kottu.jpg */ "./src/modules/kottu.jpg");
/* harmony import */ var _textObjexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textObjexts */ "./src/modules/textObjexts.js");






function createItem(n,food){
    const itemName = `item${n}`;

    const item = document.createElement('div');
    item.classList.add(`item-${n}`);

    const text = document.createElement('div');
    text.classList.add('text');
    item.appendChild(text);

    const h2 = document.createElement('h2');
    h2.textContent = _textObjexts__WEBPACK_IMPORTED_MODULE_3__.menuItems[itemName].name;
    text.appendChild(h2);

    const para = document.createElement('p');
    para.classList.add('menu-descript');
    para.textContent=_textObjexts__WEBPACK_IMPORTED_MODULE_3__.menuItems[itemName].description;
    text.appendChild(para);

    const img = document.createElement('div');
    img.classList.add('img');
    const imgTag = new Image();
    imgTag.src = food;
    img.appendChild(imgTag);
    item.appendChild(img);

    return item;

}

function createItem2(){
    const item = document.createElement('div');
    item.classList.add('item-2');

    const text = document.createElement('div');
    text.classList.add('text2');
    item.appendChild(text);

    const h2 = document.createElement('h2');
    h2.textContent = _textObjexts__WEBPACK_IMPORTED_MODULE_3__.menuItems.item2.name;
    text.appendChild(h2);

    const para = document.createElement('p');
    para.classList.add('menu-descript');
    para.textContent=_textObjexts__WEBPACK_IMPORTED_MODULE_3__.menuItems.item2.description;
    text.appendChild(para);

    const img = document.createElement('div');
    img.classList.add('img2');
    const imgTag = new Image();
    imgTag.src = _jaffnaSeafood_webp__WEBPACK_IMPORTED_MODULE_1__;
    img.appendChild(imgTag);
    item.appendChild(img);

    return item;

}





function menuPageComponent(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

   menu.appendChild(createItem(1,_curryPlatter_webp__WEBPACK_IMPORTED_MODULE_0__));
   menu.appendChild(createItem2());
   menu.appendChild(createItem(3,_kottu_jpg__WEBPACK_IMPORTED_MODULE_2__));
  
    return menu;

};

/***/ }),

/***/ "./src/modules/textObjexts.js":
/*!************************************!*\
  !*** ./src/modules/textObjexts.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactItems: () => (/* binding */ contactItems),
/* harmony export */   menuItems: () => (/* binding */ menuItems)
/* harmony export */ });
const menuItems = {
    item1:{
        name:"Sri Lankan Curry Platter",
        description:"Indulge in a symphony of flavors with our signature Sri Lankan Curry Platter. This generous platter includes your choice of protein (chicken, beef, or tofu), gently simmered in a fragrant blend of coconut milk, curry leaves, and an array of traditional spices. Served with steamed rice, coconut sambol, and papadum, this dish offers a harmonious balance of sweet, savory, and spicy notes that will transport your taste buds straight to the beaches of Sri Lanka."
    },
    item2:{
        name:"Jaffna Seafood Feast",
        description:"Dive into the ocean of flavors with our Jaffna Seafood Feast. This culinary masterpiece features a medley of fresh seafood, including succulent prawns, tender squid, and flaky fish, marinated in a fiery Jaffna-style curry sauce. Served with aromatic basmati rice and a side of tangy mango chutney, this dish captures the essence of Sri Lanka's coastal cuisine, known for its bold spices and irresistible seafood."
    },
    item3:{
        name:"Kottu Roti Fusion",
        description:"Experience the rhythmic clatter of the griddle as our chefs prepare the beloved Kottu Roti Fusion. This street food sensation combines shredded roti bread, your choice of chicken or vegetables, and an assortment of spices, all stir-fried to perfection. Topped with a fried egg and served with a side of spicy onion gravy, this dish offers a delightful fusion of textures and flavors that will leave you craving for more."
    }

}

const contactItems = [
    "Address: 123 Spice Lane, Colombo, Sri Lanka",
    "Phone: +94 11 1234 5678",
    "Email: info@spiceisledelights.lk",
    "Website: www.spiceisledelights.lk",
    "At Spice Isle Delights, we take pride in offering a warm and welcoming atmosphere where you can savor the tastes of Sri Lanka in every bite. Whether you're a seasoned spice enthusiast or new to Sri Lankan cuisine, our dedicated chefs are here to provide you with a memorable dining experience. Come join us and embark on a gastronomic adventure like no other, as we bring the flavors of the Spice Isle to your table."
]

/***/ }),

/***/ "./src/modules/curryPlatter.webp":
/*!***************************************!*\
  !*** ./src/modules/curryPlatter.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f73b8ba82a11344b8b00.webp";

/***/ }),

/***/ "./src/modules/jaffnaSeafood.webp":
/*!****************************************!*\
  !*** ./src/modules/jaffnaSeafood.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1fa02d58bbfe8bdbdc9e.webp";

/***/ }),

/***/ "./src/modules/kottu.jpg":
/*!*******************************!*\
  !*** ./src/modules/kottu.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f7308fe1d7bbc3cafd8.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/assets/style.css */ "./src/assets/style.css");
/* harmony import */ var _src_modules_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/modules/header.js */ "./src/modules/header.js");
/* harmony import */ var _src_modules_about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/modules/about.js */ "./src/modules/about.js");
/* harmony import */ var _src_modules_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/modules/menu.js */ "./src/modules/menu.js");
/* harmony import */ var _src_modules_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/modules/contact.js */ "./src/modules/contact.js");
/* harmony import */ var _src_modules_buttonEventListerners_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/modules/buttonEventListerners.js */ "./src/modules/buttonEventListerners.js");









  
  document.body.appendChild((0,_src_modules_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
  document.body.appendChild((0,_src_modules_about_js__WEBPACK_IMPORTED_MODULE_2__["default"])());


  const navEventListners = function(){
      const navbtns = document.querySelector('#navbar ul');
      const homeLi = document.querySelector('#navbar li:first-child');
      const menuLi = document.querySelector('#navbar li:nth-child(2)');
      const contactLi = document.querySelector('#navbar li:nth-child(3)');
      const btns = [homeLi,menuLi,contactLi];

    function hasChild(){
      const doesntHavePageOne = !document.body.querySelector('.container');
      const doesntHavePageTwo = !document.body.querySelector('.menu');
      const doesntHavePageThree = !document.body.querySelector('.contact');

      return{
        doesntHavePageOne,
        doesntHavePageTwo,
        doesntHavePageThree
      }
    }
    function togglePage(){
      const check = hasChild();
      if(homeLi.dataset.selected === "true"){
        if(check.doesntHavePageOne){
          document.body.appendChild((0,_src_modules_about_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
        }
      }else if(menuLi.dataset.selected === "true"){
        if(check.doesntHavePageTwo){
          document.body.appendChild((0,_src_modules_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
        }
      }else if(contactLi.dataset.selected === "true"){
        if(check.doesntHavePageThree){
          document.body.appendChild((0,_src_modules_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
        }
      }
    };

    function removePage(){
      const check = hasChild();
      if(check.doesntHavePageOne === false){
        const pg1 = document.querySelector('.container');
        document.body.removeChild(pg1);
      }else if(check.doesntHavePageTwo === false){
        const pg2 = document.body.querySelector('.menu');
        document.body.removeChild(pg2);
      }else if(check.doesntHavePageThree === false){
        const pg3 = document.body.querySelector('.contact');
        document.body.removeChild(pg3);
       } }

      btns.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
          (0,_src_modules_buttonEventListerners_js__WEBPACK_IMPORTED_MODULE_5__["default"])(e,homeLi,menuLi,contactLi,navbtns);
          removePage();
          togglePage();
        })

      })


    }();
      
  
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ErQjtBQUNzQjtBQUNDO0FBQ0Q7QUFDTTtBQUNHOzs7O0FBSTlEO0FBQ0EsNEJBQTRCLGtFQUFlO0FBQzNDLDRCQUE0QixpRUFBaUI7OztBQUc3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUVBQWlCO0FBQ3JEO0FBQ0EsT0FBTztBQUNQO0FBQ0Esb0NBQW9DLGdFQUFpQjtBQUNyRDtBQUNBLE9BQU87QUFDUDtBQUNBLG9DQUFvQyxtRUFBb0I7QUFDeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsaUZBQVM7QUFDbkI7QUFDQTtBQUNBLFNBQVM7O0FBRVQsT0FBTzs7O0FBR1AsS0FBSztBQUNMO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3M/NjAxZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2J1dHRvbkV2ZW50TGlzdGVybmVycy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3RleHRPYmpleHRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosKjo6YmVmb3JlLCo6OmFmdGVye1xuICAgIGJveC1zaXppbmc6ICBib3JkZXItYm94O1xufVxuXG46cm9vdHtcbiAgICAtLWhlYWRlci1jb2xvcjojNDkxMTFDO1xuICAgIC0tbWFpbi1jb2xvcjojQTk5MjdEO1xuICAgIC0tc3ViLWNvbG9yOiM1ZTUwM2Y7XG4gICAgLS10ZXh0LWNvbG9yOiAjZjJmNGYzO1xufVxuXG5cbmJvZHl7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG59XG5cbnVse1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4jaGVhZGVye1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ297XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbiNuYXZiYXJ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuXG4jbmF2YmFyIHVse1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAzMHB4O1xufVxuXG4jbmF2YmFyIHVsIGxpe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxufVxuI25hdmJhciB1bCBsaTpob3ZlcntcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAgIFxufVxuXG5cbmxpW2RhdGEtc2VsZWN0ZWQ9XCJ0cnVlXCJdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWItY29sb3IpO1xufVxuXG4vKmhvbWUgc3R5bGVzKi9cbi5jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWItY29sb3IpO1xuICAgIGNvbG9yOnZhcigtLXRleHQtY29sb3IpIDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4uY29udGFpbmVyIGgxe1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG4uY29udGFpbmVyIC5kZXNjcmlwdGlvbntcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6NTBweDtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi8qbWVudSBzdHlsZXMqL1xuXG4ubWVudXtcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICBkaXNwbGF5OiBncmlkO1xuICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgd2lkdGg6IDUwJTtcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XG4gICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuXG4uaXRlbS0xIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIFxufVxuXG4uaXRlbS0ye1xuICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxufVxuLmltZzJ7XG4gICAgLyogZ3JpZC1jb2x1bW46IDEvIDI7ICAqL1xuICAgIHdpZHRoOiA1MCU7XG59XG4udGV4dDJ7XG4gICAgZ3JpZC1jb2x1bW46IDIvIDM7XG4gICAgd2lkdGg6IDUwJTtcbn1cbi5pdGVtLTMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgXG59XG5cbi5tZW51IGgye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tZW51LWRlc2NyaXB0e1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO31cblxuXG4ubWVudSBpbWd7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIFxufVxuXG4vKmNvbnRhY3Qgc3R5bGVzICovXG5cbi5jb250YWN0e1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBjb2xvcjp2YXIoLS10ZXh0LWNvbG9yKVxufVxuXG4uY29udGFjdCBoMntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWN0IHVse1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5jb250YWN0IC5maW5hbHtcbiAgICBwYWRkaW5nOjI1cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZW5kaW5ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7OztBQUdBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsTUFBTTtJQUNOLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjs7QUFFdEI7QUFDQTtFQUNFLGVBQWU7O0FBRWpCOzs7QUFHQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQSxjQUFjO0FBQ2Q7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLGtDQUFrQztJQUNsQyx3QkFBd0I7SUFDeEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBLGNBQWM7O0FBRWQ7SUFDSSxlQUFlO0dBQ2hCLGFBQWE7R0FDYixxQkFBcUI7R0FDckIsVUFBVTtHQUNWLGtDQUFrQztHQUNsQyxtQkFBbUI7R0FDbkIsd0JBQXdCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxZQUFZOztBQUVoQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCO0FBQ0o7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQixDQUFDOzs7QUFHdEI7SUFDSSxlQUFlOztBQUVuQjs7QUFFQSxrQkFBa0I7O0FBRWxCO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosKjo6YmVmb3JlLCo6OmFmdGVye1xcbiAgICBib3gtc2l6aW5nOiAgYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3R7XFxuICAgIC0taGVhZGVyLWNvbG9yOiM0OTExMUM7XFxuICAgIC0tbWFpbi1jb2xvcjojQTk5MjdEO1xcbiAgICAtLXN1Yi1jb2xvcjojNWU1MDNmO1xcbiAgICAtLXRleHQtY29sb3I6ICNmMmY0ZjM7XFxufVxcblxcblxcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG51bHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4jaGVhZGVye1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5sb2dve1xcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXG59XFxuXFxuI25hdmJhcntcXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcbn1cXG5cXG4jbmF2YmFyIHVse1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbiNuYXZiYXIgdWwgbGl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIFxcbn1cXG4jbmF2YmFyIHVsIGxpOmhvdmVye1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBcXG59XFxuXFxuXFxubGlbZGF0YS1zZWxlY3RlZD1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcXG59XFxuXFxuLypob21lIHN0eWxlcyovXFxuLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XFxuICAgIGNvbG9yOnZhcigtLXRleHQtY29sb3IpIDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuLmNvbnRhaW5lciBoMXtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcbi5jb250YWluZXIgLmRlc2NyaXB0aW9ue1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nOjUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLyptZW51IHN0eWxlcyovXFxuXFxuLm1lbnV7XFxuICAgIG1hcmdpbi10b3A6IDE1JTtcXG4gICBkaXNwbGF5OiBncmlkO1xcbiAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICB3aWR0aDogNTAlO1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XFxuICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi5pdGVtLTEge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIFxcbn1cXG5cXG4uaXRlbS0ye1xcbiAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXG59XFxuLmltZzJ7XFxuICAgIC8qIGdyaWQtY29sdW1uOiAxLyAyOyAgKi9cXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuLnRleHQye1xcbiAgICBncmlkLWNvbHVtbjogMi8gMztcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuLml0ZW0tMyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgXFxufVxcblxcbi5tZW51IGgye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tZW51LWRlc2NyaXB0e1xcbiAgICBmb250LXNpemU6IDEuMnJlbTt9XFxuXFxuXFxuLm1lbnUgaW1ne1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIFxcbn1cXG5cXG4vKmNvbnRhY3Qgc3R5bGVzICovXFxuXFxuLmNvbnRhY3R7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgY29sb3I6dmFyKC0tdGV4dC1jb2xvcilcXG59XFxuXFxuLmNvbnRhY3QgaDJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QgdWx7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uY29udGFjdCAuZmluYWx7XFxuICAgIHBhZGRpbmc6MjVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmVuZGluZ3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZVBhZ2VDb21wb25lbnQoKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBcIiB3aGVyZSB3ZSBpbnZpdGUgeW91IG9uIGEgY3VsaW5hcnkgam91cm5leSB0byBkaXNjb3ZlciB0aGUgdmlicmFudCBhbmQgZXhvdGljIGZsYXZvcnMgb2YgU3JpIExhbmthLiBOZXN0bGVkIGluIHRoZSBoZWFydCBvZiB0aGUgY2l0eSwgb3VyIHJlc3RhdXJhbnQgaXMgYSBoYXZlbiBmb3IgdGhvc2Ugc2Vla2luZyBhbiBhdXRoZW50aWMgU3JpIExhbmthbiBkaW5pbmcgZXhwZXJpZW5jZS4gQXQgU3BpY2UgSXNsZSBEZWxpZ2h0cywgd2UgYmVsaWV2ZSBpbiBjZWxlYnJhdGluZyB0aGUgcmljaCB0YXBlc3RyeSBvZiBTcmkgTGFua2FuIGN1aXNpbmUsIHJlbm93bmVkIGZvciBpdHMgYXJvbWF0aWMgc3BpY2VzLCBkaXZlcnNlIGluZ3JlZGllbnRzLCBhbmQgbW91dGh3YXRlcmluZyBkaXNoZXMgdGhhdCByZWZsZWN0IHRoZSBpc2xhbmQncyBtdWx0aWN1bHR1cmFsIGhlcml0YWdlLlwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuLy9oMVxuY29uc3QgaDE9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5oMS50ZXh0Q29udGVudD1cIldlbGNvbWUgdG8gU3BpY2UgSXNsZSBEZWxpZ2h0cyEhXCI7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoaDEpO1xuXG4vL3BcblxuY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbnAuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbnAudGV4dENvbnRlbnQ9IGRlc2NyaXB0aW9uO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKHApO1xuXG5yZXR1cm4gY29udGFpbmVyO1xuXG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZ2dsZUJ0bihlLGhvbWUsbWVudSxjb250YWN0KXsgXG4gICAgY29uc3QgYnRuTGlzdCA9W2hvbWUsbWVudSxjb250YWN0XTtcbiAgICBjb25zdCBjbGlja2VkPSBlLnRhcmdldC5jbG9zZXN0KCdsaScpO1xuICAgIGlmIChjbGlja2VkLmRhdGFzZXQuc2VsZWN0ZWQgPT09IFwiZmFsc2VcIil7XG4gICAgICAgIGJ0bkxpc3QuZm9yRWFjaCgoeCk9PntcbiAgICAgICAgICAgIGlmKHguZGF0YXNldC5zZWxlY3RlZCA9PT0gXCJ0cnVlXCIpe1xuICAgICAgICAgICAgICAgIHguZGF0YXNldC5zZWxlY3RlZCA9IFwiZmFsc2VcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBjbGlja2VkLmRhdGFzZXQuc2VsZWN0ZWQgPSBcInRydWVcIjtcblxuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgY29udGFjdEl0ZW1zIH0gZnJvbSAnLi90ZXh0T2JqZXh0cyc7XG5cblxuZnVuY3Rpb24gY3JlYXRlaW5mb0NvbXBvbmVudCgpe1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdpbmZvJylcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaDIudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXM6XCI7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgXG4gICAgZm9yKGxldCBpID0gMDtpIDwgNDsgaSsrKXtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaS50ZXh0Q29udGVudD1jb250YWN0SXRlbXNbaV07XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaDIpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh1bCk7XG4gICAgcmV0dXJuIGRpdjtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUZpbmFsQ29tcG9uZW50KCl7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2ZpbmFsJyk7XG5cbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuY2xhc3NMaXN0LmFkZCgnZW5kaW5nJyk7XG4gICAgcC50ZXh0Q29udGVudCA9IGNvbnRhY3RJdGVtc1s0XTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcbiAgICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0UGFnZUNvbXBvbmVudCgpe1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcblxuXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjcmVhdGVpbmZvQ29tcG9uZW50KCkpO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY3JlYXRlRmluYWxDb21wb25lbnQoKSk7XG4gICAgcmV0dXJuIGNvbnRhY3Q7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyQ29tcG9uZW50KCl7XG4gICAgLy9oZWFkZXJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsJ2hlYWRlcicpO1xuXG4gICAgLy8gbG9nb1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgICBjb25zdCBsb2dvSDI9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbG9nb0gyLnRleHRDb250ZW50ID0gXCJBeXVib3dhbiFcIjtcbiAgICBsb2dvLmFwcGVuZENoaWxkKGxvZ29IMik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuXG4gICAgLy9uYXZiYXJcbiAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBuYXZiYXIuc2V0QXR0cmlidXRlKCdpZCcsICduYXZiYXInKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICAvLyAgYnRuc1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGhvbWUuc2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdGVkJywgJ3RydWUnKVxuICAgIGhvbWUudGV4dENvbnRlbnQ9XCJIT01FXCI7XG4gICAgdWwuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcbiAgICBtZW51LnRleHRDb250ZW50PVwiTUVOVVwiO1xuICAgIHVsLmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnRhY3Quc2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICAgY29udGFjdC50ZXh0Q29udGVudD1cIkNPTlRBQ1RcIjtcbiAgICB1bC5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICAgIG5hdmJhci5hcHBlbmRDaGlsZCh1bCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdmJhcik7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufSIsImltcG9ydCBjdXJyeSBmcm9tICcuL2N1cnJ5UGxhdHRlci53ZWJwJztcbmltcG9ydCBKYWZmbmEgZnJvbSAnLi9qYWZmbmFTZWFmb29kLndlYnAnO1xuaW1wb3J0IGtvdHR1IGZyb20gJy4va290dHUuanBnJztcbmltcG9ydCB7IG1lbnVJdGVtcyB9IGZyb20gJy4vdGV4dE9iamV4dHMnO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW0obixmb29kKXtcbiAgICBjb25zdCBpdGVtTmFtZSA9IGBpdGVtJHtufWA7XG5cbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKGBpdGVtLSR7bn1gKTtcblxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ3RleHQnKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyLnRleHRDb250ZW50ID0gbWVudUl0ZW1zW2l0ZW1OYW1lXS5uYW1lO1xuICAgIHRleHQuYXBwZW5kQ2hpbGQoaDIpO1xuXG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhLmNsYXNzTGlzdC5hZGQoJ21lbnUtZGVzY3JpcHQnKTtcbiAgICBwYXJhLnRleHRDb250ZW50PW1lbnVJdGVtc1tpdGVtTmFtZV0uZGVzY3JpcHRpb247XG4gICAgdGV4dC5hcHBlbmRDaGlsZChwYXJhKTtcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdpbWcnKTtcbiAgICBjb25zdCBpbWdUYWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWdUYWcuc3JjID0gZm9vZDtcbiAgICBpbWcuYXBwZW5kQ2hpbGQoaW1nVGFnKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICByZXR1cm4gaXRlbTtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVJdGVtMigpe1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tMicpO1xuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHQuY2xhc3NMaXN0LmFkZCgndGV4dDInKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyLnRleHRDb250ZW50ID0gbWVudUl0ZW1zLml0ZW0yLm5hbWU7XG4gICAgdGV4dC5hcHBlbmRDaGlsZChoMik7XG5cbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmEuY2xhc3NMaXN0LmFkZCgnbWVudS1kZXNjcmlwdCcpO1xuICAgIHBhcmEudGV4dENvbnRlbnQ9bWVudUl0ZW1zLml0ZW0yLmRlc2NyaXB0aW9uO1xuICAgIHRleHQuYXBwZW5kQ2hpbGQocGFyYSk7XG5cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnaW1nMicpO1xuICAgIGNvbnN0IGltZ1RhZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZ1RhZy5zcmMgPSBKYWZmbmE7XG4gICAgaW1nLmFwcGVuZENoaWxkKGltZ1RhZyk7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgcmV0dXJuIGl0ZW07XG5cbn1cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51UGFnZUNvbXBvbmVudCgpe1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVJdGVtKDEsY3VycnkpKTtcbiAgIG1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlSXRlbTIoKSk7XG4gICBtZW51LmFwcGVuZENoaWxkKGNyZWF0ZUl0ZW0oMyxrb3R0dSkpO1xuICBcbiAgICByZXR1cm4gbWVudTtcblxufTsiLCJleHBvcnQgY29uc3QgbWVudUl0ZW1zID0ge1xuICAgIGl0ZW0xOntcbiAgICAgICAgbmFtZTpcIlNyaSBMYW5rYW4gQ3VycnkgUGxhdHRlclwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcIkluZHVsZ2UgaW4gYSBzeW1waG9ueSBvZiBmbGF2b3JzIHdpdGggb3VyIHNpZ25hdHVyZSBTcmkgTGFua2FuIEN1cnJ5IFBsYXR0ZXIuIFRoaXMgZ2VuZXJvdXMgcGxhdHRlciBpbmNsdWRlcyB5b3VyIGNob2ljZSBvZiBwcm90ZWluIChjaGlja2VuLCBiZWVmLCBvciB0b2Z1KSwgZ2VudGx5IHNpbW1lcmVkIGluIGEgZnJhZ3JhbnQgYmxlbmQgb2YgY29jb251dCBtaWxrLCBjdXJyeSBsZWF2ZXMsIGFuZCBhbiBhcnJheSBvZiB0cmFkaXRpb25hbCBzcGljZXMuIFNlcnZlZCB3aXRoIHN0ZWFtZWQgcmljZSwgY29jb251dCBzYW1ib2wsIGFuZCBwYXBhZHVtLCB0aGlzIGRpc2ggb2ZmZXJzIGEgaGFybW9uaW91cyBiYWxhbmNlIG9mIHN3ZWV0LCBzYXZvcnksIGFuZCBzcGljeSBub3RlcyB0aGF0IHdpbGwgdHJhbnNwb3J0IHlvdXIgdGFzdGUgYnVkcyBzdHJhaWdodCB0byB0aGUgYmVhY2hlcyBvZiBTcmkgTGFua2EuXCJcbiAgICB9LFxuICAgIGl0ZW0yOntcbiAgICAgICAgbmFtZTpcIkphZmZuYSBTZWFmb29kIEZlYXN0XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiRGl2ZSBpbnRvIHRoZSBvY2VhbiBvZiBmbGF2b3JzIHdpdGggb3VyIEphZmZuYSBTZWFmb29kIEZlYXN0LiBUaGlzIGN1bGluYXJ5IG1hc3RlcnBpZWNlIGZlYXR1cmVzIGEgbWVkbGV5IG9mIGZyZXNoIHNlYWZvb2QsIGluY2x1ZGluZyBzdWNjdWxlbnQgcHJhd25zLCB0ZW5kZXIgc3F1aWQsIGFuZCBmbGFreSBmaXNoLCBtYXJpbmF0ZWQgaW4gYSBmaWVyeSBKYWZmbmEtc3R5bGUgY3Vycnkgc2F1Y2UuIFNlcnZlZCB3aXRoIGFyb21hdGljIGJhc21hdGkgcmljZSBhbmQgYSBzaWRlIG9mIHRhbmd5IG1hbmdvIGNodXRuZXksIHRoaXMgZGlzaCBjYXB0dXJlcyB0aGUgZXNzZW5jZSBvZiBTcmkgTGFua2EncyBjb2FzdGFsIGN1aXNpbmUsIGtub3duIGZvciBpdHMgYm9sZCBzcGljZXMgYW5kIGlycmVzaXN0aWJsZSBzZWFmb29kLlwiXG4gICAgfSxcbiAgICBpdGVtMzp7XG4gICAgICAgIG5hbWU6XCJLb3R0dSBSb3RpIEZ1c2lvblwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcIkV4cGVyaWVuY2UgdGhlIHJoeXRobWljIGNsYXR0ZXIgb2YgdGhlIGdyaWRkbGUgYXMgb3VyIGNoZWZzIHByZXBhcmUgdGhlIGJlbG92ZWQgS290dHUgUm90aSBGdXNpb24uIFRoaXMgc3RyZWV0IGZvb2Qgc2Vuc2F0aW9uIGNvbWJpbmVzIHNocmVkZGVkIHJvdGkgYnJlYWQsIHlvdXIgY2hvaWNlIG9mIGNoaWNrZW4gb3IgdmVnZXRhYmxlcywgYW5kIGFuIGFzc29ydG1lbnQgb2Ygc3BpY2VzLCBhbGwgc3Rpci1mcmllZCB0byBwZXJmZWN0aW9uLiBUb3BwZWQgd2l0aCBhIGZyaWVkIGVnZyBhbmQgc2VydmVkIHdpdGggYSBzaWRlIG9mIHNwaWN5IG9uaW9uIGdyYXZ5LCB0aGlzIGRpc2ggb2ZmZXJzIGEgZGVsaWdodGZ1bCBmdXNpb24gb2YgdGV4dHVyZXMgYW5kIGZsYXZvcnMgdGhhdCB3aWxsIGxlYXZlIHlvdSBjcmF2aW5nIGZvciBtb3JlLlwiXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjb25zdCBjb250YWN0SXRlbXMgPSBbXG4gICAgXCJBZGRyZXNzOiAxMjMgU3BpY2UgTGFuZSwgQ29sb21ibywgU3JpIExhbmthXCIsXG4gICAgXCJQaG9uZTogKzk0IDExIDEyMzQgNTY3OFwiLFxuICAgIFwiRW1haWw6IGluZm9Ac3BpY2Vpc2xlZGVsaWdodHMubGtcIixcbiAgICBcIldlYnNpdGU6IHd3dy5zcGljZWlzbGVkZWxpZ2h0cy5sa1wiLFxuICAgIFwiQXQgU3BpY2UgSXNsZSBEZWxpZ2h0cywgd2UgdGFrZSBwcmlkZSBpbiBvZmZlcmluZyBhIHdhcm0gYW5kIHdlbGNvbWluZyBhdG1vc3BoZXJlIHdoZXJlIHlvdSBjYW4gc2F2b3IgdGhlIHRhc3RlcyBvZiBTcmkgTGFua2EgaW4gZXZlcnkgYml0ZS4gV2hldGhlciB5b3UncmUgYSBzZWFzb25lZCBzcGljZSBlbnRodXNpYXN0IG9yIG5ldyB0byBTcmkgTGFua2FuIGN1aXNpbmUsIG91ciBkZWRpY2F0ZWQgY2hlZnMgYXJlIGhlcmUgdG8gcHJvdmlkZSB5b3Ugd2l0aCBhIG1lbW9yYWJsZSBkaW5pbmcgZXhwZXJpZW5jZS4gQ29tZSBqb2luIHVzIGFuZCBlbWJhcmsgb24gYSBnYXN0cm9ub21pYyBhZHZlbnR1cmUgbGlrZSBubyBvdGhlciwgYXMgd2UgYnJpbmcgdGhlIGZsYXZvcnMgb2YgdGhlIFNwaWNlIElzbGUgdG8geW91ciB0YWJsZS5cIlxuXSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcvc3JjL2Fzc2V0cy9zdHlsZS5jc3MnO1xuaW1wb3J0IEhlYWRlckNvbXBvbmVudCBmcm9tICcvc3JjL21vZHVsZXMvaGVhZGVyLmpzJztcbmltcG9ydCBob21lUGFnZUNvbXBvbmVudCBmcm9tICcvc3JjL21vZHVsZXMvYWJvdXQuanMnO1xuaW1wb3J0IG1lbnVQYWdlQ29tcG9uZW50IGZyb20gJy9zcmMvbW9kdWxlcy9tZW51LmpzJztcbmltcG9ydCBjb250YWN0UGFnZUNvbXBvbmVudCBmcm9tICcvc3JjL21vZHVsZXMvY29udGFjdC5qcyc7XG5pbXBvcnQgdG9nZ2xlQnRuIGZyb20gJy9zcmMvbW9kdWxlcy9idXR0b25FdmVudExpc3Rlcm5lcnMuanMnO1xuXG5cblxuICBcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChIZWFkZXJDb21wb25lbnQoKSk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaG9tZVBhZ2VDb21wb25lbnQoKSk7XG5cblxuICBjb25zdCBuYXZFdmVudExpc3RuZXJzID0gZnVuY3Rpb24oKXtcbiAgICAgIGNvbnN0IG5hdmJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2YmFyIHVsJyk7XG4gICAgICBjb25zdCBob21lTGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2YmFyIGxpOmZpcnN0LWNoaWxkJyk7XG4gICAgICBjb25zdCBtZW51TGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2YmFyIGxpOm50aC1jaGlsZCgyKScpO1xuICAgICAgY29uc3QgY29udGFjdExpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmJhciBsaTpudGgtY2hpbGQoMyknKTtcbiAgICAgIGNvbnN0IGJ0bnMgPSBbaG9tZUxpLG1lbnVMaSxjb250YWN0TGldO1xuXG4gICAgZnVuY3Rpb24gaGFzQ2hpbGQoKXtcbiAgICAgIGNvbnN0IGRvZXNudEhhdmVQYWdlT25lID0gIWRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgICAgY29uc3QgZG9lc250SGF2ZVBhZ2VUd28gPSAhZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xuICAgICAgY29uc3QgZG9lc250SGF2ZVBhZ2VUaHJlZSA9ICFkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0Jyk7XG5cbiAgICAgIHJldHVybntcbiAgICAgICAgZG9lc250SGF2ZVBhZ2VPbmUsXG4gICAgICAgIGRvZXNudEhhdmVQYWdlVHdvLFxuICAgICAgICBkb2VzbnRIYXZlUGFnZVRocmVlXG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvZ2dsZVBhZ2UoKXtcbiAgICAgIGNvbnN0IGNoZWNrID0gaGFzQ2hpbGQoKTtcbiAgICAgIGlmKGhvbWVMaS5kYXRhc2V0LnNlbGVjdGVkID09PSBcInRydWVcIil7XG4gICAgICAgIGlmKGNoZWNrLmRvZXNudEhhdmVQYWdlT25lKXtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhvbWVQYWdlQ29tcG9uZW50KCkpO1xuICAgICAgICB9XG4gICAgICB9ZWxzZSBpZihtZW51TGkuZGF0YXNldC5zZWxlY3RlZCA9PT0gXCJ0cnVlXCIpe1xuICAgICAgICBpZihjaGVjay5kb2VzbnRIYXZlUGFnZVR3byl7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZW51UGFnZUNvbXBvbmVudCgpKTtcbiAgICAgICAgfVxuICAgICAgfWVsc2UgaWYoY29udGFjdExpLmRhdGFzZXQuc2VsZWN0ZWQgPT09IFwidHJ1ZVwiKXtcbiAgICAgICAgaWYoY2hlY2suZG9lc250SGF2ZVBhZ2VUaHJlZSl7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWN0UGFnZUNvbXBvbmVudCgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiByZW1vdmVQYWdlKCl7XG4gICAgICBjb25zdCBjaGVjayA9IGhhc0NoaWxkKCk7XG4gICAgICBpZihjaGVjay5kb2VzbnRIYXZlUGFnZU9uZSA9PT0gZmFsc2Upe1xuICAgICAgICBjb25zdCBwZzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocGcxKTtcbiAgICAgIH1lbHNlIGlmKGNoZWNrLmRvZXNudEhhdmVQYWdlVHdvID09PSBmYWxzZSl7XG4gICAgICAgIGNvbnN0IHBnMiA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChwZzIpO1xuICAgICAgfWVsc2UgaWYoY2hlY2suZG9lc250SGF2ZVBhZ2VUaHJlZSA9PT0gZmFsc2Upe1xuICAgICAgICBjb25zdCBwZzMgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0Jyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocGczKTtcbiAgICAgICB9IH1cblxuICAgICAgYnRucy5mb3JFYWNoKChidG4pPT57XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgICAgICAgdG9nZ2xlQnRuKGUsaG9tZUxpLG1lbnVMaSxjb250YWN0TGksbmF2YnRucyk7XG4gICAgICAgICAgcmVtb3ZlUGFnZSgpO1xuICAgICAgICAgIHRvZ2dsZVBhZ2UoKTtcbiAgICAgICAgfSlcblxuICAgICAgfSlcblxuXG4gICAgfSgpO1xuICAgICAgXG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==