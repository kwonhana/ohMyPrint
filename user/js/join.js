// 비밀번호 확인 검증
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');
const passwordError = document.getElementById('passwordError');
const passwordSuccess = document.getElementById('passwordSuccess');

function validatePassword() {
  if (passwordConfirm.value === '') {
    passwordError.style.display = 'none';
    passwordSuccess.style.display = 'none';
    return;
  }

  if (password.value === passwordConfirm.value) {
    passwordError.style.display = 'none';
    passwordSuccess.style.display = 'block';
  } else {
    passwordError.style.display = 'block';
    passwordSuccess.style.display = 'none';
  }
}

password.addEventListener('input', validatePassword);
passwordConfirm.addEventListener('input', validatePassword);

document.querySelector('form').addEventListener('submit', function (e) {
  if (password.value !== passwordConfirm.value) {
    e.preventDefault();
    alert('비밀번호가 일치하지 않습니다.');
    return;
  }

  const requiredCheckboxes = document.querySelectorAll('input[type="checkbox"][required]');
  for (let checkbox of requiredCheckboxes) {
    if (!checkbox.checked) {
      e.preventDefault();
      alert('필수 약관에 동의해주세요.');
      return;
    }
  }
});

const dropBtns = document.querySelectorAll('.dropBox');
const dropList = document.querySelectorAll('.sort-list li ');

function closeAllDropdowns() {
  dropBtns.forEach((btn) => btn.classList.remove('active'));
  document.querySelectorAll('.sort-list').forEach((list) => list.classList.remove('active'));
}

dropBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const isActive = btn.classList.toggle('active');
    const list = btn.nextElementSibling;

    list?.classList.toggle('active', isActive);
  });
});

dropList.forEach((item) => {
  item.addEventListener('click', (e) => {
    dropList.forEach((li) => li.classList.remove('active'));
    item.classList.add('active');

    const textList = item.querySelector('a').textContent;
    item.parentElement.previousElementSibling.textContent = textList;
    closeAllDropdowns();
  });
});

document.addEventListener('click', (e) => {
  const clickedInside = e.target.closest('.dropBox') || e.target.closest('.sort-list');
  if (!clickedInside) {
    closeAllDropdowns();
  }
});
