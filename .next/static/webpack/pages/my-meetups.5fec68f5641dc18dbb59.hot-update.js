webpackHotUpdate_N_E("pages/my-meetups",{

/***/ "./components/context/index.js":
/*!*************************************!*\
  !*** ./components/context/index.js ***!
  \*************************************/
/*! exports provided: contextProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contextProvider\", function() { return contextProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/admin/Desktop/meet-up/components/context/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({\n  myMeetups: []\n});\nvar contextProvider = function contextProvider(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      myMeetups = _useState[0],\n      setMyMeetups = _useState[1];\n\n  var init = function init() {\n    var storage = localStorage.getItem(\"bookmarks\");\n    if (storage) console.log(JSON.parse(storage));\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    init();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(context.Provider, {\n    value: {\n      myMeetups: myMeetups\n    },\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(contextProvider, \"Av6pNf6GjdzHp4Y4AOlAcVyVmzI=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecipeContext);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L2luZGV4LmpzPzI3ZjEiXSwibmFtZXMiOlsiY29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIm15TWVldHVwcyIsImNvbnRleHRQcm92aWRlciIsInByb3BzIiwidXNlU3RhdGUiLCJzZXRNeU1lZXR1cHMiLCJpbml0Iiwic3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInBhcnNlIiwidXNlRWZmZWN0IiwiY2hpbGRyZW4iLCJSZWNpcGVDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLE9BQU8sZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0I7QUFDbENDLFdBQVMsRUFBRTtBQUR1QixDQUFwQixDQUFoQjtBQUlPLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ05DLHNEQUFRLENBQUMsRUFBRCxDQURGO0FBQUEsTUFDakNILFNBRGlDO0FBQUEsTUFDdEJJLFlBRHNCOztBQUd4QyxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFZO0FBQ3ZCLFFBQU1DLE9BQU8sR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFdBQXJCLENBQWhCO0FBQ0EsUUFBSUYsT0FBSixFQUFhRyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBSSxDQUFDQyxLQUFMLENBQVdOLE9BQVgsQ0FBWjtBQUNkLEdBSEQ7O0FBSUFPLHlEQUFTLENBQUMsWUFBTTtBQUNkUixRQUFJO0FBQ0wsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFLHFFQUFDLE9BQUQsQ0FBUyxRQUFUO0FBQ0UsU0FBSyxFQUFFO0FBQ0xMLGVBQVMsRUFBRUE7QUFETixLQURUO0FBQUEsY0FLR0UsS0FBSyxDQUFDWTtBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVNELENBcEJNOztHQUFNYixlOztBQXNCRWMsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRleHQvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgY29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICBteU1lZXR1cHM6IFtdLFxufSk7XG5cbmV4cG9ydCBjb25zdCBjb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW215TWVldHVwcywgc2V0TXlNZWV0dXBzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJvb2ttYXJrc1wiKTtcbiAgICBpZiAoc3RvcmFnZSkgY29uc29sZS5sb2coSlNPTi5wYXJzZShzdG9yYWdlKSk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW5pdCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Y29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgbXlNZWV0dXBzOiBteU1lZXR1cHMsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVDb250ZXh0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/context/index.js\n");

/***/ })

})