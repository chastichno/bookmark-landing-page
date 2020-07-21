//Toggle menu
const toggleMenu = () => {

    if (menu.classList.contains("noshow")) {
        menu.classList.remove("noshow");
        open.classList.add("noshow");
    } else {
        menu.classList.add("noshow");
        open.classList.remove("noshow");
    }
}

let menu = document.querySelector('.menu');
let toggle = document.querySelector('.header__toggle');
let open = document.getElementById('header__toggler');
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
    let arrow = document.getElementById(`${event.target.id}_arrow`);
    if (answer.classList.contains("noshow")) {
        answer.classList.remove("noshow");
        arrow.children[0].style.stroke = "hsl(0, 94%, 66%)";
        arrow.style.transform = "rotate(180deg)";
    } else {
        answer.classList.add("noshow");
        arrow.children[0].style.stroke = "hsl(231, 69%, 60%)";
        arrow.style.transform = "rotate(0deg)";
    }
}

const questions = document.querySelectorAll(".questions__question");
questions.forEach(question => {
    question.addEventListener("click", questionToggle);
})

// Check email address
const checkEmail = () => {
    console.log(email_input.value);
    value = email_input.value;
    if (re.test(value)) {
        email_input.style.border = "2px solid transparent";
        error.style.display = "none";
        console.log('Submitted successfully!');
        email_input.value = "";
    } else {
        email_input.style.border = "2px solid hsl(0, 94%, 66%)";
        error.style.display = "block";
    }
}
const email_input = document.getElementById('footer_email');
const email_button = document.getElementById('footer_button');
const error = document.querySelector('.error');
let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

email_button.addEventListener('click', checkEmail)