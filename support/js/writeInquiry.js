let mailList = document.querySelectorAll('.mail-list a');
console.log(mailList);

//mail-box
let mailBox = document.querySelector('#email-domain');
console.log(mailBox);
//sort-list의 li가 선택되면 mailbox의 값이 바뀌게 @class명.com / @hanmail.net

mailList.forEach((list, id) => {
  list.addEventListener('click', (e) => {
    const text = list.textContent;
    if (text === 'hanmail') {
      mailBox.value = text + '.net';
    } else {
      mailBox.value = text + '.com';
    }
  });
});
