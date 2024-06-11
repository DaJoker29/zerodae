const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden, .hero-img');
hiddenElements.forEach((e) => observer.observe(e));
