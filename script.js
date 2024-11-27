// script.js

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Button hover effect for scaling
document.querySelector('button').addEventListener('mouseenter', function() {
    this.style.transform = "scale(1.05)";
});
document.querySelector('button').addEventListener('mouseleave', function() {
    this.style.transform = "scale(1)";
});

// Interactivity for form submission
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for getting involved! We will contact you soon.');
});


// Optional: Make images zoom on hover for added interactivity
document.querySelectorAll('.section img').forEach(img => {
    img.addEventListener('mouseenter', function () {
        this.style.transform = "scale(1.05)";
    });
    img.addEventListener('mouseleave', function () {
        this.style.transform = "scale(1)";
    });
});

