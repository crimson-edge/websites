function m(e){const n=e.weight*.453592,a=e.height*2.54,t=10*n+6.25*a-5*e.age+5;let r=Math.round(t*e.activityLevel);switch(e.goal){case"lose":r-=500;break;case"gain":r+=300;break}const o=d(e,r),s=Math.round(o.protein/e.mealsPerDay),i=u(e,o),c=h(e,o,r);return{totalCalories:r,macros:o,proteinPerMeal:s,mealPlan:i,recommendations:c}}function d(e,n){let a;e.age>=50?a=e.goal==="gain"?1.2:1:a=e.goal==="gain"?1.1:.9;const t=Math.round(e.weight*a),r=t*4;let o;e.age>=50?o=.3:o=.25;const s=n*o,i=Math.round(s/9),c=n-r-s,l=Math.round(c/4);return{protein:t,carbs:l,fats:i}}function u(e,n){const a=[],t=Math.round(n.protein/e.mealsPerDay),r=Math.round(n.carbs/e.mealsPerDay),o=Math.round(n.fats/e.mealsPerDay);return a.push({meal:"Breakfast",timing:"Within 1 hour of waking",macros:{protein:t,carbs:Math.round(r*1.2),fats:Math.round(o*1.2)},notes:"Focus on slow-digesting carbs and protein"}),e.mealsPerDay>=4&&a.push({meal:"Pre-workout",timing:"1-2 hours before training",macros:{protein:Math.round(t*.8),carbs:Math.round(r*1.3),fats:Math.round(o*.5)},notes:"Emphasize easily digestible carbs and moderate protein"}),a.push({meal:"Post-workout/Lunch",timing:"Within 1-2 hours after training",macros:{protein:Math.round(t*1.2),carbs:Math.round(r*1.3),fats:Math.round(o*.8)},notes:"Higher protein and carbs for recovery"}),e.mealsPerDay>=5&&a.push({meal:"Afternoon Snack",timing:"3-4 hours after lunch",macros:{protein:Math.round(t*.8),carbs:Math.round(r*.8),fats:Math.round(o*.8)},notes:"Light meal to maintain energy"}),a.push({meal:"Dinner",timing:"2-3 hours before bed",macros:{protein:t,carbs:Math.round(r*.8),fats:o},notes:"Focus on protein and vegetables"}),a}function h(e,n,a){const t=[];switch(e.age>=50&&(t.push("Prioritize protein intake to preserve muscle mass"),t.push("Include healthy fats to support hormone production")),e.goal){case"lose":t.push(`Aim for a moderate deficit of 500 calories (${a} calories per day)`),t.push("Focus on protein-rich foods to preserve muscle while losing fat");break;case"maintain":t.push(`Maintain your weight at ${a} calories per day`),t.push("Balance your macros across meals for sustained energy");break;case"gain":t.push(`Create a slight surplus with ${a} calories per day`),t.push("Emphasize post-workout nutrition for optimal muscle growth");break}return t.push(`Spread your ${n.protein}g of protein across ${e.mealsPerDay} meals`),t.push("Have protein with every meal to maximize muscle protein synthesis"),t.push("Stay hydrated by drinking half your body weight (lbs) in ounces of water"),t.push("Consider taking vitamin D3 and omega-3 supplements for overall health"),t}const g=document.getElementById("nutritionForm"),p=document.getElementById("results");g?.addEventListener("submit",e=>{e.preventDefault();const n={age:parseInt(document.getElementById("age").value),weight:parseFloat(document.getElementById("weight").value),height:parseFloat(document.getElementById("height").value),activityLevel:parseFloat(document.getElementById("activity").value),goal:document.getElementById("goal").value,mealsPerDay:parseInt(document.getElementById("meals").value)},a=m(n);y(a),p?.classList.remove("hidden")});function y(e){const n=document.getElementById("calorieResults");n.innerHTML=`
      <p class="text-2xl font-bold">${e.totalCalories}</p>
      <p class="text-sm">calories per day</p>
    `;const a=document.getElementById("macroResults");a.innerHTML=`
      <p>Protein: ${e.macros.protein}g (${Math.round(e.macros.protein*4)} kcal)</p>
      <p>Carbs: ${e.macros.carbs}g (${Math.round(e.macros.carbs*4)} kcal)</p>
      <p>Fats: ${e.macros.fats}g (${Math.round(e.macros.fats*9)} kcal)</p>
    `;const t=document.getElementById("proteinResults");t.innerHTML=`
      <p class="text-2xl font-bold">${e.proteinPerMeal}g</p>
      <p class="text-sm">protein per meal</p>
    `;const r=document.getElementById("mealPlanResults");r.innerHTML=e.mealPlan.map(s=>`
      <div class="border-b border-gray-200 dark:border-gray-700 pb-3 mb-3 last:border-0">
        <div class="flex justify-between items-center mb-2">
          <h4 class="font-semibold text-gray-900 dark:text-white">${s.meal}</h4>
          <span class="text-sm text-gray-600 dark:text-gray-400">${s.timing}</span>
        </div>
        <div class="text-sm text-gray-700 dark:text-gray-300">
          <p>Protein: ${s.macros.protein}g | Carbs: ${s.macros.carbs}g | Fats: ${s.macros.fats}g</p>
          <p class="mt-1 text-gray-600 dark:text-gray-400">${s.notes}</p>
        </div>
      </div>
    `).join("");const o=document.getElementById("recommendationsResults");o.innerHTML=e.recommendations.map(s=>`
      <p>• ${s}</p>
    `).join("")}
//# sourceMappingURL=NutritionCalculator.astro_astro_type_script_index_0_lang.gg82hcNV.js.map
