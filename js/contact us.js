document.addEventListener('DOMContentLoaded', (event) => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const telephone = document.getElementById('telephone');
        let isValid = true;

        // Validate name (should not be empty)
        if (name.value.trim() === '') {
            name.classList.add('is-invalid');
            isValid = false;
        } else {
            name.classList.remove('is-invalid');
        }

        // Validate email (should be a valid email address)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            email.classList.add('is-invalid');
            isValid = false;
        } else {
            email.classList.remove('is-invalid');
        }

        // Validate telephone (should be 10 digits)
        const telephonePattern = /^\d{10}$/;
        if (!telephonePattern.test(telephone.value)) {
            telephone.classList.add('is-invalid');
            isValid = false;
        } else {
            telephone.classList.remove('is-invalid');
        }

        if (isValid) {
            alert('Form submitted successfully!');
            contactForm.reset();
        }
    });
});
