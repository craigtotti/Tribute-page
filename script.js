// Example JavaScript code
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery img");

    images.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.1)";
            img.style.transition = "transform 0.5s ease";
        });

        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
        });
    });
});
