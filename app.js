document.addEventListener('DOMContentLoaded', () => {
  const langEnBtn = document.getElementById('lang-en');
  const langDeBtn = document.getElementById('lang-de');

  const setLanguage = async (language) => {
    try {
      const response = await fetch(`${language}.json`);
      if (!response.ok) {
        console.error(`Could not load ${language}.json`);
        return;
      }
      const translations = await response.json();

      document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[key]) {
          element.innerHTML = translations[key];
        }
      });

      document.documentElement.lang = language;

    } catch (error) {
      console.error('Error setting language:', error);
    }
  };

  langEnBtn.addEventListener('click', () => setLanguage('en'));
  langDeBtn.addEventListener('click', () => setLanguage('de'));

  setLanguage('en');
});