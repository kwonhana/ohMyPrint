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
