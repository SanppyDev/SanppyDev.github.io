var login = document.querySelector('.entrar');
let closeBtn = document.querySelector('.close')
let mobMenu = document.querySelector('.mob__menu')
let hamburguerMenu = document.querySelector(".hamburguer__menu");

hamburguerMenu.addEventListener('click', ()=> {
    mobMenu.style.right = "0";
})

closeBtn.addEventListener('click', () => {
    mobMenu.style.right = "-500px";
})