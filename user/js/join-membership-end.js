let savedName = localStorage.getItem('userName');
let nameSpan = document.querySelector('.userName');

nameSpan.textContent = savedName;
