//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/
const btnEl = document.querySelector('#alertButton');
const inputEl = document.querySelector('#alertInput');

btnEl.addEventListener('click', () => {
  console.log(inputEl.value);
});

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
const btnSwapEl = document.querySelector('#swapButton');
const inputLeftEl = document.querySelector('#leftSwapInput');
const inputRightEl = document.querySelector('#rightSwapInput');

btnSwapEl.addEventListener('click', () => {
  const inputLeftText = inputLeftEl.value;
  const inputRightText = inputRightEl.value;

  inputLeftEl.value = inputRightText;
  inputRightEl.value = inputLeftText;
});

//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

const inputPasswordEl = document.querySelector('#passwordInput');
const btnPasswordEl = document.querySelector('#passwordButton');

btnPasswordEl.addEventListener('click', () => {
  if (btnPasswordEl.textContent === 'Скрыть') {
    inputPasswordEl.setAttribute('type', 'password');
    btnPasswordEl.textContent = 'Розкрити';
  } else {
    inputPasswordEl.setAttribute('type', 'text');
    btnPasswordEl.textContent = 'Скрыть';
  }
});

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/
const btnDecreaseEl = document.querySelector('#decrease');
const btnIncreaseEl = document.querySelector('#increase');
const divBoxEl = document.querySelector('#box');

btnDecreaseEl.addEventListener('click', () => {
  const divSize = parseInt(getComputedStyle(divBoxEl).width);

  divBoxEl.style.width = divSize - 10 + 'px';
  divBoxEl.style.height = divSize - 10 + 'px';
});
btnIncreaseEl.addEventListener('click', () => {
  const divSize = parseInt(getComputedStyle(divBoxEl).width);

  divBoxEl.style.width = divSize + 10 + 'px';
  divBoxEl.style.height = divSize + 10 + 'px';
});

//TODO:==============================================
/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/
const divPlaceEl = document.querySelector('#place');
window.addEventListener('click', event => {
  if (event.target !== divPlaceEl) {
    console.log('false');
    return;
  }
  console.log('true');
});

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/
const listNumbersEl = document.querySelectorAll('.listItem');
const buttonDoubleEl = document.querySelector('#double');

buttonDoubleEl.addEventListener('click', () => {
  listNumbersEl.forEach(elemnt => {
    elemnt.textContent = BigInt(elemnt.textContent) ** 2n;
  });
});
//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
const divCircleEl = document.querySelector('.innerCircle');
function CreateMouseMove(e) {
  divCircleEl.style.top = e.pageY - 15 + 'px';
  divCircleEl.style.left = e.pageX - 15 + 'px';
}

divCircleEl.addEventListener('click', () => {
  if (divCircleEl.style.position === 'absolute') {
    divCircleEl.style.position = 'static';
    removeEventListener('mousemove', CreateMouseMove);
  } else {
    divCircleEl.style.position = 'absolute';
    addEventListener('mousemove', CreateMouseMove);
  }
});
