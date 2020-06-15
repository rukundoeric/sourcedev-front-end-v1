console.log("Hello");
const openMenu = document.querySelector("#menu-btn-action");
const menus = [...document.getElementsByClassName("nav-menu-lists")][0];
const navIcon = [...document.getElementsByClassName("nav-icon")][0];

openMenu.addEventListener('click', () => {
  if (menus.classList.contains("open-menu")) {
    menus.classList.remove("open-menu");
    navIcon.classList.remove("open-menu-btn");
  } else {
    menus.classList.add("open-menu");
    navIcon.classList.add("open-menu-btn");
  }
});
