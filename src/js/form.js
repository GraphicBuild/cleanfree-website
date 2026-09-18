const WA_NUMBER = '4917684498697';

export function initWhatsAppForm() {
  const form = document.getElementById('kontakt-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#name')?.value?.trim() || '';
    const contact = form.querySelector('#kontakt-weg')?.value?.trim() || '';
    const category = form.querySelector('#kategorie')?.value || '';
    const message = form.querySelector('#nachricht')?.value?.trim() || '';
    const privacy = form.querySelector('#privacy')?.checked;

    if (!name || !contact || !category || !message || !privacy) {
      form.reportValidity();
      return;
    }

    const body = [
      'Anfrage über cleanfree.de',
      '',
      `Name: ${name}`,
      `Kontakt: ${contact}`,
      `Kategorie: ${category}`,
      '',
      'Nachricht:',
      message,
    ].join('\n');

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(body)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}
