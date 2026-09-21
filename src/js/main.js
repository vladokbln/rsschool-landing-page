let themeInput = document.querySelector('.theme-switch__input');
let savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  themeInput.checked = true;
}
themeInput.addEventListener('change', () => {
  let theme = themeInput.checked ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});