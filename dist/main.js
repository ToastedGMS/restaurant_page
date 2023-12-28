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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactInfo: () => (/* binding */ contactInfo)\n/* harmony export */ });\nconst contactInfo = () => {\n    const dynamicDiv = document.querySelector('div#dynamicDiv');\n\n    while (dynamicDiv.firstChild) {\n        dynamicDiv.removeChild(dynamicDiv.lastChild)\n    }\n\n    const firstH2 = document.createElement('h2');\n    firstH2.textContent = 'Email us via:'\n\n    const firstP = document.createElement('p');\n    firstP.textContent = 'notarealemailaddress@dontmailus.com';\n    \n    const secondH2 = document.createElement('h2');\n    secondH2.textContent = 'Call Us (Mon-Fri 8am-5pm)';\n\n    const secondP = document.createElement('p');\n    secondP.textContent = '+12 (34) 5678-90123';\n\n    dynamicDiv.appendChild(firstH2);\n    dynamicDiv.appendChild(firstP);\n    dynamicDiv.appendChild(secondH2);\n    dynamicDiv.appendChild(secondP);\n}\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home)\n/* harmony export */ });\nconst home = () => {\n    const dynamicDiv = document.querySelector('div#dynamicDiv');\n    \n    while (dynamicDiv.firstChild) {\n        dynamicDiv.removeChild(dynamicDiv.lastChild)\n    }\n    \n    const h1 = document.createElement('h1');\n    h1.textContent = 'Discover Taste';\n\n    const p = document.createElement('p');\n    p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo odio excepturi ut ipsam accusamus cum.';\n    \n    const orderBtn = document.createElement('button');\n    orderBtn.textContent = 'Order Now';\n    orderBtn.disabled = true;\n    orderBtn.className = 'orderBtn';\n\n    dynamicDiv.appendChild(h1);\n    dynamicDiv.appendChild(p);\n    dynamicDiv.appendChild(orderBtn);\n}\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n\n\n\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.pageLoad)()\n;(0,_home__WEBPACK_IMPORTED_MODULE_3__.home)()\n\nconst contentDiv = document.querySelector('div#content');\n\ncontentDiv.style.backgroundImage = 'url(https://images.unsplash.com/photo-1554998171-706e730d721d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)';\n//Image by Louis Hansel via unsplash.com\n\nconst btnCtt = document.querySelector('[data-type=\"contactBtn\"]')\nbtnCtt.addEventListener('click', () => { ;(0,_contact__WEBPACK_IMPORTED_MODULE_1__.contactInfo)() })\n\nconst btnMenu = document.querySelector('[data-type=\"menuBtn\"]')\nbtnMenu.addEventListener('click', () => { ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__.menu)() })\n\nconst btnHome = document.querySelector('[data-type=\"homeBtn\"]')\nbtnHome.addEventListener('click', () => { ;(0,_home__WEBPACK_IMPORTED_MODULE_3__.home)() })\n\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\nconst menu = () => {\n    const dynamicDiv = document.querySelector('div#dynamicDiv');\n\n    while (dynamicDiv.firstChild) {\n        dynamicDiv.removeChild(dynamicDiv.lastChild)\n    }\n\n    const firstH2 = document.createElement('h2');\n    firstH2.textContent = 'Option 1';\n\n    const firstP = document.createElement('p');\n    firstP.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia similique quas impedit, in atque nisi. Atque necessitatibus reprehenderit accusantium, quis vel ab voluptatibus rerum maiores, vitae quae totam!';\n\n    const secondH2 = document.createElement('h2');\n    secondH2.textContent = 'Option 2';\n\n    const secondP = document.createElement('p');\n    secondP.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia similique quas impedit, in atque nisi. Atque necessitatibus reprehenderit accusantium, quis vel ab voluptatibus rerum maiores, vitae quae totam!';\n\n    const thirdH2 = document.createElement('h2');\n    thirdH2.textContent = 'Option 3';\n\n    const thirdP = document.createElement('p');\n    thirdP.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia similique quas impedit, in atque nisi. Atque necessitatibus reprehenderit accusantium, quis vel ab voluptatibus rerum maiores, vitae quae totam!';\n    \n    dynamicDiv.appendChild(firstH2);\n    dynamicDiv.appendChild(firstP);\n    dynamicDiv.appendChild(secondH2);\n    dynamicDiv.appendChild(secondP);\n    dynamicDiv.appendChild(thirdH2);\n    dynamicDiv.appendChild(thirdP);\n}\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoad: () => (/* binding */ pageLoad)\n/* harmony export */ });\nconst pageLoad = () => {\n    const contentDiv = document.querySelector('div#content');\n\n    const dynamicDiv = document.createElement('div');\n    dynamicDiv.setAttribute('id', 'dynamicDiv')\n\n    contentDiv.appendChild(dynamicDiv);\n}\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/pageLoad.js?");

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