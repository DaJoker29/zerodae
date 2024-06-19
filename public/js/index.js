import intersect from './intersect.js';
import lightDark from './light-dark.js';
import menu from './menu.js';
import search from './search.js';

document.body.classList.remove('no-js');
document.body.classList.add('js');

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    document.body.classList.add('is-complete');
    document.body.classList.remove('is-loading');
  }
};

menu();
intersect();
lightDark();

if (document.body.classList.contains('theme-fire')) {
  search();
}
