(function(){var c = {logId: '3221775255488643808', siteId: '25317cd35c1f74dcdecca3e1880d9e60', domain:''  , mapCard: {id: 2379, name: '优月之家月嫂服务中心', address:'广东省广州市天河区珠江新城华强路富力盈丰大厦243室', tel: '020-38267887', email: 'juan.wan@5258.cn', desc: '我们是母婴护理行业中的潜心耕耘者，致力于高端月子服务的规范化和服务人员的高度职业化建设。我们不起洋名、不冠国际，不空喊“第一”，通过脚踏实地关注客户需求，专注母婴护理，在服务标准、月嫂技能、资格认证、', width: 240, height: 180, zoom: 12, lng: 113.385643, lat: 23.166129 }  ,appsOrder: ['mapCard','endApp']};
var app=app||{};
app.mapCard={create:function(e){var k=!1,p=!1,t="undefined"!=typeof app&&app.goTop?!0:!1,n=getAppsTopPosition("mapCard"),n=convertJSON2CSS({".hm-t-map-card, .hm-t-map-card-side-arrow, .hm-t-unfold-map-card":{_top:"expression(eval(document.documentElement.scrollTop+(document.documentElement.clientHeight||document.body.clientHeight)-this.offsetHeight-2-"+n+"))"}});insertCSS(n);var b=c.mapCard,f,q=function(a){if(a){a.hasChildNodes()&&a.removeChild(a.childNodes[0]);var d=createElement("iframe",{style:{width:"100%",
height:"100%"},scrolling:"no",frameBorder:0,allowTransparency:!0});d.src="about:blank";a.appendChild(d);a=(d.contentWindow?d.contentWindow:d.contentDocument.document?d.contentDocument.document:d.contentDocument).document;d=["<!doctype html>","<html>","<head>",'<meta http-equiv="Content-Type" content="text/html; charset=utf-8">',"<style>html,body{margin:0;overflow:hidden;}</style>",'<script src="http://api.map.baidu.com/api?v=1.5&ak=51zTquszuWKwBVnEhuGFKsg1" type="text/javascript">\x3c/script>',"</head>",
"<body>",'<div id="hm-t-iframe-map-container"></div>','<script type="text/javascript">',"var _hm_encodeHTML = function(source) {",'return String(source).replace(/&/g,"&amp;").replace(/</g,"&lt;")','.replace(/>/g,"&gt;").replace(/"/g, "&quot;").replace(/\'/g, "&#39;");',"};",["function initMap() {try {","var cardSettings = "+baidu.json.stringify(b)+";","document.getElementById('hm-t-iframe-map-container').style.width = cardSettings.width + 'px';document.getElementById('hm-t-iframe-map-container').style.height = cardSettings.height + 'px';var map = new BMap.Map('hm-t-iframe-map-container');map.addControl(new BMap.NavigationControl());if (cardSettings['lng'] && cardSettings['lat']) {var point = new BMap.Point(cardSettings['lng'], cardSettings['lat']);map.centerAndZoom(point, cardSettings['zoom']);var marker = new BMap.Marker(point);map.addOverlay(marker);if (cardSettings['name']) {var label = new BMap.Label(_hm_encodeHTML(cardSettings['name']), {offset: new BMap.Size(20,-10)});marker.setLabel(label);}}} catch (ex) {}}"].join(""),
"window.onload = initMap;","\x3c/script>","</body>","</html>"];a.open();a.write(d.join(""));a.close()}};(function(){f=createElement("div",{className:"hm-t-map-card",style:{width:b.width+"px",display:"none"}});e.appendChild(f);f.appendChild(createElement("div",{className:"hm-t-map-card-title",innerHTML:"\u5730\u56fe\u540d\u7247"}));(function(){var a=[],d=baidu.string.trim;void 0!==b.name&&""!==d(b.name)&&a.push(["\u540d\u79f0\uff1a",b.name]);void 0!==b.address&&""!==d(b.address)&&a.push(["\u5730\u5740\uff1a",
b.address]);void 0!==b.tel&&""!==d(b.tel)&&a.push(["\u7535\u8bdd\uff1a",b.tel]);void 0!==b.email&&""!==d(b.email)&&a.push(["email\uff1a",b.email]);void 0!==b.desc&&""!==d(b.desc)&&a.push(["\u7b80\u4ecb\uff1a",b.desc]);if(a.length){var d=createElement("div",{className:"hm-t-map-card-info"}),g=baidu.lang.isType;if(!a||!g(a,"Array")||!a.length)throw"table data must be provided with an unempty Array on createTable";for(var e=["<table>"],h=0;h<a.length;h++){var l=a[h];g(l,"String")&&(l=[l]);if(!g(l,"Array"))throw"row data type error, row data should be either an Array or a String";
e.push("<tr>");for(var m=0,k=l.length;m<k;m++)k===m+1?e.push('<td class="hm-t-map-card-info-table-content">'):0===m?e.push('<td class="hm-t-map-card-info-table-index">'):e.push("<td>"),e.push(baidu.string.encodeHTML(l[m])),e.push("</td>");e.push("</tr>")}e.push("</table>");a=e.join("");d.innerHTML=a;f.appendChild(d)}})();(function(){var a=createElement("div",{id:"hm_t_map_"+b.id,className:"hm-t-map-card-map",style:{width:b.width+"px",height:b.height+"px"}});f.appendChild(a);q(a)})();(function(){var a=
createElement("div",{className:"hm-t-map-card-map-link",style:{width:b.width+"px"}});a.appendChild(createElement("img",{src:"http://api.map.baidu.com/mapCard/img/bigMapIcon.jpg"}));var d=createElement("a",{target:"_blank",innerHTML:"\u67e5\u770b\u5927\u56fe",className:"hm-t-map-card-bug-map-link"});baidu.event.on(d,"click",function(){logAppActivity(89,[3,b.id,c.logId]);window.open("http://map.baidu.com/?latlng="+b.lat+","+b.lng+"&title="+b.name+"&content="+b.address,"newwindow","height=768,width=1024,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no")});
a.appendChild(d);f.appendChild(a)})()})();k||(k=!0,logAppActivity(89,[1,b.id,c.logId]));k=getAppsBottomPosition("mapCard",t?2:44);f.style.bottom="2px";var g=getElementsByClassName("hm-t-map-card-side-arrow",e);!g||!g.length?(g=createElement("div",{className:"hm-t-side-arrow hm-t-map-card-side-arrow",style:{display:"none"}}),e.appendChild(g)):g=g[0];var h=createElement("div",{style:{bottom:k},className:"hm-t-unfold-button hm-t-unfold-button-txt hm-t-unfold-map-card",title:"\u5730\u56fe\u540d\u7247",
innerHTML:"\u5730\u56fe\u540d\u7247"});e.appendChild(h);bindImgErrorLog(f);var r,s;baidu.event.on(h,"mouseover",function(){clearTimeout(s);eventEmitter.emit("mapcard-unfold")});baidu.event.on(h,"mouseout",function(){r=setTimeout(function(){eventEmitter.emit("mapcard-fold")},100)});baidu.event.on(f,"mouseover",function(a){a=a||window.event;a=baidu.event.getTarget(a);(a==f||baidu.dom.contains(f,a))&&clearTimeout(r)});baidu.event.on(f,"mouseout",function(a){a=a||window.event;a=a.relatedTarget||a.toElement;
if(a==f||!baidu.dom.contains(f,a))s=setTimeout(function(){eventEmitter.emit("mapcard-fold")},100)});eventEmitter.on("mapcard-unfold",function(){p||(p=!0,logAppActivity(89,[2,b.id,c.logId]));var a=getElementsByClassName("hm-t-map-card-map",e)[0];q(a);f.style.display="block";g.style.bottom=h.style.bottom;g.style.display="block"});eventEmitter.on("mapcard-fold",function(){f.style.display="none";g.style.display="none"});eventEmitter.on("goTopHide",function(){var a=getAppsBottomPosition("mapCard",2);g.style.bottom=
h.style.bottom=a});eventEmitter.on("goTopShow",function(){var a=getAppsBottomPosition("mapCard",44);g.style.bottom=h.style.bottom=a})},dispose:function(e){e=getElementsByClassName("hm-t-map-card",e)[0];e.parentNode.removeChild(e)}};
app.mapCard.css='.hm-t-map-card {position: fixed;right: 52px;bottom: 44px;border: 1px solid #c7c7c7;z-index: 99998;white-space: normal;font-size: 14px;line-height: 17px;overflow: hidden;color: #fff;background: #404040;_position: absolute;}.hm-t-map-card-title {border-bottom: 2px solid #f0f0f0;height: 23px;padding-top: 6px;color: #000;font-weight: bold;text-align: center;background-color: #f1f1f1;background: linear-gradient(top,#f1f1f1 0%,#e6e6e6 100%);background: -webkit-linear-gradient(top,#f1f1f1 0%,#e6e6e6 100%);background: -moz-linear-gradient(top,#f1f1f1 0%,#e6e6e6 100%);background: -ms-linear-gradient(top,#f1f1f1 0%,#e6e6e6 100%);}.hm-t-map-card-info {font-size: 12px;background-color: #fff;color: #333;}.hm-t-map-card-info table {font-size: 12px;}.hm-t-map-card-info table td {width: 65px;}.hm-t-map-card-info .hm-t-map-card-info-table-content {white-space: normal;word-break: break-all;word-wrap: break-word;width: auto;}.hm-t-map-card-info .hm-t-map-card-info-table-index {width: 43px;padding-left: 5px;}.hm-t-map-card-map-link {height: 30px;font-size: 12px;color: #0082cb;background-color: #f9f9f9;background: linear-gradient(top,#f9f9f9 0%,#ececec 100%);background: -webkit-linear-gradient(top,#f9f9f9 0%,#ececec 100%);background: -moz-linear-gradient(top,#f9f9f9 0%,#ececec 100%);background: -ms-linear-gradient(top,#f9f9f9 0%,#ececec 100%);text-align: center;}:root .hm-t-map-card-map-link {background-color: #f9f9f9;}.hm-t-map-card-map-link img {margin: 5px 5px 0 0;vertical-align: bottom;*vertical-align: text-bottom;}.hm-t-map-card-bug-map-link {cursor: pointer;}.hm-t-unfold-map-card {position: fixed;right: 2px;z-index: 99998;display: block;width: 40px;text-align: center;white-space: normal;text-decoration: none;_position: absolute;color: #fff;background: #666;cursor: pointer;height: \'37px\';font-size: 14px;line-height: 17px;padding-top: 3px;height: 37px!important;}.hm-t-container .hm-t-map-card-side-arrow {right: 45px;}';
var baidu={cookie:{}};baidu.cookie.set=function(a,b,d){var e;d.expires&&(e=new Date,e.setTime(e.getTime()+d.expires));document.cookie=a+"="+b+(d.domain?"; domain="+d.domain:"")+(d.path?"; path="+d.path:"")+(e?"; expires="+e.toGMTString():"")+(d.secure?"; secure":"")};baidu.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:null};baidu.event={};
baidu.event.on=function(a,b,d){a.attachEvent?a.attachEvent("on"+b,function(b){d.call(a,b)}):a.addEventListener&&a.addEventListener(b,d,!1)};baidu.event.getTarget=function(a){a=a.target||a.srcElement;3===a.nodeType&&(a=a.parentNode);return a};baidu.lang={};baidu.lang.isType=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};baidu.dom={};baidu.dom.g=function(a){baidu.lang.isType(a,"String")&&(a=document.getElementById(a));return a};
baidu.dom.contains=function(a,b){if(null==a||void 0==a||null==b||void 0==b)return!1;var d=baidu.dom.g;a=d(a);b=d(b);return a.contains?a!=b&&a.contains(b):!!(a.compareDocumentPosition(b)&16)};
(function(){(baidu.dom.ready=function(){function a(){if(!a.isReady){a.isReady=!0;for(var b=0,d=e.length;b<d;b++)e[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(d){setTimeout(b,1);return}a()}var d=!1,e=[],f;document.addEventListener?f=function(){document.removeEventListener("DOMContentLoaded",f,!1);a()}:document.attachEvent&&(f=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",f),a())});(function(){if(!d)if(d=!0,"complete"===document.readyState)a.isReady=
!0;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",f,!1),window.addEventListener("load",a,!1);else if(document.attachEvent){document.attachEvent("onreadystatechange",f);window.attachEvent("onload",a);var e=!1;try{e=null==window.frameElement}catch(h){}document.documentElement.doScroll&&e&&b()}})();return function(b){a.isReady?b():e.push(b)}}()).isReady=!1})();baidu.sio={};
baidu.sio.log=function(a,b){var d=new Image,e="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[e]=d;d.onload=d.onerror=d.onabort=function(){d.onload=d.onerror=d.onabort=null;d=window[e]=null;b&&b(a)};d.src=a};baidu.string={};baidu.string.encodeHTML=function(a){return String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")};
baidu.string.decodeHTML=function(a){return String(a).replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&#([\d]+);/g,function(a,d){return String.fromCharCode(parseInt(d,10))})};baidu.string.trim=function(a){return String(a).replace(RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)","g"),"")};baidu.json={};baidu.json.parse=function(a){return(new Function('return (" + source + ")'))()};
baidu.json.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=d[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function b(a){return 10>a?"0"+a:a}var d={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return a(d);
case "boolean":return String(d);default:if(null===d)return"null";if(d instanceof Array){var f=["["],g=d.length,h,k,l;for(k=0;k<g;k++)switch(l=d[k],typeof l){case "undefined":case "function":case "unknown":break;default:h&&f.push(","),f.push(baidu.json.stringify(l)),h=1}f.push("]");return f.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+b(d.getMonth()+1)+"-"+b(d.getDate())+"T"+b(d.getHours())+":"+b(d.getMinutes())+":"+b(d.getSeconds())+'"';h=["{"];k=baidu.json.stringify;for(g in d)if(Object.prototype.hasOwnProperty.call(d,
g))switch(l=d[g],typeof l){case "undefined":case "unknown":case "function":break;default:f&&h.push(","),f=1,h.push(k(g)+":"+k(l))}h.push("}");return h.join("")}}}();baidu.browser={};baidu.browser.firefox=/firefox\/(\d+\.\d+)/i.test(navigator.userAgent)?+RegExp.$1:void 0;var extend=function(a,b){for(var d in b)({}).hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},iterate=function(a,b){for(var d in a)if({}.hasOwnProperty.call(a,d)&&!1===b.call(a,d,a[d]))return!1},getElementsByClassName=function(a,b){b=b||document;if(b.getElementsByClassName)return b.getElementsByClassName(a);for(var d=[],e=b.getElementsByTagName("*"),f=RegExp("(^|\\s)"+a.replace(/\-/g,"\\-")+"(\\s|$)"),g=0,h=e.length;g<h;g++)f.test(e[g].className)&&d.push(e[g]);return d},convertJSON2CSS=function(a){var b=
"";iterate(a,function(a,e){b+=a+"{";iterate(e,function(a,d){b+=a+":"+d+";"});b+="}"});return b},eventEmitter=function(){var a={};return{on:function(b,d){a[b]=a[b]||[];a[b].push(d)},emit:function(b,d){a[b]=a[b]||[];for(var e=a[b].length,f=0;f<e;f++)a[b][f](d)}}}(),getDocumentHeight=function(){return Math.max(document.documentElement.scrollHeight,document.body.clientHeight)},getDocumentScrollTop=function(){return Math.max(document.documentElement.scrollTop,document.body.scrollTop)},getViewportHeight=
function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}(),ellipsis=function(a,b,d,e){e=e||100;!baidu.lang.isType(a,"Array")&&(!baidu.lang.isType(a,"NodeList")&&!baidu.lang.isType(a,"HTMLCollection"))&&(a=[a]);for(var f=0,g=a.length;f<g;f++){a[f].style.visibility="visible";if("ellipsis"==
a[f].getAttribute("data-overflow")){var h=0;a[f].offsetHeight>b&&(a[f].innerHTML+="\u2026");for(;a[f].offsetHeight>b&&h++<e;){var k=baidu.string.decodeHTML(a[f].innerHTML),k=k.substring(0,k.length-2)+"\u2026";a[f].innerHTML=baidu.string.encodeHTML(k)}}a[f].style.height=b+"px"}d&&d()},isBackCompat=function(){return"BackCompat"==document.compatMode},AceTemplate=function(){function a(a){var b=[];b.push("with(this){");b.push(a.replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/g,function(a){return['#{decodeURIComponent("',
encodeURIComponent(a),'")}'].join("")}).replace(/[\r\n]+/g,"\n").replace(/^\n+|\s+$/mg,"").replace(/((^\s*[#<].*$)\s?)+/mg,function(a){return(a=['"',a.replace(/&none;/g,"").replace(/["'\\]/g,"\\$&").replace(/\n/g,"\\n").replace(/(!?#)\{(.*?)\}/g,function(a,b,d){d=d.replace(/\\n/g,"\n").replace(/\\([\\'"])/g,"$1");return['",',/^[a-z$][\w+$]+$/i.test(d)&&!/^(true|false|NaN|null|this)$/.test(d)?["typeof ",d,'=="undefined"?"":'].join(""):"","String("+d+').replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/\'/g, "&#39;")',
',"'].join("")}),'"'].join("").replace(/^"",|,""$/g,""))?["_output_.push(",a,");"].join(""):""}));b.push("}");return new Function("_output_","helper",b.join(""))}function b(b){var e=a(b);return function(a,b){var d=[];e.call(a,d,b);return d.join("")}}return{format:function(a,e,f){return!a?"":b(a)(e,f)},rander:b}}(),loadScript=function(a,b){var d=document.createElement("script");d.charset="utf-8";baidu.lang.isType(b,"Function")&&(d.readyState?d.onreadystatechange=function(){if("loaded"===d.readyState||
"complete"===d.readyState)d.onreadystatechange=null,b()}:d.onload=function(){b()});d.src=a;var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(d,e)},createElement=function(a,b){var d=document.createElement(a);if(void 0!==b){var e=baidu.lang.isType;(function(a,b){iterate(b,function(b,d){if(e(d,"Object"))if("style"===b)for(var g in d)a.style[g]=d[g];else throw"creating element with incorrect attributes";else a[b]=d})})(d,b)}return d};var def={VERSION:"2.4.0",HM_RCV_PATH:"http://hm.baidu.com/hm.gif",CRS_LOG_PATH:"http://ers.baidu.com/crs.gif",MAX_INT:2147483647,IMG_SIZES:[{},{width:84,height:84},{width:96,height:96},{width:140,height:112}]},tClassRegex=/(^|,|})\s*\.hm-t-/g,containerClassRegex=RegExp("#hm_t_"+c.subjectId+" .hm-t-container","g"),getAppsBottomPosition=function(a,b){for(var d=b||2,e=c.appsOrder.length,f=0;f<e;f++)if(a===c.appsOrder[f]){d+=42*(e-f-2);break}return d+"px"},getAppsTopPosition=function(a,b){for(var d,e=
c.appsOrder.length,f=0;f<e;f++)if(a===c.appsOrder[f]){d=e-f-1;break}return 42*d},insertCSS=function(a){a=(a||"").replace(tClassRegex,"$1html #hm_t_"+c.subjectId+" .hm-t-");a=a.replace(containerClassRegex,"#hm_t_"+c.subjectId+".hm-t-container");var b=document.createElement("style");b.name="hm-t-"+c.subjectId+"-css";var d=document.getElementsByTagName("head");d&&d[0].appendChild(b);b.styleSheet?b.styleSheet.cssText=a:b.appendChild(document.createTextNode(a))},removeCSS=function(){for(var a=document.getElementsByTagName("style"),
b=a.length-1;0<=b;b--)a[b].name=="hm-t-"+c.subjectId+"-css"&&a[b].parentNode.removeChild(a[b])},log=function(a){for(var b=[],d=0,e=arguments.length;d<e;d++)b[d]=encodeURIComponent((""+arguments[d]).replace(/'/g,"'0").replace(/\*/g,"'1"));baidu.sio.log([def.HM_RCV_PATH+"?si="+c.siteId,"st=4&nv=0&et=92","ep="+b.join("*"),"rnd="+Math.round(Math.random()*def.MAX_INT)].join("&"))},logAppActivity=function(a,b){baidu.lang.isType(b,"Array")||(b=[b]);for(var d=[],e=0,f=b.length;e<f;e++)d[e]=encodeURIComponent((""+
b[e]).replace(/'/g,"'0").replace(/\*/g,"'1"));baidu.sio.log([def.HM_RCV_PATH+"?si="+c.siteId,"st=4&nv=0","et="+a,"ep="+d.join("*"),"rnd="+Math.round(Math.random()*def.MAX_INT)].join("&"))},execApps=function(a){"undefined"!=typeof app&&iterate(c.appsOrder,function(b,d){if(app[d]&&"special"!==d){var e=app[d];insertCSS(e.css);e.create(a)}})},bindImgErrorLog=function(a){a=a.getElementsByTagName("img");for(var b=0,d=a.length;b<d;b++)a[b].onerror=function(a){a=a||window.event;a=a.target||a.srcElement;a.onerror=
null;baidu.sio.log(def.CRS_LOG_PATH+"?type=deadthumb&src="+encodeURIComponent(a.src))}},bindItemClickLog=function(a){baidu.event.on(a,"click",function(b){for(b=b.target||b.srcElement;"a"!=b.tagName.toLowerCase()&&b!=a;)b=b.parentNode;if("a"==b.tagName.toLowerCase()){var d=-1<b.className.indexOf("hm-t-hot-word-link")?3:1;log(d,c.subjectId,c.logId,b.href,b.title)}})},init=function(){"_bdhm_t"in window&&window._bdhm_t.c&&(c=extend(c,window._bdhm_t.c),c.demo&&(window._bdhm_t={c:c,t:{create:style.create,
dispose:style.dispose,fold:style.fold,unfold:style.unfold}}));if(navigator&&-1<(navigator.userAgent||"").indexOf("MSIE 6"))try{document.execCommand("BackgroundImageCache",!1,!0)}catch(a){}c.appsOrder.length&&(c.appsOrder=c.appsOrder.slice(0,c.appsOrder.length-1));var b=document.createElement("div");b.id="hm_t_"+c.subjectId;b.className="hm-t-container";document.body.appendChild(b);"undefined"!=typeof style&&style.create(b);execApps(b)};baidu.dom.ready(init);})();
