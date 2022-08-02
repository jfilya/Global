const burgerBtn = document.getElementById("burger");
const menu = document.querySelector(".header__menu");
const btnSingIn = document.querySelector(".header__btn");
burgerBtn.onclick = () => {
    menu.classList.toggle("active");
    btnSingIn.classList.toggle("active");
}