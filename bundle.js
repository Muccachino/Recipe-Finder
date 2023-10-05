(()=>{"use strict";var e={99:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(81),r=n.n(i),a=n(645),o=n.n(a)()(r());o.push([e.id,'*{margin:0;box-sizing:border-box}#app{display:grid;grid-template-areas:"head head head" "input input input" "recipe recipe sidebar" "foot foot foot"}.header{grid-area:head;display:flex;padding-top:30px;justify-content:space-around;height:90px;border-bottom:2px solid black}.header #pageTitle{width:52vw;text-align:end}.header .nav{text-decoration:none;display:flex;list-style-type:none;font-size:1.5em;width:48vw;justify-content:end}.header .nav li{margin-right:100px;transition:scale 0.5s ease-in-out}.header .nav li:hover{scale:120%;text-decoration:underline}#inputSection{grid-area:input;display:grid;grid-template-columns:3fr 1fr 3fr;border-bottom:2px solid black;padding:0 10vw 0 10vw}#inputSection h2{font-size:1.2em;grid-row:1;text-align:center;margin-bottom:20px}#inputSection input{grid-row:2;width:80%;justify-self:center;height:30px;border-radius:20px;margin-bottom:20px;padding-left:15px;font-size:large}#inputSection button{grid-row:3;justify-self:center;width:20%;height:25px;margin-bottom:20px;border-radius:10px}#inputSection #finderLabel{padding:10px}#inputSection #generatorLabel{grid-column:3;padding:10px}#inputSection #generatorInput{grid-column:3}#inputSection #generatorButton{grid-column:3}#recipeSection{grid-area:recipe;width:80vw;height:500px;overflow-y:scroll}#recipeSection .recipeBox{border-bottom:1px solid black;padding:20px 15vw 20px 15vw;display:grid;grid-template-columns:400px 400px 200px;grid-template-rows:70px 40px auto auto auto auto;grid-template-areas:"title title ." "time por diff" "img ingr ." "img ingr print" "img ingr ." "source ingr ."}#recipeSection .recipeTitle{grid-area:title;font-size:2em;text-align:center}#recipeSection .recipeImage{grid-area:img;width:350px;height:250px;border-radius:8px}#recipeSection .recipeSource{grid-area:source}#recipeSection .recipeDifficulty{grid-area:diff}#recipeSection .recipePortions{grid-area:por}#recipeSection .recipeTime{grid-area:time}#recipeSection .allIngredients{grid-area:ingr}#recipeSection .printButton{grid-area:print;width:50px;height:50px}#recipeSection .shareButton{grid-area:print;width:50px;height:50px;margin-top:55px}#recipeSection .saveButton{grid-area:print;width:50px;height:50px;margin-top:110px}#recipeSidebar{grid-area:sidebar}.footer{grid-area:foot;border-top:2px solid black;padding-top:35px;height:80px;display:flex;justify-content:space-between}.footer .terms{margin-left:150px}.footer .terms a{text-decoration:none;margin-right:30px}.footer .socialmedia{margin-right:150px}.footer .socialmedia a{text-decoration:none;margin-left:30px;scale:150px}.footer .socialmedia i{scale:150%}\n',""]);const d=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(i)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(o[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);i&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var a={},o=[],d=0;d<e.length;d++){var c=e[d],s=i.base?c[0]+i.base:c[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=r(m,i);i.byIndex=d,t.splice(d,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=i(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var d=n(a[o]);t[d].references--}for(var c=i(e,r),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={id:i,exports:{}};return e[i](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),i=n(795),r=n.n(i),a=n(569),o=n.n(a),d=n(565),c=n.n(d),s=n(216),l=n.n(s),p=n(589),u=n.n(p),m=n(99),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;class h{constructor(e,t){this.title=e,this.image=t}}function g(e,t,n,i){let r=document.createElement(e);return null!=t&&r.classList.add(t),null!=n&&(r.id=n),null!=i&&(r.innerHTML=i),r}function v(e,t){e.appendChild(t)}function x(e,t,n,i,r){for(let a=0;a<=t;a++){let t=document.createElement(e);null!=i&&(t.innerHTML=i[a]),null!=r&&t.classList.add(`${r}${a}`),n.appendChild(t)}}const b=document.getElementById("app"),y=document.getElementById("app"),L=document.getElementById("app"),E=document.getElementById("app");(()=>{const e=g("header","header");v(b,e),v(e,g("h1",null,"pageTitle","Recipe Finder"));const t=g("ul","nav");v(e,t),x("li",1,t,["Home","Impressum"],"nav")})(),(()=>{const e=g("section",null,"inputSection");v(y,e),v(e,g("h2",null,"finderLabel","Geben Sie Suchbegriffe ein um in unserer Datenbank mit über 200.000 Rezepten zu stöbern")),v(e,g("input",null,"finderInput")),v(e,g("button",null,"finderButton","Search")),v(e,g("h2",null,"generatorLabel","Geben Sie ein Gericht ihrer Wahl ein und unser KI gestützter Rezept Generator erstellt ihnen ein fertiges Rezept (Beta)")),v(e,g("input",null,"generatorInput")),v(e,g("button",null,"generatorButton","Create"))})(),(()=>{const e=g("section",null,"recipeSection");v(L,e)})(),(()=>{const e=g("nav",null,"recipeSidebar");v(L,e)})(),(()=>{const e=g("footer","footer");v(E,e);const t=g("div","terms");v(e,t),x("span",1,t,["<a href='#'>Terms of Use</a>","<a href='#'>Privacy Policy</a>"]);const n=g("div","socialmedia");v(e,n),v(n,g("span",null,null,"Follow us on:")),x("a",2,n);const i=g("i","fa-brands");i.classList.add("fa-facebook"),v(n.children[1],i);const r=g("i","fa-brands");r.classList.add("fa-instagram"),v(n.children[2],r);const a=g("i","fa-brands");a.classList.add("fa-twitter"),v(n.children[3],a)})(),document.getElementById("app");const S=document.getElementById("recipeSection"),w=document.getElementById("finderButton");class C{constructor(e,t,n,i,r,a,o,d){this.title=e,this.difficulty=t,this.portions=n,this.ingredients=i,this.time=r/60,this.source=a,this.sourceURL=o,this.image=d}}w.addEventListener("click",(()=>{let e=document.getElementById("finderInput").value;e=encodeURIComponent(e),(async e=>{const t=`https://gustar-io-deutsche-rezepte.p.rapidapi.com/search_api?text=${e}&page=1&per_page=2`,n={method:"GET",headers:{"X-RapidAPI-Key":"1f98616057msh05389b767bd090fp133c7bjsn34cb1de9bfa7","X-RapidAPI-Host":"gustar-io-deutsche-rezepte.p.rapidapi.com"}};try{const e=await fetch(t,n),i=await e.json();console.log(i),await(async e=>{S.innerHTML="",e.forEach((e=>{!function(e,t){let n=document.createElement("div");n.classList.add("recipeBox"),t.appendChild(n);let i=document.createElement("h3");i.classList.add("recipeTitle"),i.innerHTML=e.title,n.appendChild(i);let r=document.createElement("img");r.classList.add("recipeImage"),r.src=e.image[0],n.appendChild(r);let a=document.createElement("a");a.classList.add("recipeSource"),a.href=e.sourceURL,a.innerHTML="Quelle: "+e.source,n.appendChild(a);let o=document.createElement("p");o.classList.add("recipeDifficulty"),""!==e.difficulty&&void 0!==e.difficulty||(e.difficulty="nicht angegeben"),o.innerHTML="Schwierigkeit: "+e.difficulty,n.appendChild(o);let d=document.createElement("p");d.classList.add("recipePortions"),d.innerHTML="Portionen: "+e.portions,n.appendChild(d);let c=document.createElement("p");c.classList.add("recipeTime"),c.innerHTML="Kochzeit: "+e.time+" Minuten",n.appendChild(c);let s=document.createElement("div");s.classList.add("allIngredients");let l=document.createElement("h4");l.innerHTML="Zutaten:",s.appendChild(l),n.appendChild(s);for(let t of e.ingredients){let e=document.createElement("div");e.classList.add("recipeIngBox"),s.appendChild(e);let n=document.createElement("span");n.innerHTML=t.amount+" ",e.appendChild(n);let i=document.createElement("span");i.innerHTML=t.unit+" ",e.appendChild(i);let r=document.createElement("span");r.innerHTML=t.name,e.appendChild(r)}let p=document.createElement("button");p.classList.add("printButton");let u=document.createElement("i");u.classList.add("fa-solid","fa-print"),p.append(u),n.appendChild(p);let m=document.createElement("button");m.classList.add("shareButton");let f=document.createElement("i");f.classList.add("fa-solid","fa-share-nodes"),m.appendChild(f),n.appendChild(m);let g=document.createElement("button");g.classList.add("saveButton");let v=document.createElement("i");v.classList.add("fa-solid","fa-floppy-disk"),g.appendChild(v),n.appendChild(g),g.addEventListener("click",(()=>{let e=new h(i,r);console.log(e);const t=document.getElementById("recipeSidebar");let n=document.createElement("div");t.appendChild(n);let a=document.createElement("h5");a.classList.add("savedTitle"),a.innerHTML=e.title,n.appendChild(a);let o=document.createElement("img");o.classList.add("savedImage"),o.src=e.image,n.appendChild(o)}))}(new C(e.title,e.difficulty,e.portions,e.ingredients,e.totalTime,e.source_url,e.source,e.image_urls),S)}))})(i)}catch(e){console.error(e)}})(e)}))})()})();