const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((e) => observer.observe(e));