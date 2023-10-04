(()=>{"use strict";var e={99:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(81),r=n.n(i),o=n(645),a=n.n(o)()(r());a.push([e.id,'*{margin:0;box-sizing:border-box}.header{display:flex;padding-top:30px;justify-content:space-around;height:90px;border-bottom:2px solid black}.header #pageTitle{width:52vw;text-align:end}.header .nav{text-decoration:none;display:flex;list-style-type:none;font-size:1.5em;width:48vw;justify-content:end}.header .nav li{margin-right:100px;transition:scale 0.5s ease-in-out}.header .nav li:hover{scale:120%;text-decoration:underline}#inputSection{display:grid;grid-template-columns:3fr 1fr 3fr;border-bottom:2px solid black;padding:0 10vw 0 10vw}#inputSection h2{font-size:1.2em;grid-row:1;text-align:center;margin-bottom:20px}#inputSection input{grid-row:2;width:80%;justify-self:center;height:30px;border-radius:20px;margin-bottom:20px;padding-left:15px;font-size:large}#inputSection button{grid-row:3;justify-self:center;width:20%;height:25px;margin-bottom:20px;border-radius:10px}#inputSection #finderLabel{padding:10px}#inputSection #generatorLabel{grid-column:3;padding:10px}#inputSection #generatorInput{grid-column:3}#inputSection #generatorButton{grid-column:3}#recipeSection{height:470px;overflow:scroll}#recipeSection .recipeBox{border-bottom:1px solid black;display:grid;grid-template-areas:"img title" "img source" "img ingr" "diff ingr" "por ingr" "time ingr"}#recipeSection .recipeTitle{grid-area:title}#recipeSection .recipeImage{grid-area:img;width:200px;height:200px}#recipeSection .recipeSource{grid-area:source}#recipeSection .recipeDifficulty{grid-area:diff}#recipeSection .recipeTime{grid-area:time}#recipeSection .allIngredients{grid-area:ingr}.footer{border-top:2px solid black;padding-top:35px;height:80px;display:flex;justify-content:space-between}.footer .terms{margin-left:150px}.footer .terms a{text-decoration:none;margin-right:30px}.footer .socialmedia{margin-right:150px}.footer .socialmedia a{text-decoration:none;margin-left:30px;scale:150px}.footer .socialmedia i{scale:150%}\n',""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);i&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var o={},a=[],c=0;c<e.length;c++){var d=e[c],s=i.base?d[0]+i.base:d[0],l=o[s]||0,p="".concat(s," ").concat(l);o[s]=l+1;var u=n(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=r(f,i);i.byIndex=c,t.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=i(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var c=n(o[a]);t[c].references--}for(var d=i(e,r),s=0;s<o.length;s++){var l=n(o[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=d}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={id:i,exports:{}};return e[i](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),i=n(795),r=n.n(i),o=n(569),a=n.n(o),c=n(565),d=n.n(c),s=n(216),l=n.n(s),p=n(589),u=n.n(p),f=n(99),m={};function h(e,t,n,i){let r=document.createElement(e);return null!=t&&r.classList.add(t),null!=n&&(r.id=n),null!=i&&(r.innerHTML=i),r}function g(e,t){e.appendChild(t)}function v(e,t,n,i,r){for(let o=0;o<=t;o++){let t=document.createElement(e);null!=i&&(t.innerHTML=i[o]),null!=r&&t.classList.add(`${r}${o}`),n.appendChild(t)}}m.styleTagTransform=u(),m.setAttributes=d(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const y=document.getElementById("app"),b=document.getElementById("app"),x=document.getElementById("app"),L=document.getElementById("app");(()=>{const e=h("header","header");g(y,e),g(e,h("h1",null,"pageTitle","Recipe Finder"));const t=h("ul","nav");g(e,t),v("li",1,t,["Home","Impressum"],"nav")})(),(()=>{const e=h("section",null,"inputSection");g(b,e),g(e,h("h2",null,"finderLabel","Geben Sie Suchbegriffe ein um in unserer Datenbank mit über 200.000 Rezepten zu stöbern")),g(e,h("input",null,"finderInput")),g(e,h("button",null,"finderButton","Search")),g(e,h("h2",null,"generatorLabel","Geben Sie ein Gericht ihrer Wahl ein und unser KI gestützter Rezept Generator erstellt ihnen ein fertiges Rezept (Beta)")),g(e,h("input",null,"generatorInput")),g(e,h("button",null,"generatorButton","Create"))})(),(()=>{const e=h("section",null,"recipeSection");g(x,e)})(),(()=>{const e=h("footer","footer");g(L,e);const t=h("div","terms");g(e,t),v("span",1,t,["<a href='#'>Terms of Use</a>","<a href='#'>Privacy Policy</a>"]);const n=h("div","socialmedia");g(e,n),g(n,h("span",null,null,"Follow us on:")),v("a",2,n);const i=h("i","fa-brands");i.classList.add("fa-facebook"),g(n.children[1],i);const r=h("i","fa-brands");r.classList.add("fa-instagram"),g(n.children[2],r);const o=h("i","fa-brands");o.classList.add("fa-twitter"),g(n.children[3],o)})(),document.getElementById("app");const S=document.getElementById("recipeSection"),E=document.getElementById("finderButton");class T{constructor(e,t,n,i,r,o,a,c){this.title=e,this.difficulty=t,this.portions=n,this.ingredients=i,this.time=r/60,this.source=o,this.sourceURL=a,this.image=c}}E.addEventListener("click",(()=>{let e=document.getElementById("finderInput").value;e=encodeURIComponent(e),(async e=>{const t=`https://gustar-io-deutsche-rezepte.p.rapidapi.com/search_api?text=${e}&page=1&per_page=2`,n={method:"GET",headers:{"X-RapidAPI-Key":"1f98616057msh05389b767bd090fp133c7bjsn34cb1de9bfa7","X-RapidAPI-Host":"gustar-io-deutsche-rezepte.p.rapidapi.com"}};try{const e=await fetch(t,n),i=await e.json();console.log(i),await(async e=>{S.innerHTML="",e.forEach((e=>{!function(e,t){let n=document.createElement("div");n.classList.add("recipeBox"),t.appendChild(n);let i=document.createElement("h3");i.classList.add("recipeTitle"),i.innerHTML=e.title,n.appendChild(i);let r=document.createElement("img");r.classList.add("recipeImage"),r.src=e.image[0],n.appendChild(r);let o=document.createElement("a");o.classList.add("recipeSource"),o.href=e.sourceURL,o.innerHTML="Quelle: "+e.source,n.appendChild(o);let a=document.createElement("p");a.classList.add("recipeDifficulty"),""!==e.difficulty&&void 0!==e.difficulty||(e.difficulty="nicht angegeben"),a.innerHTML="Schwierigkeit: "+e.difficulty,n.appendChild(a);let c=document.createElement("p");c.classList.add("recipePortions"),c.innerHTML="Portionen: "+e.portions,n.appendChild(c);let d=document.createElement("p");d.classList.add("recipeTime"),d.innerHTML="Kochzeit: "+e.time+" Minuten",n.appendChild(d);let s=document.createElement("div");s.classList.add("allIngredients"),n.appendChild(s);for(let t of e.ingredients){let e=document.createElement("div");e.classList.add("recipeIngBox"),s.appendChild(e);let n=document.createElement("span");n.innerHTML=t.amount+" ",e.appendChild(n);let i=document.createElement("span");i.innerHTML=t.unit+" ",e.appendChild(i);let r=document.createElement("span");r.innerHTML=t.name,e.appendChild(r)}}(new T(e.title,e.difficulty,e.portions,e.ingredients,e.totalTime,e.source_url,e.source,e.image_urls),S)}))})(i)}catch(e){console.error(e)}})(e)}))})()})();