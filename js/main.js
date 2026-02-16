// =====================
// SCROLL SUAVE MENU
// =====================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = link.getAttribute("href");
    const section = document.querySelector(id);

    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// =====================
// LINK ACTIVO SEGÚN SCROLL
// =====================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    const sectionID = section.getAttribute("id");

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${sectionID}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// =====================
// ANIMACION AL HACER SCROLL
// =====================

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

sections.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

// =====================
// BOTON DESCARGAR CV
// =====================

const btnCV = document.querySelector("#inicio a:nth-of-type(2)");

btnCV.addEventListener("click", () => {
  window.open("files/CV-Yony-Huertas.pdf", "_blank");
});

// =====================
// AÑO AUTOMATICO FOOTER
// =====================

const footer = document.querySelector("footer p");
const currentYear = new Date().getFullYear();

footer.textContent = `${currentYear} Yony Alexander Huertas | Portafolio personal`;
