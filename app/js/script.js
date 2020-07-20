//Toggle menu
const toggleMenu = () => {

    if (menu.classList.contains("noshow")) {
        menu.classList.remove("noshow");
    } else {
        menu.classList.add("noshow");
    }
}

let menu = document.querySelector('.menu');
let toggle = document.querySelector('.header__toggle');
toggle.addEventListener('click', toggleMenu);
let toggleClose = document.querySelector('.header__close');
toggleClose.addEventListener('click', toggleMenu);

// Features actions
const menuClick = (event) => {
    console.log(event.target.id);
    event.target.classList.add('active');
    document.getElementById(`${event.target.id}_item`).classList.remove('noshow');

    document.getElementById(prevButton).classList.remove('active');
    document.getElementById(`${prevButton}_item`).classList.add('noshow');

    prevButton = event.target.id;
}
const options = document.querySelectorAll(".features__menu-item");
options.forEach(option => {
    option.addEventListener("click", menuClick);
})
let prevButton = "bookmark";

// Questions unfold
const questionToggle = (event) => {
    let answer = document.getElementById(`${event.target.id}_answer`);
    if (answer.classList.contains("noshow")) {
        answer.classList.remove("noshow");
    } else {
        answer.classList.add("noshow");
    }
}

const questions = document.querySelectorAll(".questions__question");
questions.forEach(question => {
    question.addEventListener("click", questionToggle);
})