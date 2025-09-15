const select = document.querySelector('.databox2');
const emailInput = document.querySelector('.databox3');

select.addEventListener('change', function () {
  const selectedOption = this.options[this.selectedIndex];
  const domain = selectedOption.dataset.name;

  if (domain) {
    // 네이버/구글/다음 선택 시 value에 넣기
    emailInput.value = domain;
  } else {
    // 직접입력 선택 시 초기화
    emailInput.value = '';
  }

  console.log(domain);
});
