(()=>{"use strict";const e=(e,t)=>Array.from({length:t}).map((()=>Array.from({length:e}).fill(0)));function t(e,t,n){const r=`<table border=10px>${t.map(((e,t)=>`<tr>${e.map(((e,n)=>1===e?`<td\n        data-x=${n}\n        data-y=${t}\n        class="cell alive"\n        style="background-color:#03120b; height:40px; width:40px;"></td>`:2===e?`<td \n                      data-x=${n}\n                      data-y=${t}\n                      class="cell shouldDie" \n                      style="background-color:#0000FF; height:40px; width:40px;">\n                  </td>`:`<td\n      data-x=${n}\n      data-y=${t}\n      class="cell dead"\n      style="background-color:#FFFFFF; height:40px; width:40px;"></td>`)).join("")}</tr>`)).join("")}</table>`;e.innerHTML=r;const i=e.querySelector("table");i&&i.addEventListener("click",(e=>{const t=e.target,r=t.getAttribute("data-x"),i=t.getAttribute("data-y");Number(r)>=1&&Number(i)>=1&&n(Number(r),Number(i))}))}function n(e,t,n){const r=e[n];if(void 0===r)return 0;const i=r[t];return void 0===i?0:i}function r(e){return e.map(((t,r)=>t.map(((t,i)=>{const d=function(e,t,r){let i=0;for(let d=e-1;d<=e+1;d+=1)i+=Number(n(r,d,t-1)),i+=Number(n(r,d,t+1));return i+=Number(n(r,e-1,t)),i+=Number(n(r,e+1,t)),i}(i,r,e),a=n(e,i,r);var o;return 3===(o=d)||2===o&&1===a?1:0}))))}const i=document.createElement("div");document.body.appendChild(i),function(n=1,i=1,d){let a,o=!1,l=n,c=i;d.innerHTML=`<div class="field-wrapper"></div><button>Start</button></div>\n  <input type='range' id='speedRangeSlider' name='speedRangeSlider' min='0' max='900' value='500' step='100'>\n  <input id='numberX' type='number' min='1' max='50' value=${n} step='1'>\n  <input id='numberY' type='number' min='1' max='50' value=${i} step='1'>\n  <br><br>\n <div>Живая клетка<div style="width:10px;height:10px;border:1px solid #03120b; background: #03120b">\n</div></div>\n <div>Мертвая клетка<div style="width:10px;height:10px;border:1px solid #03120b; background: cornsilk">\n</div></div>\n <div>Обреченная на смерть клетка<div style="width:10px;height:10px;border:1px solid #03120b; background: #0000FF">\n</div></div>\n`;let u=1e3;const s=d.querySelector(".field-wrapper"),b=d.querySelector("button"),p=d.querySelector("#speedRangeSlider");let m=e(n,i);const v=(e,n)=>{m[n][e]=Number(!m[n][e]),t(s,m,v)};function g(){o=!1,b.innerHTML="Start",clearInterval(a)}function h(){o=!0,b.innerHTML="Stop",a=setInterval((()=>{const e=JSON.parse(JSON.stringify(m));m=r(e);const n=r(m),i=((e,t)=>{const n=JSON.parse(JSON.stringify(e));return e.forEach(((r,i)=>r.forEach(((r,d)=>{1===e[i][d]&&0===t[i][d]&&(n[i][d]=2)})))),n})(m,n);t(s,i,v),n.toString()===e.toString()&&g(),function(e){for(let t=0;t<e.length;t++){const n=e[t];for(let e=0;e<n.length;e++)if(n[e])return!0}return!1}(m)||(alert("Все клетки погибли"),g())}),u),p.addEventListener("change",(()=>{clearInterval(a);const e=Number(p.value);u=1e3-e,h()}))}t(s,m,v);const y=d.querySelector("#numberX"),f=d.querySelector("#numberY");function x(){l=Number(y.value),c=Number(f.value),c>=1&&l>=1&&c<=50&&l<=50?(m=e(l,c),t(s,m,v)):alert("Введите число от 1 до 50")}y?.addEventListener("click",x),f?.addEventListener("click",x),b.addEventListener("click",(()=>{o?g():h()}))}(10,10,i)})();