document.addEventListener("DOMContentLoaded", function () {
    let overlayText = document.getElementById('text-overlay');
    setTimeout(() => {
        overlayText.style.animation = 'slideIn 4s forwards, slideOut 3s 6s forwards';
    }, 500);
});