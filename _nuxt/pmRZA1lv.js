import{d as Q,bc as nn,B as ln,D as en,U as B,ag as on,bd as j,be as w,aZ as tn,bf as rn,bg as an}from"./tCsQc6Q4.js";class S{constructor(e,o,t){this.property=e,this.normal=o,t&&(this.space=t)}}S.prototype.property={};S.prototype.normal={};S.prototype.space=null;function F(n,e){const o={},t={};let r=-1;for(;++r<n.length;)Object.assign(o,n[r].property),Object.assign(t,n[r].normal);return new S(o,t,e)}function D(n){return n.toLowerCase()}class v{constructor(e,o){this.property=e,this.attribute=o}}v.prototype.space=null;v.prototype.boolean=!1;v.prototype.booleanish=!1;v.prototype.overloadedBoolean=!1;v.prototype.number=!1;v.prototype.commaSeparated=!1;v.prototype.spaceSeparated=!1;v.prototype.commaOrSpaceSeparated=!1;v.prototype.mustUseProperty=!1;v.prototype.defined=!1;let un=0;const u=b(),h=b(),H=b(),l=b(),p=b(),k=b(),f=b();function b(){return 2**++un}const L=Object.freeze(Object.defineProperty({__proto__:null,boolean:u,booleanish:h,commaOrSpaceSeparated:f,commaSeparated:k,number:l,overloadedBoolean:H,spaceSeparated:p},Symbol.toStringTag,{value:"Module"})),O=Object.keys(L);class R extends v{constructor(e,o,t,r){let a=-1;if(super(e,o),z(this,"space",r),typeof t=="number")for(;++a<O.length;){const s=O[a];z(this,O[a],(t&L[s])===L[s])}}}R.prototype.defined=!0;function z(n,e,o){o&&(n[e]=o)}const sn={}.hasOwnProperty;function C(n){const e={},o={};let t;for(t in n.properties)if(sn.call(n.properties,t)){const r=n.properties[t],a=new R(t,n.transform(n.attributes||{},t),r,n.space);n.mustUseProperty&&n.mustUseProperty.includes(t)&&(a.mustUseProperty=!0),e[t]=a,o[D(t)]=t,o[D(a.attribute)]=t}return new S(e,o,n.space)}const _=C({space:"xlink",transform(n,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),V=C({space:"xml",transform(n,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function N(n,e){return e in n?n[e]:e}function q(n,e){return N(n,e.toLowerCase())}const W=C({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:q,properties:{xmlns:null,xmlnsXLink:null}}),K=C({transform(n,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:h,ariaAutoComplete:null,ariaBusy:h,ariaChecked:h,ariaColCount:l,ariaColIndex:l,ariaColSpan:l,ariaControls:p,ariaCurrent:null,ariaDescribedBy:p,ariaDetails:null,ariaDisabled:h,ariaDropEffect:p,ariaErrorMessage:null,ariaExpanded:h,ariaFlowTo:p,ariaGrabbed:h,ariaHasPopup:null,ariaHidden:h,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:p,ariaLevel:l,ariaLive:null,ariaModal:h,ariaMultiLine:h,ariaMultiSelectable:h,ariaOrientation:null,ariaOwns:p,ariaPlaceholder:null,ariaPosInSet:l,ariaPressed:h,ariaReadOnly:h,ariaRelevant:null,ariaRequired:h,ariaRoleDescription:p,ariaRowCount:l,ariaRowIndex:l,ariaRowSpan:l,ariaSelected:h,ariaSetSize:l,ariaSort:null,ariaValueMax:l,ariaValueMin:l,ariaValueNow:l,ariaValueText:null,role:null}}),cn=C({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:q,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:k,acceptCharset:p,accessKey:p,action:null,allow:null,allowFullScreen:u,allowPaymentRequest:u,allowUserMedia:u,alt:null,as:null,async:u,autoCapitalize:null,autoComplete:p,autoFocus:u,autoPlay:u,blocking:p,capture:null,charSet:null,checked:u,cite:null,className:p,cols:l,colSpan:null,content:null,contentEditable:h,controls:u,controlsList:p,coords:l|k,crossOrigin:null,data:null,dateTime:null,decoding:null,default:u,defer:u,dir:null,dirName:null,disabled:u,download:H,draggable:h,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:u,formTarget:null,headers:p,height:l,hidden:u,high:l,href:null,hrefLang:null,htmlFor:p,httpEquiv:p,id:null,imageSizes:null,imageSrcSet:null,inert:u,inputMode:null,integrity:null,is:null,isMap:u,itemId:null,itemProp:p,itemRef:p,itemScope:u,itemType:p,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:u,low:l,manifest:null,max:null,maxLength:l,media:null,method:null,min:null,minLength:l,multiple:u,muted:u,name:null,nonce:null,noModule:u,noValidate:u,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:u,optimum:l,pattern:null,ping:p,placeholder:null,playsInline:u,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:u,referrerPolicy:null,rel:p,required:u,reversed:u,rows:l,rowSpan:l,sandbox:p,scope:null,scoped:u,seamless:u,selected:u,shadowRootClonable:u,shadowRootDelegatesFocus:u,shadowRootMode:null,shape:null,size:l,sizes:null,slot:null,span:l,spellCheck:h,src:null,srcDoc:null,srcLang:null,srcSet:null,start:l,step:null,style:null,tabIndex:l,target:null,title:null,translate:null,type:null,typeMustMatch:u,useMap:null,value:h,width:l,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:p,axis:null,background:null,bgColor:null,border:l,borderColor:null,bottomMargin:l,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:u,declare:u,event:null,face:null,frame:null,frameBorder:null,hSpace:l,leftMargin:l,link:null,longDesc:null,lowSrc:null,marginHeight:l,marginWidth:l,noResize:u,noHref:u,noShade:u,noWrap:u,object:null,profile:null,prompt:null,rev:null,rightMargin:l,rules:null,scheme:null,scrolling:h,standby:null,summary:null,text:null,topMargin:l,valueType:null,version:null,vAlign:null,vLink:null,vSpace:l,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:u,disableRemotePlayback:u,prefix:null,property:null,results:l,security:null,unselectable:null}}),pn=C({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:N,properties:{about:f,accentHeight:l,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:l,amplitude:l,arabicForm:null,ascent:l,attributeName:null,attributeType:null,azimuth:l,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:l,by:null,calcMode:null,capHeight:l,className:p,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:l,diffuseConstant:l,direction:null,display:null,dur:null,divisor:l,dominantBaseline:null,download:u,dx:null,dy:null,edgeMode:null,editable:null,elevation:l,enableBackground:null,end:null,event:null,exponent:l,externalResourcesRequired:null,fill:null,fillOpacity:l,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:k,g2:k,glyphName:k,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:l,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:l,horizOriginX:l,horizOriginY:l,id:null,ideographic:l,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:l,k:l,k1:l,k2:l,k3:l,k4:l,kernelMatrix:f,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:l,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:l,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:l,overlineThickness:l,paintOrder:null,panose1:null,path:null,pathLength:l,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:p,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:l,pointsAtY:l,pointsAtZ:l,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:f,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:f,rev:f,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:f,requiredFeatures:f,requiredFonts:f,requiredFormats:f,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:l,specularExponent:l,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:l,strikethroughThickness:l,string:null,stroke:null,strokeDashArray:f,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:l,strokeOpacity:l,strokeWidth:null,style:null,surfaceScale:l,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:f,tabIndex:l,tableValues:null,target:null,targetX:l,targetY:l,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:f,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:l,underlineThickness:l,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:l,values:null,vAlphabetic:l,vMathematical:l,vectorEffect:null,vHanging:l,vIdeographic:l,version:null,vertAdvY:l,vertOriginX:l,vertOriginY:l,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:l,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),dn=/^data[-\w.:]+$/i,I=/-[a-z]/g,gn=/[A-Z]/g;function hn(n,e){const o=D(e);let t=e,r=v;if(o in n.normal)return n.property[n.normal[o]];if(o.length>4&&o.slice(0,4)==="data"&&dn.test(e)){if(e.charAt(4)==="-"){const a=e.slice(5).replace(I,mn);t="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=e.slice(4);if(!I.test(a)){let s=a.replace(gn,fn);s.charAt(0)!=="-"&&(s="-"+s),e="data"+s}}r=R}return new r(t,e)}function fn(n){return"-"+n.toLowerCase()}function mn(n){return n.charAt(1).toUpperCase()}const yn=F([V,_,W,K,cn],"html"),An=F([V,_,W,K,pn],"svg"),T=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],M="default",X=/^@|^v-on:/,Y=/^:|^v-bind:/,$=/^v-model/,vn=["select","textarea","input"],bn=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(n=>[n,`prose-${n}`])),En=Q({name:"MDCRenderer",props:{body:{type:Object,required:!0},data:{type:Object,default:()=>({})},tag:{type:[String,Boolean],default:void 0},prose:{type:Boolean,default:void 0},components:{type:Object,default:()=>({})}},async setup(n){var s,i,d,g,m,c,y,E;const e=(d=(i=(s=nn())==null?void 0:s.appContext)==null?void 0:i.app)==null?void 0:d.$nuxt,o=(e==null?void 0:e.$route)||(e==null?void 0:e._route),{mdc:t}=((g=e==null?void 0:e.$config)==null?void 0:g.public)||{},r={...(m=t==null?void 0:t.components)!=null&&m.prose&&n.prose!==!1?bn:{},...((c=t==null?void 0:t.components)==null?void 0:c.map)||{},...ln(((E=(y=n.data)==null?void 0:y.mdc)==null?void 0:E.components)||{}),...n.components},a=en(()=>{var U;const G=(((U=n.body)==null?void 0:U.children)||[]).map(x=>x.tag||x.type).filter(x=>!T.includes(x));return Array.from(new Set(G)).sort().join(".")});return await Rn(n.body,{tags:r}),{tags:r,contentKey:a,route:o}},render(n){var m,c,y;const{tags:e,tag:o,body:t,data:r,contentKey:a,route:s}=n;if(!t)return null;const i={...r,tags:e,$route:s},d=o!==!1?A(o||((m=i.component)==null?void 0:m.name)||i.component||"div"):void 0,g=Z(t,B,i,i);return d?B(d,{...(c=i.component)==null?void 0:c.props,...this.$attrs,key:a},g):(y=g.default)==null?void 0:y.call(g)}});function kn(n,e,o,t={}){if(n.type==="text")return e(w,n.value);if(n.type==="comment")return e(rn,null,n.value);const r=n.tag,a=J(n,o.tags);if(n.tag==="binding")return Cn(n,e,o,t);const s=A(a);typeof s=="object"&&(s.tag=r);const i=Sn(n,o);return e(s,i,Z(n,e,o,{...t,...i}))}function Cn(n,e,o,t={}){var g,m;const r={...t,$document:o,$doc:o},a=/\.|\[(\d+)\]/,i=((g=n.props)==null?void 0:g.value.trim().split(a).filter(Boolean)).reduce((c,y)=>{if(c&&y in c)return typeof c[y]=="function"?c[y]():c[y]},r),d=(m=n.props)==null?void 0:m.defaultValue;return e(w,i??d??"")}function Z(n,e,o,t){const a=(n.children||[]).reduce((i,d)=>{if(!Ln(d))return i[M].push(d),i;const g=Dn(d);return i[g]=i[g]||[],d.type==="element"&&i[g].push(...d.children||[]),i},{[M]:[]});return Object.entries(a).reduce((i,[d,g])=>(g.length&&(i[d]=()=>{const m=g.map(c=>kn(c,e,o,t));return Mn(m)}),i),{})}function Sn(n,e){const{tag:o="",props:t={}}=n;return Object.keys(t).reduce(function(r,a){if(a==="__ignoreMap")return r;const s=t[a];if($.test(a)&&!vn.includes(o))return xn(a,s,r,e);if(a==="v-bind")return wn(a,s,r,e);if(X.test(a))return Pn(a,s,r,e);if(Y.test(a))return On(a,s,r,e);const{attribute:i}=hn(yn,a);return Array.isArray(s)&&s.every(d=>typeof d=="string")?(r[i]=s.join(" "),r):(r[i]=s,r)},{})}function xn(n,e,o,t){const r=c=>+c,a=c=>c.trim(),s=c=>c,i=n.replace($,"").split(".").filter(c=>c).reduce((c,y)=>(c[y]=!0,c),{}),d="value",g=i.lazy?"change":"input",m=i.number?r:i.trim?a:s;return o[d]=P(e,t),o.on=o.on||{},o.on[g]=c=>t[e]=m(c),o}function wn(n,e,o,t){const r=P(e,t);return o=Object.assign(o,r),o}function Pn(n,e,o,t){return n=n.replace(X,""),o.on=o.on||{},o.on[n]=()=>P(e,t),o}function On(n,e,o,t){return n=n.replace(Y,""),o[n]=P(e,t),o}const A=n=>{if(!T.includes(n)&&!(n!=null&&n.render)&&!(n!=null&&n.ssrRender)){const e=on(j(n),!1);if(typeof e=="object")return e}return n};function P(n,e){const o=n.split(".").reduce((t,r)=>typeof t=="object"?t[r]:void 0,e);return typeof o>"u"?an(n):o}function Dn(n){let e="";for(const o of Object.keys(n.props||{}))if(!(!o.startsWith("#")&&!o.startsWith("v-slot:"))){e=o.split(/[:#]/,2)[1];break}return e||M}function Ln(n){return n.tag==="template"}function Mn(n){const e=[];for(const o of n){const t=e[e.length-1];o.type===w&&(t==null?void 0:t.type)===w?t.children=t.children+o.children:e.push(o)}return e}async function Rn(n,e){if(!n)return;const o=Array.from(new Set(t(n,e)));await Promise.all(o.map(async r=>{if(r!=null&&r.render||r!=null&&r.ssrRender||r!=null&&r.__ssrInlineRender)return;const a=A(r);a!=null&&a.__asyncLoader&&!a.__asyncResolved&&await a.__asyncLoader()}));function t(r,a){const s=r.tag;if(r.type==="text"||s==="binding"||r.type==="comment")return[];const i=J(r,a.tags),d=[];r.type!=="root"&&!T.includes(i)&&d.push(i);for(const g of r.children||[])d.push(...t(g,a));return d}}function J(n,e){var t;const o=n.tag;return!o||typeof((t=n.props)==null?void 0:t.__ignoreMap)<"u"?o:e[o]||e[j(o)]||e[tn(n.tag)]||o}export{En as _,yn as a,hn as f,T as h,D as n,An as s};
