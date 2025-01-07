// Booking Form Validation Script
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.book-form form');
    const inputs = form.querySelectorAll('input, textarea');
    const submitButton = form.querySelector('.book-btn');

    form.addEventListener('submit', function (event) {
        let isValid = true;
        inputs.forEach(function(input) {
            if (input.value.trim() === "" && input.type !== 'submit') {
                isValid = false;
                input.style.borderColor = "red"; // Highlight empty fields
            } else {
                input.style.borderColor = ""; // Reset if valid
            }
        });

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if invalid
            alert("Please fill out all the fields.");
        }
    });
});



// Mobile Navigation Toggle Script
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelector('.nav-links');
    const navToggleButton = document.querySelector('.nav-toggle');

    navToggleButton.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});



// Smooth Scroll for Navigation Links
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});


// Dynamically Update Visit Text
document.addEventListener("DOMContentLoaded", function () {
    const visitText = document.querySelector('.visit span');
    const cities = ['Gujarat', 'Rajasthan', 'Delhi', 'Punjab', 'Mumbai'];
    let index = 0;

    setInterval(function () {
        visitText.textContent = cities[index];
        index = (index + 1) % cities.length;
    }, 4000); // Change city every 4 seconds
});


// Scroll to Top Button Script
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.textContent = "↑";
    scrollToTopButton.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopButton);

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
