const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

const intersect = () => {
  const hiddenElements = document.querySelectorAll('.hidden');

  hiddenElements.forEach((e) => observer.observe(e));
};

export default intersect;
