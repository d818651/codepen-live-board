parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"7QCb":[function(require,module,exports) {
var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{l(r.next(e))}catch(t){o(t)}}function c(e){try{l(r.throw(e))}catch(t){o(t)}}function l(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,c)}l((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(c){o=[6,c],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},n=this,r=[];function a(e){var t=window.location;return("https:"===t.protocol?"wss://":"ws://")+t.hostname+(80!=t.port&&443!=t.port?":"+t.port:"")+t.pathname+e}e(n,void 0,void 0,function(){return t(this,function(e){switch(e.label){case 0:return[4,fetch("/api/participants")];case 1:return[4,e.sent().json()];case 2:return l(r=e.sent()),[2]}})});var o=a("");function i(e){var t=new WebSocket(e);t.onmessage=function(e){l(r=c(r,JSON.parse(e.data)))},t.onclose=function(){setTimeout(function(){return i(e)},5e3)}}function c(e,t){var n=e.findIndex(function(e){return e.penUrl===t.penUrl});if(-1===n)return e.concat([t]);var r=e.slice(0);return r.splice(n,1,t),r}function l(e){console.log(e);var t=document.querySelector("#frames-grid"),n=Array.from(document.querySelectorAll(".participant"));e.forEach(function(e){var r=n.find(function(t){return t.id===e.penUrl}),a=u('\n      <div class="participant" id="'+e.penUrl+'" data-hash="'+e.lastHash+'">\n        <p><a target="_blank" href="'+e.penUrl+'">'+e.name+': <span class="change-count">'+e.changeCount+'</span></a></p>\n        <iframe src="/fetch?url='+e.fullpageUrl+'"></iframe>\n      </div>');r?r.dataset.hash!==e.lastHash&&(t.insertBefore(a,r),t.removeChild(r)):t.appendChild(a)})}function u(e){var t=document.createElement("template");return e=e.trim(),t.innerHTML=e,t.content.firstChild}function s(e){e.preventDefault();var t=document.querySelector(".registration-error"),n=document.querySelector(".registration-ok"),r=e.target;fetch("/register",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({participantName:r.participantName.value,penUrl:r.penUrl.value})}).then(function(e){return e.json()}).then(function(e){e.error?(t.style.display="initial",n.style.display="none",t.innerHTML=e.error):(r.reset(),t.style.display="none",n.style.display="initial")})}i(o),document.querySelector(".registration-form").addEventListener("submit",s);
},{}]},{},["7QCb"], null)
//# sourceMappingURL=/src.97fe50fd.map