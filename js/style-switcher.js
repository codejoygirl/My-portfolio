/*==== toggle style switcher ====*/

const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');

styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

//hide style switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/*==== toggle style switcher ====*/

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", true);
        }
    })
}

/*==== theme light and dark mode ====*/
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");

    dayNight.querySelector("i").classList.toggle("fa-moon");

    document.body.classList.toggle("dark")

})

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon");
    };
});




//second method
// const dayNight = document.querySelector(".day-night");

// dayNight.addEventListener("click", () => {
//     dayNight.querySelector("i").classList.toggle("fa-sun");

//     dayNight.querySelector("i").classList.toggle("fa-moon");

// })

// dayNight.querySelector("i").addEventListener("click", () => {
//     if (dayNight.querySelector("i").classList.contains("fa-moon")) {
//         document.documentElement.classList.remove("light");
//         document.documentElement.classList.add("dark");
//         window.localStorage.setItem('mode', 'dark');
    
//     }
//     else if (dayNight.querySelector("i").classList.contains("fa-sun")) {
//         document.documentElement.classList.remove("dark");
//         document.documentElement.classList.add("light");
//         window.localStorage.setItem('mode', 'light');
//     }
// })



// const mode = window.localStorage.getItem('mode');
// if (mode == "light") {
//     dayNight.querySelector("i").classList.contains("fa-sun");
//     document.documentElement.classList.remove("dark");
//     document.documentElement.classList.add("light");
// }

// if (mode == "dark") {
//     dayNight.querySelector("i").classList.contains("fa-moon");
//     document.documentElement.classList.remove("light");
//     document.documentElement.classList.add("dark");
// }




