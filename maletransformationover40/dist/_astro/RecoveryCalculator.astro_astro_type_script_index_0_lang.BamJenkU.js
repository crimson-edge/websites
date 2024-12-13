import{c as a}from"./exerciseUtils.CRaVo5hT.js";const c=document.getElementById("recoveryForm"),d=document.getElementById("results");c?.addEventListener("submit",t=>{t.preventDefault();const e=parseInt(document.getElementById("age").value),i=parseInt(document.getElementById("intensity").value),r=parseInt(document.getElementById("volume").value),n=parseInt(document.getElementById("sleep").value),l=parseInt(document.getElementById("stress").value),s=document.getElementById("muscleGroup").value,o=a(e,i,r,n,l);m(o,{age:e,intensity:i,volume:r,sleep:n,stress:l,muscleGroup:s}),d?.classList.remove("hidden")});function m(t,e){const i=document.getElementById("recoveryTime");i.textContent=`${t.recoveryDays} days`;const r=document.getElementById("recoveryInterpretation");r.textContent=u(t.recoveryDays,e.muscleGroup);const n=document.getElementById("recoveryFactors");n.innerHTML=g(e);const l=document.getElementById("recoveryPlan");l.innerHTML=y(t,e);const s=document.getElementById("activeRecovery");s.innerHTML=v(e)}function u(t,e){const i=`Optimal recovery time: ${t} days. `;return e==="large"?i+"Large muscle groups typically require more recovery time.":e==="medium"?i+"Medium muscle groups have moderate recovery needs.":i+"Smaller muscle groups generally recover faster."}function g(t){let e="";return t.age>50&&(e+="<li>Age factor: Increased recovery needs</li>"),t.intensity>7&&(e+="<li>High intensity: Extended recovery required</li>"),t.sleep<7&&(e+="<li>Sleep quality: May impact recovery time</li>"),t.stress>7&&(e+="<li>High stress: Consider additional recovery</li>"),e}function y(t,e){return`
      <div class="space-y-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Daily Recovery Protocol</h4>
          <ul class="list-disc pl-4 text-sm text-gray-600 dark:text-gray-400">
            <li>Proper post-workout nutrition within 30 minutes</li>
            <li>Adequate protein intake (1g per pound of bodyweight)</li>
            <li>Hydration (minimum 8-10 glasses of water)</li>
            <li>${e.sleep<7?"Prioritize sleep improvement":"Maintain good sleep habits"}</li>
          </ul>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Recovery Techniques</h4>
          <ul class="list-disc pl-4 text-sm text-gray-600 dark:text-gray-400">
            <li>Light stretching or yoga</li>
            <li>Foam rolling or massage</li>
            <li>Walking or light cardio</li>
            <li>Contrast showers or ice baths</li>
          </ul>
        </div>
      </div>
    `}function v(t){let e='<ul class="list-disc pl-4">';return t.intensity>7||t.volume>20?e+=`
        <li>Light cardio (20-30 minutes)</li>
        <li>Mobility work</li>
        <li>Swimming or water exercises</li>
      `:e+=`
        <li>Brisk walking</li>
        <li>Light resistance training</li>
        <li>Dynamic stretching</li>
      `,e+=`
      <li>Yoga or gentle stretching</li>
      <li>Light recreational activities</li>
    </ul>`,e}
//# sourceMappingURL=RecoveryCalculator.astro_astro_type_script_index_0_lang.BamJenkU.js.map
