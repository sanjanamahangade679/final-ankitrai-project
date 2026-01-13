let heroIndex = 0;
const heroSlides = document.querySelectorAll(".hero-slide");

function showHeroSlide(index) {
  heroSlides.forEach(slide => slide.classList.remove("active"));
  heroSlides[index].classList.add("active");
}

function heroNext() {
  heroIndex = (heroIndex + 1) % heroSlides.length;
  showHeroSlide(heroIndex);
}

function heroPrev() {
  heroIndex = (heroIndex - 1 + heroSlides.length) % heroSlides.length;
  showHeroSlide(heroIndex);
}

/* Auto Slide */
setInterval(heroNext, 4000);
