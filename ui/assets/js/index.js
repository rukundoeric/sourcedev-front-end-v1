console.log("Hello");
const openMenu = document.querySelector("#menu-btn-action");
const menus = [...document.getElementsByClassName("nav-menu-lists")][0];
const navIcon = [...document.getElementsByClassName("nav-icon")][0];

openMenu.addEventListener("click", () => {
  if (menus.classList.contains("open-menu")) {
    menus.classList.remove("open-menu");
    navIcon.classList.remove("open-menu-btn");
  } else {
    menus.classList.add("open-menu");
    navIcon.classList.add("open-menu-btn");
  }
});

let tl = gsap.timeline();
tl.from("#box", 1, { opacity: 0, scale: 0 });
tl.from("#d-intro-txt", 1, { x: 200, opacity: 0 });
tl.from("#d-intro-txt-under-line", 1, {width:0 }, "=.5");
tl.from("#d-intro-web", 1, { x: -200, opacity: 0 }, "=-1");
tl.from("#d-intro-mobile", 1, { x: 200, opacity: 0 }, "=-.7");


const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: ".stick",
})
  .setTween(tl)
  .addTo(controller);

// var tl = new TimelineMax({ onUpdate: updatePercentage });


// tl.from("#d-intro-txt", 0.5, { x: 200, opacity: 0 });

// const scene = new ScrollMagic.Scene({
//   triggerElement: ".stick",
//   triggerHook: "onLeave",
//   duration: "100%",
// })
//   .setPin(".stick")
//   .setTween(tl)
//   .addTo(controller);
