const mhElement = document.querySelector('#masthead');

const detectScroll = () => {
  if (window.scrollY > 100) {
    mhElement.classList.add('is-scrolled');
  } else {
    mhElement.classList.remove('is-scrolled');
  }
};

const masthead = () => {
  window.addEventListener('scroll', detectScroll);
};

export default masthead;
