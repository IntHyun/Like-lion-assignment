// 모든 콜라버튼
const colaBtn = document.querySelectorAll('.cola-btn');
// 잔액에 입력될 원
const insertMoney = document.querySelector('.select-won');
// 거스름돈 반환 버튼
const payBackBtn = document.querySelector('.payback');
// 입금액 입력하는 인풋
const putMoney = document.querySelector('.put-money');
// 입금하는 버튼
const putMoneyBtn = document.querySelector('#put-money-btn');
// 콜라 장바구니
const colaList = document.querySelector('.order-cola-list');
// 획득 버튼
const getColaBtn = document.querySelector('.my-cola');
// 소지금
const myMoney = document.querySelector('#soji-money');
// 획득한 음료 리스트
const orderdColaList = document.querySelector('#orderd-cola');
// 내가 담은 음료리스트
const myPutCola = document.querySelector('.order-cola-list');

//콜라 버튼 클릭시 이벤트

colaBtn.forEach((item) => {
    item.addEventListener('click', paintPutColaList);
});

// 입력

putMoneyBtn.addEventListener('click', () => {
    event.preventDefault();
    const money = putMoney.value;
    putMoney.value = '';
    insertMoney.textContent = `${money} 원`;
});

function paintPutColaList() {
    const li = document.createElement('li');
    li.classList.add('input-cola');
    myPutCola.appendChild(li);
    const spanParent = document.createElement('span');
    li.appendChild(spanParent);
    const img = document.createElement('img');
    img.classList.add('poket-cola');
    img.setAttribute(
        'src',
        `images/${event.target.children[1].textContent}.png`
    );
    img.setAttribute('alt', "''");
    const spanChild = document.createElement('span');
    spanChild.classList.add('cola-text');
    spanChild.classList.add('input-cola-text');
    spanChild.textContent = `${event.target.children[1].textContent}`;
    spanParent.appendChild(img);
    spanParent.appendChild(spanChild);
    const spanNum = document.createElement('span');
    spanNum.classList.add('cola-num');
    spanNum.textContent = 1;
    li.appendChild(spanNum);
}
