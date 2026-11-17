// Navigation, lightbox and WhatsApp form. No dependencies.
(() => {
  const d = document, h = d.documentElement, b = d.querySelector('.burger');
  const page = location.pathname.split('/').pop() || 'index.html';
  const setMenu = o => {
    h.classList.toggle('open', o);
    b.setAttribute('aria-expanded', o);
    b.setAttribute('aria-label', o ? 'Close menu' : 'Open menu');
  };
  b.addEventListener('click', () => setMenu(!h.classList.contains('open')));
  d.querySelectorAll('.nav a').forEach(a => {
    a.addEventListener('click', () => setMenu(false));
    if (a.getAttribute('href') === page) a.setAttribute('aria-current', 'page');
  });
  d.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  matchMedia('(min-width:900px)').addEventListener('change', e => e.matches && setMenu(false));

  const lb = d.getElementById('lb');
  if (lb) {
    const big = lb.querySelector('img');
    d.querySelectorAll('.gal button').forEach(x => x.addEventListener('click', () => {
      const s = x.querySelector('img'); big.src = s.src; big.alt = s.alt; lb.showModal();
    }));
    lb.addEventListener('click', () => lb.close());
  }

  // Contact form: opens WhatsApp using the number in the floating button link.
  const f = d.getElementById('cf');
  if (f) f.addEventListener('submit', e => {
    e.preventDefault();
    const base = d.querySelector('.wa').href.split('?')[0];
    const t = "Hi, I'm " + f.elements.nm.value.trim() + '. ' + f.elements.msg.value.trim();
    window.open(base + '?text=' + encodeURIComponent(t), '_blank', 'noopener');
  });
})();
