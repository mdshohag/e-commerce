(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);
jQuery.noConflict();window.sp_jQuery=jQuery;var Prototype={Version:'1.7',Browser:(function(){var ua=navigator.userAgent;var isOpera=Object.prototype.toString.call(window.opera)=='[object Opera]';return{IE:!!window.attachEvent&&!isOpera,Opera:isOpera,WebKit:ua.indexOf('AppleWebKit/')>-1,Gecko:ua.indexOf('Gecko')>-1&&ua.indexOf('KHTML')===-1,MobileSafari:/Apple.*Mobile/.test(ua)}})(),BrowserFeatures:{XPath:!!document.evaluate,SelectorsAPI:!!document.querySelector,ElementExtensions:(function(){var constructor=window.Element||window.HTMLElement;return!!(constructor&&constructor.prototype);})(),SpecificElementExtensions:(function(){if(typeof window.HTMLDivElement!=='undefined')
return true;var div=document.createElement('div'),form=document.createElement('form'),isSupported=false;if(div['__proto__']&&(div['__proto__']!==form['__proto__'])){isSupported=true;}
div=form=null;return isSupported;})()},ScriptFragment:'<script[^>]*>([\\S\\s]*?)<\/script>',JSONFilter:/^\/\*-secure-([\s\S]*)\*\/\s*$/,emptyFunction:function(){},K:function(x){return x}};if(Prototype.Browser.MobileSafari)
Prototype.BrowserFeatures.SpecificElementExtensions=false;var Abstract={};var Try={these:function(){var returnValue;for(var i=0,length=arguments.length;i<length;i++){var lambda=arguments[i];try{returnValue=lambda();break;}catch(e){}}
return returnValue;}};var Class=(function(){var IS_DONTENUM_BUGGY=(function(){for(var p in{toString:1}){if(p==='toString')return false;}
return true;})();function subclass(){};function create(){var parent=null,properties=$A(arguments);if(Object.isFunction(properties[0]))
parent=properties.shift();function klass(){this.initialize.apply(this,arguments);}
Object.extend(klass,Class.Methods);klass.superclass=parent;klass.subclasses=[];if(parent){subclass.prototype=parent.prototype;klass.prototype=new subclass;parent.subclasses.push(klass);}
for(var i=0,length=properties.length;i<length;i++)
klass.addMethods(properties[i]);if(!klass.prototype.initialize)
klass.prototype.initialize=Prototype.emptyFunction;klass.prototype.constructor=klass;return klass;}
function addMethods(source){var ancestor=this.superclass&&this.superclass.prototype,properties=Object.keys(source);if(IS_DONTENUM_BUGGY){if(source.toString!=Object.prototype.toString)
properties.push("toString");if(source.valueOf!=Object.prototype.valueOf)
properties.push("valueOf");}
for(var i=0,length=properties.length;i<length;i++){var property=properties[i],value=source[property];if(ancestor&&Object.isFunction(value)&&value.argumentNames()[0]=="$super"){var method=value;value=(function(m){return function(){return ancestor[m].apply(this,arguments);};})(property).wrap(method);value.valueOf=method.valueOf.bind(method);value.toString=method.toString.bind(method);}
this.prototype[property]=value;}
return this;}
return{create:create,Methods:{addMethods:addMethods}};})();(function(){var _toString=Object.prototype.toString,NULL_TYPE='Null',UNDEFINED_TYPE='Undefined',BOOLEAN_TYPE='Boolean',NUMBER_TYPE='Number',STRING_TYPE='String',OBJECT_TYPE='Object',FUNCTION_CLASS='[object Function]',BOOLEAN_CLASS='[object Boolean]',NUMBER_CLASS='[object Number]',STRING_CLASS='[object String]',ARRAY_CLASS='[object Array]',DATE_CLASS='[object Date]',NATIVE_JSON_STRINGIFY_SUPPORT=window.JSON&&typeof JSON.stringify==='function'&&JSON.stringify(0)==='0'&&typeof JSON.stringify(Prototype.K)==='undefined';function Type(o){switch(o){case null:return NULL_TYPE;case(void 0):return UNDEFINED_TYPE;}
var type=typeof o;switch(type){case'boolean':return BOOLEAN_TYPE;case'number':return NUMBER_TYPE;case'string':return STRING_TYPE;}
return OBJECT_TYPE;}
function extend(destination,source){for(var property in source)
destination[property]=source[property];return destination;}
function inspect(object){try{if(isUndefined(object))return'undefined';if(object===null)return'null';return object.inspect?object.inspect():String(object);}catch(e){if(e instanceof RangeError)return'...';throw e;}}
function toJSON(value){return Str('',{'':value},[]);}
function Str(key,holder,stack){var value=holder[key],type=typeof value;if(Type(value)===OBJECT_TYPE&&typeof value.toJSON==='function'){value=value.toJSON(key);}
var _class=_toString.call(value);switch(_class){case NUMBER_CLASS:case BOOLEAN_CLASS:case STRING_CLASS:value=value.valueOf();}
switch(value){case null:return'null';case true:return'true';case false:return'false';}
type=typeof value;switch(type){case'string':return value.inspect(true);case'number':return isFinite(value)?String(value):'null';case'object':for(var i=0,length=stack.length;i<length;i++){if(stack[i]===value){throw new TypeError();}}
stack.push(value);var partial=[];if(_class===ARRAY_CLASS){for(var i=0,length=value.length;i<length;i++){var str=Str(i,value,stack);partial.push(typeof str==='undefined'?'null':str);}
partial='['+ partial.join(',')+']';}else{var keys=Object.keys(value);for(var i=0,length=keys.length;i<length;i++){var key=keys[i],str=Str(key,value,stack);if(typeof str!=="undefined"){partial.push(key.inspect(true)+':'+ str);}}
partial='{'+ partial.join(',')+'}';}
stack.pop();return partial;}}
function stringify(object){return JSON.stringify(object);}
function toQueryString(object){return $H(object).toQueryString();}
function toHTML(object){return object&&object.toHTML?object.toHTML():String.interpret(object);}
function keys(object){if(Type(object)!==OBJECT_TYPE){throw new TypeError();}
var results=[];for(var property in object){if(object.hasOwnProperty(property)){results.push(property);}}
return results;}
function values(object){var results=[];for(var property in object)
results.push(object[property]);return results;}
function clone(object){return extend({},object);}
function isElement(object){return!!(object&&object.nodeType==1);}
function isArray(object){return _toString.call(object)===ARRAY_CLASS;}
var hasNativeIsArray=(typeof Array.isArray=='function')&&Array.isArray([])&&!Array.isArray({});if(hasNativeIsArray){isArray=Array.isArray;}
function isHash(object){return object instanceof Hash;}
function isFunction(object){return _toString.call(object)===FUNCTION_CLASS;}
function isString(object){return _toString.call(object)===STRING_CLASS;}
function isNumber(object){return _toString.call(object)===NUMBER_CLASS;}
function isDate(object){return _toString.call(object)===DATE_CLASS;}
function isUndefined(object){return typeof object==="undefined";}
extend(Object,{extend:extend,inspect:inspect,toJSON:NATIVE_JSON_STRINGIFY_SUPPORT?stringify:toJSON,toQueryString:toQueryString,toHTML:toHTML,keys:Object.keys||keys,values:values,clone:clone,isElement:isElement,isArray:isArray,isHash:isHash,isFunction:isFunction,isString:isString,isNumber:isNumber,isDate:isDate,isUndefined:isUndefined});})();Object.extend(Function.prototype,(function(){var slice=Array.prototype.slice;function update(array,args){var arrayLength=array.length,length=args.length;while(length--)array[arrayLength+ length]=args[length];return array;}
function merge(array,args){array=slice.call(array,0);return update(array,args);}
function argumentNames(){var names=this.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1].replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g,'').replace(/\s+/g,'').split(',');return names.length==1&&!names[0]?[]:names;}
function bind(context){if(arguments.length<2&&Object.isUndefined(arguments[0]))return this;var __method=this,args=slice.call(arguments,1);return function(){var a=merge(args,arguments);return __method.apply(context,a);}}
function bindAsEventListener(context){var __method=this,args=slice.call(arguments,1);return function(event){var a=update([event||window.event],args);return __method.apply(context,a);}}
function curry(){if(!arguments.length)return this;var __method=this,args=slice.call(arguments,0);return function(){var a=merge(args,arguments);return __method.apply(this,a);}}
function delay(timeout){var __method=this,args=slice.call(arguments,1);timeout=timeout*1000;return window.setTimeout(function(){return __method.apply(__method,args);},timeout);}
function defer(){var args=update([0.01],arguments);return this.delay.apply(this,args);}
function wrap(wrapper){var __method=this;return function(){var a=update([__method.bind(this)],arguments);return wrapper.apply(this,a);}}
function methodize(){if(this._methodized)return this._methodized;var __method=this;return this._methodized=function(){var a=update([this],arguments);return __method.apply(null,a);};}
return{argumentNames:argumentNames,bind:bind,bindAsEventListener:bindAsEventListener,curry:curry,delay:delay,defer:defer,wrap:wrap,methodize:methodize}})());(function(proto){function toISOString(){return this.getUTCFullYear()+'-'+
(this.getUTCMonth()+ 1).toPaddedString(2)+'-'+
this.getUTCDate().toPaddedString(2)+'T'+
this.getUTCHours().toPaddedString(2)+':'+
this.getUTCMinutes().toPaddedString(2)+':'+
this.getUTCSeconds().toPaddedString(2)+'Z';}
function toJSON(){return this.toISOString();}
if(!proto.toISOString)proto.toISOString=toISOString;if(!proto.toJSON)proto.toJSON=toJSON;})(Date.prototype);RegExp.prototype.match=RegExp.prototype.test;RegExp.escape=function(str){return String(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g,'\\$1');};var PeriodicalExecuter=Class.create({initialize:function(callback,frequency){this.callback=callback;this.frequency=frequency;this.currentlyExecuting=false;this.registerCallback();},registerCallback:function(){this.timer=setInterval(this.onTimerEvent.bind(this),this.frequency*1000);},execute:function(){this.callback(this);},stop:function(){if(!this.timer)return;clearInterval(this.timer);this.timer=null;},onTimerEvent:function(){if(!this.currentlyExecuting){try{this.currentlyExecuting=true;this.execute();this.currentlyExecuting=false;}catch(e){this.currentlyExecuting=false;throw e;}}}});Object.extend(String,{interpret:function(value){return value==null?'':String(value);},specialChar:{'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','\\':'\\\\'}});Object.extend(String.prototype,(function(){var NATIVE_JSON_PARSE_SUPPORT=window.JSON&&typeof JSON.parse==='function'&&JSON.parse('{"test": true}').test;function prepareReplacement(replacement){if(Object.isFunction(replacement))return replacement;var template=new Template(replacement);return function(match){return template.evaluate(match)};}
function gsub(pattern,replacement){var result='',source=this,match;replacement=prepareReplacement(replacement);if(Object.isString(pattern))
pattern=RegExp.escape(pattern);if(!(pattern.length||pattern.source)){replacement=replacement('');return replacement+ source.split('').join(replacement)+ replacement;}
while(source.length>0){if(match=source.match(pattern)){result+=source.slice(0,match.index);result+=String.interpret(replacement(match));source=source.slice(match.index+ match[0].length);}else{result+=source,source='';}}
return result;}
function sub(pattern,replacement,count){replacement=prepareReplacement(replacement);count=Object.isUndefined(count)?1:count;return this.gsub(pattern,function(match){if(--count<0)return match[0];return replacement(match);});}
function scan(pattern,iterator){this.gsub(pattern,iterator);return String(this);}
function truncate(length,truncation){length=length||30;truncation=Object.isUndefined(truncation)?'...':truncation;return this.length>length?this.slice(0,length- truncation.length)+ truncation:String(this);}
function strip(){return this.replace(/^\s+/,'').replace(/\s+$/,'');}
function stripTags(){return this.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi,'');}
function stripScripts(){return this.replace(new RegExp(Prototype.ScriptFragment,'img'),'');}
function extractScripts(){var matchAll=new RegExp(Prototype.ScriptFragment,'img'),matchOne=new RegExp(Prototype.ScriptFragment,'im');return(this.match(matchAll)||[]).map(function(scriptTag){return(scriptTag.match(matchOne)||['',''])[1];});}
function evalScripts(){return this.extractScripts().map(function(script){return eval(script)});}
function escapeHTML(){return this.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function unescapeHTML(){return this.stripTags().replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');}
function toQueryParams(separator){var match=this.strip().match(/([^?#]*)(#.*)?$/);if(!match)return{};return match[1].split(separator||'&').inject({},function(hash,pair){if((pair=pair.split('='))[0]){var key=decodeURIComponent(pair.shift()),value=pair.length>1?pair.join('='):pair[0];if(value!=undefined)value=decodeURIComponent(value);if(key in hash){if(!Object.isArray(hash[key]))hash[key]=[hash[key]];hash[key].push(value);}
else hash[key]=value;}
return hash;});}
function toArray(){return this.split('');}
function succ(){return this.slice(0,this.length- 1)+
String.fromCharCode(this.charCodeAt(this.length- 1)+ 1);}
function times(count){return count<1?'':new Array(count+ 1).join(this);}
function camelize(){return this.replace(/-+(.)?/g,function(match,chr){return chr?chr.toUpperCase():'';});}
function capitalize(){return this.charAt(0).toUpperCase()+ this.substring(1).toLowerCase();}
function underscore(){return this.replace(/::/g,'/').replace(/([A-Z]+)([A-Z][a-z])/g,'$1_$2').replace(/([a-z\d])([A-Z])/g,'$1_$2').replace(/-/g,'_').toLowerCase();}
function dasherize(){return this.replace(/_/g,'-');}
function inspect(useDoubleQuotes){var escapedString=this.replace(/[\x00-\x1f\\]/g,function(character){if(character in String.specialChar){return String.specialChar[character];}
return'\\u00'+ character.charCodeAt().toPaddedString(2,16);});if(useDoubleQuotes)return'"'+ escapedString.replace(/"/g,'\\"')+'"';return"'"+ escapedString.replace(/'/g,'\\\'')+"'";}
function unfilterJSON(filter){return this.replace(filter||Prototype.JSONFilter,'$1');}
function isJSON(){var str=this;if(str.blank())return false;str=str.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@');str=str.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']');str=str.replace(/(?:^|:|,)(?:\s*\[)+/g,'');return(/^[\],:{}\s]*$/).test(str);}
function evalJSON(sanitize){var json=this.unfilterJSON(),cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;if(cx.test(json)){json=json.replace(cx,function(a){return'\\u'+('0000'+ a.charCodeAt(0).toString(16)).slice(-4);});}
try{if(!sanitize||json.isJSON())return eval('('+ json+')');}catch(e){}
throw new SyntaxError('Badly formed JSON string: '+ this.inspect());}
function parseJSON(){var json=this.unfilterJSON();return JSON.parse(json);}
function include(pattern){return this.indexOf(pattern)>-1;}
function startsWith(pattern){return this.lastIndexOf(pattern,0)===0;}
function endsWith(pattern){var d=this.length- pattern.length;return d>=0&&this.indexOf(pattern,d)===d;}
function empty(){return this=='';}
function blank(){return/^\s*$/.test(this);}
function interpolate(object,pattern){return new Template(this,pattern).evaluate(object);}
return{gsub:gsub,sub:sub,scan:scan,truncate:truncate,strip:String.prototype.trim||strip,stripTags:stripTags,stripScripts:stripScripts,extractScripts:extractScripts,evalScripts:evalScripts,escapeHTML:escapeHTML,unescapeHTML:unescapeHTML,toQueryParams:toQueryParams,parseQuery:toQueryParams,toArray:toArray,succ:succ,times:times,camelize:camelize,capitalize:capitalize,underscore:underscore,dasherize:dasherize,inspect:inspect,unfilterJSON:unfilterJSON,isJSON:isJSON,evalJSON:NATIVE_JSON_PARSE_SUPPORT?parseJSON:evalJSON,include:include,startsWith:startsWith,endsWith:endsWith,empty:empty,blank:blank,interpolate:interpolate};})());var Template=Class.create({initialize:function(template,pattern){this.template=template.toString();this.pattern=pattern||Template.Pattern;},evaluate:function(object){if(object&&Object.isFunction(object.toTemplateReplacements))
object=object.toTemplateReplacements();return this.template.gsub(this.pattern,function(match){if(object==null)return(match[1]+'');var before=match[1]||'';if(before=='\\')return match[2];var ctx=object,expr=match[3],pattern=/^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;match=pattern.exec(expr);if(match==null)return before;while(match!=null){var comp=match[1].startsWith('[')?match[2].replace(/\\\\]/g,']'):match[1];ctx=ctx[comp];if(null==ctx||''==match[3])break;expr=expr.substring('['==match[3]?match[1].length:match[0].length);match=pattern.exec(expr);}
return before+ String.interpret(ctx);});}});Template.Pattern=/(^|.|\r|\n)(#\{(.*?)\})/;var $break={};var Enumerable=(function(){function each(iterator,context){var index=0;try{this._each(function(value){iterator.call(context,value,index++);});}catch(e){if(e!=$break)throw e;}
return this;}
function eachSlice(number,iterator,context){var index=-number,slices=[],array=this.toArray();if(number<1)return array;while((index+=number)<array.length)
slices.push(array.slice(index,index+number));return slices.collect(iterator,context);}
function all(iterator,context){iterator=iterator||Prototype.K;var result=true;this.each(function(value,index){result=result&&!!iterator.call(context,value,index);if(!result)throw $break;});return result;}
function any(iterator,context){iterator=iterator||Prototype.K;var result=false;this.each(function(value,index){if(result=!!iterator.call(context,value,index))
throw $break;});return result;}
function collect(iterator,context){iterator=iterator||Prototype.K;var results=[];this.each(function(value,index){results.push(iterator.call(context,value,index));});return results;}
function detect(iterator,context){var result;this.each(function(value,index){if(iterator.call(context,value,index)){result=value;throw $break;}});return result;}
function findAll(iterator,context){var results=[];this.each(function(value,index){if(iterator.call(context,value,index))
results.push(value);});return results;}
function grep(filter,iterator,context){iterator=iterator||Prototype.K;var results=[];if(Object.isString(filter))
filter=new RegExp(RegExp.escape(filter));this.each(function(value,index){if(filter.match(value))
results.push(iterator.call(context,value,index));});return results;}
function include(object){if(Object.isFunction(this.indexOf))
if(this.indexOf(object)!=-1)return true;var found=false;this.each(function(value){if(value==object){found=true;throw $break;}});return found;}
function inGroupsOf(number,fillWith){fillWith=Object.isUndefined(fillWith)?null:fillWith;return this.eachSlice(number,function(slice){while(slice.length<number)slice.push(fillWith);return slice;});}
function inject(memo,iterator,context){this.each(function(value,index){memo=iterator.call(context,memo,value,index);});return memo;}
function invoke(method){var args=$A(arguments).slice(1);return this.map(function(value){return value[method].apply(value,args);});}
function max(iterator,context){iterator=iterator||Prototype.K;var result;this.each(function(value,index){value=iterator.call(context,value,index);if(result==null||value>=result)
result=value;});return result;}
function min(iterator,context){iterator=iterator||Prototype.K;var result;this.each(function(value,index){value=iterator.call(context,value,index);if(result==null||value<result)
result=value;});return result;}
function partition(iterator,context){iterator=iterator||Prototype.K;var trues=[],falses=[];this.each(function(value,index){(iterator.call(context,value,index)?trues:falses).push(value);});return[trues,falses];}
function pluck(property){var results=[];this.each(function(value){results.push(value[property]);});return results;}
function reject(iterator,context){var results=[];this.each(function(value,index){if(!iterator.call(context,value,index))
results.push(value);});return results;}
function sortBy(iterator,context){return this.map(function(value,index){return{value:value,criteria:iterator.call(context,value,index)};}).sort(function(left,right){var a=left.criteria,b=right.criteria;return a<b?-1:a>b?1:0;}).pluck('value');}
function toArray(){return this.map();}
function zip(){var iterator=Prototype.K,args=$A(arguments);if(Object.isFunction(args.last()))
iterator=args.pop();var collections=[this].concat(args).map($A);return this.map(function(value,index){return iterator(collections.pluck(index));});}
function size(){return this.toArray().length;}
function inspect(){return'#<Enumerable:'+ this.toArray().inspect()+'>';}
return{each:each,eachSlice:eachSlice,all:all,every:all,any:any,some:any,collect:collect,map:collect,detect:detect,findAll:findAll,select:findAll,filter:findAll,grep:grep,include:include,member:include,inGroupsOf:inGroupsOf,inject:inject,invoke:invoke,max:max,min:min,partition:partition,pluck:pluck,reject:reject,sortBy:sortBy,toArray:toArray,entries:toArray,zip:zip,size:size,inspect:inspect,find:detect};})();function $A(iterable){if(!iterable)return[];if('toArray'in Object(iterable))return iterable.toArray();var length=iterable.length||0,results=new Array(length);while(length--)results[length]=iterable[length];return results;}
function $w(string){if(!Object.isString(string))return[];string=string.strip();return string?string.split(/\s+/):[];}
Array.from=$A;(function(){var arrayProto=Array.prototype,slice=arrayProto.slice,_each=arrayProto.forEach;function each(iterator,context){for(var i=0,length=this.length>>>0;i<length;i++){if(i in this)iterator.call(context,this[i],i,this);}}
if(!_each)_each=each;function clear(){this.length=0;return this;}
function first(){return this[0];}
function last(){return this[this.length- 1];}
function compact(){return this.select(function(value){return value!=null;});}
function flatten(){return this.inject([],function(array,value){if(Object.isArray(value))
return array.concat(value.flatten());array.push(value);return array;});}
function without(){var values=slice.call(arguments,0);return this.select(function(value){return!values.include(value);});}
function reverse(inline){return(inline===false?this.toArray():this)._reverse();}
function uniq(sorted){return this.inject([],function(array,value,index){if(0==index||(sorted?array.last()!=value:!array.include(value)))
array.push(value);return array;});}
function intersect(array){return this.uniq().findAll(function(item){return array.detect(function(value){return item===value});});}
function clone(){return slice.call(this,0);}
function size(){return this.length;}
function inspect(){return'['+ this.map(Object.inspect).join(', ')+']';}
function indexOf(item,i){i||(i=0);var length=this.length;if(i<0)i=length+ i;for(;i<length;i++)
if(this[i]===item)return i;return-1;}
function lastIndexOf(item,i){i=isNaN(i)?this.length:(i<0?this.length+ i:i)+ 1;var n=this.slice(0,i).reverse().indexOf(item);return(n<0)?n:i- n- 1;}
function concat(){var array=slice.call(this,0),item;for(var i=0,length=arguments.length;i<length;i++){item=arguments[i];if(Object.isArray(item)&&!('callee'in item)){for(var j=0,arrayLength=item.length;j<arrayLength;j++)
array.push(item[j]);}else{array.push(item);}}
return array;}
Object.extend(arrayProto,Enumerable);if(!arrayProto._reverse)
arrayProto._reverse=arrayProto.reverse;Object.extend(arrayProto,{_each:_each,clear:clear,first:first,last:last,compact:compact,flatten:flatten,without:without,reverse:reverse,uniq:uniq,intersect:intersect,clone:clone,toArray:clone,size:size,inspect:inspect});var CONCAT_ARGUMENTS_BUGGY=(function(){return[].concat(arguments)[0][0]!==1;})(1,2)
if(CONCAT_ARGUMENTS_BUGGY)arrayProto.concat=concat;if(!arrayProto.indexOf)arrayProto.indexOf=indexOf;if(!arrayProto.lastIndexOf)arrayProto.lastIndexOf=lastIndexOf;})();function $H(object){return new Hash(object);};var Hash=Class.create(Enumerable,(function(){function initialize(object){this._object=Object.isHash(object)?object.toObject():Object.clone(object);}
function _each(iterator){for(var key in this._object){var value=this._object[key],pair=[key,value];pair.key=key;pair.value=value;iterator(pair);}}
function set(key,value){return this._object[key]=value;}
function get(key){if(this._object[key]!==Object.prototype[key])
return this._object[key];}
function unset(key){var value=this._object[key];delete this._object[key];return value;}
function toObject(){return Object.clone(this._object);}
function keys(){return this.pluck('key');}
function values(){return this.pluck('value');}
function index(value){var match=this.detect(function(pair){return pair.value===value;});return match&&match.key;}
function merge(object){return this.clone().update(object);}
function update(object){return new Hash(object).inject(this,function(result,pair){result.set(pair.key,pair.value);return result;});}
function toQueryPair(key,value){if(Object.isUndefined(value))return key;return key+'='+ encodeURIComponent(String.interpret(value));}
function toQueryString(){return this.inject([],function(results,pair){var key=encodeURIComponent(pair.key),values=pair.value;if(values&&typeof values=='object'){if(Object.isArray(values)){var queryValues=[];for(var i=0,len=values.length,value;i<len;i++){value=values[i];queryValues.push(toQueryPair(key,value));}
return results.concat(queryValues);}}else results.push(toQueryPair(key,values));return results;}).join('&');}
function inspect(){return'#<Hash:{'+ this.map(function(pair){return pair.map(Object.inspect).join(': ');}).join(', ')+'}>';}
function clone(){return new Hash(this);}
return{initialize:initialize,_each:_each,set:set,get:get,unset:unset,toObject:toObject,toTemplateReplacements:toObject,keys:keys,values:values,index:index,merge:merge,update:update,toQueryString:toQueryString,inspect:inspect,toJSON:toObject,clone:clone};})());Hash.from=$H;Object.extend(Number.prototype,(function(){function toColorPart(){return this.toPaddedString(2,16);}
function succ(){return this+ 1;}
function times(iterator,context){$R(0,this,true).each(iterator,context);return this;}
function toPaddedString(length,radix){var string=this.toString(radix||10);return'0'.times(length- string.length)+ string;}
function abs(){return Math.abs(this);}
function round(){return Math.round(this);}
function ceil(){return Math.ceil(this);}
function floor(){return Math.floor(this);}
return{toColorPart:toColorPart,succ:succ,times:times,toPaddedString:toPaddedString,abs:abs,round:round,ceil:ceil,floor:floor};})());function $R(start,end,exclusive){return new ObjectRange(start,end,exclusive);}
var ObjectRange=Class.create(Enumerable,(function(){function initialize(start,end,exclusive){this.start=start;this.end=end;this.exclusive=exclusive;}
function _each(iterator){var value=this.start;while(this.include(value)){iterator(value);value=value.succ();}}
function include(value){if(value<this.start)
return false;if(this.exclusive)
return value<this.end;return value<=this.end;}
return{initialize:initialize,_each:_each,include:include};})());var Ajax={getTransport:function(){return Try.these(function(){return new XMLHttpRequest()},function(){return new ActiveXObject('Msxml2.XMLHTTP')},function(){return new ActiveXObject('Microsoft.XMLHTTP')})||false;},activeRequestCount:0};Ajax.Responders={responders:[],_each:function(iterator){this.responders._each(iterator);},register:function(responder){if(!this.include(responder))
this.responders.push(responder);},unregister:function(responder){this.responders=this.responders.without(responder);},dispatch:function(callback,request,transport,json){this.each(function(responder){if(Object.isFunction(responder[callback])){try{responder[callback].apply(responder,[request,transport,json]);}catch(e){}}});}};Object.extend(Ajax.Responders,Enumerable);Ajax.Responders.register({onCreate:function(){Ajax.activeRequestCount++},onComplete:function(){Ajax.activeRequestCount--}});Ajax.Base=Class.create({initialize:function(options){this.options={method:'post',asynchronous:true,contentType:'application/x-www-form-urlencoded',encoding:'UTF-8',parameters:'',evalJSON:true,evalJS:true};Object.extend(this.options,options||{});this.options.method=this.options.method.toLowerCase();if(Object.isHash(this.options.parameters))
this.options.parameters=this.options.parameters.toObject();}});Ajax.Request=Class.create(Ajax.Base,{_complete:false,initialize:function($super,url,options){$super(options);this.transport=Ajax.getTransport();this.request(url);},request:function(url){this.url=url;this.method=this.options.method;var params=Object.isString(this.options.parameters)?this.options.parameters:Object.toQueryString(this.options.parameters);if(!['get','post'].include(this.method)){params+=(params?'&':'')+"_method="+ this.method;this.method='post';}
if(params&&this.method==='get'){this.url+=(this.url.include('?')?'&':'?')+ params;}
this.parameters=params.toQueryParams();try{var response=new Ajax.Response(this);if(this.options.onCreate)this.options.onCreate(response);Ajax.Responders.dispatch('onCreate',this,response);this.transport.open(this.method.toUpperCase(),this.url,this.options.asynchronous);if(this.options.asynchronous)this.respondToReadyState.bind(this).defer(1);this.transport.onreadystatechange=this.onStateChange.bind(this);this.setRequestHeaders();this.body=this.method=='post'?(this.options.postBody||params):null;this.transport.send(this.body);if(!this.options.asynchronous&&this.transport.overrideMimeType)
this.onStateChange();}
catch(e){this.dispatchException(e);}},onStateChange:function(){var readyState=this.transport.readyState;if(readyState>1&&!((readyState==4)&&this._complete))
this.respondToReadyState(this.transport.readyState);},setRequestHeaders:function(){var headers={'X-Requested-With':'XMLHttpRequest','X-Prototype-Version':Prototype.Version,'Accept':'text/javascript, text/html, application/xml, text/xml, */*'};if(this.method=='post'){headers['Content-type']=this.options.contentType+
(this.options.encoding?'; charset='+ this.options.encoding:'');if(this.transport.overrideMimeType&&(navigator.userAgent.match(/Gecko\/(\d{4})/)||[0,2005])[1]<2005)
headers['Connection']='close';}
if(typeof this.options.requestHeaders=='object'){var extras=this.options.requestHeaders;if(Object.isFunction(extras.push))
for(var i=0,length=extras.length;i<length;i+=2)
headers[extras[i]]=extras[i+1];else
$H(extras).each(function(pair){headers[pair.key]=pair.value});}
for(var name in headers)
this.transport.setRequestHeader(name,headers[name]);},success:function(){var status=this.getStatus();return!status||(status>=200&&status<300)||status==304;},getStatus:function(){try{if(this.transport.status===1223)return 204;return this.transport.status||0;}catch(e){return 0}},respondToReadyState:function(readyState){var state=Ajax.Request.Events[readyState],response=new Ajax.Response(this);if(state=='Complete'){try{this._complete=true;(this.options['on'+ response.status]||this.options['on'+(this.success()?'Success':'Failure')]||Prototype.emptyFunction)(response,response.headerJSON);}catch(e){this.dispatchException(e);}
var contentType=response.getHeader('Content-type');if(this.options.evalJS=='force'||(this.options.evalJS&&this.isSameOrigin()&&contentType&&contentType.match(/^\s*(text|application)\/(x-)?(java|ecma)script(;.*)?\s*$/i)))
this.evalResponse();}
try{(this.options['on'+ state]||Prototype.emptyFunction)(response,response.headerJSON);Ajax.Responders.dispatch('on'+ state,this,response,response.headerJSON);}catch(e){this.dispatchException(e);}
if(state=='Complete'){this.transport.onreadystatechange=Prototype.emptyFunction;}},isSameOrigin:function(){var m=this.url.match(/^\s*https?:\/\/[^\/]*/);return!m||(m[0]=='#{protocol}//#{domain}#{port}'.interpolate({protocol:location.protocol,domain:document.domain,port:location.port?':'+ location.port:''}));},getHeader:function(name){try{return this.transport.getResponseHeader(name)||null;}catch(e){return null;}},evalResponse:function(){try{return eval((this.transport.responseText||'').unfilterJSON());}catch(e){this.dispatchException(e);}},dispatchException:function(exception){(this.options.onException||Prototype.emptyFunction)(this,exception);Ajax.Responders.dispatch('onException',this,exception);}});Ajax.Request.Events=['Uninitialized','Loading','Loaded','Interactive','Complete'];Ajax.Response=Class.create({initialize:function(request){this.request=request;var transport=this.transport=request.transport,readyState=this.readyState=transport.readyState;if((readyState>2&&!Prototype.Browser.IE)||readyState==4){this.status=this.getStatus();this.statusText=this.getStatusText();this.responseText=String.interpret(transport.responseText);this.headerJSON=this._getHeaderJSON();}
if(readyState==4){var xml=transport.responseXML;this.responseXML=Object.isUndefined(xml)?null:xml;this.responseJSON=this._getResponseJSON();}},status:0,statusText:'',getStatus:Ajax.Request.prototype.getStatus,getStatusText:function(){try{return this.transport.statusText||'';}catch(e){return''}},getHeader:Ajax.Request.prototype.getHeader,getAllHeaders:function(){try{return this.getAllResponseHeaders();}catch(e){return null}},getResponseHeader:function(name){return this.transport.getResponseHeader(name);},getAllResponseHeaders:function(){return this.transport.getAllResponseHeaders();},_getHeaderJSON:function(){var json=this.getHeader('X-JSON');if(!json)return null;json=decodeURIComponent(escape(json));try{return json.evalJSON(this.request.options.sanitizeJSON||!this.request.isSameOrigin());}catch(e){this.request.dispatchException(e);}},_getResponseJSON:function(){var options=this.request.options;if(!options.evalJSON||(options.evalJSON!='force'&&!(this.getHeader('Content-type')||'').include('application/json'))||this.responseText.blank())
return null;try{return this.responseText.evalJSON(options.sanitizeJSON||!this.request.isSameOrigin());}catch(e){this.request.dispatchException(e);}}});Ajax.Updater=Class.create(Ajax.Request,{initialize:function($super,container,url,options){this.container={success:(container.success||container),failure:(container.failure||(container.success?null:container))};options=Object.clone(options);var onComplete=options.onComplete;options.onComplete=(function(response,json){this.updateContent(response.responseText);if(Object.isFunction(onComplete))onComplete(response,json);}).bind(this);$super(url,options);},updateContent:function(responseText){var receiver=this.container[this.success()?'success':'failure'],options=this.options;if(!options.evalScripts)responseText=responseText.stripScripts();if(receiver=$(receiver)){if(options.insertion){if(Object.isString(options.insertion)){var insertion={};insertion[options.insertion]=responseText;receiver.insert(insertion);}
else options.insertion(receiver,responseText);}
else receiver.update(responseText);}}});Ajax.PeriodicalUpdater=Class.create(Ajax.Base,{initialize:function($super,container,url,options){$super(options);this.onComplete=this.options.onComplete;this.frequency=(this.options.frequency||2);this.decay=(this.options.decay||1);this.updater={};this.container=container;this.url=url;this.start();},start:function(){this.options.onComplete=this.updateComplete.bind(this);this.onTimerEvent();},stop:function(){this.updater.options.onComplete=undefined;clearTimeout(this.timer);(this.onComplete||Prototype.emptyFunction).apply(this,arguments);},updateComplete:function(response){if(this.options.decay){this.decay=(response.responseText==this.lastText?this.decay*this.options.decay:1);this.lastText=response.responseText;}
this.timer=this.onTimerEvent.bind(this).delay(this.decay*this.frequency);},onTimerEvent:function(){this.updater=new Ajax.Updater(this.container,this.url,this.options);}});function $(element){if(arguments.length>1){for(var i=0,elements=[],length=arguments.length;i<length;i++)
elements.push($(arguments[i]));return elements;}
if(Object.isString(element))
element=document.getElementById(element);return Element.extend(element);}
if(Prototype.BrowserFeatures.XPath){document._getElementsByXPath=function(expression,parentElement){var results=[];var query=document.evaluate(expression,$(parentElement)||document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);for(var i=0,length=query.snapshotLength;i<length;i++)
results.push(Element.extend(query.snapshotItem(i)));return results;};}
if(!Node)var Node={};if(!Node.ELEMENT_NODE){Object.extend(Node,{ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12});}
(function(global){function shouldUseCache(tagName,attributes){if(tagName==='select')return false;if('type'in attributes)return false;return true;}
var HAS_EXTENDED_CREATE_ELEMENT_SYNTAX=(function(){try{var el=document.createElement('<input name="x">');return el.tagName.toLowerCase()==='input'&&el.name==='x';}
catch(err){return false;}})();var element=global.Element;global.Element=function(tagName,attributes){attributes=attributes||{};tagName=tagName.toLowerCase();var cache=Element.cache;if(HAS_EXTENDED_CREATE_ELEMENT_SYNTAX&&attributes.name){tagName='<'+ tagName+' name="'+ attributes.name+'">';delete attributes.name;return Element.writeAttribute(document.createElement(tagName),attributes);}
if(!cache[tagName])cache[tagName]=Element.extend(document.createElement(tagName));var node=shouldUseCache(tagName,attributes)?cache[tagName].cloneNode(false):document.createElement(tagName);return Element.writeAttribute(node,attributes);};Object.extend(global.Element,element||{});if(element)global.Element.prototype=element.prototype;})(this);Element.idCounter=1;Element.cache={};Element._purgeElement=function(element){var uid=element._prototypeUID;if(uid){Element.stopObserving(element);element._prototypeUID=void 0;delete Element.Storage[uid];}}
Element.Methods={visible:function(element){return $(element).style.display!='none';},toggle:function(element){element=$(element);Element[Element.visible(element)?'hide':'show'](element);return element;},hide:function(element){element=$(element);element.style.display='none';return element;},show:function(element){element=$(element);element.style.display='';return element;},remove:function(element){element=$(element);element.parentNode.removeChild(element);return element;},update:(function(){var SELECT_ELEMENT_INNERHTML_BUGGY=(function(){var el=document.createElement("select"),isBuggy=true;el.innerHTML="<option value=\"test\">test</option>";if(el.options&&el.options[0]){isBuggy=el.options[0].nodeName.toUpperCase()!=="OPTION";}
el=null;return isBuggy;})();var TABLE_ELEMENT_INNERHTML_BUGGY=(function(){try{var el=document.createElement("table");if(el&&el.tBodies){el.innerHTML="<tbody><tr><td>test</td></tr></tbody>";var isBuggy=typeof el.tBodies[0]=="undefined";el=null;return isBuggy;}}catch(e){return true;}})();var LINK_ELEMENT_INNERHTML_BUGGY=(function(){try{var el=document.createElement('div');el.innerHTML="<link>";var isBuggy=(el.childNodes.length===0);el=null;return isBuggy;}catch(e){return true;}})();var ANY_INNERHTML_BUGGY=SELECT_ELEMENT_INNERHTML_BUGGY||TABLE_ELEMENT_INNERHTML_BUGGY||LINK_ELEMENT_INNERHTML_BUGGY;var SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING=(function(){var s=document.createElement("script"),isBuggy=false;try{s.appendChild(document.createTextNode(""));isBuggy=!s.firstChild||s.firstChild&&s.firstChild.nodeType!==3;}catch(e){isBuggy=true;}
s=null;return isBuggy;})();function update(element,content){element=$(element);var purgeElement=Element._purgeElement;var descendants=element.getElementsByTagName('*'),i=descendants.length;while(i--)purgeElement(descendants[i]);if(content&&content.toElement)
content=content.toElement();if(Object.isElement(content))
return element.update().insert(content);content=Object.toHTML(content);var tagName=element.tagName.toUpperCase();if(tagName==='SCRIPT'&&SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING){element.text=content;return element;}
if(ANY_INNERHTML_BUGGY){if(tagName in Element._insertionTranslations.tags){while(element.firstChild){element.removeChild(element.firstChild);}
Element._getContentFromAnonymousElement(tagName,content.stripScripts()).each(function(node){element.appendChild(node)});}else if(LINK_ELEMENT_INNERHTML_BUGGY&&Object.isString(content)&&content.indexOf('<link')>-1){while(element.firstChild){element.removeChild(element.firstChild);}
var nodes=Element._getContentFromAnonymousElement(tagName,content.stripScripts(),true);nodes.each(function(node){element.appendChild(node)});}
else{element.innerHTML=content.stripScripts();}}
else{element.innerHTML=content.stripScripts();}
content.evalScripts.bind(content).defer();return element;}
return update;})(),replace:function(element,content){element=$(element);if(content&&content.toElement)content=content.toElement();else if(!Object.isElement(content)){content=Object.toHTML(content);var range=element.ownerDocument.createRange();range.selectNode(element);content.evalScripts.bind(content).defer();content=range.createContextualFragment(content.stripScripts());}
element.parentNode.replaceChild(content,element);return element;},insert:function(element,insertions){element=$(element);if(Object.isString(insertions)||Object.isNumber(insertions)||Object.isElement(insertions)||(insertions&&(insertions.toElement||insertions.toHTML)))
insertions={bottom:insertions};var content,insert,tagName,childNodes;for(var position in insertions){content=insertions[position];position=position.toLowerCase();insert=Element._insertionTranslations[position];if(content&&content.toElement)content=content.toElement();if(Object.isElement(content)){insert(element,content);continue;}
content=Object.toHTML(content);tagName=((position=='before'||position=='after')?element.parentNode:element).tagName.toUpperCase();childNodes=Element._getContentFromAnonymousElement(tagName,content.stripScripts());if(position=='top'||position=='after')childNodes.reverse();childNodes.each(insert.curry(element));content.evalScripts.bind(content).defer();}
return element;},wrap:function(element,wrapper,attributes){element=$(element);if(Object.isElement(wrapper))
$(wrapper).writeAttribute(attributes||{});else if(Object.isString(wrapper))wrapper=new Element(wrapper,attributes);else wrapper=new Element('div',wrapper);if(element.parentNode)
element.parentNode.replaceChild(wrapper,element);wrapper.appendChild(element);return wrapper;},inspect:function(element){element=$(element);var result='<'+ element.tagName.toLowerCase();$H({'id':'id','className':'class'}).each(function(pair){var property=pair.first(),attribute=pair.last(),value=(element[property]||'').toString();if(value)result+=' '+ attribute+'='+ value.inspect(true);});return result+'>';},recursivelyCollect:function(element,property,maximumLength){element=$(element);maximumLength=maximumLength||-1;var elements=[];while(element=element[property]){if(element.nodeType==1)
elements.push(Element.extend(element));if(elements.length==maximumLength)
break;}
return elements;},ancestors:function(element){return Element.recursivelyCollect(element,'parentNode');},descendants:function(element){return Element.select(element,"*");},firstDescendant:function(element){element=$(element).firstChild;while(element&&element.nodeType!=1)element=element.nextSibling;return $(element);},immediateDescendants:function(element){var results=[],child=$(element).firstChild;while(child){if(child.nodeType===1){results.push(Element.extend(child));}
child=child.nextSibling;}
return results;},previousSiblings:function(element,maximumLength){return Element.recursivelyCollect(element,'previousSibling');},nextSiblings:function(element){return Element.recursivelyCollect(element,'nextSibling');},siblings:function(element){element=$(element);return Element.previousSiblings(element).reverse().concat(Element.nextSiblings(element));},match:function(element,selector){element=$(element);if(Object.isString(selector))
return Prototype.Selector.match(element,selector);return selector.match(element);},up:function(element,expression,index){element=$(element);if(arguments.length==1)return $(element.parentNode);var ancestors=Element.ancestors(element);return Object.isNumber(expression)?ancestors[expression]:Prototype.Selector.find(ancestors,expression,index);},down:function(element,expression,index){element=$(element);if(arguments.length==1)return Element.firstDescendant(element);return Object.isNumber(expression)?Element.descendants(element)[expression]:Element.select(element,expression)[index||0];},previous:function(element,expression,index){element=$(element);if(Object.isNumber(expression))index=expression,expression=false;if(!Object.isNumber(index))index=0;if(expression){return Prototype.Selector.find(element.previousSiblings(),expression,index);}else{return element.recursivelyCollect("previousSibling",index+ 1)[index];}},next:function(element,expression,index){element=$(element);if(Object.isNumber(expression))index=expression,expression=false;if(!Object.isNumber(index))index=0;if(expression){return Prototype.Selector.find(element.nextSiblings(),expression,index);}else{var maximumLength=Object.isNumber(index)?index+ 1:1;return element.recursivelyCollect("nextSibling",index+ 1)[index];}},select:function(element){element=$(element);var expressions=Array.prototype.slice.call(arguments,1).join(', ');return Prototype.Selector.select(expressions,element);},adjacent:function(element){element=$(element);var expressions=Array.prototype.slice.call(arguments,1).join(', ');return Prototype.Selector.select(expressions,element.parentNode).without(element);},identify:function(element){element=$(element);var id=Element.readAttribute(element,'id');if(id)return id;do{id='anonymous_element_'+ Element.idCounter++}while($(id));Element.writeAttribute(element,'id',id);return id;},readAttribute:function(element,name){element=$(element);if(Prototype.Browser.IE){var t=Element._attributeTranslations.read;if(t.values[name])return t.values[name](element,name);if(t.names[name])name=t.names[name];if(name.include(':')){return(!element.attributes||!element.attributes[name])?null:element.attributes[name].value;}}
return element.getAttribute(name);},writeAttribute:function(element,name,value){element=$(element);var attributes={},t=Element._attributeTranslations.write;if(typeof name=='object')attributes=name;else attributes[name]=Object.isUndefined(value)?true:value;for(var attr in attributes){name=t.names[attr]||attr;value=attributes[attr];if(t.values[attr])name=t.values[attr](element,value);if(value===false||value===null)
element.removeAttribute(name);else if(value===true)
element.setAttribute(name,name);else element.setAttribute(name,value);}
return element;},getHeight:function(element){return Element.getDimensions(element).height;},getWidth:function(element){return Element.getDimensions(element).width;},classNames:function(element){return new Element.ClassNames(element);},hasClassName:function(element,className){if(!(element=$(element)))return;var elementClassName=element.className;return(elementClassName.length>0&&(elementClassName==className||new RegExp("(^|\\s)"+ className+"(\\s|$)").test(elementClassName)));},addClassName:function(element,className){if(!(element=$(element)))return;if(!Element.hasClassName(element,className))
element.className+=(element.className?' ':'')+ className;return element;},removeClassName:function(element,className){if(!(element=$(element)))return;element.className=element.className.replace(new RegExp("(^|\\s+)"+ className+"(\\s+|$)"),' ').strip();return element;},toggleClassName:function(element,className){if(!(element=$(element)))return;return Element[Element.hasClassName(element,className)?'removeClassName':'addClassName'](element,className);},cleanWhitespace:function(element){element=$(element);var node=element.firstChild;while(node){var nextNode=node.nextSibling;if(node.nodeType==3&&!/\S/.test(node.nodeValue))
element.removeChild(node);node=nextNode;}
return element;},empty:function(element){return $(element).innerHTML.blank();},descendantOf:function(element,ancestor){element=$(element),ancestor=$(ancestor);if(element.compareDocumentPosition)
return(element.compareDocumentPosition(ancestor)&8)===8;if(ancestor.contains)
return ancestor.contains(element)&&ancestor!==element;while(element=element.parentNode)
if(element==ancestor)return true;return false;},scrollTo:function(element){element=$(element);var pos=Element.cumulativeOffset(element);window.scrollTo(pos[0],pos[1]);return element;},getStyle:function(element,style){element=$(element);style=style=='float'?'cssFloat':style.camelize();var value=element.style[style];if(!value||value=='auto'){var css=document.defaultView.getComputedStyle(element,null);value=css?css[style]:null;}
if(style=='opacity')return value?parseFloat(value):1.0;return value=='auto'?null:value;},getOpacity:function(element){return $(element).getStyle('opacity');},setStyle:function(element,styles){element=$(element);var elementStyle=element.style,match;if(Object.isString(styles)){element.style.cssText+=';'+ styles;return styles.include('opacity')?element.setOpacity(styles.match(/opacity:\s*(\d?\.?\d*)/)[1]):element;}
for(var property in styles)
if(property=='opacity')element.setOpacity(styles[property]);else
elementStyle[(property=='float'||property=='cssFloat')?(Object.isUndefined(elementStyle.styleFloat)?'cssFloat':'styleFloat'):property]=styles[property];return element;},setOpacity:function(element,value){element=$(element);element.style.opacity=(value==1||value==='')?'':(value<0.00001)?0:value;return element;},makePositioned:function(element){element=$(element);var pos=Element.getStyle(element,'position');if(pos=='static'||!pos){element._madePositioned=true;element.style.position='relative';if(Prototype.Browser.Opera){element.style.top=0;element.style.left=0;}}
return element;},undoPositioned:function(element){element=$(element);if(element._madePositioned){element._madePositioned=undefined;element.style.position=element.style.top=element.style.left=element.style.bottom=element.style.right='';}
return element;},makeClipping:function(element){element=$(element);if(element._overflow)return element;element._overflow=Element.getStyle(element,'overflow')||'auto';if(element._overflow!=='hidden')
element.style.overflow='hidden';return element;},undoClipping:function(element){element=$(element);if(!element._overflow)return element;element.style.overflow=element._overflow=='auto'?'':element._overflow;element._overflow=null;return element;},clonePosition:function(element,source){var options=Object.extend({setLeft:true,setTop:true,setWidth:true,setHeight:true,offsetTop:0,offsetLeft:0},arguments[2]||{});source=$(source);var p=Element.viewportOffset(source),delta=[0,0],parent=null;element=$(element);if(Element.getStyle(element,'position')=='absolute'){parent=Element.getOffsetParent(element);delta=Element.viewportOffset(parent);}
if(parent==document.body){delta[0]-=document.body.offsetLeft;delta[1]-=document.body.offsetTop;}
if(options.setLeft)element.style.left=(p[0]- delta[0]+ options.offsetLeft)+'px';if(options.setTop)element.style.top=(p[1]- delta[1]+ options.offsetTop)+'px';if(options.setWidth)element.style.width=source.offsetWidth+'px';if(options.setHeight)element.style.height=source.offsetHeight+'px';return element;}};Object.extend(Element.Methods,{getElementsBySelector:Element.Methods.select,childElements:Element.Methods.immediateDescendants});Element._attributeTranslations={write:{names:{className:'class',htmlFor:'for'},values:{}}};if(Prototype.Browser.Opera){Element.Methods.getStyle=Element.Methods.getStyle.wrap(function(proceed,element,style){switch(style){case'height':case'width':if(!Element.visible(element))return null;var dim=parseInt(proceed(element,style),10);if(dim!==element['offset'+ style.capitalize()])
return dim+'px';var properties;if(style==='height'){properties=['border-top-width','padding-top','padding-bottom','border-bottom-width'];}
else{properties=['border-left-width','padding-left','padding-right','border-right-width'];}
return properties.inject(dim,function(memo,property){var val=proceed(element,property);return val===null?memo:memo- parseInt(val,10);})+'px';default:return proceed(element,style);}});Element.Methods.readAttribute=Element.Methods.readAttribute.wrap(function(proceed,element,attribute){if(attribute==='title')return element.title;return proceed(element,attribute);});}
else if(Prototype.Browser.IE){Element.Methods.getStyle=function(element,style){element=$(element);style=(style=='float'||style=='cssFloat')?'styleFloat':style.camelize();var value=element.style[style];if(!value&&element.currentStyle)value=element.currentStyle[style];if(style=='opacity'){if(value=(element.getStyle('filter')||'').match(/alpha\(opacity=(.*)\)/))
if(value[1])return parseFloat(value[1])/ 100;
return 1.0;}
if(value=='auto'){if((style=='width'||style=='height')&&(element.getStyle('display')!='none'))
return element['offset'+ style.capitalize()]+'px';return null;}
return value;};Element.Methods.setOpacity=function(element,value){function stripAlpha(filter){return filter.replace(/alpha\([^\)]*\)/gi,'');}
element=$(element);var currentStyle=element.currentStyle;if((currentStyle&&!currentStyle.hasLayout)||(!currentStyle&&element.style.zoom=='normal'))
element.style.zoom=1;var filter=element.getStyle('filter'),style=element.style;if(value==1||value===''){(filter=stripAlpha(filter))?style.filter=filter:style.removeAttribute('filter');return element;}else if(value<0.00001)value=0;style.filter=stripAlpha(filter)+'alpha(opacity='+(value*100)+')';return element;};Element._attributeTranslations=(function(){var classProp='className',forProp='for',el=document.createElement('div');el.setAttribute(classProp,'x');if(el.className!=='x'){el.setAttribute('class','x');if(el.className==='x'){classProp='class';}}
el=null;el=document.createElement('label');el.setAttribute(forProp,'x');if(el.htmlFor!=='x'){el.setAttribute('htmlFor','x');if(el.htmlFor==='x'){forProp='htmlFor';}}
el=null;return{read:{names:{'class':classProp,'className':classProp,'for':forProp,'htmlFor':forProp},values:{_getAttr:function(element,attribute){return element.getAttribute(attribute);},_getAttr2:function(element,attribute){return element.getAttribute(attribute,2);},_getAttrNode:function(element,attribute){var node=element.getAttributeNode(attribute);return node?node.value:"";},_getEv:(function(){var el=document.createElement('div'),f;el.onclick=Prototype.emptyFunction;var value=el.getAttribute('onclick');if(String(value).indexOf('{')>-1){f=function(element,attribute){attribute=element.getAttribute(attribute);if(!attribute)return null;attribute=attribute.toString();attribute=attribute.split('{')[1];attribute=attribute.split('}')[0];return attribute.strip();};}
else if(value===''){f=function(element,attribute){attribute=element.getAttribute(attribute);if(!attribute)return null;return attribute.strip();};}
el=null;return f;})(),_flag:function(element,attribute){return $(element).hasAttribute(attribute)?attribute:null;},style:function(element){return element.style.cssText.toLowerCase();},title:function(element){return element.title;}}}}})();Element._attributeTranslations.write={names:Object.extend({cellpadding:'cellPadding',cellspacing:'cellSpacing'},Element._attributeTranslations.read.names),values:{checked:function(element,value){element.checked=!!value;},style:function(element,value){element.style.cssText=value?value:'';}}};Element._attributeTranslations.has={};$w('colSpan rowSpan vAlign dateTime accessKey tabIndex '+'encType maxLength readOnly longDesc frameBorder').each(function(attr){Element._attributeTranslations.write.names[attr.toLowerCase()]=attr;Element._attributeTranslations.has[attr.toLowerCase()]=attr;});(function(v){Object.extend(v,{href:v._getAttr2,src:v._getAttr2,type:v._getAttr,action:v._getAttrNode,disabled:v._flag,checked:v._flag,readonly:v._flag,multiple:v._flag,onload:v._getEv,onunload:v._getEv,onclick:v._getEv,ondblclick:v._getEv,onmousedown:v._getEv,onmouseup:v._getEv,onmouseover:v._getEv,onmousemove:v._getEv,onmouseout:v._getEv,onfocus:v._getEv,onblur:v._getEv,onkeypress:v._getEv,onkeydown:v._getEv,onkeyup:v._getEv,onsubmit:v._getEv,onreset:v._getEv,onselect:v._getEv,onchange:v._getEv});})(Element._attributeTranslations.read.values);if(Prototype.BrowserFeatures.ElementExtensions){(function(){function _descendants(element){var nodes=element.getElementsByTagName('*'),results=[];for(var i=0,node;node=nodes[i];i++)
if(node.tagName!=="!")
results.push(node);return results;}
Element.Methods.down=function(element,expression,index){element=$(element);if(arguments.length==1)return element.firstDescendant();return Object.isNumber(expression)?_descendants(element)[expression]:Element.select(element,expression)[index||0];}})();}}
else if(Prototype.Browser.Gecko&&/rv:1\.8\.0/.test(navigator.userAgent)){Element.Methods.setOpacity=function(element,value){element=$(element);element.style.opacity=(value==1)?0.999999:(value==='')?'':(value<0.00001)?0:value;return element;};}
else if(Prototype.Browser.WebKit){Element.Methods.setOpacity=function(element,value){element=$(element);element.style.opacity=(value==1||value==='')?'':(value<0.00001)?0:value;if(value==1)
if(element.tagName.toUpperCase()=='IMG'&&element.width){element.width++;element.width--;}else try{var n=document.createTextNode(' ');element.appendChild(n);element.removeChild(n);}catch(e){}
return element;};}
if('outerHTML'in document.documentElement){Element.Methods.replace=function(element,content){element=$(element);if(content&&content.toElement)content=content.toElement();if(Object.isElement(content)){element.parentNode.replaceChild(content,element);return element;}
content=Object.toHTML(content);var parent=element.parentNode,tagName=parent.tagName.toUpperCase();if(Element._insertionTranslations.tags[tagName]){var nextSibling=element.next(),fragments=Element._getContentFromAnonymousElement(tagName,content.stripScripts());parent.removeChild(element);if(nextSibling)
fragments.each(function(node){parent.insertBefore(node,nextSibling)});else
fragments.each(function(node){parent.appendChild(node)});}
else element.outerHTML=content.stripScripts();content.evalScripts.bind(content).defer();return element;};}
Element._returnOffset=function(l,t){var result=[l,t];result.left=l;result.top=t;return result;};Element._getContentFromAnonymousElement=function(tagName,html,force){var div=new Element('div'),t=Element._insertionTranslations.tags[tagName];var workaround=false;if(t)workaround=true;else if(force){workaround=true;t=['','',0];}
if(workaround){div.innerHTML='&nbsp;'+ t[0]+ html+ t[1];div.removeChild(div.firstChild);for(var i=t[2];i--;){div=div.firstChild;}}
else{div.innerHTML=html;}
return $A(div.childNodes);};Element._insertionTranslations={before:function(element,node){element.parentNode.insertBefore(node,element);},top:function(element,node){element.insertBefore(node,element.firstChild);},bottom:function(element,node){element.appendChild(node);},after:function(element,node){element.parentNode.insertBefore(node,element.nextSibling);},tags:{TABLE:['<table>','</table>',1],TBODY:['<table><tbody>','</tbody></table>',2],TR:['<table><tbody><tr>','</tr></tbody></table>',3],TD:['<table><tbody><tr><td>','</td></tr></tbody></table>',4],SELECT:['<select>','</select>',1]}};(function(){var tags=Element._insertionTranslations.tags;Object.extend(tags,{THEAD:tags.TBODY,TFOOT:tags.TBODY,TH:tags.TD});})();Element.Methods.Simulated={hasAttribute:function(element,attribute){attribute=Element._attributeTranslations.has[attribute]||attribute;var node=$(element).getAttributeNode(attribute);return!!(node&&node.specified);}};Element.Methods.ByTag={};Object.extend(Element,Element.Methods);(function(div){if(!Prototype.BrowserFeatures.ElementExtensions&&div['__proto__']){window.HTMLElement={};window.HTMLElement.prototype=div['__proto__'];Prototype.BrowserFeatures.ElementExtensions=true;}
div=null;})(document.createElement('div'));Element.extend=(function(){function checkDeficiency(tagName){if(typeof window.Element!='undefined'){var proto=window.Element.prototype;if(proto){var id='_'+(Math.random()+'').slice(2),el=document.createElement(tagName);proto[id]='x';var isBuggy=(el[id]!=='x');delete proto[id];el=null;return isBuggy;}}
return false;}
function extendElementWith(element,methods){for(var property in methods){var value=methods[property];if(Object.isFunction(value)&&!(property in element))
element[property]=value.methodize();}}
var HTMLOBJECTELEMENT_PROTOTYPE_BUGGY=checkDeficiency('object');if(Prototype.BrowserFeatures.SpecificElementExtensions){if(HTMLOBJECTELEMENT_PROTOTYPE_BUGGY){return function(element){if(element&&typeof element._extendedByPrototype=='undefined'){var t=element.tagName;if(t&&(/^(?:object|applet|embed)$/i.test(t))){extendElementWith(element,Element.Methods);extendElementWith(element,Element.Methods.Simulated);extendElementWith(element,Element.Methods.ByTag[t.toUpperCase()]);}}
return element;}}
return Prototype.K;}
var Methods={},ByTag=Element.Methods.ByTag;var extend=Object.extend(function(element){if(!element||typeof element._extendedByPrototype!='undefined'||element.nodeType!=1||element==window)return element;var methods=Object.clone(Methods),tagName=element.tagName.toUpperCase();if(ByTag[tagName])Object.extend(methods,ByTag[tagName]);extendElementWith(element,methods);element._extendedByPrototype=Prototype.emptyFunction;return element;},{refresh:function(){if(!Prototype.BrowserFeatures.ElementExtensions){Object.extend(Methods,Element.Methods);Object.extend(Methods,Element.Methods.Simulated);}}});extend.refresh();return extend;})();if(document.documentElement.hasAttribute){Element.hasAttribute=function(element,attribute){return element.hasAttribute(attribute);};}
else{Element.hasAttribute=Element.Methods.Simulated.hasAttribute;}
Element.addMethods=function(methods){var F=Prototype.BrowserFeatures,T=Element.Methods.ByTag;if(!methods){Object.extend(Form,Form.Methods);Object.extend(Form.Element,Form.Element.Methods);Object.extend(Element.Methods.ByTag,{"FORM":Object.clone(Form.Methods),"INPUT":Object.clone(Form.Element.Methods),"SELECT":Object.clone(Form.Element.Methods),"TEXTAREA":Object.clone(Form.Element.Methods),"BUTTON":Object.clone(Form.Element.Methods)});}
if(arguments.length==2){var tagName=methods;methods=arguments[1];}
if(!tagName)Object.extend(Element.Methods,methods||{});else{if(Object.isArray(tagName))tagName.each(extend);else extend(tagName);}
function extend(tagName){tagName=tagName.toUpperCase();if(!Element.Methods.ByTag[tagName])
Element.Methods.ByTag[tagName]={};Object.extend(Element.Methods.ByTag[tagName],methods);}
function copy(methods,destination,onlyIfAbsent){onlyIfAbsent=onlyIfAbsent||false;for(var property in methods){var value=methods[property];if(!Object.isFunction(value))continue;if(!onlyIfAbsent||!(property in destination))
destination[property]=value.methodize();}}
function findDOMClass(tagName){var klass;var trans={"OPTGROUP":"OptGroup","TEXTAREA":"TextArea","P":"Paragraph","FIELDSET":"FieldSet","UL":"UList","OL":"OList","DL":"DList","DIR":"Directory","H1":"Heading","H2":"Heading","H3":"Heading","H4":"Heading","H5":"Heading","H6":"Heading","Q":"Quote","INS":"Mod","DEL":"Mod","A":"Anchor","IMG":"Image","CAPTION":"TableCaption","COL":"TableCol","COLGROUP":"TableCol","THEAD":"TableSection","TFOOT":"TableSection","TBODY":"TableSection","TR":"TableRow","TH":"TableCell","TD":"TableCell","FRAMESET":"FrameSet","IFRAME":"IFrame"};if(trans[tagName])klass='HTML'+ trans[tagName]+'Element';if(window[klass])return window[klass];klass='HTML'+ tagName+'Element';if(window[klass])return window[klass];klass='HTML'+ tagName.capitalize()+'Element';if(window[klass])return window[klass];var element=document.createElement(tagName),proto=element['__proto__']||element.constructor.prototype;element=null;return proto;}
var elementPrototype=window.HTMLElement?HTMLElement.prototype:Element.prototype;if(F.ElementExtensions){copy(Element.Methods,elementPrototype);copy(Element.Methods.Simulated,elementPrototype,true);}
if(F.SpecificElementExtensions){for(var tag in Element.Methods.ByTag){var klass=findDOMClass(tag);if(Object.isUndefined(klass))continue;copy(T[tag],klass.prototype);}}
Object.extend(Element,Element.Methods);delete Element.ByTag;if(Element.extend.refresh)Element.extend.refresh();Element.cache={};};document.viewport={getDimensions:function(){return{width:this.getWidth(),height:this.getHeight()};},getScrollOffsets:function(){return Element._returnOffset(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop);}};(function(viewport){var B=Prototype.Browser,doc=document,element,property={};function getRootElement(){if(B.WebKit&&!doc.evaluate)
return document;if(B.Opera&&window.parseFloat(window.opera.version())<9.5)
return document.body;return document.documentElement;}
function define(D){if(!element)element=getRootElement();property[D]='client'+ D;viewport['get'+ D]=function(){return element[property[D]]};return viewport['get'+ D]();}
viewport.getWidth=define.curry('Width');viewport.getHeight=define.curry('Height');})(document.viewport);Element.Storage={UID:1};Element.addMethods({getStorage:function(element){if(!(element=$(element)))return;var uid;if(element===window){uid=0;}else{if(typeof element._prototypeUID==="undefined")
element._prototypeUID=Element.Storage.UID++;uid=element._prototypeUID;}
if(!Element.Storage[uid])
Element.Storage[uid]=$H();return Element.Storage[uid];},store:function(element,key,value){if(!(element=$(element)))return;if(arguments.length===2){Element.getStorage(element).update(key);}else{Element.getStorage(element).set(key,value);}
return element;},retrieve:function(element,key,defaultValue){if(!(element=$(element)))return;var hash=Element.getStorage(element),value=hash.get(key);if(Object.isUndefined(value)){hash.set(key,defaultValue);value=defaultValue;}
return value;},clone:function(element,deep){if(!(element=$(element)))return;var clone=element.cloneNode(deep);clone._prototypeUID=void 0;if(deep){var descendants=Element.select(clone,'*'),i=descendants.length;while(i--){descendants[i]._prototypeUID=void 0;}}
return Element.extend(clone);},purge:function(element){if(!(element=$(element)))return;var purgeElement=Element._purgeElement;purgeElement(element);var descendants=element.getElementsByTagName('*'),i=descendants.length;while(i--)purgeElement(descendants[i]);return null;}});(function(){function toDecimal(pctString){var match=pctString.match(/^(\d+)%?$/i);if(!match)return null;return(Number(match[1])/ 100);
}
function getPixelValue(value,property,context){var element=null;if(Object.isElement(value)){element=value;value=element.getStyle(property);}
if(value===null){return null;}
if((/^(?:-)?\d+(\.\d+)?(px)?$/i).test(value)){return window.parseFloat(value);}
var isPercentage=value.include('%'),isViewport=(context===document.viewport);if(/\d/.test(value)&&element&&element.runtimeStyle&&!(isPercentage&&isViewport)){var style=element.style.left,rStyle=element.runtimeStyle.left;element.runtimeStyle.left=element.currentStyle.left;element.style.left=value||0;value=element.style.pixelLeft;element.style.left=style;element.runtimeStyle.left=rStyle;return value;}
if(element&&isPercentage){context=context||element.parentNode;var decimal=toDecimal(value);var whole=null;var position=element.getStyle('position');var isHorizontal=property.include('left')||property.include('right')||property.include('width');var isVertical=property.include('top')||property.include('bottom')||property.include('height');if(context===document.viewport){if(isHorizontal){whole=document.viewport.getWidth();}else if(isVertical){whole=document.viewport.getHeight();}}else{if(isHorizontal){whole=$(context).measure('width');}else if(isVertical){whole=$(context).measure('height');}}
return(whole===null)?0:whole*decimal;}
return 0;}
function toCSSPixels(number){if(Object.isString(number)&&number.endsWith('px')){return number;}
return number+'px';}
function isDisplayed(element){var originalElement=element;while(element&&element.parentNode){var display=element.getStyle('display');if(display==='none'){return false;}
element=$(element.parentNode);}
return true;}
var hasLayout=Prototype.K;if('currentStyle'in document.documentElement){hasLayout=function(element){if(!element.currentStyle.hasLayout){element.style.zoom=1;}
return element;};}
function cssNameFor(key){if(key.include('border'))key=key+'-width';return key.camelize();}
Element.Layout=Class.create(Hash,{initialize:function($super,element,preCompute){$super();this.element=$(element);Element.Layout.PROPERTIES.each(function(property){this._set(property,null);},this);if(preCompute){this._preComputing=true;this._begin();Element.Layout.PROPERTIES.each(this._compute,this);this._end();this._preComputing=false;}},_set:function(property,value){return Hash.prototype.set.call(this,property,value);},set:function(property,value){throw"Properties of Element.Layout are read-only.";},get:function($super,property){var value=$super(property);return value===null?this._compute(property):value;},_begin:function(){if(this._prepared)return;var element=this.element;if(isDisplayed(element)){this._prepared=true;return;}
var originalStyles={position:element.style.position||'',width:element.style.width||'',visibility:element.style.visibility||'',display:element.style.display||''};element.store('prototype_original_styles',originalStyles);var position=element.getStyle('position'),width=element.getStyle('width');if(width==="0px"||width===null){element.style.display='block';width=element.getStyle('width');}
var context=(position==='fixed')?document.viewport:element.parentNode;element.setStyle({position:'absolute',visibility:'hidden',display:'block'});var positionedWidth=element.getStyle('width');var newWidth;if(width&&(positionedWidth===width)){newWidth=getPixelValue(element,'width',context);}else if(position==='absolute'||position==='fixed'){newWidth=getPixelValue(element,'width',context);}else{var parent=element.parentNode,pLayout=$(parent).getLayout();newWidth=pLayout.get('width')-
this.get('margin-left')-
this.get('border-left')-
this.get('padding-left')-
this.get('padding-right')-
this.get('border-right')-
this.get('margin-right');}
element.setStyle({width:newWidth+'px'});this._prepared=true;},_end:function(){var element=this.element;var originalStyles=element.retrieve('prototype_original_styles');element.store('prototype_original_styles',null);element.setStyle(originalStyles);this._prepared=false;},_compute:function(property){var COMPUTATIONS=Element.Layout.COMPUTATIONS;if(!(property in COMPUTATIONS)){throw"Property not found.";}
return this._set(property,COMPUTATIONS[property].call(this,this.element));},toObject:function(){var args=$A(arguments);var keys=(args.length===0)?Element.Layout.PROPERTIES:args.join(' ').split(' ');var obj={};keys.each(function(key){if(!Element.Layout.PROPERTIES.include(key))return;var value=this.get(key);if(value!=null)obj[key]=value;},this);return obj;},toHash:function(){var obj=this.toObject.apply(this,arguments);return new Hash(obj);},toCSS:function(){var args=$A(arguments);var keys=(args.length===0)?Element.Layout.PROPERTIES:args.join(' ').split(' ');var css={};keys.each(function(key){if(!Element.Layout.PROPERTIES.include(key))return;if(Element.Layout.COMPOSITE_PROPERTIES.include(key))return;var value=this.get(key);if(value!=null)css[cssNameFor(key)]=value+'px';},this);return css;},inspect:function(){return"#<Element.Layout>";}});Object.extend(Element.Layout,{PROPERTIES:$w('height width top left right bottom border-left border-right border-top border-bottom padding-left padding-right padding-top padding-bottom margin-top margin-bottom margin-left margin-right padding-box-width padding-box-height border-box-width border-box-height margin-box-width margin-box-height'),COMPOSITE_PROPERTIES:$w('padding-box-width padding-box-height margin-box-width margin-box-height border-box-width border-box-height'),COMPUTATIONS:{'height':function(element){if(!this._preComputing)this._begin();var bHeight=this.get('border-box-height');if(bHeight<=0){if(!this._preComputing)this._end();return 0;}
var bTop=this.get('border-top'),bBottom=this.get('border-bottom');var pTop=this.get('padding-top'),pBottom=this.get('padding-bottom');if(!this._preComputing)this._end();return bHeight- bTop- bBottom- pTop- pBottom;},'width':function(element){if(!this._preComputing)this._begin();var bWidth=this.get('border-box-width');if(bWidth<=0){if(!this._preComputing)this._end();return 0;}
var bLeft=this.get('border-left'),bRight=this.get('border-right');var pLeft=this.get('padding-left'),pRight=this.get('padding-right');if(!this._preComputing)this._end();return bWidth- bLeft- bRight- pLeft- pRight;},'padding-box-height':function(element){var height=this.get('height'),pTop=this.get('padding-top'),pBottom=this.get('padding-bottom');return height+ pTop+ pBottom;},'padding-box-width':function(element){var width=this.get('width'),pLeft=this.get('padding-left'),pRight=this.get('padding-right');return width+ pLeft+ pRight;},'border-box-height':function(element){if(!this._preComputing)this._begin();var height=element.offsetHeight;if(!this._preComputing)this._end();return height;},'border-box-width':function(element){if(!this._preComputing)this._begin();var width=element.offsetWidth;if(!this._preComputing)this._end();return width;},'margin-box-height':function(element){var bHeight=this.get('border-box-height'),mTop=this.get('margin-top'),mBottom=this.get('margin-bottom');if(bHeight<=0)return 0;return bHeight+ mTop+ mBottom;},'margin-box-width':function(element){var bWidth=this.get('border-box-width'),mLeft=this.get('margin-left'),mRight=this.get('margin-right');if(bWidth<=0)return 0;return bWidth+ mLeft+ mRight;},'top':function(element){var offset=element.positionedOffset();return offset.top;},'bottom':function(element){var offset=element.positionedOffset(),parent=element.getOffsetParent(),pHeight=parent.measure('height');var mHeight=this.get('border-box-height');return pHeight- mHeight- offset.top;},'left':function(element){var offset=element.positionedOffset();return offset.left;},'right':function(element){var offset=element.positionedOffset(),parent=element.getOffsetParent(),pWidth=parent.measure('width');var mWidth=this.get('border-box-width');return pWidth- mWidth- offset.left;},'padding-top':function(element){return getPixelValue(element,'paddingTop');},'padding-bottom':function(element){return getPixelValue(element,'paddingBottom');},'padding-left':function(element){return getPixelValue(element,'paddingLeft');},'padding-right':function(element){return getPixelValue(element,'paddingRight');},'border-top':function(element){return getPixelValue(element,'borderTopWidth');},'border-bottom':function(element){return getPixelValue(element,'borderBottomWidth');},'border-left':function(element){return getPixelValue(element,'borderLeftWidth');},'border-right':function(element){return getPixelValue(element,'borderRightWidth');},'margin-top':function(element){return getPixelValue(element,'marginTop');},'margin-bottom':function(element){return getPixelValue(element,'marginBottom');},'margin-left':function(element){return getPixelValue(element,'marginLeft');},'margin-right':function(element){return getPixelValue(element,'marginRight');}}});if('getBoundingClientRect'in document.documentElement){Object.extend(Element.Layout.COMPUTATIONS,{'right':function(element){var parent=hasLayout(element.getOffsetParent());var rect=element.getBoundingClientRect(),pRect=parent.getBoundingClientRect();return(pRect.right- rect.right).round();},'bottom':function(element){var parent=hasLayout(element.getOffsetParent());var rect=element.getBoundingClientRect(),pRect=parent.getBoundingClientRect();return(pRect.bottom- rect.bottom).round();}});}
Element.Offset=Class.create({initialize:function(left,top){this.left=left.round();this.top=top.round();this[0]=this.left;this[1]=this.top;},relativeTo:function(offset){return new Element.Offset(this.left- offset.left,this.top- offset.top);},inspect:function(){return"#<Element.Offset left: #{left} top: #{top}>".interpolate(this);},toString:function(){return"[#{left}, #{top}]".interpolate(this);},toArray:function(){return[this.left,this.top];}});function getLayout(element,preCompute){return new Element.Layout(element,preCompute);}
function measure(element,property){return $(element).getLayout().get(property);}
function getDimensions(element){element=$(element);var display=Element.getStyle(element,'display');if(display&&display!=='none'){return{width:element.offsetWidth,height:element.offsetHeight};}
var style=element.style;var originalStyles={visibility:style.visibility,position:style.position,display:style.display};var newStyles={visibility:'hidden',display:'block'};if(originalStyles.position!=='fixed')
newStyles.position='absolute';Element.setStyle(element,newStyles);var dimensions={width:element.offsetWidth,height:element.offsetHeight};Element.setStyle(element,originalStyles);return dimensions;}
function getOffsetParent(element){element=$(element);if(isDocument(element)||isDetached(element)||isBody(element)||isHtml(element))
return $(document.body);var isInline=(Element.getStyle(element,'display')==='inline');if(!isInline&&element.offsetParent)return $(element.offsetParent);while((element=element.parentNode)&&element!==document.body){if(Element.getStyle(element,'position')!=='static'){return isHtml(element)?$(document.body):$(element);}}
return $(document.body);}
function cumulativeOffset(element){element=$(element);var valueT=0,valueL=0;if(element.parentNode){do{valueT+=element.offsetTop||0;valueL+=element.offsetLeft||0;element=element.offsetParent;}while(element);}
return new Element.Offset(valueL,valueT);}
function positionedOffset(element){element=$(element);var layout=element.getLayout();var valueT=0,valueL=0;do{valueT+=element.offsetTop||0;valueL+=element.offsetLeft||0;element=element.offsetParent;if(element){if(isBody(element))break;var p=Element.getStyle(element,'position');if(p!=='static')break;}}while(element);valueL-=layout.get('margin-top');valueT-=layout.get('margin-left');return new Element.Offset(valueL,valueT);}
function cumulativeScrollOffset(element){var valueT=0,valueL=0;do{valueT+=element.scrollTop||0;valueL+=element.scrollLeft||0;element=element.parentNode;}while(element);return new Element.Offset(valueL,valueT);}
function viewportOffset(forElement){element=$(element);var valueT=0,valueL=0,docBody=document.body;var element=forElement;do{valueT+=element.offsetTop||0;valueL+=element.offsetLeft||0;if(element.offsetParent==docBody&&Element.getStyle(element,'position')=='absolute')break;}while(element=element.offsetParent);element=forElement;do{if(element!=docBody){valueT-=element.scrollTop||0;valueL-=element.scrollLeft||0;}}while(element=element.parentNode);return new Element.Offset(valueL,valueT);}
function absolutize(element){element=$(element);if(Element.getStyle(element,'position')==='absolute'){return element;}
var offsetParent=getOffsetParent(element);var eOffset=element.viewportOffset(),pOffset=offsetParent.viewportOffset();var offset=eOffset.relativeTo(pOffset);var layout=element.getLayout();element.store('prototype_absolutize_original_styles',{left:element.getStyle('left'),top:element.getStyle('top'),width:element.getStyle('width'),height:element.getStyle('height')});element.setStyle({position:'absolute',top:offset.top+'px',left:offset.left+'px',width:layout.get('width')+'px',height:layout.get('height')+'px'});return element;}
function relativize(element){element=$(element);if(Element.getStyle(element,'position')==='relative'){return element;}
var originalStyles=element.retrieve('prototype_absolutize_original_styles');if(originalStyles)element.setStyle(originalStyles);return element;}
if(Prototype.Browser.IE){getOffsetParent=getOffsetParent.wrap(function(proceed,element){element=$(element);if(isDocument(element)||isDetached(element)||isBody(element)||isHtml(element))
return $(document.body);var position=element.getStyle('position');if(position!=='static')return proceed(element);element.setStyle({position:'relative'});var value=proceed(element);element.setStyle({position:position});return value;});positionedOffset=positionedOffset.wrap(function(proceed,element){element=$(element);if(!element.parentNode)return new Element.Offset(0,0);var position=element.getStyle('position');if(position!=='static')return proceed(element);var offsetParent=element.getOffsetParent();if(offsetParent&&offsetParent.getStyle('position')==='fixed')
hasLayout(offsetParent);element.setStyle({position:'relative'});var value=proceed(element);element.setStyle({position:position});return value;});}else if(Prototype.Browser.Webkit){cumulativeOffset=function(element){element=$(element);var valueT=0,valueL=0;do{valueT+=element.offsetTop||0;valueL+=element.offsetLeft||0;if(element.offsetParent==document.body)
if(Element.getStyle(element,'position')=='absolute')break;element=element.offsetParent;}while(element);return new Element.Offset(valueL,valueT);};}
Element.addMethods({getLayout:getLayout,measure:measure,getDimensions:getDimensions,getOffsetParent:getOffsetParent,cumulativeOffset:cumulativeOffset,positionedOffset:positionedOffset,cumulativeScrollOffset:cumulativeScrollOffset,viewportOffset:viewportOffset,absolutize:absolutize,relativize:relativize});function isBody(element){return element.nodeName.toUpperCase()==='BODY';}
function isHtml(element){return element.nodeName.toUpperCase()==='HTML';}
function isDocument(element){return element.nodeType===Node.DOCUMENT_NODE;}
function isDetached(element){return element!==document.body&&!Element.descendantOf(element,document.body);}
if('getBoundingClientRect'in document.documentElement){Element.addMethods({viewportOffset:function(element){element=$(element);if(isDetached(element))return new Element.Offset(0,0);var rect=element.getBoundingClientRect(),docEl=document.documentElement;return new Element.Offset(rect.left- docEl.clientLeft,rect.top- docEl.clientTop);}});}})();window.$$=function(){var expression=$A(arguments).join(', ');return Prototype.Selector.select(expression,document);};Prototype.Selector=(function(){function select(){throw new Error('Method "Prototype.Selector.select" must be defined.');}
function match(){throw new Error('Method "Prototype.Selector.match" must be defined.');}
function find(elements,expression,index){index=index||0;var match=Prototype.Selector.match,length=elements.length,matchIndex=0,i;for(i=0;i<length;i++){if(match(elements[i],expression)&&index==matchIndex++){return Element.extend(elements[i]);}}}
function extendElements(elements){for(var i=0,length=elements.length;i<length;i++){Element.extend(elements[i]);}
return elements;}
var K=Prototype.K;return{select:select,match:match,find:find,extendElements:(Element.extend===K)?K:extendElements,extendElement:Element.extend};})();Prototype._original_property=window.Sizzle;(function(){var chunker=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,done=0,toString=Object.prototype.toString,hasDuplicate=false,baseHasDuplicate=true;[0,0].sort(function(){baseHasDuplicate=false;return 0;});var Sizzle=function(selector,context,results,seed){results=results||[];var origContext=context=context||document;if(context.nodeType!==1&&context.nodeType!==9){return[];}
if(!selector||typeof selector!=="string"){return results;}
var parts=[],m,set,checkSet,check,mode,extra,prune=true,contextXML=isXML(context),soFar=selector;while((chunker.exec(""),m=chunker.exec(soFar))!==null){soFar=m[3];parts.push(m[1]);if(m[2]){extra=m[3];break;}}
if(parts.length>1&&origPOS.exec(selector)){if(parts.length===2&&Expr.relative[parts[0]]){set=posProcess(parts[0]+ parts[1],context);}else{set=Expr.relative[parts[0]]?[context]:Sizzle(parts.shift(),context);while(parts.length){selector=parts.shift();if(Expr.relative[selector])
selector+=parts.shift();set=posProcess(selector,set);}}}else{if(!seed&&parts.length>1&&context.nodeType===9&&!contextXML&&Expr.match.ID.test(parts[0])&&!Expr.match.ID.test(parts[parts.length- 1])){var ret=Sizzle.find(parts.shift(),context,contextXML);context=ret.expr?Sizzle.filter(ret.expr,ret.set)[0]:ret.set[0];}
if(context){var ret=seed?{expr:parts.pop(),set:makeArray(seed)}:Sizzle.find(parts.pop(),parts.length===1&&(parts[0]==="~"||parts[0]==="+")&&context.parentNode?context.parentNode:context,contextXML);set=ret.expr?Sizzle.filter(ret.expr,ret.set):ret.set;if(parts.length>0){checkSet=makeArray(set);}else{prune=false;}
while(parts.length){var cur=parts.pop(),pop=cur;if(!Expr.relative[cur]){cur="";}else{pop=parts.pop();}
if(pop==null){pop=context;}
Expr.relative[cur](checkSet,pop,contextXML);}}else{checkSet=parts=[];}}
if(!checkSet){checkSet=set;}
if(!checkSet){throw"Syntax error, unrecognized expression: "+(cur||selector);}
if(toString.call(checkSet)==="[object Array]"){if(!prune){results.push.apply(results,checkSet);}else if(context&&context.nodeType===1){for(var i=0;checkSet[i]!=null;i++){if(checkSet[i]&&(checkSet[i]===true||checkSet[i].nodeType===1&&contains(context,checkSet[i]))){results.push(set[i]);}}}else{for(var i=0;checkSet[i]!=null;i++){if(checkSet[i]&&checkSet[i].nodeType===1){results.push(set[i]);}}}}else{makeArray(checkSet,results);}
if(extra){Sizzle(extra,origContext,results,seed);Sizzle.uniqueSort(results);}
return results;};Sizzle.uniqueSort=function(results){if(sortOrder){hasDuplicate=baseHasDuplicate;results.sort(sortOrder);if(hasDuplicate){for(var i=1;i<results.length;i++){if(results[i]===results[i-1]){results.splice(i--,1);}}}}
return results;};Sizzle.matches=function(expr,set){return Sizzle(expr,null,null,set);};Sizzle.find=function(expr,context,isXML){var set,match;if(!expr){return[];}
for(var i=0,l=Expr.order.length;i<l;i++){var type=Expr.order[i],match;if((match=Expr.leftMatch[type].exec(expr))){var left=match[1];match.splice(1,1);if(left.substr(left.length- 1)!=="\\"){match[1]=(match[1]||"").replace(/\\/g,"");set=Expr.find[type](match,context,isXML);if(set!=null){expr=expr.replace(Expr.match[type],"");break;}}}}
if(!set){set=context.getElementsByTagName("*");}
return{set:set,expr:expr};};Sizzle.filter=function(expr,set,inplace,not){var old=expr,result=[],curLoop=set,match,anyFound,isXMLFilter=set&&set[0]&&isXML(set[0]);while(expr&&set.length){for(var type in Expr.filter){if((match=Expr.match[type].exec(expr))!=null){var filter=Expr.filter[type],found,item;anyFound=false;if(curLoop==result){result=[];}
if(Expr.preFilter[type]){match=Expr.preFilter[type](match,curLoop,inplace,result,not,isXMLFilter);if(!match){anyFound=found=true;}else if(match===true){continue;}}
if(match){for(var i=0;(item=curLoop[i])!=null;i++){if(item){found=filter(item,match,i,curLoop);var pass=not^!!found;if(inplace&&found!=null){if(pass){anyFound=true;}else{curLoop[i]=false;}}else if(pass){result.push(item);anyFound=true;}}}}
if(found!==undefined){if(!inplace){curLoop=result;}
expr=expr.replace(Expr.match[type],"");if(!anyFound){return[];}
break;}}}
if(expr==old){if(anyFound==null){throw"Syntax error, unrecognized expression: "+ expr;}else{break;}}
old=expr;}
return curLoop;};var Expr=Sizzle.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(elem){return elem.getAttribute("href");}},relative:{"+":function(checkSet,part,isXML){var isPartStr=typeof part==="string",isTag=isPartStr&&!/\W/.test(part),isPartStrNotTag=isPartStr&&!isTag;if(isTag&&!isXML){part=part.toUpperCase();}
for(var i=0,l=checkSet.length,elem;i<l;i++){if((elem=checkSet[i])){while((elem=elem.previousSibling)&&elem.nodeType!==1){}
checkSet[i]=isPartStrNotTag||elem&&elem.nodeName===part?elem||false:elem===part;}}
if(isPartStrNotTag){Sizzle.filter(part,checkSet,true);}},">":function(checkSet,part,isXML){var isPartStr=typeof part==="string";if(isPartStr&&!/\W/.test(part)){part=isXML?part:part.toUpperCase();for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){var parent=elem.parentNode;checkSet[i]=parent.nodeName===part?parent:false;}}}else{for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){checkSet[i]=isPartStr?elem.parentNode:elem.parentNode===part;}}
if(isPartStr){Sizzle.filter(part,checkSet,true);}}},"":function(checkSet,part,isXML){var doneName=done++,checkFn=dirCheck;if(!/\W/.test(part)){var nodeCheck=part=isXML?part:part.toUpperCase();checkFn=dirNodeCheck;}
checkFn("parentNode",part,doneName,checkSet,nodeCheck,isXML);},"~":function(checkSet,part,isXML){var doneName=done++,checkFn=dirCheck;if(typeof part==="string"&&!/\W/.test(part)){var nodeCheck=part=isXML?part:part.toUpperCase();checkFn=dirNodeCheck;}
checkFn("previousSibling",part,doneName,checkSet,nodeCheck,isXML);}},find:{ID:function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);return m?[m]:[];}},NAME:function(match,context,isXML){if(typeof context.getElementsByName!=="undefined"){var ret=[],results=context.getElementsByName(match[1]);for(var i=0,l=results.length;i<l;i++){if(results[i].getAttribute("name")===match[1]){ret.push(results[i]);}}
return ret.length===0?null:ret;}},TAG:function(match,context){return context.getElementsByTagName(match[1]);}},preFilter:{CLASS:function(match,curLoop,inplace,result,not,isXML){match=" "+ match[1].replace(/\\/g,"")+" ";if(isXML){return match;}
for(var i=0,elem;(elem=curLoop[i])!=null;i++){if(elem){if(not^(elem.className&&(" "+ elem.className+" ").indexOf(match)>=0)){if(!inplace)
result.push(elem);}else if(inplace){curLoop[i]=false;}}}
return false;},ID:function(match){return match[1].replace(/\\/g,"");},TAG:function(match,curLoop){for(var i=0;curLoop[i]===false;i++){}
return curLoop[i]&&isXML(curLoop[i])?match[1]:match[1].toUpperCase();},CHILD:function(match){if(match[1]=="nth"){var test=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(match[2]=="even"&&"2n"||match[2]=="odd"&&"2n+1"||!/\D/.test(match[2])&&"0n+"+ match[2]||match[2]);match[2]=(test[1]+(test[2]||1))- 0;match[3]=test[3]- 0;}
match[0]=done++;return match;},ATTR:function(match,curLoop,inplace,result,not,isXML){var name=match[1].replace(/\\/g,"");if(!isXML&&Expr.attrMap[name]){match[1]=Expr.attrMap[name];}
if(match[2]==="~="){match[4]=" "+ match[4]+" ";}
return match;},PSEUDO:function(match,curLoop,inplace,result,not){if(match[1]==="not"){if((chunker.exec(match[3])||"").length>1||/^\w/.test(match[3])){match[3]=Sizzle(match[3],null,null,curLoop);}else{var ret=Sizzle.filter(match[3],curLoop,inplace,true^not);if(!inplace){result.push.apply(result,ret);}
return false;}}else if(Expr.match.POS.test(match[0])||Expr.match.CHILD.test(match[0])){return true;}
return match;},POS:function(match){match.unshift(true);return match;}},filters:{enabled:function(elem){return elem.disabled===false&&elem.type!=="hidden";},disabled:function(elem){return elem.disabled===true;},checked:function(elem){return elem.checked===true;},selected:function(elem){elem.parentNode.selectedIndex;return elem.selected===true;},parent:function(elem){return!!elem.firstChild;},empty:function(elem){return!elem.firstChild;},has:function(elem,i,match){return!!Sizzle(match[3],elem).length;},header:function(elem){return/h\d/i.test(elem.nodeName);},text:function(elem){return"text"===elem.type;},radio:function(elem){return"radio"===elem.type;},checkbox:function(elem){return"checkbox"===elem.type;},file:function(elem){return"file"===elem.type;},password:function(elem){return"password"===elem.type;},submit:function(elem){return"submit"===elem.type;},image:function(elem){return"image"===elem.type;},reset:function(elem){return"reset"===elem.type;},button:function(elem){return"button"===elem.type||elem.nodeName.toUpperCase()==="BUTTON";},input:function(elem){return/input|select|textarea|button/i.test(elem.nodeName);}},setFilters:{first:function(elem,i){return i===0;},last:function(elem,i,match,array){return i===array.length- 1;},even:function(elem,i){return i%2===0;},odd:function(elem,i){return i%2===1;},lt:function(elem,i,match){return i<match[3]- 0;},gt:function(elem,i,match){return i>match[3]- 0;},nth:function(elem,i,match){return match[3]- 0==i;},eq:function(elem,i,match){return match[3]- 0==i;}},filter:{PSEUDO:function(elem,match,i,array){var name=match[1],filter=Expr.filters[name];if(filter){return filter(elem,i,match,array);}else if(name==="contains"){return(elem.textContent||elem.innerText||"").indexOf(match[3])>=0;}else if(name==="not"){var not=match[3];for(var i=0,l=not.length;i<l;i++){if(not[i]===elem){return false;}}
return true;}},CHILD:function(elem,match){var type=match[1],node=elem;switch(type){case'only':case'first':while((node=node.previousSibling)){if(node.nodeType===1)return false;}
if(type=='first')return true;node=elem;case'last':while((node=node.nextSibling)){if(node.nodeType===1)return false;}
return true;case'nth':var first=match[2],last=match[3];if(first==1&&last==0){return true;}
var doneName=match[0],parent=elem.parentNode;if(parent&&(parent.sizcache!==doneName||!elem.nodeIndex)){var count=0;for(node=parent.firstChild;node;node=node.nextSibling){if(node.nodeType===1){node.nodeIndex=++count;}}
parent.sizcache=doneName;}
var diff=elem.nodeIndex- last;if(first==0){return diff==0;}else{return(diff%first==0&&diff/first>=0);}}},ID:function(elem,match){return elem.nodeType===1&&elem.getAttribute("id")===match;},TAG:function(elem,match){return(match==="*"&&elem.nodeType===1)||elem.nodeName===match;},CLASS:function(elem,match){return(" "+(elem.className||elem.getAttribute("class"))+" ").indexOf(match)>-1;},ATTR:function(elem,match){var name=match[1],result=Expr.attrHandle[name]?Expr.attrHandle[name](elem):elem[name]!=null?elem[name]:elem.getAttribute(name),value=result+"",type=match[2],check=match[4];return result==null?type==="!=":type==="="?value===check:type==="*="?value.indexOf(check)>=0:type==="~="?(" "+ value+" ").indexOf(check)>=0:!check?value&&result!==false:type==="!="?value!=check:type==="^="?value.indexOf(check)===0:type==="$="?value.substr(value.length- check.length)===check:type==="|="?value===check||value.substr(0,check.length+ 1)===check+"-":false;},POS:function(elem,match,i,array){var name=match[2],filter=Expr.setFilters[name];if(filter){return filter(elem,i,match,array);}}}};var origPOS=Expr.match.POS;for(var type in Expr.match){Expr.match[type]=new RegExp(Expr.match[type].source+/(?![^\[]*\])(?![^\(]*\))/.source);Expr.leftMatch[type]=new RegExp(/(^(?:.|\r|\n)*?)/.source+ Expr.match[type].source);}
var makeArray=function(array,results){array=Array.prototype.slice.call(array,0);if(results){results.push.apply(results,array);return results;}
return array;};try{Array.prototype.slice.call(document.documentElement.childNodes,0);}catch(e){makeArray=function(array,results){var ret=results||[];if(toString.call(array)==="[object Array]"){Array.prototype.push.apply(ret,array);}else{if(typeof array.length==="number"){for(var i=0,l=array.length;i<l;i++){ret.push(array[i]);}}else{for(var i=0;array[i];i++){ret.push(array[i]);}}}
return ret;};}
var sortOrder;if(document.documentElement.compareDocumentPosition){sortOrder=function(a,b){if(!a.compareDocumentPosition||!b.compareDocumentPosition){if(a==b){hasDuplicate=true;}
return 0;}
var ret=a.compareDocumentPosition(b)&4?-1:a===b?0:1;if(ret===0){hasDuplicate=true;}
return ret;};}else if("sourceIndex"in document.documentElement){sortOrder=function(a,b){if(!a.sourceIndex||!b.sourceIndex){if(a==b){hasDuplicate=true;}
return 0;}
var ret=a.sourceIndex- b.sourceIndex;if(ret===0){hasDuplicate=true;}
return ret;};}else if(document.createRange){sortOrder=function(a,b){if(!a.ownerDocument||!b.ownerDocument){if(a==b){hasDuplicate=true;}
return 0;}
var aRange=a.ownerDocument.createRange(),bRange=b.ownerDocument.createRange();aRange.setStart(a,0);aRange.setEnd(a,0);bRange.setStart(b,0);bRange.setEnd(b,0);var ret=aRange.compareBoundaryPoints(Range.START_TO_END,bRange);if(ret===0){hasDuplicate=true;}
return ret;};}
(function(){var form=document.createElement("div"),id="script"+(new Date).getTime();form.innerHTML="<a name='"+ id+"'/>";var root=document.documentElement;root.insertBefore(form,root.firstChild);if(!!document.getElementById(id)){Expr.find.ID=function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);return m?m.id===match[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===match[1]?[m]:undefined:[];}};Expr.filter.ID=function(elem,match){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return elem.nodeType===1&&node&&node.nodeValue===match;};}
root.removeChild(form);root=form=null;})();(function(){var div=document.createElement("div");div.appendChild(document.createComment(""));if(div.getElementsByTagName("*").length>0){Expr.find.TAG=function(match,context){var results=context.getElementsByTagName(match[1]);if(match[1]==="*"){var tmp=[];for(var i=0;results[i];i++){if(results[i].nodeType===1){tmp.push(results[i]);}}
results=tmp;}
return results;};}
div.innerHTML="<a href='#'></a>";if(div.firstChild&&typeof div.firstChild.getAttribute!=="undefined"&&div.firstChild.getAttribute("href")!=="#"){Expr.attrHandle.href=function(elem){return elem.getAttribute("href",2);};}
div=null;})();if(document.querySelectorAll)(function(){var oldSizzle=Sizzle,div=document.createElement("div");div.innerHTML="<p class='TEST'></p>";if(div.querySelectorAll&&div.querySelectorAll(".TEST").length===0){return;}
Sizzle=function(query,context,extra,seed){context=context||document;if(!seed&&context.nodeType===9&&!isXML(context)){try{return makeArray(context.querySelectorAll(query),extra);}catch(e){}}
return oldSizzle(query,context,extra,seed);};for(var prop in oldSizzle){Sizzle[prop]=oldSizzle[prop];}
div=null;})();if(document.getElementsByClassName&&document.documentElement.getElementsByClassName)(function(){var div=document.createElement("div");div.innerHTML="<div class='test e'></div><div class='test'></div>";if(div.getElementsByClassName("e").length===0)
return;div.lastChild.className="e";if(div.getElementsByClassName("e").length===1)
return;Expr.order.splice(1,0,"CLASS");Expr.find.CLASS=function(match,context,isXML){if(typeof context.getElementsByClassName!=="undefined"&&!isXML){return context.getElementsByClassName(match[1]);}};div=null;})();function dirNodeCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){var sibDir=dir=="previousSibling"&&!isXML;for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){if(sibDir&&elem.nodeType===1){elem.sizcache=doneName;elem.sizset=i;}
elem=elem[dir];var match=false;while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];break;}
if(elem.nodeType===1&&!isXML){elem.sizcache=doneName;elem.sizset=i;}
if(elem.nodeName===cur){match=elem;break;}
elem=elem[dir];}
checkSet[i]=match;}}}
function dirCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){var sibDir=dir=="previousSibling"&&!isXML;for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){if(sibDir&&elem.nodeType===1){elem.sizcache=doneName;elem.sizset=i;}
elem=elem[dir];var match=false;while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];break;}
if(elem.nodeType===1){if(!isXML){elem.sizcache=doneName;elem.sizset=i;}
if(typeof cur!=="string"){if(elem===cur){match=true;break;}}else if(Sizzle.filter(cur,[elem]).length>0){match=elem;break;}}
elem=elem[dir];}
checkSet[i]=match;}}}
var contains=document.compareDocumentPosition?function(a,b){return a.compareDocumentPosition(b)&16;}:function(a,b){return a!==b&&(a.contains?a.contains(b):true);};var isXML=function(elem){return elem.nodeType===9&&elem.documentElement.nodeName!=="HTML"||!!elem.ownerDocument&&elem.ownerDocument.documentElement.nodeName!=="HTML";};var posProcess=function(selector,context){var tmpSet=[],later="",match,root=context.nodeType?[context]:context;while((match=Expr.match.PSEUDO.exec(selector))){later+=match[0];selector=selector.replace(Expr.match.PSEUDO,"");}
selector=Expr.relative[selector]?selector+"*":selector;for(var i=0,l=root.length;i<l;i++){Sizzle(selector,root[i],tmpSet);}
return Sizzle.filter(later,tmpSet);};window.Sizzle=Sizzle;})();;(function(engine){var extendElements=Prototype.Selector.extendElements;function select(selector,scope){return extendElements(engine(selector,scope||document));}
function match(element,selector){return engine.matches(selector,[element]).length==1;}
Prototype.Selector.engine=engine;Prototype.Selector.select=select;Prototype.Selector.match=match;})(Sizzle);window.Sizzle=Prototype._original_property;delete Prototype._original_property;var Form={reset:function(form){form=$(form);form.reset();return form;},serializeElements:function(elements,options){if(typeof options!='object')options={hash:!!options};else if(Object.isUndefined(options.hash))options.hash=true;var key,value,submitted=false,submit=options.submit,accumulator,initial;if(options.hash){initial={};accumulator=function(result,key,value){if(key in result){if(!Object.isArray(result[key]))result[key]=[result[key]];result[key].push(value);}else result[key]=value;return result;};}else{initial='';accumulator=function(result,key,value){return result+(result?'&':'')+ encodeURIComponent(key)+'='+ encodeURIComponent(value);}}
return elements.inject(initial,function(result,element){if(!element.disabled&&element.name){key=element.name;value=$(element).getValue();if(value!=null&&element.type!='file'&&(element.type!='submit'||(!submitted&&submit!==false&&(!submit||key==submit)&&(submitted=true)))){result=accumulator(result,key,value);}}
return result;});}};Form.Methods={serialize:function(form,options){return Form.serializeElements(Form.getElements(form),options);},getElements:function(form){var elements=$(form).getElementsByTagName('*'),element,arr=[],serializers=Form.Element.Serializers;for(var i=0;element=elements[i];i++){arr.push(element);}
return arr.inject([],function(elements,child){if(serializers[child.tagName.toLowerCase()])
elements.push(Element.extend(child));return elements;})},getInputs:function(form,typeName,name){form=$(form);var inputs=form.getElementsByTagName('input');if(!typeName&&!name)return $A(inputs).map(Element.extend);for(var i=0,matchingInputs=[],length=inputs.length;i<length;i++){var input=inputs[i];if((typeName&&input.type!=typeName)||(name&&input.name!=name))
continue;matchingInputs.push(Element.extend(input));}
return matchingInputs;},disable:function(form){form=$(form);Form.getElements(form).invoke('disable');return form;},enable:function(form){form=$(form);Form.getElements(form).invoke('enable');return form;},findFirstElement:function(form){var elements=$(form).getElements().findAll(function(element){return'hidden'!=element.type&&!element.disabled;});var firstByIndex=elements.findAll(function(element){return element.hasAttribute('tabIndex')&&element.tabIndex>=0;}).sortBy(function(element){return element.tabIndex}).first();return firstByIndex?firstByIndex:elements.find(function(element){return/^(?:input|select|textarea)$/i.test(element.tagName);});},focusFirstElement:function(form){form=$(form);var element=form.findFirstElement();if(element)element.activate();return form;},request:function(form,options){form=$(form),options=Object.clone(options||{});var params=options.parameters,action=form.readAttribute('action')||'';if(action.blank())action=window.location.href;options.parameters=form.serialize(true);if(params){if(Object.isString(params))params=params.toQueryParams();Object.extend(options.parameters,params);}
if(form.hasAttribute('method')&&!options.method)
options.method=form.method;return new Ajax.Request(action,options);}};Form.Element={focus:function(element){$(element).focus();return element;},select:function(element){$(element).select();return element;}};Form.Element.Methods={serialize:function(element){element=$(element);if(!element.disabled&&element.name){var value=element.getValue();if(value!=undefined){var pair={};pair[element.name]=value;return Object.toQueryString(pair);}}
return'';},getValue:function(element){element=$(element);var method=element.tagName.toLowerCase();return Form.Element.Serializers[method](element);},setValue:function(element,value){element=$(element);var method=element.tagName.toLowerCase();Form.Element.Serializers[method](element,value);return element;},clear:function(element){$(element).value='';return element;},present:function(element){return $(element).value!='';},activate:function(element){element=$(element);try{element.focus();if(element.select&&(element.tagName.toLowerCase()!='input'||!(/^(?:button|reset|submit)$/i.test(element.type))))
element.select();}catch(e){}
return element;},disable:function(element){element=$(element);element.disabled=true;return element;},enable:function(element){element=$(element);element.disabled=false;return element;}};var Field=Form.Element;var $F=Form.Element.Methods.getValue;Form.Element.Serializers=(function(){function input(element,value){switch(element.type.toLowerCase()){case'checkbox':case'radio':return inputSelector(element,value);default:return valueSelector(element,value);}}
function inputSelector(element,value){if(Object.isUndefined(value))
return element.checked?element.value:null;else element.checked=!!value;}
function valueSelector(element,value){if(Object.isUndefined(value))return element.value;else element.value=value;}
function select(element,value){if(Object.isUndefined(value))
return(element.type==='select-one'?selectOne:selectMany)(element);var opt,currentValue,single=!Object.isArray(value);for(var i=0,length=element.length;i<length;i++){opt=element.options[i];currentValue=this.optionValue(opt);if(single){if(currentValue==value){opt.selected=true;return;}}
else opt.selected=value.include(currentValue);}}
function selectOne(element){var index=element.selectedIndex;return index>=0?optionValue(element.options[index]):null;}
function selectMany(element){var values,length=element.length;if(!length)return null;for(var i=0,values=[];i<length;i++){var opt=element.options[i];if(opt.selected)values.push(optionValue(opt));}
return values;}
function optionValue(opt){return Element.hasAttribute(opt,'value')?opt.value:opt.text;}
return{input:input,inputSelector:inputSelector,textarea:valueSelector,select:select,selectOne:selectOne,selectMany:selectMany,optionValue:optionValue,button:valueSelector};})();Abstract.TimedObserver=Class.create(PeriodicalExecuter,{initialize:function($super,element,frequency,callback){$super(callback,frequency);this.element=$(element);this.lastValue=this.getValue();},execute:function(){var value=this.getValue();if(Object.isString(this.lastValue)&&Object.isString(value)?this.lastValue!=value:String(this.lastValue)!=String(value)){this.callback(this.element,value);this.lastValue=value;}}});Form.Element.Observer=Class.create(Abstract.TimedObserver,{getValue:function(){return Form.Element.getValue(this.element);}});Form.Observer=Class.create(Abstract.TimedObserver,{getValue:function(){return Form.serialize(this.element);}});Abstract.EventObserver=Class.create({initialize:function(element,callback){this.element=$(element);this.callback=callback;this.lastValue=this.getValue();if(this.element.tagName.toLowerCase()=='form')
this.registerFormCallbacks();else
this.registerCallback(this.element);},onElementEvent:function(){var value=this.getValue();if(this.lastValue!=value){this.callback(this.element,value);this.lastValue=value;}},registerFormCallbacks:function(){Form.getElements(this.element).each(this.registerCallback,this);},registerCallback:function(element){if(element.type){switch(element.type.toLowerCase()){case'checkbox':case'radio':Event.observe(element,'click',this.onElementEvent.bind(this));break;default:Event.observe(element,'change',this.onElementEvent.bind(this));break;}}}});Form.Element.EventObserver=Class.create(Abstract.EventObserver,{getValue:function(){return Form.Element.getValue(this.element);}});Form.EventObserver=Class.create(Abstract.EventObserver,{getValue:function(){return Form.serialize(this.element);}});(function(){var Event={KEY_BACKSPACE:8,KEY_TAB:9,KEY_RETURN:13,KEY_ESC:27,KEY_LEFT:37,KEY_UP:38,KEY_RIGHT:39,KEY_DOWN:40,KEY_DELETE:46,KEY_HOME:36,KEY_END:35,KEY_PAGEUP:33,KEY_PAGEDOWN:34,KEY_INSERT:45,cache:{}};var docEl=document.documentElement;var MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED='onmouseenter'in docEl&&'onmouseleave'in docEl;var isIELegacyEvent=function(event){return false;};if(window.attachEvent){if(window.addEventListener){isIELegacyEvent=function(event){return!(event instanceof window.Event);};}else{isIELegacyEvent=function(event){return true;};}}
var _isButton;function _isButtonForDOMEvents(event,code){return event.which?(event.which===code+ 1):(event.button===code);}
var legacyButtonMap={0:1,1:4,2:2};function _isButtonForLegacyEvents(event,code){return event.button===legacyButtonMap[code];}
function _isButtonForWebKit(event,code){switch(code){case 0:return event.which==1&&!event.metaKey;case 1:return event.which==2||(event.which==1&&event.metaKey);case 2:return event.which==3;default:return false;}}
if(window.attachEvent){if(!window.addEventListener){_isButton=_isButtonForLegacyEvents;}else{_isButton=function(event,code){return isIELegacyEvent(event)?_isButtonForLegacyEvents(event,code):_isButtonForDOMEvents(event,code);}}}else if(Prototype.Browser.WebKit){_isButton=_isButtonForWebKit;}else{_isButton=_isButtonForDOMEvents;}
function isLeftClick(event){return _isButton(event,0)}
function isMiddleClick(event){return _isButton(event,1)}
function isRightClick(event){return _isButton(event,2)}
function element(event){event=Event.extend(event);var node=event.target,type=event.type,currentTarget=event.currentTarget;if(currentTarget&&currentTarget.tagName){if(type==='load'||type==='error'||(type==='click'&&currentTarget.tagName.toLowerCase()==='input'&&currentTarget.type==='radio'))
node=currentTarget;}
if(node.nodeType==Node.TEXT_NODE)
node=node.parentNode;return Element.extend(node);}
function findElement(event,expression){var element=Event.element(event);if(!expression)return element;while(element){if(Object.isElement(element)&&Prototype.Selector.match(element,expression)){return Element.extend(element);}
element=element.parentNode;}}
function pointer(event){return{x:pointerX(event),y:pointerY(event)};}
function pointerX(event){var docElement=document.documentElement,body=document.body||{scrollLeft:0};return event.pageX||(event.clientX+
(docElement.scrollLeft||body.scrollLeft)-
(docElement.clientLeft||0));}
function pointerY(event){var docElement=document.documentElement,body=document.body||{scrollTop:0};return event.pageY||(event.clientY+
(docElement.scrollTop||body.scrollTop)-
(docElement.clientTop||0));}
function stop(event){Event.extend(event);event.preventDefault();event.stopPropagation();event.stopped=true;}
Event.Methods={isLeftClick:isLeftClick,isMiddleClick:isMiddleClick,isRightClick:isRightClick,element:element,findElement:findElement,pointer:pointer,pointerX:pointerX,pointerY:pointerY,stop:stop};var methods=Object.keys(Event.Methods).inject({},function(m,name){m[name]=Event.Methods[name].methodize();return m;});if(window.attachEvent){function _relatedTarget(event){var element;switch(event.type){case'mouseover':case'mouseenter':element=event.fromElement;break;case'mouseout':case'mouseleave':element=event.toElement;break;default:return null;}
return Element.extend(element);}
var additionalMethods={stopPropagation:function(){this.cancelBubble=true},preventDefault:function(){this.returnValue=false},inspect:function(){return'[object Event]'}};Event.extend=function(event,element){if(!event)return false;if(!isIELegacyEvent(event))return event;if(event._extendedByPrototype)return event;event._extendedByPrototype=Prototype.emptyFunction;var pointer=Event.pointer(event);Object.extend(event,{target:event.srcElement||element,relatedTarget:_relatedTarget(event),pageX:pointer.x,pageY:pointer.y});Object.extend(event,methods);Object.extend(event,additionalMethods);return event;};}else{Event.extend=Prototype.K;}
if(window.addEventListener){Event.prototype=window.Event.prototype||document.createEvent('HTMLEvents').__proto__;Object.extend(Event.prototype,methods);}
function _createResponder(element,eventName,handler){var registry=Element.retrieve(element,'prototype_event_registry');if(Object.isUndefined(registry)){CACHE.push(element);registry=Element.retrieve(element,'prototype_event_registry',$H());}
var respondersForEvent=registry.get(eventName);if(Object.isUndefined(respondersForEvent)){respondersForEvent=[];registry.set(eventName,respondersForEvent);}
if(respondersForEvent.pluck('handler').include(handler))return false;var responder;if(eventName.include(":")){responder=function(event){if(Object.isUndefined(event.eventName))
return false;if(event.eventName!==eventName)
return false;Event.extend(event,element);handler.call(element,event);};}else{if(!MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED&&(eventName==="mouseenter"||eventName==="mouseleave")){if(eventName==="mouseenter"||eventName==="mouseleave"){responder=function(event){Event.extend(event,element);var parent=event.relatedTarget;while(parent&&parent!==element){try{parent=parent.parentNode;}
catch(e){parent=element;}}
if(parent===element)return;handler.call(element,event);};}}else{responder=function(event){Event.extend(event,element);handler.call(element,event);};}}
responder.handler=handler;respondersForEvent.push(responder);return responder;}
function _destroyCache(){for(var i=0,length=CACHE.length;i<length;i++){Event.stopObserving(CACHE[i]);CACHE[i]=null;}}
var CACHE=[];if(Prototype.Browser.IE)
window.attachEvent('onunload',_destroyCache);if(Prototype.Browser.WebKit)
window.addEventListener('unload',Prototype.emptyFunction,false);var _getDOMEventName=Prototype.K,translations={mouseenter:"mouseover",mouseleave:"mouseout"};if(!MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED){_getDOMEventName=function(eventName){return(translations[eventName]||eventName);};}
function observe(element,eventName,handler){element=$(element);var responder=_createResponder(element,eventName,handler);if(!responder)return element;if(eventName.include(':')){if(element.addEventListener)
element.addEventListener("dataavailable",responder,false);else{element.attachEvent("ondataavailable",responder);element.attachEvent("onlosecapture",responder);}}else{var actualEventName=_getDOMEventName(eventName);if(element.addEventListener)
element.addEventListener(actualEventName,responder,false);else
element.attachEvent("on"+ actualEventName,responder);}
return element;}
function stopObserving(element,eventName,handler){element=$(element);var registry=Element.retrieve(element,'prototype_event_registry');if(!registry)return element;if(!eventName){registry.each(function(pair){var eventName=pair.key;stopObserving(element,eventName);});return element;}
var responders=registry.get(eventName);if(!responders)return element;if(!handler){responders.each(function(r){stopObserving(element,eventName,r.handler);});return element;}
var i=responders.length,responder;while(i--){if(responders[i].handler===handler){responder=responders[i];break;}}
if(!responder)return element;if(eventName.include(':')){if(element.removeEventListener)
element.removeEventListener("dataavailable",responder,false);else{element.detachEvent("ondataavailable",responder);element.detachEvent("onlosecapture",responder);}}else{var actualEventName=_getDOMEventName(eventName);if(element.removeEventListener)
element.removeEventListener(actualEventName,responder,false);else
element.detachEvent('on'+ actualEventName,responder);}
registry.set(eventName,responders.without(responder));return element;}
function fire(element,eventName,memo,bubble){element=$(element);if(Object.isUndefined(bubble))
bubble=true;if(element==document&&document.createEvent&&!element.dispatchEvent)
element=document.documentElement;var event;if(document.createEvent){event=document.createEvent('HTMLEvents');event.initEvent('dataavailable',bubble,true);}else{event=document.createEventObject();event.eventType=bubble?'ondataavailable':'onlosecapture';}
event.eventName=eventName;event.memo=memo||{};if(document.createEvent)
element.dispatchEvent(event);else
element.fireEvent(event.eventType,event);return Event.extend(event);}
Event.Handler=Class.create({initialize:function(element,eventName,selector,callback){this.element=$(element);this.eventName=eventName;this.selector=selector;this.callback=callback;this.handler=this.handleEvent.bind(this);},start:function(){Event.observe(this.element,this.eventName,this.handler);return this;},stop:function(){Event.stopObserving(this.element,this.eventName,this.handler);return this;},handleEvent:function(event){var element=Event.findElement(event,this.selector);if(element)this.callback.call(this.element,event,element);}});function on(element,eventName,selector,callback){element=$(element);if(Object.isFunction(selector)&&Object.isUndefined(callback)){callback=selector,selector=null;}
return new Event.Handler(element,eventName,selector,callback).start();}
Object.extend(Event,Event.Methods);Object.extend(Event,{fire:fire,observe:observe,stopObserving:stopObserving,on:on});Element.addMethods({fire:fire,observe:observe,stopObserving:stopObserving,on:on});Object.extend(document,{fire:fire.methodize(),observe:observe.methodize(),stopObserving:stopObserving.methodize(),on:on.methodize(),loaded:false});if(window.Event)Object.extend(window.Event,Event);else window.Event=Event;})();(function(){var timer;function fireContentLoadedEvent(){if(document.loaded)return;if(timer)window.clearTimeout(timer);document.loaded=true;document.fire('dom:loaded');}
function checkReadyState(){if(document.readyState==='complete'){document.stopObserving('readystatechange',checkReadyState);fireContentLoadedEvent();}}
function pollDoScroll(){try{document.documentElement.doScroll('left');}
catch(e){timer=pollDoScroll.defer();return;}
fireContentLoadedEvent();}
if(document.addEventListener){document.addEventListener('DOMContentLoaded',fireContentLoadedEvent,false);}else{document.observe('readystatechange',checkReadyState);if(window==top)
timer=pollDoScroll.defer();}
Event.observe(window,'load',fireContentLoadedEvent);})();Element.addMethods();Hash.toQueryString=Object.toQueryString;var Toggle={display:Element.toggle};Element.Methods.childOf=Element.Methods.descendantOf;var Insertion={Before:function(element,content){return Element.insert(element,{before:content});},Top:function(element,content){return Element.insert(element,{top:content});},Bottom:function(element,content){return Element.insert(element,{bottom:content});},After:function(element,content){return Element.insert(element,{after:content});}};var $continue=new Error('"throw $continue" is deprecated, use "return" instead');var Position={includeScrollOffsets:false,prepare:function(){this.deltaX=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;this.deltaY=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;},within:function(element,x,y){if(this.includeScrollOffsets)
return this.withinIncludingScrolloffsets(element,x,y);this.xcomp=x;this.ycomp=y;this.offset=Element.cumulativeOffset(element);return(y>=this.offset[1]&&y<this.offset[1]+ element.offsetHeight&&x>=this.offset[0]&&x<this.offset[0]+ element.offsetWidth);},withinIncludingScrolloffsets:function(element,x,y){var offsetcache=Element.cumulativeScrollOffset(element);this.xcomp=x+ offsetcache[0]- this.deltaX;this.ycomp=y+ offsetcache[1]- this.deltaY;this.offset=Element.cumulativeOffset(element);return(this.ycomp>=this.offset[1]&&this.ycomp<this.offset[1]+ element.offsetHeight&&this.xcomp>=this.offset[0]&&this.xcomp<this.offset[0]+ element.offsetWidth);},overlap:function(mode,element){if(!mode)return 0;if(mode=='vertical')
return((this.offset[1]+ element.offsetHeight)- this.ycomp)/
element.offsetHeight;if(mode=='horizontal')
return((this.offset[0]+ element.offsetWidth)- this.xcomp)/
element.offsetWidth;},cumulativeOffset:Element.Methods.cumulativeOffset,positionedOffset:Element.Methods.positionedOffset,absolutize:function(element){Position.prepare();return Element.absolutize(element);},relativize:function(element){Position.prepare();return Element.relativize(element);},realOffset:Element.Methods.cumulativeScrollOffset,offsetParent:Element.Methods.getOffsetParent,page:Element.Methods.viewportOffset,clone:function(source,target,options){options=options||{};return Element.clonePosition(target,source,options);}};if(!document.getElementsByClassName)document.getElementsByClassName=function(instanceMethods){function iter(name){return name.blank()?null:"[contains(concat(' ', @class, ' '), ' "+ name+" ')]";}
instanceMethods.getElementsByClassName=Prototype.BrowserFeatures.XPath?function(element,className){className=className.toString().strip();var cond=/\s/.test(className)?$w(className).map(iter).join(''):iter(className);return cond?document._getElementsByXPath('.//*'+ cond,element):[];}:function(element,className){className=className.toString().strip();var elements=[],classNames=(/\s/.test(className)?$w(className):null);if(!classNames&&!className)return elements;var nodes=$(element).getElementsByTagName('*');className=' '+ className+' ';for(var i=0,child,cn;child=nodes[i];i++){if(child.className&&(cn=' '+ child.className+' ')&&(cn.include(className)||(classNames&&classNames.all(function(name){return!name.toString().blank()&&cn.include(' '+ name+' ');}))))
elements.push(Element.extend(child));}
return elements;};return function(className,parentElement){return $(parentElement||document.body).getElementsByClassName(className);};}(Element.Methods);Element.ClassNames=Class.create();Element.ClassNames.prototype={initialize:function(element){this.element=$(element);},_each:function(iterator){this.element.className.split(/\s+/).select(function(name){return name.length>0;})._each(iterator);},set:function(className){this.element.className=className;},add:function(classNameToAdd){if(this.include(classNameToAdd))return;this.set($A(this).concat(classNameToAdd).join(' '));},remove:function(classNameToRemove){if(!this.include(classNameToRemove))return;this.set($A(this).without(classNameToRemove).join(' '));},toString:function(){return $A(this).join(' ');}};Object.extend(Element.ClassNames.prototype,Enumerable);(function(){window.Selector=Class.create({initialize:function(expression){this.expression=expression.strip();},findElements:function(rootElement){return Prototype.Selector.select(this.expression,rootElement);},match:function(element){return Prototype.Selector.match(element,this.expression);},toString:function(){return this.expression;},inspect:function(){return"#<Selector: "+ this.expression+">";}});Object.extend(Selector,{matchElements:function(elements,expression){var match=Prototype.Selector.match,results=[];for(var i=0,length=elements.length;i<length;i++){var element=elements[i];if(match(element,expression)){results.push(Element.extend(element));}}
return results;},findElement:function(elements,expression,index){index=index||0;var matchIndex=0,element;for(var i=0,length=elements.length;i<length;i++){element=elements[i];if(Prototype.Selector.match(element,expression)&&index===matchIndex++){return Element.extend(element);}}},findChildElements:function(element,expressions){var selector=expressions.toArray().join(', ');return Prototype.Selector.select(selector,element||document);}});})();function validateCreditCard(s){var v="0123456789";var w="";for(i=0;i<s.length;i++){x=s.charAt(i);if(v.indexOf(x,0)!=-1)
w+=x;}
j=w.length/2;k=Math.floor(j);m=Math.ceil(j)- k;c=0;for(i=0;i<k;i++){a=w.charAt(i*2+m)*2;c+=a>9?Math.floor(a/10+ a%10):a;}
for(i=0;i<k+m;i++)c+=w.charAt(i*2+1-m)*1;return(c%10==0);}
var Validator=Class.create();Validator.prototype={initialize:function(className,error,test,options){if(typeof test=='function'){this.options=$H(options);this._test=test;}else{this.options=$H(test);this._test=function(){return true};}
this.error=error||'Validation failed.';this.className=className;},test:function(v,elm){return(this._test(v,elm)&&this.options.all(function(p){return Validator.methods[p.key]?Validator.methods[p.key](v,elm,p.value):true;}));}}
Validator.methods={pattern:function(v,elm,opt){return Validation.get('IsEmpty').test(v)||opt.test(v)},minLength:function(v,elm,opt){return v.length>=opt},maxLength:function(v,elm,opt){return v.length<=opt},min:function(v,elm,opt){return v>=parseFloat(opt)},max:function(v,elm,opt){return v<=parseFloat(opt)},notOneOf:function(v,elm,opt){return $A(opt).all(function(value){return v!=value;})},oneOf:function(v,elm,opt){return $A(opt).any(function(value){return v==value;})},is:function(v,elm,opt){return v==opt},isNot:function(v,elm,opt){return v!=opt},equalToField:function(v,elm,opt){return v==$F(opt)},notEqualToField:function(v,elm,opt){return v!=$F(opt)},include:function(v,elm,opt){return $A(opt).all(function(value){return Validation.get(value).test(v,elm);})}}
var Validation=Class.create();Validation.defaultOptions={onSubmit:true,stopOnFirst:false,immediate:false,focusOnError:true,useTitles:false,addClassNameToContainer:false,containerClassName:'.input-box',onFormValidate:function(result,form){},onElementValidate:function(result,elm){}};Validation.prototype={initialize:function(form,options){this.form=$(form);if(!this.form){return;}
this.options=Object.extend({onSubmit:Validation.defaultOptions.onSubmit,stopOnFirst:Validation.defaultOptions.stopOnFirst,immediate:Validation.defaultOptions.immediate,focusOnError:Validation.defaultOptions.focusOnError,useTitles:Validation.defaultOptions.useTitles,onFormValidate:Validation.defaultOptions.onFormValidate,onElementValidate:Validation.defaultOptions.onElementValidate},options||{});if(this.options.onSubmit)Event.observe(this.form,'submit',this.onSubmit.bind(this),false);if(this.options.immediate){Form.getElements(this.form).each(function(input){if(input.tagName.toLowerCase()=='select'){Event.observe(input,'blur',this.onChange.bindAsEventListener(this));}
if(input.type.toLowerCase()=='radio'||input.type.toLowerCase()=='checkbox'){Event.observe(input,'click',this.onChange.bindAsEventListener(this));}else{Event.observe(input,'change',this.onChange.bindAsEventListener(this));}},this);}},onChange:function(ev){Validation.isOnChange=true;Validation.validate(Event.element(ev),{useTitle:this.options.useTitles,onElementValidate:this.options.onElementValidate});Validation.isOnChange=false;},onSubmit:function(ev){if(!this.validate())Event.stop(ev);},validate:function(){var result=false;var useTitles=this.options.useTitles;var callback=this.options.onElementValidate;try{if(this.options.stopOnFirst){result=Form.getElements(this.form).all(function(elm){if(elm.hasClassName('local-validation')&&!this.isElementInForm(elm,this.form)){return true;}
return Validation.validate(elm,{useTitle:useTitles,onElementValidate:callback});},this);}else{result=Form.getElements(this.form).collect(function(elm){if(elm.hasClassName('local-validation')&&!this.isElementInForm(elm,this.form)){return true;}
return Validation.validate(elm,{useTitle:useTitles,onElementValidate:callback});},this).all();}}catch(e){}
if(!result&&this.options.focusOnError){try{Form.getElements(this.form).findAll(function(elm){return $(elm).hasClassName('validation-failed')}).first().focus()}
catch(e){}}
this.options.onFormValidate(result,this.form);return result;},reset:function(){Form.getElements(this.form).each(Validation.reset);},isElementInForm:function(elm,form){var domForm=elm.up('form');if(domForm==form){return true;}
return false;}}
Object.extend(Validation,{validate:function(elm,options){options=Object.extend({useTitle:false,onElementValidate:function(result,elm){}},options||{});elm=$(elm);var cn=$w(elm.className);return result=cn.all(function(value){var test=Validation.test(value,elm,options.useTitle);options.onElementValidate(test,elm);return test;});},insertAdvice:function(elm,advice){var container=$(elm).up('.field-row');if(container){Element.insert(container,{after:advice});}else if(elm.up('td.value')){elm.up('td.value').insert({bottom:advice});}else if(elm.advaiceContainer&&$(elm.advaiceContainer)){$(elm.advaiceContainer).update(advice);}
else{switch(elm.type.toLowerCase()){case'checkbox':case'radio':var p=elm.parentNode;if(p){Element.insert(p,{'bottom':advice});}else{Element.insert(elm,{'after':advice});}
break;default:Element.insert(elm,{'after':advice});}}},showAdvice:function(elm,advice,adviceName){if(!elm.advices){elm.advices=new Hash();}
else{elm.advices.each(function(pair){if(!advice||pair.value.id!=advice.id){this.hideAdvice(elm,pair.value);}}.bind(this));}
elm.advices.set(adviceName,advice);if(typeof Effect=='undefined'){advice.style.display='block';}else{if(!advice._adviceAbsolutize){new Effect.Appear(advice,{duration:1});}else{Position.absolutize(advice);advice.show();advice.setStyle({'top':advice._adviceTop,'left':advice._adviceLeft,'width':advice._adviceWidth,'z-index':1000});advice.addClassName('advice-absolute');}}},hideAdvice:function(elm,advice){if(advice!=null){new Effect.Fade(advice,{duration:1,afterFinishInternal:function(){advice.hide();}});}},updateCallback:function(elm,status){if(typeof elm.callbackFunction!='undefined'){eval(elm.callbackFunction+'(\''+elm.id+'\',\''+status+'\')');}},ajaxError:function(elm,errorMsg){var name='validate-ajax';var advice=Validation.getAdvice(name,elm);if(advice==null){advice=this.createAdvice(name,elm,false,errorMsg);}
this.showAdvice(elm,advice,'validate-ajax');this.updateCallback(elm,'failed');elm.addClassName('validation-failed');elm.addClassName('validate-ajax');if(Validation.defaultOptions.addClassNameToContainer&&Validation.defaultOptions.containerClassName!=''){var container=elm.up(Validation.defaultOptions.containerClassName);if(container&&this.allowContainerClassName(elm)){container.removeClassName('validation-passed');container.addClassName('validation-error');}}},allowContainerClassName:function(elm){if(elm.type=='radio'||elm.type=='checkbox'){return elm.hasClassName('change-container-classname');}
return true;},test:function(name,elm,useTitle){var v=Validation.get(name);var prop='__advice'+name.camelize();try{if(Validation.isVisible(elm)&&!v.test($F(elm),elm)){var advice=Validation.getAdvice(name,elm);if(advice==null){advice=this.createAdvice(name,elm,useTitle);}
this.showAdvice(elm,advice,name);this.updateCallback(elm,'failed');elm[prop]=1;if(!elm.advaiceContainer){elm.removeClassName('validation-passed');elm.addClassName('validation-failed');}
if(Validation.defaultOptions.addClassNameToContainer&&Validation.defaultOptions.containerClassName!=''){var container=elm.up(Validation.defaultOptions.containerClassName);if(container&&this.allowContainerClassName(elm)){container.removeClassName('validation-passed');container.addClassName('validation-error');}}
return false;}else{var advice=Validation.getAdvice(name,elm);this.hideAdvice(elm,advice);this.updateCallback(elm,'passed');elm[prop]='';elm.removeClassName('validation-failed');elm.addClassName('validation-passed');if(Validation.defaultOptions.addClassNameToContainer&&Validation.defaultOptions.containerClassName!=''){var container=elm.up(Validation.defaultOptions.containerClassName);if(container&&!container.down('.validation-failed')&&this.allowContainerClassName(elm)){if(!Validation.get('IsEmpty').test(elm.value)||!this.isVisible(elm)){container.addClassName('validation-passed');}else{container.removeClassName('validation-passed');}
container.removeClassName('validation-error');}}
return true;}}catch(e){throw(e)}},isVisible:function(elm){while(elm.tagName!='BODY'){if(!$(elm).visible())return false;elm=elm.parentNode;}
return true;},getAdvice:function(name,elm){return $('advice-'+ name+'-'+ Validation.getElmID(elm))||$('advice-'+ Validation.getElmID(elm));},createAdvice:function(name,elm,useTitle,customError){var v=Validation.get(name);var errorMsg=useTitle?((elm&&elm.title)?elm.title:v.error):v.error;if(customError){errorMsg=customError;}
try{if(Translator){errorMsg=Translator.translate(errorMsg);}}
catch(e){}
advice='<div class="validation-advice" id="advice-'+ name+'-'+ Validation.getElmID(elm)+'" style="display:none">'+ errorMsg+'</div>'
Validation.insertAdvice(elm,advice);advice=Validation.getAdvice(name,elm);if($(elm).hasClassName('absolute-advice')){var dimensions=$(elm).getDimensions();var originalPosition=Position.cumulativeOffset(elm);advice._adviceTop=(originalPosition[1]+ dimensions.height)+'px';advice._adviceLeft=(originalPosition[0])+'px';advice._adviceWidth=(dimensions.width)+'px';advice._adviceAbsolutize=true;}
return advice;},getElmID:function(elm){return elm.id?elm.id:elm.name;},reset:function(elm){elm=$(elm);var cn=$w(elm.className);cn.each(function(value){var prop='__advice'+value.camelize();if(elm[prop]){var advice=Validation.getAdvice(value,elm);if(advice){advice.hide();}
elm[prop]='';}
elm.removeClassName('validation-failed');elm.removeClassName('validation-passed');if(Validation.defaultOptions.addClassNameToContainer&&Validation.defaultOptions.containerClassName!=''){var container=elm.up(Validation.defaultOptions.containerClassName);if(container){container.removeClassName('validation-passed');container.removeClassName('validation-error');}}});},add:function(className,error,test,options){var nv={};nv[className]=new Validator(className,error,test,options);Object.extend(Validation.methods,nv);},addAllThese:function(validators){var nv={};$A(validators).each(function(value){nv[value[0]]=new Validator(value[0],value[1],value[2],(value.length>3?value[3]:{}));});Object.extend(Validation.methods,nv);},get:function(name){return Validation.methods[name]?Validation.methods[name]:Validation.methods['_LikeNoIDIEverSaw_'];},methods:{'_LikeNoIDIEverSaw_':new Validator('_LikeNoIDIEverSaw_','',{})}});Validation.add('IsEmpty','',function(v){return(v==''||(v==null)||(v.length==0)||/^\s+$/.test(v));});Validation.addAllThese([['validate-no-html-tags','HTML tags are not allowed',function(v){return!/<(\/)?\w+/.test(v);}],['validate-select','Please select an option.',function(v){return((v!="none")&&(v!=null)&&(v.length!=0));}],['required-entry','This is a required field.',function(v){return!Validation.get('IsEmpty').test(v);}],['validate-number','Please enter a valid number in this field.',function(v){return Validation.get('IsEmpty').test(v)||(!isNaN(parseNumber(v))&&/^\s*-?\d*(\.\d*)?\s*$/.test(v));}],['validate-number-range','The value is not within the specified range.',function(v,elm){if(Validation.get('IsEmpty').test(v)){return true;}
var numValue=parseNumber(v);if(isNaN(numValue)){return false;}
var reRange=/^number-range-(-?[\d.,]+)?-(-?[\d.,]+)?$/,result=true;$w(elm.className).each(function(name){var m=reRange.exec(name);if(m){result=result&&(m[1]==null||m[1]==''||numValue>=parseNumber(m[1]))&&(m[2]==null||m[2]==''||numValue<=parseNumber(m[2]));}});return result;}],['validate-digits','Please use numbers only in this field. Please avoid spaces or other characters such as dots or commas.',function(v){return Validation.get('IsEmpty').test(v)||!/[^\d]/.test(v);}],['validate-digits-range','The value is not within the specified range.',function(v,elm){if(Validation.get('IsEmpty').test(v)){return true;}
var numValue=parseNumber(v);if(isNaN(numValue)){return false;}
var reRange=/^digits-range-(-?\d+)?-(-?\d+)?$/,result=true;$w(elm.className).each(function(name){var m=reRange.exec(name);if(m){result=result&&(m[1]==null||m[1]==''||numValue>=parseNumber(m[1]))&&(m[2]==null||m[2]==''||numValue<=parseNumber(m[2]));}});return result;}],['validate-alpha','Please use letters only (a-z or A-Z) in this field.',function(v){return Validation.get('IsEmpty').test(v)||/^[a-zA-Z]+$/.test(v)}],['validate-code','Please use only letters (a-z), numbers (0-9) or underscore(_) in this field, first character should be a letter.',function(v){return Validation.get('IsEmpty').test(v)||/^[a-z]+[a-z0-9_]+$/.test(v)}],['validate-alphanum','Please use only letters (a-z or A-Z) or numbers (0-9) only in this field. No spaces or other characters are allowed.',function(v){return Validation.get('IsEmpty').test(v)||/^[a-zA-Z0-9]+$/.test(v)}],['validate-alphanum-with-spaces','Please use only letters (a-z or A-Z), numbers (0-9) or spaces only in this field.',function(v){return Validation.get('IsEmpty').test(v)||/^[a-zA-Z0-9 ]+$/.test(v)}],['validate-street','Please use only letters (a-z or A-Z) or numbers (0-9) or spaces and # only in this field.',function(v){return Validation.get('IsEmpty').test(v)||/^[ \w]{3,}([A-Za-z]\.)?([ \w]*\#\d+)?(\r\n| )[ \w]{3,}/.test(v)}],['validate-phoneStrict','Please enter a valid phone number. For example (123) 456-7890 or 123-456-7890.',function(v){return Validation.get('IsEmpty').test(v)||/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(v);}],['validate-phoneLax','Please enter a valid phone number. For example (123) 456-7890 or 123-456-7890.',function(v){return Validation.get('IsEmpty').test(v)||/^((\d[-. ]?)?((\(\d{3}\))|\d{3}))?[-. ]?\d{3}[-. ]?\d{4}$/.test(v);}],['validate-fax','Please enter a valid fax number. For example (123) 456-7890 or 123-456-7890.',function(v){return Validation.get('IsEmpty').test(v)||/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(v);}],['validate-date','Please enter a valid date.',function(v){var test=new Date(v);return Validation.get('IsEmpty').test(v)||!isNaN(test);}],['validate-email','Please enter a valid email address. For example johndoe@domain.com.',function(v){return Validation.get('IsEmpty').test(v)||/^([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*@([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*\.(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]){2,})$/i.test(v)}],['validate-emailSender','Please use only visible characters and spaces.',function(v){return Validation.get('IsEmpty').test(v)||/^[\S ]+$/.test(v)}],['validate-password','Please enter 6 or more characters. Leading or trailing spaces will be ignored.',function(v){var pass=v.strip();return!(pass.length>0&&pass.length<6);}],['validate-admin-password','Please enter 7 or more characters. Password should contain both numeric and alphabetic characters.',function(v){var pass=v.strip();if(0==pass.length){return true;}
if(!(/[a-z]/i.test(v))||!(/[0-9]/.test(v))){return false;}
return!(pass.length<7);}],['validate-cpassword','Please make sure your passwords match.',function(v){var conf=$('confirmation')?$('confirmation'):$$('.validate-cpassword')[0];var pass=false;if($('password')){pass=$('password');}
var passwordElements=$$('.validate-password');for(var i=0;i<passwordElements.size();i++){var passwordElement=passwordElements[i];if(passwordElement.up('form').id==conf.up('form').id){pass=passwordElement;}}
if($$('.validate-admin-password').size()){pass=$$('.validate-admin-password')[0];}
return(pass.value==conf.value);}],['validate-url','Please enter a valid URL. Protocol is required (http://, https:// or ftp://)',function(v){v=(v||'').replace(/^\s+/,'').replace(/\s+$/,'');return Validation.get('IsEmpty').test(v)||/^(http|https|ftp):\/\/(([A-Z0-9]([A-Z0-9_-]*[A-Z0-9]|))(\.[A-Z0-9]([A-Z0-9_-]*[A-Z0-9]|))*)(:(\d+))?(\/[A-Z0-9~](([A-Z0-9_~-]|\.)*[A-Z0-9~]|))*\/?(.*)?$/i.test(v)}],['validate-clean-url','Please enter a valid URL. For example http://www.example.com or www.example.com',function(v){return Validation.get('IsEmpty').test(v)||/^(http|https|ftp):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+.(com|org|net|dk|at|us|tv|info|uk|co.uk|biz|se)$)(:(\d+))?\/?/i.test(v)||/^(www)((\.[A-Z0-9][A-Z0-9_-]*)+.(com|org|net|dk|at|us|tv|info|uk|co.uk|biz|se)$)(:(\d+))?\/?/i.test(v)}],['validate-identifier','Please enter a valid URL Key. For example "example-page", "example-page.html" or "anotherlevel/example-page".',function(v){return Validation.get('IsEmpty').test(v)||/^[a-z0-9][a-z0-9_\/-]+(\.[a-z0-9_-]+)?$/.test(v)}],['validate-xml-identifier','Please enter a valid XML-identifier. For example something_1, block5, id-4.',function(v){return Validation.get('IsEmpty').test(v)||/^[A-Z][A-Z0-9_\/-]*$/i.test(v)}],['validate-ssn','Please enter a valid social security number. For example 123-45-6789.',function(v){return Validation.get('IsEmpty').test(v)||/^\d{3}-?\d{2}-?\d{4}$/.test(v);}],['validate-zip','Please enter a valid zip code. For example 90602 or 90602-1234.',function(v){return Validation.get('IsEmpty').test(v)||/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(v);}],['validate-zip-international','Please enter a valid zip code.',function(v){return true;}],['validate-date-au','Please use this date format: dd/mm/yyyy. For example 17/03/2006 for the 17th of March, 2006.',function(v){if(Validation.get('IsEmpty').test(v))return true;var regex=/^(\d{2})\/(\d{2})\/(\d{4})$/;if(!regex.test(v))return false;var d=new Date(v.replace(regex,'$2/$1/$3'));return(parseInt(RegExp.$2,10)==(1+d.getMonth()))&&(parseInt(RegExp.$1,10)==d.getDate())&&(parseInt(RegExp.$3,10)==d.getFullYear());}],['validate-currency-dollar','Please enter a valid $ amount. For example $100.00.',function(v){return Validation.get('IsEmpty').test(v)||/^\$?\-?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}\d*(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/.test(v)}],['validate-one-required','Please select one of the above options.',function(v,elm){var p=elm.parentNode;var options=p.getElementsByTagName('INPUT');return $A(options).any(function(elm){return $F(elm);});}],['validate-one-required-by-name','Please select one of the options.',function(v,elm){var inputs=$$('input[name="'+ elm.name.replace(/([\\"])/g,'\\$1')+'"]');var error=1;for(var i=0;i<inputs.length;i++){if((inputs[i].type=='checkbox'||inputs[i].type=='radio')&&inputs[i].checked==true){error=0;}
if(Validation.isOnChange&&(inputs[i].type=='checkbox'||inputs[i].type=='radio')){Validation.reset(inputs[i]);}}
if(error==0){return true;}else{return false;}}],['validate-not-negative-number','Please enter a number 0 or greater in this field.',function(v){if(Validation.get('IsEmpty').test(v)){return true;}
v=parseNumber(v);return!isNaN(v)&&v>=0;}],['validate-zero-or-greater','Please enter a number 0 or greater in this field.',function(v){return Validation.get('validate-not-negative-number').test(v);}],['validate-greater-than-zero','Please enter a number greater than 0 in this field.',function(v){if(Validation.get('IsEmpty').test(v)){return true;}
v=parseNumber(v);return!isNaN(v)&&v>0;}],['validate-state','Please select State/Province.',function(v){return(v!=0||v=='');}],['validate-new-password','Please enter 6 or more characters. Leading or trailing spaces will be ignored.',function(v){if(!Validation.get('validate-password').test(v))return false;if(Validation.get('IsEmpty').test(v)&&v!='')return false;return true;}],['validate-cc-number','Please enter a valid credit card number.',function(v,elm){var ccTypeContainer=$(elm.id.substr(0,elm.id.indexOf('_cc_number'))+'_cc_type');if(ccTypeContainer&&typeof Validation.creditCartTypes.get(ccTypeContainer.value)!='undefined'&&Validation.creditCartTypes.get(ccTypeContainer.value)[2]==false){if(!Validation.get('IsEmpty').test(v)&&Validation.get('validate-digits').test(v)){return true;}else{return false;}}
return validateCreditCard(v);}],['validate-cc-type','Credit card number does not match credit card type.',function(v,elm){elm.value=removeDelimiters(elm.value);v=removeDelimiters(v);var ccTypeContainer=$(elm.id.substr(0,elm.id.indexOf('_cc_number'))+'_cc_type');if(!ccTypeContainer){return true;}
var ccType=ccTypeContainer.value;if(typeof Validation.creditCartTypes.get(ccType)=='undefined'){return false;}
if(Validation.creditCartTypes.get(ccType)[0]==false){return true;}
var ccMatchedType='';Validation.creditCartTypes.each(function(pair){if(pair.value[0]&&v.match(pair.value[0])){ccMatchedType=pair.key;throw $break;}});if(ccMatchedType!=ccType){return false;}
if(ccTypeContainer.hasClassName('validation-failed')&&Validation.isOnChange){Validation.validate(ccTypeContainer);}
return true;}],['validate-cc-type-select','Card type does not match credit card number.',function(v,elm){var ccNumberContainer=$(elm.id.substr(0,elm.id.indexOf('_cc_type'))+'_cc_number');if(Validation.isOnChange&&Validation.get('IsEmpty').test(ccNumberContainer.value)){return true;}
if(Validation.get('validate-cc-type').test(ccNumberContainer.value,ccNumberContainer)){Validation.validate(ccNumberContainer);}
return Validation.get('validate-cc-type').test(ccNumberContainer.value,ccNumberContainer);}],['validate-cc-exp','Incorrect credit card expiration date.',function(v,elm){var ccExpMonth=v;var ccExpYear=$(elm.id.substr(0,elm.id.indexOf('_expiration'))+'_expiration_yr').value;var currentTime=new Date();var currentMonth=currentTime.getMonth()+ 1;var currentYear=currentTime.getFullYear();if(ccExpMonth<currentMonth&&ccExpYear==currentYear){return false;}
return true;}],['validate-cc-cvn','Please enter a valid credit card verification number.',function(v,elm){var ccTypeContainer=$(elm.id.substr(0,elm.id.indexOf('_cc_cid'))+'_cc_type');if(!ccTypeContainer){return true;}
var ccType=ccTypeContainer.value;if(typeof Validation.creditCartTypes.get(ccType)=='undefined'){return false;}
var re=Validation.creditCartTypes.get(ccType)[1];if(v.match(re)){return true;}
return false;}],['validate-ajax','',function(v,elm){return true;}],['validate-data','Please use only letters (a-z or A-Z), numbers (0-9) or underscore(_) in this field, first character should be a letter.',function(v){if(v!=''&&v){return/^[A-Za-z]+[A-Za-z0-9_]+$/.test(v);}
return true;}],['validate-css-length','Please input a valid CSS-length. For example 100px or 77pt or 20em or .5ex or 50%.',function(v){if(v!=''&&v){return/^[0-9\.]+(px|pt|em|ex|%)?$/.test(v)&&(!(/\..*\./.test(v)))&&!(/\.$/.test(v));}
return true;}],['validate-length','Text length does not satisfy specified text range.',function(v,elm){var reMax=new RegExp(/^maximum-length-[0-9]+$/);var reMin=new RegExp(/^minimum-length-[0-9]+$/);var result=true;$w(elm.className).each(function(name,index){if(name.match(reMax)&&result){var length=name.split('-')[2];result=(v.length<=length);}
if(name.match(reMin)&&result&&!Validation.get('IsEmpty').test(v)){var length=name.split('-')[2];result=(v.length>=length);}});return result;}],['validate-percents','Please enter a number lower than 100.',{max:100}],['required-file','Please select a file',function(v,elm){var result=!Validation.get('IsEmpty').test(v);if(result===false){ovId=elm.id+'_value';if($(ovId)){result=!Validation.get('IsEmpty').test($(ovId).value);}}
return result;}],['validate-cc-ukss','Please enter issue number or start date for switch/solo card type.',function(v,elm){var endposition;if(elm.id.match(/(.)+_cc_issue$/)){endposition=elm.id.indexOf('_cc_issue');}else if(elm.id.match(/(.)+_start_month$/)){endposition=elm.id.indexOf('_start_month');}else{endposition=elm.id.indexOf('_start_year');}
var prefix=elm.id.substr(0,endposition);var ccTypeContainer=$(prefix+'_cc_type');if(!ccTypeContainer){return true;}
var ccType=ccTypeContainer.value;if(['SS','SM','SO'].indexOf(ccType)==-1){return true;}
$(prefix+'_cc_issue').advaiceContainer=$(prefix+'_start_month').advaiceContainer=$(prefix+'_start_year').advaiceContainer=$(prefix+'_cc_type_ss_div').down('ul li.adv-container');var ccIssue=$(prefix+'_cc_issue').value;var ccSMonth=$(prefix+'_start_month').value;var ccSYear=$(prefix+'_start_year').value;var ccStartDatePresent=(ccSMonth&&ccSYear)?true:false;if(!ccStartDatePresent&&!ccIssue){return false;}
return true;}]]);function removeDelimiters(v){v=v.replace(/\s/g,'');v=v.replace(/\-/g,'');return v;}
function parseNumber(v)
{if(typeof v!='string'){return parseFloat(v);}
var isDot=v.indexOf('.');var isComa=v.indexOf(',');if(isDot!=-1&&isComa!=-1){if(isComa>isDot){v=v.replace('.','').replace(',','.');}
else{v=v.replace(',','');}}
else if(isComa!=-1){v=v.replace(',','.');}
return parseFloat(v);}
Validation.creditCartTypes=$H({'SO':[new RegExp('^(6334[5-9]([0-9]{11}|[0-9]{13,14}))|(6767([0-9]{12}|[0-9]{14,15}))$'),new RegExp('^([0-9]{3}|[0-9]{4})?$'),true],'SM':[new RegExp('(^(5[0678])[0-9]{11,18}$)|(^(6[^05])[0-9]{11,18}$)|(^(601)[^1][0-9]{9,16}$)|(^(6011)[0-9]{9,11}$)|(^(6011)[0-9]{13,16}$)|(^(65)[0-9]{11,13}$)|(^(65)[0-9]{15,18}$)|(^(49030)[2-9]([0-9]{10}$|[0-9]{12,13}$))|(^(49033)[5-9]([0-9]{10}$|[0-9]{12,13}$))|(^(49110)[1-2]([0-9]{10}$|[0-9]{12,13}$))|(^(49117)[4-9]([0-9]{10}$|[0-9]{12,13}$))|(^(49118)[0-2]([0-9]{10}$|[0-9]{12,13}$))|(^(4936)([0-9]{12}$|[0-9]{14,15}$))'),new RegExp('^([0-9]{3}|[0-9]{4})?$'),true],'VI':[new RegExp('^4[0-9]{12}([0-9]{3})?$'),new RegExp('^[0-9]{3}$'),true],'MC':[new RegExp('^5[1-5][0-9]{14}$'),new RegExp('^[0-9]{3}$'),true],'AE':[new RegExp('^3[47][0-9]{13}$'),new RegExp('^[0-9]{4}$'),true],'DI':[new RegExp('^6011[0-9]{12}$'),new RegExp('^[0-9]{3}$'),true],'JCB':[new RegExp('^(3[0-9]{15}|(2131|1800)[0-9]{11})$'),new RegExp('^[0-9]{3,4}$'),true],'OT':[false,new RegExp('^([0-9]{3}|[0-9]{4})?$'),false]});var Scriptaculous={Version:'1.8.2',require:function(libraryName){document.write('<script type="text/javascript" src="'+libraryName+'"><\/script>');},REQUIRED_PROTOTYPE:'1.6.0.3',load:function(){function convertVersionString(versionString){var v=versionString.replace(/_.*|\./g,'');v=parseInt(v+'0'.times(4-v.length));return versionString.indexOf('_')>-1?v-1:v;}
if((typeof Prototype=='undefined')||(typeof Element=='undefined')||(typeof Element.Methods=='undefined')||(convertVersionString(Prototype.Version)<convertVersionString(Scriptaculous.REQUIRED_PROTOTYPE)))
throw("script.aculo.us requires the Prototype JavaScript framework >= "+
Scriptaculous.REQUIRED_PROTOTYPE);var js=/scriptaculous\.js(\?.*)?$/;$$('head script[src]').findAll(function(s){return s.src.match(js);}).each(function(s){var path=s.src.replace(js,''),includes=s.src.match(/\?.*load=([a-z,]*)/);(includes?includes[1]:'builder,effects,dragdrop,controls,slider,sound').split(',').each(function(include){Scriptaculous.require(path+include+'.js')});});}};Scriptaculous.load();var Builder={NODEMAP:{AREA:'map',CAPTION:'table',COL:'table',COLGROUP:'table',LEGEND:'fieldset',OPTGROUP:'select',OPTION:'select',PARAM:'object',TBODY:'table',TD:'table',TFOOT:'table',TH:'table',THEAD:'table',TR:'table'},node:function(elementName){elementName=elementName.toUpperCase();var parentTag=this.NODEMAP[elementName]||'div';var parentElement=document.createElement(parentTag);try{parentElement.innerHTML="<"+ elementName+"></"+ elementName+">";}catch(e){}
var element=parentElement.firstChild||null;if(element&&(element.tagName.toUpperCase()!=elementName))
element=element.getElementsByTagName(elementName)[0];if(!element)element=document.createElement(elementName);if(!element)return;if(arguments[1])
if(this._isStringOrNumber(arguments[1])||(arguments[1]instanceof Array)||arguments[1].tagName){this._children(element,arguments[1]);}else{var attrs=this._attributes(arguments[1]);if(attrs.length){try{parentElement.innerHTML="<"+elementName+" "+
attrs+"></"+ elementName+">";}catch(e){}
element=parentElement.firstChild||null;if(!element){element=document.createElement(elementName);for(attr in arguments[1])
element[attr=='class'?'className':attr]=arguments[1][attr];}
if(element.tagName.toUpperCase()!=elementName)
element=parentElement.getElementsByTagName(elementName)[0];}}
if(arguments[2])
this._children(element,arguments[2]);return $(element);},_text:function(text){return document.createTextNode(text);},ATTR_MAP:{'className':'class','htmlFor':'for'},_attributes:function(attributes){var attrs=[];for(attribute in attributes)
attrs.push((attribute in this.ATTR_MAP?this.ATTR_MAP[attribute]:attribute)+'="'+ attributes[attribute].toString().escapeHTML().gsub(/"/,'&quot;')+'"');return attrs.join(" ");},_children:function(element,children){if(children.tagName){element.appendChild(children);return;}
if(typeof children=='object'){children.flatten().each(function(e){if(typeof e=='object')
element.appendChild(e);else
if(Builder._isStringOrNumber(e))
element.appendChild(Builder._text(e));});}else
if(Builder._isStringOrNumber(children))
element.appendChild(Builder._text(children));},_isStringOrNumber:function(param){return(typeof param=='string'||typeof param=='number');},build:function(html){var element=this.node('div');$(element).update(html.strip());return element.down();},dump:function(scope){if(typeof scope!='object'&&typeof scope!='function')scope=window;var tags=("A ABBR ACRONYM ADDRESS APPLET AREA B BASE BASEFONT BDO BIG BLOCKQUOTE BODY "+"BR BUTTON CAPTION CENTER CITE CODE COL COLGROUP DD DEL DFN DIR DIV DL DT EM FIELDSET "+"FONT FORM FRAME FRAMESET H1 H2 H3 H4 H5 H6 HEAD HR HTML I IFRAME IMG INPUT INS ISINDEX "+"KBD LABEL LEGEND LI LINK MAP MENU META NOFRAMES NOSCRIPT OBJECT OL OPTGROUP OPTION P "+"PARAM PRE Q S SAMP SCRIPT SELECT SMALL SPAN STRIKE STRONG STYLE SUB SUP TABLE TBODY TD "+"TEXTAREA TFOOT TH THEAD TITLE TR TT U UL VAR").split(/\s+/);tags.each(function(tag){scope[tag]=function(){return Builder.node.apply(Builder,[tag].concat($A(arguments)));};});}};String.prototype.parseColor=function(){var color='#';if(this.slice(0,4)=='rgb('){var cols=this.slice(4,this.length-1).split(',');var i=0;do{color+=parseInt(cols[i]).toColorPart()}while(++i<3);}else{if(this.slice(0,1)=='#'){if(this.length==4)for(var i=1;i<4;i++)color+=(this.charAt(i)+ this.charAt(i)).toLowerCase();if(this.length==7)color=this.toLowerCase();}}
return(color.length==7?color:(arguments[0]||this));};Element.collectTextNodes=function(element){return $A($(element).childNodes).collect(function(node){return(node.nodeType==3?node.nodeValue:(node.hasChildNodes()?Element.collectTextNodes(node):''));}).flatten().join('');};Element.collectTextNodesIgnoreClass=function(element,className){return $A($(element).childNodes).collect(function(node){return(node.nodeType==3?node.nodeValue:((node.hasChildNodes()&&!Element.hasClassName(node,className))?Element.collectTextNodesIgnoreClass(node,className):''));}).flatten().join('');};Element.setContentZoom=function(element,percent){element=$(element);element.setStyle({fontSize:(percent/100)+'em'});if(Prototype.Browser.WebKit)window.scrollBy(0,0);return element;};Element.getInlineOpacity=function(element){return $(element).style.opacity||'';};Element.forceRerendering=function(element){try{element=$(element);var n=document.createTextNode(' ');element.appendChild(n);element.removeChild(n);}catch(e){}};var Effect={_elementDoesNotExistError:{name:'ElementDoesNotExistError',message:'The specified DOM element does not exist, but is required for this effect to operate'},Transitions:{linear:Prototype.K,sinoidal:function(pos){return(-Math.cos(pos*Math.PI)/2) + .5;
},reverse:function(pos){return 1-pos;},flicker:function(pos){var pos=((-Math.cos(pos*Math.PI)/4) + .75) + Math.random()/4;
return pos>1?1:pos;},wobble:function(pos){return(-Math.cos(pos*Math.PI*(9*pos))/2) + .5;
},pulse:function(pos,pulses){return(-Math.cos((pos*((pulses||5)-.5)*2)*Math.PI)/2) + .5;
},spring:function(pos){return 1-(Math.cos(pos*4.5*Math.PI)*Math.exp(-pos*6));},none:function(pos){return 0;},full:function(pos){return 1;}},DefaultOptions:{duration:1.0,fps:100,sync:false,from:0.0,to:1.0,delay:0.0,queue:'parallel'},tagifyText:function(element){var tagifyStyle='position:relative';if(Prototype.Browser.IE)tagifyStyle+=';zoom:1';element=$(element);$A(element.childNodes).each(function(child){if(child.nodeType==3){child.nodeValue.toArray().each(function(character){element.insertBefore(new Element('span',{style:tagifyStyle}).update(character==' '?String.fromCharCode(160):character),child);});Element.remove(child);}});},multiple:function(element,effect){var elements;if(((typeof element=='object')||Object.isFunction(element))&&(element.length))
elements=element;else
elements=$(element).childNodes;var options=Object.extend({speed:0.1,delay:0.0},arguments[2]||{});var masterDelay=options.delay;$A(elements).each(function(element,index){new effect(element,Object.extend(options,{delay:index*options.speed+ masterDelay}));});},PAIRS:{'slide':['SlideDown','SlideUp'],'blind':['BlindDown','BlindUp'],'appear':['Appear','Fade']},toggle:function(element,effect){element=$(element);effect=(effect||'appear').toLowerCase();var options=Object.extend({queue:{position:'end',scope:(element.id||'global'),limit:1}},arguments[2]||{});Effect[element.visible()?Effect.PAIRS[effect][1]:Effect.PAIRS[effect][0]](element,options);}};Effect.DefaultOptions.transition=Effect.Transitions.sinoidal;Effect.ScopedQueue=Class.create(Enumerable,{initialize:function(){this.effects=[];this.interval=null;},_each:function(iterator){this.effects._each(iterator);},add:function(effect){var timestamp=new Date().getTime();var position=Object.isString(effect.options.queue)?effect.options.queue:effect.options.queue.position;switch(position){case'front':this.effects.findAll(function(e){return e.state=='idle'}).each(function(e){e.startOn+=effect.finishOn;e.finishOn+=effect.finishOn;});break;case'with-last':timestamp=this.effects.pluck('startOn').max()||timestamp;break;case'end':timestamp=this.effects.pluck('finishOn').max()||timestamp;break;}
effect.startOn+=timestamp;effect.finishOn+=timestamp;if(!effect.options.queue.limit||(this.effects.length<effect.options.queue.limit))
this.effects.push(effect);if(!this.interval)
this.interval=setInterval(this.loop.bind(this),15);},remove:function(effect){this.effects=this.effects.reject(function(e){return e==effect});if(this.effects.length==0){clearInterval(this.interval);this.interval=null;}},loop:function(){var timePos=new Date().getTime();for(var i=0,len=this.effects.length;i<len;i++)
this.effects[i]&&this.effects[i].loop(timePos);}});Effect.Queues={instances:$H(),get:function(queueName){if(!Object.isString(queueName))return queueName;return this.instances.get(queueName)||this.instances.set(queueName,new Effect.ScopedQueue());}};Effect.Queue=Effect.Queues.get('global');Effect.Base=Class.create({position:null,start:function(options){function codeForEvent(options,eventName){return((options[eventName+'Internal']?'this.options.'+eventName+'Internal(this);':'')+
(options[eventName]?'this.options.'+eventName+'(this);':''));}
if(options&&options.transition===false)options.transition=Effect.Transitions.linear;this.options=Object.extend(Object.extend({},Effect.DefaultOptions),options||{});this.currentFrame=0;this.state='idle';this.startOn=this.options.delay*1000;this.finishOn=this.startOn+(this.options.duration*1000);this.fromToDelta=this.options.to-this.options.from;this.totalTime=this.finishOn-this.startOn;this.totalFrames=this.options.fps*this.options.duration;this.render=(function(){function dispatch(effect,eventName){if(effect.options[eventName+'Internal'])
effect.options[eventName+'Internal'](effect);if(effect.options[eventName])
effect.options[eventName](effect);}
return function(pos){if(this.state==="idle"){this.state="running";dispatch(this,'beforeSetup');if(this.setup)this.setup();dispatch(this,'afterSetup');}
if(this.state==="running"){pos=(this.options.transition(pos)*this.fromToDelta)+ this.options.from;this.position=pos;dispatch(this,'beforeUpdate');if(this.update)this.update(pos);dispatch(this,'afterUpdate');}};})();this.event('beforeStart');if(!this.options.sync)
Effect.Queues.get(Object.isString(this.options.queue)?'global':this.options.queue.scope).add(this);},loop:function(timePos){if(timePos>=this.startOn){if(timePos>=this.finishOn){this.render(1.0);this.cancel();this.event('beforeFinish');if(this.finish)this.finish();this.event('afterFinish');return;}
var pos=(timePos- this.startOn)/ this.totalTime,
frame=(pos*this.totalFrames).round();if(frame>this.currentFrame){this.render(pos);this.currentFrame=frame;}}},cancel:function(){if(!this.options.sync)
Effect.Queues.get(Object.isString(this.options.queue)?'global':this.options.queue.scope).remove(this);this.state='finished';},event:function(eventName){if(this.options[eventName+'Internal'])this.options[eventName+'Internal'](this);if(this.options[eventName])this.options[eventName](this);},inspect:function(){var data=$H();for(property in this)
if(!Object.isFunction(this[property]))data.set(property,this[property]);return'#<Effect:'+ data.inspect()+',options:'+ $H(this.options).inspect()+'>';}});Effect.Parallel=Class.create(Effect.Base,{initialize:function(effects){this.effects=effects||[];this.start(arguments[1]);},update:function(position){this.effects.invoke('render',position);},finish:function(position){this.effects.each(function(effect){effect.render(1.0);effect.cancel();effect.event('beforeFinish');if(effect.finish)effect.finish(position);effect.event('afterFinish');});}});Effect.Tween=Class.create(Effect.Base,{initialize:function(object,from,to){object=Object.isString(object)?$(object):object;var args=$A(arguments),method=args.last(),options=args.length==5?args[3]:null;this.method=Object.isFunction(method)?method.bind(object):Object.isFunction(object[method])?object[method].bind(object):function(value){object[method]=value};this.start(Object.extend({from:from,to:to},options||{}));},update:function(position){this.method(position);}});Effect.Event=Class.create(Effect.Base,{initialize:function(){this.start(Object.extend({duration:0},arguments[0]||{}));},update:Prototype.emptyFunction});Effect.Opacity=Class.create(Effect.Base,{initialize:function(element){this.element=$(element);if(!this.element)throw(Effect._elementDoesNotExistError);if(Prototype.Browser.IE&&(!this.element.currentStyle.hasLayout))
this.element.setStyle({zoom:1});var options=Object.extend({from:this.element.getOpacity()||0.0,to:1.0},arguments[1]||{});this.start(options);},update:function(position){this.element.setOpacity(position);}});Effect.Move=Class.create(Effect.Base,{initialize:function(element){this.element=$(element);if(!this.element)throw(Effect._elementDoesNotExistError);var options=Object.extend({x:0,y:0,mode:'relative'},arguments[1]||{});this.start(options);},setup:function(){this.element.makePositioned();this.originalLeft=parseFloat(this.element.getStyle('left')||'0');this.originalTop=parseFloat(this.element.getStyle('top')||'0');if(this.options.mode=='absolute'){this.options.x=this.options.x- this.originalLeft;this.options.y=this.options.y- this.originalTop;}},update:function(position){this.element.setStyle({left:(this.options.x*position+ this.originalLeft).round()+'px',top:(this.options.y*position+ this.originalTop).round()+'px'});}});Effect.MoveBy=function(element,toTop,toLeft){return new Effect.Move(element,Object.extend({x:toLeft,y:toTop},arguments[3]||{}));};Effect.Scale=Class.create(Effect.Base,{initialize:function(element,percent){this.element=$(element);if(!this.element)throw(Effect._elementDoesNotExistError);var options=Object.extend({scaleX:true,scaleY:true,scaleContent:true,scaleFromCenter:false,scaleMode:'box',scaleFrom:100.0,scaleTo:percent},arguments[2]||{});this.start(options);},setup:function(){this.restoreAfterFinish=this.options.restoreAfterFinish||false;this.elementPositioning=this.element.getStyle('position');this.originalStyle={};['top','left','width','height','fontSize'].each(function(k){this.originalStyle[k]=this.element.style[k];}.bind(this));this.originalTop=this.element.offsetTop;this.originalLeft=this.element.offsetLeft;var fontSize=this.element.getStyle('font-size')||'100%';['em','px','%','pt'].each(function(fontSizeType){if(fontSize.indexOf(fontSizeType)>0){this.fontSize=parseFloat(fontSize);this.fontSizeType=fontSizeType;}}.bind(this));this.factor=(this.options.scaleTo- this.options.scaleFrom)/100;
this.dims=null;if(this.options.scaleMode=='box')
this.dims=[this.element.offsetHeight,this.element.offsetWidth];if(/^content/.test(this.options.scaleMode))
this.dims=[this.element.scrollHeight,this.element.scrollWidth];if(!this.dims)
this.dims=[this.options.scaleMode.originalHeight,this.options.scaleMode.originalWidth];},update:function(position){var currentScale=(this.options.scaleFrom/100.0)+(this.factor*position);if(this.options.scaleContent&&this.fontSize)
this.element.setStyle({fontSize:this.fontSize*currentScale+ this.fontSizeType});this.setDimensions(this.dims[0]*currentScale,this.dims[1]*currentScale);},finish:function(position){if(this.restoreAfterFinish)this.element.setStyle(this.originalStyle);},setDimensions:function(height,width){var d={};if(this.options.scaleX)d.width=width.round()+'px';if(this.options.scaleY)d.height=height.round()+'px';if(this.options.scaleFromCenter){var topd=(height- this.dims[0])/2;
var leftd=(width- this.dims[1])/2;
if(this.elementPositioning=='absolute'){if(this.options.scaleY)d.top=this.originalTop-topd+'px';if(this.options.scaleX)d.left=this.originalLeft-leftd+'px';}else{if(this.options.scaleY)d.top=-topd+'px';if(this.options.scaleX)d.left=-leftd+'px';}}
this.element.setStyle(d);}});Effect.Highlight=Class.create(Effect.Base,{initialize:function(element){this.element=$(element);if(!this.element)throw(Effect._elementDoesNotExistError);var options=Object.extend({startcolor:'#ffff99'},arguments[1]||{});this.start(options);},setup:function(){if(this.element.getStyle('display')=='none'){this.cancel();return;}
this.oldStyle={};if(!this.options.keepBackgroundImage){this.oldStyle.backgroundImage=this.element.getStyle('background-image');this.element.setStyle({backgroundImage:'none'});}
if(!this.options.endcolor)
this.options.endcolor=this.element.getStyle('background-color').parseColor('#ffffff');if(!this.options.restorecolor)
this.options.restorecolor=this.element.getStyle('background-color');this._base=$R(0,2).map(function(i){return parseInt(this.options.startcolor.slice(i*2+1,i*2+3),16)}.bind(this));this._delta=$R(0,2).map(function(i){return parseInt(this.options.endcolor.slice(i*2+1,i*2+3),16)-this._base[i]}.bind(this));},update:function(position){this.element.setStyle({backgroundColor:$R(0,2).inject('#',function(m,v,i){return m+((this._base[i]+(this._delta[i]*position)).round().toColorPart());}.bind(this))});},finish:function(){this.element.setStyle(Object.extend(this.oldStyle,{backgroundColor:this.options.restorecolor}));}});Effect.ScrollTo=function(element){var options=arguments[1]||{},scrollOffsets=document.viewport.getScrollOffsets(),elementOffsets=$(element).cumulativeOffset();if(options.offset)elementOffsets[1]+=options.offset;return new Effect.Tween(null,scrollOffsets.top,elementOffsets[1],options,function(p){scrollTo(scrollOffsets.left,p.round());});};Effect.Fade=function(element){element=$(element);var oldOpacity=element.getInlineOpacity();var options=Object.extend({from:element.getOpacity()||1.0,to:0.0,afterFinishInternal:function(effect){if(effect.options.to!=0)return;effect.element.hide().setStyle({opacity:oldOpacity});}},arguments[1]||{});return new Effect.Opacity(element,options);};Effect.Appear=function(element){element=$(element);var options=Object.extend({from:(element.getStyle('display')=='none'?0.0:element.getOpacity()||0.0),to:1.0,afterFinishInternal:function(effect){effect.element.forceRerendering();},beforeSetup:function(effect){effect.element.setOpacity(effect.options.from).show();}},arguments[1]||{});return new Effect.Opacity(element,options);};Effect.Puff=function(element){element=$(element);var oldStyle={opacity:element.getInlineOpacity(),position:element.getStyle('position'),top:element.style.top,left:element.style.left,width:element.style.width,height:element.style.height};return new Effect.Parallel([new Effect.Scale(element,200,{sync:true,scaleFromCenter:true,scaleContent:true,restoreAfterFinish:true}),new Effect.Opacity(element,{sync:true,to:0.0})],Object.extend({duration:1.0,beforeSetupInternal:function(effect){Position.absolutize(effect.effects[0].element);},afterFinishInternal:function(effect){effect.effects[0].element.hide().setStyle(oldStyle);}},arguments[1]||{}));};Effect.BlindUp=function(element){element=$(element);element.makeClipping();return new Effect.Scale(element,0,Object.extend({scaleContent:false,scaleX:false,restoreAfterFinish:true,afterFinishInternal:function(effect){effect.element.hide().undoClipping();}},arguments[1]||{}));};Effect.BlindDown=function(element){element=$(element);var elementDimensions=element.getDimensions();return new Effect.Scale(element,100,Object.extend({scaleContent:false,scaleX:false,scaleFrom:0,scaleMode:{originalHeight:elementDimensions.height,originalWidth:elementDimensions.width},restoreAfterFinish:true,afterSetup:function(effect){effect.element.makeClipping().setStyle({height:'0px'}).show();},afterFinishInternal:function(effect){effect.element.undoClipping();}},arguments[1]||{}));};Effect.SwitchOff=function(element){element=$(element);var oldOpacity=element.getInlineOpacity();return new Effect.Appear(element,Object.extend({duration:0.4,from:0,transition:Effect.Transitions.flicker,afterFinishInternal:function(effect){new Effect.Scale(effect.element,1,{duration:0.3,scaleFromCenter:true,scaleX:false,scaleContent:false,restoreAfterFinish:true,beforeSetup:function(effect){effect.element.makePositioned().makeClipping();},afterFinishInternal:function(effect){effect.element.hide().undoClipping().undoPositioned().setStyle({opacity:oldOpacity});}});}},arguments[1]||{}));};Effect.DropOut=function(element){element=$(element);var oldStyle={top:element.getStyle('top'),left:element.getStyle('left'),opacity:element.getInlineOpacity()};return new Effect.Parallel([new Effect.Move(element,{x:0,y:100,sync:true}),new Effect.Opacity(element,{sync:true,to:0.0})],Object.extend({duration:0.5,beforeSetup:function(effect){effect.effects[0].element.makePositioned();},afterFinishInternal:function(effect){effect.effects[0].element.hide().undoPositioned().setStyle(oldStyle);}},arguments[1]||{}));};Effect.Shake=function(element){element=$(element);var options=Object.extend({distance:20,duration:0.5},arguments[1]||{});var distance=parseFloat(options.distance);var split=parseFloat(options.duration)/ 10.0;
var oldStyle={top:element.getStyle('top'),left:element.getStyle('left')};return new Effect.Move(element,{x:distance,y:0,duration:split,afterFinishInternal:function(effect){new Effect.Move(effect.element,{x:-distance*2,y:0,duration:split*2,afterFinishInternal:function(effect){new Effect.Move(effect.element,{x:distance*2,y:0,duration:split*2,afterFinishInternal:function(effect){new Effect.Move(effect.element,{x:-distance*2,y:0,duration:split*2,afterFinishInternal:function(effect){new Effect.Move(effect.element,{x:distance*2,y:0,duration:split*2,afterFinishInternal:function(effect){new Effect.Move(effect.element,{x:-distance,y:0,duration:split,afterFinishInternal:function(effect){effect.element.undoPositioned().setStyle(oldStyle);}});}});}});}});}});}});};Effect.SlideDown=function(element){element=$(element).cleanWhitespace();var oldInnerBottom=element.down().getStyle('bottom');var elementDimensions=element.getDimensions();return new Effect.Scale(element,100,Object.extend({scaleContent:false,scaleX:false,scaleFrom:window.opera?0:1,scaleMode:{originalHeight:elementDimensions.height,originalWidth:elementDimensions.width},restoreAfterFinish:true,afterSetup:function(effect){effect.element.makePositioned();effect.element.down().makePositioned();if(window.opera)effect.element.setStyle({top:''});effect.element.makeClipping().setStyle({height:'0px'}).show();},afterUpdateInternal:function(effect){effect.element.down().setStyle({bottom:(effect.dims[0]- effect.element.clientHeight)+'px'});},afterFinishInternal:function(effect){effect.element.undoClipping().undoPositioned();effect.element.down().undoPositioned().setStyle({bottom:oldInnerBottom});}},arguments[1]||{}));};Effect.SlideUp=function(element){element=$(element).cleanWhitespace();var oldInnerBottom=element.down().getStyle('bottom');var elementDimensions=element.getDimensions();return new Effect.Scale(element,window.opera?0:1,Object.extend({scaleContent:false,scaleX:false,scaleMode:'box',scaleFrom:100,scaleMode:{originalHeight:elementDimensions.height,originalWidth:elementDimensions.width},restoreAfterFinish:true,afterSetup:function(effect){effect.element.makePositioned();effect.element.down().makePositioned();if(window.opera)effect.element.setStyle({top:''});effect.element.makeClipping().show();},afterUpdateInternal:function(effect){effect.element.down().setStyle({bottom:(effect.dims[0]- effect.element.clientHeight)+'px'});},afterFinishInternal:function(effect){effect.element.hide().undoClipping().undoPositioned();effect.element.down().undoPositioned().setStyle({bottom:oldInnerBottom});}},arguments[1]||{}));};Effect.Squish=function(element){return new Effect.Scale(element,window.opera?1:0,{restoreAfterFinish:true,beforeSetup:function(effect){effect.element.makeClipping();},afterFinishInternal:function(effect){effect.element.hide().undoClipping();}});};Effect.Grow=function(element){element=$(element);var options=Object.extend({direction:'center',moveTransition:Effect.Transitions.sinoidal,scaleTransition:Effect.Transitions.sinoidal,opacityTransition:Effect.Transitions.full},arguments[1]||{});var oldStyle={top:element.style.top,left:element.style.left,height:element.style.height,width:element.style.width,opacity:element.getInlineOpacity()};var dims=element.getDimensions();var initialMoveX,initialMoveY;var moveX,moveY;switch(options.direction){case'top-left':initialMoveX=initialMoveY=moveX=moveY=0;break;case'top-right':initialMoveX=dims.width;initialMoveY=moveY=0;moveX=-dims.width;break;case'bottom-left':initialMoveX=moveX=0;initialMoveY=dims.height;moveY=-dims.height;break;case'bottom-right':initialMoveX=dims.width;initialMoveY=dims.height;moveX=-dims.width;moveY=-dims.height;break;case'center':initialMoveX=dims.width/2;initialMoveY=dims.height/2;moveX=-dims.width/2;moveY=-dims.height/2;break;}
return new Effect.Move(element,{x:initialMoveX,y:initialMoveY,duration:0.01,beforeSetup:function(effect){effect.element.hide().makeClipping().makePositioned();},afterFinishInternal:function(effect){new Effect.Parallel([new Effect.Opacity(effect.element,{sync:true,to:1.0,from:0.0,transition:options.opacityTransition}),new Effect.Move(effect.element,{x:moveX,y:moveY,sync:true,transition:options.moveTransition}),new Effect.Scale(effect.element,100,{scaleMode:{originalHeight:dims.height,originalWidth:dims.width},sync:true,scaleFrom:window.opera?1:0,transition:options.scaleTransition,restoreAfterFinish:true})],Object.extend({beforeSetup:function(effect){effect.effects[0].element.setStyle({height:'0px'}).show();},afterFinishInternal:function(effect){effect.effects[0].element.undoClipping().undoPositioned().setStyle(oldStyle);}},options));}});};Effect.Shrink=function(element){element=$(element);var options=Object.extend({direction:'center',moveTransition:Effect.Transitions.sinoidal,scaleTransition:Effect.Transitions.sinoidal,opacityTransition:Effect.Transitions.none},arguments[1]||{});var oldStyle={top:element.style.top,left:element.style.left,height:element.style.height,width:element.style.width,opacity:element.getInlineOpacity()};var dims=element.getDimensions();var moveX,moveY;switch(options.direction){case'top-left':moveX=moveY=0;break;case'top-right':moveX=dims.width;moveY=0;break;case'bottom-left':moveX=0;moveY=dims.height;break;case'bottom-right':moveX=dims.width;moveY=dims.height;break;case'center':moveX=dims.width/2;moveY=dims.height/2;break;}
return new Effect.Parallel([new Effect.Opacity(element,{sync:true,to:0.0,from:1.0,transition:options.opacityTransition}),new Effect.Scale(element,window.opera?1:0,{sync:true,transition:options.scaleTransition,restoreAfterFinish:true}),new Effect.Move(element,{x:moveX,y:moveY,sync:true,transition:options.moveTransition})],Object.extend({beforeStartInternal:function(effect){effect.effects[0].element.makePositioned().makeClipping();},afterFinishInternal:function(effect){effect.effects[0].element.hide().undoClipping().undoPositioned().setStyle(oldStyle);}},options));};Effect.Pulsate=function(element){element=$(element);var options=arguments[1]||{},oldOpacity=element.getInlineOpacity(),transition=options.transition||Effect.Transitions.linear,reverser=function(pos){return 1- transition((-Math.cos((pos*(options.pulses||5)*2)*Math.PI)/2) + .5);
};return new Effect.Opacity(element,Object.extend(Object.extend({duration:2.0,from:0,afterFinishInternal:function(effect){effect.element.setStyle({opacity:oldOpacity});}},options),{transition:reverser}));};Effect.Fold=function(element){element=$(element);var oldStyle={top:element.style.top,left:element.style.left,width:element.style.width,height:element.style.height};element.makeClipping();return new Effect.Scale(element,5,Object.extend({scaleContent:false,scaleX:false,afterFinishInternal:function(effect){new Effect.Scale(element,1,{scaleContent:false,scaleY:false,afterFinishInternal:function(effect){effect.element.hide().undoClipping().setStyle(oldStyle);}});}},arguments[1]||{}));};Effect.Morph=Class.create(Effect.Base,{initialize:function(element){this.element=$(element);if(!this.element)throw(Effect._elementDoesNotExistError);var options=Object.extend({style:{}},arguments[1]||{});if(!Object.isString(options.style))this.style=$H(options.style);else{if(options.style.include(':'))
this.style=options.style.parseStyle();else{this.element.addClassName(options.style);this.style=$H(this.element.getStyles());this.element.removeClassName(options.style);var css=this.element.getStyles();this.style=this.style.reject(function(style){return style.value==css[style.key];});options.afterFinishInternal=function(effect){effect.element.addClassName(effect.options.style);effect.transforms.each(function(transform){effect.element.style[transform.style]='';});};}}
this.start(options);},setup:function(){function parseColor(color){if(!color||['rgba(0, 0, 0, 0)','transparent'].include(color))color='#ffffff';color=color.parseColor();return $R(0,2).map(function(i){return parseInt(color.slice(i*2+1,i*2+3),16);});}
this.transforms=this.style.map(function(pair){var property=pair[0],value=pair[1],unit=null;if(value.parseColor('#zzzzzz')!='#zzzzzz'){value=value.parseColor();unit='color';}else if(property=='opacity'){value=parseFloat(value);if(Prototype.Browser.IE&&(!this.element.currentStyle.hasLayout))
this.element.setStyle({zoom:1});}else if(Element.CSS_LENGTH.test(value)){var components=value.match(/^([\+\-]?[0-9\.]+)(.*)$/);value=parseFloat(components[1]);unit=(components.length==3)?components[2]:null;}
var originalValue=this.element.getStyle(property);return{style:property.camelize(),originalValue:unit=='color'?parseColor(originalValue):parseFloat(originalValue||0),targetValue:unit=='color'?parseColor(value):value,unit:unit};}.bind(this)).reject(function(transform){return((transform.originalValue==transform.targetValue)||(transform.unit!='color'&&(isNaN(transform.originalValue)||isNaN(transform.targetValue))));});},update:function(position){var style={},transform,i=this.transforms.length;while(i--)
style[(transform=this.transforms[i]).style]=transform.unit=='color'?'#'+
(Math.round(transform.originalValue[0]+
(transform.targetValue[0]-transform.originalValue[0])*position)).toColorPart()+
(Math.round(transform.originalValue[1]+
(transform.targetValue[1]-transform.originalValue[1])*position)).toColorPart()+
(Math.round(transform.originalValue[2]+
(transform.targetValue[2]-transform.originalValue[2])*position)).toColorPart():(transform.originalValue+
(transform.targetValue- transform.originalValue)*position).toFixed(3)+
(transform.unit===null?'':transform.unit);this.element.setStyle(style,true);}});Effect.Transform=Class.create({initialize:function(tracks){this.tracks=[];this.options=arguments[1]||{};this.addTracks(tracks);},addTracks:function(tracks){tracks.each(function(track){track=$H(track);var data=track.values().first();this.tracks.push($H({ids:track.keys().first(),effect:Effect.Morph,options:{style:data}}));}.bind(this));return this;},play:function(){return new Effect.Parallel(this.tracks.map(function(track){var ids=track.get('ids'),effect=track.get('effect'),options=track.get('options');var elements=[$(ids)||$$(ids)].flatten();return elements.map(function(e){return new effect(e,Object.extend({sync:true},options))});}).flatten(),this.options);}});Element.CSS_PROPERTIES=$w('backgroundColor backgroundPosition borderBottomColor borderBottomStyle '+'borderBottomWidth borderLeftColor borderLeftStyle borderLeftWidth '+'borderRightColor borderRightStyle borderRightWidth borderSpacing '+'borderTopColor borderTopStyle borderTopWidth bottom clip color '+'fontSize fontWeight height left letterSpacing lineHeight '+'marginBottom marginLeft marginRight marginTop markerOffset maxHeight '+'maxWidth minHeight minWidth opacity outlineColor outlineOffset '+'outlineWidth paddingBottom paddingLeft paddingRight paddingTop '+'right textIndent top width wordSpacing zIndex');Element.CSS_LENGTH=/^(([\+\-]?[0-9\.]+)(em|ex|px|in|cm|mm|pt|pc|\%))|0$/;String.__parseStyleElement=document.createElement('div');String.prototype.parseStyle=function(){var style,styleRules=$H();if(Prototype.Browser.WebKit)
style=new Element('div',{style:this}).style;else{String.__parseStyleElement.innerHTML='<div style="'+ this+'"></div>';style=String.__parseStyleElement.childNodes[0].style;}
Element.CSS_PROPERTIES.each(function(property){if(style[property])styleRules.set(property,style[property]);});if(Prototype.Browser.IE&&this.include('opacity'))
styleRules.set('opacity',this.match(/opacity:\s*((?:0|1)?(?:\.\d*)?)/)[1]);return styleRules;};if(document.defaultView&&document.defaultView.getComputedStyle){Element.getStyles=function(element){var css=document.defaultView.getComputedStyle($(element),null);return Element.CSS_PROPERTIES.inject({},function(styles,property){styles[property]=css[property];return styles;});};}else{Element.getStyles=function(element){element=$(element);var css=element.currentStyle,styles;styles=Element.CSS_PROPERTIES.inject({},function(results,property){results[property]=css[property];return results;});if(!styles.opacity)styles.opacity=element.getOpacity();return styles;};}
Effect.Methods={morph:function(element,style){element=$(element);new Effect.Morph(element,Object.extend({style:style},arguments[2]||{}));return element;},visualEffect:function(element,effect,options){element=$(element);var s=effect.dasherize().camelize(),klass=s.charAt(0).toUpperCase()+ s.substring(1);new Effect[klass](element,options);return element;},highlight:function(element,options){element=$(element);new Effect.Highlight(element,options);return element;}};$w('fade appear grow shrink fold blindUp blindDown slideUp slideDown '+'pulsate shake puff squish switchOff dropOut').each(function(effect){Effect.Methods[effect]=function(element,options){element=$(element);Effect[effect.charAt(0).toUpperCase()+ effect.substring(1)](element,options);return element;};});$w('getInlineOpacity forceRerendering setContentZoom collectTextNodes collectTextNodesIgnoreClass getStyles').each(function(f){Effect.Methods[f]=Element[f];});Element.addMethods(Effect.Methods);if(Object.isUndefined(Effect))
throw("dragdrop.js requires including script.aculo.us' effects.js library");var Droppables={drops:[],remove:function(element){this.drops=this.drops.reject(function(d){return d.element==$(element)});},add:function(element){element=$(element);var options=Object.extend({greedy:true,hoverclass:null,tree:false},arguments[1]||{});if(options.containment){options._containers=[];var containment=options.containment;if(Object.isArray(containment)){containment.each(function(c){options._containers.push($(c))});}else{options._containers.push($(containment));}}
if(options.accept)options.accept=[options.accept].flatten();Element.makePositioned(element);options.element=element;this.drops.push(options);},findDeepestChild:function(drops){deepest=drops[0];for(i=1;i<drops.length;++i)
if(Element.isParent(drops[i].element,deepest.element))
deepest=drops[i];return deepest;},isContained:function(element,drop){var containmentNode;if(drop.tree){containmentNode=element.treeNode;}else{containmentNode=element.parentNode;}
return drop._containers.detect(function(c){return containmentNode==c});},isAffected:function(point,element,drop){return((drop.element!=element)&&((!drop._containers)||this.isContained(element,drop))&&((!drop.accept)||(Element.classNames(element).detect(function(v){return drop.accept.include(v)})))&&Position.within(drop.element,point[0],point[1]));},deactivate:function(drop){if(drop.hoverclass)
Element.removeClassName(drop.element,drop.hoverclass);this.last_active=null;},activate:function(drop){if(drop.hoverclass)
Element.addClassName(drop.element,drop.hoverclass);this.last_active=drop;},show:function(point,element){if(!this.drops.length)return;var drop,affected=[];this.drops.each(function(drop){if(Droppables.isAffected(point,element,drop))
affected.push(drop);});if(affected.length>0)
drop=Droppables.findDeepestChild(affected);if(this.last_active&&this.last_active!=drop)this.deactivate(this.last_active);if(drop){Position.within(drop.element,point[0],point[1]);if(drop.onHover)
drop.onHover(element,drop.element,Position.overlap(drop.overlap,drop.element));if(drop!=this.last_active)Droppables.activate(drop);}},fire:function(event,element){if(!this.last_active)return;Position.prepare();if(this.isAffected([Event.pointerX(event),Event.pointerY(event)],element,this.last_active))
if(this.last_active.onDrop){this.last_active.onDrop(element,this.last_active.element,event);return true;}},reset:function(){if(this.last_active)
this.deactivate(this.last_active);}};var Draggables={drags:[],observers:[],register:function(draggable){if(this.drags.length==0){this.eventMouseUp=this.endDrag.bindAsEventListener(this);this.eventMouseMove=this.updateDrag.bindAsEventListener(this);this.eventKeypress=this.keyPress.bindAsEventListener(this);Event.observe(document,"mouseup",this.eventMouseUp);Event.observe(document,"mousemove",this.eventMouseMove);Event.observe(document,"keypress",this.eventKeypress);}
this.drags.push(draggable);},unregister:function(draggable){this.drags=this.drags.reject(function(d){return d==draggable});if(this.drags.length==0){Event.stopObserving(document,"mouseup",this.eventMouseUp);Event.stopObserving(document,"mousemove",this.eventMouseMove);Event.stopObserving(document,"keypress",this.eventKeypress);}},activate:function(draggable){if(draggable.options.delay){this._timeout=setTimeout(function(){Draggables._timeout=null;window.focus();Draggables.activeDraggable=draggable;}.bind(this),draggable.options.delay);}else{window.focus();this.activeDraggable=draggable;}},deactivate:function(){this.activeDraggable=null;},updateDrag:function(event){if(!this.activeDraggable)return;var pointer=[Event.pointerX(event),Event.pointerY(event)];if(this._lastPointer&&(this._lastPointer.inspect()==pointer.inspect()))return;this._lastPointer=pointer;this.activeDraggable.updateDrag(event,pointer);},endDrag:function(event){if(this._timeout){clearTimeout(this._timeout);this._timeout=null;}
if(!this.activeDraggable)return;this._lastPointer=null;this.activeDraggable.endDrag(event);this.activeDraggable=null;},keyPress:function(event){if(this.activeDraggable)
this.activeDraggable.keyPress(event);},addObserver:function(observer){this.observers.push(observer);this._cacheObserverCallbacks();},removeObserver:function(element){this.observers=this.observers.reject(function(o){return o.element==element});this._cacheObserverCallbacks();},notify:function(eventName,draggable,event){if(this[eventName+'Count']>0)
this.observers.each(function(o){if(o[eventName])o[eventName](eventName,draggable,event);});if(draggable.options[eventName])draggable.options[eventName](draggable,event);},_cacheObserverCallbacks:function(){['onStart','onEnd','onDrag'].each(function(eventName){Draggables[eventName+'Count']=Draggables.observers.select(function(o){return o[eventName];}).length;});}};var Draggable=Class.create({initialize:function(element){var defaults={handle:false,reverteffect:function(element,top_offset,left_offset){var dur=Math.sqrt(Math.abs(top_offset^2)+Math.abs(left_offset^2))*0.02;new Effect.Move(element,{x:-left_offset,y:-top_offset,duration:dur,queue:{scope:'_draggable',position:'end'}});},endeffect:function(element){var toOpacity=Object.isNumber(element._opacity)?element._opacity:1.0;new Effect.Opacity(element,{duration:0.2,from:0.7,to:toOpacity,queue:{scope:'_draggable',position:'end'},afterFinish:function(){Draggable._dragging[element]=false}});},zindex:1000,revert:false,quiet:false,scroll:false,scrollSensitivity:20,scrollSpeed:15,snap:false,delay:0};if(!arguments[1]||Object.isUndefined(arguments[1].endeffect))
Object.extend(defaults,{starteffect:function(element){element._opacity=Element.getOpacity(element);Draggable._dragging[element]=true;new Effect.Opacity(element,{duration:0.2,from:element._opacity,to:0.7});}});var options=Object.extend(defaults,arguments[1]||{});this.element=$(element);if(options.handle&&Object.isString(options.handle))
this.handle=this.element.down('.'+options.handle,0);if(!this.handle)this.handle=$(options.handle);if(!this.handle)this.handle=this.element;if(options.scroll&&!options.scroll.scrollTo&&!options.scroll.outerHTML){options.scroll=$(options.scroll);this._isScrollChild=Element.childOf(this.element,options.scroll);}
Element.makePositioned(this.element);this.options=options;this.dragging=false;this.eventMouseDown=this.initDrag.bindAsEventListener(this);Event.observe(this.handle,"mousedown",this.eventMouseDown);Draggables.register(this);},destroy:function(){Event.stopObserving(this.handle,"mousedown",this.eventMouseDown);Draggables.unregister(this);},currentDelta:function(){return([parseInt(Element.getStyle(this.element,'left')||'0'),parseInt(Element.getStyle(this.element,'top')||'0')]);},initDrag:function(event){if(!Object.isUndefined(Draggable._dragging[this.element])&&Draggable._dragging[this.element])return;if(Event.isLeftClick(event)){var src=Event.element(event);if((tag_name=src.tagName.toUpperCase())&&(tag_name=='INPUT'||tag_name=='SELECT'||tag_name=='OPTION'||tag_name=='BUTTON'||tag_name=='TEXTAREA'))return;var pointer=[Event.pointerX(event),Event.pointerY(event)];var pos=this.element.cumulativeOffset();this.offset=[0,1].map(function(i){return(pointer[i]- pos[i])});Draggables.activate(this);Event.stop(event);}},startDrag:function(event){this.dragging=true;if(!this.delta)
this.delta=this.currentDelta();if(this.options.zindex){this.originalZ=parseInt(Element.getStyle(this.element,'z-index')||0);this.element.style.zIndex=this.options.zindex;}
if(this.options.ghosting){this._clone=this.element.cloneNode(true);this._originallyAbsolute=(this.element.getStyle('position')=='absolute');if(!this._originallyAbsolute)
Position.absolutize(this.element);this.element.parentNode.insertBefore(this._clone,this.element);}
if(this.options.scroll){if(this.options.scroll==window){var where=this._getWindowScroll(this.options.scroll);this.originalScrollLeft=where.left;this.originalScrollTop=where.top;}else{this.originalScrollLeft=this.options.scroll.scrollLeft;this.originalScrollTop=this.options.scroll.scrollTop;}}
Draggables.notify('onStart',this,event);if(this.options.starteffect)this.options.starteffect(this.element);},updateDrag:function(event,pointer){if(!this.dragging)this.startDrag(event);if(!this.options.quiet){Position.prepare();Droppables.show(pointer,this.element);}
Draggables.notify('onDrag',this,event);this.draw(pointer);if(this.options.change)this.options.change(this);if(this.options.scroll){this.stopScrolling();var p;if(this.options.scroll==window){with(this._getWindowScroll(this.options.scroll)){p=[left,top,left+width,top+height];}}else{p=Position.page(this.options.scroll).toArray();p[0]+=this.options.scroll.scrollLeft+ Position.deltaX;p[1]+=this.options.scroll.scrollTop+ Position.deltaY;p.push(p[0]+this.options.scroll.offsetWidth);p.push(p[1]+this.options.scroll.offsetHeight);}
var speed=[0,0];if(pointer[0]<(p[0]+this.options.scrollSensitivity))speed[0]=pointer[0]-(p[0]+this.options.scrollSensitivity);if(pointer[1]<(p[1]+this.options.scrollSensitivity))speed[1]=pointer[1]-(p[1]+this.options.scrollSensitivity);if(pointer[0]>(p[2]-this.options.scrollSensitivity))speed[0]=pointer[0]-(p[2]-this.options.scrollSensitivity);if(pointer[1]>(p[3]-this.options.scrollSensitivity))speed[1]=pointer[1]-(p[3]-this.options.scrollSensitivity);this.startScrolling(speed);}
if(Prototype.Browser.WebKit)window.scrollBy(0,0);Event.stop(event);},finishDrag:function(event,success){this.dragging=false;if(this.options.quiet){Position.prepare();var pointer=[Event.pointerX(event),Event.pointerY(event)];Droppables.show(pointer,this.element);}
if(this.options.ghosting){if(!this._originallyAbsolute)
Position.relativize(this.element);delete this._originallyAbsolute;Element.remove(this._clone);this._clone=null;}
var dropped = false;
    if(success) {
      dropped = Droppables.fire(event, this.element);
      if (!dropped) dropped = false;
    }
    if(dropped && this.options.onDropped) this.options.onDropped(this.element);
    Draggables.notify('onEnd', this, event);

    var revert = this.options.revert;
    if(revert && Object.isFunction(revert)) revert = revert(this.element);

    var d = this.currentDelta();
    if(revert && this.options.reverteffect) {
      if (dropped == 0 || revert != 'failure')
        this.options.reverteffect(this.element,
          d[1]-this.delta[1], d[0]-this.delta[0]);
    } else {
      this.delta = d;
    }

    if(this.options.zindex)
      this.element.style.zIndex = this.originalZ;

    if(this.options.endeffect)
      this.options.endeffect(this.element);

    Draggables.deactivate(this);
    Droppables.reset();
  },

  keyPress: function(event) {
    if(event.keyCode!=Event.KEY_ESC) return;
    this.finishDrag(event, false);
    Event.stop(event);
  },

  endDrag: function(event) {
    if(!this.dragging) return;
    this.stopScrolling();
    this.finishDrag(event, true);
    Event.stop(event);
  },

  draw: function(point) {
    var pos = this.element.cumulativeOffset();
    if(this.options.ghosting) {
      var r   = Position.realOffset(this.element);
      pos[0] += r[0] - Position.deltaX; pos[1] += r[1] - Position.deltaY;
    }

    var d = this.currentDelta();
    pos[0] -= d[0]; pos[1] -= d[1];

    if(this.options.scroll && (this.options.scroll != window && this._isScrollChild)) {
      pos[0] -= this.options.scroll.scrollLeft-this.originalScrollLeft;
      pos[1] -= this.options.scroll.scrollTop-this.originalScrollTop;
    }

    var p = [0,1].map(function(i){
      return (point[i]-pos[i]-this.offset[i])
    }.bind(this));

    if(this.options.snap) {
      if(Object.isFunction(this.options.snap)) {
        p = this.options.snap(p[0],p[1],this);
      } else {
      if(Object.isArray(this.options.snap)) {
        p = p.map( function(v, i) {
          return (v/this.options.snap[i]).round()*this.options.snap[i] }.bind(this));
      } else {
        p = p.map( function(v) {
          return (v/this.options.snap).round()*this.options.snap }.bind(this));
      }
    }}

    var style = this.element.style;
    if((!this.options.constraint) || (this.options.constraint=='horizontal'))
      style.left = p[0] + "px";
    if((!this.options.constraint) || (this.options.constraint=='vertical'))
      style.top  = p[1] + "px";

    if(style.visibility=="hidden") style.visibility = ""; // fix gecko rendering
  },

  stopScrolling: function() {
    if(this.scrollInterval) {
      clearInterval(this.scrollInterval);
      this.scrollInterval = null;
      Draggables._lastScrollPointer = null;
    }
  },

  startScrolling: function(speed) {
    if(!(speed[0] || speed[1])) return;
    this.scrollSpeed = [speed[0]*this.options.scrollSpeed,speed[1]*this.options.scrollSpeed];
    this.lastScrolled = new Date();
    this.scrollInterval = setInterval(this.scroll.bind(this), 10);
  },

  scroll: function() {
    var current = new Date();
    var delta = current - this.lastScrolled;
    this.lastScrolled = current;
    if(this.options.scroll == window) {
      with (this._getWindowScroll(this.options.scroll)) {
        if (this.scrollSpeed[0] || this.scrollSpeed[1]) {
          var d = delta / 1000;
          this.options.scroll.scrollTo( left + d*this.scrollSpeed[0], top + d*this.scrollSpeed[1] );
        }
      }
    } else {
      this.options.scroll.scrollLeft += this.scrollSpeed[0] * delta / 1000;
      this.options.scroll.scrollTop  += this.scrollSpeed[1] * delta / 1000;
    }

    Position.prepare();
    Droppables.show(Draggables._lastPointer, this.element);
    Draggables.notify('onDrag', this);
    if (this._isScrollChild) {
      Draggables._lastScrollPointer = Draggables._lastScrollPointer || $A(Draggables._lastPointer);
      Draggables._lastScrollPointer[0] += this.scrollSpeed[0] * delta / 1000;
      Draggables._lastScrollPointer[1] += this.scrollSpeed[1] * delta / 1000;
      if (Draggables._lastScrollPointer[0] < 0)
        Draggables._lastScrollPointer[0] = 0;
      if (Draggables._lastScrollPointer[1] < 0)
        Draggables._lastScrollPointer[1] = 0;
      this.draw(Draggables._lastScrollPointer);
    }

    if(this.options.change) this.options.change(this);
  },

  _getWindowScroll: function(w) {
    var T, L, W, H;
    with (w.document) {
      if (w.document.documentElement && documentElement.scrollTop) {
        T = documentElement.scrollTop;
        L = documentElement.scrollLeft;
      } else if (w.document.body) {
        T = body.scrollTop;
        L = body.scrollLeft;
      }
      if (w.innerWidth) {
        W = w.innerWidth;
        H = w.innerHeight;
      } else if (w.document.documentElement && documentElement.clientWidth) {
        W = documentElement.clientWidth;
        H = documentElement.clientHeight;
      } else {
        W = body.offsetWidth;
        H = body.offsetHeight;
      }
    }
    return { top: T, left: L, width: W, height: H };
  }
});

Draggable._dragging = { };

/*--------------------------------------------------------------------------*/

var SortableObserver = Class.create({
  initialize: function(element, observer) {
    this.element   = $(element);
    this.observer  = observer;
    this.lastValue = Sortable.serialize(this.element);
  },

  onStart: function() {
    this.lastValue = Sortable.serialize(this.element);
  },

  onEnd: function() {
    Sortable.unmark();
    if(this.lastValue != Sortable.serialize(this.element))
      this.observer(this.element)
  }
});

var Sortable = {
  SERIALIZE_RULE: /^[^_\-](?:[A-Za-z0-9\-\_]*)[_](.*)$/,

  sortables: { },

  _findRootElement: function(element) {
    while (element.tagName.toUpperCase() != "BODY") {
      if(element.id && Sortable.sortables[element.id]) return element;
      element = element.parentNode;
    }
  },

  options: function(element) {
    element = Sortable._findRootElement($(element));
    if(!element) return;
    return Sortable.sortables[element.id];
  },

  destroy: function(element){
    element = $(element);
    var s = Sortable.sortables[element.id];

    if(s) {
      Draggables.removeObserver(s.element);
      s.droppables.each(function(d){ Droppables.remove(d) });
      s.draggables.invoke('destroy');

      delete Sortable.sortables[s.element.id];
    }
  },

  create: function(element) {
    element = $(element);
    var options = Object.extend({
      element:     element,
      tag:         'li',       // assumes li children, override with tag: 'tagname'
      dropOnEmpty: false,
      tree:        false,
      treeTag:     'ul',
      overlap:     'vertical', // one of 'vertical', 'horizontal'
      constraint:  'vertical', // one of 'vertical', 'horizontal', false
      containment: element,    // also takes array of elements (or id's); or false
      handle:      false,      // or a CSS class
      only:        false,
      delay:       0,
      hoverclass:  null,
      ghosting:    false,
      quiet:       false,
      scroll:      false,
      scrollSensitivity: 20,
      scrollSpeed: 15,
      format:      this.SERIALIZE_RULE,

      // these take arrays of elements or ids and can be
      // used for better initialization performance
      elements:    false,
      handles:     false,

      onChange:    Prototype.emptyFunction,
      onUpdate:    Prototype.emptyFunction
    }, arguments[1] || { });

    // clear any old sortable with same element
    this.destroy(element);

    // build options for the draggables
    var options_for_draggable = {
      revert:      true,
      quiet:       options.quiet,
      scroll:      options.scroll,
      scrollSpeed: options.scrollSpeed,
      scrollSensitivity: options.scrollSensitivity,
      delay:       options.delay,
      ghosting:    options.ghosting,
      constraint:  options.constraint,
      handle:      options.handle };

    if(options.starteffect)
      options_for_draggable.starteffect = options.starteffect;

    if(options.reverteffect)
      options_for_draggable.reverteffect = options.reverteffect;
    else
      if(options.ghosting) options_for_draggable.reverteffect = function(element) {
        element.style.top  = 0;
        element.style.left = 0;
      };

    if(options.endeffect)
      options_for_draggable.endeffect = options.endeffect;

    if(options.zindex)
      options_for_draggable.zindex = options.zindex;

    // build options for the droppables
    var options_for_droppable = {
      overlap:     options.overlap,
      containment: options.containment,
      tree:        options.tree,
      hoverclass:  options.hoverclass,
      onHover:     Sortable.onHover
    };

    var options_for_tree = {
      onHover:      Sortable.onEmptyHover,
      overlap:      options.overlap,
      containment:  options.containment,
      hoverclass:   options.hoverclass
    };

    // fix for gecko engine
    Element.cleanWhitespace(element);

    options.draggables = [];
    options.droppables = [];

    // drop on empty handling
    if(options.dropOnEmpty || options.tree) {
      Droppables.add(element, options_for_tree);
      options.droppables.push(element);
    }

    (options.elements || this.findElements(element, options) || []).each( function(e,i) {
      var handle = options.handles ? $(options.handles[i]) :
        (options.handle ? $(e).select('.' + options.handle)[0] : e);
      options.draggables.push(
        new Draggable(e, Object.extend(options_for_draggable, { handle: handle })));
      Droppables.add(e, options_for_droppable);
      if(options.tree) e.treeNode = element;
      options.droppables.push(e);
    });

    if(options.tree) {
      (Sortable.findTreeElements(element, options) || []).each( function(e) {
        Droppables.add(e, options_for_tree);
        e.treeNode = element;
        options.droppables.push(e);
      });
    }

    // keep reference
    this.sortables[element.identify()] = options;

    // for onupdate
    Draggables.addObserver(new SortableObserver(element, options.onUpdate));

  },

  // return all suitable-for-sortable elements in a guaranteed order
  findElements: function(element, options) {
    return Element.findChildren(
      element, options.only, options.tree ? true : false, options.tag);
  },

  findTreeElements: function(element, options) {
    return Element.findChildren(
      element, options.only, options.tree ? true : false, options.treeTag);
  },

  onHover: function(element, dropon, overlap) {
    if(Element.isParent(dropon, element)) return;

    if(overlap > .33 && overlap < .66 && Sortable.options(dropon).tree) {
      return;
    } else if(overlap>0.5) {
      Sortable.mark(dropon, 'before');
      if(dropon.previousSibling != element) {
        var oldParentNode = element.parentNode;
        element.style.visibility = "hidden"; // fix gecko rendering
        dropon.parentNode.insertBefore(element, dropon);
        if(dropon.parentNode!=oldParentNode)
          Sortable.options(oldParentNode).onChange(element);
        Sortable.options(dropon.parentNode).onChange(element);
      }
    } else {
      Sortable.mark(dropon, 'after');
      var nextElement = dropon.nextSibling || null;
      if(nextElement != element) {
        var oldParentNode = element.parentNode;
        element.style.visibility = "hidden"; // fix gecko rendering
        dropon.parentNode.insertBefore(element, nextElement);
        if(dropon.parentNode!=oldParentNode)
          Sortable.options(oldParentNode).onChange(element);
        Sortable.options(dropon.parentNode).onChange(element);
      }
    }
  },

  onEmptyHover: function(element, dropon, overlap) {
    var oldParentNode = element.parentNode;
    var droponOptions = Sortable.options(dropon);

    if(!Element.isParent(dropon, element)) {
      var index;

      var children = Sortable.findElements(dropon, {tag: droponOptions.tag, only: droponOptions.only});
      var child = null;

      if(children) {
        var offset = Element.offsetSize(dropon, droponOptions.overlap) * (1.0 - overlap);

        for (index = 0; index < children.length; index += 1) {
          if (offset - Element.offsetSize (children[index], droponOptions.overlap) >= 0) {
            offset -= Element.offsetSize (children[index], droponOptions.overlap);
          } else if (offset - (Element.offsetSize (children[index], droponOptions.overlap) / 2) >= 0) {
            child = index + 1 < children.length ? children[index + 1] : null;
            break;
          } else {
            child = children[index];
            break;
          }
        }
      }

      dropon.insertBefore(element, child);

      Sortable.options(oldParentNode).onChange(element);
      droponOptions.onChange(element);
    }
  },

  unmark: function() {
    if(Sortable._marker) Sortable._marker.hide();
  },

  mark: function(dropon, position) {
    // mark on ghosting only
    var sortable = Sortable.options(dropon.parentNode);
    if(sortable && !sortable.ghosting) return;

    if(!Sortable._marker) {
      Sortable._marker =
        ($('dropmarker') || Element.extend(document.createElement('DIV'))).
          hide().addClassName('dropmarker').setStyle({position:'absolute'});
      document.getElementsByTagName("body").item(0).appendChild(Sortable._marker);
    }
    var offsets = dropon.cumulativeOffset();
    Sortable._marker.setStyle({left: offsets[0]+'px', top: offsets[1] + 'px'});

    if(position=='after')
      if(sortable.overlap == 'horizontal')
        Sortable._marker.setStyle({left: (offsets[0]+dropon.clientWidth) + 'px'});
      else
        Sortable._marker.setStyle({top: (offsets[1]+dropon.clientHeight) + 'px'});

    Sortable._marker.show();
  },

  _tree: function(element, options, parent) {
    var children = Sortable.findElements(element, options) || [];

    for (var i = 0; i < children.length; ++i) {
      var match = children[i].id.match(options.format);

      if (!match) continue;

      var child = {
        id: encodeURIComponent(match ? match[1] : null),
        element: element,
        parent: parent,
        children: [],
        position: parent.children.length,
        container: $(children[i]).down(options.treeTag)
      };

      /* Get the element containing the children and recurse over it */
      if (child.container)
        this._tree(child.container, options, child);

      parent.children.push (child);
    }

    return parent;
  },

  tree: function(element) {
    element = $(element);
    var sortableOptions = this.options(element);
    var options = Object.extend({
      tag: sortableOptions.tag,
      treeTag: sortableOptions.treeTag,
      only: sortableOptions.only,
      name: element.id,
      format: sortableOptions.format
    }, arguments[1] || { });

    var root = {
      id: null,
      parent: null,
      children: [],
      container: element,
      position: 0
    };

    return Sortable._tree(element, options, root);
  },

  /* Construct a [i] index for a particular node */
  _constructIndex: function(node) {
    var index = '';
    do {
      if (node.id) index = '[' + node.position + ']' + index;
    } while ((node = node.parent) != null);
    return index;
  },

  sequence: function(element) {
    element = $(element);
    var options = Object.extend(this.options(element), arguments[1] || { });

    return $(this.findElements(element, options) || []).map( function(item) {
      return item.id.match(options.format) ? item.id.match(options.format)[1] : '';
    });
  },

  setSequence: function(element, new_sequence) {
    element = $(element);
    var options = Object.extend(this.options(element), arguments[2] || { });

    var nodeMap = { };
    this.findElements(element, options).each( function(n) {
        if (n.id.match(options.format))
            nodeMap[n.id.match(options.format)[1]] = [n, n.parentNode];
        n.parentNode.removeChild(n);
    });

    new_sequence.each(function(ident) {
      var n = nodeMap[ident];
      if (n) {
        n[1].appendChild(n[0]);
        delete nodeMap[ident];
      }
    });
  },

  serialize: function(element) {
    element = $(element);
    var options = Object.extend(Sortable.options(element), arguments[1] || { });
    var name = encodeURIComponent(
      (arguments[1] && arguments[1].name) ? arguments[1].name : element.id);

    if (options.tree) {
      return Sortable.tree(element, arguments[1]).children.map( function (item) {
        return [name + Sortable._constructIndex(item) + "[id]=" +
                encodeURIComponent(item.id)].concat(item.children.map(arguments.callee));
      }).flatten().join('&');
    } else {
      return Sortable.sequence(element, arguments[1]).map( function(item) {
        return name + "[]=" + encodeURIComponent(item);
      }).join('&');
    }
  }
};

// Returns true if child is contained within element
Element.isParent = function(child, element) {
  if (!child.parentNode || child == element) return false;
  if (child.parentNode == element) return true;
  return Element.isParent(child.parentNode, element);
};

Element.findChildren = function(element, only, recursive, tagName) {
  if(!element.hasChildNodes()) return null;
  tagName = tagName.toUpperCase();
  if(only) only = [only].flatten();
  var elements = [];
  $A(element.childNodes).each( function(e) {
    if(e.tagName && e.tagName.toUpperCase()==tagName &&
      (!only || (Element.classNames(e).detect(function(v) { return only.include(v) }))))
        elements.push(e);
    if(recursive) {
      var grandchildren = Element.findChildren(e, only, recursive, tagName);
      if(grandchildren) elements.push(grandchildren);
    }
  });

  return (elements.length>0 ? elements.flatten() : []);
};

Element.offsetSize = function (element, type) {
  return element['offset' + ((type=='vertical' || type=='height') ? 'Height' : 'Width')];
};
// script.aculo.us controls.js v1.8.2, Tue Nov 18 18:30:58 +0100 2008

// Copyright (c) 2005-2008 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
//           (c) 2005-2008 Ivan Krstic (http://blogs.law.harvard.edu/ivan)
//           (c) 2005-2008 Jon Tirsen (http://www.tirsen.com)
// Contributors:
//  Richard Livsey
//  Rahul Bhargava
//  Rob Wills
//
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

// Autocompleter.Base handles all the autocompletion functionality
// that's independent of the data source for autocompletion. This
// includes drawing the autocompletion menu, observing keyboard
// and mouse events, and similar.
//
// Specific autocompleters need to provide, at the very least,
// a getUpdatedChoices function that will be invoked every time
// the text inside the monitored textbox changes. This method
// should get the text for which to provide autocompletion by
// invoking this.getToken(), NOT by directly accessing
// this.element.value. This is to allow incremental tokenized
// autocompletion. Specific auto-completion logic (AJAX, etc)
// belongs in getUpdatedChoices.
//
// Tokenized incremental autocompletion is enabled automatically
// when an autocompleter is instantiated with the 'tokens' option
// in the options parameter, e.g.:
// new Ajax.Autocompleter('id','upd', '/url/', { tokens: ',' });
// will incrementally autocomplete with a comma as the token.
// Additionally, ',' in the above example can be replaced with
// a token array, e.g. { tokens: [',', '\n'] } which
// enables autocompletion on multiple tokens. This is most
// useful when one of the tokens is \n (a newline), as it
// allows smart autocompletion after linebreaks.

if(typeof Effect == 'undefined')
  throw("controls.js requires including script.aculo.us' effects.js library");

var Autocompleter = { };
Autocompleter.Base = Class.create({
  baseInitialize: function(element, update, options) {
    element          = $(element);
    this.element     = element;
    this.update      = $(update);
    this.hasFocus    = false;
    this.changed     = false;
    this.active      = false;
    this.index       = 0;
    this.entryCount  = 0;
    this.oldElementValue = this.element.value;

    if(this.setOptions)
      this.setOptions(options);
    else
      this.options = options || { };

    this.options.paramName    = this.options.paramName || this.element.name;
    this.options.tokens       = this.options.tokens || [];
    this.options.frequency    = this.options.frequency || 0.4;
    this.options.minChars     = this.options.minChars || 1;
    this.options.onShow       = this.options.onShow ||
      function(element, update){
        if(!update.style.position || update.style.position=='absolute') {
          update.style.position = 'absolute';
          Position.clone(element, update, {
            setHeight: false,
            offsetTop: element.offsetHeight
          });
        }
        Effect.Appear(update,{duration:0.15});
      };
    this.options.onHide = this.options.onHide ||
      function(element, update){ new Effect.Fade(update,{duration:0.15}) };

    if(typeof(this.options.tokens) == 'string')
      this.options.tokens = new Array(this.options.tokens);
    // Force carriage returns as token delimiters anyway
    if (!this.options.tokens.include('\n'))
      this.options.tokens.push('\n');

    this.observer = null;

    this.element.setAttribute('autocomplete','off');

    Element.hide(this.update);

    Event.observe(this.element, 'blur', this.onBlur.bindAsEventListener(this));
    Event.observe(this.element, 'keydown', this.onKeyPress.bindAsEventListener(this));
  },

  show: function() {
    if(Element.getStyle(this.update, 'display')=='none') this.options.onShow(this.element, this.update);
    if(!this.iefix &&
      (Prototype.Browser.IE) &&
      (Element.getStyle(this.update, 'position')=='absolute')) {
      new Insertion.After(this.update,
       '<iframe id="' + this.update.id + '_iefix" '+
       'style="display:none;position:absolute;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);" ' +
       'src="javascript:false;" frameborder="0" scrolling="no"></iframe>');
      this.iefix = $(this.update.id+'_iefix');
    }
    if(this.iefix) setTimeout(this.fixIEOverlapping.bind(this), 50);
  },

  fixIEOverlapping: function() {
    Position.clone(this.update, this.iefix, {setTop:(!this.update.style.height)});
    this.iefix.style.zIndex = 1;
    this.update.style.zIndex = 2;
    Element.show(this.iefix);
  },

  hide: function() {
    this.stopIndicator();
    if(Element.getStyle(this.update, 'display')!='none') this.options.onHide(this.element, this.update);
    if(this.iefix) Element.hide(this.iefix);
  },

  startIndicator: function() {
    if(this.options.indicator) Element.show(this.options.indicator);
  },

  stopIndicator: function() {
    if(this.options.indicator) Element.hide(this.options.indicator);
  },

  onKeyPress: function(event) {
    if(this.active)
      switch(event.keyCode) {
       case Event.KEY_TAB:
       case Event.KEY_RETURN:
         this.selectEntry();
         Event.stop(event);
       case Event.KEY_ESC:
         this.hide();
         this.active = false;
         Event.stop(event);
         return;
       case Event.KEY_LEFT:
       case Event.KEY_RIGHT:
         return;
       case Event.KEY_UP:
         this.markPrevious();
         this.render();
         Event.stop(event);
         return;
       case Event.KEY_DOWN:
         this.markNext();
         this.render();
         Event.stop(event);
         return;
      }
     else
       if(event.keyCode==Event.KEY_TAB || event.keyCode==Event.KEY_RETURN ||
         (Prototype.Browser.WebKit > 0 && event.keyCode == 0)) return;

    this.changed = true;
    this.hasFocus = true;

    if(this.observer) clearTimeout(this.observer);
      this.observer =
        setTimeout(this.onObserverEvent.bind(this), this.options.frequency*1000);
  },

  activate: function() {
    this.changed = false;
    this.hasFocus = true;
    this.getUpdatedChoices();
  },

  onHover: function(event) {
    var element = Event.findElement(event, 'LI');
    if(this.index != element.autocompleteIndex)
    {
        this.index = element.autocompleteIndex;
        this.render();
    }
    Event.stop(event);
  },

  onClick: function(event) {
    var element = Event.findElement(event, 'LI');
    this.index = element.autocompleteIndex;
    this.selectEntry();
    this.hide();
  },

  onBlur: function(event) {
    // needed to make click events working
    setTimeout(this.hide.bind(this), 250);
    this.hasFocus = false;
    this.active = false;
  },

  render: function() {
    if(this.entryCount > 0) {
      for (var i = 0; i < this.entryCount; i++)
        this.index==i ?
          Element.addClassName(this.getEntry(i),"selected") :
          Element.removeClassName(this.getEntry(i),"selected");
      if(this.hasFocus) {
        this.show();
        this.active = true;
      }
    } else {
      this.active = false;
      this.hide();
    }
  },

  markPrevious: function() {
    if(this.index > 0) this.index--;
      else this.index = this.entryCount-1;
    //this.getEntry(this.index).scrollIntoView(true); useless
  },

  markNext: function() {
    if(this.index < this.entryCount-1) this.index++;
      else this.index = 0;
    this.getEntry(this.index).scrollIntoView(false);
  },

  getEntry: function(index) {
    return this.update.firstChild.childNodes[index];
  },

  getCurrentEntry: function() {
    return this.getEntry(this.index);
  },

  selectEntry: function() {
    this.active = false;
    this.updateElement(this.getCurrentEntry());
  },

  updateElement: function(selectedElement) {
    if (this.options.updateElement) {
      this.options.updateElement(selectedElement);
      return;
    }
    var value = '';
    if (this.options.select) {
      var nodes = $(selectedElement).select('.' + this.options.select) || [];
      if(nodes.length>0) value = Element.collectTextNodes(nodes[0], this.options.select);
    } else
      value = Element.collectTextNodesIgnoreClass(selectedElement, 'informal');

    var bounds = this.getTokenBounds();
    if (bounds[0] != -1) {
      var newValue = this.element.value.substr(0, bounds[0]);
      var whitespace = this.element.value.substr(bounds[0]).match(/^\s+/);
      if (whitespace)
        newValue += whitespace[0];
      this.element.value = newValue + value + this.element.value.substr(bounds[1]);
    } else {
      this.element.value = value;
    }
    this.oldElementValue = this.element.value;
    this.element.focus();

    if (this.options.afterUpdateElement)
      this.options.afterUpdateElement(this.element, selectedElement);
  },

  updateChoices: function(choices) {
    if(!this.changed && this.hasFocus) {
      this.update.innerHTML = choices;
      Element.cleanWhitespace(this.update);
      Element.cleanWhitespace(this.update.down());

      if(this.update.firstChild && this.update.down().childNodes) {
        this.entryCount =
          this.update.down().childNodes.length;
        for (var i = 0; i < this.entryCount; i++) {
          var entry = this.getEntry(i);
          entry.autocompleteIndex = i;
          this.addObservers(entry);
        }
      } else {
        this.entryCount = 0;
      }

      this.stopIndicator();
      this.index = 0;

      if(this.entryCount==1 && this.options.autoSelect) {
        this.selectEntry();
        this.hide();
      } else {
        this.render();
      }
    }
  },

  addObservers: function(element) {
    Event.observe(element, "mouseover", this.onHover.bindAsEventListener(this));
    Event.observe(element, "click", this.onClick.bindAsEventListener(this));
  },

  onObserverEvent: function() {
    this.changed = false;
    this.tokenBounds = null;
    if(this.getToken().length>=this.options.minChars) {
      this.getUpdatedChoices();
    } else {
      this.active = false;
      this.hide();
    }
    this.oldElementValue = this.element.value;
  },

  getToken: function() {
    var bounds = this.getTokenBounds();
    return this.element.value.substring(bounds[0], bounds[1]).strip();
  },

  getTokenBounds: function() {
    if (null != this.tokenBounds) return this.tokenBounds;
    var value = this.element.value;
    if (value.strip().empty()) return [-1, 0];
    var diff = arguments.callee.getFirstDifferencePos(value, this.oldElementValue);
    var offset = (diff == this.oldElementValue.length ? 1 : 0);
    var prevTokenPos = -1, nextTokenPos = value.length;
    var tp;
    for (var index = 0, l = this.options.tokens.length; index < l; ++index) {
      tp = value.lastIndexOf(this.options.tokens[index], diff + offset - 1);
      if (tp > prevTokenPos) prevTokenPos = tp;
      tp = value.indexOf(this.options.tokens[index], diff + offset);
      if (-1 != tp && tp < nextTokenPos) nextTokenPos = tp;
    }
    return (this.tokenBounds = [prevTokenPos + 1, nextTokenPos]);
  }
});

Autocompleter.Base.prototype.getTokenBounds.getFirstDifferencePos = function(newS, oldS) {
  var boundary = Math.min(newS.length, oldS.length);
  for (var index = 0; index < boundary; ++index)
    if (newS[index] != oldS[index])
      return index;
  return boundary;
};

Ajax.Autocompleter = Class.create(Autocompleter.Base, {
  initialize: function(element, update, url, options) {
    this.baseInitialize(element, update, options);
    this.options.asynchronous  = true;
    this.options.onComplete    = this.onComplete.bind(this);
    this.options.defaultParams = this.options.parameters || null;
    this.url                   = url;
  },

  getUpdatedChoices: function() {
    this.startIndicator();

    var entry = encodeURIComponent(this.options.paramName) + '=' +
      encodeURIComponent(this.getToken());

    this.options.parameters = this.options.callback ?
      this.options.callback(this.element, entry) : entry;

    if(this.options.defaultParams)
      this.options.parameters += '&' + this.options.defaultParams;

    new Ajax.Request(this.url, this.options);
  },

  onComplete: function(request) {
    this.updateChoices(request.responseText);
  }
});

// The local array autocompleter. Used when you'd prefer to
// inject an array of autocompletion options into the page, rather
// than sending out Ajax queries, which can be quite slow sometimes.
//
// The constructor takes four parameters. The first two are, as usual,
// the id of the monitored textbox, and id of the autocompletion menu.
// The third is the array you want to autocomplete from, and the fourth
// is the options block.
//
// Extra local autocompletion options:
// - choices - How many autocompletion choices to offer
//
// - partialSearch - If false, the autocompleter will match entered
//                    text only at the beginning of strings in the
//                    autocomplete array. Defaults to true, which will
//                    match text at the beginning of any *word* in the
//                    strings in the autocomplete array. If you want to
//                    search anywhere in the string, additionally set
//                    the option fullSearch to true (default: off).
//
// - fullSsearch - Search anywhere in autocomplete array strings.
//
// - partialChars - How many characters to enter before triggering
//                   a partial match (unlike minChars, which defines
//                   how many characters are required to do any match
//                   at all). Defaults to 2.
//
// - ignoreCase - Whether to ignore case when autocompleting.
//                 Defaults to true.
//
// It's possible to pass in a custom function as the 'selector'
// option, if you prefer to write your own autocompletion logic.
// In that case, the other options above will not apply unless
// you support them.

Autocompleter.Local = Class.create(Autocompleter.Base, {
  initialize: function(element, update, array, options) {
    this.baseInitialize(element, update, options);
    this.options.array = array;
  },

  getUpdatedChoices: function() {
    this.updateChoices(this.options.selector(this));
  },

  setOptions: function(options) {
    this.options = Object.extend({
      choices: 10,
      partialSearch: true,
      partialChars: 2,
      ignoreCase: true,
      fullSearch: false,
      selector: function(instance) {
        var ret       = []; // Beginning matches
        var partial   = []; // Inside matches
        var entry     = instance.getToken();
        var count     = 0;

        for (var i = 0; i < instance.options.array.length &&
          ret.length < instance.options.choices ; i++) {

          var elem = instance.options.array[i];
          var foundPos = instance.options.ignoreCase ?
            elem.toLowerCase().indexOf(entry.toLowerCase()) :
            elem.indexOf(entry);

          while (foundPos != -1) {
            if (foundPos == 0 && elem.length != entry.length) {
              ret.push("<li><strong>" + elem.substr(0, entry.length) + "</strong>" +
                elem.substr(entry.length) + "</li>");
              break;
            } else if (entry.length >= instance.options.partialChars &&
              instance.options.partialSearch && foundPos != -1) {
              if (instance.options.fullSearch || /\s/.test(elem.substr(foundPos-1,1))) {
                partial.push("<li>" + elem.substr(0, foundPos) + "<strong>" +
                  elem.substr(foundPos, entry.length) + "</strong>" + elem.substr(
                  foundPos + entry.length) + "</li>");
                break;
              }
            }

            foundPos = instance.options.ignoreCase ?
              elem.toLowerCase().indexOf(entry.toLowerCase(), foundPos + 1) :
              elem.indexOf(entry, foundPos + 1);

          }
        }
        if (partial.length)
          ret = ret.concat(partial.slice(0, instance.options.choices - ret.length));
        return "<ul>" + ret.join('') + "</ul>";
      }
    }, options || { });
  }
});

// AJAX in-place editor and collection editor
// Full rewrite by Christophe Porteneuve <tdd@tddsworld.com> (April 2007).

// Use this if you notice weird scrolling problems on some browsers,
// the DOM might be a bit confused when this gets called so do this
// waits 1 ms (with setTimeout) until it does the activation
Field.scrollFreeActivate = function(field) {
  setTimeout(function() {
    Field.activate(field);
  }, 1);
};

Ajax.InPlaceEditor = Class.create({
  initialize: function(element, url, options) {
    this.url = url;
    this.element = element = $(element);
    this.prepareOptions();
    this._controls = { };
    arguments.callee.dealWithDeprecatedOptions(options); // DEPRECATION LAYER!!!
    Object.extend(this.options, options || { });
    if (!this.options.formId && this.element.id) {
      this.options.formId = this.element.id + '-inplaceeditor';
      if ($(this.options.formId))
        this.options.formId = '';
    }
    if (this.options.externalControl)
      this.options.externalControl = $(this.options.externalControl);
    if (!this.options.externalControl)
      this.options.externalControlOnly = false;
    this._originalBackground = this.element.getStyle('background-color') || 'transparent';
    this.element.title = this.options.clickToEditText;
    this._boundCancelHandler = this.handleFormCancellation.bind(this);
    this._boundComplete = (this.options.onComplete || Prototype.emptyFunction).bind(this);
    this._boundFailureHandler = this.handleAJAXFailure.bind(this);
    this._boundSubmitHandler = this.handleFormSubmission.bind(this);
    this._boundWrapperHandler = this.wrapUp.bind(this);
    this.registerListeners();
  },
  checkForEscapeOrReturn: function(e) {
    if (!this._editing || e.ctrlKey || e.altKey || e.shiftKey) return;
    if (Event.KEY_ESC == e.keyCode)
      this.handleFormCancellation(e);
    else if (Event.KEY_RETURN == e.keyCode)
      this.handleFormSubmission(e);
  },
  createControl: function(mode, handler, extraClasses) {
    var control = this.options[mode + 'Control'];
    var text = this.options[mode + 'Text'];
    if ('button' == control) {
      var btn = document.createElement('input');
      btn.type = 'submit';
      btn.value = text;
      btn.className = 'editor_' + mode + '_button';
      if ('cancel' == mode)
        btn.onclick = this._boundCancelHandler;
      this._form.appendChild(btn);
      this._controls[mode] = btn;
    } else if ('link' == control) {
      var link = document.createElement('a');
      link.href = '#';
      link.appendChild(document.createTextNode(text));
      link.onclick = 'cancel' == mode ? this._boundCancelHandler : this._boundSubmitHandler;
      link.className = 'editor_' + mode + '_link';
      if (extraClasses)
        link.className += ' ' + extraClasses;
      this._form.appendChild(link);
      this._controls[mode] = link;
    }
  },
  createEditField: function() {
    var text = (this.options.loadTextURL ? this.options.loadingText : this.getText());
    var fld;
    if (1 >= this.options.rows && !/\r|\n/.test(this.getText())) {
      fld = document.createElement('input');
      fld.type = 'text';
      var size = this.options.size || this.options.cols || 0;
      if (0 < size) fld.size = size;
    } else {
      fld = document.createElement('textarea');
      fld.rows = (1 >= this.options.rows ? this.options.autoRows : this.options.rows);
      fld.cols = this.options.cols || 40;
    }
    fld.name = this.options.paramName;
    fld.value = text; // No HTML breaks conversion anymore
    fld.className = 'editor_field';
    if (this.options.submitOnBlur)
      fld.onblur = this._boundSubmitHandler;
    this._controls.editor = fld;
    if (this.options.loadTextURL)
      this.loadExternalText();
    this._form.appendChild(this._controls.editor);
  },
  createForm: function() {
    var ipe = this;
    function addText(mode, condition) {
      var text = ipe.options['text' + mode + 'Controls'];
      if (!text || condition === false) return;
      ipe._form.appendChild(document.createTextNode(text));
    };
    this._form = $(document.createElement('form'));
    this._form.id = this.options.formId;
    this._form.addClassName(this.options.formClassName);
    this._form.onsubmit = this._boundSubmitHandler;
    this.createEditField();
    if ('textarea' == this._controls.editor.tagName.toLowerCase())
      this._form.appendChild(document.createElement('br'));
    if (this.options.onFormCustomization)
      this.options.onFormCustomization(this, this._form);
    addText('Before', this.options.okControl || this.options.cancelControl);
    this.createControl('ok', this._boundSubmitHandler);
    addText('Between', this.options.okControl && this.options.cancelControl);
    this.createControl('cancel', this._boundCancelHandler, 'editor_cancel');
    addText('After', this.options.okControl || this.options.cancelControl);
  },
  destroy: function() {
    if (this._oldInnerHTML)
      this.element.innerHTML = this._oldInnerHTML;
    this.leaveEditMode();
    this.unregisterListeners();
  },
  enterEditMode: function(e) {
    if (this._saving || this._editing) return;
    this._editing = true;
    this.triggerCallback('onEnterEditMode');
    if (this.options.externalControl)
      this.options.externalControl.hide();
    this.element.hide();
    this.createForm();
    this.element.parentNode.insertBefore(this._form, this.element);
    if (!this.options.loadTextURL)
      this.postProcessEditField();
    if (e) Event.stop(e);
  },
  enterHover: function(e) {
    if (this.options.hoverClassName)
      this.element.addClassName(this.options.hoverClassName);
    if (this._saving) return;
    this.triggerCallback('onEnterHover');
  },
  getText: function() {
    return this.element.innerHTML.unescapeHTML();
  },
  handleAJAXFailure: function(transport) {
    this.triggerCallback('onFailure', transport);
    if (this._oldInnerHTML) {
      this.element.innerHTML = this._oldInnerHTML;
      this._oldInnerHTML = null;
    }
  },
  handleFormCancellation: function(e) {
    this.wrapUp();
    if (e) Event.stop(e);
  },
  handleFormSubmission: function(e) {
    var form = this._form;
    var value = $F(this._controls.editor);
    this.prepareSubmission();
    var params = this.options.callback(form, value) || '';
    if (Object.isString(params))
      params = params.toQueryParams();
    params.editorId = this.element.id;
    if (this.options.htmlResponse) {
      var options = Object.extend({ evalScripts: true }, this.options.ajaxOptions);
      Object.extend(options, {
        parameters: params,
        onComplete: this._boundWrapperHandler,
        onFailure: this._boundFailureHandler
      });
      new Ajax.Updater({ success: this.element }, this.url, options);
    } else {
      var options = Object.extend({ method: 'get' }, this.options.ajaxOptions);
      Object.extend(options, {
        parameters: params,
        onComplete: this._boundWrapperHandler,
        onFailure: this._boundFailureHandler
      });
      new Ajax.Request(this.url, options);
    }
    if (e) Event.stop(e);
  },
  leaveEditMode: function() {
    this.element.removeClassName(this.options.savingClassName);
    this.removeForm();
    this.leaveHover();
    this.element.style.backgroundColor = this._originalBackground;
    this.element.show();
    if (this.options.externalControl)
      this.options.externalControl.show();
    this._saving = false;
    this._editing = false;
    this._oldInnerHTML = null;
    this.triggerCallback('onLeaveEditMode');
  },
  leaveHover: function(e) {
    if (this.options.hoverClassName)
      this.element.removeClassName(this.options.hoverClassName);
    if (this._saving) return;
    this.triggerCallback('onLeaveHover');
  },
  loadExternalText: function() {
    this._form.addClassName(this.options.loadingClassName);
    this._controls.editor.disabled = true;
    var options = Object.extend({ method: 'get' }, this.options.ajaxOptions);
    Object.extend(options, {
      parameters: 'editorId=' + encodeURIComponent(this.element.id),
      onComplete: Prototype.emptyFunction,
      onSuccess: function(transport) {
        this._form.removeClassName(this.options.loadingClassName);
        var text = transport.responseText;
        if (this.options.stripLoadedTextTags)
          text = text.stripTags();
        this._controls.editor.value = text;
        this._controls.editor.disabled = false;
        this.postProcessEditField();
      }.bind(this),
      onFailure: this._boundFailureHandler
    });
    new Ajax.Request(this.options.loadTextURL, options);
  },
  postProcessEditField: function() {
    var fpc = this.options.fieldPostCreation;
    if (fpc)
      $(this._controls.editor)['focus' == fpc ? 'focus' : 'activate']();
  },
  prepareOptions: function() {
    this.options = Object.clone(Ajax.InPlaceEditor.DefaultOptions);
    Object.extend(this.options, Ajax.InPlaceEditor.DefaultCallbacks);
    [this._extraDefaultOptions].flatten().compact().each(function(defs) {
      Object.extend(this.options, defs);
    }.bind(this));
  },
  prepareSubmission: function() {
    this._saving = true;
    this.removeForm();
    this.leaveHover();
    this.showSaving();
  },
  registerListeners: function() {
    this._listeners = { };
    var listener;
    $H(Ajax.InPlaceEditor.Listeners).each(function(pair) {
      listener = this[pair.value].bind(this);
      this._listeners[pair.key] = listener;
      if (!this.options.externalControlOnly)
        this.element.observe(pair.key, listener);
      if (this.options.externalControl)
        this.options.externalControl.observe(pair.key, listener);
    }.bind(this));
  },
  removeForm: function() {
    if (!this._form) return;
    this._form.remove();
    this._form = null;
    this._controls = { };
  },
  showSaving: function() {
    this._oldInnerHTML = this.element.innerHTML;
    this.element.innerHTML = this.options.savingText;
    this.element.addClassName(this.options.savingClassName);
    this.element.style.backgroundColor = this._originalBackground;
    this.element.show();
  },
  triggerCallback: function(cbName, arg) {
    if ('function' == typeof this.options[cbName]) {
      this.options[cbName](this, arg);
    }
  },
  unregisterListeners: function() {
    $H(this._listeners).each(function(pair) {
      if (!this.options.externalControlOnly)
        this.element.stopObserving(pair.key, pair.value);
      if (this.options.externalControl)
        this.options.externalControl.stopObserving(pair.key, pair.value);
    }.bind(this));
  },
  wrapUp: function(transport) {
    this.leaveEditMode();
    // Can't use triggerCallback due to backward compatibility: requires
    // binding + direct element
    this._boundComplete(transport, this.element);
  }
});

Object.extend(Ajax.InPlaceEditor.prototype, {
  dispose: Ajax.InPlaceEditor.prototype.destroy
});

Ajax.InPlaceCollectionEditor = Class.create(Ajax.InPlaceEditor, {
  initialize: function($super, element, url, options) {
    this._extraDefaultOptions = Ajax.InPlaceCollectionEditor.DefaultOptions;
    $super(element, url, options);
  },

  createEditField: function() {
    var list = document.createElement('select');
    list.name = this.options.paramName;
    list.size = 1;
    this._controls.editor = list;
    this._collection = this.options.collection || [];
    if (this.options.loadCollectionURL)
      this.loadCollection();
    else
      this.checkForExternalText();
    this._form.appendChild(this._controls.editor);
  },

  loadCollection: function() {
    this._form.addClassName(this.options.loadingClassName);
    this.showLoadingText(this.options.loadingCollectionText);
    var options = Object.extend({ method: 'get' }, this.options.ajaxOptions);
    Object.extend(options, {
      parameters: 'editorId=' + encodeURIComponent(this.element.id),
      onComplete: Prototype.emptyFunction,
      onSuccess: function(transport) {
        var js = transport.responseText.strip();
        if (!/^\[.*\]$/.test(js)) // TODO: improve sanity check
          throw('Server returned an invalid collection representation.');
        this._collection = eval(js);
        this.checkForExternalText();
      }.bind(this),
      onFailure: this.onFailure
    });
    new Ajax.Request(this.options.loadCollectionURL, options);
  },

  showLoadingText: function(text) {
    this._controls.editor.disabled = true;
    var tempOption = this._controls.editor.firstChild;
    if (!tempOption) {
      tempOption = document.createElement('option');
      tempOption.value = '';
      this._controls.editor.appendChild(tempOption);
      tempOption.selected = true;
    }
    tempOption.update((text || '').stripScripts().stripTags());
  },

  checkForExternalText: function() {
    this._text = this.getText();
    if (this.options.loadTextURL)
      this.loadExternalText();
    else
      this.buildOptionList();
  },

  loadExternalText: function() {
    this.showLoadingText(this.options.loadingText);
    var options = Object.extend({ method: 'get' }, this.options.ajaxOptions);
    Object.extend(options, {
      parameters: 'editorId=' + encodeURIComponent(this.element.id),
      onComplete: Prototype.emptyFunction,
      onSuccess: function(transport) {
        this._text = transport.responseText.strip();
        this.buildOptionList();
      }.bind(this),
      onFailure: this.onFailure
    });
    new Ajax.Request(this.options.loadTextURL, options);
  },

  buildOptionList: function() {
    this._form.removeClassName(this.options.loadingClassName);
    this._collection = this._collection.map(function(entry) {
      return 2 === entry.length ? entry : [entry, entry].flatten();
    });
    var marker = ('value' in this.options) ? this.options.value : this._text;
    var textFound = this._collection.any(function(entry) {
      return entry[0] == marker;
    }.bind(this));
    this._controls.editor.update('');
    var option;
    this._collection.each(function(entry, index) {
      option = document.createElement('option');
      option.value = entry[0];
      option.selected = textFound ? entry[0] == marker : 0 == index;
      option.appendChild(document.createTextNode(entry[1]));
      this._controls.editor.appendChild(option);
    }.bind(this));
    this._controls.editor.disabled = false;
    Field.scrollFreeActivate(this._controls.editor);
  }
});

//**** DEPRECATION LAYER FOR InPlace[Collection]Editor! ****
//**** This only  exists for a while,  in order to  let ****
//**** users adapt to  the new API.  Read up on the new ****
//**** API and convert your code to it ASAP!            ****

Ajax.InPlaceEditor.prototype.initialize.dealWithDeprecatedOptions = function(options) {
  if (!options) return;
  function fallback(name, expr) {
    if (name in options || expr === undefined) return;
    options[name] = expr;
  };
  fallback('cancelControl', (options.cancelLink ? 'link' : (options.cancelButton ? 'button' :
    options.cancelLink == options.cancelButton == false ? false : undefined)));
  fallback('okControl', (options.okLink ? 'link' : (options.okButton ? 'button' :
    options.okLink == options.okButton == false ? false : undefined)));
  fallback('highlightColor', options.highlightcolor);
  fallback('highlightEndColor', options.highlightendcolor);
};

Object.extend(Ajax.InPlaceEditor, {
  DefaultOptions: {
    ajaxOptions: { },
    autoRows: 3,                                // Use when multi-line w/ rows == 1
    cancelControl: 'link',                      // 'link'|'button'|false
    cancelText: 'cancel',
    clickToEditText: 'Click to edit',
    externalControl: null,                      // id|elt
    externalControlOnly: false,
    fieldPostCreation: 'activate',              // 'activate'|'focus'|false
    formClassName: 'inplaceeditor-form',
    formId: null,                               // id|elt
    highlightColor: '#ffff99',
    highlightEndColor: '#ffffff',
    hoverClassName: '',
    htmlResponse: true,
    loadingClassName: 'inplaceeditor-loading',
    loadingText: 'Loading...',
    okControl: 'button',                        // 'link'|'button'|false
    okText: 'ok',
    paramName: 'value',
    rows: 1,                                    // If 1 and multi-line, uses autoRows
    savingClassName: 'inplaceeditor-saving',
    savingText: 'Saving...',
    size: 0,
    stripLoadedTextTags: false,
    submitOnBlur: false,
    textAfterControls: '',
    textBeforeControls: '',
    textBetweenControls: ''
  },
  DefaultCallbacks: {
    callback: function(form) {
      return Form.serialize(form);
    },
    onComplete: function(transport, element) {
      // For backward compatibility, this one is bound to the IPE, and passes
      // the element directly.  It was too often customized, so we don't break it.
      new Effect.Highlight(element, {
        startcolor: this.options.highlightColor, keepBackgroundImage: true });
    },
    onEnterEditMode: null,
    onEnterHover: function(ipe) {
      ipe.element.style.backgroundColor = ipe.options.highlightColor;
      if (ipe._effect)
        ipe._effect.cancel();
    },
    onFailure: function(transport, ipe) {
      alert('Error communication with the server: ' + transport.responseText.stripTags());
    },
    onFormCustomization: null, // Takes the IPE and its generated form, after editor, before controls.
    onLeaveEditMode: null,
    onLeaveHover: function(ipe) {
      ipe._effect = new Effect.Highlight(ipe.element, {
        startcolor: ipe.options.highlightColor, endcolor: ipe.options.highlightEndColor,
        restorecolor: ipe._originalBackground, keepBackgroundImage: true
      });
    }
  },
  Listeners: {
    click: 'enterEditMode',
    keydown: 'checkForEscapeOrReturn',
    mouseover: 'enterHover',
    mouseout: 'leaveHover'
  }
});

Ajax.InPlaceCollectionEditor.DefaultOptions = {
  loadingCollectionText: 'Loading options...'
};

// Delayed observer, like Form.Element.Observer,
// but waits for delay after last key input
// Ideal for live-search fields

Form.Element.DelayedObserver = Class.create({
  initialize: function(element, delay, callback) {
    this.delay     = delay || 0.5;
    this.element   = $(element);
    this.callback  = callback;
    this.timer     = null;
    this.lastValue = $F(this.element);
    Event.observe(this.element,'keyup',this.delayedListener.bindAsEventListener(this));
  },
  delayedListener: function(event) {
    if(this.lastValue == $F(this.element)) return;
    if(this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(this.onTimerEvent.bind(this), this.delay * 1000);
    this.lastValue = $F(this.element);
  },
  onTimerEvent: function() {
    this.timer = null;
    this.callback(this.element, $F(this.element));
  }
});
// script.aculo.us slider.js v1.8.2, Tue Nov 18 18:30:58 +0100 2008

// Copyright (c) 2005-2008 Marty Haught, Thomas Fuchs
//
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

if (!Control) var Control = { };

// options:
//  axis: 'vertical', or 'horizontal' (default)
//
// callbacks:
//  onChange(value)
//  onSlide(value)
Control.Slider = Class.create({
  initialize: function(handle, track, options) {
    var slider = this;

    if (Object.isArray(handle)) {
      this.handles = handle.collect( function(e) { return $(e) });
    } else {
      this.handles = [$(handle)];
    }

    this.track   = $(track);
    this.options = options || { };

    this.axis      = this.options.axis || 'horizontal';
    this.increment = this.options.increment || 1;
    this.step      = parseInt(this.options.step || '1');
    this.range     = this.options.range || $R(0,1);

    this.value     = 0; // assure backwards compat
    this.values    = this.handles.map( function() { return 0 });
    this.spans     = this.options.spans ? this.options.spans.map(function(s){ return $(s) }) : false;
    this.options.startSpan = $(this.options.startSpan || null);
    this.options.endSpan   = $(this.options.endSpan || null);

    this.restricted = this.options.restricted || false;

    this.maximum   = this.options.maximum || this.range.end;
    this.minimum   = this.options.minimum || this.range.start;

    // Will be used to align the handle onto the track, if necessary
    this.alignX = parseInt(this.options.alignX || '0');
    this.alignY = parseInt(this.options.alignY || '0');

    this.trackLength = this.maximumOffset() - this.minimumOffset();

    this.handleLength = this.isVertical() ?
      (this.handles[0].offsetHeight != 0 ?
        this.handles[0].offsetHeight : this.handles[0].style.height.replace(/px$/,"")) :
      (this.handles[0].offsetWidth != 0 ? this.handles[0].offsetWidth :
        this.handles[0].style.width.replace(/px$/,""));

    this.active   = false;
    this.dragging = false;
    this.disabled = false;

    if (this.options.disabled) this.setDisabled();

    // Allowed values array
    this.allowedValues = this.options.values ? this.options.values.sortBy(Prototype.K) : false;
    if (this.allowedValues) {
      this.minimum = this.allowedValues.min();
      this.maximum = this.allowedValues.max();
    }

    this.eventMouseDown = this.startDrag.bindAsEventListener(this);
    this.eventMouseUp   = this.endDrag.bindAsEventListener(this);
    this.eventMouseMove = this.update.bindAsEventListener(this);

    // Initialize handles in reverse (make sure first handle is active)
    this.handles.each( function(h,i) {
      i = slider.handles.length-1-i;
      slider.setValue(parseFloat(
        (Object.isArray(slider.options.sliderValue) ?
          slider.options.sliderValue[i] : slider.options.sliderValue) ||
         slider.range.start), i);
      h.makePositioned().observe("mousedown", slider.eventMouseDown);
    });

    this.track.observe("mousedown", this.eventMouseDown);
    document.observe("mouseup", this.eventMouseUp);
    $(this.track.parentNode.parentNode).observe("mousemove", this.eventMouseMove);


    this.initialized = true;
  },
  dispose: function() {
    var slider = this;
    Event.stopObserving(this.track, "mousedown", this.eventMouseDown);
    Event.stopObserving(document, "mouseup", this.eventMouseUp);
    Event.stopObserving(this.track.parentNode.parentNode, "mousemove", this.eventMouseMove);
    this.handles.each( function(h) {
      Event.stopObserving(h, "mousedown", slider.eventMouseDown);
    });
  },
  setDisabled: function(){
    this.disabled = true;
    this.track.parentNode.className = this.track.parentNode.className + ' disabled';
  },
  setEnabled: function(){
    this.disabled = false;
  },
  getNearestValue: function(value){
    if (this.allowedValues){
      if (value >= this.allowedValues.max()) return(this.allowedValues.max());
      if (value <= this.allowedValues.min()) return(this.allowedValues.min());

      var offset = Math.abs(this.allowedValues[0] - value);
      var newValue = this.allowedValues[0];
      this.allowedValues.each( function(v) {
        var currentOffset = Math.abs(v - value);
        if (currentOffset <= offset){
          newValue = v;
          offset = currentOffset;
        }
      });
      return newValue;
    }
    if (value > this.range.end) return this.range.end;
    if (value < this.range.start) return this.range.start;
    return value;
  },
  setValue: function(sliderValue, handleIdx){
    if (!this.active) {
      this.activeHandleIdx = handleIdx || 0;
      this.activeHandle    = this.handles[this.activeHandleIdx];
      this.updateStyles();
    }
    handleIdx = handleIdx || this.activeHandleIdx || 0;
    if (this.initialized && this.restricted) {
      if ((handleIdx>0) && (sliderValue<this.values[handleIdx-1]))
        sliderValue = this.values[handleIdx-1];
      if ((handleIdx < (this.handles.length-1)) && (sliderValue>this.values[handleIdx+1]))
        sliderValue = this.values[handleIdx+1];
    }
    sliderValue = this.getNearestValue(sliderValue);
    this.values[handleIdx] = sliderValue;
    this.value = this.values[0]; // assure backwards compat

    this.handles[handleIdx].style[this.isVertical() ? 'top' : 'left'] =
      this.translateToPx(sliderValue);

    this.drawSpans();
    if (!this.dragging || !this.event) this.updateFinished();
  },
  setValueBy: function(delta, handleIdx) {
    this.setValue(this.values[handleIdx || this.activeHandleIdx || 0] + delta,
      handleIdx || this.activeHandleIdx || 0);
  },
  translateToPx: function(value) {
    return Math.round(
      ((this.trackLength-this.handleLength)/(this.range.end-this.range.start)) *
      (value - this.range.start)) + "px";
  },
  translateToValue: function(offset) {
    return ((offset/(this.trackLength-this.handleLength) *
      (this.range.end-this.range.start)) + this.range.start);
  },
  getRange: function(range) {
    var v = this.values.sortBy(Prototype.K);
    range = range || 0;
    return $R(v[range],v[range+1]);
  },
  minimumOffset: function(){
    return(this.isVertical() ? this.alignY : this.alignX);
  },
  maximumOffset: function(){
    return(this.isVertical() ?
      (this.track.offsetHeight != 0 ? this.track.offsetHeight :
        this.track.style.height.replace(/px$/,"")) - this.alignY :
      (this.track.offsetWidth != 0 ? this.track.offsetWidth :
        this.track.style.width.replace(/px$/,"")) - this.alignX);
  },
  isVertical:  function(){
    return (this.axis == 'vertical');
  },
  drawSpans: function() {
    var slider = this;
    if (this.spans)
      $R(0, this.spans.length-1).each(function(r) { slider.setSpan(slider.spans[r], slider.getRange(r)) });
    if (this.options.startSpan)
      this.setSpan(this.options.startSpan,
        $R(0, this.values.length>1 ? this.getRange(0).min() : this.value ));
    if (this.options.endSpan)
      this.setSpan(this.options.endSpan,
        $R(this.values.length>1 ? this.getRange(this.spans.length-1).max() : this.value, this.maximum));
  },
  setSpan: function(span, range) {
    if (this.isVertical()) {
      span.style.top = this.translateToPx(range.start);
      span.style.height = this.translateToPx(range.end - range.start + this.range.start);
    } else {
      span.style.left = this.translateToPx(range.start);
      span.style.width = this.translateToPx(range.end - range.start + this.range.start);
    }
  },
  updateStyles: function() {
    this.handles.each( function(h){ Element.removeClassName(h, 'selected') });
    Element.addClassName(this.activeHandle, 'selected');
  },
  startDrag: function(event) {
    if (Event.isLeftClick(event)) {
      if (!this.disabled){
        this.active = true;

        var handle = Event.element(event);
        var pointer  = [Event.pointerX(event), Event.pointerY(event)];
        var track = handle;
        if (track==this.track) {
          var offsets  = Position.cumulativeOffset(this.track);
          this.event = event;
          this.setValue(this.translateToValue(
           (this.isVertical() ? pointer[1]-offsets[1] : pointer[0]-offsets[0])-(this.handleLength/2)
          ));
          var offsets  = Position.cumulativeOffset(this.activeHandle);
          this.offsetX = (pointer[0] - offsets[0]);
          this.offsetY = (pointer[1] - offsets[1]);
        } else {
          // find the handle (prevents issues with Safari)
          while((this.handles.indexOf(handle) == -1) && handle.parentNode)
            handle = handle.parentNode;

          if (this.handles.indexOf(handle)!=-1) {
            this.activeHandle    = handle;
            this.activeHandleIdx = this.handles.indexOf(this.activeHandle);
            this.updateStyles();

            var offsets  = Position.cumulativeOffset(this.activeHandle);
            this.offsetX = (pointer[0] - offsets[0]);
            this.offsetY = (pointer[1] - offsets[1]);
          }
        }
      }
      Event.stop(event);
    }
  },
  update: function(event) {
   if (this.active) {
      if (!this.dragging) this.dragging = true;
      this.draw(event);
      if (Prototype.Browser.WebKit) window.scrollBy(0,0);
      Event.stop(event);
   }
  },
  draw: function(event) {
    var pointer = [Event.pointerX(event), Event.pointerY(event)];
    var offsets = Position.cumulativeOffset(this.track);
    pointer[0] -= this.offsetX + offsets[0];
    pointer[1] -= this.offsetY + offsets[1];
    this.event = event;
    this.setValue(this.translateToValue( this.isVertical() ? pointer[1] : pointer[0] ));
    if (this.initialized && this.options.onSlide)
      this.options.onSlide(this.values.length>1 ? this.values : this.value, this);
  },
  endDrag: function(event) {
    if (this.active && this.dragging) {
      this.finishDrag(event, true);
      Event.stop(event);
    }
    this.active = false;
    this.dragging = false;
  },
  finishDrag: function(event, success) {
    this.active = false;
    this.dragging = false;
    this.updateFinished();
  },
  updateFinished: function() {
    if (this.initialized && this.options.onChange)
      this.options.onChange(this.values.length>1 ? this.values : this.value, this);
    this.event = null;
  }
});
/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE_AFL.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magentocommerce.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magentocommerce.com for more information.
 *
 * @category    Varien
 * @package     js
 * @copyright   Copyright (c) 2012 Magento Inc. (http://www.magentocommerce.com)
 * @license     http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 */
function popWin(url,win,para) {
    var win = window.open(url,win,para);
    win.focus();
}

function setLocation(url){
    window.location.href = url;
}

function setPLocation(url, setFocus){
    if( setFocus ) {
        window.opener.focus();
    }
    window.opener.location.href = url;
}

function setLanguageCode(code, fromCode){
    //TODO: javascript cookies have different domain and path than php cookies
    var href = window.location.href;
    var after = '', dash;
    if (dash = href.match(/\#(.*)$/)) {
        href = href.replace(/\#(.*)$/, '');
        after = dash[0];
    }

    if (href.match(/[?]/)) {
        var re = /([?&]store=)[a-z0-9_]*/;
        if (href.match(re)) {
            href = href.replace(re, '$1'+code);
        } else {
            href += '&store='+code;
        }

        var re = /([?&]from_store=)[a-z0-9_]*/;
        if (href.match(re)) {
            href = href.replace(re, '');
        }
    } else {
        href += '?store='+code;
    }
    if (typeof(fromCode) != 'undefined') {
        href += '&from_store='+fromCode;
    }
    href += after;

    setLocation(href);
}

/**
 * Add classes to specified elements.
 * Supported classes are: 'odd', 'even', 'first', 'last'
 *
 * @param elements - array of elements to be decorated
 * [@param decorateParams] - array of classes to be set. If omitted, all available will be used
 */
function decorateGeneric(elements, decorateParams)
{
    var allSupportedParams = ['odd', 'even', 'first', 'last'];
    var _decorateParams = {};
    var total = elements.length;

    if (total) {
        // determine params called
        if (typeof(decorateParams) == 'undefined') {
            decorateParams = allSupportedParams;
        }
        if (!decorateParams.length) {
            return;
        }
        for (var k in allSupportedParams) {
            _decorateParams[allSupportedParams[k]] = false;
        }
        for (var k in decorateParams) {
            _decorateParams[decorateParams[k]] = true;
        }

        // decorate elements
        // elements[0].addClassName('first'); // will cause bug in IE (#5587)
        if (_decorateParams.first) {
            Element.addClassName(elements[0], 'first');
        }
        if (_decorateParams.last) {
            Element.addClassName(elements[total-1], 'last');
        }
        for (var i = 0; i < total; i++) {
            if ((i + 1) % 2 == 0) {
                if (_decorateParams.even) {
                    Element.addClassName(elements[i], 'even');
                }
            }
            else {
                if (_decorateParams.odd) {
                    Element.addClassName(elements[i], 'odd');
                }
            }
        }
    }
}

/**
 * Decorate table rows and cells, tbody etc
 * @see decorateGeneric()
 */
function decorateTable(table, options) {
    var table = $(table);
    if (table) {
        // set default options
        var _options = {
            'tbody'    : false,
            'tbody tr' : ['odd', 'even', 'first', 'last'],
            'thead tr' : ['first', 'last'],
            'tfoot tr' : ['first', 'last'],
            'tr td'    : ['last']
        };
        // overload options
        if (typeof(options) != 'undefined') {
            for (var k in options) {
                _options[k] = options[k];
            }
        }
        // decorate
        if (_options['tbody']) {
            decorateGeneric(table.select('tbody'), _options['tbody']);
        }
        if (_options['tbody tr']) {
            decorateGeneric(table.select('tbody tr'), _options['tbody tr']);
        }
        if (_options['thead tr']) {
            decorateGeneric(table.select('thead tr'), _options['thead tr']);
        }
        if (_options['tfoot tr']) {
            decorateGeneric(table.select('tfoot tr'), _options['tfoot tr']);
        }
        if (_options['tr td']) {
            var allRows = table.select('tr');
            if (allRows.length) {
                for (var i = 0; i < allRows.length; i++) {
                    decorateGeneric(allRows[i].getElementsByTagName('TD'), _options['tr td']);
                }
            }
        }
    }
}

/**
 * Set "odd", "even" and "last" CSS classes for list items
 * @see decorateGeneric()
 */
function decorateList(list, nonRecursive) {
    if ($(list)) {
        if (typeof(nonRecursive) == 'undefined') {
            var items = $(list).select('li')
        }
        else {
            var items = $(list).childElements();
        }
        decorateGeneric(items, ['odd', 'even', 'last']);
    }
}

/**
 * Set "odd", "even" and "last" CSS classes for list items
 * @see decorateGeneric()
 */
function decorateDataList(list) {
    list = $(list);
    if (list) {
        decorateGeneric(list.select('dt'), ['odd', 'even', 'last']);
        decorateGeneric(list.select('dd'), ['odd', 'even', 'last']);
    }
}

/**
 * Parse SID and produces the correct URL
 */
function parseSidUrl(baseUrl, urlExt) {
    var sidPos = baseUrl.indexOf('/?SID=');
    var sid = '';
    urlExt = (urlExt != undefined) ? urlExt : '';

    if(sidPos > -1) {
        sid = '?' + baseUrl.substring(sidPos + 2);
        baseUrl = baseUrl.substring(0, sidPos + 1);
    }

    return baseUrl+urlExt+sid;
}

/**
 * Formats currency using patern
 * format - JSON (pattern, decimal, decimalsDelimeter, groupsDelimeter)
 * showPlus - true (always show '+'or '-'),
 *      false (never show '-' even if number is negative)
 *      null (show '-' if number is negative)
 */

function formatCurrency(price, format, showPlus){
    var precision = isNaN(format.precision = Math.abs(format.precision)) ? 2 : format.precision;
    var requiredPrecision = isNaN(format.requiredPrecision = Math.abs(format.requiredPrecision)) ? 2 : format.requiredPrecision;

    //precision = (precision > requiredPrecision) ? precision : requiredPrecision;
    //for now we don't need this difference so precision is requiredPrecision
    precision = requiredPrecision;

    var integerRequired = isNaN(format.integerRequired = Math.abs(format.integerRequired)) ? 1 : format.integerRequired;

    var decimalSymbol = format.decimalSymbol == undefined ? "," : format.decimalSymbol;
    var groupSymbol = format.groupSymbol == undefined ? "." : format.groupSymbol;
    var groupLength = format.groupLength == undefined ? 3 : format.groupLength;

    var s = '';

    if (showPlus == undefined || showPlus == true) {
        s = price < 0 ? "-" : ( showPlus ? "+" : "");
    } else if (showPlus == false) {
        s = '';
    }

    var i = parseInt(price = Math.abs(+price || 0).toFixed(precision)) + "";
    var pad = (i.length < integerRequired) ? (integerRequired - i.length) : 0;
    while (pad) { i = '0' + i; pad--; }
    j = (j = i.length) > groupLength ? j % groupLength : 0;
    re = new RegExp("(\\d{" + groupLength + "})(?=\\d)", "g");

    /**
     * replace(/-/, 0) is only for fixing Safari bug which appears
     * when Math.abs(0).toFixed() executed on "0" number.
     * Result is "0.-0" :(
     */
    var r = (j ? i.substr(0, j) + groupSymbol : "") + i.substr(j).replace(re, "$1" + groupSymbol) + (precision ? decimalSymbol + Math.abs(price - i).toFixed(precision).replace(/-/, 0).slice(2) : "")
    var pattern = '';
    if (format.pattern.indexOf('{sign}') == -1) {
        pattern = s + format.pattern;
    } else {
        pattern = format.pattern.replace('{sign}', s);
    }

    return pattern.replace('%s', r).replace(/^\s\s*/, '').replace(/\s\s*$/, '');
};

function expandDetails(el, childClass) {
    if (Element.hasClassName(el,'show-details')) {
        $$(childClass).each(function(item){item.hide()});
        Element.removeClassName(el,'show-details');
    }
    else {
        $$(childClass).each(function(item){item.show()});
        Element.addClassName(el,'show-details');
    }
}

// Version 1.0
var isIE = navigator.appVersion.match(/MSIE/) == "MSIE";

if (!window.Varien)
    var Varien = new Object();

Varien.showLoading = function(){
    Element.show('loading-process');
}
Varien.hideLoading = function(){
    Element.hide('loading-process');
}
Varien.GlobalHandlers = {
    onCreate: function() {
        Varien.showLoading();
    },

    onComplete: function() {
        if(Ajax.activeRequestCount == 0) {
            Varien.hideLoading();
        }
    }
};

Ajax.Responders.register(Varien.GlobalHandlers);

/**
 * Quick Search form client model
 */
Varien.searchForm = Class.create();
Varien.searchForm.prototype = {
    initialize : function(form, field, emptyText){
        this.form   = $(form);
        this.field  = $(field);
        this.emptyText = emptyText;

        Event.observe(this.form,  'submit', this.submit.bind(this));
        Event.observe(this.field, 'focus', this.focus.bind(this));
        Event.observe(this.field, 'blur', this.blur.bind(this));
        this.blur();
    },

    submit : function(event){
        if (this.field.value == this.emptyText || this.field.value == ''){
            Event.stop(event);
            return false;
        }
        return true;
    },

    focus : function(event){
        if(this.field.value==this.emptyText){
            this.field.value='';
        }

    },

    blur : function(event){
        if(this.field.value==''){
            this.field.value=this.emptyText;
        }
    },

    initAutocomplete : function(url, destinationElement){
        new Ajax.Autocompleter(
            this.field,
            destinationElement,
            url,
            {
                paramName: this.field.name,
                method: 'get',
                minChars: 2,
                updateElement: this._selectAutocompleteItem.bind(this),
                onShow : function(element, update) {
                    if(!update.style.position || update.style.position=='absolute') {
                        update.style.position = 'absolute';
                        Position.clone(element, update, {
                            setHeight: false,
                            offsetTop: element.offsetHeight
                        });
                    }
                    Effect.Appear(update,{duration:0});
                }

            }
        );
    },

    _selectAutocompleteItem : function(element){
        if(element.title){
            this.field.value = element.title;
        }
        this.form.submit();
    }
}

Varien.Tabs = Class.create();
Varien.Tabs.prototype = {
  initialize: function(selector) {
    var self=this;
    $$(selector+' a').each(this.initTab.bind(this));
  },

  initTab: function(el) {
      el.href = 'javascript:void(0)';
      if ($(el.parentNode).hasClassName('active')) {
        this.showContent(el);
      }
      el.observe('click', this.showContent.bind(this, el));
  },

  showContent: function(a) {
    var li = $(a.parentNode), ul = $(li.parentNode);
    ul.getElementsBySelector('li', 'ol').each(function(el){
      var contents = $(el.id+'_contents');
      if (el==li) {
        el.addClassName('active');
        contents.show();
      } else {
        el.removeClassName('active');
        contents.hide();
      }
    });
  }
}

Varien.DateElement = Class.create();
Varien.DateElement.prototype = {
    initialize: function(type, content, required, format) {
        if (type == 'id') {
            // id prefix
            this.day    = $(content + 'day');
            this.month  = $(content + 'month');
            this.year   = $(content + 'year');
            this.full   = $(content + 'full');
            this.advice = $(content + 'date-advice');
        } else if (type == 'container') {
            // content must be container with data
            this.day    = content.day;
            this.month  = content.month;
            this.year   = content.year;
            this.full   = content.full;
            this.advice = content.advice;
        } else {
            return;
        }

        this.required = required;
        this.format   = format;

        this.day.addClassName('validate-custom');
        this.day.validate = this.validate.bind(this);
        this.month.addClassName('validate-custom');
        this.month.validate = this.validate.bind(this);
        this.year.addClassName('validate-custom');
        this.year.validate = this.validate.bind(this);

        this.setDateRange(false, false);
        this.year.setAttribute('autocomplete','off');

        this.advice.hide();
    },
    validate: function() {
        var error = false,
            day = parseInt(this.day.value.replace(/^0*/, '')) || 0,
            month = parseInt(this.month.value.replace(/^0*/, '')) || 0,
            year = parseInt(this.year.value) || 0;
        if (!day && !month && !year) {
            if (this.required) {
                error = 'This date is a required value.';
            } else {
                this.full.value = '';
            }
        } else if (!day || !month || !year) {
            error = 'Please enter a valid full date.';
        } else {
            var date = new Date, countDaysInMonth = 0, errorType = null;
            date.setYear(year);date.setMonth(month-1);date.setDate(32);
            countDaysInMonth = 32 - date.getDate();
            if(!countDaysInMonth || countDaysInMonth>31) countDaysInMonth = 31;

            if (day<1 || day>countDaysInMonth) {
                errorType = 'day';
                error = 'Please enter a valid day (1-%d).';
            } else if (month<1 || month>12) {
                errorType = 'month';
                error = 'Please enter a valid month (1-12).';
            } else {
                if(day % 10 == day) this.day.value = '0'+day;
                if(month % 10 == month) this.month.value = '0'+month;
                this.full.value = this.format.replace(/%[mb]/i, this.month.value).replace(/%[de]/i, this.day.value).replace(/%y/i, this.year.value);
                var testFull = this.month.value + '/' + this.day.value + '/'+ this.year.value;
                var test = new Date(testFull);
                if (isNaN(test)) {
                    error = 'Please enter a valid date.';
                } else {
                    this.setFullDate(test);
                }
            }
            var valueError = false;
            if (!error && !this.validateData()){//(year<1900 || year>curyear) {
                errorType = this.validateDataErrorType;//'year';
                valueError = this.validateDataErrorText;//'Please enter a valid year (1900-%d).';
                error = valueError;
            }
        }

        if (error !== false) {
            try {
                error = Translator.translate(error);
            }
            catch (e) {}
            if (!valueError) {
                this.advice.innerHTML = error.replace('%d', countDaysInMonth);
            } else {
                this.advice.innerHTML = this.errorTextModifier(error);
            }
            this.advice.show();
            return false;
        }

        // fixing elements class
        this.day.removeClassName('validation-failed');
        this.month.removeClassName('validation-failed');
        this.year.removeClassName('validation-failed');

        this.advice.hide();
        return true;
    },
    validateData: function() {
        var year = this.fullDate.getFullYear();
        var date = new Date;
        this.curyear = date.getFullYear();
        return (year>=1900 && year<=this.curyear);
    },
    validateDataErrorType: 'year',
    validateDataErrorText: 'Please enter a valid year (1900-%d).',
    errorTextModifier: function(text) {
        return text.replace('%d', this.curyear);
    },
    setDateRange: function(minDate, maxDate) {
        this.minDate = minDate;
        this.maxDate = maxDate;
    },
    setFullDate: function(date) {
        this.fullDate = date;
    }
};

Varien.DOB = Class.create();
Varien.DOB.prototype = {
    initialize: function(selector, required, format) {
        var el = $$(selector)[0];
        var container       = {};
        container.day       = Element.select(el, '.dob-day input')[0];
        container.month     = Element.select(el, '.dob-month input')[0];
        container.year      = Element.select(el, '.dob-year input')[0];
        container.full      = Element.select(el, '.dob-full input')[0];
        container.advice    = Element.select(el, '.validation-advice')[0];

        new Varien.DateElement('container', container, required, format);
    }
};

Varien.dateRangeDate = Class.create();
Varien.dateRangeDate.prototype = Object.extend(new Varien.DateElement(), {
    validateData: function() {
        var validate = true;
        if (this.minDate || this.maxValue) {
            if (this.minDate) {
                this.minDate = new Date(this.minDate);
                this.minDate.setHours(0);
                if (isNaN(this.minDate)) {
                    this.minDate = new Date('1/1/1900');
                }
                validate = validate && (this.fullDate >= this.minDate)
            }
            if (this.maxDate) {
                this.maxDate = new Date(this.maxDate)
                this.minDate.setHours(0);
                if (isNaN(this.maxDate)) {
                    this.maxDate = new Date();
                }
                validate = validate && (this.fullDate <= this.maxDate)
            }
            if (this.maxDate && this.minDate) {
                this.validateDataErrorText = 'Please enter a valid date between %s and %s';
            } else if (this.maxDate) {
                this.validateDataErrorText = 'Please enter a valid date less than or equal to %s';
            } else if (this.minDate) {
                this.validateDataErrorText = 'Please enter a valid date equal to or greater than %s';
            } else {
                this.validateDataErrorText = '';
            }
        }
        return validate;
    },
    validateDataErrorText: 'Date should be between %s and %s',
    errorTextModifier: function(text) {
        if (this.minDate) {
            text = text.sub('%s', this.dateFormat(this.minDate));
        }
        if (this.maxDate) {
            text = text.sub('%s', this.dateFormat(this.maxDate));
        }
        return text;
    },
    dateFormat: function(date) {
        return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    }
});

Varien.FileElement = Class.create();
Varien.FileElement.prototype = {
    initialize: function (id) {
        this.fileElement = $(id);
        this.hiddenElement = $(id + '_value');

        this.fileElement.observe('change', this.selectFile.bind(this));
    },
    selectFile: function(event) {
        this.hiddenElement.value = this.fileElement.getValue();
    }
};

Validation.addAllThese([
    ['validate-custom', ' ', function(v,elm) {
        return elm.validate();
    }]
]);

function truncateOptions() {
    $$('.truncated').each(function(element){
        Event.observe(element, 'mouseover', function(){
            if (element.down('div.truncated_full_value')) {
                element.down('div.truncated_full_value').addClassName('show')
            }
        });
        Event.observe(element, 'mouseout', function(){
            if (element.down('div.truncated_full_value')) {
                element.down('div.truncated_full_value').removeClassName('show')
            }
        });

    });
}
Event.observe(window, 'load', function(){
   truncateOptions();
});

Element.addMethods({
    getInnerText: function(element)
    {
        element = $(element);
        if(element.innerText && !Prototype.Browser.Opera) {
            return element.innerText
        }
        return element.innerHTML.stripScripts().unescapeHTML().replace(/[\n\r\s]+/g, ' ').strip();
    }
});

/*
if (!("console" in window) || !("firebug" in console))
{
    var names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml",
    "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];

    window.console = {};
    for (var i = 0; i < names.length; ++i)
        window.console[names[i]] = function() {}
}
*/

/**
 * Executes event handler on the element. Works with event handlers attached by Prototype,
 * in a browser-agnostic fashion.
 * @param element The element object
 * @param event Event name, like 'change'
 *
 * @example fireEvent($('my-input', 'click'));
 */
function fireEvent(element, event) {
    if (document.createEvent) {
        // dispatch for all browsers except IE before version 9
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent(event, true, true ); // event type, bubbling, cancelable
        return element.dispatchEvent(evt);
    } else {
        // dispatch for IE before version 9
        var evt = document.createEventObject();
        return element.fireEvent('on' + event, evt)
    }
}

/**
 * Returns more accurate results of floating-point modulo division
 * E.g.:
 * 0.6 % 0.2 = 0.19999999999999996
 * modulo(0.6, 0.2) = 0
 *
 * @param dividend
 * @param divisor
 */
function modulo(dividend, divisor)
{
    var epsilon = divisor / 10000;
    var remainder = dividend % divisor;

    if (Math.abs(remainder - divisor) < epsilon || Math.abs(remainder) < epsilon) {
        remainder = 0;
    }

    return remainder;
}

/**
 * createContextualFragment is not supported in IE9. Adding its support.
 */
if ((typeof Range != "undefined") && !Range.prototype.createContextualFragment)
{
    Range.prototype.createContextualFragment = function(html)
    {
        var frag = document.createDocumentFragment(),
        div = document.createElement("div");
        frag.appendChild(div);
        div.outerHTML = html;
        return frag;
    };
}

/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE_AFL.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magentocommerce.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magentocommerce.com for more information.
 *
 * @category    Varien
 * @package     js
 * @copyright   Copyright (c) 2012 Magento Inc. (http://www.magentocommerce.com)
 * @license     http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 */
VarienForm = Class.create();
VarienForm.prototype = {
    initialize: function(formId, firstFieldFocus){
        this.form       = $(formId);
        if (!this.form) {
            return;
        }
        this.cache      = $A();
        this.currLoader = false;
        this.currDataIndex = false;
        this.validator  = new Validation(this.form);
        this.elementFocus   = this.elementOnFocus.bindAsEventListener(this);
        this.elementBlur    = this.elementOnBlur.bindAsEventListener(this);
        this.childLoader    = this.onChangeChildLoad.bindAsEventListener(this);
        this.highlightClass = 'highlight';
        this.extraChildParams = '';
        this.firstFieldFocus= firstFieldFocus || false;
        this.bindElements();
        if(this.firstFieldFocus){
            try{
                Form.Element.focus(Form.findFirstElement(this.form))
            }
            catch(e){}
        }
    },

    submit : function(url){
        if(this.validator && this.validator.validate()){
             this.form.submit();
        }
        return false;
    },

    bindElements:function (){
        var elements = Form.getElements(this.form);
        for (var row in elements) {
            if (elements[row].id) {
                Event.observe(elements[row],'focus',this.elementFocus);
                Event.observe(elements[row],'blur',this.elementBlur);
            }
        }
    },

    elementOnFocus: function(event){
        var element = Event.findElement(event, 'fieldset');
        if(element){
            Element.addClassName(element, this.highlightClass);
        }
    },

    elementOnBlur: function(event){
        var element = Event.findElement(event, 'fieldset');
        if(element){
            Element.removeClassName(element, this.highlightClass);
        }
    },

    setElementsRelation: function(parent, child, dataUrl, first){
        if (parent=$(parent)) {
            // TODO: array of relation and caching
            if (!this.cache[parent.id]){
                this.cache[parent.id] = $A();
                this.cache[parent.id]['child']     = child;
                this.cache[parent.id]['dataUrl']   = dataUrl;
                this.cache[parent.id]['data']      = $A();
                this.cache[parent.id]['first']      = first || false;
            }
            Event.observe(parent,'change',this.childLoader);
        }
    },

    onChangeChildLoad: function(event){
        element = Event.element(event);
        this.elementChildLoad(element);
    },

    elementChildLoad: function(element, callback){
        this.callback = callback || false;
        if (element.value) {
            this.currLoader = element.id;
            this.currDataIndex = element.value;
            if (this.cache[element.id]['data'][element.value]) {
                this.setDataToChild(this.cache[element.id]['data'][element.value]);
            }
            else{
                new Ajax.Request(this.cache[this.currLoader]['dataUrl'],{
                        method: 'post',
                        parameters: {"parent":element.value},
                        onComplete: this.reloadChildren.bind(this)
                });
            }
        }
    },

    reloadChildren: function(transport){
        var data = eval('(' + transport.responseText + ')');
        this.cache[this.currLoader]['data'][this.currDataIndex] = data;
        this.setDataToChild(data);
    },

    setDataToChild: function(data){
        if (data.length) {
            var child = $(this.cache[this.currLoader]['child']);
            if (child){
                var html = '<select name="'+child.name+'" id="'+child.id+'" class="'+child.className+'" title="'+child.title+'" '+this.extraChildParams+'>';
                if(this.cache[this.currLoader]['first']){
                    html+= '<option value="">'+this.cache[this.currLoader]['first']+'</option>';
                }
                for (var i in data){
                    if(data[i].value) {
                        html+= '<option value="'+data[i].value+'"';
                        if(child.value && (child.value == data[i].value || child.value == data[i].label)){
                            html+= ' selected';
                        }
                        html+='>'+data[i].label+'</option>';
                    }
                }
                html+= '</select>';
                Element.insert(child, {before: html});
                Element.remove(child);
            }
        }
        else{
            var child = $(this.cache[this.currLoader]['child']);
            if (child){
                var html = '<input type="text" name="'+child.name+'" id="'+child.id+'" class="'+child.className+'" title="'+child.title+'" '+this.extraChildParams+'>';
                Element.insert(child, {before: html});
                Element.remove(child);
            }
        }

        this.bindElements();
        if (this.callback) {
            this.callback();
        }
    }
}

RegionUpdater = Class.create();
RegionUpdater.prototype = {
    initialize: function (countryEl, regionTextEl, regionSelectEl, regions, disableAction, zipEl)
    {
        this.countryEl = $(countryEl);
        this.regionTextEl = $(regionTextEl);
        this.regionSelectEl = $(regionSelectEl);
        this.zipEl = $(zipEl);
        this.config = regions['config'];
        delete regions.config;
        this.regions = regions;

        this.disableAction = (typeof disableAction=='undefined') ? 'hide' : disableAction;
        this.zipOptions = (typeof zipOptions=='undefined') ? false : zipOptions;

        if (this.regionSelectEl.options.length<=1) {
            this.update();
        }

        Event.observe(this.countryEl, 'change', this.update.bind(this));
    },

    _checkRegionRequired: function()
    {
        var label, wildCard;
        var elements = [this.regionTextEl, this.regionSelectEl];
        var that = this;
        if (typeof this.config == 'undefined') {
            return;
        }
        var regionRequired = this.config.regions_required.indexOf(this.countryEl.value) >= 0;

        elements.each(function(currentElement) {
            Validation.reset(currentElement);
            label = $$('label[for="' + currentElement.id + '"]')[0];
            if (label) {
                wildCard = label.down('em') || label.down('span.required');
                if (!that.config.show_all_regions) {
                    if (regionRequired) {
                        label.up().show();
                    } else {
                        label.up().hide();
                    }
                }
            }

            if (label && wildCard) {
                if (!regionRequired) {
                    wildCard.hide();
                    if (label.hasClassName('required')) {
                        label.removeClassName('required');
                    }
                } else if (regionRequired) {
                    wildCard.show();
                    if (!label.hasClassName('required')) {
                        label.addClassName('required')
                    }
                }
            }

            if (!regionRequired) {
                if (currentElement.hasClassName('required-entry')) {
                    currentElement.removeClassName('required-entry');
                }
                if ('select' == currentElement.tagName.toLowerCase() &&
                    currentElement.hasClassName('validate-select')) {
                    currentElement.removeClassName('validate-select');
                }
            } else {
                if (!currentElement.hasClassName('required-entry')) {
                    currentElement.addClassName('required-entry');
                }
                if ('select' == currentElement.tagName.toLowerCase() &&
                    !currentElement.hasClassName('validate-select')) {
                    currentElement.addClassName('validate-select');
                }
            }
        });
    },

    update: function()
    {
        if (this.regions[this.countryEl.value]) {
            var i, option, region, def;

            def = this.regionSelectEl.getAttribute('defaultValue');
            if (this.regionTextEl) {
                if (!def) {
                    def = this.regionTextEl.value.toLowerCase();
                }
                this.regionTextEl.value = '';
            }

            this.regionSelectEl.options.length = 1;
            for (regionId in this.regions[this.countryEl.value]) {
                region = this.regions[this.countryEl.value][regionId];

                option = document.createElement('OPTION');
                option.value = regionId;
                option.text = region.name.stripTags();
                option.title = region.name;

                if (this.regionSelectEl.options.add) {
                    this.regionSelectEl.options.add(option);
                } else {
                    this.regionSelectEl.appendChild(option);
                }

                if (regionId==def || (region.name && region.name.toLowerCase()==def) ||
                    (region.name && region.code.toLowerCase()==def)
                ) {
                    this.regionSelectEl.value = regionId;
                }
            }

            if (this.disableAction=='hide') {
                if (this.regionTextEl) {
                    this.regionTextEl.style.display = 'none';
                }

                this.regionSelectEl.style.display = '';
            } else if (this.disableAction=='disable') {
                if (this.regionTextEl) {
                    this.regionTextEl.disabled = true;
                }
                this.regionSelectEl.disabled = false;
            }
            this.setMarkDisplay(this.regionSelectEl, true);
        } else {
            if (this.disableAction=='hide') {
                if (this.regionTextEl) {
                    this.regionTextEl.style.display = '';
                }
                this.regionSelectEl.style.display = 'none';
                Validation.reset(this.regionSelectEl);
            } else if (this.disableAction=='disable') {
                if (this.regionTextEl) {
                    this.regionTextEl.disabled = false;
                }
                this.regionSelectEl.disabled = true;
            } else if (this.disableAction=='nullify') {
                this.regionSelectEl.options.length = 1;
                this.regionSelectEl.value = '';
                this.regionSelectEl.selectedIndex = 0;
                this.lastCountryId = '';
            }
            this.setMarkDisplay(this.regionSelectEl, false);
        }

        this._checkRegionRequired();
        // Make Zip and its label required/optional
        var zipUpdater = new ZipUpdater(this.countryEl.value, this.zipEl);
        zipUpdater.update();
    },

    setMarkDisplay: function(elem, display){
        elem = $(elem);
        var labelElement = elem.up(0).down('label > span.required') ||
                           elem.up(1).down('label > span.required') ||
                           elem.up(0).down('label.required > em') ||
                           elem.up(1).down('label.required > em');
        if(labelElement) {
            inputElement = labelElement.up().next('input');
            if (display) {
                labelElement.show();
                if (inputElement) {
                    inputElement.addClassName('required-entry');
                }
            } else {
                labelElement.hide();
                if (inputElement) {
                    inputElement.removeClassName('required-entry');
                }
            }
        }
    }
}

ZipUpdater = Class.create();
ZipUpdater.prototype = {
    initialize: function(country, zipElement)
    {
        this.country = country;
        this.zipElement = $(zipElement);
    },

    update: function()
    {
        // Country ISO 2-letter codes must be pre-defined
        if (typeof optionalZipCountries == 'undefined') {
            return false;
        }

        // Ajax-request and normal content load compatibility
        if (this.zipElement != undefined) {
            this._setPostcodeOptional();
        } else {
            Event.observe(window, "load", this._setPostcodeOptional.bind(this));
        }
    },

    _setPostcodeOptional: function()
    {
        this.zipElement = $(this.zipElement);
        if (this.zipElement == undefined) {
            return false;
        }

        // find label
        var label = $$('label[for="' + this.zipElement.id + '"]')[0];
        if (label != undefined) {
            var wildCard = label.down('em') || label.down('span.required');
        }

        // Make Zip and its label required/optional
        if (optionalZipCountries.indexOf(this.country) != -1) {
            while (this.zipElement.hasClassName('required-entry')) {
                this.zipElement.removeClassName('required-entry');
            }
            if (wildCard != undefined) {
                wildCard.hide();
            }
        } else {
            this.zipElement.addClassName('required-entry');
            if (wildCard != undefined) {
                wildCard.show();
            }
        }
    }
}

/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE_AFL.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magentocommerce.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magentocommerce.com for more information.
 *
 * @category    Varien
 * @package     js
 * @copyright   Copyright (c) 2012 Magento Inc. (http://www.magentocommerce.com)
 * @license     http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 */

/**
 * @classDescription simple Navigation with replacing old handlers
 * @param {String} id id of ul element with navigation lists
 * @param {Object} settings object with settings
 */
var mainNav = function() {

    var main = {
        obj_nav :   $(arguments[0]) || $("nav"),

        settings :  {
            show_delay      :   0,
            hide_delay      :   0,
            _ie6            :   /MSIE 6.+Win/.test(navigator.userAgent),
            _ie7            :   /MSIE 7.+Win/.test(navigator.userAgent)
        },

        init :  function(obj, level) {
            obj.lists = obj.childElements();
            obj.lists.each(function(el,ind){
                main.handlNavElement(el);
                if((main.settings._ie6 || main.settings._ie7) && level){
                    main.ieFixZIndex(el, ind, obj.lists.size());
                }
            });
            if(main.settings._ie6 && !level){
                document.execCommand("BackgroundImageCache", false, true);
            }
        },

        handlNavElement :   function(list) {
            if(list !== undefined){
                list.onmouseover = function(){
                    main.fireNavEvent(this,true);
                };
                list.onmouseout = function(){
                    main.fireNavEvent(this,false);
                };
                if(list.down("ul")){
                    main.init(list.down("ul"), true);
                }
            }
        },

        ieFixZIndex : function(el, i, l) {
            if(el.tagName.toString().toLowerCase().indexOf("iframe") == -1){
                el.style.zIndex = l - i;
            } else {
                el.onmouseover = "null";
                el.onmouseout = "null";
            }
        },

        fireNavEvent :  function(elm,ev) {
            if(ev){
                elm.addClassName("over");
                elm.down("a").addClassName("over");
                if (elm.childElements()[1]) {
                    main.show(elm.childElements()[1]);
                }
            } else {
                elm.removeClassName("over");
                elm.down("a").removeClassName("over");
                if (elm.childElements()[1]) {
                    main.hide(elm.childElements()[1]);
                }
            }
        },

        show : function (sub_elm) {
            if (sub_elm.hide_time_id) {
                clearTimeout(sub_elm.hide_time_id);
            }
            sub_elm.show_time_id = setTimeout(function() {
                if (!sub_elm.hasClassName("shown-sub")) {
                    sub_elm.addClassName("shown-sub");
                }
            }, main.settings.show_delay);
        },

        hide : function (sub_elm) {
            if (sub_elm.show_time_id) {
                clearTimeout(sub_elm.show_time_id);
            }
            sub_elm.hide_time_id = setTimeout(function(){
                if (sub_elm.hasClassName("shown-sub")) {
                    sub_elm.removeClassName("shown-sub");
                }
            }, main.settings.hide_delay);
        }

    };
    if (arguments[1]) {
        main.settings = Object.extend(main.settings, arguments[1]);
    }
    if (main.obj_nav) {
        main.init(main.obj_nav, false);
    }
};

document.observe("dom:loaded", function() {
    //run navigation without delays and with default id="#nav"
    //mainNav();

    //run navigation with delays
    mainNav("nav", {"show_delay":"100","hide_delay":"100"});
});

/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE_AFL.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magentocommerce.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magentocommerce.com for more information.
 *
 * @category    Mage
 * @package     js
 * @copyright   Copyright (c) 2012 Magento Inc. (http://www.magentocommerce.com)
 * @license     http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 */

var Translate = Class.create();
Translate.prototype = {
    initialize: function(data){
        this.data = $H(data);
    },

    translate : function(){
        var args = arguments;
        var text = arguments[0];

        if(this.data.get(text)){
            return this.data.get(text);
        }
        return text;
    },
    add : function() {
        if (arguments.length > 1) {
            this.data.set(arguments[0], arguments[1]);
        } else if (typeof arguments[0] =='object') {
            $H(arguments[0]).each(function (pair){
                this.data.set(pair.key, pair.value);
            }.bind(this));
        }
    }
}

/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE_AFL.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magentocommerce.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magentocommerce.com for more information.
 *
 * @category    Mage
 * @package     js
 * @copyright   Copyright (c) 2012 Magento Inc. (http://www.magentocommerce.com)
 * @license     http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 */
// old school cookie functions grabbed off the web

if (!window.Mage) var Mage = {};

Mage.Cookies = {};
Mage.Cookies.expires  = null;
Mage.Cookies.path     = '/';
Mage.Cookies.domain   = null;
Mage.Cookies.secure   = false;
Mage.Cookies.set = function(name, value){
     var argv = arguments;
     var argc = arguments.length;
     var expires = (argc > 2) ? argv[2] : Mage.Cookies.expires;
     var path = (argc > 3) ? argv[3] : Mage.Cookies.path;
     var domain = (argc > 4) ? argv[4] : Mage.Cookies.domain;
     var secure = (argc > 5) ? argv[5] : Mage.Cookies.secure;
     document.cookie = name + "=" + escape (value) +
       ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
       ((path == null) ? "" : ("; path=" + path)) +
       ((domain == null) ? "" : ("; domain=" + domain)) +
       ((secure == true) ? "; secure" : "");
};

Mage.Cookies.get = function(name){
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    var j = 0;
    while(i < clen){
        j = i + alen;
        if (document.cookie.substring(i, j) == arg)
            return Mage.Cookies.getCookieVal(j);
        i = document.cookie.indexOf(" ", i) + 1;
        if(i == 0)
            break;
    }
    return null;
};

Mage.Cookies.clear = function(name) {
  if(Mage.Cookies.get(name)){
    document.cookie = name + "=" +
    "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
};

Mage.Cookies.getCookieVal = function(offset){
   var endstr = document.cookie.indexOf(";", offset);
   if(endstr == -1){
       endstr = document.cookie.length;
   }
   return unescape(document.cookie.substring(offset, endstr));
};

/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE_AFL.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magentocommerce.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magentocommerce.com for more information.
 *
 * @category    Varien
 * @package     js
 * @copyright   Copyright (c) 2012 Magento Inc. (http://www.magentocommerce.com)
 * @license     http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 */
if(typeof Product=='undefined') {
    var Product = {};
}

/********************* IMAGE ZOOMER ***********************/

Product.Zoom = Class.create();
/**
 * Image zoom control
 *
 * @author      Magento Core Team <core@magentocommerce.com>
 */
Product.Zoom.prototype = {
    initialize: function(imageEl, trackEl, handleEl, zoomInEl, zoomOutEl, hintEl){
        this.containerEl = $(imageEl).parentNode;
        this.imageEl = $(imageEl);
        this.handleEl = $(handleEl);
        this.trackEl = $(trackEl);
        this.hintEl = $(hintEl);

        this.containerDim = Element.getDimensions(this.containerEl);
        this.imageDim = Element.getDimensions(this.imageEl);

        this.imageDim.ratio = this.imageDim.width/this.imageDim.height;

        this.floorZoom = 1;

        if (this.imageDim.width > this.imageDim.height) {
            this.ceilingZoom = this.imageDim.width / this.containerDim.width;
        } else {
            this.ceilingZoom = this.imageDim.height / this.containerDim.height;
        }

        if (this.imageDim.width <= this.containerDim.width
            && this.imageDim.height <= this.containerDim.height) {
            this.trackEl.up().hide();
            this.hintEl.hide();
            this.containerEl.removeClassName('product-image-zoom');
            return;
        }

        this.imageX = 0;
        this.imageY = 0;
        this.imageZoom = 1;

        this.sliderSpeed = 0;
        this.sliderAccel = 0;
        this.zoomBtnPressed = false;

        this.showFull = false;

        this.selects = document.getElementsByTagName('select');

        this.draggable = new Draggable(imageEl, {
            starteffect:false,
            reverteffect:false,
            endeffect:false,
            snap:this.contain.bind(this)
        });

        this.slider = new Control.Slider(handleEl, trackEl, {
            axis:'horizontal',
            minimum:0,
            maximum:Element.getDimensions(this.trackEl).width,
            alignX:0,
            increment:1,
            sliderValue:0,
            onSlide:this.scale.bind(this),
            onChange:this.scale.bind(this)
        });

        this.scale(0);

        Event.observe(this.imageEl, 'dblclick', this.toggleFull.bind(this));

        Event.observe($(zoomInEl), 'mousedown', this.startZoomIn.bind(this));
        Event.observe($(zoomInEl), 'mouseup', this.stopZooming.bind(this));
        Event.observe($(zoomInEl), 'mouseout', this.stopZooming.bind(this));

        Event.observe($(zoomOutEl), 'mousedown', this.startZoomOut.bind(this));
        Event.observe($(zoomOutEl), 'mouseup', this.stopZooming.bind(this));
        Event.observe($(zoomOutEl), 'mouseout', this.stopZooming.bind(this));
    },

    toggleFull: function () {
        this.showFull = !this.showFull;

        //Hide selects for IE6 only
        if (typeof document.body.style.maxHeight == "undefined")  {
            for (i=0; i<this.selects.length; i++) {
                this.selects[i].style.visibility = this.showFull ? 'hidden' : 'visible';
            }
        }
        val_scale = !this.showFull ? this.slider.value : 1;
        this.scale(val_scale);

        this.trackEl.style.visibility = this.showFull ? 'hidden' : 'visible';
        this.containerEl.style.overflow = this.showFull ? 'visible' : 'hidden';
        this.containerEl.style.zIndex = this.showFull ? '1000' : '9';

        return this;
    },

    scale: function (v) {
        var centerX  = (this.containerDim.width*(1-this.imageZoom)/2-this.imageX)/this.imageZoom;
        var centerY  = (this.containerDim.height*(1-this.imageZoom)/2-this.imageY)/this.imageZoom;
        var overSize = (this.imageDim.width > this.containerDim.width || this.imageDim.height > this.containerDim.height);

        this.imageZoom = this.floorZoom+(v*(this.ceilingZoom-this.floorZoom));

        if (overSize) {
            if (this.imageDim.width > this.containerDim.width) {
                this.imageEl.style.width = (this.imageZoom*this.containerDim.width)+'px';
            } else if (this.imageDim.height > this.containerDim.height) {
                this.imageEl.style.height = (this.imageZoom*this.containerDim.height)+'px';
            }

            if(this.containerDim.ratio){
                this.imageEl.style.height = (this.imageZoom*this.containerDim.width*this.containerDim.ratio)+'px'; // for safari
            }
        } else {
            this.slider.setDisabled();
        }

        this.imageX = this.containerDim.width*(1-this.imageZoom)/2-centerX*this.imageZoom;
        this.imageY = this.containerDim.height*(1-this.imageZoom)/2-centerY*this.imageZoom;

        this.contain(this.imageX, this.imageY, this.draggable);

        return true;
    },

    startZoomIn: function()
    {
        if (!this.slider.disabled) {
            this.zoomBtnPressed = true;
            this.sliderAccel = .002;
            this.periodicalZoom();
            this.zoomer = new PeriodicalExecuter(this.periodicalZoom.bind(this), .05);
        }
        return this;
    },

    startZoomOut: function()
    {
        if (!this.slider.disabled) {
            this.zoomBtnPressed = true;
            this.sliderAccel = -.002;
            this.periodicalZoom();
            this.zoomer = new PeriodicalExecuter(this.periodicalZoom.bind(this), .05);
        }
        return this;
    },

    stopZooming: function()
    {
        if (!this.zoomer || this.sliderSpeed==0) {
            return;
        }
        this.zoomBtnPressed = false;
        this.sliderAccel = 0;
    },

    periodicalZoom: function()
    {
        if (!this.zoomer) {
            return this;
        }

        if (this.zoomBtnPressed) {
            this.sliderSpeed += this.sliderAccel;
        } else {
            this.sliderSpeed /= 1.5;
            if (Math.abs(this.sliderSpeed)<.001) {
                this.sliderSpeed = 0;
                this.zoomer.stop();
                this.zoomer = null;
            }
        }
        this.slider.value += this.sliderSpeed;

        this.slider.setValue(this.slider.value);
        this.scale(this.slider.value);

        return this;
    },

    contain: function (x,y,draggable) {

        var dim = Element.getDimensions(draggable.element);

        var xMin = 0, xMax = this.containerDim.width-dim.width;
        var yMin = 0, yMax = this.containerDim.height-dim.height;

        x = x>xMin ? xMin : x;
        x = x<xMax ? xMax : x;
        y = y>yMin ? yMin : y;
        y = y<yMax ? yMax : y;

        if (this.containerDim.width > dim.width) {
            x = (this.containerDim.width/2) - (dim.width/2);
        }

        if (this.containerDim.height > dim.height) {
            y = (this.containerDim.height/2) - (dim.height/2);
        }

        this.imageX = x;
        this.imageY = y;

        this.imageEl.style.left = this.imageX+'px';
        this.imageEl.style.top = this.imageY+'px';

        return [x,y];
    }
}

/**************************** CONFIGURABLE PRODUCT **************************/
Product.Config = Class.create();
Product.Config.prototype = {
    initialize: function(config){
        this.config     = config;
        this.taxConfig  = this.config.taxConfig;
        this.settings   = $$('.super-attribute-select');
        this.state      = new Hash();
        this.priceTemplate = new Template(this.config.template);
        this.prices     = config.prices;

        this.settings.each(function(element){
            Event.observe(element, 'change', this.configure.bind(this))
        }.bind(this));

        // fill state
        this.settings.each(function(element){
            var attributeId = element.id.replace(/[a-z]*/, '');
            if(attributeId && this.config.attributes[attributeId]) {
                element.config = this.config.attributes[attributeId];
                element.attributeId = attributeId;
                this.state[attributeId] = false;
            }
        }.bind(this))

        // Init settings dropdown
        var childSettings = [];
        for(var i=this.settings.length-1;i>=0;i--){
            var prevSetting = this.settings[i-1] ? this.settings[i-1] : false;
            var nextSetting = this.settings[i+1] ? this.settings[i+1] : false;
            if(i==0){
                this.fillSelect(this.settings[i])
            }
            else {
                this.settings[i].disabled=true;
            }
            $(this.settings[i]).childSettings = childSettings.clone();
            $(this.settings[i]).prevSetting   = prevSetting;
            $(this.settings[i]).nextSetting   = nextSetting;
            childSettings.push(this.settings[i]);
        }

        // Set default values - from config and overwrite them by url values
        if (config.defaultValues) {
            this.values = config.defaultValues;
        }

        var separatorIndex = window.location.href.indexOf('#');
        if (separatorIndex != -1) {
            var paramsStr = window.location.href.substr(separatorIndex+1);
            var urlValues = paramsStr.toQueryParams();
            if (!this.values) {
                this.values = {};
            }
            for (var i in urlValues) {
                this.values[i] = urlValues[i];
            }
        }

        this.configureForValues();
        document.observe("dom:loaded", this.configureForValues.bind(this));
    },

    configureForValues: function () {
        if (this.values) {
            this.settings.each(function(element){
                var attributeId = element.attributeId;
                element.value = (typeof(this.values[attributeId]) == 'undefined')? '' : this.values[attributeId];
                this.configureElement(element);
            }.bind(this));
        }
    },

    configure: function(event){
        var element = Event.element(event);
        this.configureElement(element);
    },

    configureElement : function(element) {
        this.reloadOptionLabels(element);
        if(element.value){
            this.state[element.config.id] = element.value;
            if(element.nextSetting){
                element.nextSetting.disabled = false;
                this.fillSelect(element.nextSetting);
                this.resetChildren(element.nextSetting);
            }
        }
        else {
            this.resetChildren(element);
        }
        this.reloadPrice();
//      Calculator.updatePrice();
    },

    reloadOptionLabels: function(element){
        var selectedPrice;
        if(element.options[element.selectedIndex].config){
            selectedPrice = parseFloat(element.options[element.selectedIndex].config.price)
        }
        else{
            selectedPrice = 0;
        }
        for(var i=0;i<element.options.length;i++){
            if(element.options[i].config){
                element.options[i].text = this.getOptionLabel(element.options[i].config, element.options[i].config.price-selectedPrice);
            }
        }
    },

    resetChildren : function(element){
        if(element.childSettings) {
            for(var i=0;i<element.childSettings.length;i++){
                element.childSettings[i].selectedIndex = 0;
                element.childSettings[i].disabled = true;
                if(element.config){
                    this.state[element.config.id] = false;
                }
            }
        }
    },

    fillSelect: function(element){
        var attributeId = element.id.replace(/[a-z]*/, '');
        var options = this.getAttributeOptions(attributeId);
        this.clearSelect(element);
        element.options[0] = new Option(this.config.chooseText, '');

        var prevConfig = false;
        if(element.prevSetting){
            prevConfig = element.prevSetting.options[element.prevSetting.selectedIndex];
        }

        if(options) {
            var index = 1;
            for(var i=0;i<options.length;i++){
                var allowedProducts = [];
                if(prevConfig) {
                    for(var j=0;j<options[i].products.length;j++){
                        if(prevConfig.config.allowedProducts
                            && prevConfig.config.allowedProducts.indexOf(options[i].products[j])>-1){
                            allowedProducts.push(options[i].products[j]);
                        }
                    }
                } else {
                    allowedProducts = options[i].products.clone();
                }

                if(allowedProducts.size()>0){
                    options[i].allowedProducts = allowedProducts;
                    element.options[index] = new Option(this.getOptionLabel(options[i], options[i].price), options[i].id);
                    element.options[index].config = options[i];
                    index++;
                }
            }
        }
    },

    getOptionLabel: function(option, price){
        var price = parseFloat(price);
        if (this.taxConfig.includeTax) {
            var tax = price / (100 + this.taxConfig.defaultTax) * this.taxConfig.defaultTax;
            var excl = price - tax;
            var incl = excl*(1+(this.taxConfig.currentTax/100));
        } else {
            var tax = price * (this.taxConfig.currentTax / 100);
            var excl = price;
            var incl = excl + tax;
        }

        if (this.taxConfig.showIncludeTax || this.taxConfig.showBothPrices) {
            price = incl;
        } else {
            price = excl;
        }

        var str = option.label;
        if(price){
            if (this.taxConfig.showBothPrices) {
                str+= ' ' + this.formatPrice(excl, true) + ' (' + this.formatPrice(price, true) + ' ' + this.taxConfig.inclTaxTitle + ')';
            } else {
                str+= ' ' + this.formatPrice(price, true);
            }
        }
        return str;
    },

    formatPrice: function(price, showSign){
        var str = '';
        price = parseFloat(price);
        if(showSign){
            if(price<0){
                str+= '-';
                price = -price;
            }
            else{
                str+= '+';
            }
        }

        var roundedPrice = (Math.round(price*100)/100).toString();

        if (this.prices && this.prices[roundedPrice]) {
            str+= this.prices[roundedPrice];
        }
        else {
            str+= this.priceTemplate.evaluate({price:price.toFixed(2)});
        }
        return str;
    },

    clearSelect: function(element){
        for(var i=element.options.length-1;i>=0;i--){
            element.remove(i);
        }
    },

    getAttributeOptions: function(attributeId){
        if(this.config.attributes[attributeId]){
            return this.config.attributes[attributeId].options;
        }
    },

    reloadPrice: function(){
        var price    = 0;
        var oldPrice = 0;
        for(var i=this.settings.length-1;i>=0;i--){
            var selected = this.settings[i].options[this.settings[i].selectedIndex];
            if(selected.config){
                price    += parseFloat(selected.config.price);
                oldPrice += parseFloat(selected.config.oldPrice);
            }
        }

        optionsPrice.changePrice('config', {'price': price, 'oldPrice': oldPrice});
        optionsPrice.reload();

        return price;

        if($('product-price-'+this.config.productId)){
            $('product-price-'+this.config.productId).innerHTML = price;
        }
        this.reloadOldPrice();
    },

    reloadOldPrice: function(){
        if ($('old-price-'+this.config.productId)) {

            var price = parseFloat(this.config.oldPrice);
            for(var i=this.settings.length-1;i>=0;i--){
                var selected = this.settings[i].options[this.settings[i].selectedIndex];
                if(selected.config){
                    var parsedOldPrice = parseFloat(selected.config.oldPrice);
                    price += isNaN(parsedOldPrice) ? 0 : parsedOldPrice;
                }
            }
            if (price < 0)
                price = 0;
            price = this.formatPrice(price);

            if($('old-price-'+this.config.productId)){
                $('old-price-'+this.config.productId).innerHTML = price;
            }

        }
    }
}


/**************************** SUPER PRODUCTS ********************************/

Product.Super = {};
Product.Super.Configurable = Class.create();

Product.Super.Configurable.prototype = {
    initialize: function(container, observeCss, updateUrl, updatePriceUrl, priceContainerId) {
        this.container = $(container);
        this.observeCss = observeCss;
        this.updateUrl = updateUrl;
        this.updatePriceUrl = updatePriceUrl;
        this.priceContainerId = priceContainerId;
        this.registerObservers();
    },
    registerObservers: function() {
        var elements = this.container.getElementsByClassName(this.observeCss);
        elements.each(function(element){
            Event.observe(element, 'change', this.update.bindAsEventListener(this));
        }.bind(this));
        return this;
    },
    update: function(event) {
        var elements = this.container.getElementsByClassName(this.observeCss);
        var parameters = Form.serializeElements(elements, true);

        new Ajax.Updater(this.container, this.updateUrl + '?ajax=1', {
                parameters:parameters,
                onComplete:this.registerObservers.bind(this)
        });
        var priceContainer = $(this.priceContainerId);
        if(priceContainer) {
            new Ajax.Updater(priceContainer, this.updatePriceUrl + '?ajax=1', {
                parameters:parameters
            });
        }
    }
}

/**************************** PRICE RELOADER ********************************/
Product.OptionsPrice = Class.create();
Product.OptionsPrice.prototype = {
    initialize: function(config) {
        this.productId          = config.productId;
        this.priceFormat        = config.priceFormat;
        this.includeTax         = config.includeTax;
        this.defaultTax         = config.defaultTax;
        this.currentTax         = config.currentTax;
        this.productPrice       = config.productPrice;
        this.showIncludeTax     = config.showIncludeTax;
        this.showBothPrices     = config.showBothPrices;
        this.productOldPrice    = config.productOldPrice;
        this.priceInclTax       = config.priceInclTax;
        this.priceExclTax       = config.priceExclTax;
        this.skipCalculate      = config.skipCalculate;//@deprecated after 1.5.1.0
        this.duplicateIdSuffix  = config.idSuffix;
        this.specialTaxPrice    = config.specialTaxPrice;
        this.tierPrices         = config.tierPrices;
        this.tierPricesInclTax  = config.tierPricesInclTax;

        this.oldPlusDisposition = config.oldPlusDisposition;
        this.plusDisposition    = config.plusDisposition;
        this.plusDispositionTax = config.plusDispositionTax;

        this.oldMinusDisposition = config.oldMinusDisposition;
        this.minusDisposition    = config.minusDisposition;

        this.exclDisposition     = config.exclDisposition;

        this.optionPrices   = {};
        this.customPrices   = {};
        this.containers     = {};

        this.displayZeroPrice   = true;

        this.initPrices();
    },

    setDuplicateIdSuffix: function(idSuffix) {
        this.duplicateIdSuffix = idSuffix;
    },

    initPrices: function() {
        this.containers[0] = 'product-price-' + this.productId;
        this.containers[1] = 'bundle-price-' + this.productId;
        this.containers[2] = 'price-including-tax-' + this.productId;
        this.containers[3] = 'price-excluding-tax-' + this.productId;
        this.containers[4] = 'old-price-' + this.productId;
    },

    changePrice: function(key, price) {
        this.optionPrices[key] = price;
    },

    addCustomPrices: function(key, price) {
        this.customPrices[key] = price;
    },
    getOptionPrices: function() {
        var price = 0;
        var nonTaxable = 0;
        var oldPrice = 0;
        var priceInclTax = 0;
        var currentTax = this.currentTax;
        $H(this.optionPrices).each(function(pair) {
            if ('undefined' != typeof(pair.value.price) && 'undefined' != typeof(pair.value.oldPrice)) {
                price += parseFloat(pair.value.price);
                oldPrice += parseFloat(pair.value.oldPrice);
            } else if (pair.key == 'nontaxable') {
                nonTaxable = pair.value;
            } else if (pair.key == 'priceInclTax') {
                priceInclTax += pair.value;
            } else if (pair.key == 'optionsPriceInclTax') {
                priceInclTax += pair.value * (100 + currentTax) / 100;
            } else {
                price += parseFloat(pair.value);
                oldPrice += parseFloat(pair.value);
            }
        });
        var result = [price, nonTaxable, oldPrice, priceInclTax];
        return result;
    },

    reload: function() {
        var price;
        var formattedPrice;
        var optionPrices = this.getOptionPrices();
        var nonTaxable = optionPrices[1];
        var optionOldPrice = optionPrices[2];
        var priceInclTax = optionPrices[3];
        optionPrices = optionPrices[0];

        $H(this.containers).each(function(pair) {
            var _productPrice;
            var _plusDisposition;
            var _minusDisposition;
            var _priceInclTax;
            if ($(pair.value)) {
                if (pair.value == 'old-price-'+this.productId && this.productOldPrice != this.productPrice) {
                    _productPrice = this.productOldPrice;
                    _plusDisposition = this.oldPlusDisposition;
                    _minusDisposition = this.oldMinusDisposition;
                } else {
                    _productPrice = this.productPrice;
                    _plusDisposition = this.plusDisposition;
                    _minusDisposition = this.minusDisposition;
                }
                _priceInclTax = priceInclTax;

                if (pair.value == 'old-price-'+this.productId && optionOldPrice !== undefined) {
                    price = optionOldPrice+parseFloat(_productPrice);
                } else if (this.specialTaxPrice == 'true' && this.priceInclTax !== undefined && this.priceExclTax !== undefined) {
                    price = optionPrices+parseFloat(this.priceExclTax);
                    _priceInclTax += this.priceInclTax;
                } else {
                    price = optionPrices+parseFloat(_productPrice);
                    _priceInclTax += parseFloat(_productPrice) * (100 + this.currentTax) / 100;
                }

                if (this.specialTaxPrice == 'true') {
                    var excl = price;
                    var incl = _priceInclTax;
                } else if (this.includeTax == 'true') {
                    // tax = tax included into product price by admin
                    var tax = price / (100 + this.defaultTax) * this.defaultTax;
                    var excl = price - tax;
                    var incl = excl*(1+(this.currentTax/100));
                } else {
                    var tax = price * (this.currentTax / 100);
                    var excl = price;
                    var incl = excl + tax;
                }

                var subPrice = 0;
                var subPriceincludeTax = 0;
                Object.values(this.customPrices).each(function(el){
                    if (el.excludeTax && el.includeTax) {
                        subPrice += parseFloat(el.excludeTax);
                        subPriceincludeTax += parseFloat(el.includeTax);
                    } else {
                        subPrice += parseFloat(el.price);
                        subPriceincludeTax += parseFloat(el.price);
                    }
                });
                excl += subPrice;
                incl += subPriceincludeTax;

                if (typeof this.exclDisposition == 'undefined') {
                    excl += parseFloat(_plusDisposition);
                }

                incl += parseFloat(_plusDisposition) + parseFloat(this.plusDispositionTax);
                excl -= parseFloat(_minusDisposition);
                incl -= parseFloat(_minusDisposition);

                //adding nontaxlable part of options
                excl += parseFloat(nonTaxable);
                incl += parseFloat(nonTaxable);

                if (pair.value == 'price-including-tax-'+this.productId) {
                    price = incl;
                } else if (pair.value == 'price-excluding-tax-'+this.productId) {
                    price = excl;
                } else if (pair.value == 'old-price-'+this.productId) {
                    if (this.showIncludeTax || this.showBothPrices) {
                        price = incl;
                    } else {
                        price = excl;
                    }
                } else {
                    if (this.showIncludeTax) {
                        price = incl;
                    } else {
                        price = excl;
                    }
                }

                if (price < 0) price = 0;

                if (price > 0 || this.displayZeroPrice) {
                    formattedPrice = this.formatPrice(price);
                } else {
                    formattedPrice = '';
                }

                if ($(pair.value).select('.price')[0]) {
                    $(pair.value).select('.price')[0].innerHTML = formattedPrice;
                    if ($(pair.value+this.duplicateIdSuffix) && $(pair.value+this.duplicateIdSuffix).select('.price')[0]) {
                        $(pair.value+this.duplicateIdSuffix).select('.price')[0].innerHTML = formattedPrice;
                    }
                } else {
                    $(pair.value).innerHTML = formattedPrice;
                    if ($(pair.value+this.duplicateIdSuffix)) {
                        $(pair.value+this.duplicateIdSuffix).innerHTML = formattedPrice;
                    }
                }
            };
        }.bind(this));

        for (var i = 0; i < this.tierPrices.length; i++) {
            $$('.price.tier-' + i).each(function (el) {
                var price = this.tierPrices[i] + parseFloat(optionPrices);
                el.innerHTML = this.formatPrice(price);
            }, this);
            $$('.price.tier-' + i + '-incl-tax').each(function (el) {
                var price = this.tierPricesInclTax[i] + parseFloat(optionPrices);
                el.innerHTML = this.formatPrice(price);
            }, this);
            $$('.benefit').each(function (el) {
                var parsePrice = function (html) {
                    return parseFloat(/\d+\.?\d*/.exec(html));
                };
                var container = $(this.containers[3]) ? this.containers[3] : this.containers[0];
                var price = parsePrice($(container).innerHTML);
                var tierPrice = $$('.price.tier-' + i);
                tierPrice = tierPrice.length ? parseInt(tierPrice[0].innerHTML, 10) : 0;
                var $percent = Selector.findChildElements(el, ['.percent.tier-' + i]);
                $percent.each(function (el) {
                    el.innerHTML = Math.ceil(100 - ((100 / price) * tierPrice));
                });
            }, this);
        }

    },
    formatPrice: function(price) {
        return formatCurrency(price, this.priceFormat);
    }
}

/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE_AFL.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magentocommerce.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magentocommerce.com for more information.
 *
 * @category    Varien
 * @package     js
 * @copyright   Copyright (c) 2012 Magento Inc. (http://www.magentocommerce.com)
 * @license     http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 */
if (typeof Product == 'undefined') {
    var Product = {};
}

/**************************** CONFIGURABLE PRODUCT **************************/
Product.Config = Class.create();
Product.Config.prototype = {
    initialize: function(config){
        this.config     = config;
        this.taxConfig  = this.config.taxConfig;
        if (config.containerId) {
            this.settings   = $$('#' + config.containerId + ' ' + '.super-attribute-select');
        } else {
            this.settings   = $$('.super-attribute-select');
        }
        this.state      = new Hash();
        this.priceTemplate = new Template(this.config.template);
        this.prices     = config.prices;
        
        // Set default values from config
        if (config.defaultValues) {
            this.values = config.defaultValues;
        }
        
        // Overwrite defaults by url
        var separatorIndex = window.location.href.indexOf('#');
        if (separatorIndex != -1) {
            var paramsStr = window.location.href.substr(separatorIndex+1);
            var urlValues = paramsStr.toQueryParams();
            if (!this.values) {
                this.values = {};
            }
            for (var i in urlValues) {
                this.values[i] = urlValues[i];
            }
        }
        
        // Overwrite defaults by inputs values if needed
        if (config.inputsInitialized) {
            this.values = {};
            this.settings.each(function(element) {
                if (element.value) {
                    var attributeId = element.id.replace(/[a-z]*/, '');
                    this.values[attributeId] = element.value;
                }
            }.bind(this));
        }
            
        // Put events to check select reloads 
        this.settings.each(function(element){
            Event.observe(element, 'change', this.configure.bind(this))
        }.bind(this));

        // fill state
        this.settings.each(function(element){
            var attributeId = element.id.replace(/[a-z]*/, '');
            if(attributeId && this.config.attributes[attributeId]) {
                element.config = this.config.attributes[attributeId];
                element.attributeId = attributeId;
                this.state[attributeId] = false;
            }
        }.bind(this))

        // Init settings dropdown
        var childSettings = [];
        for(var i=this.settings.length-1;i>=0;i--){
            var prevSetting = this.settings[i-1] ? this.settings[i-1] : false;
            var nextSetting = this.settings[i+1] ? this.settings[i+1] : false;
            if (i == 0){
                this.fillSelect(this.settings[i])
            } else {
                this.settings[i].disabled = true;
            }
            $(this.settings[i]).childSettings = childSettings.clone();
            $(this.settings[i]).prevSetting   = prevSetting;
            $(this.settings[i]).nextSetting   = nextSetting;
            childSettings.push(this.settings[i]);
        }

        // Set values to inputs
        this.configureForValues();
        document.observe("dom:loaded", this.configureForValues.bind(this));
    },
    
    configureForValues: function () {
        if (this.values) {
            this.settings.each(function(element){
                var attributeId = element.attributeId;
                element.value = (typeof(this.values[attributeId]) == 'undefined')? '' : this.values[attributeId];
                this.configureElement(element);
            }.bind(this));
        }
    },

    configure: function(event){
        var element = Event.element(event);
        this.configureElement(element);
    },

    configureElement : function(element) {
        this.reloadOptionLabels(element);
        if(element.value){
            this.state[element.config.id] = element.value;
            if(element.nextSetting){
                element.nextSetting.disabled = false;
                this.fillSelect(element.nextSetting);
                this.resetChildren(element.nextSetting);
            }
        }
        else {
            this.resetChildren(element);
        }
        this.reloadPrice();
    },

    reloadOptionLabels: function(element){
        var selectedPrice;
        if(element.options[element.selectedIndex].config && !this.config.stablePrices){
            selectedPrice = parseFloat(element.options[element.selectedIndex].config.price)
        }
        else{
            selectedPrice = 0;
        }
        for(var i=0;i<element.options.length;i++){
            if(element.options[i].config){
                element.options[i].text = this.getOptionLabel(element.options[i].config, element.options[i].config.price-selectedPrice);
            }
        }
    },

    resetChildren : function(element){
        if(element.childSettings) {
            for(var i=0;i<element.childSettings.length;i++){
                element.childSettings[i].selectedIndex = 0;
                element.childSettings[i].disabled = true;
                if(element.config){
                    this.state[element.config.id] = false;
                }
            }
        }
    },

    fillSelect: function(element){
        var attributeId = element.id.replace(/[a-z]*/, '');
        var options = this.getAttributeOptions(attributeId);
        this.clearSelect(element);
        element.options[0] = new Option(this.config.chooseText, '');

        var prevConfig = false;
        if(element.prevSetting){
            prevConfig = element.prevSetting.options[element.prevSetting.selectedIndex];
        }

        if(options) {
            var index = 1;
            for(var i=0;i<options.length;i++){
                var allowedProducts = [];
                if(prevConfig) {
                    for(var j=0;j<options[i].products.length;j++){
                        if(prevConfig.config.allowedProducts
                            && prevConfig.config.allowedProducts.indexOf(options[i].products[j])>-1){
                            allowedProducts.push(options[i].products[j]);
                        }
                    }
                } else {
                    allowedProducts = options[i].products.clone();
                }

                if(allowedProducts.size()>0){
                    options[i].allowedProducts = allowedProducts;
                    element.options[index] = new Option(this.getOptionLabel(options[i], options[i].price), options[i].id);
                    if (typeof options[i].price != 'undefined') {
                        element.options[index].setAttribute('price', options[i].price);
                    }
                    element.options[index].config = options[i];
                    index++;
                }
            }
        }
    },

    getOptionLabel: function(option, price){
        var price = parseFloat(price);
        if (this.taxConfig.includeTax) {
            var tax = price / (100 + this.taxConfig.defaultTax) * this.taxConfig.defaultTax;
            var excl = price - tax;
            var incl = excl*(1+(this.taxConfig.currentTax/100));
        } else {
            var tax = price * (this.taxConfig.currentTax / 100);
            var excl = price;
            var incl = excl + tax;
        }

        if (this.taxConfig.showIncludeTax || this.taxConfig.showBothPrices) {
            price = incl;
        } else {
            price = excl;
        }

        var str = option.label;
        if(price){
            if (this.taxConfig.showBothPrices) {
                str+= ' ' + this.formatPrice(excl, true) + ' (' + this.formatPrice(price, true) + ' ' + this.taxConfig.inclTaxTitle + ')';
            } else {
                str+= ' ' + this.formatPrice(price, true);
            }
        }
        return str;
    },

    formatPrice: function(price, showSign){
        var str = '';
        price = parseFloat(price);
        if(showSign){
            if(price<0){
                str+= '-';
                price = -price;
            }
            else{
                str+= '+';
            }
        }

        var roundedPrice = (Math.round(price*100)/100).toString();

        if (this.prices && this.prices[roundedPrice]) {
            str+= this.prices[roundedPrice];
        }
        else {
            str+= this.priceTemplate.evaluate({price:price.toFixed(2)});
        }
        return str;
    },

    clearSelect: function(element){
        for(var i=element.options.length-1;i>=0;i--){
            element.remove(i);
        }
    },

    getAttributeOptions: function(attributeId){
        if(this.config.attributes[attributeId]){
            return this.config.attributes[attributeId].options;
        }
    },

    reloadPrice: function(){
        if (this.config.disablePriceReload) {
            return;
        }
        var price    = 0;
        var oldPrice = 0;
        for(var i=this.settings.length-1;i>=0;i--){
            var selected = this.settings[i].options[this.settings[i].selectedIndex];
            if(selected.config){
                price    += parseFloat(selected.config.price);
                oldPrice += parseFloat(selected.config.oldPrice);
            }
        }

        optionsPrice.changePrice('config', {'price': price, 'oldPrice': oldPrice});
        optionsPrice.reload();

        return price;

        if($('product-price-'+this.config.productId)){
            $('product-price-'+this.config.productId).innerHTML = price;
        }
        this.reloadOldPrice();
    },

    reloadOldPrice: function(){
        if (this.config.disablePriceReload) {
            return;
        }
        if ($('old-price-'+this.config.productId)) {

            var price = parseFloat(this.config.oldPrice);
            for(var i=this.settings.length-1;i>=0;i--){
                var selected = this.settings[i].options[this.settings[i].selectedIndex];
                if(selected.config){
                    price+= parseFloat(selected.config.price);
                }
            }
            if (price < 0)
                price = 0;
            price = this.formatPrice(price);

            if($('old-price-'+this.config.productId)){
                $('old-price-'+this.config.productId).innerHTML = price;
            }

        }
    }
}

/**
 * aheadWorks Co.
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the EULA
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://ecommerce.aheadworks.co/LICENSE-M1.txt
 *
 * @category   AW
 * @package    AW_Ajaxcartpro
 * @copyright  Copyright (c) 2009-2010 aheadWorks Co. (http://www.aheadworks.co)
 * @license    http://ecommerce.aheadworks.co/LICENSE-M1.txt
 */
 

Prototype.Browser.IE6 = Prototype.Browser.IE && parseInt(navigator.userAgent.substring(navigator.userAgent.indexOf("MSIE")+5)) == 6;
Prototype.Browser.IE7 = Prototype.Browser.IE && parseInt(navigator.userAgent.substring(navigator.userAgent.indexOf("MSIE")+5)) == 7;
Prototype.Browser.IE8 = Prototype.Browser.IE && !Prototype.Browser.IE6 && !Prototype.Browser.IE7;

window.ACPTop = 200;

function aw_acp_getproduct(url, attrName) {
    if(typeof(attrName) == 'undefined') attrName = 'product';
    var res = url.match("/"+attrName+"/[0-9]*/");
    if(res && typeof res[0] != 'undefined') {
        res = res[0].substr(attrName.length+2, res[0].lastIndexOf('/')-(attrName.length+2));
        if(!isNaN(res)) return res;
    }
    return -1;
}

function aw_acp_in_array(needle, haystack) {
    if(typeof needle == 'undefined' || typeof haystack == 'undefined')
        return false;
    for(var i = 0; i<haystack.length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}

if(!Prototype.Browser.IE6){
    oldSetLocation = setLocation;
    setLocation = function(url){
        if(window.location.href.match('https://') && !url.match('https://')){
            url = url.replace('http://','https://')
        }
        if(aw_acp_in_array(aw_acp_getproduct(url), AW_ACP.disabledForProducts) || url.search('noacp=1') != -1) {
            return oldSetLocation(url);
        }
        if(AW_ACP.isCartPage && ((url.search('/add') != -1 ) || (url.search('/remove') != -1 )) ){
            ajaxcartsend(url+'awacp/1/is_checkout/1', 'url', '', '');
        }else if (url.search('checkout/cart/add') != -1){
            url = url.replace('checkout/cart','ajaxcartpro/add');
            ajaxcartsend(url+'awacp/1', 'url', '', '');
        }else if (url.search('wishlist/index/cart') != -1) {
            var urlParts = url.split('?');
            var newUrl = '';
            if(aw_acp_in_array(aw_acp_getproduct(url, 'item'), AW_ACP.disabledForWLItems)) {
                newUrl = urlParts[0] + 'awacpskip/1';
                if (urlParts[1]) newUrl += '?' + urlParts[1];
                oldSetLocation(newUrl);
                return;
            }
            newUrl = urlParts[0] + 'awwishl/1/awacp/1';
            if (urlParts[1]) newUrl += '?' + urlParts[1];
            ajaxcartsendwishlist(newUrl, 'url', '', '');
        }else if (url.search('options=cart') != -1){
            ajaxcartsendconfigurable(url);
        }
        else
        {
            window.location.href = url;
        }
    }
}

function addSubmitEvent()
{
    try
    {
        if (typeof productAddToCartFormFromPopup != 'undefined' && !AW_ACP.disabled && !awacpclass.isCartConfigurePage())
        {
            productAddToCartFormFromPopup.submit = function(url){
                if(this.validator && this.validator.validate()){
                    ajaxcartsend('awacp=1', 'form', this, '');
                }
                return false;
            }
            productAddToCartFormFromPopup.form.onsubmit = function() {
                productAddToCartFormFromPopup.submit();
                return false;
            };
        }
        if (typeof productAddToCartFormOld != 'undefined' && !AW_ACP.disabled && !awacpclass.isCartConfigurePage()) {
            productAddToCartFormOld.submit = function(url){
                if(this.validator && this.validator.validate()){
                    ajaxcartsend('awacp=1', 'form', this, '');
                }
                return false;
            }

            productAddToCartFormOld.form.onsubmit = function() {
                productAddToCartFormOld.submit();
                return false;
            };
        }
        else if (typeof productAddToCartForm != 'undefined' && !AW_ACP.disabled && !awacpclass.isCartConfigurePage())
        {
            productAddToCartForm.submit = function(url){
                if(this.validator && this.validator.validate()){
                    ajaxcartsend('awacp=1', 'form', this, '');
                }
                return false;
            }

            productAddToCartForm.form.onsubmit = function() {
                productAddToCartForm.submit();
                return false;
            };
        }
    }
    catch(e){}
}

function addAcpSubmitEvent(removeFromWishlistUrl)
{
    if(typeof(removeFromWishlistUrl) == 'undefined') removeFromWishlistUrl = false;
    if (typeof productAddToCartFormAcp != 'undefined')
    {
        productAddToCartFormAcp.submit = function(url){
            if(this.validator && this.validator.validate()){
                if (AW_ACP.isCartPage) {
                    ajaxcartsend('awacp=1&is_checkout=1', 'form', this, '');
                } else {
                    if(removeFromWishlistUrl) {
                        removeFromWishlistUrl.replace(/^http[s]{0,1}/, window.location.href.replace(/:[^:].*$/i, ''));
                    }
                    ajaxcartsend('awacp=1', 'form', this, removeFromWishlistUrl);
                }
            }
            return false;
        }

        productAddToCartFormAcp.form.onsubmit = function() {
            productAddToCartFormAcp.submit();
            return false;
        };
    }
}

if(!Prototype.Browser.IE6){

    var cnt1 = 20;
    __intId = setInterval(
        /* Hangs event listener for @ADD TO CART@ links*/
        function(){
            cnt1--;
            if(typeof productAddToCartForm != 'undefined'){
                try {
                    // This fix is applied to magento <1.3.1
                    $$('#product_addtocart_form '+aw_addToCartButtonClass).each(function(el){
                        el.setAttribute('type', 'button')
                    })
                }catch(err){

                }
                
                if (AW_ACP.hasFileOption == false) addSubmitEvent();
                
                clearInterval(__intId);
            }
            if(!cnt1) clearInterval(__intId);
        },
        500
        );



    var cnt2 = 20;
    __intId2 = setInterval(
        /* This hangs event listener on @DELETE@ items from cart*/
        function(){    
            cnt2--;
            if(typeof aw_cartDivClass!= 'undefined' && $$(aw_cartDivClass).length || ((typeof AW_ACP !== 'undefined') && AW_ACP.isCartPage)){
                updateDeleteLinks();
                clearInterval(__intId2);
            }
            if(!cnt2) clearInterval(__intId);
        },
        500
        );
}





function setPLocation(url, setFocus) {
    if (url.search('checkout/cart/add') != -1) { //CART ADD
        window.opener.focus();

        var sep = '?';
        if(url.indexOf('?') != -1){
            sep = '&';
        }
        if(typeof window.opener.AW_ACP.isCart === "undefined" ) {
            window.opener.ajaxcartsend(url+sep+'awacp=1', 'url', '');
        }
        else if(window.opener.AW_ACP.isCart == 0) {
            window.opener.ajaxcartsend(url+sep+'awacp=1', 'url', '');
        } else {
            window.opener.ajaxcartsend(url+sep+'awacp=1&is_checkout=1', 'url', '');
        }
    } else if(url.search('options=cart') != -1) {
        window.opener.ajaxcartsendconfigurable(url);
    } else {
        if(setFocus) {
            window.opener.focus();
        }
        window.opener.location.href = url;
    }
}

function ajaxcartsendwishlist(url, type, obj){
    url = getCommonUrl(url);
    if(window.location.href.match('http://') && AW_ACP.secureUrlOnFrontend && AW_ACP.wishlistVersionMatch)
    {
        url=url.replace("https://",'http://');
        url=url.replace('wishlist/index/cart','ajaxcartpro/wishlist/cart');
    }
    showProgressAnimation();
    new Ajax.Request(url, {
        onSuccess: function(resp) {
            try {
                if (typeof(resp.responseText) == 'string') eval('resp = ' + resp.responseText);
            } catch(e) {
                // win.location.href=url;
                hideProgressAnimation();
                return;
            }
            hideProgressAnimation();
            if (resp.r != 'success') {
                if (resp.redirect) {
                    if(resp.redirect.search('options=cart') != -1 || (typeof(resp.is_configurable) != 'undefined' && resp.is_configurable)) {
                        ajaxcartsendconfigurable(
                            resp.redirect.indexOf('?options=cart') ? resp.redirect : resp.redirect+'?options=cart',
                            typeof(resp.conf_remove_url) == 'undefined' ? null : resp.conf_remove_url
                            );
                    } else {
                        win.location.href = resp.redirect;
                    }
                } else {
                    win.location.href=url;
                }
            } else {
                if(AW_ACP.useConfirmation) {
                    showConfirmDialog(resp.product_name);
                }
                __onACPRender();
                updateCartView(resp);
                updateTopLinks(resp);
                updateWishlist(resp);
                updateWishlistTopLinks(resp);
                updateAddLinks();
            }
        }
    });
}

function ajaxcartsend(url, type, obj, removeFromWishlist){

    if(typeof(removeFromWishlist) == 'undefined' || removeFromWishlist == '') removeFromWishlist = false;
    url = getCommonUrl(url)

    showProgressAnimation();
    if (type == 'form') {
        try{
            var aForm = $('product_addtocart_form_acp') ? $('product_addtocart_form_acp') : $('product_addtocart_form');
        } catch(e){}
        if(aForm==null)
        {
            var aForm = $('product_addtocart_form_acp') ? $('product_addtocart_form_acp') : $('product_addtocart_form_from_popup');
            aForm.action=AW_ACP.cartURL+'add/';
        }
        nativeFormAction = aForm.action;
        var sep = '?';
        if(aForm.action.indexOf('?') != -1){
            sep = '&';
        }
        
        var url_temp = aForm.action;

        url_temp=ACPreplaceHttpsToHttp(url_temp);
        url_temp = url_temp.replace('checkout/cart','ajaxcartpro/add');
        aForm.action = url_temp;
	
        aForm.action += sep+url;
        if(removeFromWishlist) {
            new Ajax.Request(removeFromWishlist, {
                onComplete: function() {
                    ajaxcartsend(url, type, obj);
                }
            });
            return;
        }
        aForm.request({
            onCreate: function(){
                aForm.action = nativeFormAction;
            },
            onComplete:  function(resp) {
                if (typeof(resp.responseText) == 'string') {
                    try {
                        eval('resp = ' + resp.responseText);
                    } catch(e) {
                        if (obj.form.submit()){
                            return;
                        } else {
                            aForm.submit();
                            return;
                            if(!AW_ACP.isProductPage)
                                win.location.href = nativeFormAction;
                            return;
                        }
                    }
                }
                hideProgressAnimation();
                if (resp.r != 'success') {
                    if (resp.redirect) {
                        if(resp.redirect.search('options=cart') != -1 || (typeof(resp.is_configurable) != 'undefined' && resp.is_configurable)) {
                            ajaxcartsendconfigurable(resp.redirect.indexOf('?options=cart') ? resp.redirect : resp.redirect+'?options=cart');
                        } else {
                            obj.form.submit();
                        }
                    } else {
                        obj.form.submit();
                    }
                } else {
                    if($('acp_configurable_block')){
                        acp_remove_configurable_block();
                    }
                    __onACPRender();
                    if(AW_ACP.useConfirmation && (url.search('is_checkout/1') != 1)) {
                        /*alert(resp.pop_up_cart_items);*/
                        showPopUpCart(resp);
                        updateDeleteLinks();
                        /*showConfirmDialog(resp.product_name);*/
                    }
                    updateCartView(resp);
                    updateWishlist(resp);
                    updateWishlistTopLinks(resp);
                }
            }
        })

    }
    if (type == 'url') {

        url=ACPreplaceHttpsToHttp(url);
        
        new Ajax.Request(url, {
            onSuccess: function(resp) {
                try {
                    if (typeof(resp.responseText) == 'string') eval('resp = ' + resp.responseText);
                } catch(e) {
                    win.location.href=url;
                    hideProgressAnimation();
                    return;
                }
                hideProgressAnimation();
                if (resp.r != 'success') {
                    if (resp.redirect) {
                        if(resp.redirect.search('options=cart') != -1 || (typeof(resp.is_configurable) != 'undefined' && resp.is_configurable)) {
                            ajaxcartsendconfigurable(resp.redirect.indexOf('?options=cart') ? resp.redirect : resp.redirect+'?options=cart');
                        } else {
                            win.location.href = resp.redirect;
                        }
                    } else {
                        win.location.href=url;
                    }
                } else {
                    if(AW_ACP.useConfirmation && (url.search('is_checkout/1') == -1)) {
                        
                        showConfirmDialog(resp.product_name);
                    }
                    __onACPRender();
                    updateCartView(resp);
                }
            }
        });
    }
}

function showPopUpCart(resp){
    $('popup_cart').innerHTML = resp.pop_up_cart_items;
    /*$('modalContet').style.display = 'block';*/
    getModal('modalContet');
}
function ACPreplaceHttpsToHttp(url){
    
    /*  from http to https */
    if(window.location.href.match('http://') && url.match('https://')){
        url = url.replace('https://','http://')
    }
    return url;    
}


function __onACPRender(){
    if(AW_ACP.onRender && AW_ACP.onRender.length){
        $A(AW_ACP.onRender).each(function(h){
            h(AW_ACP)
        })
    }
}

function addEffectACP(obj, effect)
{
    if (effect == 'opacity'){
        $(obj).hide();
        new Effect.Appear(obj);

    }
    if (effect == 'grow'){
        $(obj).hide();
        new Effect.BlindDown(obj);
    }
    if (effect == 'blink'){
        new Effect.Pulsate(obj);
    }
}


function updateDeleteLinks(){
    var tmpLinks = document.links;
    for (i=0; i<tmpLinks.length; i++){
        if (tmpLinks[i].href.search('checkout/cart/delete') != -1){
            url = tmpLinks[i].href.replace(/\/uenc\/.+,/g, "");
            var del = url.match(/delete\/id\/\d+\//g);
            var id = del[0].match(/\d+/g);
            if (window.location.protocol == 'https:'){
                aw_base_url = aw_base_url.replace("http:", "https:");
            }    
            if(!AW_ACP.isCartPage){
                tmpLinks[i].href = 'javascript:ajaxcartprodelete("' + aw_base_url + 'ajaxcartpro/cart/remove/id/' + id +'")';
            }else{
                tmpLinks[i].href = 'javascript:ajaxcartprodelete("' + aw_base_url + 'ajaxcartpro/cart/remove/id/' + id +'/is_checkout/1")';
            }
        }
    }
}

function updateTopLinks(resp){
    if(!awacpclass.isEE() && $$(aw_topLinkCartClass).length){
        $$(aw_topLinkCartClass)[0].title = $$(aw_topLinkCartClass)[0].innerHTML = resp.links;
    }
}

function updateWishlistTopLinks(resp){
    if($$(aw_topWishlistLinkCartClass).length && typeof(resp.wishlist_links) != 'undefined') {
        $$(aw_topWishlistLinkCartClass)[0].innerHTML = resp.wishlist_links;
        $$(aw_topWishlistLinkCartClass).first().title = resp.wishlist_links;
    }
}

window.updateBigCartView = function (resp){
    updateCartBar(resp);
    $$(aw_bigCartClass)[0].innerHTML = resp.cart
    if($('shopping-cart-table')){
        decorateTable('shopping-cart-table')
    }

    updateDeleteLinks();
    updateTopLinks(resp);
    updateAddLinks();

    awACPExtractScripts(resp.cart);
}

function showProgressAnimation(){
    if($$('.ajaxcartpro_confirm').first()) {
        $$('.ajaxcartpro_confirm').first().hide();
    }
    alignBlock($$('.ajaxcartpro_progress')[0], 0, 0, 'progress');
}

function showConfirmDialog(product_name){
    if (product_name) $('acp_product_name').innerHTML = product_name;
    block = $$('.ajaxcartpro_confirm')[0];
    alignBlock(block, 0, 0, 'confirmation');
    block.style.display = 'block';
    if (typeof($$('.ajaxcartpro_confirm .focus')[0]) != 'undefined') $$('.ajaxcartpro_confirm .focus')[0].focus();

    var ACPcountdown = $('ACPcountdown');
    if(typeof ACPcountdown != 'undefined' && AW_ACP.counterBegin>0)
    {
        ACPcountdown.innerHTML = AW_ACP.counterBegin;
        if (typeof __intId3 != 'undefined') clearInterval(__intId3);
        __intId3 = setInterval(
            function(){
                if ( parseInt(ACPcountdown.innerHTML) ){
                    ACPcountdown.innerHTML = parseInt(ACPcountdown.innerHTML)-1;
                }
                else
                { 
                    clearInterval(__intId3);
                    block.style.display = "none";
                    ACPcountdown.innerHTML = AW_ACP.counterBegin;
                }

            },
            1000
            );
    }
}

function hideProgressAnimation(){

    $$('.ajaxcartpro_progress')[0].style.display = 'none';
}

if(!Prototype.Browser.IE6){
    document.observe("dom:loaded", function() {
        updateAddLinks()
        
        // Some other onclicks
        if($('aw_acp_continue')) {
            $('aw_acp_continue').onclick = function(e){
                e = e||event;
                if(e.preventDefault)
                    e.preventDefault()
                $$('.ajaxcartpro_confirm')[0].style.display='none';
                return false;
            }
        }
        if($('aw_acp_checkout')) {
            $('aw_acp_checkout').onclick = function(e){
                $$('.ajaxcartpro_confirm')[0].style.display='none';
                return true;
            }
        }
        
        // Test for minicart
        
        if((typeof aw_cartDivClass != 'undefined') && ($$(aw_cartDivClass).length || ((typeof AW_ACP !== 'undefined') && AW_ACP.isCartPage))){
            updateDeleteLinks();
        }
        
    })
}

function updateAddLinks(){
    var ats = document.links;
    for (i=ats.length-1; i>=0; i--) {
        if (ats[i].href.search('checkout/cart/add') != -1) {
            ats[i].onclick = function(link) {
                return function(){
                    setLocation(link)
                }
            }(ats[i].href);
            ats[i].href="javascript:void(0)";
            continue;
        }
        if (ats[i].href.search('wishlist/index/cart') != -1) {
            ats[i].onclick = function(link) {
                return function() {
                    setLocation(link)
                }
            }(ats[i].href);
            ats[i].href="javascript:void(0)";
            continue;
        }
        if(ats[i].href.search('paypaluk/express/start') != -1 || ats[i].href.search('paypal/express/start') != -1) {
            $$('#product_addtocart_form a').each(function(el) {
                if(el == ats[i]) {
                    ats[i].stopObserving('click');
                    ats[i].observe('click', function(event) {
                        $('pp_checkout_url').value = this.href;
                        productAddToCartForm.form.submit();
                        event.stop(); 
                    });
                }
            });
        }
    }
}

function getCommonUrl(url){
    if(window.location.href.match('www.') && url.match('http://') && !url.match('www.')){
        url = url.replace('http://', 'http://www.');
    }else if(!window.location.href.match('www.') && url.match('http://') && url.match('www.')){
        url = url.replace('www.', '');
    }
    return url;
}

var productAddToCartFormAcp;
function ajaxcartsendconfigurable(url, removeFromWishlistUrl) {
    if(typeof(removeFromWishlistUrl) == 'undefined') removeFromWishlistUrl = false;
    showProgressAnimation();
    urlToSend = url + '&ajaxcartpro=1';
    new Ajax.Request(urlToSend, {
        onSuccess: function(resp) {
            if (resp.responseText == 'false') {
                window.location = url;
            } else {
                var _div = new Element('div');
                var scripts = resp.responseText.extractScripts();
                _div.innerHTML = resp.responseText.stripScripts();
                $$('body').first().insert({
                    bottom: _div
                });
                _div.hide();
                
                /*tmpDiv = win.document.createElement('div');
                tmpDiv.innerHTML = resp.responseText.stripScripts();
                win.document.body.appendChild(tmpDiv);
                tmpDiv.hide();*/
                
                hideProgressAnimation();

                productAddToCartFormAcp = new VarienForm('product_addtocart_form_acp');
                decorateGeneric($$('#product-options-wrapper dl'), ['last']);
                addAcpSubmitEvent(removeFromWishlistUrl);
                
                Event.observe($$('#aw_acp_continue').last(), 'click', function() {
                    
                    acp_remove_configurable_block();
                    
                    awacpclass.hideMagentoMAPPopup();
                    return false;
                });

                for (var i=0; i<scripts.length; i++)
                {
                    if (typeof(scripts[i]) != 'undefined')
                    {
                        eval(scripts[i]);
                    }
                }
                if(typeof(optionsPrice) != 'undefined' && aw_acp_in_array(optionsPrice.productId, AW_ACP.disabledForProducts))
                    window.location = url;
                else {
                    _div.show();
                    showOptionsDialog();
                }
            }
        }
    });
}

function acp_remove_configurable_block(){
    try {
        $('product_addtocart_form_acp').reset();
    }
    catch(e){
         
    }
    if(typeof(opConfig) !== 'undefined' && opConfig != null) {
        opConfig.reloadPrice();
    }
    if(typeof(dConfigAcp) !== 'undefined' && dConfigAcp != null) {
        dConfigAcp.reloadPrice()
    }
    optionsPrice.changePrice('configAcp', 0);
    optionsPrice.reload();
    
    $$("#acp_configurable_block").each(function(item){
        item.remove();
    });
}

function showOptionsDialog()
{
    if($$('.ajaxcartpro_confirm').first())
        $$('.ajaxcartpro_confirm').first().hide();
    alignBlock($('acp_product_options'), 0, $('acp_product_options').offsetHeight, 'custom_options');
}

function alignBlock(block, width, height, blockType) {
    if (blockType == 'confirmation' && !AW_ACP.useConfirmation)
        return false;

    if (blockType == 'progress' && !AW_ACP.useProgress)
        return false;

    block.style.display = 'block';
    (width > 0)?(block.style.width = width + 'px'):(width = block.getWidth());
    (height > 0)?(block.style.height = height + 'px'):(height = block.getHeight());
    block.style.left = document.viewport.getWidth()/2 - width/2 + 'px';

    if (Prototype.Browser.IE && Prototype.Browser.IE6) {
        block.style.position = 'absolute';
        window.ACPTop = 200;
    }
    if (aw_ajaxcartpro_proganim == 'center') {
        if (!(Prototype.Browser.IE && Prototype.Browser.IE6)) {
            block.style.top = (document.viewport.getHeight()/2 - height/2) + 'px';
        } else {
            window.ACPTop = 200;
        }
    }
    if (aw_ajaxcartpro_proganim == 'top') {
        if (!(Prototype.Browser.IE && Prototype.Browser.IE6)) {
            block.style.top = '0px';
        } else {
            // IE7-
            window.ACPTop = 0;
        }
    }
    if (aw_ajaxcartpro_proganim == 'bottom') {
        block.style.bottom = '0px';
    }
}

function validateDownloadableCallback(elmId, result)
{
    var container = $('downloadable-links-list');
    if (result == 'failed') {
        container.removeClassName('validation-passed');
        container.addClassName('validation-failed');
    } else {
        container.removeClassName('validation-failed');
        container.addClassName('validation-passed');
    }
}

function validateOptionsCallback(elmId, result)
{
    var container = $(elmId).up('ul.options-list');
    if (result == 'failed') {
        container.removeClassName('validation-passed');
        container.addClassName('validation-failed');
    } else {
        container.removeClassName('validation-failed');
        container.addClassName('validation-passed');
    }
}

function acpSubmit()
{
    if(productAddToCartFormAcp.validator&&productAddToCartFormAcp.validator.validate())
    {
        awacpclass.hideMagentoMAPPopup();
        productAddToCartFormAcp.submit();
    }
}

function updateCustomBlock(selector, content) {
    var block = $$(selector).first();
    if(block) {
        block.replace(content);
        return true;
    }
    return false;
}

function updateCustomBlocks(custom) {
    for(var key in custom) {
        if(typeof custom[key].selector != 'undefined' && typeof custom[key].content != 'undefined')
            updateCustomBlock(custom[key].selector, custom[key].content);
    }
}

function awACPExtractScripts(strings) {
    var scripts = strings.extractScripts();
    scripts.each(function(script){
        try {
            eval(script.replace(/var /gi, ""));
        }
        catch(e){
            if(window.console) console.log(e.name);
        }
    });
}

AWACPClass = Class.create({
    initialize: function(className) {
        this._isEE = false;
        this.global = window;
        this.global[className] = this;
    },
    
    setIsEE: function(value) {
        this._isEE = typeof(value) != 'undefined' && value ? true : false;
    },
    
    isEE: function(value) {
        return this._isEE;
    },
    
    isCartConfigurePage: function() {
        return AW_ACP._isCartConfigurePage ? true : false;
    },
    
    hideMagentoMAPPopup: function() {
        if($('map-popup-close') && $('map-popup') && $('map-popup').visible()) {
            $('map-popup-close').click();
        }
    }
});
new AWACPClass('awacpclass');



function getModal(div)
{ 
    window.onscroll = function () { 
        document.getElementById(div).style.top = document.body.scrollTop;
    };
    jQuery('#'+div).fadeIn('slow');
    document.getElementById(div).style.top = document.body.scrollTop;
     
}
function closeModal(div)
{
    jQuery('#'+div).fadeOut('slow');
}


var ajxCartUpdate = Class.create({
    initialize:function(actionUrl){        
        this.actionUrl = actionUrl;
    },
    save: function(formId){
        var cart = new Ajax.Request(this.actionUrl, {
             method: 'post',             
             onLoading: this.showLoading(),
             parameters: Form.serialize(formId),
             onSuccess: function(ajaxResponse){               
                var resp = eval('('+ ajaxResponse.responseText +')');
               
                if(resp)
                {
                    /*alert(resp.pop_up_cart_items);*/
                    if(resp.error!=undefined)
                    {
                        /*alert('Cannot update shopping cart.');*/
                        alert(resp.error);
                    }
                    else
                    {
                        showPopUpCart(resp);
                        updateDeleteLinks();
                        /*showConfirmDialog(resp.product_name);*/
                        updateCartView(resp);
                        updateWishlist(resp);
                        updateWishlistTopLinks(resp);
                    }
                    
                }
                else
                {
                    alert('Unknown Error Occured');
                }
                this.resetLoadWaiting();
                
             }.bind(this),
             onFailure: function(){                 
                  hideProgressAnimation();
             }
        });
    },
    showLoading: function(){
        showProgressAnimation();
    },
    resetLoadWaiting: function() {
        hideProgressAnimation();
    }
});




/**
 * aheadWorks Co.
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the EULA
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://ecommerce.aheadworks.co/LICENSE-M1.txt
 *
 * @category   AW
 * @package    AW_Ajaxcartpro
 * @copyright  Copyright (c) 2009-2010 aheadWorks Co. (http://www.aheadworks.co)
 * @license    http://ecommerce.aheadworks.co/LICENSE-M1.txt
 */
 
window.intPrevious = setInterval(function() {
    if(typeof AW_ACP != 'undefined' && document.body) {
        if(typeof aw_cartDivClass == 'undefined') {
            if (AW_ACP.theme == 'blank') aw_cartDivClass = '.topCartContent';
            else aw_cartDivClass = '.top-cart';

            if(!$$(aw_cartDivClass).length || !$$(aw_cartDivClass)[0].tagName) {
                aw_cartDivClass =  '.block-cart'
            }
        }
        if(typeof aw_topLinkCartClass == 'undefined') {
            aw_topLinkCartClass = '#cartHeader';
        }
        if(typeof aw_addToCartButtonClass == 'undefined') {
            aw_addToCartButtonClass = '.form-button';
        }
        if(typeof aw_bigCartClass == 'undefined') {
            aw_bigCartClass = 
            AW_ACP.theme == 'modern' ?
            '.layout-1column':
            '.col-main';
        }
        if(typeof aw_wishlistClass == 'undefined') {
            aw_wishlistClass = '.my-account';
        }
        if(typeof(aw_wishlistSidebarClass) == 'undefined') {
            aw_wishlistSidebarClass = '.block-wishlist';
        }

        if(typeof aw_topWishlistLinkCartClass == 'undefined') {
            if (typeof($$('.top-link-wishlist a')[0]) != 'undefined')
                aw_topWishlistLinkCartClass = '.top-link-wishlist a';
            else
                aw_topWishlistLinkCartClass = '.top-link-wishlist';
        }

        if (window.location.toString().search('/product_compare/') != -1) {
            win = window.opener;
        } else {
            win = window;
        }
        clearInterval(intPrevious)
    }
}, 500);
 
function ajaxcartprodelete(url) {
    showProgressAnimation();
    url = getCommonUrl(url)
    if(typeof aw_acp_retries == 'undefined') aw_acp_retries = 0;

    new Ajax.Request(url, {
        onSuccess: function(resp){
            
            try {
                if (typeof(resp.responseText) == 'string') eval('resp = ' + resp.responseText);
            } catch(e) {
            }
            if(resp && resp.error && resp.error == 'quote error' && aw_acp_retries == 0) {
                aw_acp_retries = 1;
                return ajaxcartprodelete(url);
            }
            aw_acp_retries = 0;
            
            __onACPRender();
            updateCartView(resp, '');
            hideProgressAnimation();
            
            
            if(resp.cart_count==0){
                /*alert(resp.pop_up_cart_items);
                showPopUpCart(resp);
                closeModal('modalContet');*/
                $('popup_cart').innerHTML = '';
                closeModal('modalContet');
            }
            if(resp.cart_count!=0){
                showPopUpCart(resp);
            }
            updateDeleteLinks();
            
        }
    });
}

function updateCartView(resp)
{
    if (AW_ACP.isCartPage) return updateBigCartView(resp);

    var __cartObj = $$(aw_cartDivClass)[0];
	
    if(__cartObj)
    {
        if (typeof(__cartObj.length) == 'number') __cartObj = __cartObj[0];
        var oldHeight = __cartObj.offsetHeight;

        var tmpDiv = win.document.createElement('div');
        tmpDiv.innerHTML = resp.cart;

        $(tmpDiv).cleanWhitespace();
        __cartObj.replace(tmpDiv.firstChild);

        var __cartObj = $$(aw_cartDivClass)[0];

        var newHeight = __cartObj.offsetHeight;

        addEffectACP(__cartObj, aw_ajaxcartpro_cartanim);
        truncateOptions();
        awACPExtractScripts(resp.cart);
    }

    updateDeleteLinks();
    if(typeof(resp.custom) != 'undefined') updateCustomBlocks(resp.custom);
}

function updateCartBar(resp){
    var __cartObj = $$(aw_cartDivClass)[0];

    if(__cartObj)
    {
        if (typeof(__cartObj.length) == 'number') __cartObj = __cartObj[0];
        var oldHeight = __cartObj.offsetHeight;

        var tmpDiv = win.document.createElement('div');
        tmpDiv.innerHTML = resp.cartbar;

        $(tmpDiv).cleanWhitespace();
        __cartObj.replace(tmpDiv.firstChild);

        var __cartObj = $$(aw_cartDivClass)[0];

        var newHeight = __cartObj.offsetHeight;

        addEffectACP(__cartObj, aw_ajaxcartpro_cartanim);
        truncateOptions();
        awACPExtractScripts(resp.cartbar);
    }

    updateDeleteLinks();
    if(typeof(resp.custom) != 'undefined') updateCustomBlocks(resp.custom);
}

function updateWishlist(resp) {
    if(typeof(resp.wishlist) == 'undefined') return;
    var wishlistObj = $$(aw_wishlistClass)[0];
    if(wishlistObj) {
        var tmpDiv = win.document.createElement('div');
        tmpDiv.innerHTML = resp.wishlist;
        var tmpParent = wishlistObj.parentNode;
        wishlistObj.innerHTML = tmpDiv.innerHTML;
    }
    var wishlistSidebar = $$(aw_wishlistSidebarClass).first();
    if(wishlistSidebar) {
        wishlistSidebar.replace(resp.wishlist_sidebar);
        updateAddLinks();
    }
}

awacpclass.setIsEE(true);




/**
 * aheadWorks Co.
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the EULA
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://ecommerce.aheadworks.co/LICENSE-M1.txt
 *
 * @category   AW
 * @package    AW_Ajaxcartpro
 * @copyright  Copyright (c) 2009-2010 aheadWorks Co. (http://www.aheadworks.co)
 * @license    http://ecommerce.aheadworks.co/LICENSE-M1.txt
 */
 
Product.ACPconfigurable = Class.create();
Product.ACPconfigurable.prototype = {
    config : {},
    initialize : function(config){
        this.config     = config;
        this.taxConfig  = this.config.taxConfig;
        this.settings   = $$('.super-attribute-select-acp');
        this.state      = new Hash();
        this.priceTemplate = new Template(this.config.template);
        this.prices     = config.prices;

        this.settings.each(function(element){
            Event.observe(element, 'change', this.configure.bind(this))
        }.bind(this));

        // fill state
        this.settings.each(function(element){
            var attributeId = element.id.replace(/[a-z]*/, '');
            if(attributeId && this.config.attributes[attributeId]) {
                element.config = this.config.attributes[attributeId];
                element.attributeId = attributeId;
                this.state[attributeId] = false;
            }
        }.bind(this))

        // Init settings dropdown
        var childSettings = [];
        for(var i=this.settings.length-1;i>=0;i--){
            var prevSetting = this.settings[i-1] ? this.settings[i-1] : false;
            var nextSetting = this.settings[i+1] ? this.settings[i+1] : false;
            if(i==0){
                this.fillSelect(this.settings[i])
            }
            else {
                this.settings[i].disabled=true;
            }
            $(this.settings[i]).childSettings = childSettings.clone();
            $(this.settings[i]).prevSetting   = prevSetting;
            $(this.settings[i]).nextSetting   = nextSetting;
            childSettings.push(this.settings[i]);
        }

        // try retireve options from url
        var separatorIndex = window.location.href.indexOf('#');
        if (separatorIndex!=-1) {
            var paramsStr = window.location.href.substr(separatorIndex+1);
            this.values = paramsStr.toQueryParams();
            this.settings.each(function(element){
                var attributeId = element.attributeId;
                element.value = (typeof(this.values[attributeId]) == 'undefined')? '' : this.values[attributeId];
                this.configureElement(element);
            }.bind(this));
        }
    },
    fillSelect: function(element){
        var attributeId = element.id.replace(/[a-z]*/, '');
        var options = this.getAttributeOptions(attributeId);
        this.clearSelect(element);
        element.options[0] = new Option(this.config.chooseText, '');

        var prevConfig = false;
        if(element.prevSetting){
            prevConfig = element.prevSetting.options[element.prevSetting.selectedIndex];
        }

        if(options) {
            var index = 1;
            for(var i=0;i<options.length;i++){
                var allowedProducts = [];
                if(prevConfig) {
                    for(var j=0;j<options[i].products.length;j++){
                        if(prevConfig.config.allowedProducts
                            && prevConfig.config.allowedProducts.indexOf(options[i].products[j])>-1){
                            allowedProducts.push(options[i].products[j]);
                        }
                    }
                } else {
                    allowedProducts = options[i].products.clone();
                }

                if(allowedProducts.size()>0){
                    options[i].allowedProducts = allowedProducts;
                    element.options[index] = new Option(this.getOptionLabel(options[i], options[i].price), options[i].id);
                    element.options[index].config = options[i];
                    index++;
                }
            }
        }
    },
    configure: function(event){
        var element = Event.element(event);
        this.configureElement(element);
    },
    configureElement : function(element) {
        this.reloadOptionLabels(element);
        if(element.value){
            this.state[element.config.id] = element.value;
            if(element.nextSetting){
                element.nextSetting.disabled = false;
                this.fillSelect(element.nextSetting);
                this.resetChildren(element.nextSetting);
            }
        }
        else {
            this.resetChildren(element);
        }
        this.reloadPrice();
    //      Calculator.updatePrice();
    },
    getAttributeOptions: function(attributeId){
        if(this.config.attributes[attributeId]){
            return this.config.attributes[attributeId].options;
        }
    },
    clearSelect: function(element){
        for(var i=element.options.length-1;i>=0;i--){
            element.remove(i);
        }
    },
    getOptionLabel: function(option, price){
        var price = parseFloat(price);
        if (this.taxConfig.includeTax) {
            var tax = price / (100 + this.taxConfig.defaultTax) * this.taxConfig.defaultTax;
            var excl = price - tax;
            var incl = excl*(1+(this.taxConfig.currentTax/100));
        } else {
            var tax = price * (this.taxConfig.currentTax / 100);
            var excl = price;
            var incl = excl + tax;
        }

        if (this.taxConfig.showIncludeTax || this.taxConfig.showBothPrices) {
            price = incl;
        } else {
            price = excl;
        }

        var str = option.label;
        if(price){
            if (this.taxConfig.showBothPrices) {
                str+= ' ' + this.formatPrice(excl, true) + ' (' + this.formatPrice(price, true) + ' ' + this.taxConfig.inclTaxTitle + ')';
            } else {
                str+= ' ' + this.formatPrice(price, true);
            }
        }
        return str;
    },
    formatPrice: function(price, showSign){
        var str = '';
        price = parseFloat(price);
        if(showSign){
            if(price<0){
                str+= '-';
                price = -price;
            }
            else{
                str+= '+';
            }
        }

        var roundedPrice = (Math.round(price*100)/100).toString();

        if (this.prices && this.prices[roundedPrice]) {
            str+= this.prices[roundedPrice];
        }
        else {
            str+= this.priceTemplate.evaluate({
                price:price.toFixed(2)
            });
        }
        return str;
    },
    reloadPrice : function(){
        var price = 0;
        for(var i=this.settings.length-1;i>=0;i--){
            var selected = this.settings[i].options[this.settings[i].selectedIndex];
            if(selected.config){
                price += parseFloat(selected.config.price);
            }
        }

        optionsPrice.changePrice('configAcp', price);
        optionsPrice.reload();

        return price;
    },
    reloadOptionLabels: function(element){
        var selectedPrice;
        if(element.options[element.selectedIndex].config){
            selectedPrice = parseFloat(element.options[element.selectedIndex].config.price)
        }
        else{
            selectedPrice = 0;
        }
        for(var i=0;i<element.options.length;i++){
            if(element.options[i].config){
                element.options[i].text = this.getOptionLabel(element.options[i].config, element.options[i].config.price-selectedPrice);
            }
        }
    },

    resetChildren : function(element){
        if(element.childSettings) {
            for(var i=0;i<element.childSettings.length;i++){
                element.childSettings[i].selectedIndex = 0;
                element.childSettings[i].disabled = true;
                if(element.config){
                    this.state[element.config.id] = false;
                }
            }
        }
    },
    reloadOldPrice: function(){
        if ($('old-price-'+this.config.productId)) {

            var price = parseFloat(this.config.oldPrice);
            for(var i=this.settings.length-1;i>=0;i--){
                var selected = this.settings[i].options[this.settings[i].selectedIndex];
                if(selected.config){
                    price+= parseFloat(selected.config.price);
                }
            }
            if (price < 0)
                price = 0;
            price = this.formatPrice(price);

            if($('old-price-'+this.config.productId)){
                $('old-price-'+this.config.productId).innerHTML = price;
            }

        }
    }
};

Product.DownloadableAcp = Class.create();
Product.DownloadableAcp.prototype = {
    config : {},
    initialize : function(config){
        this.config = config;
        this.reloadPrice();
    },
    reloadPrice : function(){
        var price = 0;
        var configNew = this.config;
        $$('.product-downloadable-link-acp').each(function(elm){
            if (configNew[elm.value] && elm.checked) {
                price += parseFloat(configNew[elm.value]);
            }
        });
        try {
            var _displayZeroPrice = optionsPrice.displayZeroPrice;
            optionsPrice.displayZeroPrice = false;
            optionsPrice.changePrice('downloadableAcp', price);
            optionsPrice.reload();
            optionsPrice.displayZeroPrice = _displayZeroPrice;
        } catch (e) {

        }
    }
};

function validateDownloadableCallback(elmId, result) {
    var container = $('downloadable-links-list');
    if (result == 'failed') {
        container.removeClassName('validation-passed');
        container.addClassName('validation-failed');
    } else {
        container.removeClassName('validation-failed');
        container.addClassName('validation-passed');
    }
}

/*
 * aheadWorks Co.
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the EULA
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://ecommerce.aheadworks.com/LICENSE-M1.txt
 *
 * @category   AW
 * @package    AW_Ajaxcatalog
 * @copyright  Copyright (c) 2011 aheadWorks Co. (http://www.aheadworks.com)
 * @license    http://ecommerce.aheadworks.com/LICENSE-M1.txt
*/

var AWAjaxCatalog;
var __bind = function(fn, me){
    return function(){
        return fn.apply(me, arguments);
    };
};
AWAjaxCatalog = Class.create();
AWAjaxCatalog.prototype = {
    /*
      Class construcructor
      */
    initialize: function(params) {
        for (var key in params) {
            this[key] = params[key];
        }
        if (this.action_type === "button") {
            document.observe("dom:loaded", __bind(function(event) {
                /*
                        Button click observe
                        */        if ($(this.button_id)) {
                    $(this.button_id).observe("click", __bind(function(event) {
                        this.loadNext();
                    }, this));
                }
            }, this));
        } else {
            this.disabled_forever = false;
            this.start_lock = true;
            document.observe("dom:loaded", __bind(function(event) {
                if (this.needLoadNextBefore()) {
                    this.loadNext();
                }
            }, this));
            Event.observe(window, "scroll", __bind(function(event) {
                /*
                        User scroll document
                        */        if (this.needLoadNextAfter()) {
                    this.loadNext();
                }
                this.start_lock = false;
            }, this));
        }
        return this;
    },
    /*
      Need to load next page after scroll
      */
    needLoadNextAfter: function() {
        var docHeight, height, top;
        if (document.viewport) {
            top = document.viewport.getScrollOffsets().top;
            height = document.viewport.getHeight();
            docHeight = Math.max(Math.max(document.body.scrollHeight, document.documentElement.scrollHeight), Math.max(document.body.offsetHeight, document.documentElement.offsetHeight), Math.max(document.body.clientHeight, document.documentElement.clientHeight));
            return ((docHeight - top) <= (3 * height)) && !this.start_lock && !this.disabled_forever;
        }
        return false;
    },
    needLoadNextBefore: function() {
        var result;
        result = false;
        if (document.viewport) {
            $$('div.main').each(__bind(function(el) {
                var elementHeight, screenHeight;
                screenHeight = document.viewport.getHeight();
                elementHeight = el.getHeight();
                if (screenHeight > elementHeight) {
                    return result = true;
                }
            }, this));
        }
        return result;
    },
    /*
      Load next products
      */
    loadNext: function() {
        var params;
        if (this.isLoading()) {
            return;
        }
        this.showLoader(true);
        this.params['p'] = this.next_page;
        params = Base64.encode(Object.toJSON($H(this.params)));
        new Ajax.Request(this.next_url.replace("{{page}}", params).replace(/^http[s]{0,1}/, window.location.href.replace(/:[^:].*$/i, '')), {
            method: "get",
            onSuccess: __bind(function(transport) {
                var content, error, next_page, response, success;
                try {
                    response = eval('(' + transport.responseText + ')');
                } catch (exception) {
                    response = {};
                }
                success = response.success, content = response.content, next_page = response.next_page, error = response.error;
                if (error) {
                    if (typeof console.log === "function") {
                        console.log(error);
                    }
                }
                if (success) {
					var currentPageId = this.next_page; // Category Slider
					if (next_page > 0) {
                        this.next_page = next_page;
                    } else {
                        this.next_page = 0;
                        this.showButton(false);
                    }
                    if (content) {
                        this.appendContent(this.evalInnerScripts(content));
                        this.useDecorator();
						// Category Image Slider
						bgdmFlexSlider('#products-grid'+currentPageId+' .catagory-slider');
                    }
                }
            }, this),
            onComplete: __bind(function(transport) {
                this.showLoader(false);
                if (this.needLoadNextBefore() && (this.next_page > 0)) {
                    this.loadNext();
                }
            }, this)
        });
        return this;
    },
    /*
      Append new content
      */
    appendContent: function(content) {
        if ($(this.container_id)) {
            $(this.container_id).innerHTML += content;
        }
    },
    /*
      Show button
      */
    showButton: function(show) {
        if (this.action_type === "button") {
            if (show) {
                this.getButtonContainer().removeClassName("hidden");
            } else {
                this.getButtonContainer().addClassName("hidden");
            }
        } else {
            this.disabled_forever = true;
        }
    },
    /*
      Show loader
      */
    showLoader: function(show) {
        if (this.action_type === "button") {
            if (show) {
                this.getButton().addClassName("loading");
            } else {
                this.getButton().removeClassName("loading");
            }
        } else {
            if (show) {
                this.getLoader().addClassName("loading");
            } else {
                this.getLoader().removeClassName("loading");
            }
        }
    },
    /*
      Button
      */
    getButton: function() {
        if ($(this.button_id)) {
            return $(this.button_id);
        }
    },
    /*
      Loader
      */
    getLoader: function() {
        if ($(this.loader_id)) {
            return $(this.loader_id);
        }
    },
    /*
      Button with container
      */
    getButtonContainer: function() {
        if ($(this.button_container_id)) {
            return $(this.button_container_id);
        }
    },
    /*
      Is loading now
      */
    isLoading: function() {
        if (this.action_type === "button") {
            return this.getButton().hasClassName("loading");
        } else {
            return this.getLoader().hasClassName("loading");
        }
    },
    /*
      Eval Inner Scripts
      (required after ajax load content)
      */
    evalInnerScripts: function(content) {
        content.evalScripts();
        return content;
    },
    /*
      Use List Decorator to redecorate list
      */
    useDecorator: function() {
        var selection, _i, _len, _ref;
        $$(this.decorate_clean).each(__bind(function(element) {
            element.removeClassName("even");
            element.removeClassName("odd");
            element.removeClassName("last");
            element.removeClassName("first");
        }, this));
        _ref = this.decorate_decorate;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            selection = _ref[_i];
            decorateGeneric($$(selection), ['odd', 'even', 'first', 'last']);
        }
        return this;
    }
};
/**
 * aheadWorks Co.
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the EULA
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://ecommerce.aheadworks.com/LICENSE-M1.txt
 *
 * @category   AW
 * @package    AW_Ajaxcatalog
 * @copyright  Copyright (c) 2011 aheadWorks Co. (http://www.aheadworks.com)
 * @license    http://ecommerce.aheadworks.com/LICENSE-M1.txt
*/



var Base64 = {
 
	// private property
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
 
	// public method for encoding
	encode : function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;
 
		input = Base64._utf8_encode(input);
 
		while (i < input.length) {
 
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);
 
			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;
 
			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}
 
			output = output +
			this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
			this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
 
		}
 
		return output;
	},
 
	// public method for decoding
	decode : function (input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
 
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
 
		while (i < input.length) {
 
			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));
 
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
 
			output = output + String.fromCharCode(chr1);
 
			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}
 
		}
 
		output = Base64._utf8_decode(output);
 
		return output;
 
	},
 
	// private method for UTF-8 encoding
	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";
 
		for (var n = 0; n < string.length; n++) {
 
			var c = string.charCodeAt(n);
 
			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
 
		}
 
		return utftext;
	},
 
	// private method for UTF-8 decoding
	_utf8_decode : function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;
 
		while ( i < utftext.length ) {
 
			c = utftext.charCodeAt(i);
 
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
 
		}
 
		return string;
	}
 
}
AwOnSale = Class.create();
AwOnSale.prototype = {
    initialize: function(){
        this.helements = new Array();
        this.velements = new Array();
        document.observe("dom:loaded", onPageLoad);
        Event.observe(window, 'load',onPageLoad);
    },
    setVertPos: function(element, position){
        var eH = element.offsetHeight;
        var pH = element.parentNode.offsetHeight;
        var eT = 0;

        if (eH != pH){
            switch (position){
                case 'top':
                    eT = 0;
                    break;
                case 'middle':
                    eT = (pH - eH)/2;
                    break;
                case 'bottom':
                    eT = pH - eH;
                    break;
                default:
                    eT = 0;
            }
        } else if (eH == pH) {
            eT = 0;
        }
        element.style.bottom = null;
        element.style.top = eT + 'px';

    },
    setHorPos: function(element, position){
        var eW = element.offsetWidth;
        var pW = element.parentNode.offsetWidth;
        var eL = 0;

        if (eW != pW){
            switch (position){
                case 'left':
                    eL = 0;
                    break;
                case 'center':
                    eL = (pW - eW)/2;
                    break;
                case 'right':
                    eL = pW - eW;
                    break;
                default:
                    eL = 0;
            }
        } else if (eW == pW) {
            eL = 0;
        }
        element.style.right = null;
        element.style.left = eL + 'px';

    },
    registerVertPosition: function(element, position) {
        element.vposition = position;
        this.velements.push(element);
    },
    registerHorPosition: function(element, position) {
        element.hposition = position;
        this.helements.push(element);
    }
}

var onPageLoad = function(){
    /* Set hor. position to labels */
    if (onsale.helements.length > 0){
        for (var i = 0; i < onsale.helements.length; i++){
            onsale.setHorPos(onsale.helements[i], onsale.helements[i].hposition);
        }
    }
    /* Set vert. position to labels */
    if (onsale.velements.length > 0){
        for (var j = 0; j < onsale.velements.length; j++){
            onsale.setVertPos(onsale.velements[j], onsale.velements[j].vposition);
        }
    }
}

function onsaleinit(id,hpos,vpos) {
    try{
    lcontainer = $('category-container-'+id);
    llabel = $('category-onsale-label-'+id);
    onsale.registerHorPosition(lcontainer, hpos);
    onsale.registerVertPosition(lcontainer, vpos);
    onsale.registerHorPosition(llabel, 'center');
    onsale.registerVertPosition(llabel, 'middle');
    onsale.setHorPos(lcontainer, lcontainer.hposition);
    onsale.setVertPos(lcontainer, lcontainer.vposition);
    onsale.setHorPos(llabel, llabel.hposition);
    onsale.setVertPos(llabel, llabel.vposition);
    }catch(e){}
}

if(typeof onsale=='undefined') {
    var onsale = new AwOnSale();
}
/**
 * aheadWorks Co.
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the EULA
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://ecommerce.aheadworks.com/LICENSE-M1.txt
 *
 * @category   AW
 * @package    AW_Referafriend
 * @copyright  Copyright (c) 2003-2010 aheadWorks Co. (http://www.aheadworks.com)
 * @license    http://ecommerce.aheadworks.com/LICENSE-M1.txt
 */

var rafDetect = navigator.userAgent.toLowerCase();
var rafOS,rafBrowser,rafVersion,rafTotal,rafThestring;

function rafGetBrowserInfo() {
	if (rafCheckIt('konqueror')) {
		rafBrowser = "Konqueror";
		rafOS = "Linux";
	}
	else if (rafCheckIt('safari')) rafBrowser 	= "Safari"
	else if (rafCheckIt('omniweb')) rafBrowser 	= "OmniWeb"
	else if (rafCheckIt('opera')) rafBrowser 	= "Opera"
	else if (rafCheckIt('webtv')) rafBrowser 	= "WebTV";
	else if (rafCheckIt('icab')) rafBrowser 	= "iCab"
	else if (rafCheckIt('msie')) rafBrowser 	= "Internet Explorer"
	else if (!rafCheckIt('compatible')) {
		rafBrowser = "Netscape Navigator"
		rafVersion = rafDetect.charAt(8);
	}
	else rafBrowser = "An unknown browser";

	if (!rafVersion) rafVersion = rafDetect.charAt(place + rafThestring.length);

	if (!rafOS) {
		if (rafCheckIt('linux')) rafOS 		= "Linux";
		else if (rafCheckIt('x11')) rafOS 	= "Unix";
		else if (rafCheckIt('mac')) rafOS 	= "Mac"
		else if (rafCheckIt('win')) rafOS 	= "Windows"
		else rafOS 							= "an unknown operating system";
	}
}

function rafCheckIt(string) {
	place = rafDetect.indexOf(string) + 1;
	rafThestring = string;
	return place;
}

/*-----------------------------------------------------------------------------------------------*/

//Event.observe(window, 'load', rafInitialize, false);
Event.observe(window, 'load', rafGetBrowserInfo, false);
//Event.observe(window, 'unload', Event.unloadCache, false);

var Referafriend = Class.create();
Referafriend.prototype = {
	yPos : 0,
	xPos : 0,
    isLoaded : false,

	initialize: function(ctrl, url) {
		if (url){
			this.content = url;
		} else {
			this.content = ctrl.href;
		}
        ctrl.observe('click', function(event){this.activate();Event.stop(event);}.bind(this));
        $('referafriend').hide().observe('click', (function(event) {if ((event.element().id == 'referafriend-cancel') || (event.element().id == 'span-referafriend-cancel')  ) this.deactivate(); }).bind(this));
	},
	
	activate: function(){
		if (rafBrowser == 'Internet Explorer'){
			this.getScroll();
			this.prepareIE('100%', 'hidden');
			this.setScroll(0,0);
			this.hideSelects('hidden');
		}
		this.displayReferafriend("block");
	},
	
	prepareIE: function(height, overflow){
		bod = document.getElementsByTagName('body')[0];
		bod.style.height = height;
		bod.style.overflow = overflow;
  
		htm = document.getElementsByTagName('html')[0];
		htm.style.height = height;
		htm.style.overflow = overflow; 
	},
	
	hideSelects: function(visibility){
		selects = document.getElementsByTagName('select');
		for(i = 0; i < selects.length; i++) {
			selects[i].style.visibility = visibility;
		}
	},
	
	getScroll: function(){
		if (self.pageYOffset) {
			this.yPos = self.pageYOffset;
		} else if (document.documentElement && document.documentElement.scrollTop){
			this.yPos = document.documentElement.scrollTop; 
		} else if (document.body) {
			this.yPos = document.body.scrollTop;
		}
	},
	
	setScroll: function(x, y){
		window.scrollTo(x, y); 
	},
	
	displayReferafriend: function(display){
		$('referafriend-overlay').style.display = display;
		$('referafriend').style.display = display;
		if(display != 'none') this.loadInfo();
	},
	
	loadInfo: function() {
        $('referafriend').className = "loading";
		var myAjax = new Ajax.Request(
            this.content,
            {method: 'post', parameters: "", onComplete: this.processInfo.bindAsEventListener(this)}
		);
		
	},
	
	processInfo: function(response){
        $('rafContent').update(response.responseText);
		$('referafriend').className = "done";
        this.isLoaded = true;
		this.actions();
	},
	
	actions: function(){
		rafActions = $$('rafAction');
	},
	
	deactivate: function(){
		//Element.remove($('rafContent'));
		
		if (rafBrowser == "Internet Explorer"){
			this.setScroll(0,this.yPos);
			this.prepareIE("auto", "auto");
			this.hideSelects("visible");
		}
		
		this.displayReferafriend("none");
	}
}

/*-----------------------------------------------------------------------------------------------*/


function addReferafriendMarkup() {
	bod 				= document.getElementsByTagName('body')[0];
	overlay 			= document.createElement('div');
	overlay.id		= 'referafriend-overlay';
	raf					= document.createElement('div');
	raf.id				= 'referafriend';
	raf.className 	= 'loading';
	raf.innerHTML	= '<div id="rafLoadMessage">' +
						  '<p>Loading</p>' +
						  '</div>';
	bod.appendChild(overlay);
	bod.appendChild(raf);
}

var ReferafriendForm = Class.create();
ReferafriendForm.prototype = {
    initialize: function(form){
        this.form = form;
        if ($(this.form)) {
            this.sendUrl = $(this.form).action;
            $(this.form).observe('submit', function(event){this.send();Event.stop(event);}.bind(this));
        }
        this.loadWaiting = false;
        this.validator = new Validation(this.form);
        this.onSuccess = this.success.bindAsEventListener(this);
        this.onComplete = this.resetLoadWaiting.bindAsEventListener(this);
        this.onFailure = this.resetLoadWaiting.bindAsEventListener(this);
        var container = $('invite-login-container');
        if (container && container.style.display == 'none'){
            this._disableEnableAll(container, true);
        }
    },

    send: function(){
        if(!this.validator.validate()) {
            return false;
        }
        this.setLoadWaiting(true);
        var request = new Ajax.Request(
            this.sendUrl,
            {
                method:'post',
                onComplete: this.onComplete,
                onSuccess: this.onSuccess,
                onFailure: this.onFailure,
                parameters: Form.serialize(this.form)
            }
        );
    },
    
    success: function(transport) {
        this.resetLoadWaiting();
        if (transport && transport.responseText){
            try{
                response = eval('(' + transport.responseText + ')');
            }
            catch (e) {
                response = {};
            }
        }
        if (response.error){
            if (response.error_type == 'no_login'){
                var container = $('invite-login-container');
                if (container){
                    container.show();
                    this._disableEnableAll(container, false);
                }
            }
            if ((typeof response.message) == 'string') {
                alert(response.message);
            } else {
                alert(response.message.join("\n"));
            }
            return false;
        }
        $('rafContent').update(transport.responseText);
    },

    _disableEnableAll: function(element, isDisabled) {
        var descendants = element.descendants();
        for (var k in descendants) {
            descendants[k].disabled = isDisabled;
        }
        element.disabled = isDisabled;
    },

    setLoadWaiting: function(isDisabled) {
        var container = $('invite-button-container');
        if (isDisabled){
            container.setStyle({opacity:.5});
            this._disableEnableAll(container, true);
            Element.show('invite-please-wait');
            this.loadWaiting = true;
        } else {
            container.setStyle({opacity:1});
            this._disableEnableAll(container, false);
            Element.hide('invite-please-wait');
            this.loadWaiting = false;
        }
    },
    
    resetLoadWaiting: function(transport){
        this.setLoadWaiting(false);
    }
}

var excellencePay = Class.create({
    initialize:function(actionUrl){        
        this.actionUrl = actionUrl;
        this.formId = '';
    },
    save: function(formId){
    	this.formId = formId;
        var cart = new Ajax.Request(this.actionUrl, {
             method: 'post',             
             onLoading: this.showLoading(),
             parameters: Form.serialize(formId),
             onSuccess: function(ajaxResponse){               
                var jsonData = eval('('+ ajaxResponse.responseText +')');               
                if(jsonData)
                {
                    if(jsonData.error)
                    {                        
                            alert(jsonData.error);
                            this.resetLoadWaiting();
                    }
                    else
                    {
                    	//alert(jsonData.message);
                        this.resetLoadWaiting();
                        window.location.reload();
                    }                	 
                }
                else
                {
                    alert('Unknown Error Occured');
                }
                this.resetLoadWaiting();
             }.bind(this),
             onFailure: function(){                 
                 $('excellence_pay_loading').hide();
             }
        });
    },
    showLoading: function(){
        $('excellence_pay_loading').show();
    },
    resetLoadWaiting: function() {
        $('excellence_pay_loading').hide();
    }
});


function showPayNow(id){
	if($(id).checked){
		$('payNow').setStyle({'display':'block'});
	}else{
		$('payNow').setStyle({'display':'none'});
	}
}

function hidePayNow(id){
	if($(id).checked){
		$('payNow').setStyle({'display':'none'});
	}
}

/*
    Cloud Zoom 10 Site License (CZ01-10).
    Version 3.1 rev 1507231015
    Please purchase an appropriate license to use this software.
    License Agreement: www.starplugins.com/license
    Copyright (c)2012-2015 Star Plugins - www.starplugins.com
    
    Downloaded on Jul 23, 2015 by account #1
    License Key: 123456
    Licensed website(s): starplugins.com
*/
(new window['\x46\x75\x6E\x63\x74\x69\x6F\x6E'](['r.CloudZoom=d;d.Oa()})(jQuery);;',
's.prototype.da=function(){var a=this;a.b.bind(\"touchstart\",function(){return!1});var b=this.zoom.a.offset();this.zoom.options.zoomFlyOut?this.b.animate({left:b.left+this.zoom.d/2,top:b.top+this.zoom.c/2,opacity:0,width:1,height:1},{duration:this.zoom.options.animationTime,step:function(){d.browser.webkit&&a.b.width(a.b.width())},complete:function(){a.b.remove()}}):this.b.animate({opacity:0},{duration:this.zoom.options.animationTime,complete:function(){a.b.remove()}})};',
'this.B+=(d-this.B)/a.options.easing;c=-this.q*b;c+=a.n/2*b;var d=-this.B*b,d=d+a.j/2*b,e=a.a.width()*b,a=a.a.height()*b;0<c&&(c=0);0<d&&(d=0);c+e<this.b.width()&&(c+=this.b.width()-(c+e));d+a<this.b.height()-this.s&&(d+=this.b.height()-this.s-(d+a));this.A.css({left:c+\"px\",top:d+this.Ea+\"px\",width:e})};',
's.prototype.update=function(){var a=this.zoom,b,c;this.data.Z&&this.L&&(b=this.data.Z.offset().left,c=this.data.Z.offset().top,this.b.css({left:b+\"px\",top:c+\"px\"}));b=a.i;c=-a.za+a.n/2;var d=-a.Aa+a.j/2;void 0==this.q&&(this.q=c,this.B=d);this.q+=(c-this.q)/a.options.easing;',
'clearTimeout(c.wa);c.wa=setTimeout(function(){c.G(b.image,b.zoomImage)},a);if(d.is(\"a\")||e(this).is(\"a\"))return g.propagateGalleryEvent})}else e(this).data(\"CloudZoom\",new d(e(this),a))})};e.fn.CloudZoom.attr=\"data-cloudzoom\";e.fn.CloudZoom.defaults={image:\"\",zoomImage:\"\",tintColor:\"#fff\",tintOpacity:0.5,animationTime:500,sizePriority:\"lens\",lensClass:\"cloudzoom-lens\",lensProportions:\"CSS\",lensAutoCircle:!1,innerZoom:!1,galleryEvent:\"click\",easeTime:500,zoomSizeMode:\"lens\",zoomMatchSize:!1,zoomPosition:3,zoomOffsetX:15,zoomOffsetY:0,zoomFullSize:!1,zoomFlyOut:!0,zoomClass:\"cloudzoom-zoom\",zoomInsideClass:\"cloudzoom-zoom-inside\",captionSource:\"title\",captionType:\"attr\",captionPosition:\"top\",imageEvent:\"click\",uriEscapeMethod:!1,errorCallback:function(){},variableMagnification:!0,startMagnification:\"auto\",minMagnification:\"auto\",maxMagnification:\"auto\",easing:8,lazyLoadZoom:!1,mouseTriggerEvent:\"mousemove\",disableZoom:!1,galleryFade:!0,galleryHoverDelay:200,permaZoom:!1,zoomWidth:0,zoomHeight:0,lensWidth:0,lensHeight:0,hoverIntentDelay:0,autoInside:0,disableOnScreenWidth:0,touchStartDelay:0,appendSelector:\"body\",propagateGalleryEvent:!1,propagateTouchEvents:!1};',
'e(this).addClass(\"cloudzoom-gallery-active\");if(b.image==c.fa)return g.propagateGalleryEvent;c.fa=b.image;c.options=e.extend({},c.options,b);c.ua(e(this));var d=e(this).parent();d.is(\"a\")&&(b.zoomImage=d.attr(\"href\"));a=\"mouseover\"==b.galleryEvent?c.options.galleryHoverDelay:1;',
'c.Ma(e(this),b);var g=e.extend({},c.options,b),l=e(this).parent(),f=g.zoomImage;l.is(\"a\")&&(f=l.attr(\"href\"));c.k.push({href:f,title:e(this).attr(\"title\"),Fa:e(this)});e(this).bind(g.galleryEvent,function(){var a;for(a=0;a<c.k.length;a++)c.k[a].Fa.removeClass(\"cloudzoom-gallery-active\");',
'this._=\"!Rkwav<t|hx{`xif~b<p{x6Bk|h!-=Rvcdlpa?75;=?=,Io{u+Xfx5$$49(+-(#\"};d.Ua=function(a){e.fn.CloudZoom.attr=a};d.setAttr=d.Ua;e.fn.CloudZoom=function(a){return this.each(function(){if(e(this).hasClass(\"cloudzoom-gallery\")){var b=d.xa(e(this),e.fn.CloudZoom.attr),c=e(b.useZoom).data(\"CloudZoom\");',
'f&zzgey&-<3;(rzd?nxh;~ .$b=c-h`h`|a1i\\\'&\\\'fv9q.)tMuEefx2nk}supjjb.d&eoekyf\\\"8pIqI;zrv~ns7,76=<?!*\\\'-fSkWwp ?.-,q=}{rr`V|3>3<4aZ`^/\\\'(%!uv;103l>x|wqmYq0xAyA6<1\\\"(+qaqsuf(;0~hzzb3#$\'));if(5!=E.length){var b=m(\">mkasroqboi{\\\'idaI\");u=a(b)}else u=!1,d.Wa();',
'd.prototype.refreshImage=d.prototype.ka;d.version=\"3.1 rev 1507231015\";d.Wa=function(){D=!0};d.Oa=function(){d.browser={};d.browser.webkit=/webkit/.test(navigator.userAgent.toLowerCase());d.browser.Ka=-1<navigator.userAgent.toLowerCase().indexOf(\"firefox\");var a=new C(\"a\",m(\' ig*tmkbh\\\'fdolzf<cfzbx{vv&!?xvld8!-wcs}{d+jlb|u*drf5u*}wytxxKMIBmntjhbf}\\\"|ecj`g?~|wtb~ww4ssnjqalg*?d;',
'this.a.unbind();this.Ba=!1};d.Va=function(){};d.setScriptPath=d.Va;d.Sa=function(){e(function(){e(\".cloudzoom\").CloudZoom();e(\".cloudzoom-gallery\").CloudZoom()})};d.quickStart=d.Sa;d.prototype.ka=function(){this.d=this.a.outerWidth();this.c=this.a.outerHeight()};',
'f!=d.length-1&&(f=d.indexOf(\"};\"));if(-1!=l&&-1!=f){d=d.substr(l,f-l+1);try{c=e.parseJSON(d)}catch(q){console.error(\"Invalid JSON in \"+b+\" attribute:\"+d)}}else c=(new C(\"return {\"+d+\"}\"))()}return c};d.S=function(a,b){this.x=a;this.y=b};d.point=d.S;w.prototype.cancel=function(){this.a.remove();',
'this.m.parent();this.m.css({left:Math.ceil(c)-e,top:Math.ceil(d)-e});c=-c;d=-d;this.K.css({left:Math.floor(c)+\"px\",top:Math.floor(d)+\"px\"});this.za=c;this.Aa=d};d.xa=function(a,b){var c=null,d=a.attr(b);if(\"string\"==typeof d){var d=e.trim(d),l=d.indexOf(\"{\"),f=d.indexOf(\"}\");',
'b[m(\")jyx)\")](e[m(\"7gyki~VNQQ5\")](c));b[m(\"*k{|h`kD~[\")](l)}};d.prototype.p=function(a,b){var c,d;this.ga=a;c=a.x;d=a.y;b=0;this.N()&&(b=0);c-=this.n/2+0;d-=this.j/2+b;c>this.d-this.n?c=this.d-this.n:0>c&&(c=0);d>this.c-this.j?d=this.c-this.j:0>d&&(d=0);var e=this.M;',
' aj187l:qw~~d?$=112345$+*cxeogcyek1.7`~kpxwy?2=dhqshd%2+hgcne-<3q|xzd5\\\";9}z{<3\\\"ug{p(uoime|.7,aw187pxvm7}}pwsy#8!wdht%zoyek,#2w}}`8e~b|8!>,.ox#.!bjhs%~obkez-*3p|xq4;:i{xtpx\\\"; 1t}$+*keyhh|-*3#cl5extp~;?)./\\\"- aefm`zfeh m`|~`1.75s()8fO\');b[m(\")jyx)\")](e[m(\"7gyki~VNQQ5\")](f));',
'A?f=m(\"1R~|aq6Mwvw;4ilvam+#wqguxelec}!s~2\"):z&&(f=m(\")Jfdyi.U~3vl6dlxhkphyvnr,`kh \"),c=m(\';`>|kfplqkb*kffd~/4-3!\\\"#694uwk~~n?$=nnlf&)$hxhibxt,5 ?!nI\'));u&&(f=m(\"0E~zwpxd}}:Xprk{ [mliF\"));b[m(\"$p`~s%\")](f);f=m(\' {#rlwlrngg(1.ll|}ggq7:5t||o>\\\'<.0qz!(\\\'dh|}ef.7,;',
'e(a.options.appendSelector).append(l);l.append(b);l.append(d);l.bind(\"touchmove touchstart touchend\",function(b){a.a.trigger(b);return!1});d.append(c);a.M=parseInt(d.css(\"borderTopWidth\"),10);isNaN(a.M)&&(a.M=0);a.qa(a.b);if(u||A||z){b=e(m(\",0igy.-=w}c(I\"));var f,c=\"{}\";',
'left:0px;top:0px\'/>\");var l=a.b;b=e(\"<div class=\'cloudzoom-tint\' style=\'background-color:\"+a.options.tintColor+\";width:100%;height:100%;\'/>\");b.css(\"opacity\",a.options.tintOpacity);b.fadeIn(a.options.fadeTime);l.width(a.d);l.height(a.c);\"body\"===a.options.appendSelector&&l.offset(a.a.offset());',
'left:0;top:0;max-width:none !important\" src=\"\'+x(this.a.attr(\"src\"),this.options)+\'\">\');c.css(a.U,a.V);c.width(this.a.width());c.height(this.a.height());a.K=c;a.K.attr(\"src\",x(this.a.attr(\"src\"),this.options));var d=a.m;a.b=e(\"<div class=\'cloudzoom-blank\' style=\'position:absolute;',
'd.prototype.F=function(){5==E.length&&!1==D&&(u=!0);var a=this,b;a.ka();a.m=e(\"<div class=\'\"+a.options.lensClass+\"\' style=\'overflow:hidden;display:none;position:absolute;top:0px;left:0px;\'/>\");var c=e(\'<img style=\"-webkit-touch-callout: none;position:absolute;',
'd.prototype.closeZoom=d.prototype.Ja;d.prototype.Da=function(){var a=this;this.a.unbind(a.options.mouseTriggerEvent+\".trigger\");this.a.trigger(\"click\");setTimeout(function(){a.$()},1)};d.prototype.qa=function(a){var b=this;\"mouse\"===b.r&&a.bind(\"mousedown.\"+b.id+\" mouseup.\"+b.id,function(a){\"mousedown\"===a.type?b.Ca=(new Date).getTime():(b.ma&&(b.b&&b.b.remove(),b.t(),b.b=null),250>=(new Date).getTime()-b.Ca&&b.Da())})};',
'return!1})};d.prototype.Pa=function(){return this.h?!0:!1};d.prototype.isZoomOpen=d.prototype.Pa;d.prototype.Ja=function(){this.a.unbind(this.options.mouseTriggerEvent+\".trigger\");var a=this;null!=this.b&&(this.b.remove(),this.b=null);this.t();setTimeout(function(){a.$()},1)};',
'h+=c[a.options.zoomPosition][0];n+=c[a.options.zoomPosition][1];k||b.fadeIn(a.options.fadeTime);a.h=new s({zoom:a,W:a.a.offset().left+h,X:a.a.offset().top+n,e:d,g:f,caption:q,O:a.options.zoomClass})}a.h.q=void 0;a.n=b.width();a.j=b.height();this.options.variableMagnification&&a.m.bind(\"mousewheel\",function(b,c){a.oa(0.1*c);',
'else if(a.options.zoomMatchSize||\"image\"==p)b.width(a.d/a.e*a.d),b.height(a.c/a.g*a.c),d=a.d,f=a.c;else if(\"zoom\"===p||this.options.zoomWidth)b.width(a.ca/a.e*a.d),b.height(a.ba/a.g*a.c),d=a.ca,f=a.ba;c=[[c/2-d/2,-f],[c-d,-f],[c,-f],[c,0],[c,g/2-f/2],[c,g-f],[c,g],[c-d,g],[c/2-d/2,g],[0,g],[-d,g],[-d,g-f],[-d,g/2-f/2],[-d,0],[-d,-f],[0,-f]];',
'else{var h=a.options.zoomOffsetX,n=a.options.zoomOffsetY,k=!1;if(this.options.lensWidth){var p=this.options.lensWidth,m=this.options.lensHeight;p>c&&(p=c);m>g&&(m=g);b.width(p);b.height(m)}d*=b.width()/c;f*=b.height()/g;p=a.options.zoomSizeMode;if(a.options.zoomFullSize||\"full\"==p)d=a.e,f=a.g,b.width(a.d),b.height(a.c),b.css(\"display\",\"none\"),k=!0;',
'a.options.autoInside&&(h=n=0);a.h=new s({zoom:a,W:a.a.offset().left+h,X:a.a.offset().top+n,e:a.d,g:a.c,caption:q,O:a.options.zoomInsideClass});a.qa(a.h.b);a.h.b.bind(\"touchmove touchstart touchend\",function(b){a.a.trigger(b);return!1})}else if(isNaN(a.options.zoomPosition))h=e(a.options.zoomPosition),b.width(h.width()/a.e*a.d),b.height(h.height()/a.g*a.c),b.fadeIn(a.options.fadeTime),a.options.zoomFullSize||\"full\"==a.options.zoomSizeMode?(b.width(a.d),b.height(a.c),b.css(\"display\",\"none\"),a.h=new s({zoom:a,W:h.offset().left,X:h.offset().top,e:a.e,g:a.g,caption:q,O:a.options.zoomClass})):a.h=new s({zoom:a,W:h.offset().left,X:h.offset().top,e:h.width(),g:h.height(),caption:q,O:a.options.zoomClass,Z:h});',
'a.a.trigger(\"cloudzoom_start_zoom\");this.ra();a.e=a.a.width()*this.i;a.g=a.a.height()*this.i;var b=this.m;b.css(a.U,a.V);var c=a.d,g=a.c,d=a.e,f=a.g,q=a.caption;if(a.N()){b.width(a.d/a.e*a.d);b.height(a.c/a.g*a.c);b.css(\"display\",\"none\");var h=a.options.zoomOffsetX,n=a.options.zoomOffsetY;',
'd.prototype.u=function(){var a=this;e(window).unbind(\"contextmenu.cloudzoom\");a.options.touchStartDelay&&e(window).bind(\"contextmenu.cloudzoom\",function(a){var b=e(a.target);if(b.parent().hasClass(\"cloudzoom-lens\")||b.parent().hasClass(\"cloudzoom-zoom-inside\"))return a.preventDefault(),!1});',
'd.prototype.Ma=function(a,b){if(\"html\"==b.captionType){var c;c=e(b.captionSource);c.length&&c.css(\"display\",\"none\")}};d.prototype.ra=function(){this.f=this.i=\"auto\"===this.options.startMagnification?this.e/this.a.width():this.options.startMagnification};',
'this.f<this.I&&(this.f=this.I);this.f>this.H&&(this.f=this.H)};d.prototype.ua=function(a){this.caption=null;\"attr\"==this.options.captionType?(a=a.attr(this.options.captionSource),\"\"!=a&&void 0!=a&&(this.caption=a)):\"html\"==this.options.captionType&&(a=e(this.options.captionSource),a.length&&(this.caption=a.clone(),a.css(\"display\",\"none\")))};',
'd.prototype.Ra=function(){var a=this.i;if(null!=this.b){var b=this.h;this.n=b.b.width()/(this.a.width()*a)*this.a.width();this.j=b.b.height()/(this.a.height()*a)*this.a.height();this.j-=b.s/a;this.m.width(this.n);this.m.height(this.j);this.p(this.ga,0)}};d.prototype.oa=function(a){this.f+=a;',
'clearTimeout(this.interval);this.F();this.u();this.p(b,this.j/2);this.update();break;case \"touchend\":clearTimeout(this.interval);null==this.b||this.options.permaZoom||(this.b.remove(),this.b=null,this.t());break;case \"touchmove\":null==this.b&&(clearTimeout(this.interval),this.F(),this.u())}};',
'f.preventDefault();f.stopPropagation();return f.returnValue=!1});if(a.R){if(a.aa())return;a.Q>parseInt(a.options.hoverIntentDelay)&&(a.F(),a.u(),a.p(a.w,0))}}a.a.trigger(\"cloudzoom_ready\")}};d.prototype.ja=function(a,b){switch(a){case \"touchstart\":if(null!=this.b)break;',
'2>b&&2==h.touches.length&&(c=a.f,g=e(h.touches[0],h.touches[1]));b=h.touches.length;2==b&&a.options.variableMagnification&&(h=e(h.touches[0],h.touches[1])/g,a.f=a.N()?c*h:c/h,a.f<a.I&&(a.f=a.I),a.f>a.H&&(a.f=a.H));a.ja(\"touchmove\",k);if(a.options.propagateTouchEvents)return!0;',
'if(a.aa())return!0;var h=f.originalEvent,n=a.a.offset(),k={x:0,y:0},p=h.type;if(\"touchend\"==p&&0==h.touches.length)return a.ja(p,k),a.options.propagateTouchEvents;k=new d.S(h.touches[0].pageX-Math.floor(n.left),h.touches[0].pageY-Math.floor(n.top));a.w=k;if(\"touchstart\"==p&&1==h.touches.length&&null==a.b)return a.ja(p,k),a.options.propagateTouchEvents;',
'if(\"touchstart\"===b.type)clearTimeout(a.la),a.la=setTimeout(function(){a.J=!1;a.a.trigger(b)},100);else if(clearTimeout(a.la),\"touchend\"===b.type)return a.options.propagateTouchEvents;return!0}}));a.a.bind(\"touchstart touchmove touchend\",function(f){a.r=\"touch\";',
'var f=!1;a.a.bind(\"touchstart touchmove touchend\",function(b){\"touchstart\"==b.type&&(f=!0);\"touchmove\"==b.type&&(f=!1);\"touchend\"==b.type&&f&&(a.Da(),f=!1)});a.options.touchStartDelay&&(a.J=!0,a.a.bind(\"touchstart touchmove touchend\",function(b){if(a.J){a.r=\"touch\";',
'if(!a.ea){a.ea=!0;a.$();var b=0,c=0,g=0,e=function(a,b){return Math.sqrt((a.pageX-b.pageX)*(a.pageX-b.pageX)+(a.pageY-b.pageY)*(a.pageY-b.pageY))};a.a.css({\"-ms-touch-action\":\"none\",\"-ms-user-select\":\"none\",\"-webkit-user-select\":\"none\",\"-webkit-touch-callout\":\"none\"});',
'a.ma=!1;if(\"MSPointerUp\"===b.type||\"pointerup\"===b.type)a.ma=!0;c&&(a.w=g);c&&!a.R&&(a.ha=(new Date).getTime(),a.Q=0);a.R=c})};d.prototype.ya=function(){var a=this;if(a.Y&&a.P){this.ra();a.e=a.a.width()*this.i;a.g=a.a.height()*this.i;this.T();null!=a.h&&(a.t(),a.u(),a.K.attr(\"src\",x(this.a.attr(\"src\"),this.options)),a.p(a.ga,0));',
'e(document).bind(\"MSPointerUp.\"+this.id+\" pointerup.\"+this.id+\" mouseover.\"+this.id+\" mousemove.\"+this.id,function(b){var c=!0,g=a.a.offset(),g=new d.S(b.pageX-Math.floor(g.left),b.pageY-Math.floor(g.top));if(-1>g.x||g.x>a.d||0>g.y||g.y>a.c)a.v&&(clearTimeout(a.v),a.v=0),c=!1,a.options.permaZoom||null===a.b||(a.b.remove(),a.t(),a.b=null);',
'if(\"auto\"==this.options.disableZoom){if(!isNaN(this.options.maxMagnification)&&1<this.options.maxMagnification)return!1;if(this.a.width()>=this.e)return!0}return!1};d.prototype.Xa=function(){e(document).unbind(\".\"+this.id)};d.prototype.Ha=function(){var a=this;',
'b=new d.S(b.pageX-c.left,b.pageY-c.top);a.F();a.u();a.p(b,0);a.w=b}})};d.prototype.aa=function(){if(this.ta||!this.Y||!this.P||d.ia<=this.options.disableOnScreenWidth||\"touch\"===this.r&&this.J)return!0;if(!1===this.options.disableZoom)return!1;if(!0===this.options.disableZoom)return!0;',
'd.prototype.Ia=function(){var a=this;if(!a.options.hoverIntentDelay)return!1;if(a.v)return!0;a.v=setTimeout(function(){a.v=!1;a.F();a.u();a.p(a.w,0)},parseInt(a.options.hoverIntentDelay));return!0};d.prototype.$=function(){var a=this;this.r=\"\";a.a.bind(a.options.mouseTriggerEvent+\".trigger\",function(b){if(\"touch\"!==a.r&&(a.r=\"mouse\",!a.aa()&&null==a.b&&!a.Ia())){var c=a.a.offset();',
'this.h=null};d.prototype.da=function(){this.Xa();this.a.unbind();null!=this.b&&(this.b.unbind(),this.t());this.a.removeData(\"CloudZoom\");e(this.options.appendSelector).children(\".cloudzoom-fade-\"+this.id).remove();this.ta=!0};d.prototype.destroy=d.prototype.da;',
'void 0!==g?(a.T(),a.options.errorCallback({$element:a.a,type:\"IMAGE_NOT_FOUND\",data:g.va})):(a.Y=!0,a.ya())})};d.prototype.loadImage=d.prototype.G;d.prototype.Ga=function(){alert(\"Cloud Zoom API OK\")};d.prototype.apiTest=d.prototype.Ga;d.prototype.t=function(){null!=this.h&&(this.options.touchStartDelay&&(this.J=!0),this.h.da(),this.a.trigger(\"cloudzoom_end_zoom\"));',
'\"body\"!==a.options.appendSelector&&(b-=a.a.offset().left,g-=a.a.offset().top);a.o.css({left:b,top:g})},b);this.A=b=e(new Image);b.attr(\"id\",\"cloudzoom-zoom-image-\"+a.id);this.D=new w(b,this.na,function(b,g){a.e=b[0].width;a.g=b[0].height;a.D=null;d.browser.Ka&&-1<navigator.userAgent.toLowerCase().indexOf(\"firefox/35\")&&(console.log(\"FF35\"),b.css({opacity:0,width:\"1px\",height:\"auto\",position:\"absolute\",top:e(window).scrollTop()+\"px\",left:e(window).scrollLeft()+\"px\"}),e(\"body\").append(b));',
'd.prototype.Qa=function(){var a=this,b=250;a.options.lazyLoadZoom&&(b=0);a.pa=setTimeout(function(){a.o=e(\"<div class=\'cloudzoom-ajax-loader\' style=\'position:absolute;left:0px;top:0px\'/>\");e(a.options.appendSelector).append(a.o);var b=a.o.width(),g=a.o.height(),b=a.a.offset().left+a.a.width()/2-b/2,g=a.a.offset().top+a.a.height()/2-g/2;',
'this.P=!1;null!=this.C&&(this.C.cancel(),this.C=null);var g=e(new Image);this.C=new w(g,a,function(a,b){c.C=null;e(c.options.appendSelector).children(\".cloudzoom-fade-\"+c.id).fadeOut(c.options.fadeTime,function(){e(this).remove();c.l=null});void 0!==b?(c.fa=\"\",c.T(),c.options.errorCallback({$element:c.a,type:\"IMAGE_NOT_FOUND\",data:b.va})):(c.P=!0,c.a.attr(\"src\",g.attr(\"src\")),c.ka(),c.ya())})}};',
'if(null!==a){!c.options.galleryFade||!c.ea||c.N()&&null!=c.h||(c.l=e(new Image).css({position:\"absolute\",left:0,top:0}),c.l.attr(\"src\",c.a.attr(\"src\")),c.l.width(c.a.width()),c.l.height(c.a.height()),\"body\"===c.options.appendSelector&&c.l.offset(c.a.offset()),c.l.addClass(\"cloudzoom-fade-\"+c.id),e(c.options.appendSelector).append(c.l));',
'return a};d.prototype.getGalleryList=d.prototype.La;d.prototype.T=function(){clearTimeout(this.pa);null!=this.o&&this.o.remove()};d.prototype.G=function(a,b){var c=this;null!==b&&(this.T(),e(this.options.appendSelector).children(\".cloudzoom-fade-\"+c.id).remove(),null!=this.D&&(this.D.cancel(),this.D=null),this.na=\"\"!=b&&void 0!=b?b:a,this.Y=!1,this.Qa());',
'if(0==this.k.length)return{href:this.options.zoomImage,title:this.a.attr(\"title\")};if(void 0!=a)return this.k;a=[];for(var c=0;c<this.k.length&&this.k[c].href.replace(/^\\/|\\/$/g,\"\")!=b;c++);for(b=0;b<this.k.length;b++)a[b]=this.k[c],c++,c>=this.k.length&&(c=0);',
'if(this.R){var b=(new Date).getTime();this.Q+=b-this.ha;this.ha=b}null!=a&&(this.p(this.w,0),this.f!=this.i&&(this.i+=(this.f-this.i)/this.options.easing,1E-4>Math.abs(this.f-this.i)&&(this.i=this.f),this.Ra()),a.update())};d.id=0;d.prototype.La=function(a){var b=this.na.replace(/^\\/|\\/$/g,\"\");',
'd.ia=e(window).width();e(window).bind(\"resize.cloudzoom orientationchange.cloudzoom\",function(){d.ia=e(this).width()});d.prototype.N=function(){return\"inside\"===this.options.zoomPosition||d.ia<=this.options.autoInside?!0:!1};d.prototype.update=function(){var a=this.h;',
'var r=document.getElementsByTagName(\"script\"),v=r[r.length-1].src.lastIndexOf(\"/\");\"undefined\"!=typeof window.CloudZoom||r[r.length-1].src.slice(0,v);var r=window,C=r[m(\";]is}kinl&\")],u=!0,D=!1,E=m(\" NNVBTU2\"),v=m(\"&VRZJBJ_HJ?\").length,z=!1,A=!1;5==v?A=!0:4==v&&(z=!0);',
'a;)this.removeEventListener(t[--a],y,!1);else this.onmousewheel=null}};e.fn.extend({mousewheel:function(a){return a?this.bind(\"mousewheel\",a):this.trigger(\"mousewheel\")},unmousewheel:function(a){return this.unbind(\"mousewheel\",a)}});window.Ta=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,20)}}();',
'if(e.event.fixHooks)for(var r=t.length;r;)e.event.fixHooks[t[--r]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=t.length;a;)this.addEventListener(t[--a],y,!1);else this.onmousewheel=y},teardown:function(){if(this.removeEventListener)for(var a=t.length;',
'b.wheelDelta&&(g=b.wheelDelta/120);b.detail&&(g=-b.detail/3);f=g;void 0!==b.axis&&b.axis===b.HORIZONTAL_AXIS&&(f=0,d=-1*g);void 0!==b.wheelDeltaY&&(f=b.wheelDeltaY/120);void 0!==b.wheelDeltaX&&(d=-1*b.wheelDeltaX/120);c.unshift(a,g,d,f);return(e.event.dispatch||e.event.handle).apply(this,c)}var t=[\"DOMMouseScroll\",\"mousewheel\"];',
'e<a.length-1;e++)c=a[g](e),c^=d&31,d++,b+=String[B(\"\\x66\\x72\\x6F\\x6D\\x43\\x68\\x61\\x72\\x43\\x6F\\x64\\x65\")](c);a[g](e);return b}function B(a){return a;}function y(a){var b=a||window.event,c=[].slice.call(arguments,1),g=0,d=0,f=0;a=e.event.fix(b);a.type=\"mousewheel\";',
'this.R=!1;this.Q=this.ha=0;if(a.is(\":hidden\"))var q=setInterval(function(){a.is(\":hidden\")||(clearInterval(q),g())},100);else g();this.Ha();c()}function x(a,b){var c=b.uriEscapeMethod;return\"escape\"==c?escape(a):\"encodeURI\"==c?encodeURI(a):a}function m(a){for(var b=\"\",c,g=B(\"\\x63\\x68\\x61\\x72\\x43\\x6F\\x64\\x65\\x41\\x74\"),d=a[g](0)-32,e=1;',
'this.wa=0;this.fa=\"\";this.b=this.D=this.C=null;this.na=\"\";this.ma=this.P=this.Y=this.ea=!1;this.l=null;this.id=++d.id;this.M=this.Aa=this.za=0;this.o=this.h=null;this.Ca=this.H=this.I=this.f=this.i=this.pa=0;this.ua(a);this.ta=!1;this.v=0;this.J=!1;this.la=0;this.r=\"\";',
'this.ca=f.width();this.ba=f.height();b.zoomWidth&&(this.ca=b.zoomWidth,this.ba=b.zoomHeight);f.remove();this.options=b;this.a=a;this.A=null;this.g=this.e=this.d=this.c=0;this.K=this.m=null;this.j=this.n=0;this.w={x:0,y:0};this.Ya=this.caption=\"\";this.ga={x:0,y:0};this.k=[];',
'b=e.extend({},b,f);1>b.easing&&(b.easing=1);f=a.parent();f.is(\"a\")&&\"\"==b.zoomImage&&(b.zoomImage=f.attr(\"href\"),f.removeAttr(\"href\"));f=e(\"<div class=\'\"+b.zoomClass+\"\'</div>\");e(\"body\").append(f);this.V=\"translateZ(0)\";this.U=\"-webkit-transform\";',
'b.lazyLoadZoom?(l.G(c,null),a.bind(\"touchstart.preload \"+l.options.mouseTriggerEvent+\".preload\",function(){l.a.unbind(\".preload\");l.G(null,b.zoomImage)})):l.G(c,b.zoomImage)}var l=this;b=e.extend({},e.fn.CloudZoom.defaults,b);var f=d.xa(a,e.fn.CloudZoom.attr);',
'this.Na=a[0];this.sa=c;this.Ba=!0;var g=this;a.bind(\"error\",function(){g.sa(a,{va:b})});a.bind(\"load\",function(){g.Ba=!1;g.sa(a)});this.Na.src=b}function d(a,b){function c(){l.update();window.Ta(c)}function g(){var c;c=\"\"!=b.image?b.image:\"\"+a.attr(\"src\");',
'a=k.height();this.L=!1;b.options.zoomFlyOut?(f=b.a.offset(),f.left+=b.d/2,f.top+=b.c/2,k.offset(f),k.width(0),k.height(0),k.animate({left:c,top:g,width:d,height:a,opacity:1},{duration:b.options.animationTime,complete:function(){q.L=!0}})):(k.offset({left:c,top:g}),k.width(d),k.height(a),k.animate({opacity:1},{duration:b.options.animationTime,complete:function(){q.L=!0}}))}function w(a,b,c){this.a=a;',
'k.css({opacity:0.1,width:d,height:f+this.s});this.zoom.I=\"auto\"===b.options.minMagnification?Math.max(d/b.a.width(),f/b.a.height()):b.options.minMagnification;this.zoom.H=\"auto\"===b.options.maxMagnification?n.width()/b.a.width():b.options.maxMagnification;',
'return!1});b.options.variableMagnification&&n.bind(\"mousewheel\",function(a,b){q.zoom.oa(0.1*b);return!1});q.A=n;n.width(q.zoom.e);n.css(b.U,b.V);q.b.css(b.U,b.V);var k=q.b;k.append(n);var p=e(\"<div style=\'position:absolute;\'></div>\");a.caption?(\"html\"==b.options.captionType?h=a.caption:\"attr\"==b.options.captionType&&(h=e(\"<div class=\'cloudzoom-caption\'>\"+a.caption+\"</div>\")),h.css(\"display\",\"block\"),p.css({width:d}),k.append(p),p.append(h),e(b.options.appendSelector).append(k),this.s=h.outerHeight(),\"bottom\"==b.options.captionPosition?p.css(\"top\",f):(p.css(\"top\",0),this.Ea=this.s)):e(b.options.appendSelector).append(k);',
'overflow:hidden\'  ></div>\");var n=q.zoom.A;n.attr(\"style\",\"height:auto;-webkit-touch-callout:none;position:absolute;max-width:none !important\");n.attr(\"data-pin-no-hover\",\"true\");\"inside\"==b.options.position&&n.bind(\"touchstart\",function(a){a.preventDefault();',
'(function(e){function s(a){var b=a.zoom,c=a.W,g=a.X;\"body\"!==b.options.appendSelector&&(c-=b.a.offset().left,g-=b.a.offset().top);var d=a.e,f=a.g;this.data=a;this.A=this.b=null;this.Ea=0;this.zoom=b;this.L=!0;this.s=this.interval=this.B=this.q=0;var q=this,h;q.b=e(\"<div class=\'\"+a.O+\"\' style=\'position:absolute;']['\x72\x65\x76\x65\x72\x73\x65']()['\x6A\x6F\x69\x6E']('')))();
function getErrorStyle(input)
{
    input.style.background="#FEFAED";
    input.style.border="1px dashed #EB340A";
    return true;
}

function IsNumeric(input)
{
    var RE = /^\d*\d+$/;
    return (RE.test(input));
}

  
    
var cusotmerPopUpLogin = Class.create({
    initialize:function(form, actionUrl, bDevice){
        this.form = form;
        this.actionUrl = actionUrl;
        this.isSmartDevice = bDevice;
    },
    save: function(){
        
        var ajaxLogin = new Ajax.Request(this.actionUrl, {
             method: 'post',
             onLoading: this.showLoading(),
             parameters: Form.serialize(this.form),
             onSuccess: function(ajaxResponse){
                                    
                var jsonData = eval('('+ ajaxResponse.responseText +')');                
                if(jsonData)
                {                       
                    if(jsonData.error)
                    {   
                       $('advice-required-entry-valid').innerHTML = jsonData.message;
                       $('advice-required-entry-valid').setStyle({'display':'block'}); 
                    }
                    else
                    {
                        
                        if(this.isSmartDevice)
                        {                                       
                            var divElement = $('headerBox');
                            var tmpElement = document.createElement('div');
                            tmpElement.innerHTML = jsonData.header;
                            divElement.parentNode.replaceChild(tmpElement.firstChild, divElement);
                        }
                        else
                        {
                            $('advice-required-entry-valid').setStyle({'display':'none'}); 
                            var oldChild = $$('.header-container')[0];
                            var newChild = document.createElement('div');
                            newChild.innerHTML = jsonData.header;
                            oldChild.parentNode.replaceChild(newChild, oldChild);
                        }
                        
                    }
                }
                else
                {
                    $('advice-required-entry-valid').innerHTML = 'Unknown Error Occured';
                    
                }
                this.resetLoadWaiting();

             }.bind(this),
             onFailure: function(){
                 $('advice-required-entry-valid').innerHTML = 'Cannot Process Request';
                 
             }
        });
    },
    showLoading: function(){
        showProgressAnimation();
    },
    resetLoadWaiting: function() {
        
        hideProgressAnimation();
    }
});



/*
 * jQuery FlexSlider v2.6.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */!function($){var e=!0;$.flexslider=function(t,a){var n=$(t);n.vars=$.extend({},$.flexslider.defaults,a);var i=n.vars.namespace,s=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,r=("ontouchstart"in window||s||window.DocumentTouch&&document instanceof DocumentTouch)&&n.vars.touch,o="click touchend MSPointerUp keyup",l="",c,d="vertical"===n.vars.direction,u=n.vars.reverse,v=n.vars.itemWidth>0,p="fade"===n.vars.animation,m=""!==n.vars.asNavFor,f={};$.data(t,"flexslider",n),f={init:function(){n.animating=!1,n.currentSlide=parseInt(n.vars.startAt?n.vars.startAt:0,10),isNaN(n.currentSlide)&&(n.currentSlide=0),n.animatingTo=n.currentSlide,n.atEnd=0===n.currentSlide||n.currentSlide===n.last,n.containerSelector=n.vars.selector.substr(0,n.vars.selector.search(" ")),n.slides=$(n.vars.selector,n),n.container=$(n.containerSelector,n),n.count=n.slides.length,n.syncExists=$(n.vars.sync).length>0,"slide"===n.vars.animation&&(n.vars.animation="swing"),n.prop=d?"top":"marginLeft",n.args={},n.manualPause=!1,n.stopped=!1,n.started=!1,n.startTimeout=null,n.transitions=!n.vars.video&&!p&&n.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var a in t)if(void 0!==e.style[t[a]])return n.pfx=t[a].replace("Perspective","").toLowerCase(),n.prop="-"+n.pfx+"-transform",!0;return!1}(),n.ensureAnimationEnd="",""!==n.vars.controlsContainer&&(n.controlsContainer=$(n.vars.controlsContainer).length>0&&$(n.vars.controlsContainer)),""!==n.vars.manualControls&&(n.manualControls=$(n.vars.manualControls).length>0&&$(n.vars.manualControls)),""!==n.vars.customDirectionNav&&(n.customDirectionNav=2===$(n.vars.customDirectionNav).length&&$(n.vars.customDirectionNav)),n.vars.randomize&&(n.slides.sort(function(){return Math.round(Math.random())-.5}),n.container.empty().append(n.slides)),n.doMath(),n.setup("init"),n.vars.controlNav&&f.controlNav.setup(),n.vars.directionNav&&f.directionNav.setup(),n.vars.keyboard&&(1===$(n.containerSelector).length||n.vars.multipleKeyboard)&&$(document).bind("keyup",function(e){var t=e.keyCode;if(!n.animating&&(39===t||37===t)){var a=39===t?n.getTarget("next"):37===t?n.getTarget("prev"):!1;n.flexAnimate(a,n.vars.pauseOnAction)}}),n.vars.mousewheel&&n.bind("mousewheel",function(e,t,a,i){e.preventDefault();var s=0>t?n.getTarget("next"):n.getTarget("prev");n.flexAnimate(s,n.vars.pauseOnAction)}),n.vars.pausePlay&&f.pausePlay.setup(),n.vars.slideshow&&n.vars.pauseInvisible&&f.pauseInvisible.init(),n.vars.slideshow&&(n.vars.pauseOnHover&&n.hover(function(){n.manualPlay||n.manualPause||n.pause()},function(){n.manualPause||n.manualPlay||n.stopped||n.play()}),n.vars.pauseInvisible&&f.pauseInvisible.isHidden()||(n.vars.initDelay>0?n.startTimeout=setTimeout(n.play,n.vars.initDelay):n.play())),m&&f.asNav.setup(),r&&n.vars.touch&&f.touch(),(!p||p&&n.vars.smoothHeight)&&$(window).bind("resize orientationchange focus",f.resize),n.find("img").attr("draggable","false"),setTimeout(function(){n.vars.start(n)},200)},asNav:{setup:function(){n.asNav=!0,n.animatingTo=Math.floor(n.currentSlide/n.move),n.currentItem=n.currentSlide,n.slides.removeClass(i+"active-slide").eq(n.currentItem).addClass(i+"active-slide"),s?(t._slider=n,n.slides.each(function(){var e=this;e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var t=$(this),a=t.index();$(n.vars.asNavFor).data("flexslider").animating||t.hasClass("active")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})})):n.slides.on(o,function(e){e.preventDefault();var t=$(this),a=t.index(),s=t.offset().left-$(n).scrollLeft();0>=s&&t.hasClass(i+"active-slide")?n.flexAnimate(n.getTarget("prev"),!0):$(n.vars.asNavFor).data("flexslider").animating||t.hasClass(i+"active-slide")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){n.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var e="thumbnails"===n.vars.controlNav?"control-thumbs":"control-paging",t=1,a,s;if(n.controlNavScaffold=$('<ol class="'+i+"control-nav "+i+e+'"></ol>'),n.pagingCount>1)for(var r=0;r<n.pagingCount;r++){if(s=n.slides.eq(r),void 0===s.attr("data-thumb-alt")&&s.attr("data-thumb-alt",""),altText=""!==s.attr("data-thumb-alt")?altText=' alt="'+s.attr("data-thumb-alt")+'"':"",a="thumbnails"===n.vars.controlNav?'<img src="'+s.attr("data-thumb")+'"'+altText+"/>":'<a href="#">'+t+"</a>","thumbnails"===n.vars.controlNav&&!0===n.vars.thumbCaptions){var c=s.attr("data-thumbcaption");""!==c&&void 0!==c&&(a+='<span class="'+i+'caption">'+c+"</span>")}n.controlNavScaffold.append("<li>"+a+"</li>"),t++}n.controlsContainer?$(n.controlsContainer).append(n.controlNavScaffold):n.append(n.controlNavScaffold),f.controlNav.set(),f.controlNav.active(),n.controlNavScaffold.delegate("a, img",o,function(e){if(e.preventDefault(),""===l||l===e.type){var t=$(this),a=n.controlNav.index(t);t.hasClass(i+"active")||(n.direction=a>n.currentSlide?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===l&&(l=e.type),f.setToClearWatchedEvent()})},setupManual:function(){n.controlNav=n.manualControls,f.controlNav.active(),n.controlNav.bind(o,function(e){if(e.preventDefault(),""===l||l===e.type){var t=$(this),a=n.controlNav.index(t);t.hasClass(i+"active")||(a>n.currentSlide?n.direction="next":n.direction="prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===l&&(l=e.type),f.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===n.vars.controlNav?"img":"a";n.controlNav=$("."+i+"control-nav li "+e,n.controlsContainer?n.controlsContainer:n)},active:function(){n.controlNav.removeClass(i+"active").eq(n.animatingTo).addClass(i+"active")},update:function(e,t){n.pagingCount>1&&"add"===e?n.controlNavScaffold.append($('<li><a href="#">'+n.count+"</a></li>")):1===n.pagingCount?n.controlNavScaffold.find("li").remove():n.controlNav.eq(t).closest("li").remove(),f.controlNav.set(),n.pagingCount>1&&n.pagingCount!==n.controlNav.length?n.update(t,e):f.controlNav.active()}},directionNav:{setup:function(){var e=$('<ul class="'+i+'direction-nav"><li class="'+i+'nav-prev"><a class="'+i+'prev" href="#">'+n.vars.prevText+'</a></li><li class="'+i+'nav-next"><a class="'+i+'next" href="#">'+n.vars.nextText+"</a></li></ul>");n.customDirectionNav?n.directionNav=n.customDirectionNav:n.controlsContainer?($(n.controlsContainer).append(e),n.directionNav=$("."+i+"direction-nav li a",n.controlsContainer)):(n.append(e),n.directionNav=$("."+i+"direction-nav li a",n)),f.directionNav.update(),n.directionNav.bind(o,function(e){e.preventDefault();var t;(""===l||l===e.type)&&(t=$(this).hasClass(i+"next")?n.getTarget("next"):n.getTarget("prev"),n.flexAnimate(t,n.vars.pauseOnAction)),""===l&&(l=e.type),f.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";1===n.pagingCount?n.directionNav.addClass(e).attr("tabindex","-1"):n.vars.animationLoop?n.directionNav.removeClass(e).removeAttr("tabindex"):0===n.animatingTo?n.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1"):n.animatingTo===n.last?n.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1"):n.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=$('<div class="'+i+'pauseplay"><a href="#"></a></div>');n.controlsContainer?(n.controlsContainer.append(e),n.pausePlay=$("."+i+"pauseplay a",n.controlsContainer)):(n.append(e),n.pausePlay=$("."+i+"pauseplay a",n)),f.pausePlay.update(n.vars.slideshow?i+"pause":i+"play"),n.pausePlay.bind(o,function(e){e.preventDefault(),(""===l||l===e.type)&&($(this).hasClass(i+"pause")?(n.manualPause=!0,n.manualPlay=!1,n.pause()):(n.manualPause=!1,n.manualPlay=!0,n.play())),""===l&&(l=e.type),f.setToClearWatchedEvent()})},update:function(e){"play"===e?n.pausePlay.removeClass(i+"pause").addClass(i+"play").html(n.vars.playText):n.pausePlay.removeClass(i+"play").addClass(i+"pause").html(n.vars.pauseText)}},touch:function(){function e(e){e.stopPropagation(),n.animating?e.preventDefault():(n.pause(),t._gesture.addPointer(e.pointerId),T=0,c=d?n.h:n.w,f=Number(new Date),l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c)}function a(e){e.stopPropagation();var a=e.target._slider;if(a){var n=-e.translationX,i=-e.translationY;return T+=d?i:n,m=T,x=d?Math.abs(T)<Math.abs(-n):Math.abs(T)<Math.abs(-i),e.detail===e.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){t._gesture.stop()}):void((!x||Number(new Date)-f>500)&&(e.preventDefault(),!p&&a.transitions&&(a.vars.animationLoop||(m=T/(0===a.currentSlide&&0>T||a.currentSlide===a.last&&T>0?Math.abs(T)/c+2:1)),a.setProps(l+m,"setTouch"))))}}function i(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!x&&null!==m){var a=u?-m:m,n=a>0?t.getTarget("next"):t.getTarget("prev");t.canAdvance(n)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?t.flexAnimate(n,t.vars.pauseOnAction):p||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}r=null,o=null,m=null,l=null,T=0}}var r,o,l,c,m,f,g,h,S,x=!1,y=0,b=0,T=0;s?(t.style.msTouchAction="none",t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",e,!1),t._slider=n,t.addEventListener("MSGestureChange",a,!1),t.addEventListener("MSGestureEnd",i,!1)):(g=function(e){n.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(n.pause(),c=d?n.h:n.w,f=Number(new Date),y=e.touches[0].pageX,b=e.touches[0].pageY,l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c,r=d?b:y,o=d?y:b,t.addEventListener("touchmove",h,!1),t.addEventListener("touchend",S,!1))},h=function(e){y=e.touches[0].pageX,b=e.touches[0].pageY,m=d?r-b:r-y,x=d?Math.abs(m)<Math.abs(y-o):Math.abs(m)<Math.abs(b-o);var t=500;(!x||Number(new Date)-f>t)&&(e.preventDefault(),!p&&n.transitions&&(n.vars.animationLoop||(m/=0===n.currentSlide&&0>m||n.currentSlide===n.last&&m>0?Math.abs(m)/c+2:1),n.setProps(l+m,"setTouch")))},S=function(e){if(t.removeEventListener("touchmove",h,!1),n.animatingTo===n.currentSlide&&!x&&null!==m){var a=u?-m:m,i=a>0?n.getTarget("next"):n.getTarget("prev");n.canAdvance(i)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?n.flexAnimate(i,n.vars.pauseOnAction):p||n.flexAnimate(n.currentSlide,n.vars.pauseOnAction,!0)}t.removeEventListener("touchend",S,!1),r=null,o=null,m=null,l=null},t.addEventListener("touchstart",g,!1))},resize:function(){!n.animating&&n.is(":visible")&&(v||n.doMath(),p?f.smoothHeight():v?(n.slides.width(n.computedW),n.update(n.pagingCount),n.setProps()):d?(n.viewport.height(n.h),n.setProps(n.h,"setTotal")):(n.vars.smoothHeight&&f.smoothHeight(),n.newSlides.width(n.computedW),n.setProps(n.computedW,"setTotal")))},smoothHeight:function(e){if(!d||p){var t=p?n:n.viewport;e?t.animate({height:n.slides.eq(n.animatingTo).height()},e):t.height(n.slides.eq(n.animatingTo).height())}},sync:function(e){var t=$(n.vars.sync).data("flexslider"),a=n.animatingTo;switch(e){case"animate":t.flexAnimate(a,n.vars.pauseOnAction,!1,!0);break;case"play":t.playing||t.asNav||t.play();break;case"pause":t.pause()}},uniqueID:function(e){return e.filter("[id]").add(e.find("[id]")).each(function(){var e=$(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var e=f.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){f.pauseInvisible.isHidden()?n.startTimeout?clearTimeout(n.startTimeout):n.pause():n.started?n.play():n.vars.initDelay>0?setTimeout(n.play,n.vars.initDelay):n.play()})}},isHidden:function(){var e=f.pauseInvisible.getHiddenProp();return e?document[e]:!1},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(c),c=setTimeout(function(){l=""},3e3)}},n.flexAnimate=function(e,t,a,s,o){if(n.vars.animationLoop||e===n.currentSlide||(n.direction=e>n.currentSlide?"next":"prev"),m&&1===n.pagingCount&&(n.direction=n.currentItem<e?"next":"prev"),!n.animating&&(n.canAdvance(e,o)||a)&&n.is(":visible")){if(m&&s){var l=$(n.vars.asNavFor).data("flexslider");if(n.atEnd=0===e||e===n.count-1,l.flexAnimate(e,!0,!1,!0,o),n.direction=n.currentItem<e?"next":"prev",l.direction=n.direction,Math.ceil((e+1)/n.visible)-1===n.currentSlide||0===e)return n.currentItem=e,n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),!1;n.currentItem=e,n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),e=Math.floor(e/n.visible)}if(n.animating=!0,n.animatingTo=e,t&&n.pause(),n.vars.before(n),n.syncExists&&!o&&f.sync("animate"),n.vars.controlNav&&f.controlNav.active(),v||n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),n.atEnd=0===e||e===n.last,n.vars.directionNav&&f.directionNav.update(),e===n.last&&(n.vars.end(n),n.vars.animationLoop||n.pause()),p)r?(n.slides.eq(n.currentSlide).css({opacity:0,zIndex:1}),n.slides.eq(e).css({opacity:1,zIndex:2}),n.wrapup(c)):(n.slides.eq(n.currentSlide).css({zIndex:1}).animate({opacity:0},n.vars.animationSpeed,n.vars.easing),n.slides.eq(e).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing,n.wrapup));else{var c=d?n.slides.filter(":first").height():n.computedW,g,h,S;v?(g=n.vars.itemMargin,S=(n.itemW+g)*n.move*n.animatingTo,h=S>n.limit&&1!==n.visible?n.limit:S):h=0===n.currentSlide&&e===n.count-1&&n.vars.animationLoop&&"next"!==n.direction?u?(n.count+n.cloneOffset)*c:0:n.currentSlide===n.last&&0===e&&n.vars.animationLoop&&"prev"!==n.direction?u?0:(n.count+1)*c:u?(n.count-1-e+n.cloneOffset)*c:(e+n.cloneOffset)*c,n.setProps(h,"",n.vars.animationSpeed),n.transitions?(n.vars.animationLoop&&n.atEnd||(n.animating=!1,n.currentSlide=n.animatingTo),n.container.unbind("webkitTransitionEnd transitionend"),n.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(n.ensureAnimationEnd),n.wrapup(c)}),clearTimeout(n.ensureAnimationEnd),n.ensureAnimationEnd=setTimeout(function(){n.wrapup(c)},n.vars.animationSpeed+100)):n.container.animate(n.args,n.vars.animationSpeed,n.vars.easing,function(){n.wrapup(c)})}n.vars.smoothHeight&&f.smoothHeight(n.vars.animationSpeed)}},n.wrapup=function(e){p||v||(0===n.currentSlide&&n.animatingTo===n.last&&n.vars.animationLoop?n.setProps(e,"jumpEnd"):n.currentSlide===n.last&&0===n.animatingTo&&n.vars.animationLoop&&n.setProps(e,"jumpStart")),n.animating=!1,n.currentSlide=n.animatingTo,n.vars.after(n)},n.animateSlides=function(){!n.animating&&e&&n.flexAnimate(n.getTarget("next"))},n.pause=function(){clearInterval(n.animatedSlides),n.animatedSlides=null,n.playing=!1,n.vars.pausePlay&&f.pausePlay.update("play"),n.syncExists&&f.sync("pause")},n.play=function(){n.playing&&clearInterval(n.animatedSlides),n.animatedSlides=n.animatedSlides||setInterval(n.animateSlides,n.vars.slideshowSpeed),n.started=n.playing=!0,n.vars.pausePlay&&f.pausePlay.update("pause"),n.syncExists&&f.sync("play")},n.stop=function(){n.pause(),n.stopped=!0},n.canAdvance=function(e,t){var a=m?n.pagingCount-1:n.last;return t?!0:m&&n.currentItem===n.count-1&&0===e&&"prev"===n.direction?!0:m&&0===n.currentItem&&e===n.pagingCount-1&&"next"!==n.direction?!1:e!==n.currentSlide||m?n.vars.animationLoop?!0:n.atEnd&&0===n.currentSlide&&e===a&&"next"!==n.direction?!1:n.atEnd&&n.currentSlide===a&&0===e&&"next"===n.direction?!1:!0:!1},n.getTarget=function(e){return n.direction=e,"next"===e?n.currentSlide===n.last?0:n.currentSlide+1:0===n.currentSlide?n.last:n.currentSlide-1},n.setProps=function(e,t,a){var i=function(){var a=e?e:(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo,i=function(){if(v)return"setTouch"===t?e:u&&n.animatingTo===n.last?0:u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:n.animatingTo===n.last?n.limit:a;switch(t){case"setTotal":return u?(n.count-1-n.currentSlide+n.cloneOffset)*e:(n.currentSlide+n.cloneOffset)*e;case"setTouch":return u?e:e;case"jumpEnd":return u?e:n.count*e;case"jumpStart":return u?n.count*e:e;default:return e}}();return-1*i+"px"}();n.transitions&&(i=d?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)",a=void 0!==a?a/1e3+"s":"0s",n.container.css("-"+n.pfx+"-transition-duration",a),n.container.css("transition-duration",a)),n.args[n.prop]=i,(n.transitions||void 0===a)&&n.container.css(n.args),n.container.css("transform",i)},n.setup=function(e){if(p)n.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===e&&(r?n.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+n.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(n.currentSlide).css({opacity:1,zIndex:2}):0==n.vars.fadeFirstSlide?n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).css({opacity:1}):n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing)),n.vars.smoothHeight&&f.smoothHeight();else{var t,a;"init"===e&&(n.viewport=$('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(n).append(n.container),n.cloneCount=0,n.cloneOffset=0,u&&(a=$.makeArray(n.slides).reverse(),n.slides=$(a),n.container.empty().append(n.slides))),n.vars.animationLoop&&!v&&(n.cloneCount=2,n.cloneOffset=1,"init"!==e&&n.container.find(".clone").remove(),n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),n.newSlides=$(n.vars.selector,n),t=u?n.count-1-n.currentSlide+n.cloneOffset:n.currentSlide+n.cloneOffset,d&&!v?(n.container.height(200*(n.count+n.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){n.newSlides.css({display:"block"}),n.doMath(),n.viewport.height(n.h),n.setProps(t*n.h,"init")},"init"===e?100:0)):(n.container.width(200*(n.count+n.cloneCount)+"%"),n.setProps(t*n.computedW,"init"),setTimeout(function(){n.doMath(),n.newSlides.css({width:n.computedW,marginRight:n.computedM,"float":"left",display:"block"}),n.vars.smoothHeight&&f.smoothHeight()},"init"===e?100:0))}v||n.slides.removeClass(i+"active-slide").eq(n.currentSlide).addClass(i+"active-slide"),n.vars.init(n)},n.doMath=function(){var e=n.slides.first(),t=n.vars.itemMargin,a=n.vars.minItems,i=n.vars.maxItems;n.w=void 0===n.viewport?n.width():n.viewport.width(),n.h=e.height(),n.boxPadding=e.outerWidth()-e.width(),v?(n.itemT=n.vars.itemWidth+t,n.itemM=t,n.minW=a?a*n.itemT:n.w,n.maxW=i?i*n.itemT-t:n.w,n.itemW=n.minW>n.w?(n.w-t*(a-1))/a:n.maxW<n.w?(n.w-t*(i-1))/i:n.vars.itemWidth>n.w?n.w:n.vars.itemWidth,n.visible=Math.floor(n.w/n.itemW),n.move=n.vars.move>0&&n.vars.move<n.visible?n.vars.move:n.visible,n.pagingCount=Math.ceil((n.count-n.visible)/n.move+1),n.last=n.pagingCount-1,n.limit=1===n.pagingCount?0:n.vars.itemWidth>n.w?n.itemW*(n.count-1)+t*(n.count-1):(n.itemW+t)*n.count-n.w-t):(n.itemW=n.w,n.itemM=t,n.pagingCount=n.count,n.last=n.count-1),n.computedW=n.itemW-n.boxPadding,n.computedM=n.itemM},n.update=function(e,t){n.doMath(),v||(e<n.currentSlide?n.currentSlide+=1:e<=n.currentSlide&&0!==e&&(n.currentSlide-=1),n.animatingTo=n.currentSlide),n.vars.controlNav&&!n.manualControls&&("add"===t&&!v||n.pagingCount>n.controlNav.length?f.controlNav.update("add"):("remove"===t&&!v||n.pagingCount<n.controlNav.length)&&(v&&n.currentSlide>n.last&&(n.currentSlide-=1,n.animatingTo-=1),f.controlNav.update("remove",n.last))),n.vars.directionNav&&f.directionNav.update()},n.addSlide=function(e,t){var a=$(e);n.count+=1,n.last=n.count-1,d&&u?void 0!==t?n.slides.eq(n.count-t).after(a):n.container.prepend(a):void 0!==t?n.slides.eq(t).before(a):n.container.append(a),n.update(t,"add"),n.slides=$(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.added(n)},n.removeSlide=function(e){var t=isNaN(e)?n.slides.index($(e)):e;n.count-=1,n.last=n.count-1,isNaN(e)?$(e,n.slides).remove():d&&u?n.slides.eq(n.last).remove():n.slides.eq(e).remove(),n.doMath(),n.update(t,"remove"),n.slides=$(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.removed(n)},f.init()},$(window).blur(function(t){e=!1}).focus(function(t){e=!0}),$.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},$.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var t=$(this),a=e.selector?e.selector:".slides > li",n=t.find(a);1===n.length&&e.allowOneSlide===!0||0===n.length?(n.fadeIn(400),e.start&&e.start(t)):void 0===t.data("flexslider")&&new $.flexslider(this,e)});var t=$(this).data("flexslider");switch(e){case"play":t.play();break;case"pause":t.pause();break;case"stop":t.stop();break;case"next":t.flexAnimate(t.getTarget("next"),!0);break;case"prev":case"previous":t.flexAnimate(t.getTarget("prev"),!0);break;default:"number"==typeof e&&t.flexAnimate(e,!0)}}}(jQuery);
//sticky header
jQuery(window).scroll(function($){
  var sticky = jQuery('.header-container');
  var topScroll = jQuery(window).scrollTop();
  if (topScroll >= 168) {
    sticky.addClass('sticky');
  }        
  else{
    sticky.removeClass('sticky');
  }
});
//expanded search box
jQuery(document).ready(function($){
	var submitIcon = $('.searchbox-icon');
	var inputBox = $('.header .form-search #search');
	var searchBox = $('.header #search_mini_form');
	var isOpen = false;
	submitIcon.click(function(){
	  if(isOpen == false){
		  searchBox.addClass('searchbox-open');
		  inputBox.focus();
		  isOpen = true;
	  } else {
		  searchBox.removeClass('searchbox-open');
		  inputBox.focusout();
		  isOpen = false;
	  }
	});  
	submitIcon.mouseup(function(){
	  return false;
	});
	searchBox.mouseup(function(){
	  return false;
	});
	$(document).mouseup(function(){
	  if(isOpen == true){
		  $('.searchbox-icon').css('display','block');
		  submitIcon.click();
	  }
	});
});

function buttonUp(){
	var inputVal = jQuery('.header .form-search #search').val();
	inputVal = jQuery.trim(inputVal).length;
	if(inputVal !== 0){
		jQuery('.searchbox-icon').css('display','none');
	}else {
		jQuery('.header .form-search #search').val('');
		jQuery('.searchbox-icon').css('display','block');
	}
}
jQuery(document).ready(function($){
	//mobile search & cat menu
	$('.searchbox-icon').click(function(){
		$('.nav-container #nav > li:first-child').toggleClass('text-menu');
	});
	//category menu for mobile...
	$('.shop-by-filter span').click(function(){
		$(this).toggleClass('filter-hov');
		$('.col2-left-layout .cat-left').toggleClass('cat-toggle');
	});
	//Customer Address menu for mobile...
	$('.customer-address-index .block-account .block-title').click(function(){
		$('.customer-address-index .block-account .block-content').toggleClass('acc-toggle');
	}); 
	//Customer account Address menu for mobile...
	$('.customer-account-index .block-account .block-title').click(function(){
		$('.customer-account-index .block-account .block-content').toggleClass('acc-toggle');
	});
	//for IE
	//$('input, textarea').placeholder();
	
	//category menu
	var winWidth = $('.container').width();
	//alert(winWidth);
	if(winWidth<=750){
	$('.nav-container #nav > li.parent').click(function(e){
	  $(this).toggleClass('active');
	  $(this).siblings().removeClass('active');
	  $(this).siblings().children('ul').slideUp(0);
	  $(this).children('ul').slideToggle('fast');
	});
	$('.nav-container #nav > li.parent > a').click(function(e){
	  e.preventDefault();
	});
	}else{
		$('.nav-container #nav > li.parent > a').click(function(e){
		  return false;
		});
	}
	// Category Page
	// Product Sale Countdown Timer
	if($('#hh_countdown_timer .clock').length == 1){
		// Set dates.
		var futureDate  = new Date($('#hh_countdown_timer .clock').text());
		var currentDate = new Date($('#hh_countdown_timer .clock').attr('data-current-time'));
		
		// Calculate the difference in seconds between the future and current date
		var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
		
		// Calculate day difference and apply class to .clock for extra digit styling.
		function dayDiff(first, second) {
		  return (second-first)/(1000*60*60*24);
		}
		
		if (dayDiff(currentDate, futureDate) < 100) {
		  $('#hh_countdown_timer .clock').addClass('twoDayDigits');
		} else {
		  $('#hh_countdown_timer .clock').addClass('threeDayDigits');
		}
		
		if(diff < 0) {
		  diff = 0;
		}
				
		clock2 = $('.clock').FlipClock(diff, {
		  clockFace: 'DailyCounter',
		  countdown: true
		});
	}
	
	// Product Details Page JS	
	// Tab
	$('#tabs > .corner-left-top').click(function () {
		$('#tabs > .corner-left-top').removeClass('active-tab');
		$(this).addClass('active-tab');
		$('.tabs-content #tabber > .tabs-list').removeClass('active-tab-content').addClass('no-display');
		$('.tabs-content #tabber > '+$(this).attr('data-tab-content')).addClass('active-tab-content');
		return false;
	});
	// review tab
	if($('.product-review-tab').length > 0){
		$('.product-review-tab').click(function (){
			$('#tabs > .corner-left-top').removeClass('active-tab');
			$('.product-review-title').addClass('active-tab');
			$('.tabs-content #tabber > .tabs-list').removeClass('active-tab-content').addClass('no-display');
			$('.tabs-content #tabber > '+$('.product-review-title').attr('data-tab-content')).addClass('active-tab-content');
			
			var contentPosTop = jQuery(".product-collateral").offset().top-61;
			jQuery('html, body').stop().animate({
				scrollTop:contentPosTop
			}, 1500);
			return false;
		});
	}
	if($('.tabs-content #tabber > li').length > 0){
		/*var maxHeight = 0;
		$('.tabs-content #tabber > li').each(function() {
			if($(this).height() > maxHeight) {
			 maxHeight = $(this).height();  
			}
		});
		if(maxHeight >0){
			$('.tabs-content #tabber > li').css("min-height", maxHeight);
		}*/
		// Active first tab
		$('#tabs > .corner-left-top:first-child').addClass('active-tab');
		$('.tabs-content #tabber > .tabs-list:first-child').addClass('active-tab-content');
	}
	// Size Chart
	if($('.product-view .product-shop .size_chart').length){
		$('.product-view .product-shop .size_chart').fancybox();
	}
	
	if($('.relatedflexslider').length){
		if($('#relatedflexslider').length){
			$('#relatedflexslider').flexslider({
				animation: "slide",
				selector: ".products-grid > li",
				slideshow: false,
				animationLoop: false,
				directionNav: true,
				controlNav: false,
				itemWidth: 350,
				minItems: 1,
				maxItems: 3
			});
		}
		
		if($('#brandrelatedflexslider').length){
			$('#brandrelatedflexslider').flexslider({
				animation: "slide",
				selector: ".products-grid > li",
				slideshow: false,
				animationLoop: false,
				directionNav: true,
				controlNav: false,
				itemWidth: 350,
				minItems: 1,
				maxItems: 3
			});
		}
		
		$('.relatedflexslider .catagory-slider').flexslider({
			animation : "fade",
			selector: ".catagory-slider-slide > li",
			slideshow : false,
			slideshowSpeed: 200,
			animationSpeed: 1500,
			//mousewheel: true,
			touch: true,
			directionNav: false,
			start: function(slider) {
				if(winWidth > 991){
					slider.mouseover(function() {
						slider.manualPause = false;
						slider.play();
					});
					slider.mouseout(function() {
						slider.manualPause = true;
						slider.pause();
					});
				}
			}
		});
	}
	// Product Details Page JS	
  
	//mobile slider
	if(winWidth <= 750){
		var sliderHeight = (($('.main_content > .row .img_wrap:first-child').height() * 2) + 15);
		if(sliderHeight < 100){
			var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			var sigleTielWidth = parseInt(width / 2);
			singleRowHeight = parseInt((279 / 304) * sigleTielWidth);
			//alert(width+'--'+sigleTielWidth+'--'+singleRowHeight);
			var extraHeight = 65;
			if(width < 330){ extraHeight = 54; }
			sliderHeight = ((singleRowHeight * 2) + extraHeight);
		}
		$('.main_content > .row .img_wrap:first-child').css({"margin-top": sliderHeight});
	}else{
		$('.main_content > .row .img_wrap:first-child').css({"margin-top": "0px"});
	}
	
	// eStore product image slider
	if($('.vendorlist-all-index ').length > 0 || $('.catalog-category-view').length > 0 || $('.heavenit-discount-index-index').length){
		bgdmFlexSlider('.catagory-slider');
	}
	
});

//mobile slider
jQuery(window).resize(function(){
	var winWidth = jQuery('.container').width();
	if(winWidth <= 750){
    	var sliderHeight = ((jQuery('.main_content > .row .img_wrap:first-child').height() * 2) + 15);
    	jQuery('.main_content > .row .img_wrap:first-child').css({"margin-top": sliderHeight});
	}else{
		jQuery('.main_content > .row .img_wrap:first-child').css({"margin-top": "0px"});
	}
});
jQuery(window).trigger('resize');


function bgdmFlexSlider(bgdmselector){
	var winWidth = jQuery('.container').width();
	jQuery(bgdmselector).flexslider({
		animation : "fade",
		slideshow : false,
		slideshowSpeed: 200,
		animationSpeed: 1500,
		touch: true,
		//mousewheel: true,
		directionNav: false,
		start: function(slider) {
			if(winWidth > 991){
				slider.mouseover(function() {
					slider.manualPause = false;
					slider.play();
				});
				slider.mouseout(function() {
					slider.manualPause = true;
					slider.pause();
				});
			}
		}
	});
}
/*
* scrollingCarousel 2.0 - jQuery plugin
* Written by Adam Lafene
*
* Copyright (c) 2011 Adam Lafene - www.convergent-evolution.co.uk
*
* Licensed under the terms of the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*   
*	This plugin utilises Corey Dutson's jQuery Plugin template
*	Check it out here:
*		http://wallofscribbles.com/2011/my-jquery-plugin-is-open-season
*/

(function(a){a.fn.scrollingCarousel=function(u,q){if(1<this.length){var v=[];this.each(function(b){v.push(a(this).scrollingCarousel(u,b))});return v}var b=a.extend({},a().scrollingCarousel.defaults,u),r,l;this.Destroy=function(){var b=this;a(b).removeData("scrollingCarousel");b.children(":eq(1)").remove();0<a(this).find("> div").length?(b[0].innerHTML=a(this).find("> div")[0].innerHTML,b.children().each(function(){a(this,b)[0].style.cssText=""})):b.find("li").each(function(){a(this,b)[0].style.cssText= ""});b.children()[0].style.cssText="";b[0].style.cssText="";b.unbind()};this.Update=function(l){b=null;b=a.extend({},a().scrollingCarousel.defaults,l);this.Destroy(!0);return this.Create()};this.Create=function(q,o){if(!a(this).html())return!1;var d=this;d.html();if(!0==a(d).data("scrollingCarousel")&&"pause"!=o)return this;null!=b.beforeCreateFunction&&a.isFunction(b.beforeCreateFunction)&&b.beforeCreateFunction(d,b);var f,h=0,c,p,m,i,n,j={},e=d[0];e.style.paddingLeft="0";e.style.paddingRight="0"; var k=e.offsetWidth;switch(d.children()[0].nodeName.toLowerCase()){case "div":o||(e.innerHTML="<div>"+d[0].innerHTML+"</div>",e.innerHTML+=e.innerHTML);f=d.children("div");m=d.children("div:first").children("div");break;case "ul":o||(e.innerHTML+=e.innerHTML);f=d.find("ul");m=d.find("ul:first > li");break;case "ol":o||(e.innerHTML+=e.innerHTML);f=d.find("ol");m=d.find("ol:first > li");break;default:return console.log("unable to initialise scroller - please ensure contents are either in a UL, an OL or in DIVs"), !1}switch(b.scrollSpeed.toLowerCase()){case "slow":p=1;break;case "fast":p=4;break;default:p=2}var g=0,t=0,s=0;switch(b.scrollerAlignment.toLowerCase()){case "vertical":a(m).each(function(){g+=a(this,d).outerHeight(!0);a(this,d)[0].offsetWidth>s&&(s=a(this,d)[0].offsetWidth)});break;default:a(m).each(function(){g+=a(this,d).outerWidth(!0);a(this,d)[0].offsetHeight>t&&(t=a(this,d)[0].offsetHeight)})}if(!o){"vertical"!=b.scrollerAlignment.toLowerCase()?e.style.height=t+"px":(e.style.width=s+"px",e.style.height= 0<a(e).height()?a(e).height()+"px":a(e).parent().height()+"px",k=e.offsetHeight);if(g>k)m=Math.round(g/100*b.scrollerOffset)-Math.round(k/2),m>g-k&&(m=g-k);else return a(f[1]).remove(),!1;e.style.overflow="hidden";e.style.position="relative";f.each(function(){a(this,d)[0].style.position="absolute";if(b.scrollerAlignment.toLowerCase()!="vertical"){a(this,d)[0].style.top="0";a(this,d)[0].style.width=g+"px"}else{a(this,d)[0].style.left="0";a(this,d)[0].style.height=g+"px";a(this,d)[0].style.width=s+ "px"}a(this).children().each(function(){if(b.scrollerAlignment.toLowerCase()!="vertical")a(this,d)[0].style.cssFloat="left";a(this,d)[0].style.position="static"})});"vertical"!=b.scrollerAlignment.toLowerCase()?(f[0].style.left=0<m?"-"+m+"px":"0",!0==b.looped?f[1].style.left=f[0].offsetLeft-g+"px":(f[1].style.display="none",f[1].style.top="-1000px")):(f[0].style.top=0<m?"-"+m+"px":"0",!0==b.looped?f[1].style.top=f[0].offsetTop-g+"px":(f[1].style.display="none",f[1].style.left="-1000px"));d.mouseenter(function(){j.startCarousel()}); d.mouseleave(function(){j.stopCarousel(true);b.autoScroll==true&&j.autoScroll()});d.mousemove(function(b){var c={x:0,y:0};if(b.pageX||b.pageY){c.x=b.pageX;c.y=b.pageY}else{var a=document.documentElement,d=document.body;c.x=b.clientX+((a.scrollLeft||d.scrollLeft)-(a.clientLeft||0));c.y=b.clientY+((a.scrollTop||d.scrollTop)-(a.clientTop||0))}cursorPosition=c})}j.autoScroll=function(){var a=40;!1!=b.looped&&(l&&(clearInterval(l),l=0),c=c?c:"vertical"!=b.scrollerAlignment.toLowerCase()?parseInt(f[0].style.left): parseInt(f[0].style.top),b.autoScrollSpeed=1E3>b.autoScrollSpeed?1E3:b.autoScrollSpeed,b.autoScrollSpeed/a<k?i=Math.round(k/(b.autoScrollSpeed/a)):(i=1,a=Math.round(b.autoScrollSpeed/k)),l=setInterval(function(){switch(b.autoScrollDirection.toLowerCase()){case "right":case "down":if(c+i>g){c=0;h=h==0?1:0}else c=c+i;break;default:if(c-i<0-(g-k)){c=k;h=h==0?1:0}else c=c-i}if(b.scrollerAlignment.toLowerCase()!="vertical"){f[h].style.left=c+"px";f[h==0?1:0].style.left=c-g+"px"}else{f[h].style.top=c+"px"; f[h==0?1:0].style.top=c-g+"px"}},a))};j.startCarousel=function(){l&&(clearInterval(l),l=0);n="vertical"!=b.scrollerAlignment.toLowerCase()?Math.round(a(e).offset().left+e.offsetWidth/2):Math.round(a(e).offset().top+e.offsetHeight/2);c=c?c:"vertical"!=b.scrollerAlignment.toLowerCase()?parseInt(f[0].style.left):parseInt(f[0].style.top);r=setInterval(function(){var a,d=b.scrollerAlignment.toLowerCase()!="vertical"?cursorPosition.x:cursorPosition.y,e=k/2;a=d<n?n-d:d-n;i=a<Math.ceil(e/100*30)?1:a<Math.ceil(e/ 100*50)?2*p:a<Math.ceil(e/100*70)?3*p:a<Math.ceil(e/100*90)?4*p:6*p;if(d<n)if(c+i>0&&b.looped==false)c=0;else if(c+i>g){c=0;h=h==0?1:0}else c=c+i;else if(d>n)if(c-i<0-(g-k))if(b.looped==false)c=0-(g-k);else{c=k;h=h==0?1:0}else c=c-i;if(b.scrollerAlignment.toLowerCase()!="vertical"){f[h].style.left=c+"px";f[h==0?1:0].style.left=c-g+"px"}else{f[h].style.top=c+"px";f[h==0?1:0].style.top=c-g+"px"}},40)};j.stopCarousel=function(a){if(r&&(clearInterval(r),r=0,a&&!(!1==b.looped||!0==b.autoScroll)&&1<i)){for(var d= 0,a=i;1<a;a--)d+=a;var e="vertical"!=b.scrollerAlignment.toLowerCase()?cursorPosition.x:cursorPosition.y;e<n?c+d>g&&(c-=g,h=0==h?1:0):c-d<0-(g-k)&&(c+=g,h=0==h?1:0);var j=setInterval(function(){if(i>1){c=e<n?c+i:c-i;if(b.scrollerAlignment.toLowerCase()!="vertical"){f[h].style.left=c+"px";f[h==0?1:0].style.left=c-g+"px"}else{f[h].style.top=c+"px";f[h==0?1:0].style.top=c-g+"px"}i--}else clearInterval(j)},50)}};"pause"!=o&&!0==b.autoScroll&&j.autoScroll();switch(o){case "pause":j.stopCarousel();l&&(clearInterval(l), l=0);d.unbind("mouseenter");d.unbind("mouseleave");a(d).data("scrollingCarousel",!1);return;case "play":a("html").mousemove(function(c){var e={x:0,y:0};if(c.pageX||c.pageY)e.x=c.pageX,e.y=c.pageY;else{var f=document.documentElement,g=document.body;e.x=c.clientX+(f.scrollLeft||g.scrollLeft)-(f.clientLeft||0);e.y=c.clientY+(f.scrollTop||g.scrollTop)-(f.clientTop||0)}cursorPosition=e;cursorPosition.x>=d.offset().left&&(cursorPosition.x<=d.offset().left+d[0].offsetWidth&&cursorPosition.y>=d.offset().top&& cursorPosition.y<=d.offset().top+d[0].offsetHeight)&&j.startCarousel();d.mouseenter(function(){j.startCarousel()});d.mouseleave(function(){j.stopCarousel(!0);!0==b.autoScroll&&j.autoScroll()});a(this).unbind("mousemove");!0==b.autoScroll&&j.autoScroll()})}a(d).data("scrollingCarousel",!0);null!=b.afterCreateFunction&&a.isFunction(b.afterCreateFunction)&&b.afterCreateFunction(d,b);return this};this.Pause=function(){this.Create(q,"pause")};this.Play=function(){this.Create(q,"play")};return this.Create(q)}; jQuery.fn.scrollingCarousel.defaults={autoScroll:!1,autoScrollDirection:"left",autoScrollSpeed:1E4,looped:!0,scrollerAlignment:"horizontal",scrollerOffset:0,scrollSpeed:"medium",beforeCreateFunction:null,afterCreateFunction:null}})(jQuery);
/**
 * Seadragon Ajax 0.8.9 (build 64702 on 2011-01-28)
 * http://gallery.expression.microsoft.com/SeadragonAjax
 * This code is distributed under the license agreement at:
 * http://go.microsoft.com/fwlink/?LinkId=164943
 */
(function(h,r,g,N){var l="100%",p=10,w="absolute",u="relative",o="hidden",L=" while executing ",f="function",D="mousewheel",k="px",C="inline-block",F="span",j="0px",B="none",s="div",H="fixed",J="undefined",z=",",n="number",d="",I="string",b=null,a=true,t=.5,c=false;if(!h.Seadragon)h.Seadragon={};var v=h.Seadragon,i=v.Config;(function(){if(i)return;i=v.Config={debugMode:c,animationTime:1.5,blendTime:t,alwaysBlend:c,autoHideControls:a,constrainDuringPan:a,immediateRender:c,logarithmicZoom:a,wrapHorizontal:c,wrapVertical:c,wrapOverlays:c,transformOverlays:c,minZoomDimension:b,minZoomImageRatio:.8,maxZoomPixelRatio:2,visibilityRatio:.8,springStiffness:5,imageLoaderLimit:2,clickTimeThreshold:200,clickDistThreshold:5,zoomPerClick:2,zoomPerScroll:g.pow(2,1/3),zoomPerSecond:2,proxyUrl:b,imagePath:"img/"}})();var x=v.Strings;(function(){var a="Hmm, this doesn't appear to be a valid Deep Zoom Image.";if(x)return;x=v.Strings={Errors:{Failure:"Sorry, but Seadragon Ajax can't run on your browser!\nPlease try using IE 8 or Firefox 3.\n",Dzc:"Sorry, we don't support Deep Zoom Collections!",Dzi:a,Xml:a,Empty:"You asked us to open nothing, so we did just that.",ImageFormat:"Sorry, we don't support {0}-based Deep Zoom Images.",Security:"It looks like a security restriction stopped us from loading this Deep Zoom Image.",Status:"This space unintentionally left blank ({0} {1}).",Unknown:"Whoops, something inexplicably went wrong. Sorry!"},Messages:{Loading:"Loading..."},Tooltips:{FullPage:"Toggle full page",Home:"Go home",ZoomIn:"Zoom in (you can also use your mouse's scroll wheel)",ZoomOut:"Zoom out (you can also use your mouse's scroll wheel)"}};x.getString=function(f){for(var c=f.split("."),a=x,b=0;b<c.length;b++)a=a[c[b]]||{};if(typeof a!=I)a=d;var e=arguments;return a.replace(/\{\d+\}/g,function(b){var a=parseInt(b.match(/\d+/))+1;return a<e.length?e[a]:d})};x.setString=function(e,d){for(var c=e.split("."),b=x,a=0;a<c.length-1;a++){if(!b[c[a]])b[c[a]]={};b=b[c[a]]}b[c[a]]=d}})();var q=function(){this.log=function(c,d){var a=h.console||{},b=i.debugMode;if(b&&a.log)a.log(c);else b&&d&&alert(c)};this.error=function(b,d){var c=h.console||{},a=i.debugMode;if(a&&c.error)c.error(b);else a&&alert(b);if(a)throw d||new Error(b)};this.fail=function(a){alert(x.getString("Errors.Failure"));throw new Error(a)}};q=v.Debug=new q;var U=v.Profiler=function(){var d=this,o=d,f=c,e=0,h=b,l=b,j=Infinity,g=0,i=0,n=Infinity,k=0,m=0;d.getAvgUpdateTime=function(){return g};d.getMinUpdateTime=function(){return j};d.getMaxUpdateTime=function(){return i};d.getAvgIdleTime=function(){return k};d.getMinIdleTime=function(){return n};d.getMaxIdleTime=function(){return m};d.isMidUpdate=function(){return f};d.getNumUpdates=function(){return e};d.beginUpdate=function(){f&&o.endUpdate();f=a;h=(new Date).getTime();if(e<1)return;var b=h-l;k=(k*(e-1)+b)/e;if(b<n)n=b;if(b>m)m=b};d.endUpdate=function(){if(!f)return;l=(new Date).getTime();f=c;var a=l-h;e++;g=(g*(e-1)+a)/e;if(a<j)j=a;if(a>i)i=a};d.clearProfile=function(){f=c;e=0;h=b;l=b;j=Infinity;g=0;i=0;n=Infinity;k=0;m=0}},m=v.Point;(function(){if(m)return;m=v.Point=function(a,b){this.x=typeof a==n?a:0;this.y=typeof b==n?b:0};var a=m.prototype;a.plus=function(a){return new m(this.x+a.x,this.y+a.y)};a.minus=function(a){return new m(this.x-a.x,this.y-a.y)};a.times=function(a){return new m(this.x*a,this.y*a)};a.divide=function(a){return new m(this.x/a,this.y/a)};a.negate=function(){return new m(-this.x,-this.y)};a.distanceTo=function(a){return g.sqrt(g.pow(this.x-a.x,2)+g.pow(this.y-a.y,2))};a.apply=function(a){return new m(a(this.x),a(this.y))};a.equals=function(a){return a instanceof m&&this.x===a.x&&this.y===a.y};a.toString=function(){return "("+this.x+z+this.y+")"}})();var y=v.Rect;(function(){if(y)return;y=v.Rect=function(d,e,c,b){var a=this;a.x=typeof d==n?d:0;a.y=typeof e==n?e:0;a.width=typeof c==n?c:0;a.height=typeof b==n?b:0};var a=y.prototype;a.getAspectRatio=function(){return this.width/this.height};a.getTopLeft=function(){return new m(this.x,this.y)};a.getBottomRight=function(){var a=this;return new m(a.x+a.width,a.y+a.height)};a.getCenter=function(){var a=this;return new m(a.x+a.width/2,a.y+a.height/2)};a.getSize=function(){return new m(this.width,this.height)};a.equals=function(a){var b=this;return a instanceof y&&b.x===a.x&&b.y===a.y&&b.width===a.width&&b.height===a.height};a.toString=function(){var a=this;return "["+a.x+z+a.y+z+a.width+"x"+a.height+"]"}})();var Q=v.Spring=function(j){var c=this,d=typeof j==n?j:0,e=d,b=d,a=(new Date).getTime(),h=a,f=a;function k(b){var a=i.springStiffness;return (1-g.exp(-b*a))/(1-g.exp(-a))}c.getCurrent=function(){return d};c.getTarget=function(){return b};c.resetTo=function(c){b=c;f=a;e=b;h=f};c.springTo=function(c){e=d;h=a;b=c;f=h+1e3*i.animationTime};c.shiftBy=function(a){e+=a;b+=a};c.update=function(){a=(new Date).getTime();d=a>=f?b:e+(b-e)*k((a-h)/(f-h))}},A=v.Browser={UNKNOWN:0,IE:1,FIREFOX:2,SAFARI:3,CHROME:4,OPERA:5},e=function(){var t="DOMMouseScroll",l=this,o=l,x=["Msxml2.XMLHTTP","Msxml3.XMLHTTP","Microsoft.XMLHTTP"],z={bmp:c,jpeg:a,jpg:a,png:a,tif:c,wdp:c},u=A.UNKNOWN,p=0,v=c,y={};(function(){var d=navigator.appName,o=navigator.appVersion,a=navigator.userAgent;if(d=="Microsoft Internet Explorer"&&!!h.attachEvent&&!!h.ActiveXObject){var i=a.indexOf("MSIE");u=A.IE;p=parseFloat(a.substring(i+5,a.indexOf(";",i)));var j=r.documentMode;if(typeof j!==J)p=j}else if(d=="Netscape"&&!!h.addEventListener){var g=a.indexOf("Firefox"),b=a.indexOf("Safari"),l=a.indexOf("Chrome");if(g>=0){u=A.FIREFOX;p=parseFloat(a.substring(g+8))}else if(b>=0){var n=a.substring(0,b).lastIndexOf("/");u=l>=0?A.CHROME:A.SAFARI;p=parseFloat(a.substring(n+1,b))}}else if(d=="Opera"&&!!h.opera&&!!h.attachEvent){u=A.OPERA;p=parseFloat(o)}for(var m=h.location.search.substring(1),k=m.split("&"),f=0;f<k.length;f++){var c=k[f],e=c.indexOf("=");if(e>0)y[c.substring(0,e)]=decodeURIComponent(c.substring(e+1))}v=u==A.IE&&p<9||u==A.CHROME&&p<2})();function w(a,b){if(b&&a!=r.body)return r.body;else return a.offsetParent}l.getBrowser=function(){return u};l.getBrowserVersion=function(){return p};l.getElement=function(a){if(typeof a==I)a=r.getElementById(a);return a};l.getElementPosition=function(a){var a=o.getElement(a),b=new m,c=o.getElementStyle(a).position==H,d=w(a,c);while(d){b.x+=a.offsetLeft;b.y+=a.offsetTop;if(c)b=b.plus(o.getPageScroll());a=d;c=o.getElementStyle(a).position==H;d=w(a,c)}return b};l.getElementSize=function(a){var a=o.getElement(a);return new m(a.clientWidth,a.clientHeight)};l.getElementStyle=function(a){var a=o.getElement(a);if(a.currentStyle)return a.currentStyle;else if(h.getComputedStyle)return h.getComputedStyle(a,d);else q.fail("Unknown element style, no known technique.")};l.getEvent=function(a){return a?a:h.event};l.getMousePosition=function(a){var a=o.getEvent(a),b=new m;if(a.type==t&&u==A.FIREFOX&&p<3){b.x=a.screenX;b.y=a.screenY}else if(typeof a.pageX==n){b.x=a.pageX;b.y=a.pageY}else if(typeof a.clientX==n){b.x=a.clientX+r.body.scrollLeft+r.documentElement.scrollLeft;b.y=a.clientY+r.body.scrollTop+r.documentElement.scrollTop}else q.fail("Unknown event mouse position, no known technique.");return b};l.getMouseScroll=function(b){var b=o.getEvent(b),a=0;if(typeof b.wheelDelta==n)a=b.wheelDelta;else if(typeof b.detail==n)a=b.detail*-1;else q.fail("Unknown event mouse scroll, no known technique.");return a?a/g.abs(a):0};l.getPageScroll=function(){var a=new m,b=r.documentElement||{},c=r.body||{};if(typeof h.pageXOffset==n){a.x=h.pageXOffset;a.y=h.pageYOffset}else if(c.scrollLeft||c.scrollTop){a.x=c.scrollLeft;a.y=c.scrollTop}else if(b.scrollLeft||b.scrollTop){a.x=b.scrollLeft;a.y=b.scrollTop}return a};l.getWindowSize=function(){var a=new m,b=r.documentElement||{},c=r.body||{};if(typeof h.innerWidth==n){a.x=h.innerWidth;a.y=h.innerHeight}else if(b.clientWidth||b.clientHeight){a.x=b.clientWidth;a.y=b.clientHeight}else if(c.clientWidth||c.clientHeight){a.x=c.clientWidth;a.y=c.clientHeight}else q.fail("Unknown window size, no known technique.");return a};l.imageFormatSupported=function(a){var a=a?a:d;return !!z[a.toLowerCase()]};l.makeCenteredNode=function(h){var b="border:none; margin:0px; padding:0px;",h=e.getElement(h),c=o.makeNeutralElement(s),a=[];a.push('<div style="display:table; height:100%; width:100%;');a.push(b);a.push('#position:relative; overflow:hidden; text-align:left;">');a.push('<div style="#position:absolute; #top:50%; width:100%; ');a.push(b);a.push('display:table-cell; vertical-align:middle;">');a.push('<div style="#position:relative; #top:-50%; width:100%; ');a.push(b);a.push('text-align:center;"></div></div></div>');c.innerHTML=a.join(d);c=c.firstChild;var g=c,f=c.getElementsByTagName(s);while(f.length>0){g=f[0];f=g.getElementsByTagName(s)}g.appendChild(h);return c};l.makeNeutralElement=function(c){var b=r.createElement(c),a=b.style;a.background="transparent none";a.border=B;a.margin=j;a.padding=j;a.position="static";return b};l.makeTransparentImage=function(d){var c=o.makeNeutralElement("img"),a=b;if(u==A.IE&&p<7){a=o.makeNeutralElement(F);a.style.display=C;c.onload=function(){a.style.width=a.style.width||c.width+k;a.style.height=a.style.height||c.height+k;c.onload=b;c=b};c.src=d;a.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+d+"', sizingMethod='scale')"}else{a=c;a.src=d}return a};l.setElementOpacity=function(b,a,f){var b=o.getElement(b);if(f&&v)a=g.round(a);if(a<1)b.style.opacity=a;else b.style.opacity=d;var c=b.style.filter||d;b.style.filter=c.replace(/[\s]*alpha\(.*?\)[\s]*/g,d);if(a>=1)return;var e=g.round(100*a),h=" alpha(opacity="+e+") ";b.style.filter+=h};l.addEvent=function(a,c,d,b){var a=o.getElement(a);if(a.addEventListener){c==D&&a.addEventListener(t,d,b);a.addEventListener(c,d,b)}else if(a.attachEvent){a.attachEvent("on"+c,d);b&&a.setCapture&&a.setCapture()}else q.fail("Unable to attach event handler, no known technique.")};l.removeEvent=function(a,c,d,b){var a=o.getElement(a);if(a.removeEventListener){c==D&&a.removeEventListener(t,d,b);a.removeEventListener(c,d,b)}else if(a.detachEvent){a.detachEvent("on"+c,d);b&&a.releaseCapture&&a.releaseCapture()}else q.fail("Unable to detach event handler, no known technique.")};l.cancelEvent=function(b){var b=o.getEvent(b);b.preventDefault&&b.preventDefault();b.cancel=a;b.returnValue=c};l.stopEvent=function(b){var b=o.getEvent(b);b.stopPropagation&&b.stopPropagation();b.cancelBubble=a};l.createCallback=function(d,c){for(var b=[],a=2;a<arguments.length;a++)b.push(arguments[a]);return function(){for(var e=b.concat([]),a=0;a<arguments.length;a++)e.push(arguments[a]);return c.apply(d,e)}};l.getUrlParameter=function(c){var a=y[c];return a?a:b};l.makeAjaxRequest=function(j,d){var c=typeof d==f,a=b;if(c)var l=d,d=function(){h.setTimeout(e.createCallback(b,l,a),1)};if(h.ActiveXObject)for(var k=0;k<x.length;k++)try{a=new ActiveXObject(x[k]);break}catch(g){continue}else if(h.XMLHttpRequest)a=new XMLHttpRequest;!a&&q.fail("Browser doesn't support XMLHttpRequest.");if(i.proxyUrl)j=i.proxyUrl+j;if(c)a.onreadystatechange=function(){if(a.readyState==4){a.onreadystatechange=new Function;d()}};try{a.open("GET",j,c);a.send(b)}catch(g){q.log(g.name+" while making AJAX request: "+g.message);a.onreadystatechange=b;a=b;c&&d()}return c?b:a};l.parseXml=function(e){var d=b;if(h.ActiveXObject)try{d=new ActiveXObject("Microsoft.XMLDOM");d.async=c;d.loadXML(e)}catch(a){q.log(a.name+" while parsing XML (ActiveX): "+a.message)}else if(h.DOMParser)try{var f=new DOMParser;d=f.parseFromString(e,"text/xml")}catch(a){q.log(a.name+" while parsing XML (DOMParser): "+a.message)}else q.fail("Browser doesn't support XML DOM.");return d}};e=v.Utils=new e;var M=v.MouseTracker;(function(){var d="mouseup",j="mousedown";if(M)return;var l=e.getBrowser()==A.IE&&e.getBrowserVersion()<9,o=c,t=c,s={},m=[];function p(a){return e.getMousePosition(a)}function k(b,d){var c=e.getMousePosition(b),a=e.getElementPosition(d);return c.minus(a)}function n(b,a){var d=r.body;while(a&&b!=a&&d!=a)try{a=a.parentNode}catch(e){return c}return b==a}function u(){o=a}function w(){o=c}(function(){if(l){e.addEvent(r,j,u,c);e.addEvent(r,d,w,c)}else{e.addEvent(h,j,u,a);e.addEvent(h,d,w,a)}})();M=v.MouseTracker=function(u){var w="mousemove",z="mouseout",y="mouseover",x=this,v=x,H=b,M=g.random(),u=e.getElement(u),F=c,A=c,C=c,E=c,G=b,O=b,N=b;x.target=u;x.enterHandler=b;x.exitHandler=b;x.pressHandler=b;x.releaseHandler=b;x.clickHandler=b;x.dragHandler=b;x.scrollHandler=b;function X(){if(!F){e.addEvent(u,y,K,c);e.addEvent(u,z,L,c);e.addEvent(u,j,U,c);e.addEvent(u,d,B,c);e.addEvent(u,D,R,c);e.addEvent(u,"click",T,c);F=a;s[M]=H}}function Z(){if(F){e.removeEvent(u,y,K,c);e.removeEvent(u,z,L,c);e.removeEvent(u,j,U,c);e.removeEvent(u,d,B,c);e.removeEvent(u,D,R,c);e.removeEvent(u,"click",T,c);I();F=c;delete s[M]}}function Y(){if(!A){if(l){e.removeEvent(u,d,B,c);e.addEvent(u,d,V,a);e.addEvent(u,w,Q,a)}else{e.addEvent(h,d,P,a);e.addEvent(h,w,J,a)}A=a}}function I(){if(A){if(l){e.removeEvent(u,w,Q,a);e.removeEvent(u,d,V,a);e.addEvent(u,d,B,c)}else{e.removeEvent(h,w,J,a);e.removeEvent(h,d,P,a)}A=c}}function S(c,d){var b=s;for(var a in b)b.hasOwnProperty(a)&&M!=a&&b[a][c](d)}function ab(){return E}function K(b){var b=e.getEvent(b);l&&A&&!n(b.srcElement,u)&&S("onMouseOver",b);var g=b.target?b.target:b.srcElement,d=b.relatedTarget?b.relatedTarget:b.fromElement;if(!n(u,g)||n(u,d))return;E=a;if(typeof v.enterHandler==f)try{v.enterHandler(v,k(b,u),C,o)}catch(c){q.error(c.name+" while executing enter handler: "+c.message,c)}}function L(a){var a=e.getEvent(a);l&&A&&!n(a.srcElement,u)&&S("onMouseOut",a);var d=a.target?a.target:a.srcElement,g=a.relatedTarget?a.relatedTarget:a.toElement;if(!n(u,d)||n(u,g))return;E=c;if(typeof v.exitHandler==f)try{v.exitHandler(v,k(a,u),C,o)}catch(b){q.error(b.name+" while executing exit handler: "+b.message,b)}}function U(b){var b=e.getEvent(b);if(b.button==2)return;C=a;G=p(b);N=G;O=(new Date).getTime();if(typeof v.pressHandler==f)try{v.pressHandler(v,k(b,u))}catch(c){q.error(c.name+" while executing press handler: "+c.message,c)}(v.pressHandler||v.dragHandler)&&e.cancelEvent(b);if(!l||!t){Y();t=a;m=[H]}else l&&m.push(H)}function B(a){var a=e.getEvent(a),g=C,d=E;if(a.button==2)return;C=c;if(typeof v.releaseHandler==f)try{v.releaseHandler(v,k(a,u),g,d)}catch(b){q.error(b.name+" while executing release handler: "+b.message,b)}g&&d&&W(a)}function V(a){var a=e.getEvent(a);if(a.button==2)return;for(var b=0;b<m.length;b++){var d=m[b];!d.hasMouse()&&d.onMouseUp(a)}I();t=c;a.srcElement.fireEvent("on"+a.type,r.createEventObject(a));e.stopEvent(a)}function P(a){!E&&B(a);I()}function T(a){v.clickHandler&&e.cancelEvent(a)}function W(a){var a=e.getEvent(a);if(a.button==2)return;var h=(new Date).getTime()-O,d=p(a),c=N.distanceTo(d),g=h<=i.clickTimeThreshold&&c<=i.clickDistThreshold;if(typeof v.clickHandler==f)try{v.clickHandler(v,k(a,u),g,a.shiftKey)}catch(b){q.error(b.name+" while executing click handler: "+b.message,b)}}function J(a){var a=e.getEvent(a),c=p(a),d=c.minus(G);G=c;if(typeof v.dragHandler==f){try{v.dragHandler(v,k(a,u),d,a.shiftKey)}catch(b){q.error(b.name+" while executing drag handler: "+b.message,b)}e.cancelEvent(a)}}function Q(b){for(var a=0;a<m.length;a++)m[a].onMouseMove(b);e.stopEvent(b)}function R(a){var a=e.getEvent(a),c=e.getMouseScroll(a);if(typeof v.scrollHandler==f){if(c)try{v.scrollHandler(v,k(a,u),c,a.shiftKey)}catch(b){q.error(b.name+" while executing scroll handler: "+b.message,b)}e.cancelEvent(a)}}(function(){H={hasMouse:ab,onMouseOver:K,onMouseOut:L,onMouseUp:B,onMouseMove:J}})();x.isTracking=function(){return F};x.setTracking=function(a){if(a)X();else Z()}}})();var W=v.EventManager=function(){var b=this,a={};b.addListener=function(b,c){if(typeof c!=f)return;if(!a[b])a[b]=[];a[b].push(c)};b.removeListener=function(e,d){var b=a[e];if(typeof d!=f)return;else if(!b)return;for(var c=0;c<b.length;c++)if(d==b[c]){b.splice(c,1);return}};b.clearListeners=function(b){if(a[b])delete a[b]};b.trigger=function(e){var d=a[e],f=[];if(!d)return;for(var b=1;b<arguments.length;b++)f.push(arguments[b]);for(var b=0;b<d.length;b++)try{d[b].apply(h,f)}catch(c){q.error(c.name+L+e+" handler: "+c.message,c)}}},S;(function(){var d=15000;function g(i,j){var e=b,f=b;function g(a){e.onload=b;e.onabort=b;e.onerror=b;f&&h.clearTimeout(f);h.setTimeout(function(){j(i,a?e:b)},1)}this.start=function(){e=new Image;var j=function(){g(a)},b=function(){g(c)},k=function(){q.log("Image timed out: "+i);g(c)};e.onload=j;e.onabort=b;e.onerror=b;f=h.setTimeout(k,d);e.src=i}}S=v.ImageLoader=function(){var d=0;function h(b,e,c){d--;if(typeof b==f)try{b(c)}catch(a){q.error(a.name+L+e+" callback: "+a.message,a)}}this.loadImage=function(l,f){if(d>=i.imageLoaderLimit)return c;var j=e.createCallback(b,h,f),k=new g(l,j);d++;k.start();return a}}})();var O,R;(function(){var i={REST:0,GROUP:1,HOVER:2,DOWN:3};O=v.Button=function(W,V,S,T,U,y,q,v,x,z){var l=e.makeNeutralElement(F),k=i.GROUP,m=new M(l),H=e.makeTransparentImage(V),r=e.makeTransparentImage(S),s=e.makeTransparentImage(T),t=e.makeTransparentImage(U),y=typeof y==f?y:b,q=typeof q==f?q:b,v=typeof v==f?v:b,x=typeof x==f?x:b,z=typeof z==f?z:b,G=0,P=2e3,D=b,B=c;this.elmt=l;function E(){h.setTimeout(R,20)}function R(){if(B){var c=(new Date).getTime(),d=c-D,b=1-d/P;b=g.min(1,b);b=g.max(0,b);e.setElementOpacity(r,b,a);b>0&&E()}}function N(){B=a;D=(new Date).getTime()+G;h.setTimeout(E,G)}function Q(){B=c;e.setElementOpacity(r,1,a)}function p(a){if(a>=i.GROUP&&k==i.REST){Q();k=i.GROUP}if(a>=i.HOVER&&k==i.GROUP){s.style.visibility=d;k=i.HOVER}if(a>=i.DOWN&&k==i.HOVER){t.style.visibility=d;k=i.DOWN}}function n(a){if(a<=i.HOVER&&k==i.DOWN){t.style.visibility=o;k=i.HOVER}if(a<=i.GROUP&&k==i.HOVER){s.style.visibility=o;k=i.GROUP}if(a<=i.REST&&k==i.GROUP){N();k=i.REST}}function K(d,c,a,b){if(a){p(i.DOWN);x&&x()}else!b&&p(i.HOVER)}function O(d,c,a){n(i.GROUP);a&&z&&z()}function L(){p(i.DOWN);y&&y()}function I(d,c,a,b){if(a&&b){n(i.HOVER);q&&q()}else if(a)n(i.GROUP);else p(i.HOVER)}function J(c,b,a){v&&a&&v()}this.notifyGroupEnter=function(){p(i.GROUP)};this.notifyGroupExit=function(){n(i.REST)};(function(){l.style.display=C;l.style.position=u;l.title=W;l.appendChild(H);l.appendChild(r);l.appendChild(s);l.appendChild(t);var g=H.style,f=r.style,b=s.style,c=t.style;f.position=b.position=c.position=w;f.top=b.top=c.top=j;f.left=b.left=c.left=j;b.visibility=c.visibility=o;if(e.getBrowser()==A.FIREFOX&&e.getBrowserVersion()<3)f.top=b.top=c.top=d;m.enterHandler=K;m.exitHandler=O;m.pressHandler=L;m.releaseHandler=I;m.clickHandler=J;m.setTracking(a);n(i.REST)})()};R=v.ButtonGroup=function(b){var d=e.makeNeutralElement(F),b=b.concat([]),c=new M(d);this.elmt=d;function f(){for(var a=0;a<b.length;a++)b[a].notifyGroupEnter()}function g(f,e,c){if(!c)for(var a=0;a<b.length;a++)b[a].notifyGroupExit()}function h(f,e,d,c){if(!c)for(var a=0;a<b.length;a++)b[a].notifyGroupExit()}this.emulateEnter=function(){f()};this.emulateExit=function(){g()};(function(){d.style.display=C;for(var e=0;e<b.length;e++)d.appendChild(b[e].elmt);c.enterHandler=f;c.exitHandler=g;c.releaseHandler=h;c.setTracking(a)})()}})();var T=v.TileSource=function(d,c,i,e,h,f){var b=this,a=b,j=c/d;b.width=d;b.height=c;b.aspectRatio=d/c;b.dimensions=new m(d,c);b.minLevel=h?h:0;b.maxLevel=f?f:g.ceil(g.log(g.max(d,c))/g.log(2));b.tileSize=i?i:0;b.tileOverlap=e?e:0;b.getLevelScale=function(b){return 1/(1<<a.maxLevel-b)};b.getNumTiles=function(e){var b=a.getLevelScale(e),f=g.ceil(b*d/a.tileSize),h=g.ceil(b*c/a.tileSize);return new m(f,h)};b.getPixelRatio=function(c){var b=a.dimensions.times(a.getLevelScale(c)),d=1/b.x,e=1/b.y;return new m(d,e)};b.getTileAtPoint=function(h,d){var b=a.dimensions.times(a.getLevelScale(h)),c=d.times(b.x),e,f;if(d.x>=0&&d.x<=1)e=g.floor(c.x/a.tileSize);else e=g.ceil(b.x/a.tileSize)*g.floor(c.x/b.x)+g.floor((b.x+c.x%b.x)%b.x/a.tileSize);if(d.y>=0&&d.y<=j)f=g.floor(c.y/a.tileSize);else f=g.ceil(b.y/a.tileSize)*g.floor(c.y/b.y)+g.floor((b.y+c.y%b.y)%b.y/a.tileSize);return new m(e,f)};b.getTileBounds=function(k,f,h){var c=a.dimensions.times(a.getLevelScale(k)),i=f===0?0:a.tileSize*f-a.tileOverlap,j=h===0?0:a.tileSize*h-a.tileOverlap,d=a.tileSize+(f===0?1:2)*a.tileOverlap,e=a.tileSize+(h===0?1:2)*a.tileOverlap;d=g.min(d,c.x-i);e=g.min(e,c.y-j);var b=1/c.x;return new y(i*b,j*b,d*b,e*b)};b.getTileUrl=function(){throw new Error("Method not implemented.")};b.tileExists=function(b,d,e){var c=a.getNumTiles(b);return b>=a.minLevel&&b<=a.maxLevel&&d>=0&&e>=0&&d<c.x&&e<c.y}},P=v.DisplayRect=function(e,f,d,c,b,a){y.apply(this,arguments);this.minLevel=b;this.maxLevel=a};P.prototype=new y;var K=v.DziTileSource=function(m,l,e,j,k,i,f){var b=this;T.apply(b,[m,l,e,j]);var n=b,h={};b.fileFormat=i;b.tileFormat=i;b.displayRects=f;(function(){if(!f)return;for(var c=f.length-1;c>=0;c--)for(var b=f[c],a=b.minLevel;a<=b.maxLevel;a++){if(!h[a])h[a]=[];h[a].push(b)}})();b.getTileUrl=function(a,b,c){return [k,a,"/",b,"_",c,".",i].join(d)};b.tileExists=function(d,p,q){var f=h[d];if(!f||!f.length)return a;for(var i=n.getLevelScale(d),o=f.length-1;o>=0;o--){var b=f[o];if(d<b.minLevel||d>b.maxLevel)continue;var j=b.x*i,k=b.y*i,l=j+b.width*i,m=k+b.height*i;j=g.floor(j/e);k=g.floor(k/e);l=g.ceil(l/e);m=g.ceil(m/e);if(j<=p&&p<l&&k<=q&&q<m)return a}return c}};K.prototype=new T;(function(){var c="Errors.Empty";function a(a){Error.apply(this,arguments);this.message=a}a.prototype=new Error;function i(b){if(!(b instanceof a)){q.error(b.name+" while creating DZI from XML: "+b.message);b=new a(x.getString("Errors.Unknown"))}return b}function d(d){var a=d.split("/"),b=a[a.length-1],c=b.lastIndexOf(".");if(c>-1)a[a.length-1]=b.slice(0,c);return a.join("/")+"_files/"}function j(c,i){if(!c)throw new a(x.getString("Errors.Security"));else if(c.status!==200&&c.status!==0){var f=c.status,h=f==404?"Not Found":c.statusText;throw new a(x.getString("Errors.Status",f,h))}var d=b;if(c.responseXML&&c.responseXML.documentElement)d=c.responseXML;else if(c.responseText)d=e.parseXml(c.responseText);return g(d,i)}function g(d,g){var b="Errors.Dzi";if(!d||!d.documentElement)throw new a(x.getString("Errors.Xml"));var e=d.documentElement,c=e.tagName;if(c=="Image")try{return l(e,g)}catch(f){var h=x.getString(b);throw f instanceof a?f:new a(h)}else if(c=="Collection")throw new a(x.getString("Errors.Dzc"));else if(c=="Error")return k(e);throw new a(x.getString(b))}function l(b,m){var f=b.getAttribute("Format");if(!e.imageFormatSupported(f))throw new a(x.getString("Errors.ImageFormat",f.toUpperCase()));for(var j=b.getElementsByTagName("Size")[0],h=b.getElementsByTagName("DisplayRect"),o=parseInt(j.getAttribute("Width"),p),n=parseInt(j.getAttribute("Height"),p),l=parseInt(b.getAttribute("TileSize")),k=parseInt(b.getAttribute("Overlap")),i=[],g=0;g<h.length;g++){var d=h[g],c=d.getElementsByTagName("Rect")[0];i.push(new P(parseInt(c.getAttribute("X"),p),parseInt(c.getAttribute("Y"),p),parseInt(c.getAttribute("Width"),p),parseInt(c.getAttribute("Height"),p),parseInt(d.getAttribute("MinLevel"),p),parseInt(d.getAttribute("MaxLevel"),p)))}return new K(o,n,l,k,m,f,i)}function k(c){var b=c.getElementsByTagName("Message")[0],d=b.firstChild.nodeValue;throw new a(d)}K.getTilesUrl=d;K.createFromJson=function(q,o){var r=typeof o==f,m,k,g=q;if(!g||!g.url&&!g.tilesUrl)k=new a(x.getString(c));else try{var l=g.displayRects;if(l&&l.length)for(var n=0,s=l.length;n<s;n++){var j=l[n];l[n]=new P(j.x||j[0],j.y||j[1],j.width||j[2],j.height||j[3],j.minLevel||j[4],j.maxLevel||j[5])}m=new K(g.width,g.height,g.tileSize,g.tileOverlap,g.tilesUrl||d(g.url),g.tileFormat,g.displayRects);m.xmlUrl=g.url}catch(p){k=i(p)}if(r)h.setTimeout(e.createCallback(b,o,m,k&&k.message),1);else if(k)throw k;else return m};K.createFromXml=function(l,m,n){var p=typeof n==f,k=b;if(!l){k=x.getString(c);if(p){h.setTimeout(function(){n(b,k)},1);return b}throw new a(k)}var q=d(l);function o(d,e){try{var c=d(e,q);c.xmlUrl=l;return c}catch(a){if(p){k=i(a).message;return b}else throw i(a)}}if(p){if(m)h.setTimeout(function(){var a=o(g,e.parseXml(m));n(a,k)},1);else e.makeAjaxRequest(l,function(b){var a=o(j,b);n(a,k)});return b}if(m)return o(g,e.parseXml(m));else return o(j,e.makeAjaxRequest(l))}})();var X=v.Viewport=function(e,n){var d=this,c=d,e=new m(e.x,e.y),s=n.x/n.y,o=n.y/n.x,h=new Q(0),j=new Q(0),l=new Q(i.logarithmicZoom?0:1),f=b,k=new y(0,0,1,o),q=k.getCenter(),A=g.LN2;function z(){c.goHome(a);c.update()}function u(a){return g.log(a)/A}function w(a){return g.pow(2,a)}function r(c,b,a){return g.min(g.max(c,b),a)}function x(b,a){var d=b.x,f=b.y,c=r(d,a.x,a.x+a.width),e=r(f,a.y,a.y+a.height);return d===c&&f===e?b:new m(c,e)}function p(h){var k=c.getZoom(h),g=1/k,j=g/c.getAspectRatio(),f=i.visibilityRatio,d=(f-t)*g,e=(f-t)*j,a=1-2*d,b=o-2*e;if(a<0){d+=t*a;a=0}if(b<0){e+=t*b;b=0}return new v.Rect(d,e,a,b)}d.getHomeBounds=function(){var b=c.getAspectRatio(),a=new y(k.x,k.y,k.width,k.height);if(s>=b){a.height=k.width/b;a.y=q.y-a.height/2}else{a.width=k.height*b;a.x=q.x-a.width/2}return a};d.getHomeCenter=function(){return q};d.getHomeZoom=function(){var a=s/c.getAspectRatio();return a>=1?1:a};d.getMinCenter=function(a){return p(a).getTopLeft()};d.getMaxCenter=function(a){return p(a).getBottomRight()};d.getMinZoom=function(){var a=c.getHomeZoom();if(i.minZoomDimension)var b=n.x<=n.y?i.minZoomDimension/e.x:i.minZoomDimension/(e.x*o);else var b=i.minZoomImageRatio*a;return g.min(b,a)};d.getMaxZoom=function(){var a=n.x*i.maxZoomPixelRatio/e.x;return g.max(a,c.getHomeZoom())};d.getAspectRatio=function(){return e.x/e.y};d.getContainerSize=function(){return new m(e.x,e.y)};d.getBounds=function(b){var d=c.getCenter(b),a=1/c.getZoom(b),e=a/c.getAspectRatio();return new y(d.x-a/2,d.y-e/2,a,e)};d.getCenter=function(r){var b=new m(h.getCurrent(),j.getCurrent()),g=new m(h.getTarget(),j.getTarget());if(r)return b;else if(!f)return g;var l=c.getZoom(),d=1/l,k=d/c.getAspectRatio(),i=new y(b.x-d/2,b.y-k/2,d,k),q=c.pixelFromPoint(f,a),p=f.minus(i.getTopLeft()).times(e.x/i.width),n=p.minus(q),o=n.divide(e.x*l);return g.plus(o)};d.getZoom=function(b){var a;if(b){a=l.getCurrent();return i.logarithmicZoom?w(a):a}else{a=l.getTarget();return i.logarithmicZoom?w(a):a}};d.applyConstraints=function(g){var h=c.getZoom(),d=r(h,c.getMinZoom(),c.getMaxZoom());h!=d&&c.zoomTo(d,f,g);var b=c.getCenter(),a=x(b,p());if(i.wrapHorizontal)a.x=b.x;if(i.wrapVertical)a.y=b.y;if(!b.equals(a)){var e=1/d,j=e/c.getAspectRatio();c.fitBounds(new y(a.x-t*e,a.y-t*j,e,j),g)}};d.ensureVisible=function(a){c.applyConstraints(a)};d.fitBounds=function(f,j){var h=c.getAspectRatio(),i=f.getCenter(),d=new y(f.x,f.y,f.width,f.height);if(d.getAspectRatio()>=h){d.height=f.width/h;d.y=i.y-d.height/2}else{d.width=f.height*h;d.x=i.x-d.width/2}c.panTo(c.getCenter(a),a);c.zoomTo(c.getZoom(a),b,a);var g=c.getBounds(),m=c.getZoom(),k=1/d.width;if(k==m||d.width==g.width){c.panTo(i,j);return}var l=g.getTopLeft().times(e.x/g.width).minus(d.getTopLeft().times(e.x/d.width)).divide(e.x/g.width-e.x/d.width);c.zoomTo(k,l,j)};d.goHome=function(b){var a=c.getCenter();if(i.wrapHorizontal){a.x=(1+a.x%1)%1;h.resetTo(a.x);h.update()}if(i.wrapVertical){a.y=(o+a.y%o)%o;j.resetTo(a.y);j.update()}c.fitBounds(k,b)};d.panBy=function(b,a){c.panTo(c.getCenter().plus(b),a)};d.panTo=function(b,q){if(q){h.resetTo(b.x);j.resetTo(b.y);return}if(!f){h.springTo(b.x);j.springTo(b.y);return}var l=c.getZoom(),d=1/l,k=d/c.getAspectRatio(),i=new y(h.getCurrent()-d/2,j.getCurrent()-k/2,d,k),p=c.pixelFromPoint(f,a),o=f.minus(i.getTopLeft()).times(e.x/i.width),m=o.minus(p),n=m.divide(e.x*l),g=b.minus(n);h.springTo(g.x);j.springTo(g.y)};d.zoomBy=function(d,b,a){c.zoomTo(c.getZoom()*d,b,a)};d.zoomTo=function(a,c,d){if(d)l.resetTo(i.logarithmicZoom?u(a):a);else l.springTo(i.logarithmicZoom?u(a):a);f=c instanceof m?c:b};d.resize=function(d,h){var f=c.getBounds(),b=f,g=d.x/e.x;e=new m(d.x,d.y);if(h){b.width=f.width*g;b.height=b.width/c.getAspectRatio()}c.fitBounds(b,a)};d.update=function(){var m=h.getCurrent(),n=j.getCurrent(),e=l.getCurrent();if(f)var k=c.pixelFromPoint(f,a);l.update();if(f&&l.getCurrent()!=e){var i=c.pixelFromPoint(f,a),g=i.minus(k),d=c.deltaPointsFromPixels(g,a);h.shiftBy(d.x);j.shiftBy(d.y)}else f=b;h.update();j.update();return h.getCurrent()!=m||j.getCurrent()!=n||l.getCurrent()!=e};d.deltaPixelsFromPoints=function(a,b){return a.times(e.x*c.getZoom(b))};d.deltaPointsFromPixels=function(a,b){return a.divide(e.x*c.getZoom(b))};d.pixelFromPoint=function(d,b){var a=c.getBounds(b);return d.minus(a.getTopLeft()).times(e.x/a.width)};d.pointFromPixel=function(d,b){var a=c.getBounds(b);return d.divide(e.x/a.width).plus(a.getTopLeft())};z()},V,E;(function(){var n="progid:DXImageTransform.Microsoft.Matrix(",j=" when it's not yet loaded.",h="Attempting to draw tile ",W=100,G=t,u=e.getBrowser(),P=e.getBrowserVersion(),bb=navigator.userAgent,R=!!r.createElement("canvas").getContext,T=r.documentElement||{},H=T.style||{},C=c,K=["msTransform","WebkitTransform","MozTransform"],f,B;while(f=K.shift())if(typeof H[f]!==J){C=a;B=/webkit/i.test(f);break}var X="-webkit-transform",L="WebkitTransition",Z=typeof H[L]!==J,O="progid:DXImageTransform.Microsoft.Matrix",Y=new RegExp(O+"\\(.*?\\)","g"),ab=function(){try{return u==A.IE&&!!r.documentElement.filters}catch(a){return c}}(),Q=u==A.SAFARI&&P<4||u==A.CHROME,p=R&&!Q,F=!p&&C,I=c,M=typeof r.documentMode!==J?"bicubic":"nearest-neighbor";function o(f,h,i,d,e,g){var a=this;a.level=f;a.x=h;a.y=i;a.bounds=d;a.exists=e;a.url=g;a.elmt=b;a.image=b;a.loaded=c;a.loading=c;a.style=b;a.position=b;a.size=b;a.blendStart=b;a.opacity=b;a.distance=b;a.visibility=b;a.beingDrawn=c;a.lastDrawnTime=0;a.lastTouchTime=0}o.prototype.toString=function(){return this.level+"/"+this.x+"_"+this.y};o.prototype.drawHTML=function(l){var a=this;if(!a.loaded){q.error(h+a.toString()+j);return}if(!a.elmt){a.elmt=e.makeNeutralElement("img");a.elmt.src=a.url;a.style=a.elmt.style;a.style.position=w;a.style.msInterpolationMode=M;if(F)a.style[f+"Origin"]="0px 0px"}var m=a.elmt,r=a.image,c=a.style,b=a.position,i=a.size;m.parentNode!=l&&l.appendChild(m);if(F)c[f]=["matrix(",(i.x/r.width).toFixed(8),",0,0,",(i.y/r.height).toFixed(8),z,b.x.toFixed(8),B?z:"px,",b.y.toFixed(8),B?")":"px)"].join(d);else if(I){var p=l.clientWidth,o=l.clientHeight;c.width=p+k;c.height=o+k;c.filter=[n,"M11=",(i.x/p).toFixed(8),",M22=",(i.y/o).toFixed(8),",Dx=",b.x.toFixed(8),",Dy=",b.y.toFixed(8),")"].join(d)}else{b=b.apply(g.floor);i=i.apply(g.ceil);c.left=b.x+k;c.top=b.y+k;c.width=i.x+k;c.height=i.y+k}e.setElementOpacity(m,a.opacity)};o.prototype.drawCanvas=function(c){var a=this;if(!a.loaded){q.error(h+a.toString()+j);return}var b=a.position,d=a.size;c.globalAlpha=a.opacity;c.drawImage(a.image,b.x,b.y,d.x,d.y)};o.prototype.unload=function(){var a=this;a.elmt&&a.elmt.parentNode&&a.elmt.parentNode.removeChild(a.elmt);a.elmt=b;a.image=b;a.loaded=c;a.loading=c};E=v.OverlayPlacement={CENTER:0,TOP_LEFT:1,TOP:2,TOP_RIGHT:3,RIGHT:4,BOTTOM_RIGHT:5,BOTTOM:6,BOTTOM_LEFT:7,LEFT:8};function D(a){switch(a){case E.TOP_LEFT:return function(){};case E.TOP:return function(a,b){a.x-=b.x/2};case E.TOP_RIGHT:return function(a,b){a.x-=b.x};case E.RIGHT:return function(a,b){a.x-=b.x;a.y-=b.y/2};case E.BOTTOM_RIGHT:return function(a,b){a.x-=b.x;a.y-=b.y};case E.BOTTOM:return function(a,b){a.x-=b.x/2;a.y-=b.y};case E.BOTTOM_LEFT:return function(a,b){a.y-=b.y};case E.LEFT:return function(a,b){a.y-=b.y/2};case E.CENTER:default:return function(a,b){a.x-=b.x/2;a.y-=b.y/2}}}function x(c,a,d){var b=this;b.elmt=c;b.scales=a instanceof y;b.bounds=new y(a.x,a.y,a.width,a.height);b.adjust=D(a instanceof m?d:E.TOP_LEFT);b.position=new m(a.x,a.y);b.size=new m(a.width,a.height);b.style=c.style;b.naturalSize=new m(c.clientWidth,c.clientHeight)}x.prototype.destroy=function(){var b=this.elmt,a=this.style;b.parentNode&&b.parentNode.removeChild(b);a.top=d;a.left=d;a.position=d;if(this.scales){a.width=d;a.height=d}};x.prototype.drawHTML=function(m){var h=this,c=h.elmt,a=h.style,o=h.scales,j=h.naturalSize;if(c.parentNode!=m){m.appendChild(c);a.position=w;j.x=c.clientWidth;j.y=c.clientHeight}var e=h.position,b=h.size;if(!o){b.x=j.x=j.x||c.clientWidth;b.y=j.y=j.y||c.clientHeight}h.adjust(e,b);if(i.transformOverlays&&C){a[f+"Origin"]="0px 0px";a[f]=["translate(",e.x.toFixed(8),"px,",e.y.toFixed(8),"px)"].join(d);if(o){if(!c.clientWidth)a.width=l;if(!c.clientHeight)a.height=l;a[f]+=[" scale(",(b.x/c.clientWidth).toFixed(8),z,(b.y/c.clientHeight).toFixed(8),")"].join(d)}}else if(i.transformOverlays&&I){var q=m.clientWidth,p=m.clientHeight;a.width=q+k;a.height=p+k;a.filter=[n,"M11=",(b.x/q).toFixed(8),",M22=",(b.y/p).toFixed(8),",Dx=",e.x.toFixed(8),",Dy=",e.y.toFixed(8),")"].join(d)}else{e=e.apply(g.floor);b=b.apply(g.ceil);a.left=e.x+k;a.top=e.y+k;if(o){a.width=b.x+k;a.height=b.y+k}}};x.prototype.update=function(a,b){this.scales=a instanceof y;this.bounds=new y(a.x,a.y,a.width,a.height);this.adjust=D(a instanceof m?b:E.TOP_LEFT)};V=v.Drawer=function(f,C,ib){var h=this,B=e.getElement(ib),z=e.makeNeutralElement(p?"canvas":s),gb=p?z.getContext("2d"):b,T=new S,J=new U,eb=f.minLevel,db=f.maxLevel,fb=f.tileSize,X=f.tileOverlap,H=f.height/f.width,F={},D={},r={},v=[],k={},n=[],bb=[],K=0,L=0,I=c,j=a;h.elmt=B;h.profiler=J;(function(){z.style.width=l;z.style.height=l;z.style.position=w;B.style.textAlign="left";B.appendChild(z)})();function R(a){if(!F[a])F[a]=f.getNumTiles(a);return F[a]}function M(a){if(!D[a])D[a]=f.getPixelRatio(a);return D[a]}function hb(a,b,c,l,d,e){if(!r[a])r[a]={};if(!r[a][b])r[a][b]={};if(!r[a][b][c]){var g=(d+b%d)%d,h=(e+c%e)%e,i=f.getTileBounds(a,g,h),k=f.tileExists(a,g,h),m=f.getTileUrl(a,g,h);i.x+=1*(b-g)/d;i.y+=H*(c-h)/e;r[a][b][c]=new o(a,b,c,i,k,m)}var j=r[a][b][c];j.lastTouchTime=l;return j}function cb(a,c){a.loading=T.loadImage(a.url,e.createCallback(b,Z,a,c))}function Z(d,s,n){d.loading=c;if(I){q.error("Tile load callback in middle of drawing routine.");return}else if(!n){q.log("Tile "+d+" failed to load: "+d.url);d.exists=c;return}else if(s<L){q.log("Ignoring tile "+d+" loaded before reset: "+d.url);return}d.loaded=a;d.image=n;var k=v.length;if(v.length>=W){for(var r=g.ceil(g.log(fb)/g.log(2)),e=b,i=-1,h=v.length-1;h>=0;h--){var f=v[h];if(f.level<=r||f.beingDrawn)continue;else if(!e){e=f;i=h;continue}var m=f.lastTouchTime,l=e.lastTouchTime,p=f.level,o=e.level;if(m<l||m==l&&p>o){e=f;i=h}}if(e&&i>=0){e.unload();k=i}}v[k]=d;j=a}function Y(){r={};v=[]}function y(b,d,g){if(!k[b])return c;if(d===N||g===N){var f=k[b];for(var h in f)if(f.hasOwnProperty(h)){var e=f[h];for(var i in e)if(e.hasOwnProperty(i)&&!e[i])return c}return a}return k[b][d]===N||k[b][d][g]===N||k[b][d][g]===a}function ab(a,b,c){if(b===N||c===N)return y(a+1);else return y(a+1,2*b,2*c)&&y(a+1,2*b,2*c+1)&&y(a+1,2*b+1,2*c)&&y(a+1,2*b+1,2*c+1)}function V(a,b,d,c){if(!k[a]){q.error("Setting coverage for a tile before its level's coverage has been reset: "+a);return}if(!k[a][b])k[a][b]={};k[a][b][d]=c}function O(a){k[a]={}}function P(b,a){if(!b)return a;if(a.visibility>b.visibility)return a;else if(a.visibility==b.visibility)if(a.distance<b.distance)return a;return b}function E(b){for(var a=n.length-1;a>=0;a--)if(n[a].elmt==b)return a;return -1}function Q(){j=c;var Q=z,Fb=gb,gc=B,xb=p,D=bb;while(D.length>0){var e=D.pop();e.beingDrawn=c}var ub=C.getContainerSize(),sb=ub.x,rb=ub.y;if(xb){Q.width=sb;Q.height=rb;Fb.clearRect(0,0,sb,rb)}else Q.innerHTML=d;var qb=C.getBounds(a),s=qb.getTopLeft(),r=qb.getBottomRight();if(!i.wrapHorizontal&&(r.x<0||s.x>1))return;else if(!i.wrapVertical&&(r.y<0||s.y>H))return;var Rb=R,F=M,cc=hb,Yb=ab,I=V,Ob=O,Kb=y,Sb=X,Nb=K,bc=u===A.CHROME,ec=g.abs,hc=g.ceil,jb=g.floor,T=g.log,lb=g.max,k=g.min,q=C.deltaPixelsFromPoints,E=C.pixelFromPoint,pb=f.getTileAtPoint,Tb=i.alwaysBlend,U=1e3*i.blendTime,Lb=i.immediateRender,Y=i.minZoomDimension,fc=i.minImageRatio,W=i.wrapHorizontal,Z=i.wrapVertical,vb=i.wrapOverlays;if(!W){s.x=lb(s.x,0);r.x=k(r.x,1)}if(!Z){s.y=lb(s.y,0);r.y=k(r.y,H)}var S=b,L=c,v=(new Date).getTime(),mb=C.getCenter(),Ib=E(mb),Xb=q(F(0),c).x,nb=Lb?1:Xb;Y=Y||64;var J=lb(eb,jb(T(Y)/T(2))),Wb=q(F(0),a).x,tb=k(db,jb(T(Wb/G)/T(2)));J=k(J,tb);for(var h=tb;h>=J;h--){var zb=c,ob=q(F(h),a).x;if(!L&&ob>=G||h==J){zb=a;L=a}else if(!L)continue;Ob(h);var Pb=k(1,(ob-t)/t),Jb=q(F(h),c).x,Mb=nb/ec(nb-Jb),Hb=pb(h,s),w=pb(h,r),Eb=Rb(h),Ab=Eb.x,Bb=Eb.y;if(!W)w.x=k(w.x,Ab-1);if(!Z)w.y=k(w.y,Bb-1);for(var l=Hb.x;l<=w.x;l++)for(var o=Hb.y;o<=w.y;o++){var e=cc(h,l,o,v,Ab,Bb),fb=zb;I(h,l,o,c);if(!e.exists)continue;if(L&&!fb)if(Yb(h,l,o))I(h,l,o,a);else fb=a;if(!fb)continue;var Db=e.bounds.getTopLeft(),wb=e.bounds.getSize(),Zb=E(Db,a),kb=q(wb,a);if(!Sb)kb=kb.plus(new m(1,1));var ac=E(Db,c),dc=q(wb,c),Vb=ac.plus(dc.divide(2)),Qb=Ib.distanceTo(Vb);e.position=Zb;e.size=kb;e.distance=Qb;e.visibility=Mb;if(e.loaded){if(!e.blendStart)e.blendStart=v;var yb=v-e.blendStart,ib=U===0?1:k(1,yb/U);if(Tb)ib*=Pb;e.opacity=ib;D.push(e);if(ib>=1){I(h,l,o,a);bc&&e.lastDrawnTime!==Nb&&I(h,l,o,c)}else if(yb<U)j=a;e.lastDrawnTime=v}else if(!e.loading)S=P(S,e)}if(Kb(h))break}for(var x=D.length-1;x>=0;x--){var e=D[x];if(xb)e.drawCanvas(Fb);else e.drawHTML(Q);e.beingDrawn=a}for(var Ub=n.length,x=0;x<Ub;x++){var N=n[x],Gb=N.bounds,Cb=Gb.getTopLeft();if(vb&&W)Cb.x+=jb(mb.x);if(vb&&Z);N.position=E(Cb,a);N.size=q(Gb.getSize(),a);N.drawHTML(B)}if(S){cb(S,v);j=a}K=v}h.addOverlay=function(b,d,c){var b=e.getElement(b);if(E(b)>=0)return;n.push(new x(b,d,c));j=a};h.updateOverlay=function(b,f,d){var b=e.getElement(b),c=E(b);if(c>=0){n[c].update(f,d);j=a}};h.removeOverlay=function(c){var c=e.getElement(c),b=E(c);if(b>=0){n[b].destroy();n.splice(b,1);j=a}};h.clearOverlays=function(){while(n.length>0){n.pop().destroy();j=a}};h.needsUpdate=function(){return j};h.numTilesLoaded=function(){return v.length};h.reset=function(){Y();L=(new Date).getTime();j=a};h.update=function(){J.beginUpdate();I=a;Q();I=c;J.endUpdate()};h.idle=function(){}}})();var Y,G;(function(){var L="----seadragon----",Q=e.getBrowser();G=v.ControlAnchor={NONE:0,TOP_LEFT:1,TOP_RIGHT:2,BOTTOM_RIGHT:3,BOTTOM_LEFT:4};function P(c,b,a){if(b==G.TOP_RIGHT||b==G.BOTTOM_RIGHT)a.insertBefore(c,a.firstChild);else a.appendChild(c)}function f(f,c,d){var b=this,a=e.makeNeutralElement(F);b.elmt=f;b.anchor=c;b.container=d;b.wrapper=a;a.style.display=C;a.appendChild(f);if(c==G.NONE)a.style.width=a.style.height=l;P(a,c,d)}f.prototype.destroy=function(){var a=this;a.wrapper.removeChild(a.elmt);a.container.removeChild(a.wrapper)};f.prototype.isVisible=function(){return this.wrapper.style.display!=B};f.prototype.setVisible=function(a){this.wrapper.style.display=a?C:B};f.prototype.setOpacity=function(b){if(this.elmt[L]&&Q==A.IE)e.setElementOpacity(this.elmt,b,a);else e.setElementOpacity(this.wrapper,b,a)};var k="fullpage",E="home",t="zoomin",n="zoomout",J="_rest.png",y="_grouphover.png",z="_hover.png",D="_pressed.png";function N(d){var j=b,f=c,q=b,l=b;function H(){d.viewport&&d.viewport.goHome()}function w(){d.setFullPage(!d.isFullPage());j.emulateExit();d.viewport&&d.viewport.applyConstraints()}function s(){l=(new Date).getTime();q=i.zoomPerSecond;f=a;o()}function r(){l=(new Date).getTime();q=1/i.zoomPerSecond;f=a;o()}function m(){f=c}function o(){h.setTimeout(F,p)}function F(){if(f&&d.viewport){var a=(new Date).getTime(),c=a-l,b=g.pow(q,c/1e3);d.viewport.zoomBy(b);d.viewport.applyConstraints();l=a;o()}}function v(){if(d.viewport){f=c;d.viewport.zoomBy(i.zoomPerClick/1);d.viewport.applyConstraints()}}function u(){if(d.viewport){f=c;d.viewport.zoomBy(1/i.zoomPerClick);d.viewport.applyConstraints()}}function B(){j.emulateEnter();j.emulateExit()}function e(b,a){return i.imagePath+b+a}var I=new O(x.getString("Tooltips.ZoomIn"),e(t,J),e(t,y),e(t,z),e(t,D),s,m,v,s,m),C=new O(x.getString("Tooltips.ZoomOut"),e(n,J),e(n,y),e(n,z),e(n,D),r,m,u,r,m),G=new O(x.getString("Tooltips.Home"),e(E,J),e(E,y),e(E,z),e(E,D),b,H,b,b,b),A=new O(x.getString("Tooltips.FullPage"),e(k,J),e(k,y),e(k,z),e(k,D),b,w,b,b,b);j=new R([I,C,G,A]);j.elmt[L]=a;d.addEventListener("open",B);return j.elmt}Y=v.Viewer=function(v){var n=this,t=n,P=e.getElement(v),v=e.makeNeutralElement(s),E=e.makeNeutralElement(s),eb=e.makeNeutralElement(s),fb=e.makeNeutralElement(s),db=e.makeNeutralElement(s),cb=e.makeNeutralElement(s),A=b,J=b,k=b,O=b,z=new W,D=new M(E),S=new M(v),y=[],ab=a,ib=b,L=b,kb=1e3,Ab=2e3,ib=b,ab=c,yb=r.body.style.width,wb=r.body.style.height,tb=r.body.style.overflow,ub=r.documentElement.style.overflow,bb=new m(1,1),C=b,R=0,nb=0,qb=b,ob=b,F=c,T=c,Y=c;n.container=P;n.elmt=v;n.source=b;n.drawer=b;n.viewport=b;n.profiler=b;n.tracker=D;function Jb(){var c=E.style,b=v.style,g=eb.style,i=fb.style,f=db.style,e=cb.style;b.width=l;b.height=l;b.position=u;b.left=j;b.top=j;b.textAlign="left";c.width=l;c.height=l;c.overflow=o;c.position=w;c.top=j;c.left=j;g.position=i.position=f.position=e.position=w;g.top=i.top=j;g.left=e.left=j;i.right=f.right=j;e.bottom=f.bottom=j;D.clickHandler=Fb;D.pressHandler=Gb;D.dragHandler=Hb;D.releaseHandler=Db;D.scrollHandler=Eb;D.setTracking(a);L=N(t);L.style.marginRight="4px";L.style.marginBottom="4px";t.addControl(L,G.BOTTOM_RIGHT);S.enterHandler=lb;S.exitHandler=pb;S.releaseHandler=Bb;S.setTracking(a);h.setTimeout(Q,1);v.appendChild(E);v.appendChild(eb);v.appendChild(fb);v.appendChild(db);v.appendChild(cb);P.innerHTML=d;P.appendChild(v)}function Z(f){var a="normal",c=r.createTextNode(f);E.innerHTML=d;E.appendChild(e.makeCenteredNode(c));var b=c.parentNode.style;b.fontFamily="verdana";b.fontSize="13px";b.fontSizeAdjust=B;b.fontStyle=a;b.fontStretch=a;b.fontVariant=a;b.fontWeight=a;b.lineHeight="1em";b.textAlign="center";b.textDecoration=B}function vb(){A&&zb();R=(new Date).getTime();h.setTimeout(function(){R>nb&&Z(x.getString("Messages.Loading"))},2e3);return R}function gb(g,b,f){nb=(new Date).getTime();if(g<R){q.log("Ignoring out-of-date open.");z.trigger("ignore",t);return}else if(!b){Z(f);z.trigger("error",t);return}E.innerHTML=d;C=e.getElementSize(v);if(C.x===0||C.y===0){h.setTimeout(function(){gb(g,b,f)},p);return}A=b;k=new X(C,A.dimensions);J=new V(A,k,E);O=new U;t.source=A;t.viewport=k;t.drawer=J;t.profiler=O;F=c;T=a;rb(Ib);z.trigger("open",t)}function zb(){t.source=A=b;t.viewport=k=b;t.drawer=J=b;t.profiler=O=b;E.innerHTML=d}function rb(c,a){if(F)return h.setTimeout(c,1);var b=(new Date).getTime(),a=a?a:b,d=a+1e3/60,e=g.max(1,d-b);return h.setTimeout(c,e)}function xb(){if(!A)return;O.beginUpdate();var b=e.getElementSize(v);if(!b.equals(C)&&b.x>0&&b.y>0){k.resize(b,a);C=b;z.trigger("resize",t)}var d=k.update();if(!F&&d){z.trigger("animationstart",t);hb()}if(d){J.update();z.trigger("animation",t)}else if(T||J.needsUpdate()){J.update();T=c}else J.idle();if(F&&!d){z.trigger("animationfinish",t);!Y&&Q()}F=d;O.endUpdate()}function Ib(){if(!A)return;var a=(new Date).getTime();xb();rb(arguments.callee,a)}function mb(b){for(var a=y.length-1;a>=0;a--)if(y[a].elmt==b)return a;return -1}function jb(){h.setTimeout(Cb,20)}function Cb(){if(ab){var c=(new Date).getTime(),d=c-ib,a=1-d/Ab;a=g.min(1,a);a=g.max(0,a);for(var b=y.length-1;b>=0;b--)y[b].setOpacity(a);a>0&&jb()}}function hb(){ab=c;for(var a=y.length-1;a>=0;a--)y[a].setOpacity(1)}function Q(){if(!i.autoHideControls)return;ab=a;ib=(new Date).getTime()+kb;h.setTimeout(jb,kb)}function lb(){Y=a;hb()}function pb(e,d,a){if(!a){Y=c;!F&&Q()}}function Bb(e,d,b,a){if(!a){Y=c;!F&&Q()}}function Fb(g,c,e,f){if(k&&e){var b=i.zoomPerClick,d=f?1/b:b;k.zoomBy(d,k.pointFromPixel(c,a));k.applyConstraints()}}function Gb(b,a){if(k){qb=a;ob=k.getCenter()}}function Hb(f,d,e){if(k)if(i.constrainDuringPan){var b=d.minus(qb),c=k.deltaPointsFromPixels(b.negate(),a);k.panTo(ob.plus(c));k.applyConstraints()}else k.panBy(k.deltaPointsFromPixels(e.negate(),a))}function Db(d,c,a){a&&k&&k.applyConstraints()}function Eb(e,b,d){if(k){var c=g.pow(i.zoomPerScroll,d);k.zoomBy(c,k.pointFromPixel(b,a));k.applyConstraints()}}function sb(a){a=e.getEvent(a);a.keyCode===27&&t.setFullPage(c)}n.isOpen=function(){return !!A};n.openDzi=function(a,f){var d=vb(),c=e.createCallback(b,gb,d);switch(typeof a){case I:K.createFromXml(a,f,c);break;default:K.createFromJson(a,c)}};n.openTileSource=function(b){var a=vb();h.setTimeout(function(){gb(a,b)},1)};n.close=function(){if(!A)return;zb()};n.addControl=function(a,d){var a=e.getElement(a);if(mb(a)>=0)return;var c=b;switch(d){case G.TOP_RIGHT:c=fb;a.style.position=u;break;case G.BOTTOM_RIGHT:c=db;a.style.position=u;break;case G.BOTTOM_LEFT:c=cb;a.style.position=u;break;case G.TOP_LEFT:c=eb;a.style.position=u;break;case G.NONE:default:c=v;a.style.position=w}y.push(new f(a,d,c))};n.removeControl=function(b){var b=e.getElement(b),a=mb(b);if(a>=0){y[a].destroy();y.splice(a,1)}};n.clearControls=function(){while(y.length>0)y.pop().destroy()};n.getNavControl=function(){return L};n.isDashboardEnabled=function(){for(var b=y.length-1;b>=0;b--)if(y[b].isVisible())return a;return c};n.isFullPage=function(){return v.parentNode==r.body};n.isMouseNavEnabled=function(){return D.isTracking()};n.isVisible=function(){return v.style.visibility!=o};n.setDashboardEnabled=function(b){for(var a=y.length-1;a>=0;a--)y[a].setVisible(b)};n.setFullPage=function(j){if(j==t.isFullPage())return;var q=r.body,c=q.style,i=r.documentElement.style,f=v.style,h=E.style;if(j){tb=c.overflow;ub=i.overflow;c.overflow=o;i.overflow=o;yb=c.width;wb=c.height;c.width=l;c.height=l;h.backgroundColor="black";h.color="white";f.position=H;f.zIndex="99999999";q.appendChild(v);C=e.getWindowSize();e.addEvent(r,"keydown",sb);lb()}else{c.overflow=tb;i.overflow=ub;c.width=yb;c.height=wb;h.backgroundColor=d;h.color=d;f.position=u;f.zIndex=d;P.appendChild(v);C=e.getElementSize(P);e.removeEvent(r,"keydown",sb);pb()}if(k){var p=k.getBounds();k.resize(C);var n=k.getBounds();if(j)bb=new m(n.width/p.width,n.height/p.height);else{k.update();k.zoomBy(g.max(bb.x,bb.y),b,a)}T=a;z.trigger("resize",t);xb()}};n.setMouseNavEnabled=function(a){D.setTracking(a)};n.setVisible=function(a){v.style.visibility=a?d:o};n.showMessage=function(a,b){if(!b){Z(a);return}h.setTimeout(function(){!t.isOpen()&&Z(a)},b)};n.addEventListener=function(a,b){z.addListener(a,b)};n.removeEventListener=function(a,b){z.removeListener(a,b)};Jb()}})()})(window,document,Math);
// script.aculo.us scriptaculous.js v1.8.3, Thu Oct 08 11:23:33 +0200 2009

// Copyright (c) 2005-2009 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
// For details, see the script.aculo.us web site: http://script.aculo.us/

var Scriptaculous = {
  Version: '1.8.3',
  require: function(libraryName) {
    try{
      // inserting via DOM fails in Safari 2.0, so brute force approach
      document.write('<script type="text/javascript" src="'+libraryName+'"><\/script>');
    } catch(e) {
      // for xhtml+xml served content, fall back to DOM methods
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = libraryName;
      document.getElementsByTagName('head')[0].appendChild(script);
    }
  },
  REQUIRED_PROTOTYPE: '1.6.0.3',
  load: function() {
    function convertVersionString(versionString) {
      var v = versionString.replace(/_.*|\./g, '');
      v = parseInt(v + '0'.times(4-v.length));
      return versionString.indexOf('_') > -1 ? v-1 : v;
    }

    if((typeof Prototype=='undefined') ||
       (typeof Element == 'undefined') ||
       (typeof Element.Methods=='undefined') ||
       (convertVersionString(Prototype.Version) <
        convertVersionString(Scriptaculous.REQUIRED_PROTOTYPE)))
       throw("script.aculo.us requires the Prototype JavaScript framework >= " +
        Scriptaculous.REQUIRED_PROTOTYPE);

    var js = /scriptaculous\.js(\?.*)?$/;
    $$('head script[src]').findAll(function(s) {
      return s.src.match(js);
    }).each(function(s) {
      var path = s.src.replace(js, ''),
      includes = s.src.match(/\?.*load=([a-z,]*)/);
    });
  }
};

Scriptaculous.load();
/*  ProtoShow JavaScript slide show, 
 *	v 0.9 (beta) - 24/02/12
 *  Copyright(c) 2012 David Smith (web: http://www.aheadcreative.com; twitter: @get_dave)
 *
 *  This work is licenced under the Creative Commons Attribution-No Derivative Works 3.0 Unported License. 
 *	http://creativecommons.org/licenses/by-nd/3.0/ 
 *  
 *	For more information on this project visit:
 * 	http://www.protoshow.net
 *	http://www.deepbluesky.com
 *
 *--------------------------------------------------------------------------*/



if(typeof Prototype=='undefined' || typeof Scriptaculous =='undefined') {
	throw("Protoshow.js requires the Prototype & Scriptaculous JavaScript frameworks");
} else {

var protoShow = Class.create({

	initialize: function(element,options) {
		
		// Default options
		this.options = Object.extend({
			selector			: ".slide",					
			interval			: 3000,
			initialSlide		: 1,
			mode				: "forward",
			autoPlay			: true,
			autoRestart			: true,
			transitionType		: "fade",
			transitionTime		: 1.5,
			manTransitionTime	: 0.5,		
			navigation			: true,
			controls			: true,
			stopText			: "Pause",
			playText			: "Play",
			nextText			: "Next",
			previousText		: "Previous",
			captions			: false, 
			pauseOnHover		: false,
			keyboardControls	: true,
			fireEvents			: true,
			progressTimer		: true,
			swipeEvents			: true
			
		}, options || {}); // We use Prototype's Object.extend() to overwrite defaults with user preferences 

		


		// get/set various options
		this.element 			= 	$(element);											// DOM element that contains the slideshow
		this.slides 			= 	this.element.select(this.options.selector);			// Elements that are to be the "Slides"		
		this.slidesLength		=	this.slides.size();		// Total number of Slides
		this.interval 			= 	this.options.interval;	
		this.transitionType		=	this.options.transitionType;
		this.transitionTime		=	this.options.transitionTime;		
		this.manTransitionTime	=	this.options.manTransitionTime;
		this.currentSlideID 	= 	this.options.initialSlide - 1;		
		this.nextSlideID		=	this.currentSlideID + 1;
		this.playText			=	this.options.playText;
		this.nextText			=	this.options.nextText;
		this.previousText		=	this.options.previousText;
		this.stopText			=	this.options.stopText;
		this.mode				= 	this[this.options.mode];							// Get play "mode" (forward, backward, random...etc)
		this.autoPlay			=	this.options.autoPlay;
		this.progressTimer		=	this.options.progressTimer;
		this.showUniqueID		=	element;		// get a unique ID based on the id attr of the show element
		



		// define variables before use
		this.running			=	false;
		this.masterTimer		=	false;
		this.animating			=	false;	// boolean for "animating" status
		this.loopCount			=	0;
		this.slideWidth			=	0;
		this.slideHeight		=	0;
		this.slideIntervals		=	[];
		this.currentSlideEle	=	this.slides[this.currentSlideID];
		this.nextSlideEle		=	this.slides[this.nextSlideID];


		//run some initial setup
		this.setupTransitions(this.options.transitionType);
		this.setupSlides();
		this.setupControls();
		this.setupNavigation();
		this.setupCaptions();
		this.setupKeyboardControls();
		this.setupSwipeEvents();
		this.stopOnHover();

		//this.createTimer();
		this.setupTimer();

		// let's get things going!				
		this.play();
		
	},


	/* DIRECTIONAL CONTROLS
	------------------------------------------------*/

	

	play: function() {
		// Role: Starts the show and initialises master timer
		
		var _this = this;			
		this.running = true;
		this.toggleMasterTimer(true);	
		this.updateControls(true);	
		
		this.fireCustomEvent("protoShow:started");
	},

	stop: function() {
		// Completely stops the show and clears the master timer
		var _this = this;
		
		this.running = false;

		this.toggleMasterTimer(false);
		this.updateControls(false);
		
		this.fireCustomEvent("protoShow:stopped");
	},

	toggleMasterTimer: function(bln) {
		var _this = this;
	
		if (bln) {
			// Check if custom interval has been defined by user as data attribute in HTML
			var slideInterval = (this.slideIntervals[this.currentSlideID]) ? this.slideIntervals[this.currentSlideID] : this.interval;
			this.runProgressTimer();	
			
			// Set Master time which controls progress of show			
			this.masterTimer	=	new PeriodicalExecuter(function(pe) {
			  	_this.mode();		    
			}, slideInterval/1000);
			this.loopCount++;
		} else {
			this.stopProgressTimer();
			_this.masterTimer && _this.masterTimer.stop();
			_this.masterTimer = null;
		}

	},

	forward: function(transTime) {
		// Role: Runs slideshow "forwards"
		
		this.goMaster( this.currentSlideID + 1, transTime, "forward");
	},

	backward: function(transTime) {
		// Role: Runs slideshow "backwards"
				
		this.goMaster( this.currentSlideID - 1, transTime, "backward");	
	},

	next: function() {
		this.forward(this.manTransitionTime);
	},

	previous: function() {
		this.backward(this.manTransitionTime);
	},

	gotoSlide: function(slide,transTime) {
		if (slide === this.currentSlideID) {
			return false;
		}
		this.goMaster( slide, this.manTransitionTime );	
	},

	goMaster: function(next,transTime, direction) {
		// Role: Master function - controls delegation of slide swapping	
		
		var _this = this;

		// First thing's first, we hault the show whatever the circumstances
		this.toggleMasterTimer(false); 

		if(this.isAnimating()) {
			return false;
		}

		// Set the transistion speed to transTime arg (if set) else fallback to standard transitionTime
		var transTime = (transTime) ? transTime : _this.transitionTime;

		

		this.toggleAnimating(true);		
		this.setNextIndex(next);  // set this.nextSlideID correctly		
		
		this.fireCustomEvent("protoShow:transitionStarted",transTime,direction,_this.nextSlideID);
		_this.updateNavigation(_this.currentSlideID, _this.nextSlideID);

		this.transitionType(this.currentSlideEle,this.nextSlideEle, {
			transitionTime		:   transTime,
			transitionFinish	:	function() {	// pass a callback to ensure play can't resume until transition has completed
				_this.toggleAnimating(false);
				_this.currentSlideEle.removeClassName('active-slide');
				_this.nextSlideEle.addClassName('active-slide');
				
				_this.updateCaptions(_this.nextSlideEle);
				_this.fireCustomEvent("protoShow:transitionFinished");
				_this.currentSlideID 	= 	_this.nextSlideID;	// update current slide to be the slide we're just moved to
				_this.currentSlideEle	=	_this.slides[_this.nextSlideID];
				

				if (_this.autoPlay && _this.running ) {
					// if we're autoplaying and we're not explicity stopped
					// otherwise show Master Timer is not permitted to restart itself
					_this.toggleMasterTimer(true);	
				}				
			}
		});		
	},


	/* TRANSITION FUNCTIONS
	------------------------------------------------*/

	fade: function(current,next,opts) {
		// Role: Transition function
		// Type: Fade - fades slides in and out

		var _this = this;

		next.show();
		current.fade({
			duration	: opts.transitionTime,
			afterFinish	: function() {
				return opts.transitionFinish();
			}
		});	
	},

	slide: function(current,next,opts) {
		// Role: Transition function
		// Type: Slider - slides slides across the screen
		var _this = this;			
		
		var leftPos = this.slideWidth * this.nextSlideID; 
		
		
		new Effect.Morph(_this.showEle, {
			style: {
				left: -leftPos + 'px'
			}, 
			duration	: opts.transitionTime,
			afterFinish	: function() {
				return opts.transitionFinish();
			}
		});
	},

	

	/* SETUP METHODS
	------------------------------------------------*/

	setupSlides: function() {		
		var _this = this;

		

		// Get and set user defined custom intervals
		this.slides.each(function(e, index) {	
			

			if (_this.options.transitionType !== "slide") {
				e.hide();		
			}
			var slideInt = e.readAttribute('data-slide-interval');			
			slideInt = (slideInt && slideInt.blank()) ? undefined : slideInt;	// check slideInt is not a blank string

			_this.slideIntervals.push(slideInt);	// push intervals into array for use later
		});		

		// Ensure first slide is visible and has active class
		this.slides[this.currentSlideID].show().addClassName('active-slide');
	},
	
	setupTransitions: function(transType) {
		// Role: Setup basics for transitions
		var _this = this;
		
		if (typeof(transType) == "function") {	// user has defined custom transition function
			// If function then user has passed in custom transition function to be used
			this.transitionType		=	transType;
			this.element.addClassName('transition-custom');
		} else {	// it's a string
			this.transitionType		=	this[transType];			
			this.element.addClassName('transition-' + transType);
			
			if (transType === "slide") {

				this.showWindow 	=	this.element.down('.show').wrap('div', { 'class': 'show-window' });
				this.showEle		=	this.showWindow.down('.show');
				var slideLayout 	= 	this.slides[0].getLayout();
				this.slideWidth  	= 	slideLayout.get('width');
				this.slideHeight 	= 	slideLayout.get('height');


				this.showWindow.setStyle({
					width	: 	_this.slideWidth + "px",
				  	height	: 	_this.slideHeight + "px"
				});
			}		
		}	
	},

	setupControls: function() {
		// Role: Setup controls

		var _this = this;

		if (!this.options.controls) {
			return false;
		}
	
		this.protoControls	=  this.element.down('.proto-controls');    // Stop/Forward/Back buttons

		if (typeof this.protoControls==="undefined" ) {

			var controlsEle		 =	new Element('ol', { 'class': 'proto-controls'});
			var controlsTemplate = 	new Template('<li class="#{htmlclass}"><a href="javascript:void(0)" title="#{title}">#{text}</a></li>');
			
			var startStop		 = 	controlsTemplate.evaluate({
										htmlclass: "proto-control start-stop",
										text:  this.playText,
										title: "Pause the show"
									});
			var backward		 = 	controlsTemplate.evaluate({
										htmlclass: "proto-control backward",
										text:  this.previousText,
										title: "Go to Previous slide and play backwards"
									});
			var forward			 = 	controlsTemplate.evaluate({
										htmlclass: "proto-control forward",
										text:  this.nextText,
										title: "Go to Next slide and play forwards"
									});
			
			// Build a DOM fragment from all the above
			controlsEle.insert(startStop,'bottom').insert(backward,'bottom').insert(forward,'bottom');
			this.element.insert(controlsEle,'bottom');	// add into DOM		
			this.protoControls = $(controlsEle);	// extend the DOM fragment		
		} 

		// If the controls already exists in the DOM
		this.controlStartStop    	=	this.protoControls.down('.start-stop');
		this.controlForward      	=	this.protoControls.down('.forward');
		this.controlBackward     	=	this.protoControls.down('.backward');


		// define "lock" variable to stop abuse of controls
		var handlingClick	= false;

		this.protoControls.on("click", ".proto-control", function(event, element) {
			event.stop();

			// make sure we're not processing multiple click events 
			if (handlingClick) {
				return false;
			}

			handlingClick = true;
			
			
			
			if(element === _this.controlForward) {
				_this.next();
			} else if (element === _this.controlBackward) {
				_this.previous();
			} else {	
					
				if (_this.running) {
					_this.stop();	//  if we're "Playing" then stop the show				
				} else {
					_this.play();	// else if we're not "Playing" then start the show 				
				}
			}
			/*remove the "lock" variable*/
			handlingClick = false;
		});
		
	},


	setupNavigation: function() {
		// Role: Setup Navigation
		var _this = this;
		
		if (!this.options.navigation) {
			return false;
		}

		this.protoNavigation	=  this.element.down('.proto-navigation');    

		if (typeof this.protoNavigation==="undefined" ) {
			var navEle		=	new Element('ol', { 'class': 'proto-navigation'});			
			var navTemplate = 	new Template('<li><a href="##{number}" title="Skip to Slide #{number}">#{number}</a></li>');

			this.slides.each(function(e,index) {		// for each slide in the show create a Nav <li> using the Template above
				var li = navTemplate.evaluate({number: index+1});
				navEle.insert(li,'bottom');
			});

			this.element.insert(navEle,'bottom');
			this.protoNavigation	=  this.element.down('.proto-navigation');			
		}

		this.protoNavigation.down('li').addClassName('current-slide');

		// define "lock" variable to stop abuse of controls
		var handlingClick	= false;
		
		this.protoNavigation.on("click", "a", function(event, element) {
			event.stop();

			// make sure we're not processing multiple click events 
			if (handlingClick) {
				return false;
			}

			handlingClick = true;
		
			var index = element.hash.substr(1,2);	// get the slide ID from the href hash (eg: #3)
			_this.gotoSlide(index-1);

			/*remove the "lock" variable*/
			handlingClick = false;
		});
	},

	updateNavigation: function(current,next) {
		if (typeof this.protoNavigation !== "undefined" ) {
			this.protoNavigation.select('li')[current].removeClassName('current-slide');
			this.protoNavigation.select('li')[next].addClassName('current-slide');
		}
	},

	setupCaptions: function() {
		var _this = this;

		if (this.options.captions) {
			var captionEle			=	new Element('div', { 'class' : 'slide-caption'});			
			captionEle.hide();	
			this.element.insert(captionEle,'bottom');
			this.captionsElement	=	captionEle;
			this.updateCaptions(_this.currentSlideEle);
		}

	},

	updateCaptions: function(slide) {
		if (!this.options.captions) {
			return false;
		}		

		var nextCaption = slide.down('img').readAttribute('alt');
		if (nextCaption.replace(/^\s*|\s*$/g,'').length) {		// check that the attribute has some content (not just spaces)					
			if(!this.captionsElement.visible()) {
				// just check that the element is visible
				this.captionsElement.show();
			}				
			this.captionsElement.update(nextCaption);	
		} else {	// if no caption is found then hide the caption element
			this.captionsElement.hide();
		}
	},


	stopOnHover: function() {
		var _this = this;

		if (this.options.pauseOnHover) {						
			this.element.down('.show').observe('mouseenter',function() {
				_this.stop();
			}).observe('mouseleave',function() {								
				_this.play();					
			});

			
		}
	},

	setupKeyboardControls: function() {
		// 39 = right arrow
		// 37 = left arrow

		if (!this.options.keyboardControls) {
			return false;
		}

		var _this = this;
		document.observe('keydown', function(key) {
			
			var keyCode = key.keyCode;
			
			// stop arrow keys from working when focused on form items
			if ( (!key.target.tagName.match('TEXTAREA|INPUT|SELECT')) && (keyCode === 37 || keyCode === 39) ) {
				if (keyCode === 37) {
		        	_this.previous();
		        } else if (keyCode === 39) {
		        	_this.next();
		        }
			} else {
				return false;
			}
        }); 	
	},
	
	setupSwipeEvents: function() {
		var _this 		= this;
		var touchStartX = false;		
		
		if (!this.options.swipeEvents) {
			return false;
		}
		
		
		/* TOUCH START: Get and store the position of the initial touch */
		this.element.observe('touchstart', function(e) {
			
			touchStartX = e.targetTouches[0].clientX;
		});
		
		
		/* TOUCH MOVE: Called every time a user moves finger across the screen */
		this.element.observe('touchmove', function(e) {	
			e.preventDefault();		
			if (touchStartX > e.targetTouches[0].clientX) {
				_this.previous();
			} else {
				_this.next();
			}
		});	
				
	},

	

	fireCustomEvent: function(event_name,trans_time,direction,slideID) {
		if(this.options.fireEvents) {
			var element = this.element;
			element.fire(event_name, {
				showID 			: this.showUniqueID,
				transitionTime	: trans_time,
				direction		: direction,
				slideID 		: slideID
			});		
		}
	},
	

	/* UTILITY FUNCTIONS
	------------------------------------------------*/

	isPlaying: function() {
		return this.masterTimer != null;
	},

	isAnimating: function() {
		return this.animating;
	},

	toggleAnimating: function(bln) {
		// Role: toggles var to say whether animation is in progress and manipulates DOM
		this.animating = bln;
		if (bln) {
			this.element.addClassName("animating");	
		} else {
			this.element.removeClassName("animating");
		}
	},

	setNextIndex: function(next) {
		// Role: Decides on direction and ensures within bounds
		
		if(next === undefined) { // Ensure "next" has a value
			next = this.currentSlideID+1;
		} 
		
		// Ensure we're within bounds
		if (next >= this.slidesLength) {
			next = 0;
		} else if (next < 0 ){
			next = this.slidesLength-1;
		}

		this.nextSlideID = next;	
		this.nextSlideEle = this.slides[this.nextSlideID];
	},

	updateControls: function(status) {
		if (this.options.controls) {
			// Role: Updates the status of the Play/Pause button
			var _this = this;
					
			if (status) {			// The show has been started so update the button to "Pause"
				this.controlStartStop.down('a').update(_this.stopText);
			} else {			
				// The show has been stopped so update the button to "Play"
				this.controlStartStop.down('a').update(_this.playText);
			}
		}
		
	},
	
	

	setupTimer: function() {	
		// Role: creates the proto-progress-timer <canvas> element, gets 2D Context and inserta into DOM 
		
		this.progressTimerEle = document.createElement('canvas');		
		if (this.progressTimerEle.getContext && this.progressTimerEle.getContext('2d')) { // test for Canvas support
			this.progressTimerEle.writeAttribute('class','proto-progress-timer');	
			this.progressTimerEle.width = 30;
			this.progressTimerEle.height = 30;
			this.element.insert(this.progressTimerEle,'bottom');		
			this.progressTimerCtx = this.progressTimerEle.getContext('2d');
		} else {
			this.progressTimer = false;	// no canvas support
		}
	},
	
	
	runProgressTimer: function() {
		// Role: runs & controls the animation of the "progress timer" 
		
		var _this = this;
		
		
		if (this.progressTimer) {	// if user has set to use progress timer and the browser supports <canvas>

			
			
			this.progressTimerEle.show();			
			
			// use Epoch time to ensure code executes in time specified
			// borrowed from Emile JS http://script.aculo.us/downloads/emile.pdf
			var start = (new Date).getTime();

			// we want the timer to finish slightly before the slide transitions
			// so we shorten the duration by 1/4
			var duration = this.interval*0.75;
			var finish	= start+duration;
			var angleStart = 0;
			
			
			this.progressTimerPE = new PeriodicalExecuter(function(pe) {
				_this.resetProgressTimer(); // clear the canvas ready for next segment
				this.drawArc(_this.progressTimerCtx,0,360,'rgba(0,0,0,.2)');	// redraw the black bg circle
				
				var time = (new Date).getTime();
				var pos  = time>finish ? 1 : (time-start)/duration;						
									
				// draw the arch passing in the ctx and the degress of the arch
				this.drawArc(_this.progressTimerCtx,-5,Math.floor(( (360) * pos)),'rgba(255,255,255,.8)',true);			
			
				if( (!this.isPlaying()) || time>finish) {	// if we are stopped or we are finished then stop the PE and fade the canvas out
					pe.stop();
					_this.progressTimerEle.fade({
						duration: (_this.interval > 1000) ? (_this.interval/8)/1000 : 0.2,
						afterFinish: function() {
							_this.resetProgressTimer();
						}
					});
				} 						
			}.bind(this),duration/100000);	
		}
	},
	
	
	resetProgressTimer: function() {
		this.progressTimerEle.width = this.progressTimerEle.width;         
	},
	
	stopProgressTimer: function() {			
		this.resetProgressTimer();		
		clearInterval(this.progressTimerPE);						
	},
	
	drawArc: function(canvasCtx,startAngle,endAngle,strokeStyle) {	
		// Role: utility function for drawing archs on <canvas> elements
				
		var drawingArc 	= true;		
		var ctx 		= canvasCtx;
					
		ctx.beginPath();		
		ctx.strokeStyle = strokeStyle;
		ctx.lineCap 	= 'butt';  
		ctx.lineWidth 	= 4;	
		
		ctx.arc(15,15,10, (Math.PI/180)*(startAngle-90),(Math.PI/180)*(endAngle-90), false); 
		ctx.stroke();	
		var drawingArc = false;			
	},

	
	
	/* LOGGING FUNCTIONS
	------------------------------------------------*/

	/*reportSlides: function() {
			console.log("Current slide: " + this.currentSlideID);
			console.log("Next slide: " + this.nextSlideID);	
		},*/




	cc: function() {
		// catches the comma
	}

		

	
});

Element.addMethods({
	// Make Protoshow available as  method of all Prototype extended elements
	// http://www.prototypejs.org/api/element/addmethods
	protoShow: function(element, options) {
	element = $(element);
		var theShow = new protoShow(element,options);
		return theShow;
	}
});

}





