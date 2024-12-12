import{a as y,b as g}from"./calculators.B1B04EOU.js";const p=document.getElementById("trainingForm"),v=document.getElementById("results");p?.addEventListener("submit",r=>{r.preventDefault();const t=parseInt(document.getElementById("age").value),o=document.getElementById("intensity").value,n=document.getElementById("sleep").value,i=document.getElementById("stress").value,e=document.getElementById("experience").value,l=g(t,o,n,i),a=Array.from(document.querySelectorAll('input[name="exercises"]:checked')).map(s=>s.value);if(document.getElementById("recoveryTime")){document.getElementById("recoveryTime").textContent=`${l} hours`;const s=document.getElementById("volumeRecommendations");s.innerHTML="",a.forEach(c=>{const m=y(c,e),u=c==="compound"?"Compound Exercises":"Isolation Exercises";s.innerHTML+=`
          <p class="text-gray-700 dark:text-gray-300">
            ${u}: ${m.minSets}-${m.maxSets} sets per muscle group per week
          </p>
        `});const d=document.getElementById("recommendations");d.innerHTML=h(t,l,o,n,i),v?.classList.remove("hidden")}});function h(r,t,o,n,i){let e='<ul class="list-disc pl-4 space-y-2">';return t>48&&(e+=`<li>Consider splitting your workouts to allow for ${Math.ceil(t/24)} days of recovery between training the same muscle groups.</li>`),r>50&&(e+="<li>Include additional warm-up sets and focus on joint mobility work before intense training.</li>"),(n==="poor"||n==="fair")&&(e+="<li>Prioritize sleep hygiene to improve recovery. Consider training earlier in the day.</li>"),(i==="high"||i==="very_high")&&(e+="<li>Consider reducing training intensity or volume during high-stress periods.</li>"),o==="very_high"&&(e+="<li>Limit very high intensity sessions to 1-2 per week to prevent overtraining.</li>"),e+="</ul>",e}
