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

// ✅ 제출 핸들러 하나로 통합
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault(); // 기본 제출 막기

  // 브라우저 기본 유효성 검사
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // 비밀번호 확인 검사
  if (password.value !== passwordConfirm.value) {
    alert('비밀번호가 일치하지 않습니다.');
    return;
  }

  // 필수 체크박스 확인 (만약 required가 붙어 있다면)
  const requiredCheckboxes = document.querySelectorAll('input[type="checkbox"][required]');
  for (let checkbox of requiredCheckboxes) {
    if (!checkbox.checked) {
      alert('필수 약관에 동의해주세요.');
      return;
    }
  }

  // ✅ 모든 검사 통과 → 완료 페이지로 이동
  window.location.href = '/user/join-membership-end.html';
});
