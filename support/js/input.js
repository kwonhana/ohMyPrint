export const hasNumber = /\d/;
export const hasKorean = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
export const hasEnglish = /[a-zA-Z]/;

export function validateData(el, has, message) {
  el.addEventListener('change', (e) => {
    const value = e.target.value;
    if (has.test(value)) {
      alert(`${message}는 입력할 수 없습니다.`);
      e.target.value = '';
    }
  });
}

export function valiDatePhone(el, num, message) {
  el.addEventListener('change', (e) => {
    const value = e.target.value;

    if (value.length <= num) {
      alert(message);
      e.target.value = '';
    } else if (hasKorean.test(value)) {
      alert(message);
      e.target.value = '';
    } else if (hasEnglish.test(value)) {
      alert(message);
      e.target.value = '';
    }
  });
}
