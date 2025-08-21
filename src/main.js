import './style.css';

function updateCountdown(targetDate) {
  const container = document.querySelector(".countdown-container");
  if (!container) return;

  const now = new Date();
  const eventDate = new Date(targetDate);
  const diff = eventDate - now;

  if (isNaN(eventDate.getTime())) {
    container.innerHTML = "<p>Ungültiges Datum.</p>";
    return;
  }

  if (diff <= 0) {
    container.innerHTML = "<p>Das Event hat bereits stattgefunden.</p>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const updateText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.innerText = value;
  };

  updateText("days", days);
  updateText("hours", hours);
  updateText("minutes", minutes);
  updateText("seconds", seconds);
}

function startCountdown(config) {
  const targetDate = config?.eventDate || '2025-12-09';
  updateCountdown(targetDate);
  setInterval(() => updateCountdown(targetDate), 1000);
}

// Staffbase erwartet diese Funktion:
export const initialize = () => {
  const container = document.createElement('div');
  container.classList.add('countdown-container');
  container.innerHTML = `
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
  `;
  document.body.appendChild(container);

  startCountdown({ eventDate: '2025-12-09' });
};
