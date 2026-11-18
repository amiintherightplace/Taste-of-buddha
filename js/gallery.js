(() => {
  const items = [...document.querySelectorAll('.g-item')];
  if (!items.length) return;
  const lb = document.createElement('div');
  lb.className = 'lb';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', 'Image viewer');
  lb.innerHTML = '<button class="x" aria-label="Close image">&times;</button><button class="pv" aria-label="Previous image">&lsaquo;</button><img alt=""><p></p><button class="nx" aria-label="Next image">&rsaquo;</button>';
  document.body.appendChild(lb);
  const img = lb.querySelector('img'), cap = lb.querySelector('p');
  let i = 0, opener = null;
  const show = n => {
    i = (n + items.length) % items.length;
    const a = items[i], t = a.querySelector('img');
    img.src = a.href; img.alt = t.alt; cap.textContent = a.dataset.cap || '';
  };
  const open = n => { opener = document.activeElement; show(n); lb.classList.add('open'); document.body.style.overflow = 'hidden'; lb.querySelector('.x').focus(); };
  const close = () => { lb.classList.remove('open'); document.body.style.overflow = ''; if (opener) opener.focus(); };
  items.forEach((a, n) => a.addEventListener('click', e => { e.preventDefault(); open(n); }));
  lb.querySelector('.x').onclick = close;
  lb.querySelector('.pv').onclick = () => show(i - 1);
  lb.querySelector('.nx').onclick = () => show(i + 1);
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(i - 1);
    if (e.key === 'ArrowRight') show(i + 1);
  });
  let x0 = null;
  lb.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => {
    if (x0 === null) return;
    const d = e.changedTouches[0].clientX - x0;
    if (Math.abs(d) > 50) show(i + (d < 0 ? 1 : -1));
    x0 = null;
  });
})();
