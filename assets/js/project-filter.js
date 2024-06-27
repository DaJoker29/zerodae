const filter = document.querySelector('[data-project-filter]');
const projects = document.querySelectorAll('[data-category]');
const categories = [];
let selectedCategory;

const fetchCategories = () => {
  projects.forEach((project) => {
    const id = project.getAttribute('data-category');
    const index = categories.findIndex((category) => category.id === id);

    if (index >= 0) {
      categories[index].count += 1;
    } else {
      categories.push({ id, count: 1 });
    }
  });
};

const filterView = (e) => {
  selectedCategory = e.target.value;
  filter.classList.add('isFilterActive');

  showAll();

  projects.forEach((project) => {
    if (project.getAttribute('data-category') !== selectedCategory) {
      project.style.display = 'none';
    }
  });
};

const showAll = () => {
  projects.forEach((project) => (project.style.display = 'block'));
};

const updateFilter = () => {
  categories.forEach((category) => {
    const label = document.createElement('label');
    const input = document.createElement('input');

    input.type = 'radio';
    input.name = 'category';
    input.id = input.value = category.id;
    input.setAttribute('data-category-flag', category.id);

    label.innerHTML = `${category.id} (${category.count})`;
    label.appendChild(input);

    filter.prepend(label);
  });

  filter.addEventListener('change', filterView);
};

const unsetFilter = () => {
  const flags = document.querySelectorAll('[data-category-flag]');

  flags.forEach((flag) => {
    flag.checked = false;
  });

  filter.classList.remove('isFilterActive');
  showAll();
};

const projectFilter = () => {
  fetchCategories();
  updateFilter();

  const remove = document.querySelector('[data-category-remove]');
  remove.addEventListener('click', unsetFilter);
};

export default projectFilter;
