const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sideBar = document.querySelector("#sidebar");
const date = document.querySelector("#date");

window.addEventListener("scroll", function (){
    if(window.pageYOffset > 80) {
        navbar.classList.add("navbar-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
    }
});

//show
navBtn.addEventListener("click", function () {
    sideBar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
    sideBar.classList.remove("show-sidebar");
});

date.innerHTML = new Date().getFullYear();