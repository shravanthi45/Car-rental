document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll function
    function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    }

    // Attach scroll function to global scope
    window.scrollToSection = scrollToSection;

    // Mobile menu toggle
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (navToggle) {
        navToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    // Animate elements on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll(".fade-in");
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll();
});
