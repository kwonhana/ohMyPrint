const openModal = document.querySelectorAll('.open-modal');

openModal.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log('모달버튼있다');
    e.preventDefault();
    const targetSelect = button.getAttribute('data-target');
    const targetModal = document.querySelector(targetSelect);

    console.log(targetSelect);

    targetModal?.classList.remove('hidden');

    const closeBtn = targetModal.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        targetModal?.classList.add('hidden');
      });
    }
  });
});
