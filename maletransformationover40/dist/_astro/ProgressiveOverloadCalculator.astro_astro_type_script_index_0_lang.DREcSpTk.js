import{c}from"./exerciseUtils.DU9T_pDC.js";const d=document.getElementById("overloadForm"),o=document.getElementById("results");d?.addEventListener("submit",e=>{e.preventDefault();const t=document.getElementById("exercise").value,l=parseFloat(document.getElementById("currentWeight").value),s=parseInt(document.getElementById("currentReps").value),a=parseInt(document.getElementById("currentSets").value),n=document.getElementById("experience").value,i=document.getElementById("recovery").value,r=c(t,l,s,a,n,i);u(r),o?.classList.remove("hidden")});function u(e){const t=document.getElementById("progressionPlan");t.innerHTML=m(e);const l=document.getElementById("monthlyGoals");l.innerHTML=g(e);const s=document.getElementById("longTermStrategy");s.innerHTML=y(e);const a=document.getElementById("safetyTips");a.innerHTML=p(e)}function m(e){return`
      <div class="space-y-3">
        <div class="text-sm text-gray-600 dark:text-gray-400">
          <p class="font-semibold">Week 1-2:</p>
          <ul class="list-disc pl-4">
            <li>Weight: ${e.weeklyWeight} lbs</li>
            <li>Reps: ${e.weeklyReps}</li>
            <li>Sets: ${e.weeklySets}</li>
          </ul>
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">
          <p class="font-semibold">Focus Areas:</p>
          <ul class="list-disc pl-4">
            ${e.focusAreas.map(t=>`<li>${t}</li>`).join("")}
          </ul>
        </div>
      </div>
    `}function g(e){return`
      <div class="space-y-3">
        <div class="text-sm text-gray-600 dark:text-gray-400">
          <p class="font-semibold">Target Progress:</p>
          <ul class="list-disc pl-4">
            <li>Weight: +${e.monthlyWeightIncrease} lbs</li>
            <li>Volume: +${e.monthlyVolumeIncrease}%</li>
          </ul>
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">
          <p class="font-semibold">Checkpoints:</p>
          <ul class="list-disc pl-4">
            ${e.monthlyCheckpoints.map(t=>`<li>${t}</li>`).join("")}
          </ul>
        </div>
      </div>
    `}function y(e){return`
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-semibold text-gray-900 dark:text-white mb-2">3-Month Outlook</h4>
          <ul class="list-disc pl-4 text-sm text-gray-600 dark:text-gray-400">
            ${e.longTermGoals.map(t=>`<li>${t}</li>`).join("")}
          </ul>
        </div>
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Deload Strategy</h4>
          <ul class="list-disc pl-4 text-sm text-gray-600 dark:text-gray-400">
            ${e.deloadStrategy.map(t=>`<li>${t}</li>`).join("")}
          </ul>
        </div>
      </div>
    `}function p(e){return`
      <ul class="list-disc pl-4">
        ${e.safetyTips.map(t=>`<li>${t}</li>`).join("")}
      </ul>
    `}
//# sourceMappingURL=ProgressiveOverloadCalculator.astro_astro_type_script_index_0_lang.DREcSpTk.js.map
