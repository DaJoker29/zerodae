const setTheme = (theme) => {
  localStorage.setItem("theme", theme);
  document.body.dataset.theme = theme;
};

const toggleTheme = () => {
  const theme = document.body.dataset.theme;
  setTheme(theme === "light" ? "dark" : "light");
};

const lightDark = () => {
  const toggle = document.querySelector("[data-theme-toggle]");
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";
  const currentTheme =
    localStorage.getItem("theme") !== null
      ? localStorage.getItem("theme")
      : prefersDarkMode;

  setTheme(currentTheme);
  toggle.addEventListener("click", toggleTheme);
};

export default lightDark;
