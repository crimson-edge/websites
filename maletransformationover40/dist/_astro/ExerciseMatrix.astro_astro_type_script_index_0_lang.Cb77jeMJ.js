import{g as d}from"./exerciseUtils.DU9T_pDC.js";const c=document.getElementById("exerciseForm"),m=document.getElementById("results");c?.addEventListener("submit",i=>{i.preventDefault();const e=parseInt(document.getElementById("shoulderHealth").value),s=parseInt(document.getElementById("hipHealth").value),l=parseInt(document.getElementById("backHealth").value),t=parseInt(document.getElementById("ankleHealth").value),n=document.getElementById("targetMuscle").value,a=document.getElementById("experience").value,r={mobility:(e+s+l+t)/4,pain:10-Math.min(e,s,l,t),strength:a==="beginner"?5:a==="intermediate"?7:9},o=d(n,r,a);u(o,r),m?.classList.remove("hidden")});function u(i,e){const s=document.getElementById("recommendedExercises"),l=document.getElementById("guidelines");s.innerHTML=i.map(t=>`
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">${t.name}</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-2">${t.description}</p>
        <div class="space-y-2">
          <div>
            <h4 class="font-medium text-gray-700 dark:text-gray-300">Benefits:</h4>
            <ul class="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
              ${t.benefits.map(n=>`<li>${n}</li>`).join("")}
            </ul>
          </div>
          ${t.precautions?`
            <div>
              <h4 class="font-medium text-gray-700 dark:text-gray-300">Precautions:</h4>
              <ul class="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
                ${t.precautions.map(n=>`<li>${n}</li>`).join("")}
              </ul>
            </div>
          `:""}
        </div>
      </div>
    `).join(""),l.innerHTML=g(e)}function g(i){let e='<ul class="list-disc pl-4">';return i.pain>5&&(e+=`
        <li>Focus on proper warm-up and mobility work</li>
        <li>Use higher rep ranges (12-15) to reduce joint stress</li>
        <li>Consider incorporating deload weeks more frequently</li>
      `),i.mobility<7&&(e+=`
        <li>Include specific mobility work before each session</li>
        <li>Consider working with reduced range of motion initially</li>
        <li>Gradually increase movement range as mobility improves</li>
      `),e+=`
      <li>Start with 2-3 sets per exercise</li>
      <li>Rest 1-2 minutes between sets</li>
      <li>Focus on proper form over weight</li>
    `,e+="</ul>",e}
//# sourceMappingURL=ExerciseMatrix.astro_astro_type_script_index_0_lang.Cb77jeMJ.js.map
