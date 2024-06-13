const toggle = document.querySelector('#theme-toggle__checkbox');
const currentTheme = localStorage.getItem('theme') || 'light';

const setTheme = () => {
  if (toggle.checked) {
    localStorage.setItem('theme', 'dark');
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
  } else {
    localStorage.setItem('theme', 'light');
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
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

  toggle.addEventListener(
    'change',
    () => {
      setTheme();
    },
    false
  );
};

export default lightDark;
