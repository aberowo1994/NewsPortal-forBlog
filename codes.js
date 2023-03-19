"use strict";

const toggleMode = document.querySelector(".dk--con");
const body = document.querySelector("body");

toggleMode.addEventListener("click", () => {
  body.classList.toggle("dark--m");
  if (!body.classList.contains("dark--m")) {
    toggleMode.innerHTML = `<ion-icon name="moon" class="dk--toggle"></ion-icon>`;
  } else {
    toggleMode.innerHTML = `<ion-icon name="sunny"></ion-icon>`;
  }
  // if (!body.classList.contains("dark--m")) {
  //   return;
  // }
});
