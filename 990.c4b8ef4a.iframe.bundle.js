"use strict";(self.webpackChunkjilyas_github_io=self.webpackChunkjilyas_github_io||[]).push([[990],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_inheritsLoose});var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,(0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.Z)(subClass,superClass)}},"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}__webpack_require__.d(__webpack_exports__,{Z:()=>_setPrototypeOf})},"./node_modules/react-focus-lock/dist/es2015/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>dist_es2015});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js");function useMergeRefs(refs,defaultValue){return function useCallbackRef(initialValue,callback){var ref=(0,react.useState)((function(){return{value:initialValue,callback,facade:{get current(){return ref.value},set current(value){var last=ref.value;last!==value&&(ref.value=value,ref.callback(value,last))}}}}))[0];return ref.callback=callback,ref.facade}(defaultValue||null,(function(newValue){return refs.forEach((function(ref){return function assignRef(ref,value){return"function"==typeof ref?ref(value):ref&&(ref.current=value),ref}(ref,newValue)}))}))}var hiddenGuard={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},InFocusGuard=function InFocusGuard(_ref){var children=_ref.children;return react.createElement(react.Fragment,null,react.createElement("div",{key:"guard-first","data-focus-guard":!0,"data-focus-auto-guard":!0,style:hiddenGuard}),children,children&&react.createElement("div",{key:"guard-last","data-focus-guard":!0,"data-focus-auto-guard":!0,style:hiddenGuard}))};InFocusGuard.propTypes={},InFocusGuard.defaultProps={children:null};var __assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};Object.create;Object.create;function ItoI(a){return a}function innerCreateMedium(defaults,middleware){void 0===middleware&&(middleware=ItoI);var buffer=[],assigned=!1;return{read:function(){if(assigned)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return buffer.length?buffer[buffer.length-1]:defaults},useMedium:function(data){var item=middleware(data,assigned);return buffer.push(item),function(){buffer=buffer.filter((function(x){return x!==item}))}},assignSyncMedium:function(cb){for(assigned=!0;buffer.length;){var cbs=buffer;buffer=[],cbs.forEach(cb)}buffer={push:function(x){return cb(x)},filter:function(){return buffer}}},assignMedium:function(cb){assigned=!0;var pendingQueue=[];if(buffer.length){var cbs=buffer;buffer=[],cbs.forEach(cb),pendingQueue=buffer}var executeQueue=function(){var cbs=pendingQueue;pendingQueue=[],cbs.forEach(cb)},cycle=function(){return Promise.resolve().then(executeQueue)};cycle(),buffer={push:function(x){pendingQueue.push(x),cycle()},filter:function(filter){return pendingQueue=pendingQueue.filter(filter),buffer}}}}}function createMedium(defaults,middleware){return void 0===middleware&&(middleware=ItoI),innerCreateMedium(defaults,middleware)}var mediumFocus=createMedium({},(function(_ref){return{target:_ref.target,currentTarget:_ref.currentTarget}})),mediumBlur=createMedium(),mediumEffect=createMedium(),mediumSidecar=function createSidecarMedium(options){void 0===options&&(options={});var medium=innerCreateMedium(null);return medium.options=__assign({async:!0,ssr:!1},options),medium}({async:!0}),emptyArray=[],FocusLock=react.forwardRef((function FocusLockUI(props,parentRef){var _extends2,_React$useState=react.useState(),realObserved=_React$useState[0],setObserved=_React$useState[1],observed=react.useRef(),isActive=react.useRef(!1),originalFocusedElement=react.useRef(null),children=props.children,disabled=props.disabled,noFocusGuards=props.noFocusGuards,persistentFocus=props.persistentFocus,crossFrame=props.crossFrame,autoFocus=props.autoFocus,group=(props.allowTextSelection,props.group),className=props.className,whiteList=props.whiteList,hasPositiveIndices=props.hasPositiveIndices,_props$shards=props.shards,shards=void 0===_props$shards?emptyArray:_props$shards,_props$as=props.as,Container=void 0===_props$as?"div":_props$as,_props$lockProps=props.lockProps,containerProps=void 0===_props$lockProps?{}:_props$lockProps,SideCar=props.sideCar,shouldReturnFocus=props.returnFocus,focusOptions=props.focusOptions,onActivationCallback=props.onActivation,onDeactivationCallback=props.onDeactivation,id=react.useState({})[0],onActivation=react.useCallback((function(){originalFocusedElement.current=originalFocusedElement.current||document&&document.activeElement,observed.current&&onActivationCallback&&onActivationCallback(observed.current),isActive.current=!0}),[onActivationCallback]),onDeactivation=react.useCallback((function(){isActive.current=!1,onDeactivationCallback&&onDeactivationCallback(observed.current)}),[onDeactivationCallback]);(0,react.useEffect)((function(){disabled||(originalFocusedElement.current=null)}),[]);var returnFocus=react.useCallback((function(allowDefer){var returnFocusTo=originalFocusedElement.current;if(returnFocusTo&&returnFocusTo.focus){var howToReturnFocus="function"==typeof shouldReturnFocus?shouldReturnFocus(returnFocusTo):shouldReturnFocus;if(howToReturnFocus){var returnFocusOptions="object"==typeof howToReturnFocus?howToReturnFocus:void 0;originalFocusedElement.current=null,allowDefer?Promise.resolve().then((function(){return returnFocusTo.focus(returnFocusOptions)})):returnFocusTo.focus(returnFocusOptions)}}}),[shouldReturnFocus]),onFocus=react.useCallback((function(event){isActive.current&&mediumFocus.useMedium(event)}),[]),onBlur=mediumBlur.useMedium,setObserveNode=react.useCallback((function(newObserved){observed.current!==newObserved&&(observed.current=newObserved,setObserved(newObserved))}),[]);var lockProps=(0,esm_extends.Z)(((_extends2={})["data-focus-lock-disabled"]=disabled&&"disabled",_extends2["data-focus-lock"]=group,_extends2),containerProps),hasLeadingGuards=!0!==noFocusGuards,hasTailingGuards=hasLeadingGuards&&"tail"!==noFocusGuards,mergedRef=useMergeRefs([parentRef,setObserveNode]);return react.createElement(react.Fragment,null,hasLeadingGuards&&[react.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:disabled?-1:0,style:hiddenGuard}),hasPositiveIndices?react.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:disabled?-1:1,style:hiddenGuard}):null],!disabled&&react.createElement(SideCar,{id,sideCar:mediumSidecar,observed:realObserved,disabled,persistentFocus,crossFrame,autoFocus,whiteList,shards,onActivation,onDeactivation,returnFocus,focusOptions}),react.createElement(Container,(0,esm_extends.Z)({ref:mergedRef},lockProps,{className,onBlur,onFocus}),children),hasTailingGuards&&react.createElement("div",{"data-focus-guard":!0,tabIndex:disabled?-1:0,style:hiddenGuard}))}));FocusLock.propTypes={},FocusLock.defaultProps={children:void 0,disabled:!1,returnFocus:!1,focusOptions:void 0,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,crossFrame:!0,hasPositiveIndices:void 0,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0};const Lock=FocusLock;var inheritsLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),toPropertyKey=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");const index_es=function withSideEffect(reducePropsToState,handleStateChangeOnClient){return function wrap(WrappedComponent){var state,mountedInstances=[];function emitChange(){state=reducePropsToState(mountedInstances.map((function(instance){return instance.props}))),handleStateChangeOnClient(state)}var SideEffect=function(_PureComponent){function SideEffect(){return _PureComponent.apply(this,arguments)||this}(0,inheritsLoose.Z)(SideEffect,_PureComponent),SideEffect.peek=function peek(){return state};var _proto=SideEffect.prototype;return _proto.componentDidMount=function componentDidMount(){mountedInstances.push(this),emitChange()},_proto.componentDidUpdate=function componentDidUpdate(){emitChange()},_proto.componentWillUnmount=function componentWillUnmount(){var index=mountedInstances.indexOf(this);mountedInstances.splice(index,1),emitChange()},_proto.render=function render(){return react.createElement(WrappedComponent,this.props)},SideEffect}(react.PureComponent);return function _defineProperty(obj,key,value){return(key=(0,toPropertyKey.Z)(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(SideEffect,"displayName","SideEffect("+function getDisplayName(WrappedComponent){return WrappedComponent.displayName||WrappedComponent.name||"Component"}(WrappedComponent)+")"),SideEffect}};var toArray=function(a){for(var ret=Array(a.length),i=0;i<a.length;++i)ret[i]=a[i];return ret},asArray=function(a){return Array.isArray(a)?a:[a]},getFirst=function(a){return Array.isArray(a)?a[0]:a},getParentNode=function(node){return node.parentNode&&node.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?node.parentNode.host:node.parentNode},isTopNode=function(node){return node===document||node&&node.nodeType===Node.DOCUMENT_NODE},isVisibleUncached=function(node,checkParent){return!node||isTopNode(node)||!function(node){if(node.nodeType!==Node.ELEMENT_NODE)return!1;var computedStyle=window.getComputedStyle(node,null);return!(!computedStyle||!computedStyle.getPropertyValue||"none"!==computedStyle.getPropertyValue("display")&&"hidden"!==computedStyle.getPropertyValue("visibility"))}(node)&&checkParent(getParentNode(node))},isVisibleCached=function(visibilityCache,node){var cached=visibilityCache.get(node);if(void 0!==cached)return cached;var result=isVisibleUncached(node,isVisibleCached.bind(void 0,visibilityCache));return visibilityCache.set(node,result),result},isAutoFocusAllowedCached=function(cache,node){var cached=cache.get(node);if(void 0!==cached)return cached;var result=function(node,checkParent){return!(node&&!isTopNode(node))||!!isAutoFocusAllowed(node)&&checkParent(getParentNode(node))}(node,isAutoFocusAllowedCached.bind(void 0,cache));return cache.set(node,result),result},getDataset=function(node){return node.dataset},isHTMLInputElement=function(node){return"INPUT"===node.tagName},isRadioElement=function(node){return isHTMLInputElement(node)&&"radio"===node.type},isAutoFocusAllowed=function(node){var attribute=node.getAttribute("data-no-autofocus");return![!0,"true",""].includes(attribute)},isGuard=function(node){var _a;return Boolean(node&&(null===(_a=getDataset(node))||void 0===_a?void 0:_a.focusGuard))},isNotAGuard=function(node){return!isGuard(node)},isDefined=function(x){return Boolean(x)},tabSort=function(a,b){var tabDiff=a.tabIndex-b.tabIndex,indexDiff=a.index-b.index;if(tabDiff){if(!a.tabIndex)return 1;if(!b.tabIndex)return-1}return tabDiff||indexDiff},orderByTabIndex=function(nodes,filterNegative,keepGuards){return toArray(nodes).map((function(node,index){return{node,index,tabIndex:keepGuards&&-1===node.tabIndex?(node.dataset||{}).focusGuard?0:-1:node.tabIndex}})).filter((function(data){return!filterNegative||data.tabIndex>=0})).sort(tabSort)},queryTabbables=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"].join(","),queryGuardTabbables="".concat(queryTabbables,", [data-focus-guard]"),getFocusablesWithShadowDom=function(parent,withGuards){return toArray((parent.shadowRoot||parent).children).reduce((function(acc,child){return acc.concat(child.matches(withGuards?queryGuardTabbables:queryTabbables)?[child]:[],getFocusablesWithShadowDom(child))}),[])},getFocusables=function(parents,withGuards){return parents.reduce((function(acc,parent){var _a,focusableWithShadowDom=getFocusablesWithShadowDom(parent,withGuards),focusableWithIframes=(_a=[]).concat.apply(_a,focusableWithShadowDom.map((function(node){return function(parent,withGuards){var _a;return parent instanceof HTMLIFrameElement&&(null===(_a=parent.contentDocument)||void 0===_a?void 0:_a.body)?getFocusables([parent.contentDocument.body],withGuards):[parent]}(node,withGuards)})));return acc.concat(focusableWithIframes,parent.parentNode?toArray(parent.parentNode.querySelectorAll(queryTabbables)).filter((function(node){return node===parent})):[])}),[])},filterFocusable=function(nodes,visibilityCache){return toArray(nodes).filter((function(node){return isVisibleCached(visibilityCache,node)})).filter((function(node){return function(node){return!((isHTMLInputElement(node)||function(node){return"BUTTON"===node.tagName}(node))&&("hidden"===node.type||node.disabled))}(node)}))},filterAutoFocusable=function(nodes,cache){return void 0===cache&&(cache=new Map),toArray(nodes).filter((function(node){return isAutoFocusAllowedCached(cache,node)}))},getTabbableNodes=function(topNodes,visibilityCache,withGuards){return orderByTabIndex(filterFocusable(getFocusables(topNodes,withGuards),visibilityCache),!0,withGuards)},getAllTabbableNodes=function(topNodes,visibilityCache){return orderByTabIndex(filterFocusable(getFocusables(topNodes),visibilityCache),!1)},parentAutofocusables=function(topNode,visibilityCache){return filterFocusable((parentFocus=topNode.querySelectorAll("[".concat("data-autofocus-inside","]")),toArray(parentFocus).map((function(node){return getFocusables([node])})).reduce((function(acc,nodes){return acc.concat(nodes)}),[])),visibilityCache);var parentFocus},contains=function(scope,element){return scope.shadowRoot?contains(scope.shadowRoot,element):!(void 0===Object.getPrototypeOf(scope).contains||!Object.getPrototypeOf(scope).contains.call(scope,element))||toArray(scope.children).some((function(child){var _a;if(child instanceof HTMLIFrameElement){var iframeBody=null===(_a=child.contentDocument)||void 0===_a?void 0:_a.body;return!!iframeBody&&contains(iframeBody,element)}return contains(child,element)}))},getActiveElement=function(inDocument){if(void 0===inDocument&&(inDocument=document),inDocument&&inDocument.activeElement){var activeElement=inDocument.activeElement;return activeElement.shadowRoot?getActiveElement(activeElement.shadowRoot):activeElement instanceof HTMLIFrameElement&&function(cb){try{return cb()}catch(e){return}}((function(){return activeElement.contentWindow.document}))?getActiveElement(activeElement.contentWindow.document):activeElement}},getTopParent=function(node){return node.parentNode?getTopParent(node.parentNode):node},getAllAffectedNodes=function(node){return asArray(node).filter(Boolean).reduce((function(acc,currentNode){var group=currentNode.getAttribute("data-focus-lock");return acc.push.apply(acc,group?function(nodes){for(var contained=new Set,l=nodes.length,i=0;i<l;i+=1)for(var j=i+1;j<l;j+=1){var position=nodes[i].compareDocumentPosition(nodes[j]);(position&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&contained.add(j),(position&Node.DOCUMENT_POSITION_CONTAINS)>0&&contained.add(i)}return nodes.filter((function(_,index){return!contained.has(index)}))}(toArray(getTopParent(currentNode).querySelectorAll("[".concat("data-focus-lock",'="').concat(group,'"]:not([').concat("data-focus-lock-disabled",'="disabled"])')))):[currentNode]),acc}),[])},focusInside=function(topNode,activeElement){return void 0===activeElement&&(activeElement=getActiveElement(getFirst(topNode).ownerDocument)),!(!activeElement||activeElement.dataset&&activeElement.dataset.focusGuard)&&getAllAffectedNodes(topNode).some((function(node){return contains(node,activeElement)||function(topNode,activeElement){return Boolean(toArray(topNode.querySelectorAll("iframe")).some((function(node){return function(frame,activeElement){return frame===activeElement}(node,activeElement)})))}(node,activeElement)}))},correctNode=function(node,nodes){return isRadioElement(node)&&node.name?function(node,nodes){return nodes.filter(isRadioElement).filter((function(el){return el.name===node.name})).filter((function(el){return el.checked}))[0]||node}(node,nodes):node},pickFirstFocus=function(nodes){return nodes[0]&&nodes.length>1?correctNode(nodes[0],nodes):nodes[0]},pickFocusable=function(nodes,index){return nodes.length>1?nodes.indexOf(correctNode(nodes[index],nodes)):index},newFocus=function(innerNodes,outerNodes,activeElement,lastNode){var cnt=innerNodes.length,firstFocus=innerNodes[0],lastFocus=innerNodes[cnt-1],isOnGuard=isGuard(activeElement);if(!(activeElement&&innerNodes.indexOf(activeElement)>=0)){var nodes,resultSet,activeIndex=void 0!==activeElement?outerNodes.indexOf(activeElement):-1,lastIndex=lastNode?outerNodes.indexOf(lastNode):activeIndex,lastNodeInside=lastNode?innerNodes.indexOf(lastNode):-1,indexDiff=activeIndex-lastIndex,firstNodeIndex=outerNodes.indexOf(firstFocus),lastNodeIndex=outerNodes.indexOf(lastFocus),correctedNodes=(nodes=outerNodes,resultSet=new Set,nodes.forEach((function(node){return resultSet.add(correctNode(node,nodes))})),nodes.filter((function(node){return resultSet.has(node)}))),correctedIndexDiff=(void 0!==activeElement?correctedNodes.indexOf(activeElement):-1)-(lastNode?correctedNodes.indexOf(lastNode):activeIndex),returnFirstNode=pickFocusable(innerNodes,0),returnLastNode=pickFocusable(innerNodes,cnt-1);return-1===activeIndex||-1===lastNodeInside?"NEW_FOCUS":!indexDiff&&lastNodeInside>=0?lastNodeInside:activeIndex<=firstNodeIndex&&isOnGuard&&Math.abs(indexDiff)>1?returnLastNode:activeIndex>=lastNodeIndex&&isOnGuard&&Math.abs(indexDiff)>1?returnFirstNode:indexDiff&&Math.abs(correctedIndexDiff)>1?lastNodeInside:activeIndex<=firstNodeIndex?returnLastNode:activeIndex>lastNodeIndex?returnFirstNode:indexDiff?Math.abs(indexDiff)>1?lastNodeInside:(cnt+lastNodeInside+indexDiff)%cnt:void 0}},pickAutofocus=function(nodesIndexes,orderedNodes,groups){var autoFocusables,nodes=nodesIndexes.map((function(_a){return _a.node})),autoFocusable=filterAutoFocusable(nodes.filter((autoFocusables=groups,function(node){var _a,autofocus=null===(_a=getDataset(node))||void 0===_a?void 0:_a.autofocus;return node.autofocus||void 0!==autofocus&&"false"!==autofocus||autoFocusables.indexOf(node)>=0})));return autoFocusable&&autoFocusable.length?pickFirstFocus(autoFocusable):pickFirstFocus(filterAutoFocusable(orderedNodes))},getParents=function(node,parents){return void 0===parents&&(parents=[]),parents.push(node),node.parentNode&&getParents(node.parentNode.host||node.parentNode,parents),parents},getCommonParent=function(nodeA,nodeB){for(var parentsA=getParents(nodeA),parentsB=getParents(nodeB),i=0;i<parentsA.length;i+=1){var currentParent=parentsA[i];if(parentsB.indexOf(currentParent)>=0)return currentParent}return!1},getTopCommonParent=function(baseActiveElement,leftEntry,rightEntries){var activeElements=asArray(baseActiveElement),leftEntries=asArray(leftEntry),activeElement=activeElements[0],topCommon=!1;return leftEntries.filter(Boolean).forEach((function(entry){topCommon=getCommonParent(topCommon||entry,entry)||topCommon,rightEntries.filter(Boolean).forEach((function(subEntry){var common=getCommonParent(activeElement,subEntry);common&&(topCommon=!topCommon||contains(common,topCommon)?common:getCommonParent(common,topCommon))}))})),topCommon},getFocusMerge=function(topNode,lastNode){var activeElement=getActiveElement(asArray(topNode).length>0?document:getFirst(topNode).ownerDocument),entries=getAllAffectedNodes(topNode).filter(isNotAGuard),commonParent=getTopCommonParent(activeElement||topNode,topNode,entries),visibilityCache=new Map,anyFocusable=getAllTabbableNodes(entries,visibilityCache),innerElements=getTabbableNodes(entries,visibilityCache).filter((function(_a){var node=_a.node;return isNotAGuard(node)}));if(innerElements[0]||(innerElements=anyFocusable)[0]){var srcNodes,dstNodes,remap,outerNodes=getAllTabbableNodes([commonParent],visibilityCache).map((function(_a){return _a.node})),orderedInnerElements=(srcNodes=outerNodes,dstNodes=innerElements,remap=new Map,dstNodes.forEach((function(entity){return remap.set(entity.node,entity)})),srcNodes.map((function(node){return remap.get(node)})).filter(isDefined)),innerNodes=orderedInnerElements.map((function(_a){return _a.node})),newId=newFocus(innerNodes,outerNodes,activeElement,lastNode);if("NEW_FOCUS"===newId){var focusNode=pickAutofocus(anyFocusable,innerNodes,function(entries,visibilityCache){return entries.reduce((function(acc,node){return acc.concat(parentAutofocusables(node,visibilityCache))}),[])}(entries,visibilityCache));return focusNode?{node:focusNode}:void console.warn("focus-lock: cannot find any node to move focus into")}return void 0===newId?newId:orderedInnerElements[newId]}},guardCount=0,lockDisabled=!1;const es2015=function(topNode,lastNode,options){void 0===options&&(options={});var target,focusOptions,focusable=getFocusMerge(topNode,lastNode);if(!lockDisabled&&focusable){if(guardCount>2)return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),lockDisabled=!0,void setTimeout((function(){lockDisabled=!1}),1);guardCount++,target=focusable.node,focusOptions=options.focusOptions,"focus"in target&&target.focus(focusOptions),"contentWindow"in target&&target.contentWindow&&target.contentWindow.focus(),guardCount--}};var getFocusabledIn=function(topNode){var entries=getAllAffectedNodes(topNode).filter(isNotAGuard),commonParent=getTopCommonParent(topNode,topNode,entries),visibilityCache=new Map,outerNodes=getTabbableNodes([commonParent],visibilityCache,!0),innerElements=getTabbableNodes(entries,visibilityCache).filter((function(_a){var node=_a.node;return isNotAGuard(node)})).map((function(_a){return _a.node}));return outerNodes.map((function(_a){var node=_a.node;return{node,index:_a.index,lockItem:innerElements.indexOf(node)>=0,guard:isGuard(node)}}))};function deferAction(action){setTimeout(action,1)}var isFreeFocus=function isFreeFocus(){return function focusOnBody(){return document&&document.activeElement===document.body}()||function(inDocument){void 0===inDocument&&(inDocument=document);var activeElement=getActiveElement(inDocument);return!!activeElement&&toArray(inDocument.querySelectorAll("[".concat("data-no-focus-lock","]"))).some((function(node){return contains(node,activeElement)}))}()},lastActiveTrap=null,lastActiveFocus=null,lastPortaledElement=null,focusWasOutsideWindow=!1,defaultWhitelist=function defaultWhitelist(){return!0};function autoGuard(startIndex,end,step,allNodes){var lastGuard=null,i=startIndex;do{var item=allNodes[i];if(item.guard)item.node.dataset.focusAutoGuard&&(lastGuard=item);else{if(!item.lockItem)break;if(i!==startIndex)return;lastGuard=null}}while((i+=step)!==end);lastGuard&&(lastGuard.node.tabIndex=0)}var extractRef=function extractRef(ref){return ref&&"current"in ref?ref.current:ref},checkInHost=function checkInHost(check,el,boundary){return el&&(el.host===check&&(!el.activeElement||boundary.contains(el.activeElement))||el.parentNode&&checkInHost(check,el.parentNode,boundary))},activateTrap=function activateTrap(){var result=!1;if(lastActiveTrap){var _lastActiveTrap=lastActiveTrap,observed=_lastActiveTrap.observed,persistentFocus=_lastActiveTrap.persistentFocus,autoFocus=_lastActiveTrap.autoFocus,shards=_lastActiveTrap.shards,crossFrame=_lastActiveTrap.crossFrame,focusOptions=_lastActiveTrap.focusOptions,workingNode=observed||lastPortaledElement&&lastPortaledElement.portaledElement,activeElement=document&&document.activeElement;if(workingNode){var workingArea=[workingNode].concat(shards.map(extractRef).filter(Boolean));if(activeElement&&!function focusWhitelisted(activeElement){return(lastActiveTrap.whiteList||defaultWhitelist)(activeElement)}(activeElement)||(persistentFocus||function focusWasOutside(crossFrameOption){return crossFrameOption?Boolean(focusWasOutsideWindow):"meanwhile"===focusWasOutsideWindow}(crossFrame)||!isFreeFocus()||!lastActiveFocus&&autoFocus)&&(workingNode&&!(focusInside(workingArea)||activeElement&&function withinHost(activeElement,workingArea){return workingArea.some((function(area){return checkInHost(activeElement,area,area)}))}(activeElement,workingArea)||function focusIsPortaledPair(element){return lastPortaledElement&&lastPortaledElement.portaledElement===element}(activeElement))&&(document&&!lastActiveFocus&&activeElement&&!autoFocus?(activeElement.blur&&activeElement.blur(),document.body.focus()):(result=es2015(workingArea,lastActiveFocus,{focusOptions}),lastPortaledElement={})),focusWasOutsideWindow=!1,lastActiveFocus=document&&document.activeElement),document){var newActiveElement=document&&document.activeElement,allNodes=getFocusabledIn(workingArea),focusedIndex=allNodes.map((function(_ref){return _ref.node})).indexOf(newActiveElement);focusedIndex>-1&&(allNodes.filter((function(_ref2){var guard=_ref2.guard,node=_ref2.node;return guard&&node.dataset.focusAutoGuard})).forEach((function(_ref3){return _ref3.node.removeAttribute("tabIndex")})),autoGuard(focusedIndex,allNodes.length,1,allNodes),autoGuard(focusedIndex,-1,-1,allNodes))}}}return result},onTrap=function onTrap(event){activateTrap()&&event&&(event.stopPropagation(),event.preventDefault())},onBlur=function onBlur(){return deferAction(activateTrap)},onFocus=function onFocus(event){var source=event.target,currentNode=event.currentTarget;currentNode.contains(source)||function recordPortal(observerNode,portaledElement){lastPortaledElement={observerNode,portaledElement}}(currentNode,source)},onWindowBlur=function onWindowBlur(){focusWasOutsideWindow="just",deferAction((function(){focusWasOutsideWindow="meanwhile"}))};mediumFocus.assignSyncMedium(onFocus),mediumBlur.assignMedium(onBlur),mediumEffect.assignMedium((function(cb){return cb({moveFocusInside:es2015,focusInside})}));const Trap=index_es((function reducePropsToState(propsList){return propsList.filter((function(_ref5){return!_ref5.disabled}))}),(function handleStateChangeOnClient(traps){var trap=traps.slice(-1)[0];trap&&!lastActiveTrap&&function attachHandler(){document.addEventListener("focusin",onTrap),document.addEventListener("focusout",onBlur),window.addEventListener("blur",onWindowBlur)}();var lastTrap=lastActiveTrap,sameTrap=lastTrap&&trap&&trap.id===lastTrap.id;lastActiveTrap=trap,lastTrap&&!sameTrap&&(lastTrap.onDeactivation(),traps.filter((function(_ref6){return _ref6.id===lastTrap.id})).length||lastTrap.returnFocus(!trap)),trap?(lastActiveFocus=null,sameTrap&&lastTrap.observed===trap.observed||trap.onActivation(),activateTrap(),deferAction(activateTrap)):(!function detachHandler(){document.removeEventListener("focusin",onTrap),document.removeEventListener("focusout",onBlur),window.removeEventListener("blur",onWindowBlur)}(),lastActiveFocus=null)}))((function FocusWatcher(){return null}));var FocusLockCombination=react.forwardRef((function FocusLockUICombination(props,ref){return react.createElement(Lock,(0,esm_extends.Z)({sideCar:Trap,ref},props))})),_ref=Lock.propTypes||{};_ref.sideCar,function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,["sideCar"]);FocusLockCombination.propTypes={};const dist_es2015=FocusLockCombination}}]);