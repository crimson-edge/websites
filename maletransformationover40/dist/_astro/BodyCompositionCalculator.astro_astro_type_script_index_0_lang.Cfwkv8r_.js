function l(e){const t=u(e),n=y(t,e.age),o=m(e,t),r=h(o,e.age),a=e.waist/e.hip,i=p(a),{analysis:s,details:g,recommendations:c}=f({bodyFatPercentage:t,bodyFatCategory:n,mmi:o,mmiCategory:r,whr:a,whrCategory:i,age:e.age});return{bodyFatPercentage:t,bodyFatCategory:n,mmi:o,mmiCategory:r,whr:a,whrCategory:i,analysis:s,details:g,recommendations:c}}function u(e){const{height:t,neck:n,waist:o,hip:r}=e,a=Math.log10(o-n),i=Math.log10(t),s=86.01*a-70.041*i+36.76;return Math.max(5,Math.min(s,45))}function m(e,t){const{weight:n,height:o}=e,r=n*(1-t/100),a=o*.0254;return r/(a*a)}function y(e,t){return t<50?e<14?"Athletic":e<18?"Fit":e<25?"Average":"Above Average":e<16?"Athletic":e<20?"Fit":e<27?"Average":"Above Average"}function h(e,t){return t<50?e>22?"Excellent":e>19?"Good":e>17?"Average":"Below Average":e>21?"Excellent":e>18?"Good":e>16?"Average":"Below Average"}function p(e){return e<.9?"Low Risk":e<1?"Moderate Risk":"High Risk"}function f(e){const t=`Based on your measurements, here's a comprehensive analysis of your body composition. Your results indicate a ${e.bodyFatCategory.toLowerCase()} body fat level, ${e.mmiCategory.toLowerCase()} muscle mass, and ${e.whrCategory.toLowerCase()} health profile based on your waist-to-hip ratio.`,n=[`Your body fat percentage of ${e.bodyFatPercentage.toFixed(1)}% is ${e.bodyFatCategory.toLowerCase()} for your age group.`,`Your Muscle Mass Index of ${e.mmi.toFixed(1)} indicates ${e.mmiCategory.toLowerCase()} muscular development.`,`Your Waist-to-Hip ratio of ${e.whr.toFixed(2)} suggests a ${e.whrCategory.toLowerCase()} for metabolic health concerns.`],o=C(e);return{analysis:t,details:n,recommendations:o}}function C(e){const t=[];return e.bodyFatCategory==="Above Average"?(t.push("Focus on creating a moderate caloric deficit through diet and exercise"),t.push("Incorporate high-intensity interval training (HIIT) 2-3 times per week")):(e.bodyFatCategory==="Athletic"||e.bodyFatCategory==="Fit")&&(t.push("Maintain current body composition through balanced nutrition"),t.push("Continue regular strength training to preserve muscle mass")),e.mmiCategory==="Below Average"?(t.push("Prioritize progressive resistance training 3-4 times per week"),t.push("Increase protein intake to support muscle growth")):e.mmiCategory==="Excellent"&&(t.push("Continue current training routine while monitoring recovery"),t.push("Focus on maintaining strength and preventing injuries")),e.whrCategory==="High Risk"&&(t.push("Incorporate regular cardiovascular exercise to reduce abdominal fat"),t.push("Consider consulting with a healthcare provider about metabolic health")),e.age>=50&&(t.push("Ensure adequate recovery between training sessions"),t.push("Include joint-friendly exercises in your routine")),t}const v=document.getElementById("bodyCompositionForm"),d=document.getElementById("results");v?.addEventListener("submit",e=>{e.preventDefault();const t=parseInt(document.getElementById("age").value),n=parseFloat(document.getElementById("weight").value),o=parseFloat(document.getElementById("height").value),r=parseFloat(document.getElementById("waist").value),a=parseFloat(document.getElementById("hip").value),i=parseFloat(document.getElementById("neck").value),s=l({age:t,weight:n,height:o,waist:r,hip:a,neck:i});w(s),d?.classList.remove("hidden"),d?.scrollIntoView({behavior:"smooth"})});function w(e){const t=document.getElementById("bodyFatResult"),n=document.getElementById("bodyFatCategory");t.textContent=`${e.bodyFatPercentage.toFixed(1)}%`,n.textContent=`Category: ${e.bodyFatCategory}`;const o=document.getElementById("mmiResult"),r=document.getElementById("mmiCategory");o.textContent=e.mmi.toFixed(1),r.textContent=`Category: ${e.mmiCategory}`;const a=document.getElementById("whrResult"),i=document.getElementById("whrCategory");a.textContent=e.whr.toFixed(2),i.textContent=`Category: ${e.whrCategory}`;const s=document.getElementById("analysis");s.innerHTML=`
      <div class="space-y-4">
        <p>${e.analysis}</p>
        <ul class="list-disc pl-5 space-y-2">
          ${e.details.map(c=>`<li>${c}</li>`).join("")}
        </ul>
      </div>
    `;const g=document.getElementById("recommendations");g.innerHTML=`
      <ul class="space-y-3">
        ${e.recommendations.map(c=>`
          <li class="flex items-start">
            <i class="fas fa-check-circle text-blue-600 dark:text-blue-400 mt-1 mr-2"></i>
            <span class="text-gray-800 dark:text-gray-200">${c}</span>
          </li>
        `).join("")}
      </ul>
    `}
//# sourceMappingURL=BodyCompositionCalculator.astro_astro_type_script_index_0_lang.Cfwkv8r_.js.map
