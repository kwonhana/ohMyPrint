let savedId = localStorage.getItem('userId');
console.log(savedId);
let savedPw = localStorage.getItem('userPw');
let loginId = document.querySelector('#id');
let loginPw = document.querySelector('#password');
let loginBtn = document.querySelector('.log-in-btn');
console.log(loginBtn);

//savedId랑 #id의 value값이 같고 곱연산자 savedPw랑 #pw의 value값이 같으면 submit이 되고 index로 넘어가 -> header의 login이 마이페이지로 바뀌고 마이페이지 이름 변경 끝

loginBtn.addEventListener('click', (e) => {
  // submit이면 e.preventDefault 꼭 써야함
  e.preventDefault();
  let loginIdValue = loginId.value.trim();
  let loginPwValue = loginPw.value.trim();
  if (savedId == loginIdValue && savedPw == loginPwValue) {
    window.location.href = '/index.html';
  } else {
    alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    window.location.reload();
  }
  localStorage.setItem('logIned', 'true');
});
