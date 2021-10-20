!function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o(o.s=3)}([function(t,e){},function(t,e){
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";var t=0,e={};function o(n){if(!n)throw new Error("No options passed to Waypoint constructor");if(!n.element)throw new Error("No element option passed to Waypoint constructor");if(!n.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+t,this.options=o.Adapter.extend({},o.defaults,n),this.element=this.options.element,this.adapter=new o.Adapter(this.element),this.callback=n.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=o.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=o.Context.findOrCreateByElement(this.options.context),o.offsetAliases[this.options.offset]&&(this.options.offset=o.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),e[this.key]=this,t+=1}o.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},o.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},o.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete e[this.key]},o.prototype.disable=function(){return this.enabled=!1,this},o.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},o.prototype.next=function(){return this.group.next(this)},o.prototype.previous=function(){return this.group.previous(this)},o.invokeAll=function(t){var o=[];for(var n in e)o.push(e[n]);for(var i=0,r=o.length;i<r;i++)o[i][t]()},o.destroyAll=function(){o.invokeAll("destroy")},o.disableAll=function(){o.invokeAll("disable")},o.enableAll=function(){for(var t in o.Context.refreshAll(),e)e[t].enabled=!0;return this},o.refreshAll=function(){o.Context.refreshAll()},o.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},o.viewportWidth=function(){return document.documentElement.clientWidth},o.adapters=[],o.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},o.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=o}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}var e=0,o={},n=window.Waypoint,i=window.onload;function r(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+e,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,e+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new r(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}r.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},r.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),n=this.element==this.element.window;t&&e&&!n&&(this.adapter.off(".waypoints"),delete o[this.key])},r.prototype.createThrottledResizeHandler=function(){var t=this;function e(){t.handleResize(),t.didResize=!1}this.adapter.on("resize.waypoints",(function(){t.didResize||(t.didResize=!0,n.requestAnimationFrame(e))}))},r.prototype.createThrottledScrollHandler=function(){var t=this;function e(){t.handleScroll(),t.didScroll=!1}this.adapter.on("scroll.waypoints",(function(){t.didScroll&&!n.isTouch||(t.didScroll=!0,n.requestAnimationFrame(e))}))},r.prototype.handleResize=function(){n.Context.refreshAll()},r.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var o in e){var n=e[o],i=n.newScroll>n.oldScroll?n.forward:n.backward;for(var r in this.waypoints[o]){var s=this.waypoints[o][r];if(null!==s.triggerPoint){var a=n.oldScroll<s.triggerPoint,l=n.newScroll>=s.triggerPoint;(a&&l||!a&&!l)&&(s.queueTrigger(i),t[s.group.id]=s.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},r.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},r.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},r.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},r.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var o in this.waypoints[e])t.push(this.waypoints[e][o]);for(var n=0,i=t.length;n<i;n++)t[n].destroy()},r.prototype.refresh=function(){var t,e=this.element==this.element.window,o=e?void 0:this.adapter.offset(),i={};for(var r in this.handleScroll(),t={horizontal:{contextOffset:e?0:o.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:o.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var s=t[r];for(var a in this.waypoints[r]){var l,c,u,p,d=this.waypoints[r][a],h=d.options.offset,f=d.triggerPoint,w=0,y=null==f;d.element!==d.element.window&&(w=d.adapter.offset()[s.offsetProp]),"function"==typeof h?h=h.apply(d):"string"==typeof h&&(h=parseFloat(h),d.options.offset.indexOf("%")>-1&&(h=Math.ceil(s.contextDimension*h/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(w+l-h),c=f<s.oldScroll,u=d.triggerPoint>=s.oldScroll,p=!c&&!u,!y&&(c&&u)?(d.queueTrigger(s.backward),i[d.group.id]=d.group):(!y&&p||y&&s.oldScroll>=d.triggerPoint)&&(d.queueTrigger(s.forward),i[d.group.id]=d.group)}}return n.requestAnimationFrame((function(){for(var t in i)i[t].flushTriggers()})),this},r.findOrCreateByElement=function(t){return r.findByElement(t)||new r(t)},r.refreshAll=function(){for(var t in o)o[t].refresh()},r.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){i&&i(),r.refreshAll()},n.requestAnimationFrame=function(e){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t).call(window,e)},n.Context=r}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}var o={vertical:{},horizontal:{}},n=window.Waypoint;function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var o in this.triggerQueues){var n=this.triggerQueues[o],i="up"===o||"left"===o;n.sort(i?e:t);for(var r=0,s=n.length;r<s;r+=1){var a=n[r];(a.options.continuous||r===n.length-1)&&a.trigger([o])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var o=n.Adapter.inArray(e,this.waypoints);return o===this.waypoints.length-1?null:this.waypoints[o+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var o=n.Adapter.inArray(e,this.waypoints);return o?this.waypoints[o-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";var t=window.jQuery,e=window.Waypoint;function o(e){this.$element=t(e)}t.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],(function(t,e){o.prototype[e]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[e].apply(this.$element,t)}})),t.each(["extend","inArray","isEmptyObject"],(function(e,n){o[n]=t[n]})),e.adapters.push({name:"jquery",Adapter:o}),e.Adapter=o}(),function(){"use strict";var t=window.Waypoint;function e(e){return function(){var o=[],n=arguments[0];return e.isFunction(arguments[0])&&((n=e.extend({},arguments[1])).handler=arguments[0]),this.each((function(){var i=e.extend({},n,{element:this});"string"==typeof i.context&&(i.context=e(this).closest(i.context)[0]),o.push(new t(i))})),o}}window.jQuery&&(window.jQuery.fn.waypoint=e(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=e(window.Zepto))}()},function(t,e){!function(t){t.fn.animated=function(e){t(this).each((function(){var o=t(this);o.css("opacity","0").addClass("animated").waypoint((function(t){"down"===t&&o.addClass(e).css("opacity","1")}),{offset:"90%"})}))}}(jQuery)},function(t,e,o){"use strict";o.r(e);o(0),o(1),o(2);$(document).ready((function(){var t=document.querySelector(".hamburger"),e=document.querySelector(".header-mobile");function o(){console.log("close1"),$("html").removeClass("overflow"),$(".header-mobile__circle").removeClass("expand"),$(".header-mobile__nav-item").removeClass("animate"),$(".header-mobile").css("visibility","hidden"),console.log("close2")}t.addEventListener("click",(function(){t.classList.toggle("is-active"),e.classList.toggle("opened"),t.classList.contains("is-active")?(console.log("open1"),$("html").addClass("overflow"),$(".header-mobile__circle").addClass("expand"),$(".header-mobile__nav-item").addClass("animate"),$(".header-mobile").css("visibility","visible"),console.log("open2")):o()})),$(".header-mobile__nav-link").on("click",(function(e){console.log("close menu by link"),t.classList.toggle("is-active"),o()})),$(".header__nav-link, .footer__up-btn, .header-mobile__nav-link").on("click",(function(){var t=$(this).attr("href");return void 0!==t&&""!==t&&$("body,html").animate({scrollTop:$(t).offset().top},500),!1})),$(".benefit__block-wrap").animated("fadeInUp"),$(".stage__block").animated("fadeInUp"),document.querySelectorAll(".welcome__form-button").forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),party.confetti(this),$(".welcome__form-done").addClass("welcome__form-done--active"),setTimeout((function(){$(".welcome__form-done-btn").addClass("welcome__form-done-btn--active")}),1e3)}))}))})),$(".welcome__btn").click((function(t){t.preventDefault(),$("html").addClass("overflow"),$(".popup").fadeIn(300,(function(){$(this).focus()}))})),$(".popup__close").click((function(){$(".popup").fadeOut(300),$("html").removeClass("overflow")})),$(document).mouseup((function(t){0===$(".popup__wrap").has(t.target).length&&$(".popup").fadeOut(300),0===$(".test__wrap").has(t.target).length&&$(".test").fadeOut(300)})),$(".request__form-btn").click((function(t){t.preventDefault(),$(".request__form-message--ok").fadeIn(300,(function(){$(this).focus()}))})),$(".popup__btn").click((function(t){t.preventDefault(),$(".popup__group-input-wrap ").fadeOut(300),$(".popup__form-message--ok").fadeIn(300,(function(){$(this).focus()}))}))}]);