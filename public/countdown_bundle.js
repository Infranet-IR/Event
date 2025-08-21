(function(){"use strict";function s(o){const n=document.createElement("div");n.className="countdown-container",n.innerHTML=`
    <div class="countdown-box">
      <div id="days" class="countdown-number">0</div>
      <div class="countdown-label">Tage</div>
    </div>
    <div class="countdown-box">
      <div id="hours" class="countdown-number">0</div>
      <div class="countdown-label">Std</div>
    </div>
    <div class="countdown-box">
      <div id="minutes" class="countdown-number">0</div>
      <div class="countdown-label">Min</div>
    </div>
    <div class="countdown-box">
      <div id="seconds" class="countdown-number">0</div>
      <div class="countdown-label">Sek</div>
    </div>
  `,document.body.appendChild(n);const t=()=>{const i=new Date,d=new Date(o),e=d-i;if(isNaN(d.getTime())){n.innerHTML="<p>Ungültiges Datum.</p>";return}if(e<=0){n.innerHTML="<p>Das Event hat bereits stattgefunden.</p>";return}const c=Math.floor(e/(1e3*60*60*24)),a=Math.floor(e/(1e3*60*60)%24),r=Math.floor(e/(1e3*60)%60),u=Math.floor(e/1e3%60);n.querySelector("#days").innerText=c,n.querySelector("#hours").innerText=a,n.querySelector("#minutes").innerText=r,n.querySelector("#seconds").innerText=u};t(),setInterval(t,1e3)}window.defineBlock({blockDefinition:{name:"event-countdown",factory:()=>({render:(o,n)=>{const t=(n==null?void 0:n.eventDate)||"2025-12-09";s(t)}}),attributes:["eventDate"],label:"Event Countdown",iconUrl:"https://yourdomain.com/icon.svg"},author:"Dein Name",version:"1.0.0"})})();
