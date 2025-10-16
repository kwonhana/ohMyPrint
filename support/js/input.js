const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputEmailDomain = document.getElementById('email-domain');
const inputPhone1 = document.getElementById('phone1');
const inputPhone2 = document.getElementById('phone2');
const inputPhone3 = document.getElementById('phone3');
const inputSubject = document.getElementById('subject');
const inputMessage = document.getElementById('message');
const inputPassword = document.getElementById('password');
const ckboxTerms = document.getElementById('terms-ckbox');
const ckboxPrivacy = document.getElementById('privacy-ckbox');
const submitButton = document.getElementById('submit-btn');

// input 안에 공백인지 아닌 확인하여 버튼 disabled 작동
function inputCheck() {
  const valueName = inputName.value.trim() !== '';
  const valueEmail = inputEmail.value.trim() !== '';
  const valueEmailDomain = inputEmailDomain.value.trim() !== '';
  const valuePhone1 = inputPhone1.value.trim() !== '';
  const valuePhone2 = inputPhone2.value.trim() !== '';
  const valuePhone3 = inputPhone3.value.trim() !== '';
  const valueSubject = inputSubject.value.trim() !== '';
  const valueMessage = inputMessage.value.trim() !== '';
  const valuePassword = inputPassword.value.trim() !== '';
  const checkedTerms = ckboxTerms.checked;
  const checkedPrivacy = ckboxPrivacy.checked;

  if (
    valueName &&
    valueEmail &&
    valueEmailDomain &&
    valuePhone1 &&
    valuePhone2 &&
    valuePhone3 &&
    valueSubject &&
    valueMessage &&
    valuePassword &&
    checkedTerms &&
    checkedPrivacy
  ) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

const inputFields = [
  inputName,
  inputEmail,
  inputEmailDomain,
  inputPhone1,
  inputPhone2,
  inputPhone3,
  inputSubject,
  inputMessage,
  inputPassword,
];

const inputChecked = [ckboxTerms, ckboxPrivacy];

inputFields.forEach((item) => {
  item.addEventListener('input', inputCheck);
  item.addEventListener('change', inputCheck);
});

inputChecked.forEach((check) => {
  check.addEventListener('input', inputCheck);
  check.addEventListener('change', inputCheck);
});

inputCheck();
