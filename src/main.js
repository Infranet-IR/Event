import './style.css';

function updateCountdown(targetDate) {
  const container = document.createElement('div');
  container.className = 'countdown-container';

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

  const update = () => {
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

    container.querySelector('#days').innerText = days;
    container.querySelector('#hours').innerText = hours;
    container.querySelector('#minutes').innerText = minutes;
    container.querySelector('#seconds').innerText = seconds;
  };

  update();
  setInterval(update, 1000);
}

// ✅ Registrierung bei Staffbase
window.defineBlock({
  blockDefinition: {
    name: 'event-countdown',
    factory: () => ({
      render: (container, config) => {
        const eventDate = config?.eventDate || '2025-12-09';
        updateCountdown(eventDate);
      }
    }),
    attributes: ['eventDate'],
    label: 'Event Countdown',
    iconUrl: 'https://yourdomain.com/icon.svg' // optional
  },
  author: 'Dein Name',
  version: '1.0.0'
});
