document.addEventListener('DOMContentLoaded', function() {
    // Portfolio Slideshow
    const projectImages = [
        'project1.jpg',
        'project2.jpg',
        'project3.jpg'
        // Add more project image paths as needed
    ];

    let currentIndex = 0;
    const projectImageContainer = document.getElementById('project-image');
    
    function showProjectImage() {
        projectImageContainer.src = projectImages[currentIndex];
    }

    function nextProject() {
        currentIndex = (currentIndex + 1) % projectImages.length;
        showProjectImage();
    }

    function prevProject() {
        currentIndex = (currentIndex - 1 + projectImages.length) % projectImages.length;
        showProjectImage();
    }

    document.getElementById('next-btn').addEventListener('click', nextProject);
    document.getElementById('prev-btn').addEventListener('click', prevProject);

    showProjectImage();

    // Form Validation
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (validateForm()) {
            // Send form data to server
            console.log('Form submitted successfully!');
            form.reset(); // Clear form inputs
        }
    });

    function validateForm() {
        let isValid = true;

        // Validate name
        if (nameInput.value.trim() === '') {
            isValid = false;
            setErrorFor(nameInput, 'Name cannot be blank');
        } else {
            setSuccessFor(nameInput);
        }

        // Validate email
        if (emailInput.value.trim() === '') {
            isValid = false;
            setErrorFor(emailInput, 'Email cannot be blank');
        } else if (!isEmailValid(emailInput.value.trim())) {
            isValid = false;
            setErrorFor(emailInput, 'Email is not valid');
        } else {
            setSuccessFor(emailInput);
        }

        // Validate message
        if (messageInput.value.trim() === '') {
            isValid = false;
            setErrorFor(messageInput, 'Message cannot be blank');
        } else {
            setSuccessFor(messageInput);
        }

        return isValid;
    }

    function setErrorFor(input, message) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        errorMessage.innerText = message;
        formGroup.classList.add('error');
    }

    function setSuccessFor(input) {
        const formGroup = input.parentElement;
        formGroup.classList.remove('error');
        const errorMessage = formGroup.querySelector('.error-message');
        errorMessage.innerText = '';
    }

    function isEmailValid(email) {
        // Regular expression for validating email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const offsetTop = targetSection.offsetTop;

            window.scroll({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
