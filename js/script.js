"use strict";

class Blogr {
  mobileBtn = document.querySelector(".nav-mobile-btn");
  navElement = document.querySelector(".nav-element");
  navigation = document.querySelector(".navigation");
  overlay = document.querySelector(".overlay");

  constructor() {
    this.mobileBtn.addEventListener("click", this.toggleMobileNav.bind(this));
    this.overlay.addEventListener("click", this.toggleMobileNav.bind(this));
  }

  toggleMobileNav() {
    this.navElement.classList.toggle("open-nav-menu");
    this.overlay.classList.toggle("hidden");
  }
}

const app = new Blogr();
