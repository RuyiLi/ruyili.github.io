const $ = document.querySelector.bind(document)

function setTheme(theme) {
  if (theme === 'light') {
    document.body.classList.remove('theme-dark')
    localStorage.setItem('theme', 'light')
  } else {
    document.body.classList.add('theme-dark')
    localStorage.setItem('theme', 'dark')
  }
}

function toggleTheme() {
  const theme = localStorage.getItem('theme', 'dark')
  setTheme(theme === 'light' ? 'dark' : 'light')
}

setTheme(localStorage.getItem('theme', 'light'))
const logo = $('#logo')
logo.addEventListener('click', toggleTheme)
