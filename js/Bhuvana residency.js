let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', showNextSlide);
document.querySelector('.prev').addEventListener('click', showPrevSlide);

function showNextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    updateSlidePosition();
}

function showPrevSlide() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}

function updateSlidePosition() {
    const newTransformValue = `translateX(-${slideIndex * 100}%)`;
    document.querySelector('.slides').style.transform = newTransformValue;
}
