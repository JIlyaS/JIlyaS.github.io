"use strict";(self.webpackChunkjilyas_github_io=self.webpackChunkjilyas_github_io||[]).push([[471],{"./src/components/ToggleTheme/ToggleTheme.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2,_Default$parameters2$;function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/ToggleTheme",component:__webpack_require__("./src/components/ToggleTheme/ToggleTheme.tsx").R,tags:["autodocs"],argTypes:{}};var Default={args:{}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/components/ToggleTheme/ToggleTheme.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>ToggleTheme});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ToggleTheme_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ToggleTheme/ToggleTheme.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ToggleTheme_module.Z,options);const ToggleTheme_ToggleTheme_module=ToggleTheme_module.Z&&ToggleTheme_module.Z.locals?ToggleTheme_module.Z.locals:void 0;var react=__webpack_require__("./node_modules/react/index.js"),Theme=function(Theme){return Theme.dark="dark",Theme.light="light",Theme}({}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var _path,ThemeContext=(0,react.createContext)({}),ThemeProvider=function ThemeProvider(_ref){var children=_ref.children,_useState2=_slicedToArray((0,react.useState)(function getDefaultTheme(){return localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?Theme.dark:Theme.light)}()),2),theme=_useState2[0],setTheme=_useState2[1];console.log(theme),(0,react.useInsertionEffect)((function(){localStorage.setItem("theme",theme),document.documentElement.setAttribute("data-theme",theme)}),[theme]);var toggleTheme=(0,react.useCallback)((function(){return setTheme((function(v){return v===Theme.light?Theme.dark:Theme.light}))}),[]),value=(0,react.useMemo)((function(){return{theme,toggleTheme,setTheme}}),[theme,toggleTheme,setTheme]);return(0,jsx_runtime.jsx)(ThemeContext.Provider,{value,children})};ThemeProvider.displayName="ThemeProvider";try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/theming/ThemeProvider.tsx#ThemeProvider"]={docgenInfo:ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/theming/ThemeProvider.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const invert_color=function SvgInvertColor(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none"},props),_path||(_path=react.createElement("path",{fill:"#000",fillRule:"evenodd",d:"M3.333 11.666c0-2.454 2.222-5.787 6.667-10 4.444 4.213 6.667 7.546 6.667 10a6.667 6.667 0 0 1-6.46 6.664l-.207.003a6.667 6.667 0 0 1-6.667-6.666ZM10 3.994l-.18.182C6.581 7.465 5 10.024 5 11.666a5 5 0 0 0 5 5V3.994Z",clipRule:"evenodd"})))};var bulb_path;function bulb_extends(){return bulb_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},bulb_extends.apply(this,arguments)}const bulb=function SvgBulb(props){return react.createElement("svg",bulb_extends({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none"},props),bulb_path||(bulb_path=react.createElement("path",{fill:"#000",fillRule:"evenodd",d:"M12.5 16.667a.833.833 0 1 1 0 1.666h-5a.833.833 0 1 1 0-1.666h5Zm-2.5-15c3.927 0 6.667 2.367 6.667 6.149 0 1.542-.57 2.82-1.656 4.225l-.197.25c-.175.216-.837.994-1.06 1.269l-.127.163c-.175.235-.266.397-.29.483l-.02.13A.833.833 0 0 1 12.5 15h-5a.834.834 0 0 1-.816-.665l-.02-.13c-.025-.085-.116-.247-.291-.482l-.127-.163-1.06-1.27-.197-.249c-1.086-1.405-1.656-2.683-1.656-4.225 0-3.782 2.74-6.15 6.667-6.15Zm0 1.666c-3.056 0-5 1.68-5 4.483 0 1.101.427 2.064 1.302 3.199l.181.23c.14.174.716.85 1.001 1.196l.122.151c.21.27.374.51.493.741H11.9l.077-.14c.11-.188.249-.385.417-.6l.476-.577c.266-.316.553-.655.646-.771l.181-.23C14.573 9.88 15 8.917 15 7.815c0-2.802-1.944-4.482-5-4.482Z",clipRule:"evenodd"})))};var ToggleTheme=function ToggleTheme(){var _useThemeContext=function useThemeContext(){return(0,react.useContext)(ThemeContext)}(),theme=_useThemeContext.theme,toggleTheme=_useThemeContext.toggleTheme;return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("input",{type:"checkbox",className:ToggleTheme_ToggleTheme_module.checkbox,checked:theme!==Theme.light,id:"chk",onChange:toggleTheme}),(0,jsx_runtime.jsxs)("label",{className:ToggleTheme_ToggleTheme_module.label,htmlFor:"chk",children:[(0,jsx_runtime.jsx)(bulb,{className:ToggleTheme_ToggleTheme_module.icon}),(0,jsx_runtime.jsx)(invert_color,{className:ToggleTheme_ToggleTheme_module.icon}),(0,jsx_runtime.jsx)("div",{className:ToggleTheme_ToggleTheme_module.ball})]})]})};ToggleTheme.displayName="ToggleTheme";try{ToggleTheme.displayName="ToggleTheme",ToggleTheme.__docgenInfo={description:"",displayName:"ToggleTheme",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ToggleTheme/ToggleTheme.tsx#ToggleTheme"]={docgenInfo:ToggleTheme.__docgenInfo,name:"ToggleTheme",path:"src/components/ToggleTheme/ToggleTheme.tsx#ToggleTheme"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ToggleTheme/ToggleTheme.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,":root{--font-family-main: roboto, arial, sans-serif;--font-size-s: 14px;--font-line-s: 16px;--font-s: var(--font-size-s) / var(--font-line-s) var(--font-family-main);--font-size-m: 16px;--font-line-m: 20px;--font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);--bg-color: #fff;--blue-gray-50: #f8fafc;--blue-gray-200: #e2e8f0;--blue-gray-300: #cbd5e1;--blue-gray-400: #94a3b8;--blue-gray-600: #475569;--blue-gray-700: #334155;--blue-gray-800: #1e293b;--blue-300: #93c5fd;--primary-color: #302ae6;--secondary-color: #536390;--font-color: #424242;--slate-400: #94a3b8;--heading-color: #292922;--green-color-500: #22c55e;--red-color-500: #ef4444;--yellow-400: #facc15;--yellow-600: #ca8a04}[data-theme=dark]{--bg-color: #1e293b;--blue-gray-50: #1e293b;--blue-gray-200: #334155;--blue-gray-300: #334155;--blue-gray-400: #475569;--blue-gray-600: #94a3b8;--blue-gray-700: #cbd5e1;--blue-gray-800: #f8fafc;--blue-300: #1d4ed8;--primary-color: #9a97f3;--secondary-color: #818cab;--font-color: #e1e1ff;--slate-400: #475569;--heading-color: #818cab;--green-color-500: #22c55e;--red-color-500: #ef4444}.b6OU0A4PUoZOk4M7DGE0{position:absolute;opacity:0}.usf4LUqZfSglkjSdK6VA{position:relative;display:flex;gap:2px;align-items:center;box-sizing:border-box;width:50px;height:26px;padding:5px;background-color:#121923;border-radius:50px;cursor:pointer}.OD7qn8h8N_bs0v4zmuVL{position:absolute;top:2px;left:2px;width:22px;height:22px;background-color:#fff;border-radius:50%;transform:translateX(0);transition:transform .2s linear}.b6OU0A4PUoZOk4M7DGE0:checked+.usf4LUqZfSglkjSdK6VA .OD7qn8h8N_bs0v4zmuVL{transform:translateX(24px)}.EOg6pTyHEOLteSEFvHKL{width:20px;height:20px}.EOg6pTyHEOLteSEFvHKL path{fill:var(--yellow-400)}","",{version:3,sources:["webpack://./src/app/styles/vars.module.scss","webpack://./src/components/ToggleTheme/ToggleTheme.module.scss"],names:[],mappings:"AAAA,MACE,6CAAA,CACA,mBAAA,CACA,mBAAA,CACA,yEAAA,CACA,mBAAA,CACA,mBAAA,CACA,yEAAA,CACA,gBAAA,CACA,uBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,mBAAA,CACA,wBAAA,CACA,0BAAA,CACA,qBAAA,CACA,oBAAA,CACA,wBAAA,CACA,0BAAA,CACA,wBAAA,CACA,qBAAA,CACA,qBAAA,CAGF,kBACE,mBAAA,CACA,uBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,wBAAA,CACA,mBAAA,CACA,wBAAA,CACA,0BAAA,CACA,qBAAA,CACA,oBAAA,CACA,wBAAA,CACA,0BAAA,CACA,wBAAA,CC1CF,sBACE,iBAAA,CACA,SAAA,CAGF,sBACE,iBAAA,CACA,YAAA,CACA,OAAA,CACA,kBAAA,CACA,qBAAA,CACA,UAAA,CACA,WAAA,CACA,WAAA,CACA,wBD0CK,CCzCL,kBAAA,CACA,cAAA,CAGF,sBACE,iBAAA,CACA,OAAA,CACA,QAAA,CACA,UAAA,CACA,WAAA,CACA,qBDgCM,CC/BN,iBAAA,CACA,uBAAA,CACA,+BAAA,CAGF,0EACE,0BAAA,CAGF,sBACE,UAAA,CACA,WAAA,CAEA,2BACE,sBAAA",sourcesContent:[":root {\n  --font-family-main: roboto, arial, sans-serif;\n  --font-size-s: 14px;\n  --font-line-s: 16px;\n  --font-s: var(--font-size-s) / var(--font-line-s) var(--font-family-main);\n  --font-size-m: 16px;\n  --font-line-m: 20px;\n  --font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);\n  --bg-color: #fff;\n  --blue-gray-50: #f8fafc;\n  --blue-gray-200: #e2e8f0;\n  --blue-gray-300: #cbd5e1;\n  --blue-gray-400: #94a3b8;\n  --blue-gray-600: #475569;\n  --blue-gray-700: #334155;\n  --blue-gray-800: #1e293b;\n  --blue-300: #93c5fd;\n  --primary-color: #302ae6;\n  --secondary-color: #536390;\n  --font-color: #424242;\n  --slate-400: #94a3b8;\n  --heading-color: #292922;\n  --green-color-500: #22c55e;\n  --red-color-500: #ef4444;\n  --yellow-400: #facc15;\n  --yellow-600: #ca8a04;\n}\n\n[data-theme='dark'] {\n  --bg-color: #1e293b;\n  --blue-gray-50: #1e293b;\n  --blue-gray-200: #334155;\n  --blue-gray-300: #334155;\n  --blue-gray-400: #475569;\n  --blue-gray-600: #94a3b8;\n  --blue-gray-700: #cbd5e1;\n  --blue-gray-800: #f8fafc;\n  --blue-300: #1d4ed8;\n  --primary-color: #9a97f3;\n  --secondary-color: #818cab;\n  --font-color: #e1e1ff;\n  --slate-400: #475569;\n  --heading-color: #818cab;\n  --green-color-500: #22c55e;\n  --red-color-500: #ef4444;\n}\n\n// Colors\n$green-color: var(--green-color-500);\n$red-color: var(--red-color-500);\n$bg-color: var(--blue-gray-50);\n$bg-gray-color: var(--blue-gray-50);\n$border-color: var(--slate-400);\n$border-color-blue: var(--blue-300);\n$primary-text-color: var(--blue-gray-800);\n$secondary-text-color: var(--blue-gray-600);\n$gray: var(--blue-gray-200);\n$blue: var(--blue-300);\n$dark: #121923;\n$white: #fff;\n\n// Text-colors\n$text-gray-color: var(--blue-gray-700);\n","@import '../../app/styles/vars.module';\n\n.checkbox {\n  position: absolute;\n  opacity: 0;\n}\n\n.label {\n  position: relative;\n  display: flex;\n  gap: 2px;\n  align-items: center;\n  box-sizing: border-box;\n  width: 50px;\n  height: 26px;\n  padding: 5px;\n  background-color: $dark;\n  border-radius: 50px;\n  cursor: pointer;\n}\n\n.ball {\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 22px;\n  height: 22px;\n  background-color: $white;\n  border-radius: 50%;\n  transform: translateX(0);\n  transition: transform 0.2s linear;\n}\n\n.checkbox:checked + .label .ball {\n  transform: translateX(24px);\n}\n\n.icon {\n  width: 20px;\n  height: 20px;\n\n  path {\n    fill: var(--yellow-400);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={checkbox:"b6OU0A4PUoZOk4M7DGE0",label:"usf4LUqZfSglkjSdK6VA",ball:"OD7qn8h8N_bs0v4zmuVL",icon:"EOg6pTyHEOLteSEFvHKL"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);