const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initTiltCards() {
  if (prefersReducedMotion) return;

  document.querySelectorAll<HTMLElement>('[data-tilt-card]:not([data-tilt-ready])').forEach((card) => {
    card.dataset.tiltReady = 'true';

    const setTilt = (x: number, y: number) => {
      card.style.setProperty('--tilt-x', x.toFixed(2));
      card.style.setProperty('--tilt-y', y.toFixed(2));
    };

    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      setTilt(px * 16, py * 16);
    });

    card.addEventListener('pointerleave', () => setTilt(0, 0));
  });
}

initTiltCards();
document.addEventListener('astro:page-load', initTiltCards);
