webpackHotUpdate_N_E("pages/my-meetups",{

/***/ "./components/context/index.js":
/*!*************************************!*\
  !*** ./components/context/index.js ***!
  \*************************************/
/*! exports provided: RecipeContextProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RecipeContextProvider\", function() { return RecipeContextProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/meet-up/components/context/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar RecipeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({\n  myMeetups: []\n});\nvar RecipeContextProvider = function RecipeContextProvider(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      myMeetups = _useState[0],\n      setMyMeetups = _useState[1];\n\n  var init = function init() {\n    var storage = localStorage.getItem(\"bookmarks\");\n    if (storage) console.log(JSON.parse(storage));\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    init();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RecipeContext.Provider, {\n    value: {\n      myMeetups: myMeetups\n    },\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(RecipeContextProvider, \"Av6pNf6GjdzHp4Y4AOlAcVyVmzI=\");\n\n_c = RecipeContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecipeContext);\n\nvar _c;\n\n$RefreshReg$(_c, \"RecipeContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L2luZGV4LmpzPzI3ZjEiXSwibmFtZXMiOlsiUmVjaXBlQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIm15TWVldHVwcyIsIlJlY2lwZUNvbnRleHRQcm92aWRlciIsInByb3BzIiwidXNlU3RhdGUiLCJzZXRNeU1lZXR1cHMiLCJpbml0Iiwic3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInBhcnNlIiwidXNlRWZmZWN0IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsYUFBYSxnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQjtBQUN4Q0MsV0FBUyxFQUFFO0FBRDZCLENBQXBCLENBQXRCO0FBSU8sSUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDWkMsc0RBQVEsQ0FBQyxFQUFELENBREk7QUFBQSxNQUN2Q0gsU0FEdUM7QUFBQSxNQUM1QkksWUFENEI7O0FBRzlDLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQVk7QUFDdkIsUUFBTUMsT0FBTyxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsQ0FBaEI7QUFDQSxRQUFJRixPQUFKLEVBQWFHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUFJLENBQUNDLEtBQUwsQ0FBV04sT0FBWCxDQUFaO0FBQ2QsR0FIRDs7QUFJQU8seURBQVMsQ0FBQyxZQUFNO0FBQ2RSLFFBQUk7QUFDTCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0UscUVBQUMsYUFBRCxDQUFlLFFBQWY7QUFDRSxTQUFLLEVBQUU7QUFDTEwsZUFBUyxFQUFFQTtBQUROLEtBRFQ7QUFBQSxjQUtHRSxLQUFLLENBQUNZO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0FwQk07O0dBQU1iLHFCOztLQUFBQSxxQjtBQXNCRUosNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRleHQvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUmVjaXBlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICBteU1lZXR1cHM6IFtdLFxufSk7XG5cbmV4cG9ydCBjb25zdCBSZWNpcGVDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW215TWVldHVwcywgc2V0TXlNZWV0dXBzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJvb2ttYXJrc1wiKTtcbiAgICBpZiAoc3RvcmFnZSkgY29uc29sZS5sb2coSlNPTi5wYXJzZShzdG9yYWdlKSk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW5pdCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVjaXBlQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgbXlNZWV0dXBzOiBteU1lZXR1cHMsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L1JlY2lwZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVDb250ZXh0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/context/index.js\n");

/***/ })

})