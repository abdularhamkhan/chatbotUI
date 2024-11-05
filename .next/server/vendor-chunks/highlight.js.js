"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/highlight.js";
exports.ids = ["vendor-chunks/highlight.js"];
exports.modules = {

/***/ "(ssr)/./node_modules/highlight.js/lib/languages/profile.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/profile.js ***!
  \************************************************************/
/***/ ((module) => {

eval("/*\nLanguage: Python profiler\nDescription: Python profiler results\nAuthor: Brian Beck <exogen@gmail.com>\n*/ \nfunction profile(hljs) {\n    return {\n        name: \"Python profiler\",\n        contains: [\n            hljs.C_NUMBER_MODE,\n            {\n                begin: \"[a-zA-Z_][\\\\da-zA-Z_]+\\\\.[\\\\da-zA-Z_]{1,3}\",\n                end: \":\",\n                excludeEnd: true\n            },\n            {\n                begin: \"(ncalls|tottime|cumtime)\",\n                end: \"$\",\n                keywords: \"ncalls tottime|10 cumtime|10 filename\",\n                relevance: 10\n            },\n            {\n                begin: \"function calls\",\n                end: \"$\",\n                contains: [\n                    hljs.C_NUMBER_MODE\n                ],\n                relevance: 10\n            },\n            hljs.APOS_STRING_MODE,\n            hljs.QUOTE_STRING_MODE,\n            {\n                className: \"string\",\n                begin: \"\\\\(\",\n                end: \"\\\\)$\",\n                excludeBegin: true,\n                excludeEnd: true,\n                relevance: 0\n            }\n        ]\n    };\n}\nmodule.exports = profile;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcHJvZmlsZS5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7OztBQUlBO0FBRUEsU0FBU0EsUUFBUUMsSUFBSTtJQUNuQixPQUFPO1FBQ0xDLE1BQU07UUFDTkMsVUFBVTtZQUNSRixLQUFLRyxhQUFhO1lBQ2xCO2dCQUNFQyxPQUFPO2dCQUNQQyxLQUFLO2dCQUNMQyxZQUFZO1lBQ2Q7WUFDQTtnQkFDRUYsT0FBTztnQkFDUEMsS0FBSztnQkFDTEUsVUFBVTtnQkFDVkMsV0FBVztZQUNiO1lBQ0E7Z0JBQ0VKLE9BQU87Z0JBQ1BDLEtBQUs7Z0JBQ0xILFVBQVU7b0JBQUVGLEtBQUtHLGFBQWE7aUJBQUU7Z0JBQ2hDSyxXQUFXO1lBQ2I7WUFDQVIsS0FBS1MsZ0JBQWdCO1lBQ3JCVCxLQUFLVSxpQkFBaUI7WUFDdEI7Z0JBQ0VDLFdBQVc7Z0JBQ1hQLE9BQU87Z0JBQ1BDLEtBQUs7Z0JBQ0xPLGNBQWM7Z0JBQ2ROLFlBQVk7Z0JBQ1pFLFdBQVc7WUFDYjtTQUNEO0lBQ0g7QUFDRjtBQUVBSyxPQUFPQyxPQUFPLEdBQUdmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdGJvdC11aS8uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9wcm9maWxlLmpzPzhjNjYiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBQeXRob24gcHJvZmlsZXJcbkRlc2NyaXB0aW9uOiBQeXRob24gcHJvZmlsZXIgcmVzdWx0c1xuQXV0aG9yOiBCcmlhbiBCZWNrIDxleG9nZW5AZ21haWwuY29tPlxuKi9cblxuZnVuY3Rpb24gcHJvZmlsZShobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1B5dGhvbiBwcm9maWxlcicsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdbYS16QS1aX11bXFxcXGRhLXpBLVpfXStcXFxcLltcXFxcZGEtekEtWl9dezEsM30nLFxuICAgICAgICBlbmQ6ICc6JyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICcobmNhbGxzfHRvdHRpbWV8Y3VtdGltZSknLFxuICAgICAgICBlbmQ6ICckJyxcbiAgICAgICAga2V5d29yZHM6ICduY2FsbHMgdG90dGltZXwxMCBjdW10aW1lfDEwIGZpbGVuYW1lJyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdmdW5jdGlvbiBjYWxscycsXG4gICAgICAgIGVuZDogJyQnLFxuICAgICAgICBjb250YWluczogWyBobGpzLkNfTlVNQkVSX01PREUgXSxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAnXFxcXCgnLFxuICAgICAgICBlbmQ6ICdcXFxcKSQnLFxuICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwcm9maWxlO1xuIl0sIm5hbWVzIjpbInByb2ZpbGUiLCJobGpzIiwibmFtZSIsImNvbnRhaW5zIiwiQ19OVU1CRVJfTU9ERSIsImJlZ2luIiwiZW5kIiwiZXhjbHVkZUVuZCIsImtleXdvcmRzIiwicmVsZXZhbmNlIiwiQVBPU19TVFJJTkdfTU9ERSIsIlFVT1RFX1NUUklOR19NT0RFIiwiY2xhc3NOYW1lIiwiZXhjbHVkZUJlZ2luIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/highlight.js/lib/languages/profile.js\n");

/***/ })

};
;