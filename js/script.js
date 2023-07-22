
window.addEventListener("load", () => {

   
  })

  removeunwanted = ()=>{

    if (window.innerWidth > 1300) {

        const menu = document.querySelector("#close-nav");
        menu.style.display = "none"

        document.querySelector(".mobile-toggle").style.display = "none"
        document.querySelector(".mobile-nav").style.display = "none"
    }

    

  }
  removeunwanted()


/*===== Typing Animation =====*/
var typed = new Typed(".typing", {
    strings:["", "Frontend Developer", "Graphic Designer", "Digital Marketer"],
    typeSpeed:100,
    BackSpeed:30,
    loop:true
})

var typednew = new Typed(".typing-new", {
    strings: ["Graphics Designer", "Video Editor", "Front-end Developer", "Web designer",],
    typeSpeed: 100,
    BackSpeed: 40,
    loop: true
}

)


// ===========Scrool Reval================

ScrollReveal({
    reset:true,
    distance:'50px',
    duration:1000,
    delay:200
});
ScrollReveal().reveal('.home-info',{origin: 'bottom'});
ScrollReveal().reveal('.hello',{origin: 'left'});
ScrollReveal().reveal('.home-img',{origin: 'top'});
ScrollReveal().reveal('.container',{origin: 'bottom'});



// ===========Toggle-navbar================

let toggleBtn = document.querySelector('.navbar-toggle');
let sidebar = document.querySelector('.side-bar');

toggleBtn.addEventListener("click",()=>{
    sidebar.classList.toggle('active');
    toggleBtn.classList.toggle('navbar-toggle-btn');

})

// harm

function toggleMenu() {

    const menu = document.querySelector(".aside");
    menu.style.display = "flex"
  }


function closeNav() {
const menu = document.querySelector(".aside");
menu.style.display = "none"
}
  

