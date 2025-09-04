(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // simple click tracker for demo
  const cta = document.querySelector('.cta');
  if (cta) {
    cta.addEventListener('click', () => {
      console.log('CTA clicked for demo purpose so that it gives clarity to user'); // TODO: replace with analytics later
    });
  }
})();
