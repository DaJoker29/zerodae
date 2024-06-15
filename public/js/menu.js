const btn = document.querySelector('[data-btn="menu"]');
const menuWrapper = document.querySelector('[data-menu-wrapper]');
let icon = document.querySelector('[data-menu-icon]');

const open = () => {
  menuWrapper.hidden = false;
  btn.setAttribute('aria-expanded', true);
  btn.setAttribute('aria-label', 'Close menu');
  icon = document.querySelector('[data-menu-icon]');
  icon.setAttribute('data-icon', 'times');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');

  setTimeout(() => {
    menuWrapper.classList.add('is-visible');
    document.body.classList.add('is-menu-visible');
  }, 100);
};

const close = () => {
  menuWrapper.classList.remove('is-visible');
  document.body.classList.remove('is-menu-visible');
  icon = document.querySelector('[data-menu-icon]');
  icon.setAttribute('data-icon', 'bars');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');

  setTimeout(() => {
    menuWrapper.hidden = true;
    btn.setAttribute('aria-expanded', false);
    btn.setAttribute('aria-label', 'Open menu');
  }, 300);
};

const toggleMenu = (e) => {
  if (menuWrapper.hidden) {
    open();
  } else {
    close();
  }
};

const menu = () => {
  btn.hidden = false;
  menuWrapper.hidden = true;
  btn.addEventListener('click', toggleMenu);
};

export default menu;
