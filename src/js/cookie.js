const KEY = 'cleanfree_cookie_consent';

export function initCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  try {
    if (localStorage.getItem(KEY)) {
      banner.classList.add('hidden');
      return;
    }
  } catch {
    /* ignore */
  }

  banner.classList.remove('hidden');

  const accept = document.getElementById('cookie-accept');
  const decline = document.getElementById('cookie-decline');

  const save = (value) => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    banner.classList.add('hidden');
  };

  accept?.addEventListener('click', () => save('accepted'));
  decline?.addEventListener('click', () => save('declined'));
}
