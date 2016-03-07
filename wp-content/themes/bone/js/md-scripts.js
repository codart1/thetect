// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license
(function(){for(var e=0,b=["ms","moz","webkit","o"],a=0;a<b.length&&!window.requestAnimationFrame;++a)window.requestAnimationFrame=window[b[a]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[a]+"CancelAnimationFrame"]||window[b[a]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a,b){var c=(new Date).getTime(),d=Math.max(0,16-(c-e)),f=window.setTimeout(function(){a(c+d)},d);e=c+d;return f});window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)})})();

// SmoothScroll for websites v1.3.8 (Balazs Galambosi)
// Licensed under the terms of the MIT license.
!function(){function n(){b.keyboardSupport&&G("keydown",v)}function o(){if(!f&&document.body){f=!0;var a=document.body,e=document.documentElement,k=window.innerHeight,l=a.scrollHeight;if(g=document.compatMode.indexOf("CSS")>=0?e:a,h=a,n(),top!=self)d=!0;else if(l>k&&(a.offsetHeight<=k||e.offsetHeight<=k)){var m=document.createElement("div");m.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+g.scrollHeight+"px",document.body.appendChild(m);var o;j=function(){o||(o=setTimeout(function(){c||(m.style.height="0",m.style.height=g.scrollHeight+"px",o=null)},500))},setTimeout(j,10),G("resize",j);var p={attributes:!0,childList:!0,characterData:!1};if(i=new Q(j),i.observe(a,p),g.offsetHeight<=k){var q=document.createElement("div");q.style.clear="both",a.appendChild(q)}}b.fixedBackground||c||(a.style.backgroundAttachment="scroll",e.style.backgroundAttachment="scroll")}}function p(){i&&i.disconnect(),H(_,u),H("mousedown",w),H("keydown",v),H("resize",j),H("load",o)}function t(a,c,d){if(J(c,d),1!=b.accelerationMax){var e=Date.now(),f=e-s;if(f<b.accelerationDelta){var g=(1+50/f)/2;g>1&&(g=Math.min(g,b.accelerationMax),c*=g,d*=g)}s=Date.now()}if(q.push({x:c,y:d,lastX:c<0?.99:-.99,lastY:d<0?.99:-.99,start:Date.now()}),!r){var h=a===document.body,i=function(){for(var f=Date.now(),g=0,j=0,k=0;k<q.length;k++){var l=q[k],m=f-l.start,n=m>=b.animationTime,o=n?1:m/b.animationTime;b.pulseAlgorithm&&(o=T(o));var p=l.x*o-l.lastX>>0,s=l.y*o-l.lastY>>0;g+=p,j+=s,l.lastX+=p,l.lastY+=s,n&&(q.splice(k,1),k--)}h?window.scrollBy(g,j):(g&&(a.scrollLeft+=g),j&&(a.scrollTop+=j)),c||d||(q=[]),q.length?P(i,a,1e3/b.frameRate+1):r=!1};P(i,a,0),r=!0}}function u(a){f||o();var c=a.target,d=C(c);if(!d||a.defaultPrevented||a.ctrlKey)return!0;if(I(h,"embed")||I(c,"embed")&&/\.pdf/i.test(c.src)||I(h,"object"))return!0;var e=-a.wheelDeltaX||a.deltaX||0,g=-a.wheelDeltaY||a.deltaY||0;return l&&(a.wheelDeltaX&&M(a.wheelDeltaX,120)&&(e=-120*(a.wheelDeltaX/Math.abs(a.wheelDeltaX))),a.wheelDeltaY&&M(a.wheelDeltaY,120)&&(g=-120*(a.wheelDeltaY/Math.abs(a.wheelDeltaY)))),e||g||(g=-a.wheelDelta||0),1===a.deltaMode&&(e*=40,g*=40),!b.touchpadSupport&&L(g)?!0:(Math.abs(e)>1.2&&(e*=b.stepSize/120),Math.abs(g)>1.2&&(g*=b.stepSize/120),t(d,e,g),a.preventDefault(),void A())}function v(a){var c=a.target,d=a.ctrlKey||a.altKey||a.metaKey||a.shiftKey&&a.keyCode!==m.spacebar;document.contains(h)||(h=document.activeElement);var e=/^(textarea|select|embed|object)$/i,f=/^(button|submit|radio|checkbox|file|color|image)$/i;if(e.test(c.nodeName)||I(c,"input")&&!f.test(c.type)||I(h,"video")||O(a)||c.isContentEditable||a.defaultPrevented||d)return!0;if((I(c,"button")||I(c,"input")&&f.test(c.type))&&a.keyCode===m.spacebar)return!0;var g,i=0,j=0,k=C(h),l=k.clientHeight;switch(k==document.body&&(l=window.innerHeight),a.keyCode){case m.up:j=-b.arrowScroll;break;case m.down:j=b.arrowScroll;break;case m.spacebar:g=a.shiftKey?1:-1,j=-g*l*.9;break;case m.pageup:j=.9*-l;break;case m.pagedown:j=.9*l;break;case m.home:j=-k.scrollTop;break;case m.end:var n=k.scrollHeight-k.scrollTop-l;j=n>0?n+10:0;break;case m.left:i=-b.arrowScroll;break;case m.right:i=b.arrowScroll;break;default:return!0}t(k,i,j),a.preventDefault(),A()}function w(a){h=a.target}function A(){clearTimeout(z),z=setInterval(function(){y={}},1e3)}function B(a,b){for(var c=a.length;c--;)y[x(a[c])]=b;return b}function C(a){var b=[],c=document.body,e=g.scrollHeight;do{var f=y[x(a)];if(f)return B(b,f);if(b.push(a),e===a.scrollHeight){var h=E(g)&&E(c),i=h||F(g);if(d&&D(g)||!d&&i)return B(b,R())}else if(D(a)&&F(a))return B(b,a)}while(a=a.parentElement)}function D(a){return a.clientHeight+10<a.scrollHeight}function E(a){var b=getComputedStyle(a,"").getPropertyValue("overflow-y");return"hidden"!==b}function F(a){var b=getComputedStyle(a,"").getPropertyValue("overflow-y");return"scroll"===b||"auto"===b}function G(a,b){window.addEventListener(a,b,!1)}function H(a,b){window.removeEventListener(a,b,!1)}function I(a,b){return(a.nodeName||"").toLowerCase()===b.toLowerCase()}function J(a,b){a=a>0?1:-1,b=b>0?1:-1,(e.x!==a||e.y!==b)&&(e.x=a,e.y=b,q=[],s=0)}function L(a){return a?(k.length||(k=[a,a,a]),a=Math.abs(a),k.push(a),k.shift(),clearTimeout(K),K=setTimeout(function(){window.localStorage&&(localStorage.SS_deltaBuffer=k.join(","))},1e3),!N(120)&&!N(100)):void 0}function M(a,b){return Math.floor(a/b)==a/b}function N(a){return M(k[0],a)&&M(k[1],a)&&M(k[2],a)}function O(a){var b=a.target,c=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do if(c=b.classList&&b.classList.contains("html5-video-controls"))break;while(b=b.parentNode);return c}function S(a){var c,d,e;return a*=b.pulseScale,a<1?c=a-(1-Math.exp(-a)):(d=Math.exp(-1),a-=1,e=1-Math.exp(-a),c=d+e*(1-d)),c*b.pulseNormalize}function T(a){return a>=1?1:a<=0?0:(1==b.pulseNormalize&&(b.pulseNormalize/=S(1)),S(a))}function ab(c){for(var d in c)a.hasOwnProperty(d)&&(b[d]=c[d])}var h,i,j,z,K,a={frameRate:150,animationTime:600,stepSize:120,pulseAlgorithm:!0,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},b=a,c=!1,d=!1,e={x:0,y:0},f=!1,g=document.documentElement,k=[],l=/^Mac/.test(navigator.platform),m={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},q=[],r=!1,s=Date.now(),x=function(){var a=0;return function(b){return b.uniqueID||(b.uniqueID=a++)}}(),y={};window.localStorage&&localStorage.SS_deltaBuffer&&(k=localStorage.SS_deltaBuffer.split(","));var _,P=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a,b,c){window.setTimeout(a,c||1e3/60)}}(),Q=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,R=function(){var a;return function(){if(!a){var b=document.createElement("div");b.style.cssText="height:10000px;width:1px;",document.body.appendChild(b);{var c=document.body.scrollTop;document.documentElement.scrollTop}window.scrollBy(0,3),a=document.body.scrollTop!=c?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(b)}return a}}(),U=window.navigator.userAgent,V=/Edge/.test(U),W=/chrome/i.test(U)&&!V,X=/safari/i.test(U)&&!V,Y=/mobile/i.test(U),Z=(W||X)&&!Y,$=document.body.className.match(new RegExp("(\\s|^)is-smoothScrollEnabled(\\s|$)"));"onwheel"in document.createElement("div")?_="wheel":"onmousewheel"in document.createElement("div")&&(_="mousewheel"),_&&Z&&$&&(G(_,u),G("mousedown",w),G("load",o)),ab.destroy=p,window.SmoothScrollOptions&&ab(window.SmoothScrollOptions),"function"===typeof define&&define.amd?define(function(){return ab}):"object"==typeof exports?module.exports=ab:window.SmoothScroll=ab}();

/*!
 * Theia Sticky Sidebar v1.2.2
 * https://github.com/WeCodePixels/theia-sticky-sidebar
 *
 * Glues your website's sidebars, making them permanently visible while scrolling.
 *
 * Copyright 2013-2014 WeCodePixels and other contributors
 * Released under the MIT license
 */
