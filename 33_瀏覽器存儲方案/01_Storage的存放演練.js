

// sessionStorage.setItem('age', 26)

const loginBtn = document.querySelector('button')
loginBtn.onclick = function() {
  localStorage.setItem('name', 'Louis')

  sessionStorage.setItem('age', 26)
}