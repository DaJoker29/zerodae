const toggle = document.querySelector('#theme-toggle__checkbox');
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
  ? 'dark'
  : 'light';
const currentTheme = localStorage.getItem('theme') || prefersDarkMode;

const setTheme = () => {
  if (toggle.checked) {
    localStorage.setItem('theme', 'dark');
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  } else {
    localStorage.setItem('theme', 'light');
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  }
};

const getTheme = () => {
  if (currentTheme === 'light') {
    toggle.checked = false;
  } else {
    toggle.checked = true;
  }
};

const lightDark = () => {
  getTheme();
  setTheme();

  toggle.addEventListener('change', setTheme);
};

export default lightDark;
