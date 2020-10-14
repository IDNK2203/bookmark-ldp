let nav = document.querySelector('.nav');
let menu__icon__open= document.querySelector('.menu-icon__open')
let menu__icon__close= document.querySelector('.menu-icon__close')
let menu__icons= document.querySelector('.menu-icons')

console.log(nav)
// MENU TOGGLE FUNCTIONALITY
menu__icons.addEventListener("click" , ()=>{
  menu__icon__close.classList.toggle("hidden")
  menu__icon__open.classList.toggle("hidden")
  nav.classList.toggle("hidden")
})