/* Mobile navigation and submenu toggles. */
(function () {
  "use strict";

  var DESKTOP = window.matchMedia("(min-width: 1100px)");

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  Array.prototype.forEach.call(document.querySelectorAll(".sub-toggle"), function (button) {
    var submenu = document.getElementById(button.getAttribute("aria-controls"));
    if (!submenu) return;

    button.addEventListener("click", function () {
      var open = submenu.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(open));
    });
  });

  // On desktop the submenu opens on hover, so drop any state left by a resize.
  DESKTOP.addEventListener("change", function (event) {
    if (!event.matches) return;

    if (nav && toggle) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    Array.prototype.forEach.call(document.querySelectorAll(".site-nav__sub"), function (submenu) {
      submenu.classList.remove("is-open");
    });

    Array.prototype.forEach.call(document.querySelectorAll(".sub-toggle"), function (button) {
      button.setAttribute("aria-expanded", "false");
    });
  });

  var year = document.querySelector("[data-current-year]");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
