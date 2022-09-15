// js file
const getWannabeForm = document.querySelector('.wannabe-text-container');
const getExpertForm = document.querySelector('.hope-expert');
const getHoursPrac = document.querySelector('.hours-prac');
const removeClass = document.querySelector('.result-container');
const getResultSelect = document.querySelector('.result-select');
const getResultHours = document.querySelector('.hours-result-select');

function whoAmI(event) {
    event.preventDefault();
    removeClass.classList.remove('hidden');
    const myToDo = getExpertForm.value;
    const myTime = getHoursPrac.value;
    getResultSelect.innerText = myToDo;
    getResultHours.innerText = 10000 / myTime;
}

getWannabeForm.addEventListener('submit', whoAmI);
