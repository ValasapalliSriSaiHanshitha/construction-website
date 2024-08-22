let currentIndex = 0;
const slides = document.querySelectorAll('.slides img');

function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

setInterval(showNextSlide, 3000); // Change image every 3 seconds
