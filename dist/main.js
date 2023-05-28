(()=>{"use strict";function e(e){let t=[];return Object.keys(e).forEach((n=>{t.push(e[n].name)})),t.toString()}function t(e){let t=[];return Object.keys(e).forEach((n=>{t.push(e[n])})),t.toString()}async function n(n,r){try{const o=await fetch("https://countries.trevorblades.com/",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({query:"query getCountries($code: ID!){\n            continent(code: $code){\n                countries{\n                    name, code\n                }\n            }\n          }",variables:{code:n}})});return function(n,r){let o=[];for(let e=0;e<n;e++){let t=Math.floor(Math.random()*r.length-e)+e;o.push(r[t]),r.push(r.splice(t,1)[0])}return o.forEach((n=>{!async function(n){try{const r=await fetch(`https://restcountries.com/v3.1/name/${n}`,{mode:"cors"});!function(n){let r={OfficialName:n.name.official,Capital:n.capital.toString(),Population:n.population,Currency:e(n.currencies),Subregion:n.subregion,Languages:t(n.languages)};console.log(r)}((await r.json())[0])}catch(e){return console.error(e),"There's been an error. Try again."}}(n.name)})),o}(r,(await o.json()).data.continent.countries)}catch(e){return console.error(e),"There's been an error. Try again."}}const r=document.querySelector("select"),o=document.querySelector('input[type="range"]'),c=document.querySelector("button"),a=document.querySelector("form");Object.entries({AF:"Africa",AN:"Antarctica",AS:"Asia",EU:"Europe",NA:"North America",OC:"Ocenia",SA:"South America"}).forEach((e=>{const[t,n]=e,o=document.createElement("option");o.innerHTML=n,o.value=t,o.id=t,r.appendChild(o)})),c.innerHTML=`Show ${o.value} countries`,o.addEventListener("input",(()=>{c.innerHTML=`Show ${o.value} countries`})),a.addEventListener("submit",(e=>{e.preventDefault(),n(r.value,o.value)}))})();