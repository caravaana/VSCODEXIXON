const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  mobileNav.classList.toggle("is-open", !isExpanded);
});

mobileNav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    menuToggle.setAttribute("aria-expanded", "false");
    mobileNav.classList.remove("is-open");
  }
});

document.querySelectorAll(".food-toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const description = document.getElementById(toggle.getAttribute("aria-controls"));
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!isExpanded));
    description.hidden = isExpanded;
  });
});
