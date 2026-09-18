import '../css/main.css';
import { initCookieBanner } from './cookie.js';
import { initWhatsAppForm } from './form.js';
import { initReveal } from './reveal.js';

function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const hasHero = !!document.getElementById('hero');

  const onScroll = () => {
    if (!hasHero) {
      header.classList.add('scrolled');
      return;
    }
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  toggle?.addEventListener('click', () => {
    menu?.classList.toggle('open');
    const open = menu?.classList.contains('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  menu?.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });
}

function initHeroVideo() {
  const video = document.getElementById('hero-video');
  if (!video) return;

  video.muted = true;
  video.playsInline = true;
  video.setAttribute('playsinline', '');
  video.setAttribute('webkit-playsinline', '');

  const tryPlay = () => {
    const p = video.play();
    if (p && typeof p.catch === 'function') {
      p.catch(() => {
        /* Autoplay blocked — poster/first frame still shows */
      });
    }
  };

  if (video.readyState >= 2) tryPlay();
  else video.addEventListener('loadeddata', tryPlay, { once: true });

  document.addEventListener(
    'visibilitychange',
    () => {
      if (!document.hidden && video.paused) tryPlay();
    },
    { passive: true }
  );
}

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initCookieBanner();
  initWhatsAppForm();
  initReveal();
  initHeroVideo();
});
