"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-markdown";
exports.ids = ["vendor-chunks/react-markdown"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-markdown/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-markdown/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Markdown: () => (/* binding */ Markdown),\n/* harmony export */   defaultUrlTransform: () => (/* binding */ defaultUrlTransform)\n/* harmony export */ });\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devlop */ \"(ssr)/./node_modules/devlop/lib/development.js\");\n/* harmony import */ var hast_util_to_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hast-util-to-jsx-runtime */ \"(ssr)/./node_modules/hast-util-to-jsx-runtime/lib/index.js\");\n/* harmony import */ var html_url_attributes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! html-url-attributes */ \"(ssr)/./node_modules/html-url-attributes/lib/index.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remark-parse */ \"(ssr)/./node_modules/remark-parse/lib/index.js\");\n/* harmony import */ var remark_rehype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remark-rehype */ \"(ssr)/./node_modules/remark-rehype/lib/index.js\");\n/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unified */ \"(ssr)/./node_modules/unified/lib/index.js\");\n/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! unist-util-visit */ \"(ssr)/./node_modules/unist-util-visit/lib/index.js\");\n/* harmony import */ var vfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vfile */ \"(ssr)/./node_modules/vfile/lib/index.js\");\n// Register `Raw` in tree:\n/// <reference types=\"mdast-util-to-hast\" />\n/**\n * @typedef {import('hast').Element} Element\n * @typedef {import('hast').ElementContent} ElementContent\n * @typedef {import('hast').Nodes} Nodes\n * @typedef {import('hast').Parents} Parents\n * @typedef {import('hast').Root} Root\n * @typedef {import('hast-util-to-jsx-runtime').Components} JsxRuntimeComponents\n * @typedef {import('remark-rehype').Options} RemarkRehypeOptions\n * @typedef {import('unist-util-visit').BuildVisitor<Root>} Visitor\n * @typedef {import('unified').PluggableList} PluggableList\n */ /**\n * @callback AllowElement\n *   Filter elements.\n * @param {Readonly<Element>} element\n *   Element to check.\n * @param {number} index\n *   Index of `element` in `parent`.\n * @param {Readonly<Parents> | undefined} parent\n *   Parent of `element`.\n * @returns {boolean | null | undefined}\n *   Whether to allow `element` (default: `false`).\n *\n * @typedef {Partial<JsxRuntimeComponents>} Components\n *   Map tag names to components.\n *\n * @typedef Deprecation\n *   Deprecation.\n * @property {string} from\n *   Old field.\n * @property {string} id\n *   ID in readme.\n * @property {keyof Options} [to]\n *   New field.\n *\n * @typedef Options\n *   Configuration.\n * @property {AllowElement | null | undefined} [allowElement]\n *   Filter elements (optional);\n *   `allowedElements` / `disallowedElements` is used first.\n * @property {ReadonlyArray<string> | null | undefined} [allowedElements]\n *   Tag names to allow (default: all tag names);\n *   cannot combine w/ `disallowedElements`.\n * @property {string | null | undefined} [children]\n *   Markdown.\n * @property {string | null | undefined} [className]\n *   Wrap in a `div` with this class name.\n * @property {Components | null | undefined} [components]\n *   Map tag names to components.\n * @property {ReadonlyArray<string> | null | undefined} [disallowedElements]\n *   Tag names to disallow (default: `[]`);\n *   cannot combine w/ `allowedElements`.\n * @property {PluggableList | null | undefined} [rehypePlugins]\n *   List of rehype plugins to use.\n * @property {PluggableList | null | undefined} [remarkPlugins]\n *   List of remark plugins to use.\n * @property {Readonly<RemarkRehypeOptions> | null | undefined} [remarkRehypeOptions]\n *   Options to pass through to `remark-rehype`.\n * @property {boolean | null | undefined} [skipHtml=false]\n *   Ignore HTML in markdown completely (default: `false`).\n * @property {boolean | null | undefined} [unwrapDisallowed=false]\n *   Extract (unwrap) what’s in disallowed elements (default: `false`);\n *   normally when say `strong` is not allowed, it and it’s children are dropped,\n *   with `unwrapDisallowed` the element itself is replaced by its children.\n * @property {UrlTransform | null | undefined} [urlTransform]\n *   Change URLs (default: `defaultUrlTransform`)\n *\n * @callback UrlTransform\n *   Transform all URLs.\n * @param {string} url\n *   URL.\n * @param {string} key\n *   Property name (example: `'href'`).\n * @param {Readonly<Element>} node\n *   Node.\n * @returns {string | null | undefined}\n *   Transformed URL (optional).\n */ \n\n\n// @ts-expect-error: untyped.\n\n\n\n\n\n\nconst changelog = \"https://github.com/remarkjs/react-markdown/blob/main/changelog.md\";\n/** @type {PluggableList} */ const emptyPlugins = [];\n/** @type {Readonly<RemarkRehypeOptions>} */ const emptyRemarkRehypeOptions = {\n    allowDangerousHtml: true\n};\nconst safeProtocol = /^(https?|ircs?|mailto|xmpp)$/i;\n// Mutable because we `delete` any time it’s used and a message is sent.\n/** @type {ReadonlyArray<Readonly<Deprecation>>} */ const deprecations = [\n    {\n        from: \"astPlugins\",\n        id: \"remove-buggy-html-in-markdown-parser\"\n    },\n    {\n        from: \"allowDangerousHtml\",\n        id: \"remove-buggy-html-in-markdown-parser\"\n    },\n    {\n        from: \"allowNode\",\n        id: \"replace-allownode-allowedtypes-and-disallowedtypes\",\n        to: \"allowElement\"\n    },\n    {\n        from: \"allowedTypes\",\n        id: \"replace-allownode-allowedtypes-and-disallowedtypes\",\n        to: \"allowedElements\"\n    },\n    {\n        from: \"disallowedTypes\",\n        id: \"replace-allownode-allowedtypes-and-disallowedtypes\",\n        to: \"disallowedElements\"\n    },\n    {\n        from: \"escapeHtml\",\n        id: \"remove-buggy-html-in-markdown-parser\"\n    },\n    {\n        from: \"includeElementIndex\",\n        id: \"#remove-includeelementindex\"\n    },\n    {\n        from: \"includeNodeIndex\",\n        id: \"change-includenodeindex-to-includeelementindex\"\n    },\n    {\n        from: \"linkTarget\",\n        id: \"remove-linktarget\"\n    },\n    {\n        from: \"plugins\",\n        id: \"change-plugins-to-remarkplugins\",\n        to: \"remarkPlugins\"\n    },\n    {\n        from: \"rawSourcePos\",\n        id: \"#remove-rawsourcepos\"\n    },\n    {\n        from: \"renderers\",\n        id: \"change-renderers-to-components\",\n        to: \"components\"\n    },\n    {\n        from: \"source\",\n        id: \"change-source-to-children\",\n        to: \"children\"\n    },\n    {\n        from: \"sourcePos\",\n        id: \"#remove-sourcepos\"\n    },\n    {\n        from: \"transformImageUri\",\n        id: \"#add-urltransform\",\n        to: \"urlTransform\"\n    },\n    {\n        from: \"transformLinkUri\",\n        id: \"#add-urltransform\",\n        to: \"urlTransform\"\n    }\n];\n/**\n * Component to render markdown.\n *\n * @param {Readonly<Options>} options\n *   Props.\n * @returns {JSX.Element}\n *   React element.\n */ function Markdown(options) {\n    const allowedElements = options.allowedElements;\n    const allowElement = options.allowElement;\n    const children = options.children || \"\";\n    const className = options.className;\n    const components = options.components;\n    const disallowedElements = options.disallowedElements;\n    const rehypePlugins = options.rehypePlugins || emptyPlugins;\n    const remarkPlugins = options.remarkPlugins || emptyPlugins;\n    const remarkRehypeOptions = options.remarkRehypeOptions ? {\n        ...options.remarkRehypeOptions,\n        ...emptyRemarkRehypeOptions\n    } : emptyRemarkRehypeOptions;\n    const skipHtml = options.skipHtml;\n    const unwrapDisallowed = options.unwrapDisallowed;\n    const urlTransform = options.urlTransform || defaultUrlTransform;\n    const processor = (0,unified__WEBPACK_IMPORTED_MODULE_1__.unified)().use(remark_parse__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).use(remarkPlugins).use(remark_rehype__WEBPACK_IMPORTED_MODULE_3__[\"default\"], remarkRehypeOptions).use(rehypePlugins);\n    const file = new vfile__WEBPACK_IMPORTED_MODULE_4__.VFile();\n    if (typeof children === \"string\") {\n        file.value = children;\n    } else {\n        (0,devlop__WEBPACK_IMPORTED_MODULE_5__.unreachable)(\"Unexpected value `\" + children + \"` for `children` prop, expected `string`\");\n    }\n    if (allowedElements && disallowedElements) {\n        (0,devlop__WEBPACK_IMPORTED_MODULE_5__.unreachable)(\"Unexpected combined `allowedElements` and `disallowedElements`, expected one or the other\");\n    }\n    for (const deprecation of deprecations){\n        if (Object.hasOwn(options, deprecation.from)) {\n            (0,devlop__WEBPACK_IMPORTED_MODULE_5__.unreachable)(\"Unexpected `\" + deprecation.from + \"` prop, \" + (deprecation.to ? \"use `\" + deprecation.to + \"` instead\" : \"remove it\") + \" (see <\" + changelog + \"#\" + deprecation.id + \"> for more info)\");\n        }\n    }\n    const mdastTree = processor.parse(file);\n    /** @type {Nodes} */ let hastTree = processor.runSync(mdastTree, file);\n    // Wrap in `div` if there’s a class name.\n    if (className) {\n        hastTree = {\n            type: \"element\",\n            tagName: \"div\",\n            properties: {\n                className\n            },\n            // Assume no doctypes.\n            children: /** @type {Array<ElementContent>} */ hastTree.type === \"root\" ? hastTree.children : [\n                hastTree\n            ]\n        };\n    }\n    (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_6__.visit)(hastTree, transform);\n    return (0,hast_util_to_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.toJsxRuntime)(hastTree, {\n        Fragment: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,\n        components,\n        ignoreInvalidStyle: true,\n        jsx: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx,\n        jsxs: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs,\n        passKeys: true,\n        passNode: true\n    });\n    /** @type {Visitor} */ function transform(node, index, parent) {\n        if (node.type === \"raw\" && parent && typeof index === \"number\") {\n            if (skipHtml) {\n                parent.children.splice(index, 1);\n            } else {\n                parent.children[index] = {\n                    type: \"text\",\n                    value: node.value\n                };\n            }\n            return index;\n        }\n        if (node.type === \"element\") {\n            /** @type {string} */ let key;\n            for(key in html_url_attributes__WEBPACK_IMPORTED_MODULE_8__.urlAttributes){\n                if (Object.hasOwn(html_url_attributes__WEBPACK_IMPORTED_MODULE_8__.urlAttributes, key) && Object.hasOwn(node.properties, key)) {\n                    const value = node.properties[key];\n                    const test = html_url_attributes__WEBPACK_IMPORTED_MODULE_8__.urlAttributes[key];\n                    if (test === null || test.includes(node.tagName)) {\n                        node.properties[key] = urlTransform(String(value || \"\"), key, node);\n                    }\n                }\n            }\n        }\n        if (node.type === \"element\") {\n            let remove = allowedElements ? !allowedElements.includes(node.tagName) : disallowedElements ? disallowedElements.includes(node.tagName) : false;\n            if (!remove && allowElement && typeof index === \"number\") {\n                remove = !allowElement(node, index, parent);\n            }\n            if (remove && parent && typeof index === \"number\") {\n                if (unwrapDisallowed && node.children) {\n                    parent.children.splice(index, 1, ...node.children);\n                } else {\n                    parent.children.splice(index, 1);\n                }\n                return index;\n            }\n        }\n    }\n}\n/**\n * Make a URL safe.\n *\n * @satisfies {UrlTransform}\n * @param {string} value\n *   URL.\n * @returns {string}\n *   Safe URL.\n */ function defaultUrlTransform(value) {\n    // Same as:\n    // <https://github.com/micromark/micromark/blob/929275e/packages/micromark-util-sanitize-uri/dev/index.js#L34>\n    // But without the `encode` part.\n    const colon = value.indexOf(\":\");\n    const questionMark = value.indexOf(\"?\");\n    const numberSign = value.indexOf(\"#\");\n    const slash = value.indexOf(\"/\");\n    if (// If there is no protocol, it’s relative.\n    colon < 0 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.\n    slash > -1 && colon > slash || questionMark > -1 && colon > questionMark || numberSign > -1 && colon > numberSign || // It is a protocol, it should be allowed.\n    safeProtocol.test(value.slice(0, colon))) {\n        return value;\n    }\n    return \"\";\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtbWFya2Rvd24vbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEJBQTBCO0FBQzFCLDRDQUE0QztBQUU1Qzs7Ozs7Ozs7OztDQVVDLEdBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtFQyxHQUVpQztBQUNtQjtBQUNKO0FBQ2pELDZCQUE2QjtBQUN3QjtBQUNmO0FBQ0U7QUFDVDtBQUNPO0FBQ1g7QUFFM0IsTUFBTVcsWUFDSjtBQUVGLDBCQUEwQixHQUMxQixNQUFNQyxlQUFlLEVBQUU7QUFDdkIsMENBQTBDLEdBQzFDLE1BQU1DLDJCQUEyQjtJQUFDQyxvQkFBb0I7QUFBSTtBQUMxRCxNQUFNQyxlQUFlO0FBRXJCLHdFQUF3RTtBQUN4RSxpREFBaUQsR0FDakQsTUFBTUMsZUFBZTtJQUNuQjtRQUFDQyxNQUFNO1FBQWNDLElBQUk7SUFBc0M7SUFDL0Q7UUFBQ0QsTUFBTTtRQUFzQkMsSUFBSTtJQUFzQztJQUN2RTtRQUNFRCxNQUFNO1FBQ05DLElBQUk7UUFDSkMsSUFBSTtJQUNOO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxJQUFJO1FBQ0pDLElBQUk7SUFDTjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsSUFBSTtRQUNKQyxJQUFJO0lBQ047SUFDQTtRQUFDRixNQUFNO1FBQWNDLElBQUk7SUFBc0M7SUFDL0Q7UUFBQ0QsTUFBTTtRQUF1QkMsSUFBSTtJQUE2QjtJQUMvRDtRQUNFRCxNQUFNO1FBQ05DLElBQUk7SUFDTjtJQUNBO1FBQUNELE1BQU07UUFBY0MsSUFBSTtJQUFtQjtJQUM1QztRQUFDRCxNQUFNO1FBQVdDLElBQUk7UUFBbUNDLElBQUk7SUFBZTtJQUM1RTtRQUFDRixNQUFNO1FBQWdCQyxJQUFJO0lBQXNCO0lBQ2pEO1FBQUNELE1BQU07UUFBYUMsSUFBSTtRQUFrQ0MsSUFBSTtJQUFZO0lB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TUFBTSxDQUFDRixPQUFPLE1BQU1ELEtBQUs3QixRQUFRO2dCQUNuRCxPQUFPO29CQUNMK0IsT0FBTy9CLFFBQVEsQ0FBQ2dDLE1BQU0sQ0FBQ0YsT0FBTztnQkFDaEM7Z0JBRUEsT0FBT0E7WUFDVDtRQUNGO0lBQ0Y7QUFDRjtBQUVBOzs7Ozs7OztDQVFDLEdBQ00sU0FBU3BCLG9CQUFvQkksS0FBSztJQUN2QyxXQUFXO0lBQ1gsOEdBQThHO0lBQzlHLGlDQUFpQztJQUNqQyxNQUFNd0IsUUFBUXhCLE1BQU15QixPQUFPLENBQUM7SUFDNUIsTUFBTUMsZUFBZTFCLE1BQU15QixPQUFPLENBQUM7SUFDbkMsTUFBTUUsYUFBYTNCLE1BQU15QixPQUFPLENBQUM7SUFDakMsTUFBTUcsUUFBUTVCLE1BQU15QixPQUFPLENBQUM7SUFFNUIsSUFDRSwwQ0FBMEM7SUFDMUNELFFBQVEsS0FDUix1RUFBdUU7SUFDdEVJLFFBQVEsQ0FBQyxLQUFLSixRQUFRSSxTQUN0QkYsZUFBZSxDQUFDLEtBQUtGLFFBQVFFLGdCQUM3QkMsYUFBYSxDQUFDLEtBQUtILFFBQVFHLGNBQzVCLDBDQUEwQztJQUMxQ2xELGFBQWEyQyxJQUFJLENBQUNwQixNQUFNNkIsS0FBSyxDQUFDLEdBQUdMLFNBQ2pDO1FBQ0EsT0FBT3hCO0lBQ1Q7SUFFQSxPQUFPO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0Ym90LXVpLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1hcmtkb3duL2xpYi9pbmRleC5qcz8yMjNjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFJlZ2lzdGVyIGBSYXdgIGluIHRyZWU6XG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cIm1kYXN0LXV0aWwtdG8taGFzdFwiIC8+XG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLkVsZW1lbnR9IEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5FbGVtZW50Q29udGVudH0gRWxlbWVudENvbnRlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5Ob2Rlc30gTm9kZXNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5QYXJlbnRzfSBQYXJlbnRzXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuUm9vdH0gUm9vdFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdC11dGlsLXRvLWpzeC1ydW50aW1lJykuQ29tcG9uZW50c30gSnN4UnVudGltZUNvbXBvbmVudHNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3JlbWFyay1yZWh5cGUnKS5PcHRpb25zfSBSZW1hcmtSZWh5cGVPcHRpb25zXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdC11dGlsLXZpc2l0JykuQnVpbGRWaXNpdG9yPFJvb3Q+fSBWaXNpdG9yXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlmaWVkJykuUGx1Z2dhYmxlTGlzdH0gUGx1Z2dhYmxlTGlzdFxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIEFsbG93RWxlbWVudFxuICogICBGaWx0ZXIgZWxlbWVudHMuXG4gKiBAcGFyYW0ge1JlYWRvbmx5PEVsZW1lbnQ+fSBlbGVtZW50XG4gKiAgIEVsZW1lbnQgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqICAgSW5kZXggb2YgYGVsZW1lbnRgIGluIGBwYXJlbnRgLlxuICogQHBhcmFtIHtSZWFkb25seTxQYXJlbnRzPiB8IHVuZGVmaW5lZH0gcGFyZW50XG4gKiAgIFBhcmVudCBvZiBgZWxlbWVudGAuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9XG4gKiAgIFdoZXRoZXIgdG8gYWxsb3cgYGVsZW1lbnRgIChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqXG4gKiBAdHlwZWRlZiB7UGFydGlhbDxKc3hSdW50aW1lQ29tcG9uZW50cz59IENvbXBvbmVudHNcbiAqICAgTWFwIHRhZyBuYW1lcyB0byBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIERlcHJlY2F0aW9uXG4gKiAgIERlcHJlY2F0aW9uLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IGZyb21cbiAqICAgT2xkIGZpZWxkLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IGlkXG4gKiAgIElEIGluIHJlYWRtZS5cbiAqIEBwcm9wZXJ0eSB7a2V5b2YgT3B0aW9uc30gW3RvXVxuICogICBOZXcgZmllbGQuXG4gKlxuICogQHR5cGVkZWYgT3B0aW9uc1xuICogICBDb25maWd1cmF0aW9uLlxuICogQHByb3BlcnR5IHtBbGxvd0VsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkfSBbYWxsb3dFbGVtZW50XVxuICogICBGaWx0ZXIgZWxlbWVudHMgKG9wdGlvbmFsKTtcbiAqICAgYGFsbG93ZWRFbGVtZW50c2AgLyBgZGlzYWxsb3dlZEVsZW1lbnRzYCBpcyB1c2VkIGZpcnN0LlxuICogQHByb3BlcnR5IHtSZWFkb25seUFycmF5PHN0cmluZz4gfCBudWxsIHwgdW5kZWZpbmVkfSBbYWxsb3dlZEVsZW1lbnRzXVxuICogICBUYWcgbmFtZXMgdG8gYWxsb3cgKGRlZmF1bHQ6IGFsbCB0YWcgbmFtZXMpO1xuICogICBjYW5ub3QgY29tYmluZSB3LyBgZGlzYWxsb3dlZEVsZW1lbnRzYC5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBNYXJrZG93bi5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NsYXNzTmFtZV1cbiAqICAgV3JhcCBpbiBhIGBkaXZgIHdpdGggdGhpcyBjbGFzcyBuYW1lLlxuICogQHByb3BlcnR5IHtDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIE1hcCB0YWcgbmFtZXMgdG8gY29tcG9uZW50cy5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHlBcnJheTxzdHJpbmc+IHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FsbG93ZWRFbGVtZW50c11cbiAqICAgVGFnIG5hbWVzIHRvIGRpc2FsbG93IChkZWZhdWx0OiBgW11gKTtcbiAqICAgY2Fubm90IGNvbWJpbmUgdy8gYGFsbG93ZWRFbGVtZW50c2AuXG4gKiBAcHJvcGVydHkge1BsdWdnYWJsZUxpc3QgfCBudWxsIHwgdW5kZWZpbmVkfSBbcmVoeXBlUGx1Z2luc11cbiAqICAgTGlzdCBvZiByZWh5cGUgcGx1Z2lucyB0byB1c2UuXG4gKiBAcHJvcGVydHkge1BsdWdnYWJsZUxpc3QgfCBudWxsIHwgdW5kZWZpbmVkfSBbcmVtYXJrUGx1Z2luc11cbiAqICAgTGlzdCBvZiByZW1hcmsgcGx1Z2lucyB0byB1c2UuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PFJlbWFya1JlaHlwZU9wdGlvbnM+IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3JlbWFya1JlaHlwZU9wdGlvbnNdXG4gKiAgIE9wdGlvbnMgdG8gcGFzcyB0aHJvdWdoIHRvIGByZW1hcmstcmVoeXBlYC5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtza2lwSHRtbD1mYWxzZV1cbiAqICAgSWdub3JlIEhUTUwgaW4gbWFya2Rvd24gY29tcGxldGVseSAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbdW53cmFwRGlzYWxsb3dlZD1mYWxzZV1cbiAqICAgRXh0cmFjdCAodW53cmFwKSB3aGF04oCZcyBpbiBkaXNhbGxvd2VkIGVsZW1lbnRzIChkZWZhdWx0OiBgZmFsc2VgKTtcbiAqICAgbm9ybWFsbHkgd2hlbiBzYXkgYHN0cm9uZ2AgaXMgbm90IGFsbG93ZWQsIGl0IGFuZCBpdOKAmXMgY2hpbGRyZW4gYXJlIGRyb3BwZWQsXG4gKiAgIHdpdGggYHVud3JhcERpc2FsbG93ZWRgIHRoZSBlbGVtZW50IGl0c2VsZiBpcyByZXBsYWNlZCBieSBpdHMgY2hpbGRyZW4uXG4gKiBAcHJvcGVydHkge1VybFRyYW5zZm9ybSB8IG51bGwgfCB1bmRlZmluZWR9IFt1cmxUcmFuc2Zvcm1dXG4gKiAgIENoYW5nZSBVUkxzIChkZWZhdWx0OiBgZGVmYXVsdFVybFRyYW5zZm9ybWApXG4gKlxuICogQGNhbGxiYWNrIFVybFRyYW5zZm9ybVxuICogICBUcmFuc2Zvcm0gYWxsIFVSTHMuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiAgIFVSTC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqICAgUHJvcGVydHkgbmFtZSAoZXhhbXBsZTogYCdocmVmJ2ApLlxuICogQHBhcmFtIHtSZWFkb25seTxFbGVtZW50Pn0gbm9kZVxuICogICBOb2RlLlxuICogQHJldHVybnMge3N0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9XG4gKiAgIFRyYW5zZm9ybWVkIFVSTCAob3B0aW9uYWwpLlxuICovXG5cbmltcG9ydCB7dW5yZWFjaGFibGV9IGZyb20gJ2RldmxvcCdcbmltcG9ydCB7dG9Kc3hSdW50aW1lfSBmcm9tICdoYXN0LXV0aWwtdG8tanN4LXJ1bnRpbWUnXG5pbXBvcnQge3VybEF0dHJpYnV0ZXN9IGZyb20gJ2h0bWwtdXJsLWF0dHJpYnV0ZXMnXG4vLyBAdHMtZXhwZWN0LWVycm9yOiB1bnR5cGVkLlxuaW1wb3J0IHtGcmFnbWVudCwganN4LCBqc3hzfSBmcm9tICdyZWFjdC9qc3gtcnVudGltZSdcbmltcG9ydCByZW1hcmtQYXJzZSBmcm9tICdyZW1hcmstcGFyc2UnXG5pbXBvcnQgcmVtYXJrUmVoeXBlIGZyb20gJ3JlbWFyay1yZWh5cGUnXG5pbXBvcnQge3VuaWZpZWR9IGZyb20gJ3VuaWZpZWQnXG5pbXBvcnQge3Zpc2l0fSBmcm9tICd1bmlzdC11dGlsLXZpc2l0J1xuaW1wb3J0IHtWRmlsZX0gZnJvbSAndmZpbGUnXG5cbmNvbnN0IGNoYW5nZWxvZyA9XG4gICdodHRwczovL2dpdGh1Yi5jb20vcmVtYXJranMvcmVhY3QtbWFya2Rvd24vYmxvYi9tYWluL2NoYW5nZWxvZy5tZCdcblxuLyoqIEB0eXBlIHtQbHVnZ2FibGVMaXN0fSAqL1xuY29uc3QgZW1wdHlQbHVnaW5zID0gW11cbi8qKiBAdHlwZSB7UmVhZG9ubHk8UmVtYXJrUmVoeXBlT3B0aW9ucz59ICovXG5jb25zdCBlbXB0eVJlbWFya1JlaHlwZU9wdGlvbnMgPSB7YWxsb3dEYW5nZXJvdXNIdG1sOiB0cnVlfVxuY29uc3Qgc2FmZVByb3RvY29sID0gL14oaHR0cHM/fGlyY3M/fG1haWx0b3x4bXBwKSQvaVxuXG4vLyBNdXRhYmxlIGJlY2F1c2Ugd2UgYGRlbGV0ZWAgYW55IHRpbWUgaXTigJlzIHVzZWQgYW5kIGEgbWVzc2FnZSBpcyBzZW50LlxuLyoqIEB0eXBlIHtSZWFkb25seUFycmF5PFJlYWRvbmx5PERlcHJlY2F0aW9uPj59ICovXG5jb25zdCBkZXByZWNhdGlvbnMgPSBbXG4gIHtmcm9tOiAnYXN0UGx1Z2lucycsIGlkOiAncmVtb3ZlLWJ1Z2d5LWh0bWwtaW4tbWFya2Rvd24tcGFyc2VyJ30sXG4gIHtmcm9tOiAnYWxsb3dEYW5nZXJvdXNIdG1sJywgaWQ6ICdyZW1vdmUtYnVnZ3ktaHRtbC1pbi1tYXJrZG93bi1wYXJzZXInfSxcbiAge1xuICAgIGZyb206ICdhbGxvd05vZGUnLFxuICAgIGlkOiAncmVwbGFjZS1hbGxvd25vZGUtYWxsb3dlZHR5cGVzLWFuZC1kaXNhbGxvd2VkdHlwZXMnLFxuICAgIHRvOiAnYWxsb3dFbGVtZW50J1xuICB9LFxuICB7XG4gICAgZnJvbTogJ2FsbG93ZWRUeXBlcycsXG4gICAgaWQ6ICdyZXBsYWNlLWFsbG93bm9kZS1hbGxvd2VkdHlwZXMtYW5kLWRpc2FsbG93ZWR0eXBlcycsXG4gICAgdG86ICdhbGxvd2VkRWxlbWVudHMnXG4gIH0sXG4gIHtcbiAgICBmcm9tOiAnZGlzYWxsb3dlZFR5cGVzJyxcbiAgICBpZDogJ3JlcGxhY2UtYWxsb3dub2RlLWFsbG93ZWR0eXBlcy1hbmQtZGlzYWxsb3dlZHR5cGVzJyxcbiAgICB0bzogJ2Rpc2FsbG93ZWRFbGVtZW50cydcbiAgfSxcbiAge2Zyb206ICdlc2NhcGVIdG1sJywgaWQ6ICdyZW1vdmUtYnVnZ3ktaHRtbC1pbi1tYXJrZG93bi1wYXJzZXInfSxcbiAge2Zyb206ICdpbmNsdWRlRWxlbWVudEluZGV4JywgaWQ6ICcjcmVtb3ZlLWluY2x1ZGVlbGVtZW50aW5kZXgnfSxcbiAge1xuICAgIGZyb206ICdpbmNsdWRlTm9kZUluZGV4JyxcbiAgICBpZDogJ2NoYW5nZS1pbmNsdWRlbm9kZWluZGV4LXRvLWluY2x1ZGVlbGVtZW50aW5kZXgnXG4gIH0sXG4gIHtmcm9tOiAnbGlua1RhcmdldCcsIGlkOiAncmVtb3ZlLWxpbmt0YXJnZXQnfSxcbiAge2Zyb206ICdwbHVnaW5zJywgaWQ6ICdjaGFuZ2UtcGx1Z2lucy10by1yZW1hcmtwbHVnaW5zJywgdG86ICdyZW1hcmtQbHVnaW5zJ30sXG4gIHtmcm9tOiAncmF3U291cmNlUG9zJywgaWQ6ICcjcmVtb3ZlLXJhd3NvdXJjZXBvcyd9LFxuICB7ZnJvbTogJ3JlbmRlcmVycycsIGlkOiAnY2hhbmdlLXJlbmRlcmVycy10by1jb21wb25lbnRzJywgdG86ICdjb21wb25lbnRzJ30sXG4gIHtmcm9tOiAnc291cmNlJywgaWQ6ICdjaGFuZ2Utc291cmNlLXRvLWNoaWxkcmVuJywgdG86ICdjaGlsZHJlbid9LFxuICB7ZnJvbTogJ3NvdXJjZVBvcycsIGlkOiAnI3JlbW92ZS1zb3VyY2Vwb3MnfSxcbiAge2Zyb206ICd0cmFuc2Zvcm1JbWFnZVVyaScsIGlkOiAnI2FkZC11cmx0cmFuc2Zvcm0nLCB0bzogJ3VybFRyYW5zZm9ybSd9LFxuICB7ZnJvbTogJ3RyYW5zZm9ybUxpbmtVcmknLCBpZDogJyNhZGQtdXJsdHJhbnNmb3JtJywgdG86ICd1cmxUcmFuc2Zvcm0nfVxuXVxuXG4vKipcbiAqIENvbXBvbmVudCB0byByZW5kZXIgbWFya2Rvd24uXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxPcHRpb25zPn0gb3B0aW9uc1xuICogICBQcm9wcy5cbiAqIEByZXR1cm5zIHtKU1guRWxlbWVudH1cbiAqICAgUmVhY3QgZWxlbWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1hcmtkb3duKG9wdGlvbnMpIHtcbiAgY29uc3QgYWxsb3dlZEVsZW1lbnRzID0gb3B0aW9ucy5hbGxvd2VkRWxlbWVudHNcbiAgY29uc3QgYWxsb3dFbGVtZW50ID0gb3B0aW9ucy5hbGxvd0VsZW1lbnRcbiAgY29uc3QgY2hpbGRyZW4gPSBvcHRpb25zLmNoaWxkcmVuIHx8ICcnXG4gIGNvbnN0IGNsYXNzTmFtZSA9IG9wdGlvbnMuY2xhc3NOYW1lXG4gIGNvbnN0IGNvbXBvbmVudHMgPSBvcHRpb25zLmNvbXBvbmVudHNcbiAgY29uc3QgZGlzYWxsb3dlZEVsZW1lbnRzID0gb3B0aW9ucy5kaXNhbGxvd2VkRWxlbWVudHNcbiAgY29uc3QgcmVoeXBlUGx1Z2lucyA9IG9wdGlvbnMucmVoeXBlUGx1Z2lucyB8fCBlbXB0eVBsdWdpbnNcbiAgY29uc3QgcmVtYXJrUGx1Z2lucyA9IG9wdGlvbnMucmVtYXJrUGx1Z2lucyB8fCBlbXB0eVBsdWdpbnNcbiAgY29uc3QgcmVtYXJrUmVoeXBlT3B0aW9ucyA9IG9wdGlvbnMucmVtYXJrUmVoeXBlT3B0aW9uc1xuICAgID8gey4uLm9wdGlvbnMucmVtYXJrUmVoeXBlT3B0aW9ucywgLi4uZW1wdHlSZW1hcmtSZWh5cGVPcHRpb25zfVxuICAgIDogZW1wdHlSZW1hcmtSZWh5cGVPcHRpb25zXG4gIGNvbnN0IHNraXBIdG1sID0gb3B0aW9ucy5za2lwSHRtbFxuICBjb25zdCB1bndyYXBEaXNhbGxvd2VkID0gb3B0aW9ucy51bndyYXBEaXNhbGxvd2VkXG4gIGNvbnN0IHVybFRyYW5zZm9ybSA9IG9wdGlvbnMudXJsVHJhbnNmb3JtIHx8IGRlZmF1bHRVcmxUcmFuc2Zvcm1cblxuICBjb25zdCBwcm9jZXNzb3IgPSB1bmlmaWVkKClcbiAgICAudXNlKHJlbWFya1BhcnNlKVxuICAgIC51c2UocmVtYXJrUGx1Z2lucylcbiAgICAudXNlKHJlbWFya1JlaHlwZSwgcmVtYXJrUmVoeXBlT3B0aW9ucylcbiAgICAudXNlKHJlaHlwZVBsdWdpbnMpXG5cbiAgY29uc3QgZmlsZSA9IG5ldyBWRmlsZSgpXG5cbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBmaWxlLnZhbHVlID0gY2hpbGRyZW5cbiAgfSBlbHNlIHtcbiAgICB1bnJlYWNoYWJsZShcbiAgICAgICdVbmV4cGVjdGVkIHZhbHVlIGAnICtcbiAgICAgICAgY2hpbGRyZW4gK1xuICAgICAgICAnYCBmb3IgYGNoaWxkcmVuYCBwcm9wLCBleHBlY3RlZCBgc3RyaW5nYCdcbiAgICApXG4gIH1cblxuICBpZiAoYWxsb3dlZEVsZW1lbnRzICYmIGRpc2FsbG93ZWRFbGVtZW50cykge1xuICAgIHVucmVhY2hhYmxlKFxuICAgICAgJ1VuZXhwZWN0ZWQgY29tYmluZWQgYGFsbG93ZWRFbGVtZW50c2AgYW5kIGBkaXNhbGxvd2VkRWxlbWVudHNgLCBleHBlY3RlZCBvbmUgb3IgdGhlIG90aGVyJ1xuICAgIClcbiAgfVxuXG4gIGZvciAoY29uc3QgZGVwcmVjYXRpb24gb2YgZGVwcmVjYXRpb25zKSB7XG4gICAgaWYgKE9iamVjdC5oYXNPd24ob3B0aW9ucywgZGVwcmVjYXRpb24uZnJvbSkpIHtcbiAgICAgIHVucmVhY2hhYmxlKFxuICAgICAgICAnVW5leHBlY3RlZCBgJyArXG4gICAgICAgICAgZGVwcmVjYXRpb24uZnJvbSArXG4gICAgICAgICAgJ2AgcHJvcCwgJyArXG4gICAgICAgICAgKGRlcHJlY2F0aW9uLnRvXG4gICAgICAgICAgICA/ICd1c2UgYCcgKyBkZXByZWNhdGlvbi50byArICdgIGluc3RlYWQnXG4gICAgICAgICAgICA6ICdyZW1vdmUgaXQnKSArXG4gICAgICAgICAgJyAoc2VlIDwnICtcbiAgICAgICAgICBjaGFuZ2Vsb2cgK1xuICAgICAgICAgICcjJyArXG4gICAgICAgICAgZGVwcmVjYXRpb24uaWQgK1xuICAgICAgICAgICc+IGZvciBtb3JlIGluZm8pJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1kYXN0VHJlZSA9IHByb2Nlc3Nvci5wYXJzZShmaWxlKVxuICAvKiogQHR5cGUge05vZGVzfSAqL1xuICBsZXQgaGFzdFRyZWUgPSBwcm9jZXNzb3IucnVuU3luYyhtZGFzdFRyZWUsIGZpbGUpXG5cbiAgLy8gV3JhcCBpbiBgZGl2YCBpZiB0aGVyZeKAmXMgYSBjbGFzcyBuYW1lLlxuICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgaGFzdFRyZWUgPSB7XG4gICAgICB0eXBlOiAnZWxlbWVudCcsXG4gICAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICAgIHByb3BlcnRpZXM6IHtjbGFzc05hbWV9LFxuICAgICAgLy8gQXNzdW1lIG5vIGRvY3R5cGVzLlxuICAgICAgY2hpbGRyZW46IC8qKiBAdHlwZSB7QXJyYXk8RWxlbWVudENvbnRlbnQ+fSAqLyAoXG4gICAgICAgIGhhc3RUcmVlLnR5cGUgPT09ICdyb290JyA/IGhhc3RUcmVlLmNoaWxkcmVuIDogW2hhc3RUcmVlXVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHZpc2l0KGhhc3RUcmVlLCB0cmFuc2Zvcm0pXG5cbiAgcmV0dXJuIHRvSnN4UnVudGltZShoYXN0VHJlZSwge1xuICAgIEZyYWdtZW50LFxuICAgIGNvbXBvbmVudHMsXG4gICAgaWdub3JlSW52YWxpZFN0eWxlOiB0cnVlLFxuICAgIGpzeCxcbiAgICBqc3hzLFxuICAgIHBhc3NLZXlzOiB0cnVlLFxuICAgIHBhc3NOb2RlOiB0cnVlXG4gIH0pXG5cbiAgLyoqIEB0eXBlIHtWaXNpdG9yfSAqL1xuICBmdW5jdGlvbiB0cmFuc2Zvcm0obm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICAgIGlmIChub2RlLnR5cGUgPT09ICdyYXcnICYmIHBhcmVudCAmJiB0eXBlb2YgaW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICBpZiAoc2tpcEh0bWwpIHtcbiAgICAgICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudC5jaGlsZHJlbltpbmRleF0gPSB7dHlwZTogJ3RleHQnLCB2YWx1ZTogbm9kZS52YWx1ZX1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluZGV4XG4gICAgfVxuXG4gICAgaWYgKG5vZGUudHlwZSA9PT0gJ2VsZW1lbnQnKSB7XG4gICAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICAgIGxldCBrZXlcblxuICAgICAgZm9yIChrZXkgaW4gdXJsQXR0cmlidXRlcykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgT2JqZWN0Lmhhc093bih1cmxBdHRyaWJ1dGVzLCBrZXkpICYmXG4gICAgICAgICAgT2JqZWN0Lmhhc093bihub2RlLnByb3BlcnRpZXMsIGtleSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBub2RlLnByb3BlcnRpZXNba2V5XVxuICAgICAgICAgIGNvbnN0IHRlc3QgPSB1cmxBdHRyaWJ1dGVzW2tleV1cbiAgICAgICAgICBpZiAodGVzdCA9PT0gbnVsbCB8fCB0ZXN0LmluY2x1ZGVzKG5vZGUudGFnTmFtZSkpIHtcbiAgICAgICAgICAgIG5vZGUucHJvcGVydGllc1trZXldID0gdXJsVHJhbnNmb3JtKFN0cmluZyh2YWx1ZSB8fCAnJyksIGtleSwgbm9kZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobm9kZS50eXBlID09PSAnZWxlbWVudCcpIHtcbiAgICAgIGxldCByZW1vdmUgPSBhbGxvd2VkRWxlbWVudHNcbiAgICAgICAgPyAhYWxsb3dlZEVsZW1lbnRzLmluY2x1ZGVzKG5vZGUudGFnTmFtZSlcbiAgICAgICAgOiBkaXNhbGxvd2VkRWxlbWVudHNcbiAgICAgICAgPyBkaXNhbGxvd2VkRWxlbWVudHMuaW5jbHVkZXMobm9kZS50YWdOYW1lKVxuICAgICAgICA6IGZhbHNlXG5cbiAgICAgIGlmICghcmVtb3ZlICYmIGFsbG93RWxlbWVudCAmJiB0eXBlb2YgaW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJlbW92ZSA9ICFhbGxvd0VsZW1lbnQobm9kZSwgaW5kZXgsIHBhcmVudClcbiAgICAgIH1cblxuICAgICAgaWYgKHJlbW92ZSAmJiBwYXJlbnQgJiYgdHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAodW53cmFwRGlzYWxsb3dlZCAmJiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSwgLi4ubm9kZS5jaGlsZHJlbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogTWFrZSBhIFVSTCBzYWZlLlxuICpcbiAqIEBzYXRpc2ZpZXMge1VybFRyYW5zZm9ybX1cbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogICBVUkwuXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICogICBTYWZlIFVSTC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRVcmxUcmFuc2Zvcm0odmFsdWUpIHtcbiAgLy8gU2FtZSBhczpcbiAgLy8gPGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb21hcmsvbWljcm9tYXJrL2Jsb2IvOTI5Mjc1ZS9wYWNrYWdlcy9taWNyb21hcmstdXRpbC1zYW5pdGl6ZS11cmkvZGV2L2luZGV4LmpzI0wzND5cbiAgLy8gQnV0IHdpdGhvdXQgdGhlIGBlbmNvZGVgIHBhcnQuXG4gIGNvbnN0IGNvbG9uID0gdmFsdWUuaW5kZXhPZignOicpXG4gIGNvbnN0IHF1ZXN0aW9uTWFyayA9IHZhbHVlLmluZGV4T2YoJz8nKVxuICBjb25zdCBudW1iZXJTaWduID0gdmFsdWUuaW5kZXhPZignIycpXG4gIGNvbnN0IHNsYXNoID0gdmFsdWUuaW5kZXhPZignLycpXG5cbiAgaWYgKFxuICAgIC8vIElmIHRoZXJlIGlzIG5vIHByb3RvY29sLCBpdOKAmXMgcmVsYXRpdmUuXG4gICAgY29sb24gPCAwIHx8XG4gICAgLy8gSWYgdGhlIGZpcnN0IGNvbG9uIGlzIGFmdGVyIGEgYD9gLCBgI2AsIG9yIGAvYCwgaXTigJlzIG5vdCBhIHByb3RvY29sLlxuICAgIChzbGFzaCA+IC0xICYmIGNvbG9uID4gc2xhc2gpIHx8XG4gICAgKHF1ZXN0aW9uTWFyayA+IC0xICYmIGNvbG9uID4gcXVlc3Rpb25NYXJrKSB8fFxuICAgIChudW1iZXJTaWduID4gLTEgJiYgY29sb24gPiBudW1iZXJTaWduKSB8fFxuICAgIC8vIEl0IGlzIGEgcHJvdG9jb2wsIGl0IHNob3VsZCBiZSBhbGxvd2VkLlxuICAgIHNhZmVQcm90b2NvbC50ZXN0KHZhbHVlLnNsaWNlKDAsIGNvbG9uKSlcbiAgKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICByZXR1cm4gJydcbn1cbiJdLCJuYW1lcyI6WyJ1bnJlYWNoYWJsZSIsInRvSnN4UnVudGltZSIsInVybEF0dHJpYnV0ZXMiLCJGcmFnbWVudCIsImpzeCIsImpzeHMiLCJyZW1hcmtQYXJzZSIsInJlbWFya1JlaHlwZSIsInVuaWZpZWQiLCJ2aXNpdCIsIlZGaWxlIiwiY2hhbmdlbG9nIiwiZW1wdHlQbHVnaW5zIiwiZW1wdHlSZW1hcmtSZWh5cGVPcHRpb25zIiwiYWxsb3dEYW5nZXJvdXNIdG1sIiwic2FmZVByb3RvY29sIiwiZGVwcmVjYXRpb25zIiwiZnJvbSIsImlkIiwidG8iLCJNYXJrZG93biIsIm9wdGlvbnMiLCJhbGxvd2VkRWxlbWVudHMiLCJhbGxvd0VsZW1lbnQiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImNvbXBvbmVudHMiLCJkaXNhbGxvd2VkRWxlbWVudHMiLCJyZWh5cGVQbHVnaW5zIiwicmVtYXJrUGx1Z2lucyIsInJlbWFya1JlaHlwZU9wdGlvbnMiLCJza2lwSHRtbCIsInVud3JhcERpc2FsbG93ZWQiLCJ1cmxUcmFuc2Zvcm0iLCJkZWZhdWx0VXJsVHJhbnNmb3JtIiwicHJvY2Vzc29yIiwidXNlIiwiZmlsZSIsInZhbHVlIiwiZGVwcmVjYXRpb24iLCJPYmplY3QiLCJoYXNPd24iLCJtZGFzdFRyZWUiLCJwYXJzZSIsImhhc3RUcmVlIiwicnVuU3luYyIsInR5cGUiLCJ0YWdOYW1lIiwicHJvcGVydGllcyIsInRyYW5zZm9ybSIsImlnbm9yZUludmFsaWRTdHlsZSIsInBhc3NLZXlzIiwicGFzc05vZGUiLCJub2RlIiwiaW5kZXgiLCJwYXJlbnQiLCJzcGxpY2UiLCJrZXkiLCJ0ZXN0IiwiaW5jbHVkZXMiLCJTdHJpbmciLCJyZW1vdmUiLCJjb2xvbiIsImluZGV4T2YiLCJxdWVzdGlvbk1hcmsiLCJudW1iZXJTaWduIiwic2xhc2giLCJzbGljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-markdown/lib/index.js\n");

/***/ })

};
;