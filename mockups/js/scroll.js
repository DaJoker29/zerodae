const scroll = () => {
  const trigger = document.querySelector('[data-scroll-trigger]');
  const target = document.querySelector('[data-scroll-target]');

  const scrollTo = (e) => {
    e.preventDefault();
    target.scrollIntoView();
  };

  trigger.addEventListener('click', scrollTo);
};

export default scroll;
