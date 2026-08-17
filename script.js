const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const sections = document.querySelectorAll("main section[id]");

if (menuButton && navMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu?.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    });
  },
  { rootMargin: "-25% 0px -65% 0px" }
);

sections.forEach((section) => observer.observe(section));

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();


const carousels = document.querySelectorAll('[data-carousel]');

carousels.forEach((carousel) => {
  const slides = carousel.querySelectorAll('.carousel-slide');
  const dots = carousel.querySelectorAll('.carousel-dot');
  const prevButton = carousel.querySelector('.carousel-button.prev');
  const nextButton = carousel.querySelector('.carousel-button.next');
  let currentIndex = 0;

  const renderCarousel = (index) => {
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('active', slideIndex === index);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === index);
    });
    currentIndex = index;
  };

  prevButton?.addEventListener('click', () => {
    const nextIndex = (currentIndex - 1 + slides.length) % slides.length;
    renderCarousel(nextIndex);
  });

  nextButton?.addEventListener('click', () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    renderCarousel(nextIndex);
  });

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => renderCarousel(dotIndex));
  });
});
