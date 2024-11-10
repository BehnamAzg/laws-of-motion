
// Hiding Navbar on Scroll Down
const navbar = document.getElementById("navbar");

let lastScrollTop = 0;
addEventListener("scroll", () => {
  // Current scroll position
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // check scroll direction
  const distance = scrollTop - lastScrollTop;
  const currentTop = parseInt(getComputedStyle(navbar).top.split("px"));

  // Clamp value between -80 and 0
  let amount = Math.max(
    Math.min(
      currentTop +
        (distance < 0
          ? Math.abs(distance) // scrolling up
          : -Math.abs(distance)) * // scrolling down
          40, // (1)
      0,
    ),
    -80,
  );

  navbar.style.top = `${amount}px`;

  lastScrollTop = scrollTop;
});

// Dark mode toggle button
var themeToggleIcon = document.getElementById("theme-toggle-icon");
var themeToggleBtn = document.getElementById("theme-toggle");
let themeToggleScrollbar = document.getElementById("scrollbar");

themeToggleBtn.addEventListener("click", function () {
  themeToggleIcon.classList.toggle("-rotate-180");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      themeToggleScrollbar.classList.add("scrollbar-track-neutral-900");
      themeToggleScrollbar.classList.remove("scrollbar-track-neutral-100");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      themeToggleScrollbar.classList.add("scrollbar-track-neutral-100");
      themeToggleScrollbar.classList.remove("scrollbar-track-neutral-900");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      themeToggleScrollbar.classList.add("scrollbar-track-neutral-100");
      themeToggleScrollbar.classList.remove("scrollbar-track-neutral-900");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      themeToggleScrollbar.classList.add("scrollbar-track-neutral-900");
      themeToggleScrollbar.classList.remove("scrollbar-track-neutral-100");
    }
  }
});

// Navbar toggle button animation
var navbarToggleBtn = document.getElementById("navbar-toggle-btn");
var navbarHamburgerIcon1 = document.getElementById("navbar-hamburger-icon-1");
var navbarHamburgerIcon2 = document.getElementById("navbar-hamburger-icon-2");
var navbarHamburgerIcon3 = document.getElementById("navbar-hamburger-icon-3");
var navbarCloseIcon1 = document.getElementById("navbar-close-icon-1");
var navbarCloseIcon2 = document.getElementById("navbar-close-icon-2");
var navbarCloseIcon3 = document.getElementById("navbar-close-icon-3");

navbarToggleBtn.addEventListener("click", function () {
  navbarHamburgerIcon1.classList.toggle("translate-x-10");
  navbarHamburgerIcon2.classList.toggle("translate-x-10");
  navbarHamburgerIcon3.classList.toggle("translate-x-10");
  navbarCloseIcon1.classList.toggle("translate-x-0");
  navbarCloseIcon2.classList.toggle("rotate-45");
  navbarCloseIcon3.classList.toggle("-rotate-45");
});

// pause Flowbite carousel on hover
// https://github.com/themesberg/flowbite/issues/863
// https://flowbite.com/docs/getting-started/javascript/#instance-manager
// I don't undrestand how to use pause() to stop carousel on hover.
/* window.addEventListener("load", function () {
  const carousel = FlowbiteInstances.getInstance(
    "Carousel",
    "default-carousel",
  );
}); */
