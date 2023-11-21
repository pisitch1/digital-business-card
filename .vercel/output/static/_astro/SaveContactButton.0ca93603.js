import{r as f}from"./index.ed373d49.js";var i={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=f,p=Symbol.for("react.element"),u=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,$=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function l(o,t,s){var e,n={},r=null,a=null;s!==void 0&&(r=""+s),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(a=t.ref);for(e in t)E.call(t,e)&&!R.hasOwnProperty(e)&&(n[e]=t[e]);if(o&&o.defaultProps)for(e in t=o.defaultProps,t)n[e]===void 0&&(n[e]=t[e]);return{$$typeof:p,type:o,key:r,ref:a,props:n,_owner:$.current}}d.Fragment=u;d.jsx=l;d.jsxs=l;i.exports=d;var v=i.exports;function c(o){function t(e){return`BEGIN:VCARD
VERSION:4.0
N:${e.data.lastName};${e.data.firstName};${e.data.middleName?e.data.middleName:""};${e.data.prefix?e.data.prefix:""};${e.data.suffix?e.data.suffix:""}
FN;CHARSET=utf-8:
${e.data.position?`TITLE:${e.data.position}`:""}
${e.data.company?`ORG:${e.data.company}`:""}
${e.data.website?`URL;TYPE=Website:${e.data.website}`:""}
${e.data.email?`EMAIL;INTERNET;TYPE=Email:${e.data.email}`:""}
${e.data.address?`ADR:${e.data.address}`:""}
${e.data.phone?`TEL;TYPE=Call:${e.data.phone}`:""}
${e.data.address?`URL;TYPE=Address:https://maps.google.com/?q=${encodeURIComponent(e.data.address)}`:""}
END:VCARD`}const s=()=>{const e=t(o.card),n=new Blob([e],{type:"text/vcard"}),r=URL.createObjectURL(n),a=document.createElement("a");a.href=r,a.download=`${o.card.data.lastName}.vcf`,document.body.appendChild(a),a.click(),document.body.removeChild(a)};return v.jsx("button",{onClick:s,className:"px-6 py-3 m-3 font-bold min-w-full bg-skin-fill text-skin-inverted rounded-full hover:bg-skin-fill-hover",children:"Save Contact"})}export{c as default};
