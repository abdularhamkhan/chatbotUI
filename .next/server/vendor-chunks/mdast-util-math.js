"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-math";
exports.ids = ["vendor-chunks/mdast-util-math"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-math/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/mdast-util-math/lib/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mathFromMarkdown: () => (/* binding */ mathFromMarkdown),\n/* harmony export */   mathToMarkdown: () => (/* binding */ mathToMarkdown)\n/* harmony export */ });\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ \"(ssr)/./node_modules/devlop/lib/development.js\");\n/* harmony import */ var longest_streak__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! longest-streak */ \"(ssr)/./node_modules/longest-streak/index.js\");\n/**\n * @typedef {import('hast').Element} HastElement\n * @typedef {import('hast').ElementContent} HastElementContent\n * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext\n * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension\n * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle\n * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle\n * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension\n * @typedef {import('../index.js').InlineMath} InlineMath\n * @typedef {import('../index.js').Math} Math\n *\n * @typedef ToOptions\n *   Configuration.\n * @property {boolean | null | undefined} [singleDollarTextMath=true]\n *   Whether to support math (text) with a single dollar (default: `true`).\n *\n *   Single dollars work in Pandoc and many other places, but often interfere\n *   with “normal” dollars in text.\n *   If you turn this off, you can still use two or more dollars for text math.\n */ \n\n/**\n * Create an extension for `mdast-util-from-markdown`.\n *\n * @returns {FromMarkdownExtension}\n *   Extension for `mdast-util-from-markdown`.\n */ function mathFromMarkdown() {\n    return {\n        enter: {\n            mathFlow: enterMathFlow,\n            mathFlowFenceMeta: enterMathFlowMeta,\n            mathText: enterMathText\n        },\n        exit: {\n            mathFlow: exitMathFlow,\n            mathFlowFence: exitMathFlowFence,\n            mathFlowFenceMeta: exitMathFlowMeta,\n            mathFlowValue: exitMathData,\n            mathText: exitMathText,\n            mathTextData: exitMathData\n        }\n    };\n    /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */ function enterMathFlow(token) {\n        /** @type {HastElement} */ const code = {\n            type: \"element\",\n            tagName: \"code\",\n            properties: {\n                className: [\n                    \"language-math\",\n                    \"math-display\"\n                ]\n            },\n            children: []\n        };\n        this.enter({\n            type: \"math\",\n            meta: null,\n            value: \"\",\n            data: {\n                hName: \"pre\",\n                hChildren: [\n                    code\n                ]\n            }\n        }, token);\n    }\n    /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */ function enterMathFlowMeta() {\n        this.buffer();\n    }\n    /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */ function exitMathFlowMeta() {\n        const data = this.resume();\n        const node = this.stack[this.stack.length - 1];\n        (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(node.type === \"math\");\n        node.meta = data;\n    }\n    /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */ function exitMathFlowFence() {\n        // Exit if this is the closing fence.\n        if (this.data.mathFlowInside) return;\n        this.buffer();\n        this.data.mathFlowInside = true;\n    }\n    /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */ function exitMathFlow(token) {\n        const data = this.resume().replace(/^(\\r?\\n|\\r)|(\\r?\\n|\\r)$/g, \"\");\n        const node = this.stack[this.stack.length - 1];\n        (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(node.type === \"math\");\n        this.exit(token);\n        node.value = data;\n        // @ts-expect-error: we defined it in `enterMathFlow`.\n        const code = /** @type {HastElement} */ node.data.hChildren[0];\n        (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(code.type === \"element\");\n        (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(code.tagName === \"code\");\n        code.children.push({\n            type: \"text\",\n            value: data\n        });\n        this.data.mathFlowInside = undefined;\n    }\n    /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */ function enterMathText(token) {\n        this.enter({\n            type: \"inlineMath\",\n            value: \"\",\n            data: {\n                hName: \"code\",\n                hProperties: {\n                    className: [\n                        \"language-math\",\n                        \"math-inline\"\n                    ]\n                },\n                hChildren: []\n            }\n        }, token);\n        this.buffer();\n    }\n    /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */ function exitMathText(token) {\n        const data = this.resume();\n        const node = this.stack[this.stack.length - 1];\n        (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(node.type === \"inlineMath\");\n        this.exit(token);\n        node.value = data;\n        const children = /** @type {Array<HastElementContent>} */ // @ts-expect-error: we defined it in `enterMathFlow`.\n        node.data.hChildren;\n        children.push({\n            type: \"text\",\n            value: data\n        });\n    }\n    /**\n   * @this {CompileContext}\n   * @type {FromMarkdownHandle}\n   */ function exitMathData(token) {\n        this.config.enter.data.call(this, token);\n        this.config.exit.data.call(this, token);\n    }\n}\n/**\n * Create an extension for `mdast-util-to-markdown`.\n *\n * @param {ToOptions | null | undefined} [options]\n *   Configuration (optional).\n * @returns {ToMarkdownExtension}\n *   Extension for `mdast-util-to-markdown`.\n */ function mathToMarkdown(options) {\n    let single = (options || {}).singleDollarTextMath;\n    if (single === null || single === undefined) {\n        single = true;\n    }\n    inlineMath.peek = inlineMathPeek;\n    return {\n        unsafe: [\n            {\n                character: \"\\r\",\n                inConstruct: \"mathFlowMeta\"\n            },\n            {\n                character: \"\\n\",\n                inConstruct: \"mathFlowMeta\"\n            },\n            {\n                character: \"$\",\n                after: single ? undefined : \"\\\\$\",\n                inConstruct: \"phrasing\"\n            },\n            {\n                character: \"$\",\n                inConstruct: \"mathFlowMeta\"\n            },\n            {\n                atBreak: true,\n                character: \"$\",\n                after: \"\\\\$\"\n            }\n        ],\n        handlers: {\n            math,\n            inlineMath\n        }\n    };\n    /**\n   * @type {ToMarkdownHandle}\n   * @param {Math} node\n   */ // Note: fixing this code? Please also fix the similar code for code:\n    // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/main/lib/handle/code.js>\n    function math(node, _, state, info) {\n        const raw = node.value || \"\";\n        const tracker = state.createTracker(info);\n        const sequence = \"$\".repeat(Math.max((0,longest_streak__WEBPACK_IMPORTED_MODULE_1__.longestStreak)(raw, \"$\") + 1, 2));\n        const exit = state.enter(\"mathFlow\");\n        let value = tracker.move(sequence);\n        if (node.meta) {\n            const subexit = state.enter(\"mathFlowMeta\");\n            value += tracker.move(state.safe(node.meta, {\n                after: \"\\n\",\n                before: value,\n                encode: [\n                    \"$\"\n                ],\n                ...tracker.current()\n            }));\n            subexit();\n        }\n        value += tracker.move(\"\\n\");\n        if (raw) {\n            value += tracker.move(raw + \"\\n\");\n        }\n        value += tracker.move(sequence);\n        exit();\n        return value;\n    }\n    /**\n   * @type {ToMarkdownHandle}\n   * @param {InlineMath} node\n   */ // Note: fixing this code? Please also fix the similar code for inline code:\n    // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/main/lib/handle/inline-code.js>\n    function inlineMath(node, _, state) {\n        let value = node.value || \"\";\n        let size = 1;\n        if (!single) size++;\n        // If there is a single dollar sign on its own in the math, use a fence of\n        // two.\n        // If there are two in a row, use one.\n        while(new RegExp(\"(^|[^$])\" + \"\\\\$\".repeat(size) + \"([^$]|$)\").test(value)){\n            size++;\n        }\n        const sequence = \"$\".repeat(size);\n        // If this is not just spaces or eols (tabs don’t count), and either the\n        // first and last character are a space or eol, or the first or last\n        // character are dollar signs, then pad with spaces.\n        if (// Contains non-space.\n        /[^ \\r\\n]/.test(value) && // Starts with space and ends with space.\n        (/^[ \\r\\n]/.test(value) && /[ \\r\\n]$/.test(value) || // Starts or ends with dollar.\n        /^\\$|\\$$/.test(value))) {\n            value = \" \" + value + \" \";\n        }\n        let index = -1;\n        // We have a potential problem: certain characters after eols could result in\n        // blocks being seen.\n        // For example, if someone injected the string `'\\n# b'`, then that would\n        // result in an ATX heading.\n        // We can’t escape characters in `inlineMath`, but because eols are\n        // transformed to spaces when going from markdown to HTML anyway, we can swap\n        // them out.\n        while(++index < state.unsafe.length){\n            const pattern = state.unsafe[index];\n            // Only look for `atBreak`s.\n            // Btw: note that `atBreak` patterns will always start the regex at LF or\n            // CR.\n            if (!pattern.atBreak) continue;\n            const expression = state.compilePattern(pattern);\n            /** @type {RegExpExecArray | null} */ let match;\n            while(match = expression.exec(value)){\n                let position = match.index;\n                // Support CRLF (patterns only look for one of the characters).\n                if (value.codePointAt(position) === 10 /* `\\n` */  && value.codePointAt(position - 1) === 13 /* `\\r` */ ) {\n                    position--;\n                }\n                value = value.slice(0, position) + \" \" + value.slice(match.index + 1);\n            }\n        }\n        return sequence + value + sequence;\n    }\n    /**\n   * @returns {string}\n   */ function inlineMathPeek() {\n        return \"$\";\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1tYXRoL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FtQkMsR0FFa0M7QUFDUztBQUU1Qzs7Ozs7Q0FLQyxHQUNNLFNBQVNHO0lBQ2QsT0FBTztRQUNMQyxPQUFPO1lBQ0xDLFVBQVVDO1lBQ1ZDLG1CQUFtQkM7WUFDbkJDLFVBQVVDO1FBQ1o7UUFDQUMsTUFBTTtZQUNKTixVQUFVTztZQUNWQyxlQUFlQztZQUNmUCxtQkFBbUJRO1lBQ25CQyxlQUFlQztZQUNmUixVQUFVUztZQUNWQyxjQUFjRjtRQUNoQjtJQUNGO0lBRUE7OztHQUdDLEdBQ0QsU0FBU1gsY0FBY2MsS0FBSztRQUMxQix3QkFBd0IsR0FDeEIsTUFBTUMsT0FBTztZQUNYQyxNQUFNO1lBQ05DLFNBQVM7WUFDVEMsWUFBWTtnQkFBQ0MsV0FBVztvQkFBQztvQkFBaUI7aUJBQWU7WUFBQTtZQUN6REMsVUFBVSxFQUFFO1FBQ2Q7UUFDQSxJQUFJLENBQUN0QixLQUFLLENBQ1I7WUFDRWtCLE1BQU07WUFDTkssTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07Z0JBQUNDLE9BQU87Z0JBQU9DLFdBQVc7b0JBQUNWO2lCQUFLO1lBQUE7UUFDeEMsR0FDQUQ7SUFFSjtJQUVBOzs7R0FHQyxHQUNELFNBQVNaO1FBQ1AsSUFBSSxDQUFDd0IsTUFBTTtJQUNiO0lBRUE7OztHQUdDLEdBQ0QsU0FBU2pCO1FBQ1AsTUFBTWMsT0FBTyxJQUFJLENBQUNJLE1BQU07UUFDeEIsTUFBTUMsT0FBTyxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUNBLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7UUFDOUNuQywwQ0FBTUEsQ0FBQ2lDLEtBQUtaLElBQUksS0FBSztRQUNyQlksS0FBS1AsSUFBSSxHQUFHRTtJQUNkO0lBRUE7OztHQUdDLEdBQ0QsU0FBU2Y7UUFDUCxxQ0FBcUM7UUFDckMsSUFBSSxJ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QyxHQUFHRixZQUFZLE1BQU12RCxNQUFNeUQsS0FBSyxDQUFDSixNQUFNSixLQUFLLEdBQUc7WUFDckU7UUFDRjtRQUVBLE9BQU9iLFdBQVdwQyxRQUFRb0M7SUFDNUI7SUFFQTs7R0FFQyxHQUNELFNBQVNkO1FBQ1AsT0FBTztJQUNUO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0Ym90LXVpLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtbWF0aC9saWIvaW5kZXguanM/MGZhMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5FbGVtZW50fSBIYXN0RWxlbWVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLkVsZW1lbnRDb250ZW50fSBIYXN0RWxlbWVudENvbnRlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bicpLkNvbXBpbGVDb250ZXh0fSBDb21waWxlQ29udGV4dFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duJykuRXh0ZW5zaW9ufSBGcm9tTWFya2Rvd25FeHRlbnNpb25cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bicpLkhhbmRsZX0gRnJvbU1hcmtkb3duSGFuZGxlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLXRvLW1hcmtkb3duJykuSGFuZGxlfSBUb01hcmtkb3duSGFuZGxlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLXRvLW1hcmtkb3duJykuT3B0aW9uc30gVG9NYXJrZG93bkV4dGVuc2lvblxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW5kZXguanMnKS5JbmxpbmVNYXRofSBJbmxpbmVNYXRoXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbmRleC5qcycpLk1hdGh9IE1hdGhcbiAqXG4gKiBAdHlwZWRlZiBUb09wdGlvbnNcbiAqICAgQ29uZmlndXJhdGlvbi5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtzaW5nbGVEb2xsYXJUZXh0TWF0aD10cnVlXVxuICogICBXaGV0aGVyIHRvIHN1cHBvcnQgbWF0aCAodGV4dCkgd2l0aCBhIHNpbmdsZSBkb2xsYXIgKGRlZmF1bHQ6IGB0cnVlYCkuXG4gKlxuICogICBTaW5nbGUgZG9sbGFycyB3b3JrIGluIFBhbmRvYyBhbmQgbWFueSBvdGhlciBwbGFjZXMsIGJ1dCBvZnRlbiBpbnRlcmZlcmVcbiAqICAgd2l0aCDigJxub3JtYWzigJ0gZG9sbGFycyBpbiB0ZXh0LlxuICogICBJZiB5b3UgdHVybiB0aGlzIG9mZiwgeW91IGNhbiBzdGlsbCB1c2UgdHdvIG9yIG1vcmUgZG9sbGFycyBmb3IgdGV4dCBtYXRoLlxuICovXG5cbmltcG9ydCB7b2sgYXMgYXNzZXJ0fSBmcm9tICdkZXZsb3AnXG5pbXBvcnQge2xvbmdlc3RTdHJlYWt9IGZyb20gJ2xvbmdlc3Qtc3RyZWFrJ1xuXG4vKipcbiAqIENyZWF0ZSBhbiBleHRlbnNpb24gZm9yIGBtZGFzdC11dGlsLWZyb20tbWFya2Rvd25gLlxuICpcbiAqIEByZXR1cm5zIHtGcm9tTWFya2Rvd25FeHRlbnNpb259XG4gKiAgIEV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtZnJvbS1tYXJrZG93bmAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXRoRnJvbU1hcmtkb3duKCkge1xuICByZXR1cm4ge1xuICAgIGVudGVyOiB7XG4gICAgICBtYXRoRmxvdzogZW50ZXJNYXRoRmxvdyxcbiAgICAgIG1hdGhGbG93RmVuY2VNZXRhOiBlbnRlck1hdGhGbG93TWV0YSxcbiAgICAgIG1hdGhUZXh0OiBlbnRlck1hdGhUZXh0XG4gICAgfSxcbiAgICBleGl0OiB7XG4gICAgICBtYXRoRmxvdzogZXhpdE1hdGhGbG93LFxuICAgICAgbWF0aEZsb3dGZW5jZTogZXhpdE1hdGhGbG93RmVuY2UsXG4gICAgICBtYXRoRmxvd0ZlbmNlTWV0YTogZXhpdE1hdGhGbG93TWV0YSxcbiAgICAgIG1hdGhGbG93VmFsdWU6IGV4aXRNYXRoRGF0YSxcbiAgICAgIG1hdGhUZXh0OiBleGl0TWF0aFRleHQsXG4gICAgICBtYXRoVGV4dERhdGE6IGV4aXRNYXRoRGF0YVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gICAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gICAqL1xuICBmdW5jdGlvbiBlbnRlck1hdGhGbG93KHRva2VuKSB7XG4gICAgLyoqIEB0eXBlIHtIYXN0RWxlbWVudH0gKi9cbiAgICBjb25zdCBjb2RlID0ge1xuICAgICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgICAgdGFnTmFtZTogJ2NvZGUnLFxuICAgICAgcHJvcGVydGllczoge2NsYXNzTmFtZTogWydsYW5ndWFnZS1tYXRoJywgJ21hdGgtZGlzcGxheSddfSxcbiAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH1cbiAgICB0aGlzLmVudGVyKFxuICAgICAge1xuICAgICAgICB0eXBlOiAnbWF0aCcsXG4gICAgICAgIG1ldGE6IG51bGwsXG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgZGF0YToge2hOYW1lOiAncHJlJywgaENoaWxkcmVuOiBbY29kZV19XG4gICAgICB9LFxuICAgICAgdG9rZW5cbiAgICApXG4gIH1cblxuICAvKipcbiAgICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICAgKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICAgKi9cbiAgZnVuY3Rpb24gZW50ZXJNYXRoRmxvd01ldGEoKSB7XG4gICAgdGhpcy5idWZmZXIoKVxuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAgICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAgICovXG4gIGZ1bmN0aW9uIGV4aXRNYXRoRmxvd01ldGEoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucmVzdW1lKClcbiAgICBjb25zdCBub2RlID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdXG4gICAgYXNzZXJ0KG5vZGUudHlwZSA9PT0gJ21hdGgnKVxuICAgIG5vZGUubWV0YSA9IGRhdGFcbiAgfVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gICAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gICAqL1xuICBmdW5jdGlvbiBleGl0TWF0aEZsb3dGZW5jZSgpIHtcbiAgICAvLyBFeGl0IGlmIHRoaXMgaXMgdGhlIGNsb3NpbmcgZmVuY2UuXG4gICAgaWYgKHRoaXMuZGF0YS5tYXRoRmxvd0luc2lkZSkgcmV0dXJuXG4gICAgdGhpcy5idWZmZXIoKVxuICAgIHRoaXMuZGF0YS5tYXRoRmxvd0luc2lkZSA9IHRydWVcbiAgfVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gICAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gICAqL1xuICBmdW5jdGlvbiBleGl0TWF0aEZsb3codG9rZW4pIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5yZXN1bWUoKS5yZXBsYWNlKC9eKFxccj9cXG58XFxyKXwoXFxyP1xcbnxcXHIpJC9nLCAnJylcbiAgICBjb25zdCBub2RlID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdXG4gICAgYXNzZXJ0KG5vZGUudHlwZSA9PT0gJ21hdGgnKVxuICAgIHRoaXMuZXhpdCh0b2tlbilcbiAgICBub2RlLnZhbHVlID0gZGF0YVxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IHdlIGRlZmluZWQgaXQgaW4gYGVudGVyTWF0aEZsb3dgLlxuICAgIGNvbnN0IGNvZGUgPSAvKiogQHR5cGUge0hhc3RFbGVtZW50fSAqLyAobm9kZS5kYXRhLmhDaGlsZHJlblswXSlcbiAgICBhc3NlcnQoY29kZS50eXBlID09PSAnZWxlbWVudCcpXG4gICAgYXNzZXJ0KGNvZGUudGFnTmFtZSA9PT0gJ2NvZGUnKVxuICAgIGNvZGUuY2hpbGRyZW4ucHVzaCh7dHlwZTogJ3RleHQnLCB2YWx1ZTogZGF0YX0pXG4gICAgdGhpcy5kYXRhLm1hdGhGbG93SW5zaWRlID0gdW5kZWZpbmVkXG4gIH1cblxuICAvKipcbiAgICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICAgKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICAgKi9cbiAgZnVuY3Rpb24gZW50ZXJNYXRoVGV4dCh0b2tlbikge1xuICAgIHRoaXMuZW50ZXIoXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdpbmxpbmVNYXRoJyxcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaE5hbWU6ICdjb2RlJyxcbiAgICAgICAgICBoUHJvcGVydGllczoge2NsYXNzTmFtZTogWydsYW5ndWFnZS1tYXRoJywgJ21hdGgtaW5saW5lJ119LFxuICAgICAgICAgIGhDaGlsZHJlbjogW11cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRva2VuXG4gICAgKVxuICAgIHRoaXMuYnVmZmVyKClcbiAgfVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gICAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gICAqL1xuICBmdW5jdGlvbiBleGl0TWF0aFRleHQodG9rZW4pIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5yZXN1bWUoKVxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cbiAgICBhc3NlcnQobm9kZS50eXBlID09PSAnaW5saW5lTWF0aCcpXG4gICAgdGhpcy5leGl0KHRva2VuKVxuICAgIG5vZGUudmFsdWUgPSBkYXRhXG4gICAgY29uc3QgY2hpbGRyZW4gPSAvKiogQHR5cGUge0FycmF5PEhhc3RFbGVtZW50Q29udGVudD59ICovIChcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IHdlIGRlZmluZWQgaXQgaW4gYGVudGVyTWF0aEZsb3dgLlxuICAgICAgbm9kZS5kYXRhLmhDaGlsZHJlblxuICAgIClcbiAgICBjaGlsZHJlbi5wdXNoKHt0eXBlOiAndGV4dCcsIHZhbHVlOiBkYXRhfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gICAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gICAqL1xuICBmdW5jdGlvbiBleGl0TWF0aERhdGEodG9rZW4pIHtcbiAgICB0aGlzLmNvbmZpZy5lbnRlci5kYXRhLmNhbGwodGhpcywgdG9rZW4pXG4gICAgdGhpcy5jb25maWcuZXhpdC5kYXRhLmNhbGwodGhpcywgdG9rZW4pXG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gZXh0ZW5zaW9uIGZvciBgbWRhc3QtdXRpbC10by1tYXJrZG93bmAuXG4gKlxuICogQHBhcmFtIHtUb09wdGlvbnMgfCBudWxsIHwgdW5kZWZpbmVkfSBbb3B0aW9uc11cbiAqICAgQ29uZmlndXJhdGlvbiAob3B0aW9uYWwpLlxuICogQHJldHVybnMge1RvTWFya2Rvd25FeHRlbnNpb259XG4gKiAgIEV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtdG8tbWFya2Rvd25gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWF0aFRvTWFya2Rvd24ob3B0aW9ucykge1xuICBsZXQgc2luZ2xlID0gKG9wdGlvbnMgfHwge30pLnNpbmdsZURvbGxhclRleHRNYXRoXG5cbiAgaWYgKHNpbmdsZSA9PT0gbnVsbCB8fCBzaW5nbGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHNpbmdsZSA9IHRydWVcbiAgfVxuXG4gIGlubGluZU1hdGgucGVlayA9IGlubGluZU1hdGhQZWVrXG5cbiAgcmV0dXJuIHtcbiAgICB1bnNhZmU6IFtcbiAgICAgIHtjaGFyYWN0ZXI6ICdcXHInLCBpbkNvbnN0cnVjdDogJ21hdGhGbG93TWV0YSd9LFxuICAgICAge2NoYXJhY3RlcjogJ1xcbicsIGluQ29uc3RydWN0OiAnbWF0aEZsb3dNZXRhJ30sXG4gICAgICB7XG4gICAgICAgIGNoYXJhY3RlcjogJyQnLFxuICAgICAgICBhZnRlcjogc2luZ2xlID8gdW5kZWZpbmVkIDogJ1xcXFwkJyxcbiAgICAgICAgaW5Db25zdHJ1Y3Q6ICdwaHJhc2luZydcbiAgICAgIH0sXG4gICAgICB7Y2hhcmFjdGVyOiAnJCcsIGluQ29uc3RydWN0OiAnbWF0aEZsb3dNZXRhJ30sXG4gICAgICB7YXRCcmVhazogdHJ1ZSwgY2hhcmFjdGVyOiAnJCcsIGFmdGVyOiAnXFxcXCQnfVxuICAgIF0sXG4gICAgaGFuZGxlcnM6IHttYXRoLCBpbmxpbmVNYXRofVxuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtUb01hcmtkb3duSGFuZGxlfVxuICAgKiBAcGFyYW0ge01hdGh9IG5vZGVcbiAgICovXG4gIC8vIE5vdGU6IGZpeGluZyB0aGlzIGNvZGU/IFBsZWFzZSBhbHNvIGZpeCB0aGUgc2ltaWxhciBjb2RlIGZvciBjb2RlOlxuICAvLyA8aHR0cHM6Ly9naXRodWIuY29tL3N5bnRheC10cmVlL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vYmxvYi9tYWluL2xpYi9oYW5kbGUvY29kZS5qcz5cbiAgZnVuY3Rpb24gbWF0aChub2RlLCBfLCBzdGF0ZSwgaW5mbykge1xuICAgIGNvbnN0IHJhdyA9IG5vZGUudmFsdWUgfHwgJydcbiAgICBjb25zdCB0cmFja2VyID0gc3RhdGUuY3JlYXRlVHJhY2tlcihpbmZvKVxuICAgIGNvbnN0IHNlcXVlbmNlID0gJyQnLnJlcGVhdChNYXRoLm1heChsb25nZXN0U3RyZWFrKHJhdywgJyQnKSArIDEsIDIpKVxuICAgIGNvbnN0IGV4aXQgPSBzdGF0ZS5lbnRlcignbWF0aEZsb3cnKVxuICAgIGxldCB2YWx1ZSA9IHRyYWNrZXIubW92ZShzZXF1ZW5jZSlcblxuICAgIGlmIChub2RlLm1ldGEpIHtcbiAgICAgIGNvbnN0IHN1YmV4aXQgPSBzdGF0ZS5lbnRlcignbWF0aEZsb3dNZXRhJylcbiAgICAgIHZhbHVlICs9IHRyYWNrZXIubW92ZShcbiAgICAgICAgc3RhdGUuc2FmZShub2RlLm1ldGEsIHtcbiAgICAgICAgICBhZnRlcjogJ1xcbicsXG4gICAgICAgICAgYmVmb3JlOiB2YWx1ZSxcbiAgICAgICAgICBlbmNvZGU6IFsnJCddLFxuICAgICAgICAgIC4uLnRyYWNrZXIuY3VycmVudCgpXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICBzdWJleGl0KClcbiAgICB9XG5cbiAgICB2YWx1ZSArPSB0cmFja2VyLm1vdmUoJ1xcbicpXG5cbiAgICBpZiAocmF3KSB7XG4gICAgICB2YWx1ZSArPSB0cmFja2VyLm1vdmUocmF3ICsgJ1xcbicpXG4gICAgfVxuXG4gICAgdmFsdWUgKz0gdHJhY2tlci5tb3ZlKHNlcXVlbmNlKVxuICAgIGV4aXQoKVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtUb01hcmtkb3duSGFuZGxlfVxuICAgKiBAcGFyYW0ge0lubGluZU1hdGh9IG5vZGVcbiAgICovXG4gIC8vIE5vdGU6IGZpeGluZyB0aGlzIGNvZGU/IFBsZWFzZSBhbHNvIGZpeCB0aGUgc2ltaWxhciBjb2RlIGZvciBpbmxpbmUgY29kZTpcbiAgLy8gPGh0dHBzOi8vZ2l0aHViLmNvbS9zeW50YXgtdHJlZS9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2Jsb2IvbWFpbi9saWIvaGFuZGxlL2lubGluZS1jb2RlLmpzPlxuICBmdW5jdGlvbiBpbmxpbmVNYXRoKG5vZGUsIF8sIHN0YXRlKSB7XG4gICAgbGV0IHZhbHVlID0gbm9kZS52YWx1ZSB8fCAnJ1xuICAgIGxldCBzaXplID0gMVxuXG4gICAgaWYgKCFzaW5nbGUpIHNpemUrK1xuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBzaW5nbGUgZG9sbGFyIHNpZ24gb24gaXRzIG93biBpbiB0aGUgbWF0aCwgdXNlIGEgZmVuY2Ugb2ZcbiAgICAvLyB0d28uXG4gICAgLy8gSWYgdGhlcmUgYXJlIHR3byBpbiBhIHJvdywgdXNlIG9uZS5cbiAgICB3aGlsZSAoXG4gICAgICBuZXcgUmVnRXhwKCcoXnxbXiRdKScgKyAnXFxcXCQnLnJlcGVhdChzaXplKSArICcoW14kXXwkKScpLnRlc3QodmFsdWUpXG4gICAgKSB7XG4gICAgICBzaXplKytcbiAgICB9XG5cbiAgICBjb25zdCBzZXF1ZW5jZSA9ICckJy5yZXBlYXQoc2l6ZSlcblxuICAgIC8vIElmIHRoaXMgaXMgbm90IGp1c3Qgc3BhY2VzIG9yIGVvbHMgKHRhYnMgZG9u4oCZdCBjb3VudCksIGFuZCBlaXRoZXIgdGhlXG4gICAgLy8gZmlyc3QgYW5kIGxhc3QgY2hhcmFjdGVyIGFyZSBhIHNwYWNlIG9yIGVvbCwgb3IgdGhlIGZpcnN0IG9yIGxhc3RcbiAgICAvLyBjaGFyYWN0ZXIgYXJlIGRvbGxhciBzaWducywgdGhlbiBwYWQgd2l0aCBzcGFjZXMuXG4gICAgaWYgKFxuICAgICAgLy8gQ29udGFpbnMgbm9uLXNwYWNlLlxuICAgICAgL1teIFxcclxcbl0vLnRlc3QodmFsdWUpICYmXG4gICAgICAvLyBTdGFydHMgd2l0aCBzcGFjZSBhbmQgZW5kcyB3aXRoIHNwYWNlLlxuICAgICAgKCgvXlsgXFxyXFxuXS8udGVzdCh2YWx1ZSkgJiYgL1sgXFxyXFxuXSQvLnRlc3QodmFsdWUpKSB8fFxuICAgICAgICAvLyBTdGFydHMgb3IgZW5kcyB3aXRoIGRvbGxhci5cbiAgICAgICAgL15cXCR8XFwkJC8udGVzdCh2YWx1ZSkpXG4gICAgKSB7XG4gICAgICB2YWx1ZSA9ICcgJyArIHZhbHVlICsgJyAnXG4gICAgfVxuXG4gICAgbGV0IGluZGV4ID0gLTFcblxuICAgIC8vIFdlIGhhdmUgYSBwb3RlbnRpYWwgcHJvYmxlbTogY2VydGFpbiBjaGFyYWN0ZXJzIGFmdGVyIGVvbHMgY291bGQgcmVzdWx0IGluXG4gICAgLy8gYmxvY2tzIGJlaW5nIHNlZW4uXG4gICAgLy8gRm9yIGV4YW1wbGUsIGlmIHNvbWVvbmUgaW5qZWN0ZWQgdGhlIHN0cmluZyBgJ1xcbiMgYidgLCB0aGVuIHRoYXQgd291bGRcbiAgICAvLyByZXN1bHQgaW4gYW4gQVRYIGhlYWRpbmcuXG4gICAgLy8gV2UgY2Fu4oCZdCBlc2NhcGUgY2hhcmFjdGVycyBpbiBgaW5saW5lTWF0aGAsIGJ1dCBiZWNhdXNlIGVvbHMgYXJlXG4gICAgLy8gdHJhbnNmb3JtZWQgdG8gc3BhY2VzIHdoZW4gZ29pbmcgZnJvbSBtYXJrZG93biB0byBIVE1MIGFueXdheSwgd2UgY2FuIHN3YXBcbiAgICAvLyB0aGVtIG91dC5cbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXRlLnVuc2FmZS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHBhdHRlcm4gPSBzdGF0ZS51bnNhZmVbaW5kZXhdXG5cbiAgICAgIC8vIE9ubHkgbG9vayBmb3IgYGF0QnJlYWtgcy5cbiAgICAgIC8vIEJ0dzogbm90ZSB0aGF0IGBhdEJyZWFrYCBwYXR0ZXJucyB3aWxsIGFsd2F5cyBzdGFydCB0aGUgcmVnZXggYXQgTEYgb3JcbiAgICAgIC8vIENSLlxuICAgICAgaWYgKCFwYXR0ZXJuLmF0QnJlYWspIGNvbnRpbnVlXG5cbiAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSBzdGF0ZS5jb21waWxlUGF0dGVybihwYXR0ZXJuKVxuICAgICAgLyoqIEB0eXBlIHtSZWdFeHBFeGVjQXJyYXkgfCBudWxsfSAqL1xuICAgICAgbGV0IG1hdGNoXG5cbiAgICAgIHdoaWxlICgobWF0Y2ggPSBleHByZXNzaW9uLmV4ZWModmFsdWUpKSkge1xuICAgICAgICBsZXQgcG9zaXRpb24gPSBtYXRjaC5pbmRleFxuXG4gICAgICAgIC8vIFN1cHBvcnQgQ1JMRiAocGF0dGVybnMgb25seSBsb29rIGZvciBvbmUgb2YgdGhlIGNoYXJhY3RlcnMpLlxuICAgICAgICBpZiAoXG4gICAgICAgICAgdmFsdWUuY29kZVBvaW50QXQocG9zaXRpb24pID09PSAxMCAvKiBgXFxuYCAqLyAmJlxuICAgICAgICAgIHZhbHVlLmNvZGVQb2ludEF0KHBvc2l0aW9uIC0gMSkgPT09IDEzIC8qIGBcXHJgICovXG4gICAgICAgICkge1xuICAgICAgICAgIHBvc2l0aW9uLS1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCwgcG9zaXRpb24pICsgJyAnICsgdmFsdWUuc2xpY2UobWF0Y2guaW5kZXggKyAxKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZXF1ZW5jZSArIHZhbHVlICsgc2VxdWVuY2VcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gaW5saW5lTWF0aFBlZWsoKSB7XG4gICAgcmV0dXJuICckJ1xuICB9XG59XG4iXSwibmFtZXMiOlsib2siLCJhc3NlcnQiLCJsb25nZXN0U3RyZWFrIiwibWF0aEZyb21NYXJrZG93biIsImVudGVyIiwibWF0aEZsb3ciLCJlbnRlck1hdGhGbG93IiwibWF0aEZsb3dGZW5jZU1ldGEiLCJlbnRlck1hdGhGbG93TWV0YSIsIm1hdGhUZXh0IiwiZW50ZXJNYXRoVGV4dCIsImV4aXQiLCJleGl0TWF0aEZsb3ciLCJtYXRoRmxvd0ZlbmNlIiwiZXhpdE1hdGhGbG93RmVuY2UiLCJleGl0TWF0aEZsb3dNZXRhIiwibWF0aEZsb3dWYWx1ZSIsImV4aXRNYXRoRGF0YSIsImV4aXRNYXRoVGV4dCIsIm1hdGhUZXh0RGF0YSIsInRva2VuIiwiY29kZSIsInR5cGUiLCJ0YWdOYW1lIiwicHJvcGVydGllcyIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwibWV0YSIsInZhbHVlIiwiZGF0YSIsImhOYW1lIiwiaENoaWxkcmVuIiwiYnVmZmVyIiwicmVzdW1lIiwibm9kZSIsInN0YWNrIiwibGVuZ3RoIiwibWF0aEZsb3dJbnNpZGUiLCJyZXBsYWNlIiwicHVzaCIsInVuZGVmaW5lZCIsImhQcm9wZXJ0aWVzIiwiY29uZmlnIiwiY2FsbCIsIm1hdGhUb01hcmtkb3duIiwib3B0aW9ucyIsInNpbmdsZSIsInNpbmdsZURvbGxhclRleHRNYXRoIiwiaW5saW5lTWF0aCIsInBlZWsiLCJpbmxpbmVNYXRoUGVlayIsInVuc2FmZSIsImNoYXJhY3RlciIsImluQ29uc3RydWN0IiwiYWZ0ZXIiLCJhdEJyZWFrIiwiaGFuZGxlcnMiLCJtYXRoIiwiXyIsInN0YXRlIiwiaW5mbyIsInJhdyIsInRyYWNrZXIiLCJjcmVhdGVUcmFja2VyIiwic2VxdWVuY2UiLCJyZXBlYXQiLCJNYXRoIiwibWF4IiwibW92ZSIsInN1YmV4aXQiLCJzYWZlIiwiYmVmb3JlIiwiZW5jb2RlIiwiY3VycmVudCIsInNpemUiLCJSZWdFeHAiLCJ0ZXN0IiwiaW5kZXgiLCJwYXR0ZXJuIiwiZXhwcmVzc2lvbiIsImNvbXBpbGVQYXR0ZXJuIiwibWF0Y2giLCJleGVjIiwicG9zaXRpb24iLCJjb2RlUG9pbnRBdCIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-math/lib/index.js\n");

/***/ })

};
;