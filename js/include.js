function includeHTML() {
  const includes = document.querySelectorAll('[data-include]');

  includes.forEach(async (el) => {
    const file = el.getAttribute('data-include');
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error('파일 불러오기 실패');
      const htmlText = await response.text();

      // 💡 DOMParser를 이용해 HTML 파싱
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, 'text/html');

      // body 안의 내용만 가져오기
      const bodyContent = doc.body.innerHTML;

      // 요소에 삽입
      el.innerHTML = bodyContent;
      // console.log(bodyContent);
    } catch (error) {
      console.error('include 실패:', error);
    }
  });
}

window.addEventListener('DOMContentLoaded', includeHTML);
