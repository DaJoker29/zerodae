import masthead from './masthead.js';
import menu from './menu.js';
import scroll from './scroll.js';
import search from './search.js';

document.body.classList.remove('no-js');

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    document.body.classList.add('is-complete');
  }
};

menu();

if (document.body.classList.contains('theme-fire')) {
  masthead();
  search();
}

if (document.body.classList.contains('theme-air')) {
  scroll();
}
