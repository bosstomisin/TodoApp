import{a as j}from"./chunk-33CQORJC.js";import{a as p,b as g,c as s,d as A,f as L,j as N}from"./chunk-7V7WNOD5.js";var c=L(N(),1);var f=class f extends c.PrefixedContext{constructor(t){if(super(t),!f.init){f.init=!0;var r=c.StringEditor,n=c.PasswordEditor;(0,c.initFormType)(f,["Username",r,"Password",n])}}};s(f,"LoginForm"),f.formKey="Membership.Login";var R=f;var i=L(N(),1);var a=class a extends i.PrefixedContext{constructor(t){if(super(t),!a.init){a.init=!0;var r=i.StringEditor,n=i.EmailAddressEditor,o=i.PasswordEditor;(0,i.initFormType)(a,["DisplayName",r,"Email",n,"ConfirmEmail",n,"Password",o,"ConfirmPassword",o])}}};s(a,"SignUpForm"),a.formKey="Membership.SignUp";var M=a;var S=Object.keys;function O(e){return typeof e=="boolean"}s(O,"isBoolean");function F(e){return e&&typeof e.nodeType=="number"}s(F,"isElement");function P(e){return typeof e=="string"}s(P,"isString");function U(e){return typeof e=="number"}s(U,"isNumber");function u(e){return typeof e=="object"?e!==null:d(e)}s(u,"isObject");function d(e){return typeof e=="function"}s(d,"isFunction");function B(e){return!!(e&&e.isComponent)}s(B,"isComponentClass");function K(e){return u(e)&&typeof e.length=="number"&&typeof e.nodeType!="number"}s(K,"isArrayLike");function h(e,t){if(e)for(let r of S(e))t(e[r],r)}s(h,"forEach");function q(e){return u(e)&&"current"in e}s(q,"isRef");var z=Symbol.for("jsx-dom:type"),D=function(e){return e.ShadowRoot="ShadowRoot",e}(D||{});function G(e){return e!=null&&e[z]===D.ShadowRoot}s(G,"isShadowRoot");function H(e){return!O(e)&&e!=null}s(H,"isVisibleChild");function C(e){return Array.isArray(e)?e.map(C).filter(Boolean).join(" "):u(e)?Symbol.iterator in e?C(Array.from(e)):S(e).filter(t=>e[t]).join(" "):H(e)?""+e:""}s(C,"className");function J(e){let t=document.createDocumentFragment();return E(e.children,t),t}s(J,"Fragment");function W(e,t,r){t=g(p({},t),{children:r});let n=new e(t),o=n.render();return"ref"in t&&T(t.ref,n),o}s(W,"initComponentClass");function l(e,t){let m=t,{children:r}=m,n=A(m,["children"]),o;if(P(e)){if(o=n.namespaceURI?document.createElementNS(n.namespaceURI,e):document.createElement(e),Q(n,o),E(r,o),o instanceof window.HTMLSelectElement&&n.value!=null)if(n.multiple===!0&&Array.isArray(n.value)){let y=n.value.map(w=>String(w));o.querySelectorAll("option").forEach(w=>w.selected=y.includes(w.value))}else o.value=n.value;T(n.ref,o)}else if(d(e))u(e.defaultProps)&&(n=p(p({},e.defaultProps),n)),o=B(e)?W(e,n,r):e(g(p({},n),{children:r}));else throw new TypeError(`Invalid JSX element type: ${e}`);return o}s(l,"jsx");function T(e,t){q(e)?e.current=t:d(e)&&e(t)}s(T,"attachRef");function E(e,t){if(K(e))X(e,t);else if(P(e)||U(e))b(document.createTextNode(e),t);else if(e===null)b(document.createComment(""),t);else if(F(e))b(e,t);else if(G(e)){let r=t.attachShadow(e.attr);E(e.children,r),T(e.ref,r)}}s(E,"appendChild");function X(e,t){for(let r of[...e])E(r,t);return t}s(X,"appendChildren");function b(e,t){t instanceof window.HTMLTemplateElement?t.content.appendChild(e):t.appendChild(e)}s(b,"appendChildToNode");function I(e,t){t==null||t===!1||(Array.isArray(t)?t.forEach(r=>I(e,r)):P(t)?e.setAttribute("style",t):u(t)&&h(t,(r,n)=>{n.indexOf("-")===0?e.style.setProperty(n,r):e.style[n]=r}))}s(I,"style");function $(e,t,r){switch(e){case"htmlFor":x(r,"for",t);return;case"dataset":h(t,(n,o)=>{n!=null&&(r.dataset[o]=n)});return;case"innerHTML":case"innerText":case"textContent":H(t)&&(r[e]=t);return;case"dangerouslySetInnerHTML":u(t)&&(r.innerHTML=t.__html);return;case"value":if(t==null||r instanceof window.HTMLSelectElement)return;if(r instanceof window.HTMLTextAreaElement){r.value=t;return}break;case"spellCheck":r.spellcheck=t;return;case"class":case"className":d(t)?t(r):x(r,"class",C(t));return;case"ref":case"namespaceURI":return;case"style":I(r,t);return;case"on":case"onCapture":h(t,(n,o)=>{r.addEventListener(o,n,e==="onCapture")});return}if(d(t)){if(e[0]==="o"&&e[1]==="n"){let n=e.toLowerCase(),o=n.endsWith("capture");if(n==="ondoubleclick"?n="ondblclick":o&&n==="ondoubleclickcapture"&&(n="ondblclickcapture"),!o&&r[n]===null)r[n]=t;else if(o)r.addEventListener(n.substring(2,n.length-7),t,!0);else{let m;n in window?m=n.substring(2):m=n[2]+e.slice(3),r.addEventListener(m,t)}}}else u(t)?r[e]=t:t===!0?x(r,e,""):t!==!1&&t!=null&&x(r,e,t)}s($,"attribute");function x(e,t,r){e.setAttribute(t,r)}s(x,"attr");function Q(e,t){for(let r of S(e))$(r,e[r],t);return t}s(Q,"attributes");var ue=s(()=>l("h2",{class:"text-center p-4",children:[l("img",{class:"s-site-logo-img s-form-title-logo"})," ",j.Forms.SiteTitle]}),"AccountPanelTitle");export{R as a,M as b,J as c,l as d,ue as e};
//# sourceMappingURL=chunk-WL6B2BNE.js.map
