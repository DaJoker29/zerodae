import intersect from './intersect.js';
import masthead from './masthead.js';
import menu from './menu.js';
import search from './search.js';

document.body.classList.remove('no-js');

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    document.body.classList.add('is-complete');
    document.body.classList.remove('is-loading');
    const loadScreen = document.querySelector('#loading');
    loadScreen.style.opacity = 0;
    loadScreen.style.visibility = 'hidden';
    loadScreen.addEventListener('transitionend', () => loadScreen.remove());
  }
};

menu();
intersect();

if (document.body.classList.contains('theme-fire')) {
  masthead();
  search();
}
