!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports={A:"._",B:"_...",C:"_._.",D:"_..",E:".",F:".._.",G:"__.",H:"....",I:"..",J:".___",K:"_._",L:"._..",M:"__",N:"_.",O:"___",P:".__.",Q:"__._",R:"._.",S:"...",T:"_",U:".._",V:"..._",W:".__",X:"_.._",Y:"_.__",Z:"__.."," ":" "}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);$(document).ready((function(){$("#inputMessageButton").click((function(){let e=$("#inputMessage").val(),t=[];for(let n of e){let e=n.toUpperCase();t.push(o.a[e])}let n="";for(let e of t)n=n+"   "+e;$("#encodedResponse").empty(),$("#encodedResponse").append("<p>"+n+"</p>")})),$("#inputSymbolButton").click((function(){let e=$("#inputSymbol").val(),t=Object.keys(o.a).find(t=>o.a[t]===e);$("#letterResponse").empty(),$("#letterResponse").append("<p>"+t.toString()+"</p>")})),$("#randomButton").click((function(){let e=Object.keys(o.a),t=e[e.length*Math.random()<<0];$("#randomResponse").empty(),$("#randomResponse").append("<p>"+t+"</p>")})),$("#inputUserResponseButton").click((function(){let e=$("#randomResponse").text(),t=$("#inputUserResponse").val().toUpperCase(),n=Object.keys(o.a).find(e=>o.a[e]===t);$("#userAnswer").empty(),$("#userAnswer").append("<p>Your answer is:   "+t+"   "+n+"</p>");let r=o.a[e];$("#correctAnswer").empty(),$("#correctAnswer").append("<p>The correct answer is:   "+r+" "+e+"</p>")}))}))}]);