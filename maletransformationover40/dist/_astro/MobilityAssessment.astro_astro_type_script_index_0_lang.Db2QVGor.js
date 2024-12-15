import{a as c}from"./exerciseUtils.DU9T_pDC.js";const m=document.getElementById("mobilityForm"),d=document.getElementById("results");m?.addEventListener("submit",e=>{e.preventDefault();const i=parseInt(document.getElementById("shoulderMobility").value),t=parseInt(document.getElementById("hipMobility").value),n=parseInt(document.getElementById("ankleMobility").value),o=parseInt(document.getElementById("spineMobility").value),l=c(i,t,n,o);u(l,{shoulder:i,hip:t,ankle:n,spine:o}),d?.classList.remove("hidden")});function u(e,i){const t=document.getElementById("mobilityScore");t.textContent=e.score.toFixed(1)+"/10";const n=document.getElementById("scoreInterpretation");n.textContent=y(e.score);const o=document.getElementById("focusAreas");o.innerHTML=e.recommendations.map(a=>`<li>${a}</li>`).join("");const l=document.getElementById("mobilityRoutine");l.innerHTML=p(i);const s=document.getElementById("recommendations");s.innerHTML=g(e.score)}function y(e){return e>=8?"Excellent mobility. Focus on maintenance and prevention.":e>=6?"Good mobility. Address specific limitations for improvement.":e>=4?"Fair mobility. Consistent mobility work recommended.":"Limited mobility. Consider working with a professional for improvement."}function r(e,i,t,n){return`
      <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 class="font-semibold text-gray-900 dark:text-white mb-2">${e}</h4>
        <p class="text-gray-600 dark:text-gray-300 mb-2">${i}</p>
        <div class="text-sm">
          <p class="text-gray-500 dark:text-gray-400"><strong>Sets/Reps:</strong> ${t}</p>
          <p class="text-gray-500 dark:text-gray-400"><strong>Frequency:</strong> ${n}</p>
        </div>
      </div>
    `}function p(e){let i='<div class="space-y-4">';return e.shoulder<7&&(i+=r("Shoulder Mobility Complex","Perform arm circles, wall slides, and band pull-aparts to improve shoulder range of motion.","2-3 sets of 10-15 reps each","Daily")),e.hip<7&&(i+=r("Hip Mobility Flow","Perform hip flexor stretches, figure-4 stretches, and deep squat holds.","Hold each position 30-60 seconds","Daily")),e.ankle<7&&(i+=r("Ankle Mobility Work","Wall ankle mobilization, calf stretches, and ankle circles.","2-3 sets of 10-15 reps","Daily")),e.spine<7&&(i+=r("Spine Mobility Sequence","Cat-cow stretches, thoracic extensions, and controlled rotations.","10-15 reps each movement","Daily")),i+="</div>",i}function g(e,i){let t='<ul class="list-disc pl-4">';return t+="<li>Perform mobility work before strength training</li>",t+="<li>Stay consistent with daily mobility routine</li>",e<6&&(t+="<li>Consider working with a mobility specialist</li>",t+="<li>Focus on proper form over range of motion initially</li>"),e>=6&&e<8&&(t+="<li>Gradually increase range of motion in exercises</li>",t+="<li>Add dynamic movements to your warm-up routine</li>"),e>=8&&(t+="<li>Maintain current mobility with regular practice</li>",t+="<li>Help others improve their mobility</li>"),t+="</ul>",t}
//# sourceMappingURL=MobilityAssessment.astro_astro_type_script_index_0_lang.Db2QVGor.js.map