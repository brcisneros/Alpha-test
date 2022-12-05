/*-----------MOBILE MENU-----------*/

const menu = document.querySelector(".menu");
const hamburger= document.querySelector(".mobileMenu");

function toggleMenu() {
  if (menu.classList.contains("showElementX")) {
    menu.classList.remove("showElementX");
  } else {
    menu.classList.add("showElementX");
  }
}

hamburger.addEventListener("click", toggleMenu);

/*-----------COLLAPSIBLE-----------*/

const collapsible = document.getElementsByClassName('wrap-collabsible');

for (i=0; i<collapsible.length; i++) {
  collapsible[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

/*-----------TO TOP BUTTON-----------*/

mybutton = document.getElementById("topButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}