"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/setup/page",{

/***/ "(app-pages-browser)/./lib/models/fetch-models.ts":
/*!************************************!*\
  !*** ./lib/models/fetch-models.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchHostedModels: function() { return /* binding */ fetchHostedModels; },\n/* harmony export */   fetchOllamaModels: function() { return /* binding */ fetchOllamaModels; },\n/* harmony export */   fetchOpenRouterModels: function() { return /* binding */ fetchOpenRouterModels; }\n/* harmony export */ });\n/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sonner */ \"(app-pages-browser)/./node_modules/sonner/dist/index.mjs\");\n/* harmony import */ var _llm_llm_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./llm/llm-list */ \"(app-pages-browser)/./lib/models/llm/llm-list.ts\");\n\n\nconst fetchHostedModels = async (profile)=>{\n    try {\n        const providers = [\n            \"google\",\n            \"anthropic\",\n            \"mistral\",\n            \"groq\",\n            \"perplexity\"\n        ];\n        if (profile.use_azure_openai) {\n            providers.push(\"azure\");\n        } else {\n            providers.push(\"openai\");\n        }\n        const response = await fetch(\"/api/keys\");\n        if (!response.ok) {\n            throw new Error(\"Server is not responding.\");\n        }\n        const data = await response.json();\n        let modelsToAdd = [];\n        for (const provider of providers){\n            let providerKey;\n            if (provider === \"google\") {\n                providerKey = \"google_gemini_api_key\";\n            } else if (provider === \"azure\") {\n                providerKey = \"azure_openai_api_key\";\n            } else {\n                providerKey = \"\".concat(provider, \"_api_key\");\n            }\n            if ((profile === null || profile === void 0 ? void 0 : profile[providerKey]) || data.isUsingEnvKeyMap[provider]) {\n                const models = _llm_llm_list__WEBPACK_IMPORTED_MODULE_1__.LLM_LIST_MAP[provider];\n                if (Array.isArray(models)) {\n                    modelsToAdd.push(...models);\n                }\n            }\n        }\n        return {\n            envKeyMap: data.isUsingEnvKeyMap,\n            hostedModels: modelsToAdd\n        };\n    } catch (error) {\n        console.warn(\"Error fetching hosted models: \" + error);\n    }\n};\nconst fetchOllamaModels = async ()=>{\n    try {\n        const response = await fetch(\"127.0.0.1:11434\" + \"/api/tags\");\n        if (!response.ok) {\n            throw new Error(\"Ollama server is not responding.\");\n        }\n        const data = await response.json();\n        const localModels = data.models.map((model)=>({\n                modelId: model.name,\n                modelName: model.name,\n                provider: \"ollama\",\n                hostedId: model.name,\n                platformLink: \"https://ollama.ai/library\",\n                imageInput: false\n            }));\n        return localModels;\n    } catch (error) {\n        console.warn(\"Error fetching Ollama models: \" + error);\n    }\n};\nconst fetchOpenRouterModels = async ()=>{\n    try {\n        const response = await fetch(\"https://openrouter.ai/api/v1/models\");\n        if (!response.ok) {\n            throw new Error(\"OpenRouter server is not responding.\");\n        }\n        const { data } = await response.json();\n        const openRouterModels = data.map((model)=>({\n                modelId: model.id,\n                modelName: model.id,\n                provider: \"openrouter\",\n                hostedId: model.name,\n                platformLink: \"https://openrouter.dev\",\n                imageInput: false,\n                maxContext: model.context_length\n            }));\n        return openRouterModels;\n    } catch (error) {\n        console.error(\"Error fetching Open Router models: \" + error);\n        sonner__WEBPACK_IMPORTED_MODULE_0__.toast.error(\"Error fetching Open Router models: \" + error);\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9tb2RlbHMvZmV0Y2gtbW9kZWxzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRThCO0FBQ2U7QUFFdEMsTUFBTUUsb0JBQW9CLE9BQU9DO0lBQ3RDLElBQUk7UUFDRixNQUFNQyxZQUFZO1lBQUM7WUFBVTtZQUFhO1lBQVc7WUFBUTtTQUFhO1FBRTFFLElBQUlELFFBQVFFLGdCQUFnQixFQUFFO1lBQzVCRCxVQUFVRSxJQUFJLENBQUM7UUFDakIsT0FBTztZQUNMRixVQUFVRSxJQUFJLENBQUM7UUFDakI7UUFFQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU07UUFFN0IsSUFBSSxDQUFDRCxTQUFTRSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxJQUFJQyxNQUFPO1FBQ25CO1FBRUEsTUFBTUMsT0FBTyxNQUFNSixTQUFTSyxJQUFJO1FBRWhDLElBQUlDLGNBQXFCLEVBQUU7UUFFM0IsS0FBSyxNQUFNQyxZQUFZVixVQUFXO1lBQ2hDLElBQUlXO1lBRUosSUFBSUQsYUFBYSxVQUFVO2dCQUN6QkMsY0FBYztZQUNoQixPQUFPLElBQUlELGFBQWEsU0FBUztnQkFDL0JDLGNBQWM7WUFDaEIsT0FBTztnQkFDTEEsY0FBYyxHQUFZLE9BQVRELFVBQVM7WUFDNUI7WUFFQSxJQUFJWCxDQUFBQSxvQkFBQUEsOEJBQUFBLE9BQVMsQ0FBQ1ksWUFBWSxLQUFJSixLQUFLSyxnQkFBZ0IsQ0FBQ0YsU0FBUyxFQUFFO2dCQUM3RCxNQUFNRyxTQUFTaEIsdURBQVksQ0FBQ2EsU0FBUztnQkFFckMsSUFBSUksTUFBTUMsT0FBTyxDQUFDRixTQUFTO29CQUN6QkosWUFBWVAsSUFBSSxJQUFJVztnQkFDdEI7WUFDRjtRQUNGO1FBRUEsT0FBTztZQUNMRyxXQUFXVCxLQUFLSyxnQkFBZ0I7WUFDaENLLGNBQWNSO1FBQ2hCO0lBQ0YsRUFBRSxPQUFPUyxPQUFPO1FBQ2RDLFFBQVFDLElBQUksQ0FBQyxtQ0FBbUNGO0lBQ2xEO0FBQ0YsRUFBQztBQUVNLE1BQU1HLG9CQUFvQjtJQUMvQixJQUFJO1FBQ0YsTUFBTWxCLFdBQVcsTUFBTUMsTUFDckJrQixpQkFBa0MsR0FBRztRQUd2QyxJQUFJLENBQUNuQixTQUFTRSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxJQUFJQyxNQUFPO1FBQ25CO1FBRUEsTUFBTUMsT0FBTyxNQUFNSixTQUFTSyxJQUFJO1FBRWhDLE1BQU1pQixjQUFxQmxCLEtBQUtNLE1BQU0sQ0FBQ2EsR0FBRyxDQUFDLENBQUNDLFFBQWdCO2dCQUMxREMsU0FBU0QsTUFBTUUsSUFBSTtnQkFDbkJDLFdBQVdILE1BQU1FLElBQUk7Z0JBQ3JCbkIsVUFBVTtnQkFDVnFCLFVBQVVKLE1BQU1FLElBQUk7Z0JBQ3BCRyxjQUFjO2dCQUNkQyxZQUFZO1lBQ2Q7UUFFQSxPQUFPUjtJQUNULEVBQUUsT0FBT1AsT0FBTztRQUNkQyxRQUFRQyxJQUFJLENBQUMsbUNBQW1DRjtJQUNsRDtBQUNGLEVBQUM7QUFFTSxNQUFNZ0Isd0JBQXdCO0lBQ25DLElBQUk7UUFDRixNQUFNL0IsV0FBVyxNQUFNQyxNQUFNO1FBRTdCLElBQUksQ0FBQ0QsU0FBU0UsRUFBRSxFQUFFO1lBQ2hCLE1BQU0sSUFBSUMsTUFBTztRQUNuQjtRQUVBLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTUosU0FBU0ssSUFBSTtRQUVwQyxNQUFNMkIsbUJBQW1CNUIsS0FBS21CLEdBQUcsQ0FDL0IsQ0FBQ0MsUUFJcUI7Z0JBQ3BCQyxTQUFTRCxNQUFNUyxFQUFFO2dCQUNqQk4sV0FBV0gsTUFBTVMsRUFBRTtnQkFDbkIxQixVQUFVO2dCQUNWcUIsVUFBVUosTUFBTUUsSUFBSTtnQkFDcEJHLGNBQWM7Z0JBQ2RDLFlBQVk7Z0JBQ1pJLFlBQVlWLE1BQU1XLGNBQWM7WUFDbEM7UUFHRixPQUFPSDtJQUNULEVBQUUsT0FBT2pCLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLHdDQUF3Q0E7UUFDdER0Qix5Q0FBS0EsQ0FBQ3NCLEtBQUssQ0FBQyx3Q0FBd0NBO0lBQ3REO0FBQ0YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvbW9kZWxzL2ZldGNoLW1vZGVscy50cz82NGYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYmxlcyB9IGZyb20gXCJAL3N1cGFiYXNlL3R5cGVzXCJcbmltcG9ydCB7IExMTSwgTExNSUQsIE9wZW5Sb3V0ZXJMTE0gfSBmcm9tIFwiQC90eXBlc1wiXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJzb25uZXJcIlxuaW1wb3J0IHsgTExNX0xJU1RfTUFQIH0gZnJvbSBcIi4vbGxtL2xsbS1saXN0XCJcblxuZXhwb3J0IGNvbnN0IGZldGNoSG9zdGVkTW9kZWxzID0gYXN5bmMgKHByb2ZpbGU6IFRhYmxlczxcInByb2ZpbGVzXCI+KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcHJvdmlkZXJzID0gW1wiZ29vZ2xlXCIsIFwiYW50aHJvcGljXCIsIFwibWlzdHJhbFwiLCBcImdyb3FcIiwgXCJwZXJwbGV4aXR5XCJdXG5cbiAgICBpZiAocHJvZmlsZS51c2VfYXp1cmVfb3BlbmFpKSB7XG4gICAgICBwcm92aWRlcnMucHVzaChcImF6dXJlXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3ZpZGVycy5wdXNoKFwib3BlbmFpXCIpXG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkva2V5c1wiKVxuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTZXJ2ZXIgaXMgbm90IHJlc3BvbmRpbmcuYClcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICBsZXQgbW9kZWxzVG9BZGQ6IExMTVtdID0gW11cblxuICAgIGZvciAoY29uc3QgcHJvdmlkZXIgb2YgcHJvdmlkZXJzKSB7XG4gICAgICBsZXQgcHJvdmlkZXJLZXk6IGtleW9mIHR5cGVvZiBwcm9maWxlXG5cbiAgICAgIGlmIChwcm92aWRlciA9PT0gXCJnb29nbGVcIikge1xuICAgICAgICBwcm92aWRlcktleSA9IFwiZ29vZ2xlX2dlbWluaV9hcGlfa2V5XCJcbiAgICAgIH0gZWxzZSBpZiAocHJvdmlkZXIgPT09IFwiYXp1cmVcIikge1xuICAgICAgICBwcm92aWRlcktleSA9IFwiYXp1cmVfb3BlbmFpX2FwaV9rZXlcIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvdmlkZXJLZXkgPSBgJHtwcm92aWRlcn1fYXBpX2tleWAgYXMga2V5b2YgdHlwZW9mIHByb2ZpbGVcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2ZpbGU/Lltwcm92aWRlcktleV0gfHwgZGF0YS5pc1VzaW5nRW52S2V5TWFwW3Byb3ZpZGVyXSkge1xuICAgICAgICBjb25zdCBtb2RlbHMgPSBMTE1fTElTVF9NQVBbcHJvdmlkZXJdXG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobW9kZWxzKSkge1xuICAgICAgICAgIG1vZGVsc1RvQWRkLnB1c2goLi4ubW9kZWxzKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGVudktleU1hcDogZGF0YS5pc1VzaW5nRW52S2V5TWFwLFxuICAgICAgaG9zdGVkTW9kZWxzOiBtb2RlbHNUb0FkZFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLndhcm4oXCJFcnJvciBmZXRjaGluZyBob3N0ZWQgbW9kZWxzOiBcIiArIGVycm9yKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaE9sbGFtYU1vZGVscyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfT0xMQU1BX1VSTCArIFwiL2FwaS90YWdzXCJcbiAgICApXG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9sbGFtYSBzZXJ2ZXIgaXMgbm90IHJlc3BvbmRpbmcuYClcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICBjb25zdCBsb2NhbE1vZGVsczogTExNW10gPSBkYXRhLm1vZGVscy5tYXAoKG1vZGVsOiBhbnkpID0+ICh7XG4gICAgICBtb2RlbElkOiBtb2RlbC5uYW1lIGFzIExMTUlELFxuICAgICAgbW9kZWxOYW1lOiBtb2RlbC5uYW1lLFxuICAgICAgcHJvdmlkZXI6IFwib2xsYW1hXCIsXG4gICAgICBob3N0ZWRJZDogbW9kZWwubmFtZSxcbiAgICAgIHBsYXRmb3JtTGluazogXCJodHRwczovL29sbGFtYS5haS9saWJyYXJ5XCIsXG4gICAgICBpbWFnZUlucHV0OiBmYWxzZVxuICAgIH0pKVxuXG4gICAgcmV0dXJuIGxvY2FsTW9kZWxzXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS53YXJuKFwiRXJyb3IgZmV0Y2hpbmcgT2xsYW1hIG1vZGVsczogXCIgKyBlcnJvcilcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hPcGVuUm91dGVyTW9kZWxzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL29wZW5yb3V0ZXIuYWkvYXBpL3YxL21vZGVsc1wiKVxuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPcGVuUm91dGVyIHNlcnZlciBpcyBub3QgcmVzcG9uZGluZy5gKVxuICAgIH1cblxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICBjb25zdCBvcGVuUm91dGVyTW9kZWxzID0gZGF0YS5tYXAoXG4gICAgICAobW9kZWw6IHtcbiAgICAgICAgaWQ6IHN0cmluZ1xuICAgICAgICBuYW1lOiBzdHJpbmdcbiAgICAgICAgY29udGV4dF9sZW5ndGg6IG51bWJlclxuICAgICAgfSk6IE9wZW5Sb3V0ZXJMTE0gPT4gKHtcbiAgICAgICAgbW9kZWxJZDogbW9kZWwuaWQgYXMgTExNSUQsXG4gICAgICAgIG1vZGVsTmFtZTogbW9kZWwuaWQsXG4gICAgICAgIHByb3ZpZGVyOiBcIm9wZW5yb3V0ZXJcIixcbiAgICAgICAgaG9zdGVkSWQ6IG1vZGVsLm5hbWUsXG4gICAgICAgIHBsYXRmb3JtTGluazogXCJodHRwczovL29wZW5yb3V0ZXIuZGV2XCIsXG4gICAgICAgIGltYWdlSW5wdXQ6IGZhbHNlLFxuICAgICAgICBtYXhDb250ZXh0OiBtb2RlbC5jb250ZXh0X2xlbmd0aFxuICAgICAgfSlcbiAgICApXG5cbiAgICByZXR1cm4gb3BlblJvdXRlck1vZGVsc1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBPcGVuIFJvdXRlciBtb2RlbHM6IFwiICsgZXJyb3IpXG4gICAgdG9hc3QuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBPcGVuIFJvdXRlciBtb2RlbHM6IFwiICsgZXJyb3IpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ0b2FzdCIsIkxMTV9MSVNUX01BUCIsImZldGNoSG9zdGVkTW9kZWxzIiwicHJvZmlsZSIsInByb3ZpZGVycyIsInVzZV9henVyZV9vcGVuYWkiLCJwdXNoIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsIm1vZGVsc1RvQWRkIiwicHJvdmlkZXIiLCJwcm92aWRlcktleSIsImlzVXNpbmdFbnZLZXlNYXAiLCJtb2RlbHMiLCJBcnJheSIsImlzQXJyYXkiLCJlbnZLZXlNYXAiLCJob3N0ZWRNb2RlbHMiLCJlcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwiZmV0Y2hPbGxhbWFNb2RlbHMiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfT0xMQU1BX1VSTCIsImxvY2FsTW9kZWxzIiwibWFwIiwibW9kZWwiLCJtb2RlbElkIiwibmFtZSIsIm1vZGVsTmFtZSIsImhvc3RlZElkIiwicGxhdGZvcm1MaW5rIiwiaW1hZ2VJbnB1dCIsImZldGNoT3BlblJvdXRlck1vZGVscyIsIm9wZW5Sb3V0ZXJNb2RlbHMiLCJpZCIsIm1heENvbnRleHQiLCJjb250ZXh0X2xlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/models/fetch-models.ts\n"));

/***/ })

});