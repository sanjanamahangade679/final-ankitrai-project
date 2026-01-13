/* ===== Mobile Menu Toggle ===== */
// function toggleMenu() {
//     document.getElementById("navMenu").classList.toggle("active");
// }
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}


/* ===== Sticky Header on Scroll ===== */
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

/* ===== Active Link Highlight ===== */
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

/* ===== Smooth Scroll (FIXED) ===== */
navLinks.forEach(link => {
    link.addEventListener("click", e => {
        const href = link.getAttribute("href");

        if (href.startsWith("#") && href.length > 1) {
            e.preventDefault();
            document.querySelector(href)?.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/* ===== Let’s Talk Popup ===== */
function openTalk() {
    alert("📩 Contact us at: contact@codevirussecurity.com");
}
