// script.js

// Form Validation
function validateForm() {
    const form = document.getElementById('myForm');
    const name = form.name.value;
    const email = form.email.value;
    let valid = true;

    if (name === '') {
        valid = false;
        alert('Name must be filled out');
    }

    if (email === '') {
        valid = false;
        alert('Email must be filled out');
    }

    return valid;
}

// Button Effects
const button = document.getElementById('myButton');
button.addEventListener('mouseover', function() {
    button.style.backgroundColor = 'lightblue';
});
button.addEventListener('mouseout', function() {
    button.style.backgroundColor = '';
});

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle');
    const interactiveElement = document.getElementById('interactive');

    toggleButton.addEventListener('click', function() {
        interactiveElement.classList.toggle('active');
    });
});