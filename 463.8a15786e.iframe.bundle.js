/*! For license information please see 463.8a15786e.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkjilyas_github_io=self.webpackChunkjilyas_github_io||[]).push([[463],{"./src/components/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>Avatar});__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),index_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Avatar/index.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(index_module.Z,options);const Avatar_index_module=index_module.Z&&index_module.Z.locals?index_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Avatar=function Avatar(_ref){var src=_ref.src;return src?(0,jsx_runtime.jsx)("img",{src,alt:"avatar",className:classnames_default()(Avatar_index_module.avatar,Avatar_index_module["avatar-active"])}):(0,jsx_runtime.jsx)("div",{className:classnames_default()(Avatar_index_module.avatar,Avatar_index_module["avatar-empty"])})};try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Header/Header.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>Header});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),index_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Header/index.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(index_module.Z,options);const Header_index_module=index_module.Z&&index_module.Z.locals?index_module.Z.locals:void 0;var _path,Avatar=__webpack_require__("./src/components/Avatar/Avatar.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const logo=function SvgLogo(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:74,height:25,fill:"none"},props),_path||(_path=react.createElement("path",{fill:"#1E293B",d:"M3.12 10.6c0 1.264.272 2.392.816 3.384a6.31 6.31 0 0 0 2.28 2.352c.96.576 2.048.864 3.264.864 1.232 0 2.32-.288 3.264-.864A6.13 6.13 0 0 0 15 13.984c.56-.992.84-2.12.84-3.384 0-1.264-.28-2.392-.84-3.384a6.13 6.13 0 0 0-2.256-2.352C11.8 4.288 10.712 4 9.48 4c-1.216 0-2.304.288-3.264.864a6.31 6.31 0 0 0-2.28 2.352c-.544.992-.816 2.12-.816 3.384Zm-2.16 0c0-1.232.208-2.368.624-3.408a8.225 8.225 0 0 1 1.8-2.736 8.104 8.104 0 0 1 2.712-1.824c1.04-.448 2.168-.672 3.384-.672 1.232 0 2.36.224 3.384.672a8.104 8.104 0 0 1 2.712 1.824 7.93 7.93 0 0 1 1.776 2.736c.432 1.04.648 2.176.648 3.408a8.913 8.913 0 0 1-.648 3.408 8.184 8.184 0 0 1-1.776 2.76 8.61 8.61 0 0 1-2.712 1.824c-1.024.432-2.152.648-3.384.648-1.216 0-2.344-.216-3.384-.648a8.61 8.61 0 0 1-2.712-1.824 8.496 8.496 0 0 1-1.8-2.76A9.214 9.214 0 0 1 .96 10.6Zm21.72 4.08c0 .88.2 1.56.6 2.04.4.48.985.72 1.753.72.56 0 1.048-.112 1.464-.336.432-.24.76-.568.984-.984.24-.416.36-.896.36-1.44V7.96h1.92V19h-1.92v-1.728c-.368.656-.824 1.152-1.368 1.488-.544.32-1.184.48-1.92.48-1.152 0-2.072-.392-2.76-1.176-.688-.784-1.032-1.832-1.032-3.144V7.96h1.92v6.72Zm9.01-6.72h5.52v1.8h-5.52v-1.8Zm1.8-3.84h1.92V19h-1.92V4.12ZM39.136.28h1.92V19h-1.92V.28Zm6.395 15.312c0 .416.096.776.288 1.08.208.304.488.536.84.696.368.144.784.216 1.248.216.592 0 1.12-.12 1.584-.36a2.778 2.778 0 0 0 1.56-2.544l.384 1.44c0 .704-.216 1.288-.648 1.752a3.761 3.761 0 0 1-1.56 1.032 5.245 5.245 0 0 1-1.824.336 4.487 4.487 0 0 1-1.896-.408 3.552 3.552 0 0 1-1.392-1.224c-.352-.528-.528-1.168-.528-1.92 0-1.072.376-1.928 1.128-2.568.768-.656 1.832-.984 3.192-.984.8 0 1.464.096 1.992.288.544.176.976.384 1.296.624.32.224.536.408.648.552v1.128a5.667 5.667 0 0 0-1.728-.816 6.622 6.622 0 0 0-1.896-.264c-.624 0-1.136.08-1.536.24-.384.16-.672.384-.864.672-.192.288-.288.632-.288 1.032Zm-.288-5.088-.936-1.416c.416-.304.984-.608 1.704-.912.736-.304 1.616-.456 2.64-.456.864 0 1.616.136 2.256.408.656.256 1.16.632 1.512 1.128.368.496.552 1.104.552 1.824V19h-1.92v-7.656c0-.384-.064-.696-.192-.936a1.43 1.43 0 0 0-.552-.6 2.344 2.344 0 0 0-.792-.312 4.65 4.65 0 0 0-.96-.096c-.544 0-1.04.064-1.488.192-.432.128-.8.28-1.104.456a8.552 8.552 0 0 0-.72.456ZM64.865 7.96l-7.2 16.32h-2.16l3.024-6.84-4.224-9.48h2.28l3.504 8.64-.792-.096 3.408-8.544h2.16Zm2.266 7.656c.224.336.48.648.768.936.288.288.616.52.984.696.384.16.8.24 1.248.24.544 0 .968-.12 1.272-.36.32-.256.48-.6.48-1.032 0-.384-.128-.704-.384-.96a2.759 2.759 0 0 0-.936-.672 12.245 12.245 0 0 0-1.224-.528c-.48-.192-.968-.416-1.464-.672a4.248 4.248 0 0 1-1.224-1.032c-.32-.432-.48-.968-.48-1.608 0-.656.168-1.2.504-1.632.352-.432.8-.752 1.344-.96a4.925 4.925 0 0 1 1.728-.312c.592 0 1.144.096 1.656.288.528.192.992.448 1.392.768.4.32.712.688.936 1.104l-1.536.984a3.765 3.765 0 0 0-1.152-1.032 2.9 2.9 0 0 0-1.536-.408c-.4 0-.744.088-1.032.264-.288.176-.432.448-.432.816 0 .288.112.544.336.768.224.224.512.424.864.6s.72.344 1.104.504c.64.256 1.224.536 1.752.84.528.288.944.64 1.248 1.056.32.416.48.952.48 1.608 0 .96-.352 1.76-1.056 2.4-.688.64-1.6.96-2.736.96-.736 0-1.4-.128-1.992-.384a5.158 5.158 0 0 1-1.512-1.032c-.4-.416-.704-.84-.912-1.272l1.512-.936Z"})))};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Header=function Header(){return(0,jsx_runtime.jsxs)("div",{className:Header_index_module.root,children:[(0,jsx_runtime.jsx)(logo,{}),(0,jsx_runtime.jsx)(Avatar.q,{})]})};Header.displayName="Header";try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Header/Header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/components/Header/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Avatar/index.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".tLOOhBR8S0vWAd5tcTpf{width:62px;height:62px;border-radius:50%}.PumPtlDKGgQCTqSt9yOd{border:1px solid #93c5fd}.sSyG7XTOV546FpW1Rpve{background:#dee2e6}","",{version:3,sources:["webpack://./src/components/Avatar/index.module.scss"],names:[],mappings:"AAAA,sBACE,UAAA,CACA,WAAA,CACA,iBAAA,CAGF,sBACE,wBAAA,CAGF,sBACE,kBAAA",sourcesContent:[".avatar {\n  width: 62px;\n  height: 62px;\n  border-radius: 50%;\n}\n\n.avatar-active {\n  border: 1px solid #93c5fd;\n}\n\n.avatar-empty {\n  background: #dee2e6;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={avatar:"tLOOhBR8S0vWAd5tcTpf","avatar-active":"PumPtlDKGgQCTqSt9yOd","avatar-empty":"sSyG7XTOV546FpW1Rpve"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Header/index.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".DMdAnDO8W_xsTJnnKvm5{position:sticky;top:0;display:flex;align-items:center;justify-content:space-between;padding:18px 32px;background:#fff;border-bottom:1px solid #93c5fd}","",{version:3,sources:["webpack://./src/components/Header/index.module.scss"],names:[],mappings:"AAAA,sBACE,eAAA,CACA,KAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,iBAAA,CACA,eAAA,CACA,+BAAA",sourcesContent:[".root {\n  position: sticky;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 32px;\n  background: #fff;\n  border-bottom: 1px solid #93c5fd;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"DMdAnDO8W_xsTJnnKvm5"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);