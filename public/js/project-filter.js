const filters = document.querySelectorAll('fieldset > label > input');

const changeFilter = (e) => {
  console.log(e); //TODO: Make this work...
};

const projectFilter = () => {
  filters.forEach((entry) => {
    entry.addEventListener('change', changeFilter);
  });
};

export default projectFilter;
