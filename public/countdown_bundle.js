var CountdownWidget=function(d){"use strict";function i(n){const t=document.querySelector(".countdown-container");if(!t)return;const l=new Date,s=new Date(n),e=s-l;if(isNaN(s.getTime())){t.innerHTML="<p>Ungültiges Datum.</p>";return}if(e<=0){t.innerHTML="<p>Das Event hat bereits stattgefunden.</p>";return}const r=Math.floor(e/(1e3*60*60*24)),v=Math.floor(e/(1e3*60*60)%24),w=Math.floor(e/(1e3*60)%60),b=Math.floor(e/1e3%60),o=(m,f)=>{const c=document.getElementById(m);c&&(c.innerText=f)};o("days",r),o("hours",v),o("minutes",w),o("seconds",b)}function a(n){const t=n==null?void 0:n.eventDate;i(t),setInterval(()=>i(t),1e3)}const u=()=>{const n=document.createElement("div");n.classList.add("countdown-container"),n.innerHTML=`
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
  `,document.body.appendChild(n),a({eventDate:"2025-12-09"})};return d.initialize=u,Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),d}({});
