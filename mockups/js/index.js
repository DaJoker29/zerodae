import menu from './menu.js';
import search from './search.js';

document.body.classList.remove('no-js');

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    document.body.classList.add('is-complete');
  }
};

menu();
search();
