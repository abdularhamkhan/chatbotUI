"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-extension-gfm-strikethrough";
exports.ids = ["vendor-chunks/micromark-extension-gfm-strikethrough"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-extension-gfm-strikethrough/dev/lib/html.js":
/*!****************************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-strikethrough/dev/lib/html.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmStrikethroughHtml: () => (/* binding */ gfmStrikethroughHtml)\n/* harmony export */ });\n/**\n * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension\n */ /**\n * Create an HTML extension for `micromark` to support GFM strikethrough when\n * serializing to HTML.\n *\n * @returns {HtmlExtension}\n *   Extension for `micromark` that can be passed in `htmlExtensions`, to\n *   support GFM strikethrough when serializing to HTML.\n */ function gfmStrikethroughHtml() {\n    return {\n        enter: {\n            strikethrough () {\n                this.tag(\"<del>\");\n            }\n        },\n        exit: {\n            strikethrough () {\n                this.tag(\"</del>\");\n            }\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tc3RyaWtldGhyb3VnaC9kZXYvbGliL2h0bWwuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztDQUVDLEdBRUQ7Ozs7Ozs7Q0FPQyxHQUNNLFNBQVNBO0lBQ2QsT0FBTztRQUNMQyxPQUFPO1lBQ0xDO2dCQUNFLElBQUksQ0FBQ0MsR0FBRyxDQUFDO1lBQ1g7UUFDRjtRQUNBQyxNQUFNO1lBQ0pGO2dCQUNFLElBQUksQ0FBQ0MsR0FBRyxDQUFDO1lBQ1g7UUFDRjtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0Ym90LXVpLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLXN0cmlrZXRocm91Z2gvZGV2L2xpYi9odG1sLmpzP2RkNjEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkh0bWxFeHRlbnNpb259IEh0bWxFeHRlbnNpb25cbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhbiBIVE1MIGV4dGVuc2lvbiBmb3IgYG1pY3JvbWFya2AgdG8gc3VwcG9ydCBHRk0gc3RyaWtldGhyb3VnaCB3aGVuXG4gKiBzZXJpYWxpemluZyB0byBIVE1MLlxuICpcbiAqIEByZXR1cm5zIHtIdG1sRXh0ZW5zaW9ufVxuICogICBFeHRlbnNpb24gZm9yIGBtaWNyb21hcmtgIHRoYXQgY2FuIGJlIHBhc3NlZCBpbiBgaHRtbEV4dGVuc2lvbnNgLCB0b1xuICogICBzdXBwb3J0IEdGTSBzdHJpa2V0aHJvdWdoIHdoZW4gc2VyaWFsaXppbmcgdG8gSFRNTC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdmbVN0cmlrZXRocm91Z2hIdG1sKCkge1xuICByZXR1cm4ge1xuICAgIGVudGVyOiB7XG4gICAgICBzdHJpa2V0aHJvdWdoKCkge1xuICAgICAgICB0aGlzLnRhZygnPGRlbD4nKVxuICAgICAgfVxuICAgIH0sXG4gICAgZXhpdDoge1xuICAgICAgc3RyaWtldGhyb3VnaCgpIHtcbiAgICAgICAgdGhpcy50YWcoJzwvZGVsPicpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiZ2ZtU3RyaWtldGhyb3VnaEh0bWwiLCJlbnRlciIsInN0cmlrZXRocm91Z2giLCJ0YWciLCJleGl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-extension-gfm-strikethrough/dev/lib/html.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/micromark-extension-gfm-strikethrough/dev/lib/syntax.js":
/*!******************************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-strikethrough/dev/lib/syntax.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmStrikethrough: () => (/* binding */ gfmStrikethrough)\n/* harmony export */ });\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devlop */ \"(ssr)/./node_modules/devlop/lib/development.js\");\n/* harmony import */ var micromark_util_chunked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-chunked */ \"(ssr)/./node_modules/micromark-util-chunked/dev/index.js\");\n/* harmony import */ var micromark_util_classify_character__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! micromark-util-classify-character */ \"(ssr)/./node_modules/micromark-util-classify-character/dev/index.js\");\n/* harmony import */ var micromark_util_resolve_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-resolve-all */ \"(ssr)/./node_modules/micromark-util-resolve-all/index.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/codes.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/types.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/constants.js\");\n/**\n * @typedef {import('micromark-util-types').Event} Event\n * @typedef {import('micromark-util-types').Extension} Extension\n * @typedef {import('micromark-util-types').Resolver} Resolver\n * @typedef {import('micromark-util-types').State} State\n * @typedef {import('micromark-util-types').Token} Token\n * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext\n * @typedef {import('micromark-util-types').Tokenizer} Tokenizer\n *\n * @typedef Options\n *   Configuration (optional).\n * @property {boolean | null | undefined} [singleTilde=true]\n *   Whether to support strikethrough with a single tilde (default: `true`).\n *\n *   Single tildes work on github.com, but are technically prohibited by the\n *   GFM spec.\n */ \n\n\n\n\n/**\n * Create an extension for `micromark` to enable GFM strikethrough syntax.\n *\n * @param {Options | null | undefined} [options={}]\n *   Configuration.\n * @returns {Extension}\n *   Extension for `micromark` that can be passed in `extensions`, to\n *   enable GFM strikethrough syntax.\n */ function gfmStrikethrough(options) {\n    const options_ = options || {};\n    let single = options_.singleTilde;\n    const tokenizer = {\n        tokenize: tokenizeStrikethrough,\n        resolveAll: resolveAllStrikethrough\n    };\n    if (single === null || single === undefined) {\n        single = true;\n    }\n    return {\n        text: {\n            [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.tilde]: tokenizer\n        },\n        insideSpan: {\n            null: [\n                tokenizer\n            ]\n        },\n        attentionMarkers: {\n            null: [\n                micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.tilde\n            ]\n        }\n    };\n    /**\n   * Take events and resolve strikethrough.\n   *\n   * @type {Resolver}\n   */ function resolveAllStrikethrough(events, context) {\n        let index = -1;\n        // Walk through all events.\n        while(++index < events.length){\n            // Find a token that can close.\n            if (events[index][0] === \"enter\" && events[index][1].type === \"strikethroughSequenceTemporary\" && events[index][1]._close) {\n                let open = index;\n                // Now walk back to find an opener.\n                while(open--){\n                    // Find a token that can open the closer.\n                    if (events[open][0] === \"exit\" && events[open][1].type === \"strikethroughSequenceTemporary\" && events[open][1]._open && // If the sizes are the same:\n                    events[index][1].end.offset - events[index][1].start.offset === events[open][1].end.offset - events[open][1].start.offset) {\n                        events[index][1].type = \"strikethroughSequence\";\n                        events[open][1].type = \"strikethroughSequence\";\n                        /** @type {Token} */ const strikethrough = {\n                            type: \"strikethrough\",\n                            start: Object.assign({}, events[open][1].start),\n                            end: Object.assign({}, events[index][1].end)\n                        };\n                        /** @type {Token} */ const text = {\n                            type: \"strikethroughText\",\n                            start: Object.assign({}, events[open][1].end),\n                            end: Object.assign({}, events[index][1].start)\n                        };\n                        // Opening.\n                        /** @type {Array<Event>} */ const nextEvents = [\n                            [\n                                \"enter\",\n                                strikethrough,\n                                context\n                            ],\n                            [\n                                \"enter\",\n                                events[open][1],\n                                context\n                            ],\n                            [\n                                \"exit\",\n                                events[open][1],\n                                context\n                            ],\n                            [\n                                \"enter\",\n                                text,\n                                context\n                            ]\n                        ];\n                        const insideSpan = context.parser.constructs.insideSpan.null;\n                        if (insideSpan) {\n                            // Between.\n                            (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_1__.splice)(nextEvents, nextEvents.length, 0, (0,micromark_util_resolve_all__WEBPACK_IMPORTED_MODULE_2__.resolveAll)(insideSpan, events.slice(open + 1, index), context));\n                        }\n                        // Closing.\n                        (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_1__.splice)(nextEvents, nextEvents.length, 0, [\n                            [\n                                \"exit\",\n                                text,\n                                context\n                            ],\n                            [\n                                \"enter\",\n                                events[index][1],\n                                context\n                            ],\n                            [\n                                \"exit\",\n                                events[index][1],\n                                context\n                            ],\n                            [\n                                \"exit\",\n                                strikethrough,\n                                context\n                            ]\n                        ]);\n                        (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_1__.splice)(events, open - 1, index - open + 3, nextEvents);\n                        index = open + nextEvents.length - 2;\n                        break;\n                    }\n                }\n            }\n        }\n        index = -1;\n        while(++index < events.length){\n            if (events[index][1].type === \"strikethroughSequenceTemporary\") {\n                events[index][1].type = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.data;\n            }\n        }\n        return events;\n    }\n    /**\n   * @this {TokenizeContext}\n   * @type {Tokenizer}\n   */ function tokenizeStrikethrough(effects, ok, nok) {\n        const previous = this.previous;\n        const events = this.events;\n        let size = 0;\n        return start;\n        /** @type {State} */ function start(code) {\n            (0,devlop__WEBPACK_IMPORTED_MODULE_4__.ok)(code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.tilde, \"expected `~`\");\n            if (previous === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.tilde && events[events.length - 1][1].type !== micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.types.characterEscape) {\n                return nok(code);\n            }\n            effects.enter(\"strikethroughSequenceTemporary\");\n            return more(code);\n        }\n        /** @type {State} */ function more(code) {\n            const before = (0,micromark_util_classify_character__WEBPACK_IMPORTED_MODULE_5__.classifyCharacter)(previous);\n            if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.tilde) {\n                // If this is the third marker, exit.\n                if (size > 1) return nok(code);\n                effects.consume(code);\n                size++;\n                return more;\n            }\n            if (size < 2 && !single) return nok(code);\n            const token = effects.exit(\"strikethroughSequenceTemporary\");\n            const after = (0,micromark_util_classify_character__WEBPACK_IMPORTED_MODULE_5__.classifyCharacter)(code);\n            token._open = !after || after === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_6__.constants.attentionSideAfter && Boolean(before);\n            token._close = !before || before === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_6__.constants.attentionSideAfter && Boolean(after);\n            return ok(code);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tc3RyaWtldGhyb3VnaC9kZXYvbGliL3N5bnRheC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0NBZ0JDLEdBRWtDO0FBQ1U7QUFDc0I7QUFDZDtBQUNRO0FBRTdEOzs7Ozs7OztDQVFDLEdBQ00sU0FBU1EsaUJBQWlCQyxPQUFPO0lBQ3RDLE1BQU1DLFdBQVdELFdBQVcsQ0FBQztJQUM3QixJQUFJRSxTQUFTRCxTQUFTRSxXQUFXO0lBQ2pDLE1BQU1DLFlBQVk7UUFDaEJDLFVBQVVDO1FBQ1ZYLFlBQVlZO0lBQ2Q7SUFFQSxJQUFJTCxXQUFXLFFBQVFBLFdBQVdNLFdBQVc7UUFDM0NOLFNBQVM7SUFDWDtJQUVBLE9BQU87UUFDTE8sTUFBTTtZQUFDLENBQUNiLHdEQUFLQSxDQUFDYyxLQUFLLENBQUMsRUFBRU47UUFBUztRQUMvQk8sWUFBWTtZQUFDQyxNQUFNO2dCQUFDUjthQUFVO1FBQUE7UUFDOUJTLGtCQUFrQjtZQUFDRCxNQUFNO2dCQUFDaEIsd0RBQUtBLENBQUNjLEtBQUs7YUFBQztRQUFBO0lBQ3hDO0lBRUE7Ozs7R0FJQyxHQUNELFNBQVNILHdCQUF3Qk8sTUFBTSxFQUFFQyxPQUFPO1FBQzlDLElBQUlDLFFBQVEsQ0FBQztRQUViLDJCQUEyQjtRQUMzQixNQUFPLEVBQUVBLFFBQVFGLE9BQU9HLE1BQU0sQ0FBRTtZQUM5QiwrQkFBK0I7WUFDL0IsSUFDRUgsTUFBTSxDQUFDRSxNQUFNLENBQUMsRUFBRSxLQUFLLFdBQ3JCRixNQUFNLENBQUNFLE1BQU0sQ0FBQyxFQUFFLENBQUNFLElBQUksS0FBSyxvQ0FDMUJKLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLEVBQUUsQ0FBQ0csTUFBTSxFQUN2QjtnQkFDQSxJQUFJQyxPQUFPSjtnQkFFWCxtQ0FBbUM7Z0JBQ25DLE1BQU9JLE9BQVE7b0JBQ2IseUNBQXlDO29CQUN6QyxJQUNFTixNQUFN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VWhELDREQUFTQSxDQUFDaUQsa0JBQWtCLElBQUlDLFFBQVFOO1lBQy9ERSxNQUFNeEIsTUFBTSxHQUNWLENBQUNzQixVQUFXQSxXQUFXNUMsNERBQVNBLENBQUNpRCxrQkFBa0IsSUFBSUMsUUFBUUY7WUFDakUsT0FBT3RELEdBQUc4QztRQUNaO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXRib3QtdWkvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tc3RyaWtldGhyb3VnaC9kZXYvbGliL3N5bnRheC5qcz8zNjE4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5FdmVudH0gRXZlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuRXh0ZW5zaW9ufSBFeHRlbnNpb25cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuUmVzb2x2ZXJ9IFJlc29sdmVyXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlN0YXRlfSBTdGF0ZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlbn0gVG9rZW5cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5pemVDb250ZXh0fSBUb2tlbml6ZUNvbnRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5pemVyfSBUb2tlbml6ZXJcbiAqXG4gKiBAdHlwZWRlZiBPcHRpb25zXG4gKiAgIENvbmZpZ3VyYXRpb24gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtzaW5nbGVUaWxkZT10cnVlXVxuICogICBXaGV0aGVyIHRvIHN1cHBvcnQgc3RyaWtldGhyb3VnaCB3aXRoIGEgc2luZ2xlIHRpbGRlIChkZWZhdWx0OiBgdHJ1ZWApLlxuICpcbiAqICAgU2luZ2xlIHRpbGRlcyB3b3JrIG9uIGdpdGh1Yi5jb20sIGJ1dCBhcmUgdGVjaG5pY2FsbHkgcHJvaGliaXRlZCBieSB0aGVcbiAqICAgR0ZNIHNwZWMuXG4gKi9cblxuaW1wb3J0IHtvayBhcyBhc3NlcnR9IGZyb20gJ2RldmxvcCdcbmltcG9ydCB7c3BsaWNlfSBmcm9tICdtaWNyb21hcmstdXRpbC1jaHVua2VkJ1xuaW1wb3J0IHtjbGFzc2lmeUNoYXJhY3Rlcn0gZnJvbSAnbWljcm9tYXJrLXV0aWwtY2xhc3NpZnktY2hhcmFjdGVyJ1xuaW1wb3J0IHtyZXNvbHZlQWxsfSBmcm9tICdtaWNyb21hcmstdXRpbC1yZXNvbHZlLWFsbCdcbmltcG9ydCB7Y29kZXMsIGNvbnN0YW50cywgdHlwZXN9IGZyb20gJ21pY3JvbWFyay11dGlsLXN5bWJvbCdcblxuLyoqXG4gKiBDcmVhdGUgYW4gZXh0ZW5zaW9uIGZvciBgbWljcm9tYXJrYCB0byBlbmFibGUgR0ZNIHN0cmlrZXRocm91Z2ggc3ludGF4LlxuICpcbiAqIEBwYXJhbSB7T3B0aW9ucyB8IG51bGwgfCB1bmRlZmluZWR9IFtvcHRpb25zPXt9XVxuICogICBDb25maWd1cmF0aW9uLlxuICogQHJldHVybnMge0V4dGVuc2lvbn1cbiAqICAgRXh0ZW5zaW9uIGZvciBgbWljcm9tYXJrYCB0aGF0IGNhbiBiZSBwYXNzZWQgaW4gYGV4dGVuc2lvbnNgLCB0b1xuICogICBlbmFibGUgR0ZNIHN0cmlrZXRocm91Z2ggc3ludGF4LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2ZtU3RyaWtldGhyb3VnaChvcHRpb25zKSB7XG4gIGNvbnN0IG9wdGlvbnNfID0gb3B0aW9ucyB8fCB7fVxuICBsZXQgc2luZ2xlID0gb3B0aW9uc18uc2luZ2xlVGlsZGVcbiAgY29uc3QgdG9rZW5pemVyID0ge1xuICAgIHRva2VuaXplOiB0b2tlbml6ZVN0cmlrZXRocm91Z2gsXG4gICAgcmVzb2x2ZUFsbDogcmVzb2x2ZUFsbFN0cmlrZXRocm91Z2hcbiAgfVxuXG4gIGlmIChzaW5nbGUgPT09IG51bGwgfHwgc2luZ2xlID09PSB1bmRlZmluZWQpIHtcbiAgICBzaW5nbGUgPSB0cnVlXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRleHQ6IHtbY29kZXMudGlsZGVdOiB0b2tlbml6ZXJ9LFxuICAgIGluc2lkZVNwYW46IHtudWxsOiBbdG9rZW5pemVyXX0sXG4gICAgYXR0ZW50aW9uTWFya2Vyczoge251bGw6IFtjb2Rlcy50aWxkZV19XG4gIH1cblxuICAvKipcbiAgICogVGFrZSBldmVudHMgYW5kIHJlc29sdmUgc3RyaWtldGhyb3VnaC5cbiAgICpcbiAgICogQHR5cGUge1Jlc29sdmVyfVxuICAgKi9cbiAgZnVuY3Rpb24gcmVzb2x2ZUFsbFN0cmlrZXRocm91Z2goZXZlbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IGluZGV4ID0gLTFcblxuICAgIC8vIFdhbGsgdGhyb3VnaCBhbGwgZXZlbnRzLlxuICAgIHdoaWxlICgrK2luZGV4IDwgZXZlbnRzLmxlbmd0aCkge1xuICAgICAgLy8gRmluZCBhIHRva2VuIHRoYXQgY2FuIGNsb3NlLlxuICAgICAgaWYgKFxuICAgICAgICBldmVudHNbaW5kZXhdWzBdID09PSAnZW50ZXInICYmXG4gICAgICAgIGV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ3N0cmlrZXRocm91Z2hTZXF1ZW5jZVRlbXBvcmFyeScgJiZcbiAgICAgICAgZXZlbnRzW2luZGV4XVsxXS5fY2xvc2VcbiAgICAgICkge1xuICAgICAgICBsZXQgb3BlbiA9IGluZGV4XG5cbiAgICAgICAgLy8gTm93IHdhbGsgYmFjayB0byBmaW5kIGFuIG9wZW5lci5cbiAgICAgICAgd2hpbGUgKG9wZW4tLSkge1xuICAgICAgICAgIC8vIEZpbmQgYSB0b2tlbiB0aGF0IGNhbiBvcGVuIHRoZSBjbG9zZXIuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZXZlbnRzW29wZW5dWzBdID09PSAnZXhpdCcgJiZcbiAgICAgICAgICAgIGV2ZW50c1tvcGVuXVsxXS50eXBlID09PSAnc3RyaWtldGhyb3VnaFNlcXVlbmNlVGVtcG9yYXJ5JyAmJlxuICAgICAgICAgICAgZXZlbnRzW29wZW5dWzFdLl9vcGVuICYmXG4gICAgICAgICAgICAvLyBJZiB0aGUgc2l6ZXMgYXJlIHRoZSBzYW1lOlxuICAgICAgICAgICAgZXZlbnRzW2luZGV4XVsxXS5lbmQub2Zmc2V0IC0gZXZlbnRzW2luZGV4XVsxXS5zdGFydC5vZmZzZXQgPT09XG4gICAgICAgICAgICAgIGV2ZW50c1tvcGVuXVsxXS5lbmQub2Zmc2V0IC0gZXZlbnRzW29wZW5dWzFdLnN0YXJ0Lm9mZnNldFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZXZlbnRzW2luZGV4XVsxXS50eXBlID0gJ3N0cmlrZXRocm91Z2hTZXF1ZW5jZSdcbiAgICAgICAgICAgIGV2ZW50c1tvcGVuXVsxXS50eXBlID0gJ3N0cmlrZXRocm91Z2hTZXF1ZW5jZSdcblxuICAgICAgICAgICAgLyoqIEB0eXBlIHtUb2tlbn0gKi9cbiAgICAgICAgICAgIGNvbnN0IHN0cmlrZXRocm91Z2ggPSB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdHJpa2V0aHJvdWdoJyxcbiAgICAgICAgICAgICAgc3RhcnQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50c1tvcGVuXVsxXS5zdGFydCksXG4gICAgICAgICAgICAgIGVuZDogT2JqZWN0LmFzc2lnbih7fSwgZXZlbnRzW2luZGV4XVsxXS5lbmQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKiBAdHlwZSB7VG9rZW59ICovXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0ge1xuICAgICAgICAgICAgICB0eXBlOiAnc3RyaWtldGhyb3VnaFRleHQnLFxuICAgICAgICAgICAgICBzdGFydDogT2JqZWN0LmFzc2lnbih7fSwgZXZlbnRzW29wZW5dWzFdLmVuZCksXG4gICAgICAgICAgICAgIGVuZDogT2JqZWN0LmFzc2lnbih7fSwgZXZlbnRzW2luZGV4XVsxXS5zdGFydClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3BlbmluZy5cbiAgICAgICAgICAgIC8qKiBAdHlwZSB7QXJyYXk8RXZlbnQ+fSAqL1xuICAgICAgICAgICAgY29uc3QgbmV4dEV2ZW50cyA9IFtcbiAgICAgICAgICAgICAgWydlbnRlcicsIHN0cmlrZXRocm91Z2gsIGNvbnRleHRdLFxuICAgICAgICAgICAgICBbJ2VudGVyJywgZXZlbnRzW29wZW5dWzFdLCBjb250ZXh0XSxcbiAgICAgICAgICAgICAgWydleGl0JywgZXZlbnRzW29wZW5dWzFdLCBjb250ZXh0XSxcbiAgICAgICAgICAgICAgWydlbnRlcicsIHRleHQsIGNvbnRleHRdXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIGNvbnN0IGluc2lkZVNwYW4gPSBjb250ZXh0LnBhcnNlci5jb25zdHJ1Y3RzLmluc2lkZVNwYW4ubnVsbFxuXG4gICAgICAgICAgICBpZiAoaW5zaWRlU3Bhbikge1xuICAgICAgICAgICAgICAvLyBCZXR3ZWVuLlxuICAgICAgICAgICAgICBzcGxpY2UoXG4gICAgICAgICAgICAgICAgbmV4dEV2ZW50cyxcbiAgICAgICAgICAgICAgICBuZXh0RXZlbnRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIHJlc29sdmVBbGwoaW5zaWRlU3BhbiwgZXZlbnRzLnNsaWNlKG9wZW4gKyAxLCBpbmRleCksIGNvbnRleHQpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2xvc2luZy5cbiAgICAgICAgICAgIHNwbGljZShuZXh0RXZlbnRzLCBuZXh0RXZlbnRzLmxlbmd0aCwgMCwgW1xuICAgICAgICAgICAgICBbJ2V4aXQnLCB0ZXh0LCBjb250ZXh0XSxcbiAgICAgICAgICAgICAgWydlbnRlcicsIGV2ZW50c1tpbmRleF1bMV0sIGNvbnRleHRdLFxuICAgICAgICAgICAgICBbJ2V4aXQnLCBldmVudHNbaW5kZXhdWzFdLCBjb250ZXh0XSxcbiAgICAgICAgICAgICAgWydleGl0Jywgc3RyaWtldGhyb3VnaCwgY29udGV4dF1cbiAgICAgICAgICAgIF0pXG5cbiAgICAgICAgICAgIHNwbGljZShldmVudHMsIG9wZW4gLSAxLCBpbmRleCAtIG9wZW4gKyAzLCBuZXh0RXZlbnRzKVxuXG4gICAgICAgICAgICBpbmRleCA9IG9wZW4gKyBuZXh0RXZlbnRzLmxlbmd0aCAtIDJcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5kZXggPSAtMVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBldmVudHMubGVuZ3RoKSB7XG4gICAgICBpZiAoZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAnc3RyaWtldGhyb3VnaFNlcXVlbmNlVGVtcG9yYXJ5Jykge1xuICAgICAgICBldmVudHNbaW5kZXhdWzFdLnR5cGUgPSB0eXBlcy5kYXRhXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGV2ZW50c1xuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gICAqIEB0eXBlIHtUb2tlbml6ZXJ9XG4gICAqL1xuICBmdW5jdGlvbiB0b2tlbml6ZVN0cmlrZXRocm91Z2goZWZmZWN0cywgb2ssIG5vaykge1xuICAgIGNvbnN0IHByZXZpb3VzID0gdGhpcy5wcmV2aW91c1xuICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuZXZlbnRzXG4gICAgbGV0IHNpemUgPSAwXG5cbiAgICByZXR1cm4gc3RhcnRcblxuICAgIC8qKiBAdHlwZSB7U3RhdGV9ICovXG4gICAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgICAgYXNzZXJ0KGNvZGUgPT09IGNvZGVzLnRpbGRlLCAnZXhwZWN0ZWQgYH5gJylcblxuICAgICAgaWYgKFxuICAgICAgICBwcmV2aW91cyA9PT0gY29kZXMudGlsZGUgJiZcbiAgICAgICAgZXZlbnRzW2V2ZW50cy5sZW5ndGggLSAxXVsxXS50eXBlICE9PSB0eXBlcy5jaGFyYWN0ZXJFc2NhcGVcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgICB9XG5cbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3N0cmlrZXRocm91Z2hTZXF1ZW5jZVRlbXBvcmFyeScpXG4gICAgICByZXR1cm4gbW9yZShjb2RlKVxuICAgIH1cblxuICAgIC8qKiBAdHlwZSB7U3RhdGV9ICovXG4gICAgZnVuY3Rpb24gbW9yZShjb2RlKSB7XG4gICAgICBjb25zdCBiZWZvcmUgPSBjbGFzc2lmeUNoYXJhY3RlcihwcmV2aW91cylcblxuICAgICAgaWYgKGNvZGUgPT09IGNvZGVzLnRpbGRlKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgdGhlIHRoaXJkIG1hcmtlciwgZXhpdC5cbiAgICAgICAgaWYgKHNpemUgPiAxKSByZXR1cm4gbm9rKGNvZGUpXG4gICAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgICBzaXplKytcbiAgICAgICAgcmV0dXJuIG1vcmVcbiAgICAgIH1cblxuICAgICAgaWYgKHNpemUgPCAyICYmICFzaW5nbGUpIHJldHVybiBub2soY29kZSlcbiAgICAgIGNvbnN0IHRva2VuID0gZWZmZWN0cy5leGl0KCdzdHJpa2V0aHJvdWdoU2VxdWVuY2VUZW1wb3JhcnknKVxuICAgICAgY29uc3QgYWZ0ZXIgPSBjbGFzc2lmeUNoYXJhY3Rlcihjb2RlKVxuICAgICAgdG9rZW4uX29wZW4gPVxuICAgICAgICAhYWZ0ZXIgfHwgKGFmdGVyID09PSBjb25zdGFudHMuYXR0ZW50aW9uU2lkZUFmdGVyICYmIEJvb2xlYW4oYmVmb3JlKSlcbiAgICAgIHRva2VuLl9jbG9zZSA9XG4gICAgICAgICFiZWZvcmUgfHwgKGJlZm9yZSA9PT0gY29uc3RhbnRzLmF0dGVudGlvblNpZGVBZnRlciAmJiBCb29sZWFuKGFmdGVyKSlcbiAgICAgIHJldHVybiBvayhjb2RlKVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIm9rIiwiYXNzZXJ0Iiwic3BsaWNlIiwiY2xhc3NpZnlDaGFyYWN0ZXIiLCJyZXNvbHZlQWxsIiwiY29kZXMiLCJjb25zdGFudHMiLCJ0eXBlcyIsImdmbVN0cmlrZXRocm91Z2giLCJvcHRpb25zIiwib3B0aW9uc18iLCJzaW5nbGUiLCJzaW5nbGVUaWxkZSIsInRva2VuaXplciIsInRva2VuaXplIiwidG9rZW5pemVTdHJpa2V0aHJvdWdoIiwicmVzb2x2ZUFsbFN0cmlrZXRocm91Z2giLCJ1bmRlZmluZWQiLCJ0ZXh0IiwidGlsZGUiLCJpbnNpZGVTcGFuIiwibnVsbCIsImF0dGVudGlvbk1hcmtlcnMiLCJldmVudHMiLCJjb250ZXh0IiwiaW5kZXgiLCJsZW5ndGgiLCJ0eXBlIiwiX2Nsb3NlIiwib3BlbiIsIl9vcGVuIiwiZW5kIiwib2Zmc2V0Iiwic3RhcnQiLCJzdHJpa2V0aHJvdWdoIiwiT2JqZWN0IiwiYXNzaWduIiwibmV4dEV2ZW50cyIsInBhcnNlciIsImNvbnN0cnVjdHMiLCJzbGljZSIsImRhdGEiLCJlZmZlY3RzIiwibm9rIiwicHJldmlvdXMiLCJzaXplIiwiY29kZSIsImNoYXJhY3RlckVzY2FwZSIsImVudGVyIiwibW9yZSIsImJlZm9yZSIsImNvbnN1bWUiLCJ0b2tlbiIsImV4aXQiLCJhZnRlciIsImF0dGVudGlvblNpZGVBZnRlciIsIkJvb2xlYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-extension-gfm-strikethrough/dev/lib/syntax.js\n");

/***/ })

};
;