const workItems = document.querySelectorAll("work.item");
const workItemsCount = workItems.length;
let currentIndex = 0;
const closeButton = document.querySelector("#close-button");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const buttonOpenClose = document.querySelector("#buttonOpenCloseMenu");
const menuMobileItems = document.querySelector("#menu-mobile-items");

buttonOpenClose.addEventListener("click", e =>{
    menuMobileItems.classList.toggle("menu-mobile-closed");
});




closeButton.addEventListener("click", e => {
    e.preventDefault()

    document.querySelectorAll("#screen").style["animation-name"] = "fade-in";
    document.querySelectorAll("body").style[overflow] = "auto";

setTimeout(( ) => {
    document.querySelector("details-container").style.display = "none";
}, 1000);


setTimeout(( ) =>{
    document.querySelector("#screen").style = "";
}, 2000);

});