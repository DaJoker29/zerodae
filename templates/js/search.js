const searchBtn = document.querySelector('[data-btn="search"]');
const searchOverlay = document.querySelector('[data-search-overlay]');
const searchClose = document.querySelector('[data-search-close]');
const searchInput = document.querySelector('[data-search-input]');

const open = () => {
  searchOverlay.hidden = false;
  searchBtn.setAttribute('aria-label', 'Close search');

  setTimeout(() => {
    document.body.classList.add('is-search-visible');
    searchInput.focus();
  }, 100);
};

const close = () => {
  document.body.classList.remove('is-search-visible');
  searchBtn.setAttribute('aria-label', 'Open search');

  setTimeout(() => {
    searchOverlay.hidden = true;
    searchInput.value = '';
  }, 500);
};

const search = () => {
  searchOverlay.hidden = true;
  searchBtn.addEventListener('click', open);
  searchClose.addEventListener('click', close);
  window.onkeydown = (e) => {
    if (e.keyCode === 27 && false === searchOverlay.hidden) {
      close();
    }
  };
};

export default search;
