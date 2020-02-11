(this["webpackJsonpbox-toggle"]=this["webpackJsonpbox-toggle"]||[]).push([[0],{17:function(e,n,t){e.exports=t(27)},22:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(10),c=t.n(o),i=(t(22),t(5)),l=t(1),u=t(2),s=t(6),f=t(3),d=function(e){return"$$"+e+"$$"},m=function(e){var n=e.size,t=e.fill;return a.a.createElement("svg",{width:n,height:n,fill:t,viewBox:"0 0 24 24"},a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),a.a.createElement("path",{d:"M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"}))};function h(){var e=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0 0.5rem;\n    & "," {\n        height: 100%;\n        width: 100%;\n    }\n"]);return h=function(){return e},e}function g(){var e=Object(l.a)(["\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n    background-color: transparent;\n    border: 0;\n    transition: filter 250ms;\n    &:hover {\n        filter: brightness(0.8);\n    }\n"]);return g=function(){return e},e}function v(){var e=Object(l.a)(["\n    padding: 0 1rem;\n"]);return v=function(){return e},e}function E(){var e=Object(l.a)(["\n    background-color: coral;\n    cursor: pointer;\n    padding: 0;\n    font-style: italic;\n    margin: 0;\n    font-weight: bold;\n    color: #000;\n    border: 1px solid #00000033;\n    transition: filter 250ms;\n    &:hover {\n        filter: brightness(0.8);\n    }\n"]);return E=function(){return e},e}m.defaultProps={size:20,fill:"#eee"};var x=u.a.button(E()),b=Object(u.a)(x)(v()),p=Object(u.a)(x)(g()),y=u.a.div(h(),x);function k(){var e=Object(l.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: stretch;\n    padding: 1rem;\n"]);return k=function(){return e},e}var w=u.a.div(k()),j=function(e){e.children;var n=e.xRotationHandler,t=e.yRotationHandler,r=e.zRotationHandler,o=e.resetHandler;return a.a.createElement(w,null,a.a.createElement(y,null,a.a.createElement(b,{onClick:n(1)},a.a.createElement(f.a,{math:d("x")})),a.a.createElement(b,{onClick:n(-1)},a.a.createElement(f.a,{math:d("x^-")}))),a.a.createElement(y,null,a.a.createElement(b,{onClick:t(1)},a.a.createElement(f.a,{math:d("y")})),a.a.createElement(b,{onClick:t(-1)},a.a.createElement(f.a,{math:d("y^-")}))),a.a.createElement(y,null,a.a.createElement(b,{onClick:r(1)},a.a.createElement(f.a,{math:d("z")})),a.a.createElement(b,{onClick:r(-1)},a.a.createElement(f.a,{math:d("z^-")}))),a.a.createElement(p,{onClick:o},a.a.createElement(m,{size:"32",fill:"coral"})))};function O(){var e=Object(l.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background-color: ",";\n    border: 2px solid #333;\n    opacity: 0.75;\n    transform-origin: 50% 50%;\n    transform: translateZ(100px) ",";\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    color: #333;\n    font-weight: bold;\n    font-size: 32pt;\n"]);return O=function(){return e},e}var z=u.a.div(O(),(function(e){return e.color?e.color:"coral"}),(function(e){return e.transform||"none"}));function H(){var e=Object(l.a)(["\n    height: 100%;\n    width: 100%;\n    position: relative;\n    transform-style: preserve-3d;\n"]);return H=function(){return e},e}function C(){var e=Object(l.a)(["\n    position: relative;\n    height: ",";\n    width: ",";\n    border: 1px solid #555;\n    perspective: 1000px;\n"]);return C=function(){return e},e}var L=u.a.div(C(),(function(e){return e.sideLength}),(function(e){return e.sideLength})),Z=Object(u.a)(s.a.div)(H()),R=function(e){var n=e.animation,t=e.sideLength;return a.a.createElement(L,{sideLength:t},a.a.createElement(Z,{style:n},a.a.createElement(z,{color:"white",style:{transform:"rotateY(0deg) translateZ(calc(".concat(t," / 2))")}},"FRONT"),a.a.createElement(z,{color:"peachpuff",style:{transform:"rotateY(-90deg) translateZ(calc(".concat(t," / 2))")}},"RIGHT"),a.a.createElement(z,{color:"salmon",style:{transform:"rotateY(90deg) translateZ(calc(".concat(t," / 2))")}},"LEFT"),a.a.createElement(z,{color:"darkcyan",style:{transform:"rotateY(180deg) translateZ(calc(".concat(t," / 2))")}},"BACK"),a.a.createElement(z,{color:"powderblue",style:{transform:"rotateX(90deg) translateZ(calc(".concat(t," / 2))")}},"TOP"),a.a.createElement(z,{color:"olive",style:{transform:"rotateX(-90deg) translateZ(calc(".concat(t," / 2))")}},"BOTTOM")))},S=function(e){var n=e.word;return a.a.createElement(f.a,{math:d("w = ".concat(n||"1"))})};function B(){var e=Object(l.a)(["\n    background-color: transparent;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n"]);return B=function(){return e},e}var W=u.a.header(B());function Y(){var e=Object(l.a)(["\n    background-color: inherit;\n    color: inherit;\n    flex: 1;\n    position: relative;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n"]);return Y=function(){return e},e}var T=u.a.main(Y());function X(){var e=Object(l.a)(["\n    background-color: #111;\n    color: #ccc;\n    padding: 2rem 0;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    min-height: 8rem;\n"]);return X=function(){return e},e}var $=u.a.footer(X());function A(){var e=Object(l.a)(["\n    position: fixed;\n    left: 1rem;\n    top: 1rem;\n"]);return A=function(){return e},e}var M=u.a.div(A()),F=function(e){var n=e.size,t=void 0===n?"200px":n,r=e.fill,o=void 0===r?"#333":r;return a.a.createElement(M,null,a.a.createElement("svg",{width:t,height:t,fill:o,viewBox:"0 0 40 20"},a.a.createElement("defs",null,a.a.createElement("marker",{id:"dot",markerWidth:"8",markerHeight:"8",refX:"5",refY:"5"},a.a.createElement("circle",{cx:"5",cy:"5",r:"3",fill:"#eee"})),a.a.createElement("marker",{id:"arrow",viewBox:"0 0 10 10",refX:"10",refY:"5",markerWidth:"10",markerHeight:"10",orient:"auto"},a.a.createElement("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#eee"}))),a.a.createElement("g",{transform:"translate(20,0)"},a.a.createElement("line",{x1:"0",y1:"0",x2:"20",y2:"0",stroke:"#eee",style:{strokeWidth:"0.2"},markerStart:"url(#dot)",markerEnd:"url(#arrow)"}),a.a.createElement("text",{x:"18",y:"3",textAnchor:"middle",fill:"#eee",fontSize:"3"},"x"),a.a.createElement("line",{x1:"0",y1:"0",x2:"-9",y2:"12",stroke:"#eee",style:{strokeWidth:"0.2"},markerEnd:"url(#arrow)"}),a.a.createElement("text",{x:"-10",y:"9",textAnchor:"middle",fill:"#eee",fontSize:"3"},"y"),a.a.createElement("line",{x1:"0",y1:"0",x2:"0",y2:"18",stroke:"#eee",style:{strokeWidth:"0.2"},markerEnd:"url(#arrow)"}),a.a.createElement("text",{x:"-2",y:"20",textAnchor:"middle",fill:"#eee",fontSize:"3"},"z"))))};function I(){var e=Object(l.a)(["\n    // border: 1px solid #f99; & * { border: 1px solid #f99; }\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background: linear-gradient(30deg, steelblue, darkslategray);\n"]);return I=function(){return e},e}var J=u.a.div(I()),P=function(){var e=Object(r.useState)(0),n=Object(i.a)(e,2),t=n[0],o=n[1],c=Object(r.useState)(0),l=Object(i.a)(c,2),u=l[0],f=l[1],d=Object(r.useState)(0),m=Object(i.a)(d,2),h=m[0],g=m[1],v=Object(r.useState)(""),E=Object(i.a)(v,2),x=E[0],b=E[1],p=Object(s.b)({transform:"\n            translateZ(calc(-".concat("300px"," / 2))\n            rotateX(").concat(t,"deg)\n            rotateY(").concat(u,"deg)\n            rotateZ(").concat(h,"deg)\n        "),config:{mass:1,tension:200,friction:20}});return a.a.createElement(J,null,a.a.createElement(W,null,a.a.createElement(F,null),a.a.createElement(j,{xRotationHandler:function(e){return function(n){o((function(n){return n+90*e}));var t=1===e?"x":"x^-";b((function(e){return e+t}))}},yRotationHandler:function(e){return function(n){f((function(n){return n+90*e}));var t=1===e?"y":"y^-";b((function(e){return e+t}))}},zRotationHandler:function(e){return function(n){g((function(n){return n+90*e}));var t=1===e?"z":"z^-";b((function(e){return e+t}))}},resetHandler:function(){o(0),f(0),g(0),b("")}})),a.a.createElement(T,null,a.a.createElement(R,{sideLength:"300px",animation:p})),a.a.createElement($,null,a.a.createElement(S,{word:x})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.276546e0.chunk.js.map