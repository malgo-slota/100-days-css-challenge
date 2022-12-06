// DAY 7
const openMenu = document.querySelector(".open-menu-icon");
const backCard = document.querySelector(".backcard");
const frontCard = document.querySelector(".frontcard");

const searchIcon = document.querySelector(".open-searchbar-icon");
const searchBar = document.querySelector(".searchbar");

openMenu.addEventListener('click', function() {
    frontCard.classList.toggle("show-menu");
    backCard.classList.toggle("backcard-slide");
});

searchIcon.addEventListener('click', function() {
    searchBar.classList.toggle("searchbar-show");
})