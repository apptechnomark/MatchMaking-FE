"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/recommendations/page",{

/***/ "(app-pages-browser)/./src/app/recommendations/page.tsx":
/*!******************************************!*\
  !*** ./src/app/recommendations/page.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_TipsAndUpdates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/TipsAndUpdates */ \"(app-pages-browser)/./node_modules/@mui/icons-material/TipsAndUpdates.js\");\n/* harmony import */ var _barrel_optimize_names_CircularProgress_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=CircularProgress!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/CircularProgress/CircularProgress.js\");\n/* harmony import */ var _mui_icons_material_RemoveRedEye__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/RemoveRedEye */ \"(app-pages-browser)/./node_modules/@mui/icons-material/RemoveRedEye.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Page = ()=>{\n    var _responseData_ResponseData, _responseData_UserName, _responseData_UserName1, _responseData_ResponseData1;\n    _s();\n    const [loader, setLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [responseData, setResponseData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoader(true);\n        let ResponseData = localStorage.getItem(\"ResponseData\");\n        if (ResponseData) {\n            try {\n                const parsedResponseData = JSON.parse(ResponseData);\n                setResponseData(parsedResponseData);\n            } catch (error) {\n                setResponseData([]);\n            }\n        }\n        setLoader(false);\n    }, []);\n    console.log(responseData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: loader ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-center h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CircularProgress_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/tmdev/HD/Project/MatchMaking-FE/src/app/recommendations/page.tsx\",\n                lineNumber: 29,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/tmdev/HD/Project/MatchMaking-FE/src/app/recommendations/page.tsx\",\n            lineNumber: 28,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center justify-center mt-12 mb-8 gap-5\",\n            children: (responseData === null || responseData === void 0 ? void 0 : (_responseData_ResponseData = responseData.ResponseData) === null || _responseData_ResponseData === void 0 ? void 0 : _responseData_ResponseData.length) > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center lg:gap-2 text-md lg:text-xl font-semibold\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \"Hello\\xa0\",\n                                    !!(responseData === null || responseData === void 0 ? void 0 : responseData.UserName) ? (responseData === null || responseData === void 0 ? void 0 : (_responseData_UserName = responseData.UserName) === null || _responseData_UserName === void 0 ? void 0 : _responseData_UserName.charAt(0).toUpperCase()) + (responseData === null || responseData === void 0 ? void 0 : (_responseData_UserName1 = responseData.UserName) === null || _responseData_UserName1 === void 0 ? void 0 : _responseData_UserName1.slice(1)) + \" \" : \"User \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"http://20.198.19.81/match_making/upload/\".concat(responseData === null || responseData === void 0 ? void 0 : responseData.file_path),\n                                        target: \"_blank\",\n                                        rel: \"noopener noreferrer\",\n                                        className: \"text-[#0592C6]\",\n                                        children: \"Your CV\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/tmdev/HD/Project/MatchMaking-FE/src/app/recommendations/page.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    \"\\xa0matches the below profile\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/tmdev/HD/Project/MatchMaking-FE/src/app/recommendations/page.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_TipsAndUpdates__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"text-yellow-400\"\n                            }, void 0, false, {\n                                fileName: \"/home/tmdev/HD/Project/MatchMaking-FE/src/app/recommendations/page.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/tmdev/HD/Project/MatchMaking-FE/src/app/recommendations/page.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border border-gray-500 bg-gray-100 rounded-lg p-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                            className: \"min-w-full divide-y bg-gray-100 divide-gray-400\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                    className: \"bg-gray-100\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"px-6 py-3 text-left text-xs text-gray-500 font-bold uppercase tracking-wider\",\n                                                children: \"Name\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/tmdev/HD/Project/MatchMaking-FE/src/app/recommendations/page.tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider\",\n                                                children: \"Match\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/tmdev/HD/Project/MatchMaking-FE/src/app/recommendations/page.tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                className: \"px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider\",\n                                                children: \"Action\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/tmdev/HD/Project/MatchMaking-FE/src/app/recommendations/page.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/tmdev/HD/Project/MatchMaking-FE/src/app/recommendations/page.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/tmdev/HD/Project/MatchMaking-FE/src/app/recommendations/page.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                    className: \"bg-gray-100 divide-y divide-gray-400\",\n                                    children: responseData === null || responseData === void 0 ? void 0 : (_responseData_ResponseData1 = responseData.ResponseData) === null || _responseData_ResponseData1 === void 0 ? void 0 : _responseData_ResponseData1.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    className: \"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900\",\n                                                    children: item.name\n                                                }, void 0, false, {\n                                                    fileName: \"/home/tmdev/HD/Project/MatchMaking-FE/src/app/recommendations/page.tsx\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 25\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    className: \"px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right\",\n                                                    children: [\n                                                        item.matchValue.toString().slice(0, 5),\n                                                        \"%\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/tmdev/HD/Project/MatchMaking-FE/src/app/recommendations/page.tsx\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 25\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    className: \"px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"http://20.198.19.81/match_making/tmp7/\".concat(item.name),\n                                                        target: \"_blank\",\n                                                        rel: \"noopener noreferrer\",\n                                                        className: \"text-[#0592C6]\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_RemoveRedEye__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                                            fileName: \"/home/tmdev/HD/Project/MatchMaking-FE/src/app/recommendations/page.tsx\",\n                                                            lineNumber: 84,\n                                                            columnNumber: 29\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/tmdev/HD/Project/MatchMaking-FE/src/app/recommendations/page.tsx\",\n                                                        lineNumber: 78,\n                                                        columnNumber: 27\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/tmdev/HD/Project/MatchMaking-FE/src/app/recommendations/page.tsx\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"/home/tmdev/HD/Project/MatchMaking-FE/src/app/recommendations/page.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 23\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"/home/tmdev/HD/Project/MatchMaking-FE/src/app/recommendations/page.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/tmdev/HD/Project/MatchMaking-FE/src/app/recommendations/page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/tmdev/HD/Project/MatchMaking-FE/src/app/recommendations/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 15\n                    }, undefined)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex items-center justify-center\",\n                children: \"There is no match found.\"\n            }, void 0, false, {\n                fileName: \"/home/tmdev/HD/Project/MatchMaking-FE/src/app/recommendations/page.tsx\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/tmdev/HD/Project/MatchMaking-FE/src/app/recommendations/page.tsx\",\n            lineNumber: 32,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(Page, \"e4igKJuTMH6IQCuYAbyN9Yr6r+U=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVjb21tZW5kYXRpb25zL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNtRDtBQUNpQjtBQUNuQjtBQUNlO0FBRWhFLE1BQU1NLE9BQWlCO1FBMEJaQyw0QkFLaUNBLHdCQUN4QkEseUJBOEJDQTs7SUE3RG5CLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBTTtJQUMxQyxNQUFNLENBQUNLLGNBQWNHLGdCQUFnQixHQUFHUiwrQ0FBUUEsQ0FBTSxFQUFFO0lBRXhERCxnREFBU0EsQ0FBQztRQUNSUSxVQUFVO1FBQ1YsSUFBSUUsZUFBb0JDLGFBQWFDLE9BQU8sQ0FBQztRQUM3QyxJQUFJRixjQUFjO1lBQ2hCLElBQUk7Z0JBQ0YsTUFBTUcscUJBQXFCQyxLQUFLQyxLQUFLLENBQUNMO2dCQUN0Q0QsZ0JBQWdCSTtZQUNsQixFQUFFLE9BQU9HLE9BQU87Z0JBQ2RQLGdCQUFnQixFQUFFO1lBQ3BCO1FBQ0Y7UUFDQUQsVUFBVTtJQUNaLEdBQUcsRUFBRTtJQUNQUyxRQUFRQyxHQUFHLENBQUNaO0lBQ1YscUJBQ0U7a0JBQ0dDLHVCQUNDLDhEQUFDWTtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDakIsNEZBQWdCQTs7Ozs7Ozs7O3NDQUduQiw4REFBQ2dCO1lBQUlDLFdBQVU7c0JBQ1pkLENBQUFBLHlCQUFBQSxvQ0FBQUEsNkJBQUFBLGFBQWNJLFlBQVksY0FBMUJKLGlEQUFBQSwyQkFBNEJlLE1BQU0sSUFBRyxrQkFDcEM7O2tDQUNFLDhEQUFDRjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNFOztvQ0FBSztvQ0FFSCxDQUFDLEVBQUNoQix5QkFBQUEsbUNBQUFBLGFBQWNpQixRQUFRLElBQUNqQixDQUFBQSx5QkFBQUEsb0NBQUFBLHlCQUFBQSxhQUFjaUIsUUFBUSxjQUF0QmpCLDZDQUFBQSx1QkFBd0JrQixNQUFNLENBQUMsR0FBR0MsV0FBVyxPQUNyRW5CLHlCQUFBQSxvQ0FBQUEsMEJBQUFBLGFBQWNpQixRQUFRLGNBQXRCakIsOENBQUFBLHdCQUF3Qm9CLEtBQUssQ0FBQyxNQUM5QixNQUFJO2tEQUNOLDhEQUFDQzt3Q0FDQ0MsTUFBTSwyQ0FBbUUsT0FBeEJ0Qix5QkFBQUEsbUNBQUFBLGFBQWN1QixTQUFTO3dDQUN4RUMsUUFBTzt3Q0FDUEMsS0FBSTt3Q0FDSlgsV0FBVTtrREFDWDs7Ozs7O29DQUVHOzs7Ozs7OzBDQUdOLDhEQUFDbEIsMEVBQWtCQTtnQ0FBQ2tCLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FFaEMsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDWTs0QkFBTVosV0FBVTs7OENBQ2YsOERBQUNhO29DQUFNYixXQUFVOzhDQUNmLDRFQUFDYzs7MERBQ0MsOERBQUNDO2dEQUFHZixXQUFVOzBEQUErRTs7Ozs7OzBEQUc3Riw4REFBQ2U7Z0RBQUdmLFdBQVU7MERBQWdGOzs7Ozs7MERBRzlGLDhEQUFDZTtnREFBR2YsV0FBVTswREFBZ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUtsRyw4REFBQ2dCO29DQUFNaEIsV0FBVTs4Q0FDZGQseUJBQUFBLG9DQUFBQSw4QkFBQUEsYUFBY0ksWUFBWSxjQUExQkosa0RBQUFBLDRCQUE0QitCLEdBQUcsQ0FBQyxDQUFDQyxNQUFXQyxzQkFDM0MsOERBQUNMOzs4REFDQyw4REFBQ007b0RBQUdwQixXQUFVOzhEQUNYa0IsS0FBS0csSUFBSTs7Ozs7OzhEQUVaLDhEQUFDRDtvREFBR3BCLFdBQVU7O3dEQUNYa0IsS0FBS0ksVUFBVSxDQUFDQyxRQUFRLEdBQUdqQixLQUFLLENBQUMsR0FBRzt3REFBRzs7Ozs7Ozs4REFFMUMsOERBQUNjO29EQUFHcEIsV0FBVTs4REFDWiw0RUFBQ087d0RBQ0NDLE1BQU0seUNBQW1ELE9BQVZVLEtBQUtHLElBQUk7d0RBQ3hEWCxRQUFPO3dEQUNQQyxLQUFJO3dEQUNKWCxXQUFVO2tFQUVWLDRFQUFDaEIsd0VBQWdCQTs7Ozs7Ozs7Ozs7Ozs7OzsyQ0FkZG1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZDQXdCbkIsOERBQUNwQjtnQkFBSUMsV0FBVTswQkFBMEM7Ozs7Ozs7Ozs7OztBQVFyRTtHQS9GTWY7S0FBQUE7QUFpR04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9yZWNvbW1lbmRhdGlvbnMvcGFnZS50c3g/NDlhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGlwc0FuZFVwZGF0ZXNJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1RpcHNBbmRVcGRhdGVzXCI7XG5pbXBvcnQgeyBDaXJjdWxhclByb2dyZXNzIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBSZW1vdmVSZWRFeWVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1JlbW92ZVJlZEV5ZVwiO1xuXG5jb25zdCBQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IHVzZVN0YXRlPGFueT4oZmFsc2UpO1xuICBjb25zdCBbcmVzcG9uc2VEYXRhLCBzZXRSZXNwb25zZURhdGFdID0gdXNlU3RhdGU8YW55PihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkZXIodHJ1ZSk7XG4gICAgbGV0IFJlc3BvbnNlRGF0YTogYW55ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJSZXNwb25zZURhdGFcIik7XG4gICAgaWYgKFJlc3BvbnNlRGF0YSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGFyc2VkUmVzcG9uc2VEYXRhID0gSlNPTi5wYXJzZShSZXNwb25zZURhdGEpO1xuICAgICAgICBzZXRSZXNwb25zZURhdGEocGFyc2VkUmVzcG9uc2VEYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHNldFJlc3BvbnNlRGF0YShbXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHNldExvYWRlcihmYWxzZSk7XG4gIH0sIFtdKTtcbmNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSlcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xvYWRlciA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLXNjcmVlblwiPlxuICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC0xMiBtYi04IGdhcC01XCI+XG4gICAgICAgICAge3Jlc3BvbnNlRGF0YT8uUmVzcG9uc2VEYXRhPy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBsZzpnYXAtMiB0ZXh0LW1kIGxnOnRleHQteGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgSGVsbG8mbmJzcDtcbiAgICAgICAgICAgICAgICAgIHshIXJlc3BvbnNlRGF0YT8uVXNlck5hbWU/cmVzcG9uc2VEYXRhPy5Vc2VyTmFtZT8uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGE/LlVzZXJOYW1lPy5zbGljZSgxKSArXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiOlwiVXNlciBcIn1cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwOi8vMjAuMTk4LjE5LjgxL21hdGNoX21ha2luZy91cGxvYWQvJHtyZXNwb25zZURhdGE/LmZpbGVfcGF0aH1gfVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1bIzA1OTJDNl1cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBZb3VyIENWXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAmbmJzcDttYXRjaGVzIHRoZSBiZWxvdyBwcm9maWxlXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxUaXBzQW5kVXBkYXRlc0ljb24gY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNDAwXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTUwMCBiZy1ncmF5LTEwMCByb3VuZGVkLWxnIHAtNVwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGRpdmlkZS15IGJnLWdyYXktMTAwIGRpdmlkZS1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cImJnLWdyYXktMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LXhzIHRleHQtZ3JheS01MDAgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTmFtZVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LXJpZ2h0IHRleHQteHMgZm9udC1ib2xkIHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRjaFxuICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LXJpZ2h0IHRleHQteHMgZm9udC1ib2xkIHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBkaXZpZGUteSBkaXZpZGUtZ3JheS00MDBcIj5cbiAgICAgICAgICAgICAgICAgICAge3Jlc3BvbnNlRGF0YT8uUmVzcG9uc2VEYXRhPy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIHRleHQtZ3JheS05MDAgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5tYXRjaFZhbHVlLnRvU3RyaW5nKCkuc2xpY2UoMCwgNSl9JVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSB0ZXh0LWdyYXktOTAwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHA6Ly8yMC4xOTguMTkuODEvbWF0Y2hfbWFraW5nL3RtcDcvJHtpdGVtLm5hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWyMwNTkyQzZdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVSZWRFeWVJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgIFRoZXJlIGlzIG5vIG1hdGNoIGZvdW5kLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVGlwc0FuZFVwZGF0ZXNJY29uIiwiQ2lyY3VsYXJQcm9ncmVzcyIsIlJlbW92ZVJlZEV5ZUljb24iLCJQYWdlIiwicmVzcG9uc2VEYXRhIiwibG9hZGVyIiwic2V0TG9hZGVyIiwic2V0UmVzcG9uc2VEYXRhIiwiUmVzcG9uc2VEYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlZFJlc3BvbnNlRGF0YSIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImxlbmd0aCIsInNwYW4iLCJVc2VyTmFtZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJhIiwiaHJlZiIsImZpbGVfcGF0aCIsInRhcmdldCIsInJlbCIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0ZCIsIm5hbWUiLCJtYXRjaFZhbHVlIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/recommendations/page.tsx\n"));

/***/ })

});