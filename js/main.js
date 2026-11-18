(() => {
  const body = document.body, burger = document.querySelector('.burger'), nav = document.getElementById('nav');
  const reduced = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const setNav = open => {
    body.classList.toggle('nav-open', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  burger.addEventListener('click', () => setNav(!body.classList.contains('nav-open')));
  nav.addEventListener('click', e => { if (e.target.closest('a')) setNav(false); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && body.classList.contains('nav-open')) { setNav(false); burger.focus(); }
  });
  matchMedia('(min-width:900px)').addEventListener('change', e => e.matches && setNav(false));

  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduced) {
    const io = new IntersectionObserver(es => es.forEach(x => {
      if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); }
    }), { threshold: .15 });
    items.forEach(el => io.observe(el));
  } else items.forEach(el => el.classList.add('in'));

  const up = document.querySelector('.to-top');
  addEventListener('scroll', () => up.classList.toggle('show', scrollY > 700), { passive: true });
  up.addEventListener('click', () => scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' }));
})();
