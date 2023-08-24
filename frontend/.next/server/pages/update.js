/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/update";
exports.ids = ["pages/update"];
exports.modules = {

/***/ "./components/UpdateProduct.js":
/*!*************************************!*\
  !*** ./components/UpdateProduct.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UpdateProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/kor/React Projects/Next-graphQl/frontend/components/UpdateProduct.js\";\n // TODO\n// 1. Need to get the existing product\n\nconst SINGLE_PRODUCT_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query SINGLE_PRODUCT_QUERY($id: ID!) {\n    Product(where: { id: $id }) {\n      name\n      price\n      description\n    }\n  }\n`; // 2. Need to mutate the product for updating it\n\nconst UPDATE_PRODUCT_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  mutation UPDATE_PRODUCT_MUTATION(\n    $id: ID!\n    $name: String\n    $description: String\n    $price: Int\n  ) {\n    updateProduct(\n      id: $id\n      data: { name: $name, description: $description, price: $price }\n    ) {\n      id\n      name\n      description\n      price\n    }\n  }\n`; // 3. Need a form to handle the update\n\nfunction UpdateProduct({\n  id\n}) {\n  const {\n    data,\n    loading,\n    error\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(SINGLE_PRODUCT_QUERY, {\n    variables: {\n      id\n    }\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [\"UpdateProduct now \", data === null || data === void 0 ? void 0 : data.Product.name, \" \"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1VwZGF0ZVByb2R1Y3QuanM/OWU4ZSJdLCJuYW1lcyI6WyJTSU5HTEVfUFJPRFVDVF9RVUVSWSIsImdxbCIsIlVQREFURV9QUk9EVUNUX01VVEFUSU9OIiwiVXBkYXRlUHJvZHVjdCIsImlkIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiUHJvZHVjdCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Q0FFQTtBQUNBOztBQUNBLE1BQU1BLG9CQUFvQixHQUFHQywrQ0FBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUkEsQyxDQVVBOztBQUNBLE1BQU1DLHVCQUF1QixHQUFHRCwrQ0FBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBakJBLEMsQ0FrQkE7O0FBRWUsU0FBU0UsYUFBVCxDQUF1QjtBQUFFQztBQUFGLENBQXZCLEVBQStCO0FBQzVDLFFBQU07QUFBRUMsUUFBRjtBQUFRQyxXQUFSO0FBQWlCQztBQUFqQixNQUEyQkMsd0RBQVEsQ0FBQ1Isb0JBQUQsRUFBdUI7QUFDOURTLGFBQVMsRUFBRTtBQUFFTDtBQUFGO0FBRG1ELEdBQXZCLENBQXpDO0FBR0Esc0JBQU87QUFBQSxxQ0FBd0JDLElBQXhCLGFBQXdCQSxJQUF4Qix1QkFBd0JBLElBQUksQ0FBRUssT0FBTixDQUFjQyxJQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxuLy8gVE9ET1xuLy8gMS4gTmVlZCB0byBnZXQgdGhlIGV4aXN0aW5nIHByb2R1Y3RcbmNvbnN0IFNJTkdMRV9QUk9EVUNUX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBTSU5HTEVfUFJPRFVDVF9RVUVSWSgkaWQ6IElEISkge1xuICAgIFByb2R1Y3Qod2hlcmU6IHsgaWQ6ICRpZCB9KSB7XG4gICAgICBuYW1lXG4gICAgICBwcmljZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICB9XG4gIH1cbmA7XG5cbi8vIDIuIE5lZWQgdG8gbXV0YXRlIHRoZSBwcm9kdWN0IGZvciB1cGRhdGluZyBpdFxuY29uc3QgVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIFVQREFURV9QUk9EVUNUX01VVEFUSU9OKFxuICAgICRpZDogSUQhXG4gICAgJG5hbWU6IFN0cmluZ1xuICAgICRkZXNjcmlwdGlvbjogU3RyaW5nXG4gICAgJHByaWNlOiBJbnRcbiAgKSB7XG4gICAgdXBkYXRlUHJvZHVjdChcbiAgICAgIGlkOiAkaWRcbiAgICAgIGRhdGE6IHsgbmFtZTogJG5hbWUsIGRlc2NyaXB0aW9uOiAkZGVzY3JpcHRpb24sIHByaWNlOiAkcHJpY2UgfVxuICAgICkge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBwcmljZVxuICAgIH1cbiAgfVxuYDtcbi8vIDMuIE5lZWQgYSBmb3JtIHRvIGhhbmRsZSB0aGUgdXBkYXRlXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwZGF0ZVByb2R1Y3QoeyBpZCB9KSB7XG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KFNJTkdMRV9QUk9EVUNUX1FVRVJZLCB7XG4gICAgdmFyaWFibGVzOiB7IGlkIH0sXG4gIH0pO1xuICByZXR1cm4gPGRpdj5VcGRhdGVQcm9kdWN0IG5vdyB7ZGF0YT8uUHJvZHVjdC5uYW1lfSA8L2Rpdj47XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UpdateProduct.js\n");

/***/ }),

/***/ "./pages/update.js":
/*!*************************!*\
  !*** ./pages/update.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UpdateProductPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_UpdateProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/UpdateProduct */ \"./components/UpdateProduct.js\");\n\nvar _jsxFileName = \"/Users/kor/React Projects/Next-graphQl/frontend/pages/update.js\";\n\nfunction UpdateProductPage({\n  query\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UpdateProduct__WEBPACK_IMPORTED_MODULE_1__.default, {\n      id: query.id\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy91cGRhdGUuanM/YTEwNCJdLCJuYW1lcyI6WyJVcGRhdGVQcm9kdWN0UGFnZSIsInF1ZXJ5IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsaUJBQVQsQ0FBMkI7QUFBRUM7QUFBRixDQUEzQixFQUFzQztBQUNuRCxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLDhEQUFEO0FBQWUsUUFBRSxFQUFFQSxLQUFLLENBQUNDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRCIsImZpbGUiOiIuL3BhZ2VzL3VwZGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVcGRhdGVQcm9kdWN0IGZyb20gJy4uL2NvbXBvbmVudHMvVXBkYXRlUHJvZHVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwZGF0ZVByb2R1Y3RQYWdlKHsgcXVlcnkgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8VXBkYXRlUHJvZHVjdCBpZD17cXVlcnkuaWR9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/update.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/update.js"));
module.exports = __webpack_exports__;

})();