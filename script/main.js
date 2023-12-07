const menuIcon = document.querySelector("#menu-icon");    
const navbar = document.querySelector(".navbar");
const navbg = document.querySelector(".nav-bg");
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
  navbg.classList.toggle("active");
});

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
	overflow: true
});

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});