!function(i){i.fn.theiaStickySidebar=function(t){var o={containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0};t=i.extend(o,t),t.additionalMarginTop=parseInt(t.additionalMarginTop)||0,t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0,i("head").append(i('<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')),this.each(function(){function o(){e.fixedScrollTop=0,e.sidebar.css({"min-height":"1px"}),e.stickySidebar.css({position:"static",width:""})}function a(t){var o=t.height();return t.children().each(function(){o=Math.max(o,i(this).height())}),o}var e={};e.sidebar=i(this),e.options=t||{},e.container=i(e.options.containerSelector),0==e.container.size()&&(e.container=e.sidebar.parent()),e.sidebar.parents().css("-webkit-transform","none"),e.sidebar.css({position:"relative",overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),e.stickySidebar=e.sidebar.find(".theiaStickySidebar"),0==e.stickySidebar.length&&(e.sidebar.find("script").remove(),e.stickySidebar=i("<div>").addClass("theiaStickySidebar").append(e.sidebar.children()),e.sidebar.append(e.stickySidebar)),e.marginTop=parseInt(e.sidebar.css("margin-top")),e.marginBottom=parseInt(e.sidebar.css("margin-bottom")),e.paddingTop=parseInt(e.sidebar.css("padding-top")),e.paddingBottom=parseInt(e.sidebar.css("padding-bottom"));var d=e.stickySidebar.offset().top,r=e.stickySidebar.outerHeight();e.stickySidebar.css("padding-top",1),e.stickySidebar.css("padding-bottom",1),d-=e.stickySidebar.offset().top,r=e.stickySidebar.outerHeight()-r-d,0==d?(e.stickySidebar.css("padding-top",0),e.stickySidebarPaddingTop=0):e.stickySidebarPaddingTop=1,0==r?(e.stickySidebar.css("padding-bottom",0),e.stickySidebarPaddingBottom=0):e.stickySidebarPaddingBottom=1,e.previousScrollTop=null,e.fixedScrollTop=0,o(),e.onScroll=function(e){if(e.stickySidebar.is(":visible")){if(i("body").width()<e.options.minWidth)return void o();if(e.sidebar.outerWidth(!0)+50>e.container.width())return void o();var d=i(document).scrollTop(),r="static";if(d>=e.container.offset().top+(e.paddingTop+e.marginTop-e.options.additionalMarginTop)){var n,s=e.paddingTop+e.marginTop+t.additionalMarginTop,c=e.paddingBottom+e.marginBottom+t.additionalMarginBottom,p=e.container.offset().top,b=e.container.offset().top+a(e.container),g=0+t.additionalMarginTop,l=e.stickySidebar.outerHeight()+s+c<i(window).height();n=l?g+e.stickySidebar.outerHeight():i(window).height()-e.marginBottom-e.paddingBottom-t.additionalMarginBottom;var f=p-d+e.paddingTop+e.marginTop,S=b-d-e.paddingBottom-e.marginBottom,h=e.stickySidebar.offset().top-d,m=e.previousScrollTop-d;"fixed"==e.stickySidebar.css("position")&&(h+=m),h=m>0?Math.min(h,g):Math.max(h,n-e.stickySidebar.outerHeight()),h=Math.max(h,f),h=Math.min(h,S-e.stickySidebar.outerHeight());var y=e.container.height()==e.stickySidebar.outerHeight();r=(y||h!=g)&&(y||h!=n-e.stickySidebar.outerHeight())?d+h-e.sidebar.offset().top-e.paddingTop<=t.additionalMarginTop?"static":"absolute":"fixed"}if("fixed"==r)e.stickySidebar.css({position:"fixed",width:e.sidebar.width(),top:h,left:e.sidebar.offset().left+parseInt(e.sidebar.css("padding-left"))});else if("absolute"==r){var k={};"absolute"!=e.stickySidebar.css("position")&&(k.position="absolute",k.top=d+h-e.sidebar.offset().top-e.stickySidebarPaddingTop-e.stickySidebarPaddingBottom),k.width=e.sidebar.width(),k.left="",e.stickySidebar.css(k)}else"static"==r&&o();"static"!=r&&1==e.options.updateSidebarHeight&&e.sidebar.css({"min-height":e.stickySidebar.outerHeight()+e.stickySidebar.offset().top-e.sidebar.offset().top+e.paddingBottom}),e.previousScrollTop=d}},e.onScroll(e),i(document).scroll(function(i){return function(){i.onScroll(i)}}(e)),i(window).resize(function(i){return function(){i.stickySidebar.css({position:"static"}),i.onScroll(i)}}(e))})}}(jQuery);

/**
 * Owl carousel
 * @version 2.0.0-beta.3
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g--;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;d>c;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var b,c,e;b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&0>=e&&this.preloadAutoWidthImages(b)}this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){b>=a&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),(null===this.settings||this._breakpoint!==d)&&(this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}}))},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};c>b;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return this._items.length?this._width===this.$element.width()?!1:this.$element.is(":visible")?(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized"))):!1:!1},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),this.settings.responsive!==!1&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.coordinates(this.settings.rtl?this.maximum():this.minimum()),c=this.coordinates(this.settings.rtl?this.minimum():this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var d=-1,e=30,f=this.width(),g=this.coordinates();return this.settings.freeDrag||a.each(g,a.proxy(function(a,h){return b>h-e&&h+e>b?d=a:this.op(b,"<",h)&&this.op(b,">",g[a+1]||h-f)&&(d="left"===c?a+1:a),-1===d},this)),this.settings.loop||(this.op(b,">",g[this.minimum()])?d=b=this.minimum():this.op(b,"<",g[this.maximum()])&&(d=b=this.maximum())),d},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(b,c){var e=this._items.length,f=c?0:this._clones.length;return!a.isNumeric(b)||1>e?b=d:(0>b||b>=e+f)&&(b=((b-f/2)%e+e)%e+f/2),b},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c=this.settings,d=this._coordinates.length,e=Math.abs(this._coordinates[d-1])-this._width,f=-1;if(c.loop)d=this._clones.length/2+this._items.length-1;else if(c.autoWidth||c.merge)for(;d-f>1;)Math.abs(this._coordinates[b=d+f>>1])<e?f=b:d=b;else d=c.center?this._items.length-1:this._items.length-c.items;return a&&(d-=this._clones.length/2),Math.max(d,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c=null;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[b-1]||0))/2*(this.settings.rtl?-1:1)):c=this._coordinates[b-1]||0,c)},e.prototype.duration=function(a,b,c){return Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(0>e),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,d=((a-h)%g+g)%g+h,d!==a&&i>=d-e&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.$element.is(":visible")&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){return a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0))?!1:(this.leave("animating"),void this.trigger("translated"))},e.prototype.viewport=function(){var d;if(this.options.responsiveBaseElement!==b)d=a(this.options.responsiveBaseElement).width();else if(b.innerWidth)d=b.innerWidth;else{if(!c.documentElement||!c.documentElement.clientWidth)throw"Can not detect viewport width.";d=c.documentElement.clientWidth}return d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)},this)),this.reset(a.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),this.settings.responsive!==!1&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:c>a;case">":return d?c>a:a>c;case">=":return d?c>=a:a>=c;case"<=":return d?a>=c:c>=a}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,d=c.center&&Math.ceil(c.items/2)||c.items,e=c.center&&-1*d||0,f=(b.property&&b.property.value||this._core.current())+e,g=this._core.clones().length,h=a.proxy(function(a,b){this.load(b)},this);e++<d;)this.load(g/2+this._core.relative(f)),g&&a.each(this._core.clones(this._core.relative(f)),h),f++},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":"url("+g+")",opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.$stage.children().toArray().slice(b,c);heights=[],maxheight=0,a.each(d,function(b,c){heights.push(a(c).height())}),maxheight=Math.max.apply(null,heights),this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=a.attr("data-vimeo-id")?"vimeo":"youtube",d=a.attr("data-vimeo-id")||a.attr("data-youtube-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else{if(!(d[3].indexOf("vimeo")>-1))throw new Error("Video URL not supported.");c="vimeo"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};return b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length?(l(h.attr(i)),h.remove(),!1):void("youtube"===c.type?(f="http://img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type&&a.ajax({type:"GET",url:"http://vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}))},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),"youtube"===f.type?c='<iframe width="'+g+'" height="'+h+'" src="http://www.youtube.com/embed/'+f.id+"?autoplay=1&v="+f.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===f.type&&(c='<iframe src="http://player.vimeo.com/video/'+f.id+'?autoplay=1" width="'+g+'" height="'+h+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),a('<div class="owl-video-frame">'+c+"</div>").insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._paused=!1,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name&&(this._core.settings.autoplay?this.play():this.stop())},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){
this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype.play=function(d,e){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._interval=b.setInterval(a.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||c.hidden||this._core.next(e||this._core.settings.autoplaySpeed)},this),d||this._core.settings.autoplayTimeout))},e.prototype.stop=function(){this._core.is("rotating")&&(b.clearInterval(this._interval),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;e>a;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):0>b&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;d?a.proxy(this._overrides.to,this._core)(b,c):(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c))},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){return g[b]!==d?(e=c?b:!0,!1):void 0}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);

/*!
*	iScroll v5.1.3 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license
*/
!function(t,i,s){function e(t,s){this.wrapper="string"==typeof t?i.querySelector(t):t,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={resizeScrollbars:!0,mouseWheelSpeed:20,snapThreshold:.334,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0};for(var e in s)this.options[e]=s[e];this.translateZ=this.options.HWCompositing&&h.hasPerspective?" translateZ(0)":"",this.options.useTransition=h.hasTransition&&this.options.useTransition,this.options.useTransform=h.hasTransform&&this.options.useTransform,this.options.eventPassthrough=this.options.eventPassthrough===!0?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"==this.options.eventPassthrough?!1:this.options.scrollY,this.options.scrollX="horizontal"==this.options.eventPassthrough?!1:this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?h.ease[this.options.bounceEasing]||h.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,this.options.tap===!0&&(this.options.tap="tap"),"scale"==this.options.shrinkScrollbars&&(this.options.useTransition=!1),this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}function o(t,s,e){var o=i.createElement("div"),n=i.createElement("div");return e===!0&&(o.style.cssText="position:absolute;z-index:9999",n.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),n.className="iScrollIndicator","h"==t?(e===!0&&(o.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",n.style.height="100%"),o.className="iScrollHorizontalScrollbar"):(e===!0&&(o.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",n.style.width="100%"),o.className="iScrollVerticalScrollbar"),o.style.cssText+=";overflow:hidden",s||(o.style.pointerEvents="none"),o.appendChild(n),o}function n(s,e){this.wrapper="string"==typeof e.el?i.querySelector(e.el):e.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=s,this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,shrink:!1,fade:!1,speedRatioX:0,speedRatioY:0};for(var o in e)this.options[o]=e[o];this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.options.interactive&&(this.options.disableTouch||(h.addEvent(this.indicator,"touchstart",this),h.addEvent(t,"touchend",this)),this.options.disablePointer||(h.addEvent(this.indicator,h.prefixPointerEvent("pointerdown"),this),h.addEvent(t,h.prefixPointerEvent("pointerup"),this)),this.options.disableMouse||(h.addEvent(this.indicator,"mousedown",this),h.addEvent(t,"mouseup",this))),this.options.fade&&(this.wrapperStyle[h.style.transform]=this.scroller.translateZ,this.wrapperStyle[h.style.transitionDuration]=h.isBadAndroid?"0.001s":"0ms",this.wrapperStyle.opacity="0")}var r=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(i){t.setTimeout(i,1e3/60)},h=function(){function e(t){return r===!1?!1:""===r?t:r+t.charAt(0).toUpperCase()+t.substr(1)}var o={},n=i.createElement("div").style,r=function(){for(var t,i=["t","webkitT","MozT","msT","OT"],s=0,e=i.length;e>s;s++)if(t=i[s]+"ransform",t in n)return i[s].substr(0,i[s].length-1);return!1}();o.getTime=Date.now||function(){return(new Date).getTime()},o.extend=function(t,i){for(var s in i)t[s]=i[s]},o.addEvent=function(t,i,s,e){t.addEventListener(i,s,!!e)},o.removeEvent=function(t,i,s,e){t.removeEventListener(i,s,!!e)},o.prefixPointerEvent=function(i){return t.MSPointerEvent?"MSPointer"+i.charAt(9).toUpperCase()+i.substr(10):i},o.momentum=function(t,i,e,o,n,r){var h,a,l=t-i,c=s.abs(l)/e;return r=void 0===r?6e-4:r,h=t+c*c/(2*r)*(0>l?-1:1),a=c/r,o>h?(h=n?o-n/2.5*(c/8):o,l=s.abs(h-t),a=l/c):h>0&&(h=n?n/2.5*(c/8):0,l=s.abs(t)+h,a=l/c),{destination:s.round(h),duration:a}};var h=e("transform");return o.extend(o,{hasTransform:h!==!1,hasPerspective:e("perspective")in n,hasTouch:"ontouchstart"in t,hasPointer:t.PointerEvent||t.MSPointerEvent,hasTransition:e("transition")in n}),o.isBadAndroid=/Android /.test(t.navigator.appVersion)&&!/Chrome\/\d/.test(t.navigator.appVersion),o.extend(o.style={},{transform:h,transitionTimingFunction:e("transitionTimingFunction"),transitionDuration:e("transitionDuration"),transitionDelay:e("transitionDelay"),transformOrigin:e("transformOrigin")}),o.hasClass=function(t,i){var s=new RegExp("(^|\\s)"+i+"(\\s|$)");return s.test(t.className)},o.addClass=function(t,i){if(!o.hasClass(t,i)){var s=t.className.split(" ");s.push(i),t.className=s.join(" ")}},o.removeClass=function(t,i){if(o.hasClass(t,i)){var s=new RegExp("(^|\\s)"+i+"(\\s|$)","g");t.className=t.className.replace(s," ")}},o.offset=function(t){for(var i=-t.offsetLeft,s=-t.offsetTop;t=t.offsetParent;)i-=t.offsetLeft,s-=t.offsetTop;return{left:i,top:s}},o.preventDefaultException=function(t,i){for(var s in i)if(i[s].test(t[s]))return!0;return!1},o.extend(o.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),o.extend(o.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return s.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){var i=4;return(t-=1)*t*((i+1)*t+i)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){var i=.22,e=.4;return 0===t?0:1==t?1:e*s.pow(2,-10*t)*s.sin(2*(t-i/4)*s.PI/i)+1}}}),o.tap=function(t,s){var e=i.createEvent("Event");e.initEvent(s,!0,!0),e.pageX=t.pageX,e.pageY=t.pageY,t.target.dispatchEvent(e)},o.click=function(t){var s,e=t.target;/(SELECT|INPUT|TEXTAREA)/i.test(e.tagName)||(s=i.createEvent("MouseEvents"),s.initMouseEvent("click",!0,!0,t.view,1,e.screenX,e.screenY,e.clientX,e.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,0,null),s._constructed=!0,e.dispatchEvent(s))},o}();e.prototype={version:"5.1.3",_init:function(){this._initEvents(),(this.options.scrollbars||this.options.indicators)&&this._initIndicators(),this.options.mouseWheel&&this._initWheel(),this.options.snap&&this._initSnap(),this.options.keyBindings&&this._initKeys()},destroy:function(){this._initEvents(!0),this._execEvent("destroy")},_transitionEnd:function(t){t.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(t){if(!(1!=h.eventType[t.type]&&0!==t.button||!this.enabled||this.initiated&&h.eventType[t.type]!==this.initiated)){!this.options.preventDefault||h.isBadAndroid||h.preventDefaultException(t.target,this.options.preventDefaultException)||t.preventDefault();var i,e=t.touches?t.touches[0]:t;this.initiated=h.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this._transitionTime(),this.startTime=h.getTime(),this.options.useTransition&&this.isInTransition?(this.isInTransition=!1,i=this.getComputedPosition(),this._translate(s.round(i.x),s.round(i.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=e.pageX,this.pointY=e.pageY,this._execEvent("beforeScrollStart")}},_move:function(t){if(this.enabled&&h.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var i,e,o,n,r=t.touches?t.touches[0]:t,a=r.pageX-this.pointX,l=r.pageY-this.pointY,c=h.getTime();if(this.pointX=r.pageX,this.pointY=r.pageY,this.distX+=a,this.distY+=l,o=s.abs(this.distX),n=s.abs(this.distY),!(c-this.endTime>300&&10>o&&10>n)){if(this.directionLocked||this.options.freeScroll||(this.directionLocked=o>n+this.options.directionLockThreshold?"h":n>=o+this.options.directionLockThreshold?"v":"n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)t.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);l=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)t.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);a=0}a=this.hasHorizontalScroll?a:0,l=this.hasVerticalScroll?l:0,i=this.x+a,e=this.y+l,(i>0||i<this.maxScrollX)&&(i=this.options.bounce?this.x+a/3:i>0?0:this.maxScrollX),(e>0||e<this.maxScrollY)&&(e=this.options.bounce?this.y+l/3:e>0?0:this.maxScrollY),this.directionX=a>0?-1:0>a?1:0,this.directionY=l>0?-1:0>l?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(i,e),c-this.startTime>300&&(this.startTime=c,this.startX=this.x,this.startY=this.y)}}},_end:function(t){if(this.enabled&&h.eventType[t.type]===this.initiated){this.options.preventDefault&&!h.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault();var i,e,o=(t.changedTouches?t.changedTouches[0]:t,h.getTime()-this.startTime),n=s.round(this.x),r=s.round(this.y),a=s.abs(n-this.startX),l=s.abs(r-this.startY),c=0,p="";if(this.isInTransition=0,this.initiated=0,this.endTime=h.getTime(),!this.resetPosition(this.options.bounceTime)){if(this.scrollTo(n,r),!this.moved)return this.options.tap&&h.tap(t,this.options.tap),this.options.click&&h.click(t),void this._execEvent("scrollCancel");if(this._events.flick&&200>o&&100>a&&100>l)return void this._execEvent("flick");if(this.options.momentum&&300>o&&(i=this.hasHorizontalScroll?h.momentum(this.x,this.startX,o,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:n,duration:0},e=this.hasVerticalScroll?h.momentum(this.y,this.startY,o,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:r,duration:0},n=i.destination,r=e.destination,c=s.max(i.duration,e.duration),this.isInTransition=1),this.options.snap){var d=this._nearestSnap(n,r);this.currentPage=d,c=this.options.snapSpeed||s.max(s.max(s.min(s.abs(n-d.x),1e3),s.min(s.abs(r-d.y),1e3)),300),n=d.x,r=d.y,this.directionX=0,this.directionY=0,p=this.options.bounceEasing}return n!=this.x||r!=this.y?((n>0||n<this.maxScrollX||r>0||r<this.maxScrollY)&&(p=h.ease.quadratic),void this.scrollTo(n,r,c,p)):void this._execEvent("scrollEnd")}}},_resize:function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling)},resetPosition:function(t){var i=this.x,s=this.y;return t=t||0,!this.hasHorizontalScroll||this.x>0?i=0:this.x<this.maxScrollX&&(i=this.maxScrollX),!this.hasVerticalScroll||this.y>0?s=0:this.y<this.maxScrollY&&(s=this.maxScrollY),i==this.x&&s==this.y?!1:(this.scrollTo(i,s,t,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=h.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(t,i){this._events[t]||(this._events[t]=[]),this._events[t].push(i)},off:function(t,i){if(this._events[t]){var s=this._events[t].indexOf(i);s>-1&&this._events[t].splice(s,1)}},_execEvent:function(t){if(this._events[t]){var i=0,s=this._events[t].length;if(s)for(;s>i;i++)this._events[t][i].apply(this,[].slice.call(arguments,1))}},scrollBy:function(t,i,s,e){t=this.x+t,i=this.y+i,s=s||0,this.scrollTo(t,i,s,e)},scrollTo:function(t,i,s,e){e=e||h.ease.circular,this.isInTransition=this.options.useTransition&&s>0,!s||this.options.useTransition&&e.style?(this._transitionTimingFunction(e.style),this._transitionTime(s),this._translate(t,i)):this._animate(t,i,s,e.fn)},scrollToElement:function(t,i,e,o,n){if(t=t.nodeType?t:this.scroller.querySelector(t)){var r=h.offset(t);r.left-=this.wrapperOffset.left,r.top-=this.wrapperOffset.top,e===!0&&(e=s.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),o===!0&&(o=s.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),r.left-=e||0,r.top-=o||0,r.left=r.left>0?0:r.left<this.maxScrollX?this.maxScrollX:r.left,r.top=r.top>0?0:r.top<this.maxScrollY?this.maxScrollY:r.top,i=void 0===i||null===i||"auto"===i?s.max(s.abs(this.x-r.left),s.abs(this.y-r.top)):i,this.scrollTo(r.left,r.top,i,n)}},_transitionTime:function(t){if(t=t||0,this.scrollerStyle[h.style.transitionDuration]=t+"ms",!t&&h.isBadAndroid&&(this.scrollerStyle[h.style.transitionDuration]="0.001s"),this.indicators)for(var i=this.indicators.length;i--;)this.indicators[i].transitionTime(t)},_transitionTimingFunction:function(t){if(this.scrollerStyle[h.style.transitionTimingFunction]=t,this.indicators)for(var i=this.indicators.length;i--;)this.indicators[i].transitionTimingFunction(t)},_translate:function(t,i){if(this.options.useTransform?this.scrollerStyle[h.style.transform]="translate("+t+"px,"+i+"px)"+this.translateZ:(t=s.round(t),i=s.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.x=t,this.y=i,this.indicators)for(var e=this.indicators.length;e--;)this.indicators[e].updatePosition()},_initEvents:function(i){var s=i?h.removeEvent:h.addEvent,e=this.options.bindToWrapper?this.wrapper:t;s(t,"orientationchange",this),s(t,"resize",this),this.options.click&&s(this.wrapper,"click",this,!0),this.options.disableMouse||(s(this.wrapper,"mousedown",this),s(e,"mousemove",this),s(e,"mousecancel",this),s(e,"mouseup",this)),h.hasPointer&&!this.options.disablePointer&&(s(this.wrapper,h.prefixPointerEvent("pointerdown"),this),s(e,h.prefixPointerEvent("pointermove"),this),s(e,h.prefixPointerEvent("pointercancel"),this),s(e,h.prefixPointerEvent("pointerup"),this)),h.hasTouch&&!this.options.disableTouch&&(s(this.wrapper,"touchstart",this),s(e,"touchmove",this),s(e,"touchcancel",this),s(e,"touchend",this)),s(this.scroller,"transitionend",this),s(this.scroller,"webkitTransitionEnd",this),s(this.scroller,"oTransitionEnd",this),s(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var i,s,e=t.getComputedStyle(this.scroller,null);return this.options.useTransform?(e=e[h.style.transform].split(")")[0].split(", "),i=+(e[12]||e[4]),s=+(e[13]||e[5])):(i=+e.left.replace(/[^-\d.]/g,""),s=+e.top.replace(/[^-\d.]/g,"")),{x:i,y:s}},_initIndicators:function(){function t(t){for(var i=h.indicators.length;i--;)t.call(h.indicators[i])}var i,s=this.options.interactiveScrollbars,e="string"!=typeof this.options.scrollbars,r=[],h=this;this.indicators=[],this.options.scrollbars&&(this.options.scrollY&&(i={el:o("v",s,this.options.scrollbars),interactive:s,defaultScrollbars:!0,customStyle:e,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:!1},this.wrapper.appendChild(i.el),r.push(i)),this.options.scrollX&&(i={el:o("h",s,this.options.scrollbars),interactive:s,defaultScrollbars:!0,customStyle:e,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenY:!1},this.wrapper.appendChild(i.el),r.push(i))),this.options.indicators&&(r=r.concat(this.options.indicators));for(var a=r.length;a--;)this.indicators.push(new n(this,r[a]));this.options.fadeScrollbars&&(this.on("scrollEnd",function(){t(function(){this.fade()})}),this.on("scrollCancel",function(){t(function(){this.fade()})}),this.on("scrollStart",function(){t(function(){this.fade(1)})}),this.on("beforeScrollStart",function(){t(function(){this.fade(1,!0)})})),this.on("refresh",function(){t(function(){this.refresh()})}),this.on("destroy",function(){t(function(){this.destroy()}),delete this.indicators})},_initWheel:function(){h.addEvent(this.wrapper,"wheel",this),h.addEvent(this.wrapper,"mousewheel",this),h.addEvent(this.wrapper,"DOMMouseScroll",this),this.on("destroy",function(){h.removeEvent(this.wrapper,"wheel",this),h.removeEvent(this.wrapper,"mousewheel",this),h.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(t){if(this.enabled){t.preventDefault(),t.stopPropagation();var i,e,o,n,r=this;if(void 0===this.wheelTimeout&&r._execEvent("scrollStart"),clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout(function(){r._execEvent("scrollEnd"),r.wheelTimeout=void 0},400),"deltaX"in t)1===t.deltaMode?(i=-t.deltaX*this.options.mouseWheelSpeed,e=-t.deltaY*this.options.mouseWheelSpeed):(i=-t.deltaX,e=-t.deltaY);else if("wheelDeltaX"in t)i=t.wheelDeltaX/120*this.options.mouseWheelSpeed,e=t.wheelDeltaY/120*this.options.mouseWheelSpeed;else if("wheelDelta"in t)i=e=t.wheelDelta/120*this.options.mouseWheelSpeed;else{if(!("detail"in t))return;i=e=-t.detail/3*this.options.mouseWheelSpeed}if(i*=this.options.invertWheelDirection,e*=this.options.invertWheelDirection,this.hasVerticalScroll||(i=e,e=0),this.options.snap)return o=this.currentPage.pageX,n=this.currentPage.pageY,i>0?o--:0>i&&o++,e>0?n--:0>e&&n++,void this.goToPage(o,n);o=this.x+s.round(this.hasHorizontalScroll?i:0),n=this.y+s.round(this.hasVerticalScroll?e:0),o>0?o=0:o<this.maxScrollX&&(o=this.maxScrollX),n>0?n=0:n<this.maxScrollY&&(n=this.maxScrollY),this.scrollTo(o,n,0)}},_initSnap:function(){this.currentPage={},"string"==typeof this.options.snap&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap)),this.on("refresh",function(){var t,i,e,o,n,r,h=0,a=0,l=0,c=this.options.snapStepX||this.wrapperWidth,p=this.options.snapStepY||this.wrapperHeight;if(this.pages=[],this.wrapperWidth&&this.wrapperHeight&&this.scrollerWidth&&this.scrollerHeight){if(this.options.snap===!0)for(e=s.round(c/2),o=s.round(p/2);l>-this.scrollerWidth;){for(this.pages[h]=[],t=0,n=0;n>-this.scrollerHeight;)this.pages[h][t]={x:s.max(l,this.maxScrollX),y:s.max(n,this.maxScrollY),width:c,height:p,cx:l-e,cy:n-o},n-=p,t++;l-=c,h++}else for(r=this.options.snap,t=r.length,i=-1;t>h;h++)(0===h||r[h].offsetLeft<=r[h-1].offsetLeft)&&(a=0,i++),this.pages[a]||(this.pages[a]=[]),l=s.max(-r[h].offsetLeft,this.maxScrollX),n=s.max(-r[h].offsetTop,this.maxScrollY),e=l-s.round(r[h].offsetWidth/2),o=n-s.round(r[h].offsetHeight/2),this.pages[a][i]={x:l,y:n,width:r[h].offsetWidth,height:r[h].offsetHeight,cx:e,cy:o},l>this.maxScrollX&&a++;this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0),this.options.snapThreshold%1===0?(this.snapThresholdX=this.options.snapThreshold,this.snapThresholdY=this.options.snapThreshold):(this.snapThresholdX=s.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold),this.snapThresholdY=s.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}}),this.on("flick",function(){var t=this.options.snapSpeed||s.max(s.max(s.min(s.abs(this.x-this.startX),1e3),s.min(s.abs(this.y-this.startY),1e3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,t)})},_nearestSnap:function(t,i){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var e=0,o=this.pages.length,n=0;if(s.abs(t-this.absStartX)<this.snapThresholdX&&s.abs(i-this.absStartY)<this.snapThresholdY)return this.currentPage;for(t>0?t=0:t<this.maxScrollX&&(t=this.maxScrollX),i>0?i=0:i<this.maxScrollY&&(i=this.maxScrollY);o>e;e++)if(t>=this.pages[e][0].cx){t=this.pages[e][0].x;break}for(o=this.pages[e].length;o>n;n++)if(i>=this.pages[0][n].cy){i=this.pages[0][n].y;break}return e==this.currentPage.pageX&&(e+=this.directionX,0>e?e=0:e>=this.pages.length&&(e=this.pages.length-1),t=this.pages[e][0].x),n==this.currentPage.pageY&&(n+=this.directionY,0>n?n=0:n>=this.pages[0].length&&(n=this.pages[0].length-1),i=this.pages[0][n].y),{x:t,y:i,pageX:e,pageY:n}},goToPage:function(t,i,e,o){o=o||this.options.bounceEasing,t>=this.pages.length?t=this.pages.length-1:0>t&&(t=0),i>=this.pages[t].length?i=this.pages[t].length-1:0>i&&(i=0);var n=this.pages[t][i].x,r=this.pages[t][i].y;e=void 0===e?this.options.snapSpeed||s.max(s.max(s.min(s.abs(n-this.x),1e3),s.min(s.abs(r-this.y),1e3)),300):e,this.currentPage={x:n,y:r,pageX:t,pageY:i},this.scrollTo(n,r,e,o)},next:function(t,i){var s=this.currentPage.pageX,e=this.currentPage.pageY;s++,s>=this.pages.length&&this.hasVerticalScroll&&(s=0,e++),this.goToPage(s,e,t,i)},prev:function(t,i){var s=this.currentPage.pageX,e=this.currentPage.pageY;s--,0>s&&this.hasVerticalScroll&&(s=0,e--),this.goToPage(s,e,t,i)},_initKeys:function(){var i,s={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40};if("object"==typeof this.options.keyBindings)for(i in this.options.keyBindings)"string"==typeof this.options.keyBindings[i]&&(this.options.keyBindings[i]=this.options.keyBindings[i].toUpperCase().charCodeAt(0));else this.options.keyBindings={};for(i in s)this.options.keyBindings[i]=this.options.keyBindings[i]||s[i];h.addEvent(t,"keydown",this),this.on("destroy",function(){h.removeEvent(t,"keydown",this)})},_key:function(t){if(this.enabled){var i,e=this.options.snap,o=e?this.currentPage.pageX:this.x,n=e?this.currentPage.pageY:this.y,r=h.getTime(),a=this.keyTime||0,l=.25;switch(this.options.useTransition&&this.isInTransition&&(i=this.getComputedPosition(),this._translate(s.round(i.x),s.round(i.y)),this.isInTransition=!1),this.keyAcceleration=200>r-a?s.min(this.keyAcceleration+l,50):0,t.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?o+=e?1:this.wrapperWidth:n+=e?1:this.wrapperHeight;break;case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&!this.hasVerticalScroll?o-=e?1:this.wrapperWidth:n-=e?1:this.wrapperHeight;break;case this.options.keyBindings.end:o=e?this.pages.length-1:this.maxScrollX,n=e?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:o=0,n=0;break;case this.options.keyBindings.left:o+=e?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:n+=e?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:o-=e?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:n-=e?1:5+this.keyAcceleration>>0;break;default:return}if(e)return void this.goToPage(o,n);o>0?(o=0,this.keyAcceleration=0):o<this.maxScrollX&&(o=this.maxScrollX,this.keyAcceleration=0),n>0?(n=0,this.keyAcceleration=0):n<this.maxScrollY&&(n=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(o,n,0),this.keyTime=r}},_animate:function(t,i,s,e){function o(){var d,u,m,f=h.getTime();return f>=p?(n.isAnimating=!1,n._translate(t,i),void(n.resetPosition(n.options.bounceTime)||n._execEvent("scrollEnd"))):(f=(f-c)/s,m=e(f),d=(t-a)*m+a,u=(i-l)*m+l,n._translate(d,u),void(n.isAnimating&&r(o)))}var n=this,a=this.x,l=this.y,c=h.getTime(),p=c+s;this.isAnimating=!0,o()},handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(t);break;case"keydown":this._key(t);break;case"click":t._constructed||(t.preventDefault(),t.stopPropagation())}}},n.prototype={handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t)}},destroy:function(){this.options.interactive&&(h.removeEvent(this.indicator,"touchstart",this),h.removeEvent(this.indicator,h.prefixPointerEvent("pointerdown"),this),h.removeEvent(this.indicator,"mousedown",this),h.removeEvent(t,"touchmove",this),h.removeEvent(t,h.prefixPointerEvent("pointermove"),this),h.removeEvent(t,"mousemove",this),h.removeEvent(t,"touchend",this),h.removeEvent(t,h.prefixPointerEvent("pointerup"),this),h.removeEvent(t,"mouseup",this)),this.options.defaultScrollbars&&this.wrapper.parentNode.removeChild(this.wrapper)},_start:function(i){var s=i.touches?i.touches[0]:i;i.preventDefault(),i.stopPropagation(),this.transitionTime(),this.initiated=!0,this.moved=!1,this.lastPointX=s.pageX,this.lastPointY=s.pageY,this.startTime=h.getTime(),this.options.disableTouch||h.addEvent(t,"touchmove",this),this.options.disablePointer||h.addEvent(t,h.prefixPointerEvent("pointermove"),this),this.options.disableMouse||h.addEvent(t,"mousemove",this),this.scroller._execEvent("beforeScrollStart")},_move:function(t){{var i,s,e,o,n=t.touches?t.touches[0]:t;h.getTime()}this.moved||this.scroller._execEvent("scrollStart"),this.moved=!0,i=n.pageX-this.lastPointX,this.lastPointX=n.pageX,s=n.pageY-this.lastPointY,this.lastPointY=n.pageY,e=this.x+i,o=this.y+s,this._pos(e,o),t.preventDefault(),t.stopPropagation()},_end:function(i){if(this.initiated){if(this.initiated=!1,i.preventDefault(),i.stopPropagation(),h.removeEvent(t,"touchmove",this),h.removeEvent(t,h.prefixPointerEvent("pointermove"),this),h.removeEvent(t,"mousemove",this),this.scroller.options.snap){var e=this.scroller._nearestSnap(this.scroller.x,this.scroller.y),o=this.options.snapSpeed||s.max(s.max(s.min(s.abs(this.scroller.x-e.x),1e3),s.min(s.abs(this.scroller.y-e.y),1e3)),300);(this.scroller.x!=e.x||this.scroller.y!=e.y)&&(this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=e,this.scroller.scrollTo(e.x,e.y,o,this.scroller.options.bounceEasing))}this.moved&&this.scroller._execEvent("scrollEnd")}},transitionTime:function(t){t=t||0,this.indicatorStyle[h.style.transitionDuration]=t+"ms",!t&&h.isBadAndroid&&(this.indicatorStyle[h.style.transitionDuration]="0.001s")},transitionTimingFunction:function(t){this.indicatorStyle[h.style.transitionTimingFunction]=t},refresh:function(){this.transitionTime(),this.indicatorStyle.display=this.options.listenX&&!this.options.listenY?this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.scroller.hasVerticalScroll?"block":"none":this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none",this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(h.addClass(this.wrapper,"iScrollBothScrollbars"),h.removeClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(h.removeClass(this.wrapper,"iScrollBothScrollbars"),h.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="2px":this.wrapper.style.bottom="2px"));this.wrapper.offsetHeight;this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.options.resize?(this.indicatorWidth=s.max(s.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,"clip"==this.options.shrink?(this.minBoundaryX=-this.indicatorWidth+8,this.maxBoundaryX=this.wrapperWidth-8):(this.minBoundaryX=0,this.maxBoundaryX=this.maxPosX),this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX),this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.options.resize?(this.indicatorHeight=s.max(s.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,this.maxPosY=this.wrapperHeight-this.indicatorHeight,"clip"==this.options.shrink?(this.minBoundaryY=-this.indicatorHeight+8,this.maxBoundaryY=this.wrapperHeight-8):(this.minBoundaryY=0,this.maxBoundaryY=this.maxPosY),this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY),this.updatePosition()},updatePosition:function(){var t=this.options.listenX&&s.round(this.sizeRatioX*this.scroller.x)||0,i=this.options.listenY&&s.round(this.sizeRatioY*this.scroller.y)||0;this.options.ignoreBoundaries||(t<this.minBoundaryX?("scale"==this.options.shrink&&(this.width=s.max(this.indicatorWidth+t,8),this.indicatorStyle.width=this.width+"px"),t=this.minBoundaryX):t>this.maxBoundaryX?"scale"==this.options.shrink?(this.width=s.max(this.indicatorWidth-(t-this.maxPosX),8),this.indicatorStyle.width=this.width+"px",t=this.maxPosX+this.indicatorWidth-this.width):t=this.maxBoundaryX:"scale"==this.options.shrink&&this.width!=this.indicatorWidth&&(this.width=this.indicatorWidth,this.indicatorStyle.width=this.width+"px"),i<this.minBoundaryY?("scale"==this.options.shrink&&(this.height=s.max(this.indicatorHeight+3*i,8),this.indicatorStyle.height=this.height+"px"),i=this.minBoundaryY):i>this.maxBoundaryY?"scale"==this.options.shrink?(this.height=s.max(this.indicatorHeight-3*(i-this.maxPosY),8),this.indicatorStyle.height=this.height+"px",i=this.maxPosY+this.indicatorHeight-this.height):i=this.maxBoundaryY:"scale"==this.options.shrink&&this.height!=this.indicatorHeight&&(this.height=this.indicatorHeight,this.indicatorStyle.height=this.height+"px")),this.x=t,this.y=i,this.scroller.options.useTransform?this.indicatorStyle[h.style.transform]="translate("+t+"px,"+i+"px)"+this.scroller.translateZ:(this.indicatorStyle.left=t+"px",this.indicatorStyle.top=i+"px")},_pos:function(t,i){0>t?t=0:t>this.maxPosX&&(t=this.maxPosX),0>i?i=0:i>this.maxPosY&&(i=this.maxPosY),t=this.options.listenX?s.round(t/this.sizeRatioX):this.scroller.x,i=this.options.listenY?s.round(i/this.sizeRatioY):this.scroller.y,this.scroller.scrollTo(t,i)},fade:function(t,i){if(!i||this.visible){clearTimeout(this.fadeTimeout),this.fadeTimeout=null;var s=t?250:500,e=t?0:300;t=t?"1":"0",this.wrapperStyle[h.style.transitionDuration]=s+"ms",this.fadeTimeout=setTimeout(function(t){this.wrapperStyle.opacity=t,this.visible=+t}.bind(this,t),e)}}},e.utils=h,"undefined"!=typeof module&&module.exports?module.exports=e:t.IScroll=e}(window,document,Math);

/*!
 * Fotorama 4.6.3 | http://fotorama.io/license/
 */
fotoramaVersion="4.6.3",function(t,e,n,o,i){"use strict";function r(t){var e="bez_"+o.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof o.easing[e]){var n=function(t,e){var n=[null,null],o=[null,null],i=[null,null],r=function(r,a){return i[a]=3*t[a],o[a]=3*(e[a]-t[a])-i[a],n[a]=1-i[a]-o[a],r*(i[a]+r*(o[a]+r*n[a]))},a=function(t){return i[0]+t*(2*o[0]+3*n[0]*t)},s=function(t){for(var e,n=t,o=0;++o<14&&(e=r(n,0)-t,!(Math.abs(e)<.001));)n-=e/a(n);return n};return function(t){return r(s(t),1)}};o.easing[e]=function(e,o,i,r,a){return r*n([t[0],t[1]],[t[2],t[3]])(o/a)+i}}return e}function a(){}function s(t,e,n){return Math.max(isNaN(e)?-1/0:e,Math.min(isNaN(n)?1/0:n,t))}function u(t){return t.match(/ma/)&&t.match(/-?\d+(?!d)/g)[t.match(/3d/)?12:4]}function l(t){return An?+u(t.css("transform")):+t.css("left").replace("px","")}function c(t){var e={};return An?e.transform="translate3d("+t+"px,0,0)":e.left=t,e}function f(t){return{"transition-duration":t+"ms"}}function d(t,e){return isNaN(t)?e:t}function h(t,e){return d(+String(t).replace(e||"px",""))}function m(t){return/%$/.test(t)?h(t,"%"):i}function p(t,e){return d(m(t)/100*e,h(t))}function v(t){return(!isNaN(h(t))||!isNaN(h(t,"%")))&&t}function g(t,e,n,o){return(t-(o||0))*(e+(n||0))}function w(t,e,n,o){return-Math.round(t/(e+(n||0))-(o||0))}function y(t){var e=t.data();if(!e.tEnd){var n=t[0],o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};V(n,o[xn.prefixed("transition")],function(t){e.tProp&&t.propertyName.match(e.tProp)&&e.onEndFn()}),e.tEnd=!0}}function b(t,e,n,o){var i,r=t.data();r&&(r.onEndFn=function(){i||(i=!0,clearTimeout(r.tT),n())},r.tProp=e,clearTimeout(r.tT),r.tT=setTimeout(function(){r.onEndFn()},1.5*o),y(t))}function x(t,e){if(t.length){var n=t.data();An?(t.css(f(0)),n.onEndFn=a,clearTimeout(n.tT)):t.stop();var o=_(e,function(){return l(t)});return t.css(c(o)),o}}function _(){for(var t,e=0,n=arguments.length;n>e&&(t=e?arguments[e]():arguments[e],"number"!=typeof t);e++);return t}function C(t,e){return Math.round(t+(e-t)/1.5)}function T(){return T.p=T.p||("https:"===n.protocol?"https://":"http://"),T.p}function k(t){var n=e.createElement("a");return n.href=t,n}function M(t,e){if("string"!=typeof t)return t;t=k(t);var n,o;if(t.host.match(/youtube\.com/)&&t.search){if(n=t.search.split("v=")[1]){var i=n.indexOf("&");-1!==i&&(n=n.substring(0,i)),o="youtube"}}else t.host.match(/youtube\.com|youtu\.be/)?(n=t.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),o="youtube"):t.host.match(/vimeo\.com/)&&(o="vimeo",n=t.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""));return n&&o||!e||(n=t.href,o="custom"),n?{id:n,type:o,s:t.search.replace(/^\?/,""),p:T()}:!1}function S(t,e,n){var i,r,a=t.video;return"youtube"===a.type?(r=T()+"img.youtube.com/vi/"+a.id+"/default.jpg",i=r.replace(/\/default.jpg$/,"/hqdefault.jpg"),t.thumbsReady=!0):"vimeo"===a.type?o.ajax({url:T()+"vimeo.com/api/v2/video/"+a.id+".json",dataType:"jsonp",success:function(o){t.thumbsReady=!0,F(e,{img:o[0].thumbnail_large,thumb:o[0].thumbnail_small},t.i,n)}}):t.thumbsReady=!0,{img:i,thumb:r}}function F(t,e,n,i){for(var r=0,a=t.length;a>r;r++){var s=t[r];if(s.i===n&&s.thumbsReady){var u={videoReady:!0};u[Yn]=u[Jn]=u[Gn]=!1,i.splice(r,1,o.extend({},s,u,e));break}}}function E(t){function e(t,e,i){var r=t.children("img").eq(0),a=t.attr("href"),s=t.attr("src"),u=r.attr("src"),l=e.video,c=i?M(a,l===!0):!1;c?a=!1:c=l,n(t,r,o.extend(e,{video:c,img:e.img||a||s||u,thumb:e.thumb||u||s||a}))}function n(t,e,n){var i=n.thumb&&n.img!==n.thumb,r=h(n.width||t.attr("width")),a=h(n.height||t.attr("height"));o.extend(n,{width:r,height:a,thumbratio:K(n.thumbratio||h(n.thumbwidth||e&&e.attr("width")||i||r)/h(n.thumbheight||e&&e.attr("height")||i||a))})}var i=[];return t.children().each(function(){var t=o(this),r=H(o.extend(t.data(),{id:t.attr("id")}));if(t.is("a, img"))e(t,r,!0);else{if(t.is(":empty"))return;n(t,null,o.extend(r,{html:this,_html:t.html()}))}i.push(r)}),i}function P(t){return 0===t.offsetWidth&&0===t.offsetHeight}function j(t){return!o.contains(e.documentElement,t)}function N(t,e,n,o){return N.i||(N.i=1,N.ii=[!0]),o=o||N.i,"undefined"==typeof N.ii[o]&&(N.ii[o]=!0),t()?e():N.ii[o]&&setTimeout(function(){N.ii[o]&&N(t,e,n,o)},n||100),N.i++}function $(t){n.replace(n.protocol+"//"+n.host+n.pathname.replace(/^\/?/,"/")+n.search+"#"+t)}function q(t,e,n,o){var i=t.data(),r=i.measures;if(r&&(!i.l||i.l.W!==r.width||i.l.H!==r.height||i.l.r!==r.ratio||i.l.w!==e.w||i.l.h!==e.h||i.l.m!==n||i.l.p!==o)){var a=r.width,u=r.height,l=e.w/e.h,c=r.ratio>=l,f="scaledown"===n,d="contain"===n,h="cover"===n,m=J(o);c&&(f||d)||!c&&h?(a=s(e.w,0,f?a:1/0),u=a/r.ratio):(c&&h||!c&&(f||d))&&(u=s(e.h,0,f?u:1/0),a=u*r.ratio),t.css({width:a,height:u,left:p(m.x,e.w-a),top:p(m.y,e.h-u)}),i.l={W:r.width,H:r.height,r:r.ratio,w:e.w,h:e.h,m:n,p:o}}return!0}function A(t,e){var n=t[0];n.styleSheet?n.styleSheet.cssText=e:t.html(e)}function z(t,e,n){return e===n?!1:e>=t?"left":t>=n?"right":"left right"}function L(t,e,n,o){if(!n)return!1;if(!isNaN(t))return t-(o?0:1);for(var i,r=0,a=e.length;a>r;r++){var s=e[r];if(s.id===t){i=r;break}}return i}function O(t,e,n){n=n||{},t.each(function(){var t,i=o(this),r=i.data();r.clickOn||(r.clickOn=!0,o.extend(ne(i,{onStart:function(e){t=e,(n.onStart||a).call(this,e)},onMove:n.onMove||a,onTouchEnd:n.onTouchEnd||a,onEnd:function(n){n.moved||e.call(this,t)}}),{noMove:!0}))})}function I(t,e){return'<div class="'+t+'">'+(e||"")+"</div>"}function D(t){for(var e=t.length;e;){var n=Math.floor(Math.random()*e--),o=t[e];t[e]=t[n],t[n]=o}return t}function R(t){return"[object Array]"==Object.prototype.toString.call(t)&&o.map(t,function(t){return o.extend({},t)})}function W(t,e,n){t.scrollLeft(e||0).scrollTop(n||0)}function H(t){if(t){var e={};return o.each(t,function(t,n){e[t.toLowerCase()]=n}),e}}function K(t){if(t){var e=+t;return isNaN(e)?(e=t.split("/"),+e[0]/+e[1]||i):e}}function V(t,e,n,o){e&&(t.addEventListener?t.addEventListener(e,n,!!o):t.attachEvent("on"+e,n))}function B(t){return!!t.getAttribute("disabled")}function X(t){return{tabindex:-1*t+"",disabled:t}}function Q(t,e){V(t,"keyup",function(n){B(t)||13==n.keyCode&&e.call(t,n)})}function U(t,e){V(t,"focus",t.onfocusin=function(n){e.call(t,n)},!0)}function Y(t,e){t.preventDefault?t.preventDefault():t.returnValue=!1,e&&t.stopPropagation&&t.stopPropagation()}function G(t){return t?">":"<"}function J(t){return t=(t+"").split(/\s+/),{x:v(t[0])||no,y:v(t[1])||no}}function Z(t,e){var n=t.data(),i=Math.round(e.pos),r=function(){n.sliding=!1,(e.onEnd||a)()};"undefined"!=typeof e.overPos&&e.overPos!==e.pos&&(i=e.overPos,r=function(){Z(t,o.extend({},e,{overPos:e.pos,time:Math.max(Hn,e.time/2)}))});var s=o.extend(c(i),e.width&&{width:e.width});n.sliding=!0,An?(t.css(o.extend(f(e.time),s)),e.time>10?b(t,"transform",r,e.time):r()):t.stop().animate(s,e.time,to,r)}function te(t,e,n,i,r,s){var u="undefined"!=typeof s;if(u||(r.push(arguments),Array.prototype.push.call(arguments,r.length),!(r.length>1))){t=t||o(t),e=e||o(e);var l=t[0],c=e[0],f="crossfade"===i.method,d=function(){if(!d.done){d.done=!0;var t=(u||r.shift())&&r.shift();t&&te.apply(this,t),(i.onEnd||a)(!!t)}},h=i.time/(s||1);n.removeClass(He+" "+We),t.stop().addClass(He),e.stop().addClass(We),f&&c&&t.fadeTo(0,0),t.fadeTo(f?h:0,1,f&&d),e.fadeTo(h,0,d),l&&f||c||d()}}function ee(t){var e=(t.touches||[])[0]||t;t._x=e.pageX,t._y=e.clientY,t._now=o.now()}function ne(t,n){function i(t){return d=o(t.target),b.checked=p=v=w=!1,c||b.flow||t.touches&&t.touches.length>1||t.which>1||ro&&ro.type!==t.type&&so||(p=n.select&&d.is(n.select,y))?p:(m="touchstart"===t.type,v=d.is("a, a *",y),h=b.control,g=b.noMove||b.noSwipe||h?16:b.snap?0:4,ee(t),f=ro=t,ao=t.type.replace(/down|start/,"move").replace(/Down/,"Move"),(n.onStart||a).call(y,t,{control:h,$target:d}),c=b.flow=!0,void((!m||b.go)&&Y(t)))}function r(t){if(t.touches&&t.touches.length>1||Dn&&!t.isPrimary||ao!==t.type||!c)return c&&s(),void(n.onTouchEnd||a)();ee(t);var e=Math.abs(t._x-f._x),o=Math.abs(t._y-f._y),i=e-o,r=(b.go||b.x||i>=0)&&!b.noSwipe,u=0>i;m&&!b.checked?(c=r)&&Y(t):(Y(t),(n.onMove||a).call(y,t,{touch:m})),!w&&Math.sqrt(Math.pow(e,2)+Math.pow(o,2))>g&&(w=!0),b.checked=b.checked||r||u}function s(t){(n.onTouchEnd||a)();var e=c;b.control=c=!1,e&&(b.flow=!1),!e||v&&!b.checked||(t&&Y(t),so=!0,clearTimeout(uo),uo=setTimeout(function(){so=!1},1e3),(n.onEnd||a).call(y,{moved:w,$target:d,control:h,touch:m,startEvent:f,aborted:!t||"MSPointerCancel"===t.type}))}function u(){b.flow||setTimeout(function(){b.flow=!0},10)}function l(){b.flow&&setTimeout(function(){b.flow=!1},Wn)}var c,f,d,h,m,p,v,g,w,y=t[0],b={};return Dn?(V(y,"MSPointerDown",i),V(e,"MSPointerMove",r),V(e,"MSPointerCancel",s),V(e,"MSPointerUp",s)):(V(y,"touchstart",i),V(y,"touchmove",r),V(y,"touchend",s),V(e,"touchstart",u),V(e,"touchend",l),V(e,"touchcancel",l),jn.on("scroll",l),t.on("mousedown",i),Nn.on("mousemove",r).on("mouseup",s)),t.on("click","a",function(t){b.checked&&Y(t)}),b}function oe(t,e){function n(n,o){M=!0,l=f=n._x,v=n._now,p=[[v,l]],d=h=E.noMove||o?0:x(t,(e.getPos||a)()),(e.onStart||a).call(S,n)}function i(t,e){w=E.min,y=E.max,b=E.snap,_=t.altKey,M=k=!1,T=e.control,T||F.sliding||n(t)}function r(o,i){E.noSwipe||(M||n(o),f=o._x,p.push([o._now,f]),h=d-(l-f),m=z(h,w,y),w>=h?h=C(h,w):h>=y&&(h=C(h,y)),E.noMove||(t.css(c(h)),k||(k=!0,i.touch||Dn||t.addClass(rn)),(e.onMove||a).call(S,o,{pos:h,edge:m})))}function u(i){if(!E.noSwipe||!i.moved){M||n(i.startEvent,!0),i.touch||Dn||t.removeClass(rn),g=o.now();for(var r,u,l,c,m,v,x,C,T,k=g-Wn,F=null,P=Hn,j=e.friction,N=p.length-1;N>=0;N--){if(r=p[N][0],u=Math.abs(r-k),null===F||l>u)F=r,c=p[N][1];else if(F===k||u>l)break;l=u}x=s(h,w,y);var $=c-f,q=$>=0,A=g-F,z=A>Wn,L=!z&&h!==d&&x===h;b&&(x=s(Math[L?q?"floor":"ceil":"round"](h/b)*b,w,y),w=y=x),L&&(b||x===h)&&(T=-($/A),P*=s(Math.abs(T),e.timeLow,e.timeHigh),m=Math.round(h+T*P/j),b||(x=m),(!q&&m>y||q&&w>m)&&(v=q?w:y,C=m-v,b||(x=v),C=s(x+.03*C,v-50,v+50),P=Math.abs((h-C)/(T/j)))),P*=_?10:1,(e.onEnd||a).call(S,o.extend(i,{moved:i.moved||z&&b,pos:h,newPos:x,overPos:C,time:P}))}}var l,f,d,h,m,p,v,g,w,y,b,_,T,k,M,S=t[0],F=t.data(),E={};return E=o.extend(ne(e.$wrap,o.extend({},e,{onStart:i,onMove:r,onEnd:u})),E)}function ie(t,e){var n,i,r,s=t[0],u={prevent:{}};return V(s,Rn,function(t){var s=t.wheelDeltaY||-1*t.deltaY||0,l=t.wheelDeltaX||-1*t.deltaX||0,c=Math.abs(l)&&!Math.abs(s),f=G(0>l),d=i===f,h=o.now(),m=Wn>h-r;i=f,r=h,c&&u.ok&&(!u.prevent[f]||n)&&(Y(t,!0),n&&d&&m||(e.shift&&(n=!0,clearTimeout(u.t),u.t=setTimeout(function(){n=!1},Kn)),(e.onEnd||a)(t,e.shift?f:l)))}),u}function re(){o.each(o.Fotorama.instances,function(t,e){e.index=t})}function ae(t){o.Fotorama.instances.push(t),re()}function se(t){o.Fotorama.instances.splice(t.index,1),re()}var ue="fotorama",le="fullscreen",ce=ue+"__wrap",fe=ce+"--css2",de=ce+"--css3",he=ce+"--video",me=ce+"--fade",pe=ce+"--slide",ve=ce+"--no-controls",ge=ce+"--no-shadows",we=ce+"--pan-y",ye=ce+"--rtl",be=ce+"--only-active",xe=ce+"--no-captions",_e=ce+"--toggle-arrows",Ce=ue+"__stage",Te=Ce+"__frame",ke=Te+"--video",Me=Ce+"__shaft",Se=ue+"__grab",Fe=ue+"__pointer",Ee=ue+"__arr",Pe=Ee+"--disabled",je=Ee+"--prev",Ne=Ee+"--next",$e=ue+"__nav",qe=$e+"-wrap",Ae=$e+"__shaft",ze=$e+"--dots",Le=$e+"--thumbs",Oe=$e+"__frame",Ie=Oe+"--dot",De=Oe+"--thumb",Re=ue+"__fade",We=Re+"-front",He=Re+"-rear",Ke=ue+"__shadow",Ve=Ke+"s",Be=Ve+"--left",Xe=Ve+"--right",Qe=ue+"__active",Ue=ue+"__select",Ye=ue+"--hidden",Ge=ue+"--fullscreen",Je=ue+"__fullscreen-icon",Ze=ue+"__error",tn=ue+"__loading",en=ue+"__loaded",nn=en+"--full",on=en+"--img",rn=ue+"__grabbing",an=ue+"__img",sn=an+"--full",un=ue+"__dot",ln=ue+"__thumb",cn=ln+"-border",fn=ue+"__html",dn=ue+"__video",hn=dn+"-play",mn=dn+"-close",pn=ue+"__caption",vn=ue+"__caption__wrap",gn=ue+"__spinner",wn='" tabindex="0" role="button',yn=o&&o.fn.jquery.split(".");if(!yn||yn[0]<1||1==yn[0]&&yn[1]<8)throw"Fotorama requires jQuery 1.8 or later and will not run without it.";var bn={},xn=function(t,e,n){function o(t){g.cssText=t}function i(t,e){return typeof t===e}function r(t,e){return!!~(""+t).indexOf(e)}function a(t,e){for(var o in t){var i=t[o];if(!r(i,"-")&&g[i]!==n)return"pfx"==e?i:!0}return!1}function s(t,e,o){for(var r in t){var a=e[t[r]];if(a!==n)return o===!1?t[r]:i(a,"function")?a.bind(o||e):a}return!1}function u(t,e,n){var o=t.charAt(0).toUpperCase()+t.slice(1),r=(t+" "+b.join(o+" ")+o).split(" ");return i(e,"string")||i(e,"undefined")?a(r,e):(r=(t+" "+x.join(o+" ")+o).split(" "),s(r,e,n))}var l,c,f,d="2.6.2",h={},m=e.documentElement,p="modernizr",v=e.createElement(p),g=v.style,w=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),y="Webkit Moz O ms",b=y.split(" "),x=y.toLowerCase().split(" "),_={},C=[],T=C.slice,k=function(t,n,o,i){var r,a,s,u,l=e.createElement("div"),c=e.body,f=c||e.createElement("body");if(parseInt(o,10))for(;o--;)s=e.createElement("div"),s.id=i?i[o]:p+(o+1),l.appendChild(s);return r=["&#173;",'<style id="s',p,'">',t,"</style>"].join(""),l.id=p,(c?l:f).innerHTML+=r,f.appendChild(l),c||(f.style.background="",f.style.overflow="hidden",u=m.style.overflow,m.style.overflow="hidden",m.appendChild(f)),a=n(l,t),c?l.parentNode.removeChild(l):(f.parentNode.removeChild(f),m.style.overflow=u),!!a},M={}.hasOwnProperty;f=i(M,"undefined")||i(M.call,"undefined")?function(t,e){return e in t&&i(t.constructor.prototype[e],"undefined")}:function(t,e){return M.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=T.call(arguments,1),o=function(){if(this instanceof o){var i=function(){};i.prototype=e.prototype;var r=new i,a=e.apply(r,n.concat(T.call(arguments)));return Object(a)===a?a:r}return e.apply(t,n.concat(T.call(arguments)))};return o}),_.csstransforms3d=function(){var t=!!u("perspective");return t};for(var S in _)f(_,S)&&(c=S.toLowerCase(),h[c]=_[S](),C.push((h[c]?"":"no-")+c));return h.addTest=function(t,e){if("object"==typeof t)for(var o in t)f(t,o)&&h.addTest(o,t[o]);else{if(t=t.toLowerCase(),h[t]!==n)return h;e="function"==typeof e?e():e,"undefined"!=typeof enableClasses&&enableClasses&&(m.className+=" "+(e?"":"no-")+t),h[t]=e}return h},o(""),v=l=null,h._version=d,h._prefixes=w,h._domPrefixes=x,h._cssomPrefixes=b,h.testProp=function(t){return a([t])},h.testAllProps=u,h.testStyles=k,h.prefixed=function(t,e,n){return e?u(t,e,n):u(t,"pfx")},h}(t,e),_n={ok:!1,is:function(){return!1},request:function(){},cancel:function(){},event:"",prefix:""},Cn="webkit moz o ms khtml".split(" ");if("undefined"!=typeof e.cancelFullScreen)_n.ok=!0;else for(var Tn=0,kn=Cn.length;kn>Tn;Tn++)if(_n.prefix=Cn[Tn],"undefined"!=typeof e[_n.prefix+"CancelFullScreen"]){_n.ok=!0;break}_n.ok&&(_n.event=_n.prefix+"fullscreenchange",_n.is=function(){switch(this.prefix){case"":return e.fullScreen;case"webkit":return e.webkitIsFullScreen;default:return e[this.prefix+"FullScreen"]}},_n.request=function(t){return""===this.prefix?t.requestFullScreen():t[this.prefix+"RequestFullScreen"]()},_n.cancel=function(){return""===this.prefix?e.cancelFullScreen():e[this.prefix+"CancelFullScreen"]()});var Mn,Sn={lines:12,length:5,width:2,radius:7,corners:1,rotate:15,color:"rgba(128, 128, 128, .75)",hwaccel:!0},Fn={top:"auto",left:"auto",className:""};!function(t,e){Mn=e()}(this,function(){function t(t,n){var o,i=e.createElement(t||"div");for(o in n)i[o]=n[o];return i}function n(t){for(var e=1,n=arguments.length;n>e;e++)t.appendChild(arguments[e]);return t}function o(t,e,n,o){var i=["opacity",e,~~(100*t),n,o].join("-"),r=.01+n/o*100,a=Math.max(1-(1-t)/e*(100-r),t),s=d.substring(0,d.indexOf("Animation")).toLowerCase(),u=s&&"-"+s+"-"||"";return m[i]||(p.insertRule("@"+u+"keyframes "+i+"{0%{opacity:"+a+"}"+r+"%{opacity:"+t+"}"+(r+.01)+"%{opacity:1}"+(r+e)%100+"%{opacity:"+t+"}100%{opacity:"+a+"}}",p.cssRules.length),m[i]=1),i}function r(t,e){var n,o,r=t.style;for(e=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<h.length;o++)if(n=h[o]+e,r[n]!==i)return n;return r[e]!==i?e:void 0}function a(t,e){for(var n in e)t.style[r(t,n)||n]=e[n];return t}function s(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)t[o]===i&&(t[o]=n[o])}return t}function u(t){for(var e={x:t.offsetLeft,y:t.offsetTop};t=t.offsetParent;)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}function l(t,e){return"string"==typeof t?t:t[e%t.length]}function c(t){return"undefined"==typeof this?new c(t):void(this.opts=s(t||{},c.defaults,v))}function f(){function e(e,n){return t("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',n)}p.addRule(".spin-vml","behavior:url(#default#VML)"),c.prototype.lines=function(t,o){function i(){return a(e("group",{coordsize:c+" "+c,coordorigin:-u+" "+-u}),{width:c,height:c})}function r(t,r,s){n(d,n(a(i(),{rotation:360/o.lines*t+"deg",left:~~r}),n(a(e("roundrect",{arcsize:o.corners}),{width:u,height:o.width,left:o.radius,top:-o.width>>1,filter:s}),e("fill",{color:l(o.color,t),opacity:o.opacity}),e("stroke",{opacity:0}))))}var s,u=o.length+o.width,c=2*u,f=2*-(o.width+o.length)+"px",d=a(i(),{position:"absolute",top:f,left:f});if(o.shadow)for(s=1;s<=o.lines;s++)r(s,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(s=1;s<=o.lines;s++)r(s);return n(t,d)},c.prototype.opacity=function(t,e,n,o){var i=t.firstChild;o=o.shadow&&o.lines||0,i&&e+o<i.childNodes.length&&(i=i.childNodes[e+o],i=i&&i.firstChild,i=i&&i.firstChild,i&&(i.opacity=n))}}var d,h=["webkit","Moz","ms","O"],m={},p=function(){var o=t("style",{type:"text/css"});return n(e.getElementsByTagName("head")[0],o),o.sheet||o.styleSheet}(),v={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};c.defaults={},s(c.prototype,{spin:function(e){this.stop();var n,o,i=this,r=i.opts,s=i.el=a(t(0,{className:r.className}),{position:r.position,width:0,zIndex:r.zIndex}),l=r.radius+r.length+r.width;if(e&&(e.insertBefore(s,e.firstChild||null),o=u(e),n=u(s),a(s,{left:("auto"==r.left?o.x-n.x+(e.offsetWidth>>1):parseInt(r.left,10)+l)+"px",top:("auto"==r.top?o.y-n.y+(e.offsetHeight>>1):parseInt(r.top,10)+l)+"px"})),s.setAttribute("role","progressbar"),i.lines(s,i.opts),!d){var c,f=0,h=(r.lines-1)*(1-r.direction)/2,m=r.fps,p=m/r.speed,v=(1-r.opacity)/(p*r.trail/100),g=p/r.lines;!function w(){f++;for(var t=0;t<r.lines;t++)c=Math.max(1-(f+(r.lines-t)*g)%p*v,r.opacity),i.opacity(s,t*r.direction+h,c,r);i.timeout=i.el&&setTimeout(w,~~(1e3/m))}()}return i},stop:function(){var t=this.el;return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),this.el=i),this},lines:function(e,i){function r(e,n){return a(t(),{position:"absolute",width:i.length+i.width+"px",height:i.width+"px",background:e,boxShadow:n,transformOrigin:"left",transform:"rotate("+~~(360/i.lines*u+i.rotate)+"deg) translate("+i.radius+"px,0)",borderRadius:(i.corners*i.width>>1)+"px"})}for(var s,u=0,c=(i.lines-1)*(1-i.direction)/2;u<i.lines;u++)s=a(t(),{position:"absolute",top:1+~(i.width/2)+"px",transform:i.hwaccel?"translate3d(0,0,0)":"",opacity:i.opacity,animation:d&&o(i.opacity,i.trail,c+u*i.direction,i.lines)+" "+1/i.speed+"s linear infinite"}),i.shadow&&n(s,a(r("#000","0 0 4px #000"),{top:"2px"})),n(e,n(s,r(l(i.color,u),"0 0 1px rgba(0,0,0,.1)")));return e},opacity:function(t,e,n){e<t.childNodes.length&&(t.childNodes[e].style.opacity=n)}});var g=a(t("group"),{behavior:"url(#default#VML)"});return!r(g,"transform")&&g.adj?f():d=r(g,"animation"),c});var En,Pn,jn=o(t),Nn=o(e),$n="quirks"===n.hash.replace("#",""),qn=xn.csstransforms3d,An=qn&&!$n,zn=qn||"CSS1Compat"===e.compatMode,Ln=_n.ok,On=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),In=!An||On,Dn=navigator.msPointerEnabled,Rn="onwheel"in e.createElement("div")?"wheel":e.onmousewheel!==i?"mousewheel":"DOMMouseScroll",Wn=250,Hn=300,Kn=1400,Vn=5e3,Bn=2,Xn=64,Qn=500,Un=333,Yn="$stageFrame",Gn="$navDotFrame",Jn="$navThumbFrame",Zn="auto",to=r([.1,0,.25,1]),eo=99999,no="50%",oo={width:null,minwidth:null,maxwidth:"100%",height:null,minheight:null,maxheight:null,ratio:null,margin:Bn,glimpse:0,fit:"contain",position:no,thumbposition:no,nav:"dots",navposition:"bottom",navwidth:null,thumbwidth:Xn,thumbheight:Xn,thumbmargin:Bn,thumbborderwidth:Bn,thumbfit:"cover",allowfullscreen:!1,transition:"slide",clicktransition:null,transitionduration:Hn,captions:!0,hash:!1,startindex:0,loop:!1,autoplay:!1,stopautoplayontouch:!0,keyboard:!1,arrows:!0,click:!0,swipe:!0,trackpad:!1,enableifsingleframe:!1,controlsonstart:!0,shuffle:!1,direction:"ltr",shadows:!0,spinner:null},io={left:!0,right:!0,down:!1,up:!1,space:!1,home:!1,end:!1};N.stop=function(t){N.ii[t]=!1};var ro,ao,so,uo;jQuery.Fotorama=function(t,i){function r(){o.each(Mo,function(t,e){if(!e.i){e.i=mi++;var n=M(e.video,!0);if(n){var o={};e.video=n,e.img||e.thumb?e.thumbsReady=!0:o=S(e,Mo,ci),F(Mo,{img:o.img,thumb:o.thumb},e.i,ci)}}})}function a(t){return Zo[t]||ci.fullScreen}function u(t){var e="keydown."+ue,n=ue+fi,o="keydown."+n,r="resize."+n+" orientationchange."+n;t?(Nn.on(o,function(t){var e,n;Po&&27===t.keyCode?(e=!0,mo(Po,!0,!0)):(ci.fullScreen||i.keyboard&&!ci.index)&&(27===t.keyCode?(e=!0,ci.cancelFullScreen()):t.shiftKey&&32===t.keyCode&&a("space")||37===t.keyCode&&a("left")||38===t.keyCode&&a("up")?n="<":32===t.keyCode&&a("space")||39===t.keyCode&&a("right")||40===t.keyCode&&a("down")?n=">":36===t.keyCode&&a("home")?n="<<":35===t.keyCode&&a("end")&&(n=">>")),(e||n)&&Y(t),n&&ci.show({index:n,slow:t.altKey,user:!0})}),ci.index||Nn.off(e).on(e,"textarea, input, select",function(t){!Pn.hasClass(le)&&t.stopPropagation()}),jn.on(r,ci.resize)):(Nn.off(o),jn.off(r))}function l(e){e!==l.f&&(e?(t.html("").addClass(ue+" "+di).append(wi).before(vi).before(gi),ae(ci)):(wi.detach(),vi.detach(),gi.detach(),t.html(pi.urtext).removeClass(di),se(ci)),u(e),l.f=e)}function d(){Mo=ci.data=Mo||R(i.data)||E(t),So=ci.size=Mo.length,!ko.ok&&i.shuffle&&D(Mo),r(),Li=T(Li),So&&l(!0)}function m(){var t=2>So&&!i.enableifsingleframe||Po;Di.noMove=t||Bo,Di.noSwipe=t||!i.swipe,!Yo&&bi.toggleClass(Se,!i.click&&!Di.noMove&&!Di.noSwipe),Dn&&wi.toggleClass(we,!Di.noSwipe)}function y(t){t===!0&&(t=""),i.autoplay=Math.max(+t||Vn,1.5*Uo)}function b(){function t(t,n){e[t?"add":"remove"].push(n)}ci.options=i=H(i),Bo="crossfade"===i.transition||"dissolve"===i.transition,Do=i.loop&&(So>2||Bo&&(!Yo||"slide"!==Yo)),Uo=+i.transitionduration||Hn,Jo="rtl"===i.direction,Zo=o.extend({},i.keyboard&&io,i.keyboard);var e={add:[],remove:[]};So>1||i.enableifsingleframe?(Ro=i.nav,Ho="top"===i.navposition,e.remove.push(Ue),Ti.toggle(!!i.arrows)):(Ro=!1,Ti.hide()),He(),Eo=new Mn(o.extend(Sn,i.spinner,Fn,{direction:Jo?-1:1})),$n(),qn(),i.autoplay&&y(i.autoplay),Xo=h(i.thumbwidth)||Xn,Qo=h(i.thumbheight)||Xn,Ri.ok=Hi.ok=i.trackpad&&!In,m(),ro(i,[Ii]),Wo="thumbs"===Ro,Wo?(dn(So,"navThumb"),Fo=Ei,li=Jn,A(vi,o.Fotorama.jst.style({w:Xo,h:Qo,b:i.thumbborderwidth,m:i.thumbmargin,s:fi,q:!zn})),Mi.addClass(Le).removeClass(ze)):"dots"===Ro?(dn(So,"navDot"),Fo=Fi,li=Gn,Mi.addClass(ze).removeClass(Le)):(Ro=!1,Mi.removeClass(Le+" "+ze)),Ro&&(Ho?ki.insertBefore(yi):ki.insertAfter(yi),Cn.nav=!1,Cn(Fo,Si,"nav")),Ko=i.allowfullscreen,Ko?(ji.prependTo(yi),Vo=Ln&&"native"===Ko):(ji.detach(),Vo=!1),t(Bo,me),t(!Bo,pe),t(!i.captions,xe),t(Jo,ye),t("always"!==i.arrows,_e),Go=i.shadows&&!In,t(!Go,ge),wi.addClass(e.add.join(" ")).removeClass(e.remove.join(" ")),Oi=o.extend({},i)}function C(t){return 0>t?(So+t%So)%So:t>=So?t%So:t}function T(t){return s(t,0,So-1)}function k(t){return Do?C(t):T(t)}function P(t){return t>0||Do?t-1:!1}function B(t){return So-1>t||Do?t+1:!1}function J(){Di.min=Do?-1/0:-g(So-1,Ii.w,i.margin,$o),Di.max=Do?1/0:-g(0,Ii.w,i.margin,$o),Di.snap=Ii.w+i.margin}function ee(){Wi.min=Math.min(0,Ii.nw-Si.width()),Wi.max=0,Si.toggleClass(Se,!(Wi.noMove=Wi.min===Wi.max))}function ne(t,e,n){if("number"==typeof t){t=new Array(t);var i=!0}return o.each(t,function(t,o){if(i&&(o=t),"number"==typeof o){var r=Mo[C(o)];if(r){var a="$"+e+"Frame",s=r[a];n.call(this,t,o,r,s,a,s&&s.data())}}})}function re(t,e,n,o){(!ti||"*"===ti&&o===Io)&&(t=v(i.width)||v(t)||Qn,e=v(i.height)||v(e)||Un,ci.resize({width:t,ratio:i.ratio||n||t/e},0,o!==Io&&"*"))}function Re(t,e,n,r,a,s){ne(t,e,function(t,u,l,c,f,d){function h(t){var e=C(u);ao(t,{index:e,src:_,frame:Mo[e]})}function m(){y.remove(),o.Fotorama.cache[_]="error",l.html&&"stage"===e||!T||T===_?(!_||l.html||g?"stage"===e&&(c.trigger("f:load").removeClass(tn+" "+Ze).addClass(en),h("load"),re()):(c.trigger("f:error").removeClass(tn).addClass(Ze),h("error")),d.state="error",!(So>1&&Mo[u]===l)||l.html||l.deleted||l.video||g||(l.deleted=!0,ci.splice(u,1))):(l[x]=_=T,Re([u],e,n,r,a,!0))}function p(){o.Fotorama.measures[_]=b.measures=o.Fotorama.measures[_]||{width:w.width,height:w.height,ratio:w.width/w.height},re(b.measures.width,b.measures.height,b.measures.ratio,u),y.off("load error").addClass(an+(g?" "+sn:"")).prependTo(c),q(y,(o.isFunction(n)?n():n)||Ii,r||l.fit||i.fit,a||l.position||i.position),o.Fotorama.cache[_]=d.state="loaded",setTimeout(function(){c.trigger("f:load").removeClass(tn+" "+Ze).addClass(en+" "+(g?nn:on)),"stage"===e?h("load"):(l.thumbratio===Zn||!l.thumbratio&&i.thumbratio===Zn)&&(l.thumbratio=b.measures.ratio,Co())},0)}function v(){var t=10;N(function(){return!si||!t--&&!In},function(){p()})}if(c){var g=ci.fullScreen&&l.full&&l.full!==l.img&&!d.$full&&"stage"===e;if(!d.$img||s||g){var w=new Image,y=o(w),b=y.data();d[g?"$full":"$img"]=y;var x="stage"===e?g?"full":"img":"thumb",_=l[x],T=g?null:l["stage"===e?"thumb":"img"];if("navThumb"===e&&(c=d.$wrap),!_)return void m();o.Fotorama.cache[_]?!function k(){"error"===o.Fotorama.cache[_]?m():"loaded"===o.Fotorama.cache[_]?setTimeout(v,0):setTimeout(k,100)}():(o.Fotorama.cache[_]="*",y.on("load",v).on("error",m)),d.state="",w.src=_}}})}function We(t){zi.append(Eo.spin().el).appendTo(t)}function He(){zi.detach(),Eo&&Eo.stop()}function Ke(){var t=jo[Yn];t&&!t.data().state&&(We(t),t.on("f:load f:error",function(){t.off("f:load f:error"),He()}))}function rn(t){Q(t,bo),U(t,function(){setTimeout(function(){W(Mi)},0),Kn({time:Uo,guessIndex:o(this).data().eq,minMax:Wi})})}function dn(t,e){ne(t,e,function(t,n,i,r,a,s){if(!r){r=i[a]=wi[a].clone(),s=r.data(),s.data=i;var u=r[0];"stage"===e?(i.html&&o('<div class="'+fn+'"></div>').append(i._html?o(i.html).removeAttr("id").html(i._html):i.html).appendTo(r),i.caption&&o(I(pn,I(vn,i.caption))).appendTo(r),i.video&&r.addClass(ke).append($i.clone()),U(u,function(){setTimeout(function(){W(yi)},0),go({index:s.eq,user:!0})}),xi=xi.add(r)):"navDot"===e?(rn(u),Fi=Fi.add(r)):"navThumb"===e&&(rn(u),s.$wrap=r.children(":first"),Ei=Ei.add(r),i.video&&s.$wrap.append($i.clone()))}})}function yn(t,e,n,o){return t&&t.length&&q(t,e,n,o)}function bn(t){ne(t,"stage",function(t,e,n,r,a,s){if(r){var u=C(e),l=n.fit||i.fit,c=n.position||i.position;s.eq=u,Vi[Yn][u]=r.css(o.extend({left:Bo?0:g(e,Ii.w,i.margin,$o)},Bo&&f(0))),j(r[0])&&(r.appendTo(bi),mo(n.$video)),yn(s.$img,Ii,l,c),yn(s.$full,Ii,l,c)}})}function xn(t,e){if("thumbs"===Ro&&!isNaN(t)){var n=-t,r=-t+Ii.nw;Ei.each(function(){var t=o(this),a=t.data(),s=a.eq,u=function(){return{h:Qo,w:a.w}},l=u(),c=Mo[s]||{},f=c.thumbfit||i.thumbfit,d=c.thumbposition||i.thumbposition;l.w=a.w,a.l+a.w<n||a.l>r||yn(a.$img,l,f,d)||e&&Re([s],"navThumb",u,f,d)})}}function Cn(t,e,n){if(!Cn[n]){var r="nav"===n&&Wo,a=0;e.append(t.filter(function(){for(var t,e=o(this),n=e.data(),i=0,r=Mo.length;r>i;i++)if(n.data===Mo[i]){t=!0,n.eq=i;break}return t||e.remove()&&!1}).sort(function(t,e){return o(t).data().eq-o(e).data().eq}).each(function(){if(r){var t=o(this),e=t.data(),n=Math.round(Qo*e.data.thumbratio)||Xo;e.l=a,e.w=n,t.css({width:n}),a+=n+i.thumbmargin}})),Cn[n]=!0}}function Tn(t){return t-Bi>Ii.w/3}function kn(t){return!(Do||Li+t&&Li-So+t||Po)}function $n(){var t=kn(0),e=kn(1);_i.toggleClass(Pe,t).attr(X(t)),Ci.toggleClass(Pe,e).attr(X(e))}function qn(){Ri.ok&&(Ri.prevent={"<":kn(0),">":kn(1)})}function On(t){var e,n,o=t.data();return Wo?(e=o.l,n=o.w):(e=t.position().left,n=t.width()),{c:e+n/2,min:-e+10*i.thumbmargin,max:-e+Ii.w-n-10*i.thumbmargin}}function Rn(t){var e=jo[li].data();Z(Pi,{time:1.2*t,pos:e.l,width:e.w-2*i.thumbborderwidth})}function Kn(t){var e=Mo[t.guessIndex][li];if(e){var n=Wi.min!==Wi.max,o=t.minMax||n&&On(jo[li]),i=n&&(t.keep&&Kn.l?Kn.l:s((t.coo||Ii.nw/2)-On(e).c,o.min,o.max)),r=n&&s(i,Wi.min,Wi.max),a=1.1*t.time;Z(Si,{time:a,pos:r||0,onEnd:function(){xn(r,!0)}}),ho(Mi,z(r,Wi.min,Wi.max)),Kn.l=i}}function Bn(){to(li),Ki[li].push(jo[li].addClass(Qe))}function to(t){for(var e=Ki[t];e.length;)e.shift().removeClass(Qe)}function no(t){var e=Vi[t];o.each(No,function(t,n){delete e[C(n)]}),o.each(e,function(t,n){delete e[t],n.detach()})}function oo(t){$o=qo=Li;var e=jo[Yn];e&&(to(Yn),Ki[Yn].push(e.addClass(Qe)),t||ci.show.onEnd(!0),x(bi,0,!0),no(Yn),bn(No),J(),ee())}function ro(t,e){t&&o.each(e,function(e,n){n&&o.extend(n,{width:t.width||n.width,height:t.height,minwidth:t.minwidth,maxwidth:t.maxwidth,minheight:t.minheight,maxheight:t.maxheight,ratio:K(t.ratio)})})}function ao(e,n){t.trigger(ue+":"+e,[ci,n])}function so(){clearTimeout(uo.t),si=1,i.stopautoplayontouch?ci.stopAutoplay():ii=!0}function uo(){si&&(i.stopautoplayontouch||(lo(),co()),uo.t=setTimeout(function(){si=0},Hn+Wn))}function lo(){ii=!(!Po&&!ri)}function co(){if(clearTimeout(co.t),N.stop(co.w),!i.autoplay||ii)return void(ci.autoplay&&(ci.autoplay=!1,ao("stopautoplay")));ci.autoplay||(ci.autoplay=!0,ao("startautoplay"));var t=Li,e=jo[Yn].data();co.w=N(function(){return e.state||t!==Li},function(){co.t=setTimeout(function(){if(!ii&&t===Li){var e=Oo,n=Mo[e][Yn].data();co.w=N(function(){return n.state||e!==Oo},function(){ii||e!==Oo||ci.show(Do?G(!Jo):Oo)})}},i.autoplay)})}function fo(){ci.fullScreen&&(ci.fullScreen=!1,Ln&&_n.cancel(hi),Pn.removeClass(le),En.removeClass(le),t.removeClass(Ge).insertAfter(gi),Ii=o.extend({},ai),mo(Po,!0,!0),yo("x",!1),ci.resize(),Re(No,"stage"),W(jn,ni,ei),ao("fullscreenexit"))}function ho(t,e){Go&&(t.removeClass(Be+" "+Xe),e&&!Po&&t.addClass(e.replace(/^|\s/g," "+Ve+"--")))}function mo(t,e,n){e&&(wi.removeClass(he),Po=!1,m()),t&&t!==Po&&(t.remove(),ao("unloadvideo")),n&&(lo(),co())}function po(t){wi.toggleClass(ve,t)}function vo(t){if(!Di.flow){var e=t?t.pageX:vo.x,n=e&&!kn(Tn(e))&&i.click;vo.p!==n&&yi.toggleClass(Fe,n)&&(vo.p=n,vo.x=e)}}function go(t){clearTimeout(go.t),i.clicktransition&&i.clicktransition!==i.transition?setTimeout(function(){var e=i.transition;ci.setOptions({transition:i.clicktransition}),Yo=e,go.t=setTimeout(function(){ci.show(t)},10)},0):ci.show(t)}function wo(t,e){var n=t.target,r=o(n);r.hasClass(hn)?ci.playVideo():n===Ni?ci.toggleFullScreen():Po?n===Ai&&mo(Po,!0,!0):e?po():i.click&&go({index:t.shiftKey||G(Tn(t._x)),slow:t.altKey,user:!0})}function yo(t,e){Di[t]=Wi[t]=e}function bo(t){var e=o(this).data().eq;go({index:e,slow:t.altKey,user:!0,coo:t._x-Mi.offset().left})}function xo(t){go({index:Ti.index(this)?">":"<",slow:t.altKey,user:!0})}function _o(t){U(t,function(){setTimeout(function(){W(yi)},0),po(!1)})}function Co(){if(d(),b(),!Co.i){Co.i=!0;var t=i.startindex;(t||i.hash&&n.hash)&&(Io=L(t||n.hash.replace(/^#/,""),Mo,0===ci.index||t,t)),Li=$o=qo=Ao=Io=k(Io)||0}if(So){if(To())return;Po&&mo(Po,!0),No=[],no(Yn),Co.ok=!0,ci.show({index:Li,time:0}),ci.resize()}else ci.destroy()}function To(){return!To.f===Jo?(To.f=Jo,Li=So-1-Li,ci.reverse(),!0):void 0}function ko(){ko.ok||(ko.ok=!0,ao("ready"))}En=o("html"),Pn=o("body");var Mo,So,Fo,Eo,Po,jo,No,$o,qo,Ao,zo,Lo,Oo,Io,Do,Ro,Wo,Ho,Ko,Vo,Bo,Xo,Qo,Uo,Yo,Go,Jo,Zo,ti,ei,ni,oi,ii,ri,ai,si,ui,li,ci=this,fi=o.now(),di=ue+fi,hi=t[0],mi=1,pi=t.data(),vi=o("<style></style>"),gi=o(I(Ye)),wi=o(I(ce)),yi=o(I(Ce)).appendTo(wi),bi=(yi[0],o(I(Me)).appendTo(yi)),xi=o(),_i=o(I(Ee+" "+je+wn)),Ci=o(I(Ee+" "+Ne+wn)),Ti=_i.add(Ci).appendTo(yi),ki=o(I(qe)),Mi=o(I($e)).appendTo(ki),Si=o(I(Ae)).appendTo(Mi),Fi=o(),Ei=o(),Pi=(bi.data(),Si.data(),o(I(cn)).appendTo(Si)),ji=o(I(Je+wn)),Ni=ji[0],$i=o(I(hn)),qi=o(I(mn)).appendTo(yi),Ai=qi[0],zi=o(I(gn)),Li=!1,Oi={},Ii={},Di={},Ri={},Wi={},Hi={},Ki={},Vi={},Bi=0,Xi=[];
wi[Yn]=o(I(Te)),wi[Jn]=o(I(Oe+" "+De+wn,I(ln))),wi[Gn]=o(I(Oe+" "+Ie+wn,I(un))),Ki[Yn]=[],Ki[Jn]=[],Ki[Gn]=[],Vi[Yn]={},wi.addClass(An?de:fe).toggleClass(ve,!i.controlsonstart),pi.fotorama=this,ci.startAutoplay=function(t){return ci.autoplay?this:(ii=ri=!1,y(t||i.autoplay),co(),this)},ci.stopAutoplay=function(){return ci.autoplay&&(ii=ri=!0,co()),this},ci.show=function(t){var e;"object"!=typeof t?(e=t,t={}):e=t.index,e=">"===e?qo+1:"<"===e?qo-1:"<<"===e?0:">>"===e?So-1:e,e=isNaN(e)?L(e,Mo,!0):e,e="undefined"==typeof e?Li||0:e,ci.activeIndex=Li=k(e),zo=P(Li),Lo=B(Li),Oo=C(Li+(Jo?-1:1)),No=[Li,zo,Lo],qo=Do?e:Li;var n=Math.abs(Ao-qo),o=_(t.time,function(){return Math.min(Uo*(1+(n-1)/12),2*Uo)}),r=t.overPos;t.slow&&(o*=10);var a=jo;ci.activeFrame=jo=Mo[Li];var u=a===jo&&!t.user;mo(Po,jo.i!==Mo[C($o)].i),dn(No,"stage"),bn(In?[qo]:[qo,P(qo),B(qo)]),yo("go",!0),u||ao("show",{user:t.user,time:o}),ii=!0;var l=ci.show.onEnd=function(e){if(!l.ok){if(l.ok=!0,e||oo(!0),u||ao("showend",{user:t.user}),!e&&Yo&&Yo!==i.transition)return ci.setOptions({transition:Yo}),void(Yo=!1);Ke(),Re(No,"stage"),yo("go",!1),qn(),vo(),lo(),co()}};if(Bo){var c=jo[Yn],f=Li!==Ao?Mo[Ao][Yn]:null;te(c,f,xi,{time:o,method:i.transition,onEnd:l},Xi)}else Z(bi,{pos:-g(qo,Ii.w,i.margin,$o),overPos:r,time:o,onEnd:l});if($n(),Ro){Bn();var d=T(Li+s(qo-Ao,-1,1));Kn({time:o,coo:d!==Li&&t.coo,guessIndex:"undefined"!=typeof t.coo?d:Li,keep:u}),Wo&&Rn(o)}return oi="undefined"!=typeof Ao&&Ao!==Li,Ao=Li,i.hash&&oi&&!ci.eq&&$(jo.id||Li+1),this},ci.requestFullScreen=function(){return Ko&&!ci.fullScreen&&(ei=jn.scrollTop(),ni=jn.scrollLeft(),W(jn),yo("x",!0),ai=o.extend({},Ii),t.addClass(Ge).appendTo(Pn.addClass(le)),En.addClass(le),mo(Po,!0,!0),ci.fullScreen=!0,Vo&&_n.request(hi),ci.resize(),Re(No,"stage"),Ke(),ao("fullscreenenter")),this},ci.cancelFullScreen=function(){return Vo&&_n.is()?_n.cancel(e):fo(),this},ci.toggleFullScreen=function(){return ci[(ci.fullScreen?"cancel":"request")+"FullScreen"]()},V(e,_n.event,function(){!Mo||_n.is()||Po||fo()}),ci.resize=function(t){if(!Mo)return this;var e=arguments[1]||0,n=arguments[2];ro(ci.fullScreen?{width:"100%",maxwidth:null,minwidth:null,height:"100%",maxheight:null,minheight:null}:H(t),[Ii,n||ci.fullScreen||i]);var o=Ii.width,r=Ii.height,a=Ii.ratio,u=jn.height()-(Ro?Mi.height():0);return v(o)&&(wi.addClass(be).css({width:o,minWidth:Ii.minwidth||0,maxWidth:Ii.maxwidth||eo}),o=Ii.W=Ii.w=wi.width(),Ii.nw=Ro&&p(i.navwidth,o)||o,i.glimpse&&(Ii.w-=Math.round(2*(p(i.glimpse,o)||0))),bi.css({width:Ii.w,marginLeft:(Ii.W-Ii.w)/2}),r=p(r,u),r=r||a&&o/a,r&&(o=Math.round(o),r=Ii.h=Math.round(s(r,p(Ii.minheight,u),p(Ii.maxheight,u))),yi.stop().animate({width:o,height:r},e,function(){wi.removeClass(be)}),oo(),Ro&&(Mi.stop().animate({width:Ii.nw},e),Kn({guessIndex:Li,time:e,keep:!0}),Wo&&Cn.nav&&Rn(e)),ti=n||!0,ko())),Bi=yi.offset().left,this},ci.setOptions=function(t){return o.extend(i,t),Co(),this},ci.shuffle=function(){return Mo&&D(Mo)&&Co(),this},ci.destroy=function(){return ci.cancelFullScreen(),ci.stopAutoplay(),Mo=ci.data=null,l(),No=[],no(Yn),Co.ok=!1,this},ci.playVideo=function(){var t=jo,e=t.video,n=Li;return"object"==typeof e&&t.videoReady&&(Vo&&ci.fullScreen&&ci.cancelFullScreen(),N(function(){return!_n.is()||n!==Li},function(){n===Li&&(t.$video=t.$video||o(o.Fotorama.jst.video(e)),t.$video.appendTo(t[Yn]),wi.addClass(he),Po=t.$video,m(),Ti.blur(),ji.blur(),ao("loadvideo"))})),this},ci.stopVideo=function(){return mo(Po,!0,!0),this},yi.on("mousemove",vo),Di=oe(bi,{onStart:so,onMove:function(t,e){ho(yi,e.edge)},onTouchEnd:uo,onEnd:function(t){ho(yi);var e=(Dn&&!ui||t.touch)&&i.arrows&&"always"!==i.arrows;if(t.moved||e&&t.pos!==t.newPos&&!t.control){var n=w(t.newPos,Ii.w,i.margin,$o);ci.show({index:n,time:Bo?Uo:t.time,overPos:t.overPos,user:!0})}else t.aborted||t.control||wo(t.startEvent,e)},timeLow:1,timeHigh:1,friction:2,select:"."+Ue+", ."+Ue+" *",$wrap:yi}),Wi=oe(Si,{onStart:so,onMove:function(t,e){ho(Mi,e.edge)},onTouchEnd:uo,onEnd:function(t){function e(){Kn.l=t.newPos,lo(),co(),xn(t.newPos,!0)}if(t.moved)t.pos!==t.newPos?(ii=!0,Z(Si,{time:t.time,pos:t.newPos,overPos:t.overPos,onEnd:e}),xn(t.newPos),Go&&ho(Mi,z(t.newPos,Wi.min,Wi.max))):e();else{var n=t.$target.closest("."+Oe,Si)[0];n&&bo.call(n,t.startEvent)}},timeLow:.5,timeHigh:2,friction:5,$wrap:Mi}),Ri=ie(yi,{shift:!0,onEnd:function(t,e){so(),uo(),ci.show({index:e,slow:t.altKey})}}),Hi=ie(Mi,{onEnd:function(t,e){so(),uo();var n=x(Si)+.25*e;Si.css(c(s(n,Wi.min,Wi.max))),Go&&ho(Mi,z(n,Wi.min,Wi.max)),Hi.prevent={"<":n>=Wi.max,">":n<=Wi.min},clearTimeout(Hi.t),Hi.t=setTimeout(function(){Kn.l=n,xn(n,!0)},Wn),xn(n)}}),wi.hover(function(){setTimeout(function(){si||po(!(ui=!0))},0)},function(){ui&&po(!(ui=!1))}),O(Ti,function(t){Y(t),xo.call(this,t)},{onStart:function(){so(),Di.control=!0},onTouchEnd:uo}),Ti.each(function(){Q(this,function(t){xo.call(this,t)}),_o(this)}),Q(Ni,ci.toggleFullScreen),_o(Ni),o.each("load push pop shift unshift reverse sort splice".split(" "),function(t,e){ci[e]=function(){return Mo=Mo||[],"load"!==e?Array.prototype[e].apply(Mo,arguments):arguments[0]&&"object"==typeof arguments[0]&&arguments[0].length&&(Mo=R(arguments[0])),Co(),ci}}),Co()},o.fn.fotorama=function(e){return this.each(function(){var n=this,i=o(this),r=i.data(),a=r.fotorama;a?a.setOptions(e,!0):N(function(){return!P(n)},function(){r.urtext=i.html(),new o.Fotorama(i,o.extend({},oo,t.fotoramaDefaults,e,r))})})},o.Fotorama.instances=[],o.Fotorama.cache={},o.Fotorama.measures={},o=o||{},o.Fotorama=o.Fotorama||{},o.Fotorama.jst=o.Fotorama.jst||{},o.Fotorama.jst.style=function(t){{var e,n="";bn.escape}return n+=".fotorama"+(null==(e=t.s)?"":e)+" .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"+(null==(e=t.m)?"":e)+"px;\nheight:"+(null==(e=t.h)?"":e)+"px}\n.fotorama"+(null==(e=t.s)?"":e)+" .fotorama__thumb-border{\nheight:"+(null==(e=t.h-t.b*(t.q?0:2))?"":e)+"px;\nborder-width:"+(null==(e=t.b)?"":e)+"px;\nmargin-top:"+(null==(e=t.m)?"":e)+"px}"},o.Fotorama.jst.video=function(t){function e(){n+=o.call(arguments,"")}var n="",o=(bn.escape,Array.prototype.join);return n+='<div class="fotorama__video"><iframe src="',e(("youtube"==t.type?t.p+"youtube.com/embed/"+t.id+"?autoplay=1":"vimeo"==t.type?t.p+"player.vimeo.com/video/"+t.id+"?autoplay=1&badge=0":t.id)+(t.s&&"custom"!=t.type?"&"+t.s:"")),n+='" frameborder="0" allowfullscreen></iframe></div>\n'},o(function(){o("."+ue+':not([data-auto="false"])').fotorama()})}(window,document,location,"undefined"!=typeof jQuery&&jQuery);

/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=bee525285c94092e0572)
 * Config saved to config.json and https://gist.github.com/bee525285c94092e0572
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(t){"use strict";function e(e,o){return this.each(function(){var s=t(this),n=s.data("bs.modal"),r=t.extend({},i.DEFAULTS,s.data(),"object"==typeof e&&e);n||s.data("bs.modal",n=new i(this,r)),"string"==typeof e?n[e](o):r.show&&n.show(o)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.3.2",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var o=this,s=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(s),this.isShown||s.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var s=t.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),s&&o.$element[0].offsetWidth,o.$element.addClass("in").attr("aria-hidden",!1),o.enforceFocus();var n=t.Event("shown.bs.modal",{relatedTarget:e});s?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(n)}).emulateTransitionEnd(i.TRANSITION_DURATION):o.$element.trigger("focus").trigger(n)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var o=this,s=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var n=t.support.transition&&s;if(this.$backdrop=t('<div class="modal-backdrop '+s+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),n&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;n?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var r=function(){o.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):r()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var o=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var o=t(this),s=o.attr("href"),n=t(o.attr("data-target")||s&&s.replace(/.*(?=#[^\s]+$)/,"")),r=n.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(s)&&s},n.data(),o.data());o.is("a")&&i.preventDefault(),n.one("show.bs.modal",function(t){t.isDefaultPrevented()||n.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),e.call(n,r,this)})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one("bsTransitionEnd",function(){i=!0});var s=function(){i||t(o).trigger(t.support.transition.end)};return setTimeout(s,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);

/**
 * zoom.js - It's the best way to zoom an image
 * @version v0.0.2
 * @link https://github.com/fat/zoom.js
 * @license MIT
 */
+function(a){"use strict";function b(){this._activeZoom=this._initialScrollPosition=this._initialTouchPosition=this._touchMoveListener=null,this._$document=a(document),this._$window=a(window),this._$body=a(document.body),this._boundClick=a.proxy(this._clickHandler,this)}function c(b){this._fullHeight=this._fullWidth=this._overlay=this._targetImageWrap=null,this._targetImage=b,this._$body=a(document.body)}b.prototype.listen=function(){this._$body.on("click",".js-imageZoom",a.proxy(this._zoom,this))},b.prototype._zoom=function(b){var d=b.target;if(d&&"IMG"==d.tagName&&!this._$body.hasClass("zoom-overlay-open"))return b.metaKey||b.ctrlKey?window.open(b.target.getAttribute("data-original")||b.target.src,"_blank"):void(d.width>=a(window).width()-c.OFFSET||(this._activeZoomClose(!0),this._activeZoom=new c(d),this._activeZoom.zoomImage(),this._$window.on("scroll.zoom",a.proxy(this._scrollHandler,this)),this._$document.on("keyup.zoom",a.proxy(this._keyHandler,this)),this._$document.on("touchstart.zoom",a.proxy(this._touchStart,this)),document.addEventListener?document.addEventListener("click",this._boundClick,!0):document.attachEvent("onclick",this._boundClick,!0),"bubbles"in b?b.bubbles&&b.stopPropagation():b.cancelBubble=!0))},b.prototype._activeZoomClose=function(a){this._activeZoom&&(a?this._activeZoom.dispose():this._activeZoom.close(),this._$window.off(".zoom"),this._$document.off(".zoom"),document.removeEventListener("click",this._boundClick,!0),this._activeZoom=null)},b.prototype._scrollHandler=function(){null===this._initialScrollPosition&&(this._initialScrollPosition=a(window).scrollTop());var c=this._initialScrollPosition-a(window).scrollTop();Math.abs(c)>=40&&this._activeZoomClose()},b.prototype._keyHandler=function(a){27==a.keyCode&&this._activeZoomClose()},b.prototype._clickHandler=function(a){a.preventDefault?a.preventDefault():event.returnValue=!1,"bubbles"in a?a.bubbles&&a.stopPropagation():a.cancelBubble=!0,this._activeZoomClose()},b.prototype._touchStart=function(b){this._initialTouchPosition=b.touches[0].pageY,a(b.target).on("touchmove.zoom",a.proxy(this._touchMove,this))},b.prototype._touchMove=function(b){Math.abs(b.touches[0].pageY-this._initialTouchPosition)>10&&(this._activeZoomClose(),a(b.target).off("touchmove.zoom"))},c.OFFSET=80,c._MAX_WIDTH=2560,c._MAX_HEIGHT=4096,c.prototype.zoomImage=function(){var b=document.createElement("img");b.onload=a.proxy(function(){this._fullHeight=Number(b.height),this._fullWidth=Number(b.width),this._zoomOriginal()},this),b.src=this._targetImage.src},c.prototype._zoomOriginal=function(){this._targetImageWrap=document.createElement("div"),this._targetImageWrap.className="zoom-img-wrap",this._targetImage.parentNode.insertBefore(this._targetImageWrap,this._targetImage),this._targetImageWrap.appendChild(this._targetImage),a(this._targetImage).addClass("zoom-img").attr("data-action","zoom-out"),this._overlay=document.createElement("div"),this._overlay.className="zoom-overlay",document.body.appendChild(this._overlay),this._calculateZoom(),this._triggerAnimation()},c.prototype._calculateZoom=function(){this._targetImage.offsetWidth;var b=this._fullWidth,d=this._fullHeight,f=(a(window).scrollTop(),b/this._targetImage.width),g=a(window).height()-c.OFFSET,h=a(window).width()-c.OFFSET,i=b/d,j=h/g;this._imgScaleFactor=b<h&&d<g?f:i<j?g/d*f:h/b*f},c.prototype._triggerAnimation=function(){this._targetImage.offsetWidth;var b=a(this._targetImage).offset(),c=a(window).scrollTop(),d=c+a(window).height()/2,e=a(window).width()/2,f=b.top+this._targetImage.height/2,g=b.left+this._targetImage.width/2;this._translateY=d-f,this._translateX=e-g;var h="scale("+this._imgScaleFactor+")",i="translate("+this._translateX+"px, "+this._translateY+"px)";a.support.transition&&(i+=" translateZ(0)"),a(this._targetImage).css({"-webkit-transform":h,"-ms-transform":h,transform:h}),a(this._targetImageWrap).css({"-webkit-transform":i,"-ms-transform":i,transform:i}),this._$body.addClass("zoom-overlay-open")},c.prototype.close=function(){return this._$body.removeClass("zoom-overlay-open").addClass("zoom-overlay-transitioning"),a(this._targetImage).css({"-webkit-transform":"","-ms-transform":"",transform:""}),a(this._targetImageWrap).css({"-webkit-transform":"","-ms-transform":"",transform:""}),a.support.transition?void a(this._targetImage).one(a.support.transition.end,a.proxy(this.dispose,this)).emulateTransitionEnd(300):this.dispose()},c.prototype.dispose=function(){this._targetImageWrap&&this._targetImageWrap.parentNode&&(a(this._targetImage).removeClass("zoom-img").attr("data-action","zoom"),this._targetImageWrap.parentNode.replaceChild(this._targetImage,this._targetImageWrap),this._overlay.parentNode.removeChild(this._overlay),this._$body.removeClass("zoom-overlay-transitioning"))},a(function(){(new b).listen()})}(jQuery);

/**
 * Theme scripts
 */
(function( mdBone, $, undefined ) {

"use strict";

	/* ============================================================================
     * minimalDog utility
     * ==========================================================================*/

    var Util = {

        getBackendVar: function(variable_name) {
            if (typeof window['mdBoneVar'] === 'undefined') {
                return '';
            }
            if (arguments.length == 1) {
            	return window['mdBoneVar'][variable_name];
		    } else {
		        var b = arguments[1]; // take second argument
            	return window['mdBoneVar'][variable_name][b];
		    }
        },

        moveY: function (elm, value) {
            var translate = 'translate3d(0px,' + value + 'px, 0)';
            elm.style['-webkit-transform'] = translate;
            elm.style['-moz-transform'] = translate;
            elm.style['-ms-transform'] = translate;
            elm.style['-o-transform'] = translate;
            elm.style.transform = translate;
        },

    };
    

    /* ============================================================================
     * minimalDog event
     * ==========================================================================*/

    var EventsListener = {

        //the events - we have timers that look at the variables and fire the event if the flag is true
        scroll_event_slow_run: false,
        scroll_event_medium_run: false,

        resize_event_slow_run: false, //when true, fire up the resize event
        resize_event_medium_run: false,


        scroll_window_scrollTop: 0, //used to store the scrollTop

        window_innerHeight: window.innerHeight, // used to store the window height
        window_innerWidth: window.innerWidth, // used to store the window width

        init: function init() {

        	var smartAffixOn = Util.getBackendVar('stickyHeader', 'toggle'); // Check if smartAffix is enabled

            $(window).scroll(function() {
                EventsListener.scroll_event_slow_run = true;
                EventsListener.scroll_event_medium_run = true;

                
                
            });


            $(window).resize(function() {
                EventsListener.resize_event_slow_run = true;
                EventsListener.resize_event_medium_run = true;

                
            });



            //medium resolution timer for rest?
            setInterval(function() {
                //scroll event
                if (EventsListener.scroll_event_medium_run) {
                    EventsListener.scroll_event_medium_run = false;

                    // Functions to run
                    
                    //read the scroll top
	                EventsListener.scroll_window_scrollTop = $(window).scrollTop();
	                
	                /*  ----------------------------------------------------------------------------
	                 Run affix menu event
	                 */
	             	if (smartAffixOn == '1') {
	                	smartAffix.eventScroll(EventsListener.scroll_window_scrollTop); //main menu affix 	
	                }
                    

                }

                //resize event
                if (EventsListener.resize_event_medium_run) {
                    EventsListener.resize_event_medium_run = false;

                    if (smartAffixOn == '1') {
	                	smartAffix.compute(); //main menu affix 	
	                }

                }
            }, 10);



            //low resolution timer for rest?
            setInterval(function() {
                //scroll event
                if (EventsListener.scroll_event_slow_run) {
                    EventsListener.scroll_event_slow_run = false;

                    // Functions to run
                }

                //resize event
                if (EventsListener.resize_event_slow_run) {
                    EventsListener.resize_event_slow_run = false;
    
                    Detect.run_is_phone_screen();
                }
            }, 500);

        }
    };

    EventsListener.init();


    /* ============================================================================
     * minimalDog browser detection
     * ==========================================================================*/

    var Detect = new function () {

        //constructor
        this.is_ie8 = false;
        this.is_ie9 = false;
        this.is_ie10 = false;
        this.is_ie11 = false;
        this.is_ie = false;
        this.is_safari = false;
        this.is_chrome = false;
        this.is_ipad = false;
        this.is_touch_device = false;
        this.has_history = false;
        this.is_phone_screen = false;
        this.is_ios = false;
        this.is_android = false;
        this.is_osx = false;
        this.is_firefox = false;

        // is touch device ?
        this.is_touch_device = !!('ontouchstart' in window);
        this.is_mobile_device = false;

        this.html_jquery_obj = $('html');

        // detect ie8
        if (this.html_jquery_obj.is('.ie8')) {
            this.is_ie8 = true;
            this.is_ie = true;
        }

        // detect ie9
        if (this.html_jquery_obj.is('.ie9')) {
            this.is_ie9 = true;
            this.is_ie = true;
        }

        // detect ie10 - also adds the ie10 class //it also detects windows mobile IE as IE10
        if(navigator.userAgent.indexOf("MSIE 10.0") > -1){
            this.html_jquery_obj.addClass("ie10");
            this.is_ie10 = true;
            this.is_ie = true;
            //alert('10');
        }

        //ie 11 check - also adds the ie11 class - it may detect ie on windows mobile
        if(!!navigator.userAgent.match(/Trident.*rv\:11\./)){
            this.html_jquery_obj.addClass("ie11");
            this.is_ie11 = true;
            //this.is_ie = true; //do not flag ie11 as is_ie
            //alert('11');
        }


        //do we have html5 history support?
        if (window.history && window.history.pushState) {
            this.has_history = true;
        }

        //check for safari
        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
            this.is_safari = true;
        }

        //chrome and chrome-ium check
        this.is_chrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase());

        this.is_ipad = navigator.userAgent.match(/iPad/i) != null;



        if (/(iPad|iPhone|iPod)/g.test( navigator.userAgent )) {
            this.html_jquery_obj.addClass('md_detect_is_ios'); //add class for ios
            this.is_ios = true;
        } else {
            this.is_ios = false;
        }



        //detect if we run on a mobile device - ipad included - used by the modal / scroll to @see scroll_into_view
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            this.is_mobile_device = true;
        }

        /**
         * function to check the phone screen
         * @see EventsListener
         * The $ windows width is not reliable cross browser!
         */
        this.run_is_phone_screen = function () {
            if ((($(window).width() < 768) || ($(window).height() < 640)) && (this.is_ipad === false)) {
                this.is_phone_screen = true;

            } else {
                this.is_phone_screen = false;
            }

            //console.log(this.is_phone_screen + ' ' + $(window).width() + ' ' + $(window).height());
        };



        this.run_is_phone_screen();


        //test for android
        var user_agent = navigator.userAgent.toLowerCase();
        if(user_agent.indexOf("android") > -1) {
            this.is_android = true;
            // we use this class to fix android problems
            this.html_jquery_obj.addClass('md_detect_is_android');
        }


        if (navigator.userAgent.indexOf('Mac OS X') != -1) {
            this.is_osx = true;
        }

        if (navigator.userAgent.indexOf('Firefox') != -1) {
            this.is_firefox = true;
        }

    };

    /* ============================================================================
     * Smart sticky menu
     * ==========================================================================*/

	var smartAffix = {
		//settings, obtained from ext
        staticMenuSelector: '', //the affix menu (this element will get the mdAffixed)
        fixedMenuSelector: '', //the menu wrapper / placeholder
        menuHeight: 0, // main menu height
        menuOffsetTop: 0, //how much the menu is moved from the original position when it's affixed
        hasAdminBar: false,
        adminBarOffset: 0,
        isAffixed: false, //the current state of the menu, true if the menu is affix
        isShown: false,
        isFromInitial: false,
        windowScrollTop: 0, 
        lastWindowScrollTop: 0, //last scrollTop position, used to calculate the scroll direction
        offCheckpoint: 0, // distance from top where fixed header will be hidden
        onCheckpoint: 0, // distance from top where fixed header can show up

		init : function init (options) {

            //read the settings
            smartAffix.fixedMenuSelector = options.fixedMenuSelector;
            smartAffix.staticMenuSelector = options.staticMenuSelector;
            smartAffix.hasAdminBar = options.hasAdminBar;

            // Check if selectors exist
            if( !$(smartAffix.fixedMenuSelector).length ) {
            	return;
            }

            // if admin bar is showing, calculate the offset
            if (smartAffix.hasAdminBar) {
            	var screenWidth = $(window).width();
	            if (screenWidth < 600) {
	            	smartAffix.adminBarOffset = 0;
	            } else if (screenWidth < 782) {
	            	smartAffix.adminBarOffset = 46;
	            } else {
	            	smartAffix.adminBarOffset = 32;
	            }
	            
            }
            
            // a computation before jquery.ready is necessary for firefox, where EventsListener.scroll comes before
            if (Detect.is_firefox) {
                smartAffix.compute();
            }

            $(document).ready(function() {
                //compute on semi dom ready
                smartAffix.compute();

            });

            //recompute when all the page + logos are loaded
            $(window).load(function() {
                smartAffix.compute();

                //recompute after 1 sec for retarded phones
                setTimeout(function(){
                    smartAffix.compute();
                }, 1000);

                // update state
        		smartAffix.updateState();
            });


        },// end init

        compute: function compute(){
        	// Set where from top fixed header starts showing up
        	smartAffix.offCheckpoint = $(smartAffix.staticMenuSelector).offset().top - smartAffix.adminBarOffset;
        	smartAffix.onCheckpoint = smartAffix.offCheckpoint + 400;

        	// Set menu top offset
        	smartAffix.windowScrollTop = $(window).scrollTop();
        	if (smartAffix.offCheckpoint < smartAffix.windowScrollTop) {
        		smartAffix.isAffixed = true;
        	}

        	// calculate admin bar offset
        	if (smartAffix.hasAdminBar) {
            	var screenWidth = $(window).width();
	            if (screenWidth < 600) {
	            	smartAffix.adminBarOffset = 0;
	            } else if (screenWidth < 782) {
	            	smartAffix.adminBarOffset = 46;
	            } else {
	            	smartAffix.adminBarOffset = 32;
	            }
	            
            }

        },

        updateState: function updateState(){

        	//update affixed state
        	if (smartAffix.isAffixed) {
        		$(smartAffix.fixedMenuSelector).addClass('mdAffixed');
        	} else {
        		$(smartAffix.fixedMenuSelector).removeClass('mdAffixed');
        	}

        	if (smartAffix.isShown) {
        		$(smartAffix.fixedMenuSelector).addClass('mdAffixed--shown');
        	} else {
        		$(smartAffix.fixedMenuSelector).removeClass('mdAffixed--shown');
        	}
        	
        },

        /**
         * called by md_events on scroll
         */

        eventScroll: function eventScroll(scrollTop) {

        	var scrollDirection = '';
            var scrollDelta = 0;

            // check the direction
            if (scrollTop != smartAffix.lastWindowScrollTop) { //compute direction only if we have different last scroll top

                // compute the direction of the scroll
                if (scrollTop > smartAffix.lastWindowScrollTop) {
                    scrollDirection = 'down';
                } else {
                    scrollDirection = 'up';
                }
                //calculate the scroll delta
                scrollDelta = Math.abs(scrollTop - smartAffix.lastWindowScrollTop);
                smartAffix.lastWindowScrollTop = scrollTop;

                // update affix state
            	if (smartAffix.offCheckpoint < scrollTop) {
	        		smartAffix.isAffixed = true;
	        	} else {
	        		smartAffix.isAffixed = false;
	        	}
	            
	        	
	        	// check affix state
	            if (smartAffix.isAffixed) {
	            	// We're in affixed state, let's do some check
		            if ((scrollDirection == 'down') && (scrollDelta > 10)) {
		            	if (smartAffix.isShown) {
		            	    smartAffix.isShown = false; // hide menu
		            	}
		            } else {
		            	if ((!smartAffix.isShown) && (scrollDelta > 10) && (smartAffix.onCheckpoint < scrollTop)) {
		            		smartAffix.isShown = true; // show menu
		            	}
		            }
	            } else {
	            	smartAffix.isShown = false;
	            }

	            smartAffix.updateState(); // update state
            }

            

        }, // end eventScroll function

	}

	var smartAffixOn = Util.getBackendVar('stickyHeader', 'toggle'); // Check if smartAffix is enabled
	if ( smartAffixOn == '1') {
		smartAffix.init({
	        fixedMenuSelector: '.js-fixedHeader',
	        staticMenuSelector: '.siteHeader-nav',
	        hasAdminBar: Util.getBackendVar('stickyHeader', 'hasAdminBar'),
	    });
	}

    /* ============================================================================
     * Single billboard layout parallax effect
     * ==========================================================================*/

    function BillboardParallax() {

    	if (Detect.is_ie || Detect.is_touch_device || Detect.is_phone_screen) { //disable on IE and mobile device
    		return;
    	}

    	if ($('.is-parallaxDisabled').length > 0) { // disable by option
    		return;
    	}

        var md_parallax_viewport = $('.postSingle--billboard-cover');
        var md_parallax_el = document.getElementById('md-billboard-info');

        var md_parallax_bg_el = document.getElementById('md-single-cover');

        if ((md_parallax_el == null) || (!md_parallax_bg_el == null)) {
            return;
        }

        // Calculate translate distance rate
        var on_checkpoint = $('.postSingle--billboard-cover').offset().top - $(window).height();
        if (on_checkpoint < 0) { on_checkpoint = 0; }
        var off_checkpoint = $('.postSingle--billboard-cover').offset().top + $('.postSingle--billboard-cover').height();
        var parallax_viewport_height = md_parallax_viewport.height();
        var bg_height = $(md_parallax_bg_el).height();
        var bg_offset = bg_height - parallax_viewport_height; // bg spare height compare to cover
        var distanceToUpperEdge = 1;
        // Distance to scroll down since cover is visible until window upper top edge meets cover upper top edge
        if ($(window).height() <= md_parallax_viewport.offset().top) {
            distanceToUpperEdge = $(window).height();
        } else {
            distanceToUpperEdge = md_parallax_viewport.offset().top;
        }
        var bg_translate_speed = bg_offset/distanceToUpperEdge;
        if (bg_translate_speed > 0.8) { bg_translate_speed = 0.8; }

        // Calculate opacity rate
        var on_checkpoint_text = $('#md-billboard-info').offset().top + 0.5*($('#md-billboard-info').height() - $(window).height());
        if (on_checkpoint_text < 0) { on_checkpoint_text = 0; }
        var off_checkpoint_text = $('#md-billboard-info').offset().top + $('#md-billboard-info').height();
        var text_opacity_rate = 0.6/(off_checkpoint_text - on_checkpoint_text);

        var scroll_from_top = '';
        var distance_from_bottom;

        $(window).on('resize',function(){
            // Calculate translate distance rate
            on_checkpoint = $('.postSingle--billboard-cover').offset().top - $(window).height();
            if (on_checkpoint < 0) { on_checkpoint = 0; }
            off_checkpoint = $('.postSingle--billboard-cover').offset().top + $('.postSingle--billboard-cover').height();
            parallax_viewport_height = md_parallax_viewport.height();
            bg_height = $(md_parallax_bg_el).height();
            bg_offset = bg_height - parallax_viewport_height; // bg spare height compare to cover
            distanceToUpperEdge = 1;
            // Distance to scroll down since cover is visible until window upper top edge meets cover upper top edge
            if ($(window).height() <= md_parallax_viewport.offset().top) {
                distanceToUpperEdge = $(window).height();
            } else {
                distanceToUpperEdge = md_parallax_viewport.offset().top;
            }
            bg_translate_speed = bg_offset/distanceToUpperEdge;
            if (bg_translate_speed > 0.6) { bg_translate_speed = 0.6; }

            // Calculate opacity rate
            on_checkpoint_text = $('#md-billboard-info').offset().top + 0.5*($('#md-billboard-info').height() - $(window).height());
            if (on_checkpoint_text < 0) { on_checkpoint_text = 0; }
            off_checkpoint_text = $('#md-billboard-info').offset().top + $('#md-billboard-info').height();
            text_opacity_rate = 0.6/(off_checkpoint_text - on_checkpoint_text);
        });

        //attach the animation tick on scroll
        $(window).scroll(function(){
            // with each scroll event request an animation frame (we have a polyfill for animation frame)
            // the requestAnimationFrame is called only once and after that we wait
            md_request_tick();
        });

        var md_animation_running = false; //if the tick is running, we set this to true

        function md_request_tick() {
            if (md_animation_running === false) {
                window.requestAnimationFrame(md_do_animation);
            }
            md_animation_running = true;
        }

        /**
         * the animation loop
         */
        function md_do_animation() {
            scroll_from_top = $(document).scrollTop();
            if ((scroll_from_top <= off_checkpoint) && (scroll_from_top >= on_checkpoint)) { //stop the animation after scroll from top
                var scroll_distance = scroll_from_top - on_checkpoint;    

                //move the bg
                var parallax_move = -Math.round(scroll_distance * bg_translate_speed);
                Util.moveY(md_parallax_bg_el,-parallax_move);

                // //move the title + cat
                // var text_translate_speed = bg_translate_speed * 0.5;
                // var text_parallax_move = -Math.round(scroll_distance * text_translate_speed);
                // Util.moveY(md_parallax_el,-text_parallax_move);

            }

            if ((scroll_from_top < off_checkpoint_text) && (scroll_from_top > on_checkpoint_text)) {
                var scroll_distance = scroll_from_top - on_checkpoint_text;
                var blur_value = 1 - (scroll_distance * text_opacity_rate);
                blur_value = Math.round(blur_value * 100) / 100;

                if (Detect.is_ie8 === true) {
                    blur_value = 1;
                }

                //opacity
                md_parallax_el.style.opacity = blur_value;

            } else if (scroll_from_top <= on_checkpoint_text) {
                //opacity
                md_parallax_el.style.opacity = 1;
            }

            md_animation_running = false;
        }

    }

    $(document).ready(function() {
        BillboardParallax();
    })

    /* ============================================================================
     * Gallery slider
     * ==========================================================================*/

    function md_gallery_slider( selector ){
        $(selector).fotorama();
    }

    /* ============================================================================
     * Masonry
     * ==========================================================================*/

    $( window ).load(function() {
    	if ( $.isFunction($.fn.masonry) ) { // check if masonry script is loaded
	    	var $masonryGrid = $('.js-masonry-grid');
			$masonryGrid.masonry({
			  	itemSelector: '.grid-item'
			});
		}
	});

    /* ============================================================================
     * AJAX load posts
     * ==========================================================================*/

    function md_ajaxLoadPosts(){

    	if (!$('.js-ajax-loadmore.is-active').length) {
    		return;
    	}

        // The number of current page.
        var pageNum = parseInt(Util.getBackendVar('ajaxloadpost', 'startPage'));
     
        // The maximum number of pages the current query can return.
        var max = parseInt(Util.getBackendVar('ajaxloadpost', 'maxPages'));

        var loadedPosts = '';
        var ajaxStatus = '';

        ajaxLoadPosts($('.js-ajax-loadmore.is-active'));

        $(document).on( 'click', '.js-ajax-loadmore.is-active', function() {
            appendResponse($(this));
            ajaxLoadPosts($(this));
        })

        function ajaxLoadPosts(loadBtn) {
            if(pageNum < max) {
            	// Counter for loaded posts
        		var loadedPostsCount = loadBtn.siblings('#mdContent').find('article').length;
                loadBtn.removeClass('is-active');

                var ajaxCall = $.ajax({
                    url: Util.getBackendVar('ajaxloadpost', 'ajaxurl'),
                    type: 'post',
                    data: {
                        action: 'ajax_load_post',
                        query_vars: Util.getBackendVar('ajaxloadpost', 'query_vars'),
                        page: pageNum + 1,
                        loadedPostsCount: loadedPostsCount,
                        currentRelURI: Util.getBackendVar('currentRelURI'),
                    }
                })

                ajaxCall.done(function( respond ) {
                    loadedPosts = $(respond);
                    ajaxStatus = 'success';
                });

                ajaxCall.fail(function() {
                    ajaxStatus = 'failed';
                    
                });

                ajaxCall.always(function() {
                    updateBtnText(loadBtn);                    
                    pageNum++;
                })

            }
        }

        function addThisReload(){
        	if (typeof addthis !== 'undefined') {
                addthis.toolbox('.addthis_toolbox');
                addthis.counter('.addthis_counter');
                addthis.ready();
            }
        }

        function appendResponse(loadBtn){
            loadBtn.removeClass('is-active');

            if ($('#mdContent').hasClass('js-masonry-grid')) {
            	$("#mdContent").append(loadedPosts).masonry( 'appended', loadedPosts, true ); // masonry layout	
            } else {
            	$(loadedPosts).appendTo('#mdContent').css('opacity', 0).animate({opacity: 1}, 500); // other layout
            }

            md_gallery_slider('#mdContent .fotorama'); // fotorama init
            addThisReload(); // addThis init
            
            updateBtnText(loadBtn);
            $('html, body').animate({ scrollTop: $(window).scrollTop() + 1 }, 0); // for recalculating of sticky sidebar
            loadedPosts = '';
        }

        function updateBtnText(loadBtn){
            if (ajaxStatus == 'failed') {
                loadBtn.find('span').text(Util.getBackendVar('ajaxloadpost', 'failText'));
            } else {
                if ( pageNum >= max ) {
                    loadBtn.find('span').text(Util.getBackendVar('ajaxloadpost', 'noMoreText'));
                } else {
                    loadBtn.addClass('is-active');
                }
            }
        }
        

        
    }
    // End AJAX load posts function

    $(document).ready(function() {
        // AJAX load posts
        md_ajaxLoadPosts();
    })

    /* ============================================================================
     * AJAX infinity scroll
     * ==========================================================================*/

    // AJAX infity scroll
    function md_ajaxIfninityScroll(){

    	var loadBtn = $('.js-ajax-infinity-scroll.is-active');
    	if (!loadBtn.length) {
    		return;
    	}

        // The number of the next page to load (/page/x/).
        var pageNum = parseInt(Util.getBackendVar('ajaxloadpost', 'startPage'));
     
        // The maximum number of pages the current query can return.
        var max = parseInt(Util.getBackendVar('ajaxloadpost', 'maxPages'));

        

        var initialText = loadBtn.text();

        function updateBtn(){
            if ( pageNum == max ) {
                loadBtn.find('span').text(Util.getBackendVar('ajaxloadpost', 'noMoreText'));
            } else {
                loadBtn.find('span').text(initialText);
                loadBtn.addClass('is-active');
            }
            return $(this);
        }

        function addThisReload(){
        	if (typeof addthis !== 'undefined') {
                addthis.toolbox('.addthis_toolbox');
                addthis.counter('.addthis_counter');
                addthis.ready();
            }
        }

        function ajaxLoadPosts(){
            if(pageNum < max) {
                // Counter for loaded posts
				var loadedPostsCount = loadBtn.siblings('#mdContent').find('article').length;

                loadBtn.addClass('is-loading');
                
                loadBtn.find('span').text(Util.getBackendVar('ajaxloadpost', 'loadingText'));
                loadBtn.find('i').addClass('fa-spin');

                var ajaxCall = $.ajax({
                    url: Util.getBackendVar('ajaxloadpost', 'ajaxurl'),
                    type: 'post',
                    data: {
                        action: 'ajax_load_post',
                        query_vars: Util.getBackendVar('ajaxloadpost', 'query_vars'),
                        page: pageNum + 1,
                        loadedPostsCount: loadedPostsCount,
                        currentRelURI: Util.getBackendVar('currentRelURI'),
                    }
                });

                ajaxCall.done(function( respond ) {
                    var html = $(respond);
                    if ($('#mdContent').hasClass('js-masonry-grid')) {
		            	$("#mdContent").append(html).masonry( 'appended', html, true ); // masonry layout	
		            } else {
		            	$(html).appendTo('#mdContent').css('opacity', 0).animate({opacity: 1}, 500); // other layout
		            }

		            md_gallery_slider('#mdContent .fotorama'); // fotorama init
		            addThisReload(); // addThis init
                    $('html, body').animate({ scrollTop: $(window).scrollTop() + 1 }, 0); // for recalculating of sticky sidebar
                    updateBtn();
                    pageNum++;

                });

                ajaxCall.fail(function() {
                    loadBtn.find('span').text(Util.getBackendVar('ajaxloadpost', 'failText'));
                });

                ajaxCall.always(function() {
                    loadBtn.removeClass('is-loading');
                    loadBtn.find('i').removeClass('fa-spin');
                });

            } else {
                loadBtn.find('span').text(Util.getBackendVar('ajaxloadpost', 'noMoreText'));
            }
        }

        function ajaxScrollEvent(){
        	if (loadBtn.length) {
                if (( loadBtn.offset().top - $(window).scrollTop() - $(window).height()) <= $(window).height()*3) {
                	if (loadBtn.hasClass('is-active')) {
                		loadBtn.removeClass('is-active');
                		ajaxLoadPosts();
                	}
                }
            }
        }

        $(window).scroll(ajaxScrollEvent);


    }
    // End AJAX infinity scroll

    $(document).ready(function() {
        // AJAX infinity scroll
        md_ajaxIfninityScroll();
    });


    /* ============================================================================
     * Post like
     * ==========================================================================*/
    function postLikes() {
    	$('body').on('click','.js-mdPostLike',function(event){
			event.preventDefault();
			var text = '<span class="hidden-xs">&nbsp;' + Util.getBackendVar('postLike', 'likeCountText') + '</span>';
			var heart = $(this);
			var post_id = heart.data("post_id");
			if (heart.hasClass('mdPostLike--compact')) {
				text = '';
			}
			heart.addClass("processing");
			
			$.ajax({
				type: "post",
				url: Util.getBackendVar('ajaxloadpost', 'ajaxurl'),
				data: "action=minimaldog_post_like&nonce=" + Util.getBackendVar('postLike', 'nonce') + "&minimaldog_post_like=&post_id=" + post_id,
				success: function(count){
					heart.removeClass("processing");
					if( count.indexOf( "already" ) !== -1 )
					{
						var lecount = count.replace("already","");
						if (lecount === "0")
						{
							lecount = '';
							text = '<span class="hidden-xs">&nbsp;' + Util.getBackendVar('postLike', 'likeText') + '</span>';
						} else {
							if (lecount === '1') {
								text = '<span class="hidden-xs">&nbsp;' + Util.getBackendVar('postLike', 'likeCountTextSingular') + '</span>';
							}
							lecount = '&nbsp;'+lecount;
						}
						if (heart.hasClass('mdPostLike--compact')) {
							text = '';
						}
						heart.prop('title', Util.getBackendVar('postLike', 'likeText'));
						heart.removeClass("liked");
						heart.html("<i class='fa fa-heart'></i><i class='fa fa-heart-o'></i>" + lecount + text);
					}
					else
					{	
						if (count === '1') {
							text = '<span class="hidden-xs">&nbsp;' + Util.getBackendVar('postLike', 'likeCountTextSingular') + '</span>';
						}
						if (heart.hasClass('mdPostLike--compact')) {
							text = '';
						}
						heart.prop('title', Util.getBackendVar('postLike', 'unlikeText'));
						heart.addClass("liked");
						heart.html("<i class='fa fa-heart'></i><i class='fa fa-heart-o'></i>&nbsp;"+ count + text);
					}
				}
			});
		});
    }

    $(document).ready(function() {
    	postLikes();
    });

    /* ============================================================================
     * Font Awesome CDN fallback
     * ==========================================================================*/
    function faFallBack() {
		var $check = $('.fa');
		if ($check.length) {
			if ( $check.css('fontFamily') !== 'FontAwesome' ) {
				// fon't awesome not loaded!
				// remove current css link
				$('#font-awesome-css').remove;
				// add the local version
				var local = '<link rel="stylesheet" type="text/css" href="' 
				+ Util.getBackendVar('faFallBack', 'faURL') + '" />';
				$('head').append( local );
			}
		}
	};

	$(document).ready(function() {
		if (Util.getBackendVar('faFallBack', 'toggle') == '1') {
			faFallBack();
		}
    });

    /* ============================================================================
     * Logo and background images on hiDPI devices
     *===========================================================================*/
    function hiDPI() {
	
		// Detect HiDPI
		var hidpi = '',
			mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)";

			if ( window.devicePixelRatio > 1 ) {
				hidpi = true;
			}
		
			if ( window.matchMedia && window.matchMedia(mediaQuery).matches ) {
				hidpi = true;
			}


		if ( hidpi ) {

			// Replace logo

			$('.siteLogo--image img').bind('load', function() {

				if ( $(this).is('[data-hidpi]') ) {
					var src = $(this).attr('data-hidpi');
					$(this).attr( 'src', src );

					
				}

			});

			// Replace background images

			$('.o-backgroundImg, .u-hasBackgroundImg, #md-single-cover').each(function(){

				if ( $(this).is('[data-hidpi]') ) {

					var src = $(this).attr('data-hidpi');
					$(this).css( 'background-image', 'url(' + src + ')' );

				}

			});
		}
	}

	$(document).ready(function() {
		if (Util.getBackendVar('highResolution') == '1') {
			hiDPI();
		}
    });
    
	/* ============================================================================
     * Misc functions
     * ==========================================================================*/
	$(function () {
		
		$(document).ready(function() {

			// Popover
            $('.js-popover-toggle').click(function(e){
                e.stopPropagation();
                $('.js-popover.is-active').toggleClass('is-active');
                $(this).siblings('.js-popover').toggleClass('is-active');
            });
            $('.js-popover').click(function(e){
                e.stopPropagation();
            });
            $(document).on("click", function() {
                $('.js-popover').removeClass('is-active');
            });

            // User Actions btn
            $('.js-userActions-btn').click(function(e){
                e.stopPropagation();
                $(this).siblings('.userActions-popup').toggleClass('is-active');
            });
            $('.js-userActions-popup').click(function(e){
                e.stopPropagation();
            });
            $(document).on("click", function() {
                $('.js-userActions-popup').removeClass('is-active');
            });

            // Search toggle
			$('.js-searchToggle').on('click', function(e) {
				e.stopPropagation();
                $(this).toggleClass('isActive');
                $(this).siblings('.js-searchToggle').toggleClass('isActive');
			    $(this).closest('.js-searchOuter').toggleClass('isSearchActive');
                $(this).closest('.js-searchOuter.isSearchActive').find('.searchField-form-input').focus();
		  	});
		  	$('.js-searchToggle').siblings('.searchField').click(function(e){
                e.stopPropagation();
            })
		  	$(document).on("click", function() {
                $('.js-searchToggle').removeClass('isActive').closest('.siteHeader-nav').removeClass('isSearchActive');
            });

            // AddThis
            if (typeof addthis !== 'undefined' ) {

                addthis.init();
            }

            // Tab
            $('.tabs-nav a').click(function (e) {
                e.preventDefault()
                var tabID = $(this).attr('href');
                $(this).parent('li').siblings('li.active').removeClass('active');
                $(this).parent('li').addClass('active');
                $(this).parents('.tabs-nav').siblings('.tabs-content').find('.tabs-content-section.active').removeClass('active');
                $(this).parents('.tabs-nav').siblings('.tabs-content').find(tabID).addClass('active').masonry('layoutItems');
                $(this).parents('.tabs-nav').siblings('.tabs-content').find(tabID).find('.js-masonry-grid').masonry('layout');
            });

			// Sticky sidebar
            if (Util.getBackendVar('stickySidebar', 'toggle') === '1') {
                $('.js-sticky-sidebar').theiaStickySidebar({
                  // Settings
                  additionalMarginTop: Util.getBackendVar('stickySidebar', 'offsetTop'),
                  additionalMarginBottom: 40
                });
            }			

			// Widget menu
			$('.widget_nav_menu .menu > li.menu-item-has-children').append(function(){
				return $('<div class="submenu-toggle"><i class="fa fa-angle-down"></i></div>').click(function(){
					$(this).parent().children('.sub-menu').slideToggle(200);
				});
			});

			// Parallax carousel
			if ( $('.js-iscroll').length ) {
				var myScroll = new IScroll('.js-iscroll', {
					eventPassthrough: true,
					scrollX: true,
					scrollY: false,
					preventDefault: true,
					deceleration: 0.003,
					snap: 'li',
					indicators: {
				        el: document.getElementById('iscroll-bg'),
				        ignoreBoundaries: true,
				        interactive: false,
				        listenX: true,
				        listenY: false,
				        resize: false,
				        shrink: false,
				        speedRatioX: 0,
				    }
				});	
			}
			
            // Featured slider
            var $featSlider = $('.js-feat-slider-peek');
			$featSlider.owlCarousel({
				items: 1,
				dots: true,
				nav: true,
				navText: ['<svg width="64" height="64" viewBox="0 0 64 64"><path id="arrow-left-1" d="M46.077 55.738c0.858 0.867 0.858 2.266 0 3.133s-2.243 0.867-3.101 0l-25.056-25.302c-0.858-0.867-0.858-2.269 0-3.133l25.056-25.306c0.858-0.867 2.243-0.867 3.101 0s0.858 2.266 0 3.133l-22.848 23.738 22.848 23.738z" /></svg>' , '<svg width="64" height="64" viewBox="0 0 64 64"><path id="arrow-right-1" d="M17.919 55.738c-0.858 0.867-0.858 2.266 0 3.133s2.243 0.867 3.101 0l25.056-25.302c0.858-0.867 0.858-2.269 0-3.133l-25.056-25.306c-0.858-0.867-2.243-0.867-3.101 0s-0.858 2.266 0 3.133l22.848 23.738-22.848 23.738z" /></svg>'],
				margin: 20,
				autoplay: false,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				loop: true,
			});
			var $featSlider = $('.js-feat-slider');
			$featSlider.owlCarousel({
				items: 1,
				dots: true,
				autoplay: false,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				loop: true,
			});

            // Widget slider
			$('.js-slider-widget').owlCarousel({
				items: 1,
				dots: true,
				nav: false,
			});

		  	// Scroll top button
		  	if ($('.js-scrolltop-btn').length) {
			  	$('.js-scrolltop-btn').on('click', function() {
			  		$('html, body').animate({ scrollTop: 0 }, 500);
			  	});
		  	}
		  	
			// Off-canvas menu
			$('.js-menu-toggle').click(function(){
                $('#md_offCanvasMenu').addClass('is-opened');
                if ($('#md_canvasOverlay').length === 0) {
                    var overlay = $('<div id="md_canvasOverlay" class="is-active"></div>');
                    overlay.click( function(){
                        $('#md_offCanvasMenu').removeClass('is-opened');
                        $('#mdSidebar').removeClass('is-opened');
                        $(this).removeClass('is-active');
                    });
                    $('body').append(overlay);
                } else {
                    $('#md_canvasOverlay').addClass('is-active');
                }
            });

            $('.js-offCanvasClose').click(function(){
                $(this).parents('.md_offCanvas').removeClass('is-opened');
                $('#md_canvasOverlay').removeClass('is-active');
            });

            var subMenuToggle = $('<div class="subMenuToggle"><i class="fa fa-angle-down"></i></div>');
            subMenuToggle.click( function(e){
                e.preventDefault();
                $(this).find('i').toggleClass('fa-angle-left');
                $(this).find('i').toggleClass('fa-angle-down');
                //$(this).parent('a').siblings('.sub-menu').toggleClass('-is-expanded');
                $(this).parent('a').siblings('.sub-menu').slideToggle(200);
            });
            $('#md_offCanvasMenu').find('li.menu-item-has-children > a').append(subMenuToggle);
            	
        });
				
	});
	
}( window.mdBone = window.mdBone || {}, jQuery ));