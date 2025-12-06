const openBtn = document.getElementById("openBtn");
const navigationBars = document.querySelector(".bars-navigation");

const closeNavigationBars = document.querySelectorAll(".close-navigation-bars");

const annoCorrente = document.getElementById("annoCorrente");

openBtn.addEventListener("click", () => {
  navigationBars.classList.toggle("active");
  openBtn.classList.toggle("rotate");
});

closeNavigationBars.forEach((closeNavigation) => {
  closeNavigation.addEventListener("click", () => {
    navigationBars.classList.toggle("active");
    openBtn.classList.toggle("rotate");
  });
});

annoCorrente.innerHTML = new Date().getFullYear();

let observer = new IntersectionObserver((entries, observer) => {
  entries
    .filter((e) => e.isIntersecting)
    .forEach((entry) => {
      entry.target.classList.add("fade");
      observer.unobserve(entry.target);
    });
});

document.querySelectorAll(".fade-js").forEach((e) => {
  observer.observe(e);
});
