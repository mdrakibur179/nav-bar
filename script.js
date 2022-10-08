let searchBtn = document.querySelector('.search-button');
let closeBtn = document.querySelector('.close-button');
let searchBox = document.querySelector('.search-box');
let navigation = document.querySelector('.navigation');
let menuToggler =  document.querySelector('.menu-toggler');
let navHeader = document.querySelector('.nav-header');

searchBtn.addEventListener('click', () => {
    searchBox.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
    menuToggler.classList.add('hide');
});

closeBtn.addEventListener('click', () => {
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
    menuToggler.classList.remove('hide');
})

menuToggler.addEventListener('click', () => {
    navHeader.classList.toggle('open-close');
})