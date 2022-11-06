/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/func/initialLoad.js":
/*!*********************************!*\
  !*** ./src/func/initialLoad.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pages_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/header.js */ \"./src/pages/header.js\");\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/home.js */ \"./src/pages/home.js\");\n\r\n\r\n\r\nconst initialLoad = () => {\r\n    const content = document.querySelector('#content');\r\n    const headerBox = (0,_pages_header_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    content.appendChild(headerBox);\r\n    const home = (0,_pages_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    content.appendChild(home);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/func/initialLoad.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _func_initialLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./func/initialLoad.js */ \"./src/func/initialLoad.js\");\n\r\n\r\n(0,_func_initialLoad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/header.js":
/*!*****************************!*\
  !*** ./src/pages/header.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst header = () => {\r\n    const headerContent = document.createElement('div');\r\n    headerContent.classList.add('header-content');\r\n\r\n    const pageList = document.createElement('div');\r\n    pageList.classList.add('page-list');\r\n\r\n    const home = document.createElement('p');\r\n    const menu = document.createElement('p');\r\n    const about = document.createElement('p');\r\n    home.textContent = 'Home';\r\n    menu.textContent = 'Menu';\r\n    about.textContent = 'About';\r\n    pageList.appendChild(home);\r\n    pageList.appendChild(menu);\r\n    pageList.appendChild(about);\r\n\r\n    headerContent.appendChild(pageList);\r\n\r\n    const logo = document.createElement('div');\r\n    logo.classList.add('logo');\r\n    logo.textContent = 'Oyasu Meals';\r\n\r\n    headerContent.appendChild(logo);\r\n\r\n    const socials = document.createElement('div');\r\n    socials.classList.add('socials');\r\n\r\n    const instagram = document.createElement('p');\r\n    const twitter = document.createElement('p');\r\n\r\n    instagram.textContent = 'Instagram';\r\n    twitter.textContent = 'Twitter';\r\n\r\n    socials.appendChild(instagram);\r\n    socials.appendChild(twitter);\r\n\r\n    headerContent.appendChild(socials);\r\n\r\n    return headerContent;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/header.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homePage = () => {\r\n    const homeContainer = document.createElement('div');\r\n    homeContainer.classList.add('home-container');\r\n\r\n    const textBox = document.createElement('div');\r\n\r\n    const slogan = document.createElement('p');\r\n    slogan.textContent = \"いらっしゃいませ！\";\r\n\r\n    const translation = document.createElement('p');\r\n    translation.classList.add('translation');\r\n    translation.textContent = 'welcome!';\r\n\r\n    textBox.appendChild(slogan);\r\n    textBox.appendChild(translation);\r\n    \r\n    homeContainer.appendChild(textBox);\r\n    \r\n    return homeContainer;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;