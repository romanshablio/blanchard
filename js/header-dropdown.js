document.querySelectorAll(".dropdown__simplebar").forEach((dropdown) => {
  new SimpleBar(dropdown, {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 25,
  });
});

const btns = document.querySelectorAll(".menu__btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach((item) => {
  item.addEventListener("click", function () {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach((el) => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns);
      }
    });
    btns.forEach((el) => {
      if (el != this) {
        el.classList.remove(activeClassbtns);
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  });
});

let buttons = document.querySelectorAll(".hero__nav__btn");

buttons.forEach((button) => {
  let el = button.querySelector("button");
  let pic = button.querySelector("path");
  button.addEventListener("mouseenter", function () {
    el.style.color = "#9d5cd0";
    pic.style.stroke = "#9d5cd0";
  });

  button.addEventListener("mouseleave", function () {
    el.style.color = "#fff";
    pic.style.stroke = "#fff";
  });

  button.addEventListener("click", function () {
    el.style.color = "#7943a4";
    pic.classList.toggle("active");
  });

  button.addEventListener("focus", function () {
    el.style.backgroundColor = "#7943a4";
    pic.style.backgroundColor = "#7943a4";
  });
});
