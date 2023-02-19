// SCRIPTS

// variables for nav
const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
const navItem = document.querySelectorAll(".nav-link");

// variable for logo
const logo = document.getElementById("logo");

// variable for age
const age = document.getElementById("age");
// variable for copyright year
const copy = document.getElementById("copy");

// navbar toggler
function toggleMenu() {

    if (!showMenu) {
        hamburger.classList.add("open");
        nav.classList.add("open")
        menuNav.classList.add("open")
        navItems.forEach(item => item.classList.add("open"));

        showMenu = true;
        replayAnimation();
        navItem.forEach(item => { item.addEventListener('click', toggleMenu) })
    } else {
        hamburger.classList.remove("open");
        nav.classList.remove("open")
        menuNav.classList.remove("open")
        navItems.forEach(item => item.classList.remove("open"));

        showMenu = false;
    }
}
// calculates my age and display it
function getYear() {

    const currentDate = new Date();
    const birthDate = new Date(2000, 3, 30);
    // calculates date difference in ms and converts it to days
    var timeDifference = (currentDate - birthDate) / (1000 * 3600 * 24);
    // calculates years from days and converts it into a string
    var currentAge = String(Math.floor(timeDifference / 365));
    // displays age on the page
    age.innerHTML = currentAge;
    copy.innerHTML = "Copyright &copy; Markus Savotškin " + currentDate.getFullYear();
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

// reloads logo, replays animation
function replayAnimation() {
    logo.src += "?v=${new Date().getTime()}";
}

let showMenu = false;

window.addEventListener("scroll", reveal);
// shows age
getYear();
// if burger gets clicked
menuBtn.addEventListener("click", toggleMenu);
// if mouse hovers over logo
logo.addEventListener("mouseover", replayAnimation);