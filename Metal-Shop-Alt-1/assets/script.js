const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdown = document.querySelector(".dropdown");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (dropdownToggle && dropdown) {
  dropdownToggle.addEventListener("click", () => {
    const isOpen = dropdown.classList.toggle("open");
    dropdownToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && reveals.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach((el) => observer.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("in-view"));
}
