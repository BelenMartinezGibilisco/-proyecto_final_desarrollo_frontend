const buttonOpenClose = document.querySelector("#buttonOpenCloseMenu");
const menuMobileItems = document.querySelector("#menu-mobile-items");

buttonOpenClose.addEventListener("click", e =>{
    menuMobileItems.classList.toggle("menu-mobile-closed");
});
