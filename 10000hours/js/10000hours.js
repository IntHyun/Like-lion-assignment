// js file
const getWannabeForm = document.querySelector('.wannabe-text-container');
const getExpertForm = document.querySelector('.hope-expert');
const getHoursPrac = document.querySelector('.hours-prac');
const removeClass = document.querySelector('.result-container');
const getResultSelect = document.querySelector('.result-select');
const getResultHours = document.querySelector('.hours-result-select');
const getImgContainer = document.querySelector('.loading-img-container');

const HIDDEN = 'hidden';

function whoAmI(event) {
    event.preventDefault();
    getImgContainer.classList.remove(HIDDEN);

    setTimeout(function () {
        removeClass.classList.remove(HIDDEN);
        getImgContainer.classList.add(HIDDEN);
        const myToDo = getExpertForm.value;
        const myTime = getHoursPrac.value;
        getResultSelect.innerText = myToDo;
        getResultHours.innerText = parseInt(10000 / myTime);
    }, 2000);
}

getWannabeForm.addEventListener('submit', whoAmI);
