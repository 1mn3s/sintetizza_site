document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const sequence = (elements, start = 0, step = 110, variant = '') => {
    elements.forEach((el, index) => {
      el.classList.add('reveal-item');
      if (variant) el.classList.add(variant);
      el.style.setProperty('--reveal-delay', `${start + index * step}ms`);
    });
  };

  sequence([...document.querySelectorAll('.hero-copy > *')], 80, 120);
  sequence([...document.querySelectorAll('.hero-card > *')], 420, 95, 'reveal-right');
  document.querySelector('.hero-card')?.classList.add('reveal-item', 'reveal-right');
  document.querySelector('.hero-card')?.style.setProperty('--reveal-delay', '300ms');

  document.querySelectorAll('.section, .cta, footer').forEach((section) => {
    const heading = section.querySelector('.eyebrow');
    const title = section.querySelector('h2');
    const intro = section.querySelector('.section-head > p, .narrow > p:not(.eyebrow), .content > p, .local-copy');

    if (heading) sequence([heading], 0, 0);
    if (title) sequence([title], 90, 0);
    if (intro) sequence([intro], 180, 0);

    sequence([...section.querySelectorAll('.card')], 180, 95, 'reveal-scale');
    sequence([...section.querySelectorAll('.steps article')], 160, 100);
    sequence([...section.querySelectorAll('.stats-grid > div')], 100, 110);
    sequence([...section.querySelectorAll('.cities span')], 170, 70, 'reveal-scale');
    sequence([...section.querySelectorAll('.faq-list details')], 140, 90);
    sequence([...section.querySelectorAll('.checklist li')], 180, 80);
  });

  sequence([...document.querySelectorAll('.split .media')], 60, 0, 'reveal-left');
  sequence([...document.querySelectorAll('.split .content > *')], 140, 90, 'reveal-right');
  sequence([...document.querySelectorAll('.cta-inner > *')], 80, 140);
  sequence([...document.querySelectorAll('.footer-grid > div')], 60, 100);

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -7% 0px'
  });

  document.querySelectorAll('.reveal-item').forEach((el) => observer.observe(el));
});
