/*!
 * mycomponent: Core, es2017
 * Built with http://stenciljs.com
 */
function e(e,t){return"sc-"+e.t+(t&&t!==l?"-"+t:"")}function t(e,t){return e+(t?"-h":"-s")}function n(e,t){let n,o,i=null,l=!1,s=!1,r=arguments.length;for(;r-- >2;)h.push(arguments[r]);for(;h.length>0;){let t=h.pop();if(t&&void 0!==t.pop)for(r=t.length;r--;)h.push(t[r]);else"boolean"==typeof t&&(t=null),(s="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(s=!1)),s&&l?i[i.length-1].vtext+=t:null===i?i=[s?{vtext:t}:t]:i.push(s?{vtext:t}:t),l=s}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(r in t.class)t.class[r]&&h.push(r);t.class=h.join(" "),h.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,i||[],w):{vtag:e,vchildren:i,vtext:void 0,vattrs:t,vkey:n,vname:o,o:void 0,i:!1}}function o(e,t,n={}){let o=Array.isArray(t)?t:[t];const l=e.document,s=n.hydratedCssClass||"hydrated",r=n.exclude;r&&(o=o.filter(e=>-1===r.indexOf(e[0])));const a=o.map(e=>e[0]);if(a.length>0){const e=l.createElement("style");e.innerHTML=a.join()+"{visibility:hidden}."+s+"{visibility:inherit}",e.setAttribute("data-styles",""),l.head.insertBefore(e,l.head.firstChild)}const c=n.namespace||"mycomponent";return P||(P=!0,function u(e,t,n){(e["s-apps"]=e["s-apps"]||[]).push(t),n.componentOnReady||(n.componentOnReady=function t(){function n(t){if(o.nodeName.indexOf("-")>0){for(var n=e["s-apps"],i=0,l=0;l<n.length;l++)if(e[n[l]].componentOnReady){if(e[n[l]].componentOnReady(o,t))return;i++}if(i<n.length)return void(e["s-cr"]=e["s-cr"]||[]).push([o,t])}t(null)}var o=this;return e.Promise?new e.Promise(n):{then:n}})}(e,c,e.HTMLElement.prototype)),applyPolyfills(e).then(()=>{if(!x[c]){const t={},r=n.resourcesUrl||"./";i(c,t,e,l,r,s),x[c]=O(c,t,e,l,r,s,o)}(function t(){o.forEach(t=>{let n;!function o(e){return/\{\s*\[native code\]\s*\}/.test(""+e)}(e.customElements.define)?(n=function(t){return e.HTMLElement.call(this,t)}).prototype=Object.create(e.HTMLElement.prototype,{constructor:{value:n,configurable:!0}}):n=new Function("w","return class extends w.HTMLElement{}")(e),x[c].l(function i(e){const t=M(e),n=t.s,o=f(e[0]);return t.s=(({mode:e,scoped:t})=>(function i(e,t,n){return import(
/* webpackInclude: /\.entry\.js$/ */
/* webpackMode: "lazy" */
`./build/${e}${t?".sc":""}.entry.js`).then(e=>e[n])})("string"==typeof n?n:n[e],t,o)),t}(t),n)})})()})}var i=function(){};function applyPolyfills(){return Promise.resolve()}const l="$",s={},r=(t,n,o,i)=>{let s=o.t+l,r=o[s];if((2===o.u||1===o.u&&!t.v.p)&&(i["s-sc"]=r?e(o,i.mode):e(o)),r){let e=n.m.head;if(n.p)if(1===o.u)e=i.shadowRoot;else{const t=i.getRootNode();t.host&&(e=t)}let l=t.M.get(e);if(l||t.M.set(e,l={}),!l[s]){let t;{t=r.content.cloneNode(!0),l[s]=!0;const o=e.querySelectorAll("[data-styles]");n.g(e,t,o.length&&o[o.length-1].nextSibling||e.firstChild)}}}},a=e=>null!=e,c=e=>e.toLowerCase(),f=e=>c(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""),u=(e,t,n,o,i,l)=>{if("class"!==n||l)if("style"===n){for(const e in o)i&&null!=i[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in i)o&&i[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,i[e]):t.style[e]=i[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!l&&(n in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=e.k(t);o&&o.C&&o.C[n]?d(t,n,i):"ref"!==n&&(d(t,n,null==i?"":i),null!=i&&!1!==i||e.v.A(t,n))}else null!=i&&"key"!==n?((e,t,n,o="boolean"==typeof n,i)=>{i=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?i?e.removeAttributeNS("http://www.w3.org/1999/xlink",c(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),i?e.setAttributeNS("http://www.w3.org/1999/xlink",c(t),n):e.setAttribute(t,n))})(t,n,i):(l||e.v._(t,n)&&(null==i||!1===i))&&e.v.A(t,n);else n=c(n)in t?c(n.substring(2)):c(n[2])+n.substring(3),i?i!==o&&e.v.j(t,n,i):e.v.S(t,n);else if(o!==i){const e=p(o),n=p(i),l=e.filter(e=>!n.includes(e)),s=p(t.className).filter(e=>!l.includes(e)),r=n.filter(t=>!e.includes(t)&&!s.includes(t));s.push(...r),t.className=s.join(" ")}},p=e=>null==e||""===e?[]:e.trim().split(/\s+/),d=(e,t,n)=>{try{e[t]=n}catch(e){}},v=(e,t,n,o,i)=>{const l=11===n.o.nodeType&&n.o.host?n.o.host:n.o,r=t&&t.vattrs||s,a=n.vattrs||s;for(i in r)a&&null!=a[i]||null==r[i]||u(e,l,i,r[i],void 0,o,n.i);for(i in a)i in r&&a[i]===("value"===i||"checked"===i?l[i]:r[i])||u(e,l,i,r[i],a[i],o,n.i)};let m=!1;const y=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.o),e.vchildren&&e.vchildren.forEach(e=>{y(e,t)}))},b=(e,t)=>{{let n=0,o=!1;const i=()=>t.performance.now(),l=!1!==e.asyncQueue,s=Promise.resolve(),r=[],a=[],c=[],f=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(v))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](i())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=i())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},v=()=>{n++,p(a);const t=l?i()+7*Math.ceil(n*(1/22)):Infinity;d(c,t),d(f,t),c.length>0&&(f.push(...c),c.length=0),(o=a.length+c.length+f.length>0)?e.raf(v):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){r.push(e),1===r.length&&s.then(()=>p(r))},read:u(a),write:u(c)}}},h=[],w={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},M=(e,t,n)=>{const[o,i,,l,s,r]=e,a={color:{W:"color"}};if(l)for(t=0;t<l.length;t++)a[(n=l[t])[0]]={N:n[1],O:!!n[2],W:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,P:n[4]};return{t:o,s:i,C:Object.assign({},a),u:s,L:r?r.map($):void 0}},$=e=>({R:e[0],T:e[1],D:!!e[2],H:!!e[3],q:!!e[4]}),g=(e,t)=>a(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t,k=(e,t,n)=>{e.B.add(t),e.F.has(t)||(e.F.set(t,!0),e.I?e.queue.write(()=>C(e,t,n)):e.queue.tick(()=>C(e,t,n)))},C=async(e,o,i,l,s,r)=>{if(e.F.delete(o),!e.U.has(o)){if(!(s=e.Y.get(o))){if((r=e.Z.get(o))&&!r["s-rn"])return void(r["s-rc"]=r["s-rc"]||[]).push(()=>{C(e,o,i)});s=j(e,o,e.G.get(o),i)}((e,o,i,l)=>{try{const s=o.J.host,r=o.J.encapsulation,a="shadow"===r&&e.v.p;let c,f=i;if(a&&(f=i.shadowRoot),!i["s-rn"]){e.K(e,e.v,o,i);const n=i["s-sc"];n&&(e.v.V(i,t(n,!0)),"scoped"===r&&e.v.V(i,t(n)))}if(l.render||l.hostData||s||c){e.X=!0;const t=l.render&&l.render();let o;e.X=!1;const s=n(null,o,t),c=e.ee.get(i)||{};c.o=f,e.ee.set(i,e.render(i,c,s,a,r))}i["s-rn"]=!0,i["s-rc"]&&(i["s-rc"].forEach(e=>e()),i["s-rc"]=null)}catch(t){e.X=!1,e.te(t,8,i,!0)}})(e,e.k(o),o,s),o["s-init"]()}},E=(e,t,n,o,i,l,s,r,c)=>{if(t.type){const f=e.ne.get(n);!t.attr||void 0!==f[i]&&""!==f[i]||(r=l&&l.oe)&&a(c=r[t.attr])&&(f[i]=g(t.type,c)),n.hasOwnProperty(i)&&(void 0===f[i]&&(f[i]=g(t.type,n[i])),"mode"!==i&&delete n[i]),o.hasOwnProperty(i)&&void 0===f[i]&&(f[i]=o[i]),_(o,i,function f(t){return(t=e.ne.get(e.ie.get(this)))&&t[i]},function u(n,o){(o=e.ie.get(this))&&t.mutable&&A(e,o,i,n,s)})}},A=(e,t,n,o,i,l,s)=>{(s=e.ne.get(t))||e.ne.set(t,s={}),o!==s[n]&&(s[n]=o,e.Y.get(t)&&!e.X&&t["s-rn"]&&k(e,t,i))},_=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},j=(e,t,n,o,i,l)=>{try{i=new(l=e.k(t).J),((e,t,n,o,i,l)=>{e.ie.set(o,n),e.ne.has(n)||e.ne.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,s])=>{E(e,s,n,o,t,i,l)})})(e,l,t,i,n,o)}catch(n){i={},e.te(n,7,t,!0)}return e.Y.set(t,i),i},S=(e,t,n,o,i,l)=>{if(e.B.delete(t),(i=e.Z.get(t))&&((o=i["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||i["s-init"]&&i["s-init"]()),e.Z.delete(t)),e.le.length&&!e.B.size)for(;l=e.le.shift();)l()},W=(e,t,n,o)=>{t.forEach(([t,i])=>{3&i.N&&_(n,t,function n(){return(e.ne.get(this)||{})[t]},function n(l){A(e,this,t,g(i.P,l),o)})})},N=(e,t,n,o,i)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.U.delete(n),e.se.has(n)||(e.re=!0,e.B.add(n),e.se.set(n,!0),((e,t,n)=>{for(n=t;n=e.v.ae(n);)if(e.ce(n)){e.fe.has(t)||(e.Z.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.G.set(n,((e,t,n,o,i)=>(n.mode||(n.mode=e.ue(n)),n["s-cr"]||e.pe(n,"ssrv")||e.p&&1===t.u||(n["s-cr"]=e.de(""),n["s-cr"]["s-cn"]=!0,e.g(n,n["s-cr"],e.ve(n)[0])),1===t.u&&e.p&&!n.shadowRoot&&e.me(n,{mode:"open"}),o={oe:{}},t.C&&Object.keys(t.C).forEach(l=>{(i=t.C[l].W)&&(o.oe[i]=e.pe(n,i))}),o))(e.v,t,n)),e.ye(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{!e.be&&((e,t)=>{for(;t;){if(!e.he(t))return 9!==e.we(t);t=e.he(t)}})(e.v,t)&&(e.U.set(t,!0),S(e,t),y(e.ee.get(t),!0),e.v.S(t),e.Me.delete(t),[e.Z,e.$e,e.G].forEach(e=>e.delete(t)))})(e,this)},n["s-init"]=function(){((e,t,n,o,i,l)=>{if(e.Y.get(t)&&!e.U.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e.fe.set(t,!0),e.ge.has(t)||(e.ge.set(t,!0),t["s-ld"]=void 0,e.v.V(t,n));try{y(e.ee.get(t)),(l=e.$e.get(t))&&(l.forEach(e=>e(t)),e.$e.delete(t))}catch(n){e.te(n,4,t)}S(e,t)}})(e,this,o)},n.forceUpdate=function(){k(e,this,i)},t.C){const o=Object.entries(t.C);{let e={};o.forEach(([t,{W:n}])=>{n&&(e[n]=t)}),e=Object.assign({},e),n.attributeChangedCallback=function(t,n,o){(function i(e,t,n,o){const i=e[c(n)];i&&(t[i]=o)})(e,this,t,o)}}W(e,o,n,i)}},O=(e,t,o,i,s,f)=>{const u=o.performance,p={html:{}},d=o[e]=o[e]||{},y=((e,t,n)=>{const o=new WeakMap,i={m:n,p:!!n.documentElement.attachShadow,ke:!1,we:e=>e.nodeType,Ce:e=>n.createElement(e),Ee:(e,t)=>n.createElementNS(e,t),de:e=>n.createTextNode(e),Ae:e=>n.createComment(e),g:(e,t,n)=>e.insertBefore(t,n),_e:e=>e.remove(),je:(e,t)=>e.appendChild(t),V:(e,t)=>{e.classList.add(t)},ve:e=>e.childNodes,he:e=>e.parentNode,Se:e=>e.nextSibling,We:e=>e.previousSibling,Ne:e=>c(e.nodeName),Oe:e=>e.textContent,xe:(e,t)=>e.textContent=t,pe:(e,t)=>e.getAttribute(t),Pe:(e,t,n)=>e.setAttribute(t,n),A:(e,t)=>e.removeAttribute(t),_:(e,t)=>e.hasAttribute(t),ue:t=>t.getAttribute("mode")||(e.Context||{}).mode,Le:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?i.ae(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e,j:(t,n,l,s,r,a,c,f,u)=>{let p=t,d=l,v=o.get(t);u=n,v&&v[u]&&v[u](),"object"==typeof a&&(p=a),p&&(c=i.ke?{capture:!!s,passive:!!r}:!!s,e.ael(p,n,d,c),v||o.set(t,v={}),v[u]=(()=>{p&&e.rel(p,n,d,c),v[u]=null}))},S:(e,t,n)=>{(n=o.get(e))&&(t?n[t]&&n[t]():Object.keys(n).forEach(e=>{n[e]&&n[e]()}))},Re:(e,n,o,i)=>(i=new t.CustomEvent(n,o),e&&e.dispatchEvent(i),i),ae:(e,t)=>(t=i.he(e))&&11===i.we(t)?t.host:t,Te:(e,t,n,o)=>e.setAttributeNS(t,n,o),me:(e,t)=>e.attachShadow(t)};return e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o))),i})(d,o,i),h=y.m.documentElement,w=o["s-defined"]=o["s-defined"]||{},M={v:y,l:(e,t)=>{o.customElements.get(e.t)||(N(M,p[e.t]=e,t.prototype,f,u),t.observedAttributes=Object.values(e.C).map(e=>e.W).filter(e=>!!e),o.customElements.define(e.t,t))},k:e=>p[y.Ne(e)],De:e=>t[e],isClient:!0,ce:e=>!(!w[y.Ne(e)]&&!M.k(e)),te:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:t.queue=b(d,o),ye:(e,t)=>{{const n=!y.p,o={mode:t.mode,scoped:n};e.s(o).then(n=>{try{e.J=n,function o(e,t,n,i,s){if(i){const n=t.t+(s||l);if(!t[n]){const o=e.Ce("template");t[n]=o,o.innerHTML=`<style>${i}</style>`,e.je(e.m.head,o)}}}(y,e,e.u,n.style,n.styleMode)}catch(t){console.error(t),e.J=class{}}k(M,t,u)})}},X:!1,I:!1,be:!1,K:r,Z:new WeakMap,M:new WeakMap,se:new WeakMap,Me:new WeakMap,ge:new WeakMap,fe:new WeakMap,ie:new WeakMap,G:new WeakMap,Y:new WeakMap,U:new WeakMap,F:new WeakMap,$e:new WeakMap,He:new WeakMap,ee:new WeakMap,ne:new WeakMap,B:new Set,le:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=i,t.resourcesUrl=t.publicPath=s,d.h=n,d.Context=t,d.onReady=(()=>new Promise(e=>M.queue.write(()=>M.B.size?M.le.push(e):e()))),M.render=((e,t)=>{let n,o,i,l,s,r,c;const f=(i,p,d,y,b,h,w,M,$)=>{if(M=p.vchildren[d],n||(l=!0,"slot"===M.vtag&&(o&&t.V(y,o+"-s"),M.vchildren?M.qe=!0:M.Be=!0)),a(M.vtext))M.o=t.de(M.vtext);else if(M.Be)M.o=t.de("");else{if(h=M.o=m||"svg"===M.vtag?t.Ee("http://www.w3.org/2000/svg",M.vtag):t.Ce(M.qe?"slot-fb":M.vtag),e.ce(h)&&e.fe.delete(c),m="svg"===M.vtag||"foreignObject"!==M.vtag&&m,v(e,null,M,m),a(o)&&h["s-si"]!==o&&t.V(h,h["s-si"]=o),M.vchildren)for(b=0;b<M.vchildren.length;++b)(w=f(i,M,b,h))&&t.je(h,w);"svg"===M.vtag&&(m=!1)}return M.o["s-hn"]=r,(M.qe||M.Be)&&(M.o["s-sr"]=!0,M.o["s-cr"]=s,M.o["s-sn"]=M.vname||"",($=i&&i.vchildren&&i.vchildren[d])&&$.vtag===M.vtag&&i.o&&u(i.o)),M.o},u=(n,o,i,s)=>{e.be=!0;const a=t.ve(n);for(i=a.length-1;i>=0;i--)(s=a[i])["s-hn"]!==r&&s["s-ol"]&&(t._e(s),t.g(h(s),s,b(s)),t._e(s["s-ol"]),s["s-ol"]=null,l=!0),o&&u(s,o);e.be=!1},p=(e,n,o,i,l,s,c,u)=>{const p=e["s-cr"];for((c=p&&t.he(p)||e).shadowRoot&&t.Ne(c)===r&&(c=c.shadowRoot);l<=s;++l)i[l]&&(u=a(i[l].vtext)?t.de(i[l].vtext):f(null,o,l,e))&&(i[l].o=u,t.g(c,u,b(n)))},d=(e,n,o,l)=>{for(;n<=o;++n)a(e[n])&&(l=e[n].o,i=!0,l["s-ol"]?t._e(l["s-ol"]):u(l,!0),t._e(l))},y=(e,t)=>e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname),b=e=>e&&e["s-ol"]?e["s-ol"]:e,h=e=>t.he(e["s-ol"]?e["s-ol"]:e),w=(n,o,i)=>{const l=o.o=n.o,s=n.vchildren,r=o.vchildren;m=o.o&&a(t.ae(o.o))&&void 0!==o.o.ownerSVGElement,m="svg"===o.vtag||"foreignObject"!==o.vtag&&m,a(o.vtext)?(i=l["s-cr"])?t.xe(t.he(i),o.vtext):n.vtext!==o.vtext&&t.xe(l,o.vtext):("slot"!==o.vtag&&v(e,n,o,m),a(s)&&a(r)?((e,n,o,i,l,s,r,c)=>{let v=0,m=0,M=n.length-1,$=n[0],g=n[M],k=i.length-1,C=i[0],E=i[k];for(;v<=M&&m<=k;)if(null==$)$=n[++v];else if(null==g)g=n[--M];else if(null==C)C=i[++m];else if(null==E)E=i[--k];else if(y($,C))w($,C),$=n[++v],C=i[++m];else if(y(g,E))w(g,E),g=n[--M],E=i[--k];else if(y($,E))"slot"!==$.vtag&&"slot"!==E.vtag||u(t.he($.o)),w($,E),t.g(e,$.o,t.Se(g.o)),$=n[++v],E=i[--k];else if(y(g,C))"slot"!==$.vtag&&"slot"!==E.vtag||u(t.he(g.o)),w(g,C),t.g(e,g.o,$.o),g=n[--M],C=i[++m];else{for(l=null,s=v;s<=M;++s)if(n[s]&&a(n[s].vkey)&&n[s].vkey===C.vkey){l=s;break}a(l)?((c=n[l]).vtag!==C.vtag?r=f(n&&n[m],o,l,e):(w(c,C),n[l]=void 0,r=c.o),C=i[++m]):(r=f(n&&n[m],o,m,e),C=i[++m]),r&&t.g(h($.o),r,b($.o))}v>M?p(e,null==i[k+1]?null:i[k+1].o,o,i,m,k):m>k&&d(n,v,M)})(l,s,o,r):a(r)?(a(n.vtext)&&t.xe(l,""),p(l,null,o,r,0,r.length-1)):a(s)&&d(s,0,s.length-1)),m&&"svg"===o.vtag&&(m=!1)},M=(e,n,o,i,l,s,r,a)=>{for(i=0,l=(o=t.ve(e)).length;i<l;i++)if(n=o[i],1===t.we(n)){if(n["s-sr"])for(r=n["s-sn"],n.hidden=!1,s=0;s<l;s++)if(o[s]["s-hn"]!==n["s-hn"])if(a=t.we(o[s]),""!==r){if(1===a&&r===t.pe(o[s],"slot")){n.hidden=!0;break}}else if(1===a||3===a&&""!==t.Oe(o[s]).trim()){n.hidden=!0;break}M(n)}},$=[],g=(e,n,o,l,s,r,a,c,f,u)=>{for(s=0,r=(n=t.ve(e)).length;s<r;s++){if((o=n[s])["s-sr"]&&(l=o["s-cr"]))for(c=t.ve(t.he(l)),f=o["s-sn"],a=c.length-1;a>=0;a--)(l=c[a])["s-cn"]||l["s-nr"]||l["s-hn"]===o["s-hn"]||((3===(u=t.we(l))||8===u)&&""===f||1===u&&null===t.pe(l,"slot")&&""===f||1===u&&t.pe(l,"slot")===f)&&($.some(e=>e.Fe===l)||(i=!0,l["s-sn"]=f,$.push({Ie:o,Fe:l})));1===t.we(o)&&g(o)}};return(a,f,u,p,d,v,m,y,b,h,k,C)=>{if(c=a,r=t.Ne(c),s=c["s-cr"],n=p,o=c["s-sc"],l=i=!1,w(f,u),l){for(g(u.o),m=0;m<$.length;m++)(y=$[m]).Fe["s-ol"]||((b=t.de(""))["s-nr"]=y.Fe,t.g(t.he(y.Fe),y.Fe["s-ol"]=b,y.Fe));for(e.be=!0,m=0;m<$.length;m++){for(y=$[m],k=t.he(y.Ie),C=t.Se(y.Ie),b=y.Fe["s-ol"];b=t.We(b);)if((h=b["s-nr"])&&h&&h["s-sn"]===y.Fe["s-sn"]&&k===t.he(h)&&(h=t.Se(h))&&h&&!h["s-nr"]){C=h;break}(!C&&k!==t.he(y.Fe)||t.Se(y.Fe)!==C)&&y.Fe!==C&&(t._e(y.Fe),t.g(k,y.Fe,C))}e.be=!1}return i&&M(u.o),$.length=0,u}})(M,y),h["s-ld"]=[],h["s-rn"]=!0,h["s-init"]=(()=>{M.fe.set(h,d.loaded=M.I=!0),y.Re(o,"appload",{detail:{namespace:e}})}),((e,t,n,o,i,l)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.k(t);if(o)if(e.fe.has(t))n(t);else{const o=e.$e.get(t)||[];o.push(n),e.$e.set(t,o)}return!!o}),i){for(l=i.length-1;l>=0;l--)t.componentOnReady(i[l][0],i[l][1])&&i.splice(l,1);for(l=0;l<o.length;l++)if(!n[o[l]].componentOnReady)return;for(l=0;l<i.length;l++)i[l][1](null);i.length=0}})(M,d,o,o["s-apps"],o["s-cr"]),d.initialized=!0,M},x={};let P=!1;export{o as defineCustomElement,n as h};