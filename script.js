const openBtn = document.getElementById("openBtn");
const navigationBars = document.querySelector(".bars-navigation");

const closeNavigationBars = document.querySelectorAll(".close-navigation-bars");

const annoCorrente = document.getElementById("annoCorrente");

openBtn.addEventListener("click", () => {
  navigationBars.classList.toggle("active");
  openBtn.classList.toggle("rotate");
  document.body.classList.toggle("no-scroll");
});

closeNavigationBars.forEach((closeNavigation) => {
  closeNavigation.addEventListener("click", () => {
    navigationBars.classList.toggle("active");
    openBtn.classList.toggle("rotate");
    document.body.classList.remove("no-scroll");
  });
});

annoCorrente.innerHTML = new Date().getFullYear();

const intersectionOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade");
      observer.unobserve(entry.target);
    }
  });
}, intersectionOptions);

document.querySelectorAll(".fade-js").forEach((e) => {
  observer.observe(e);
});
