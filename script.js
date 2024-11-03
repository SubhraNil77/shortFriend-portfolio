// Auto transition background images on scroll
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Update opacity based on scroll position
    if (scrollY < windowHeight) {
        document.getElementById('bg1').style.opacity = '1';
        document.getElementById('bg2').style.opacity = '0';
        document.getElementById('bg3').style.opacity = '0';
    } else if (scrollY < windowHeight * 2) {
        document.getElementById('bg1').style.opacity = '0';
        document.getElementById('bg2').style.opacity = '1';
        document.getElementById('bg3').style.opacity = '0';
    } else {
        document.getElementById('bg1').style.opacity = '0';
        document.getElementById('bg2').style.opacity = '0';
        document.getElementById('bg3').style.opacity = '1';
    }
});

// Function for smooth scrolling to a section
function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Existing code for the image slider
let slideIndex = 0; // Initialize the slide index
let autoSlideInterval;

// Function to show the current slide
function showSlides() {
    const slides = document.querySelectorAll('.slides img');
    // Hide all slides
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    // Display the current slide
    slides[slideIndex].style.display = 'block';
}

// Function to change the slide index
function plusSlides(n) {
    const slides = document.querySelectorAll('.slides img');
    // Update the slide index
    slideIndex += n;

    // Loop back to the first slide if at the end
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Go to the last slide if going backward
    }

    showSlides(); // Show the updated slide
    resetAutoSlide(); // Reset the auto slide timer
}

// Function to reset the auto slide timer
function resetAutoSlide() {
    clearInterval(autoSlideInterval); // Clear previous interval
    autoSlideInterval = setInterval(() => plusSlides(1), 7000); // Change slide every 7 seconds (adjust as needed)
}

// Initialize the slider
document.addEventListener('DOMContentLoaded', () => {
    showSlides(); // Show slides on page load
    resetAutoSlide(); // Start auto sliding
});

// Event listeners for navigation buttons
document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
document.querySelector('.next').addEventListener('click', () => plusSlides(1));

// Background image auto change
// const backgrounds = [
//     './images/award_1.jpg',
//     './images/award_2.jpg',
//     './images/contact_background.jpg' // Add more images if needed
// ];

let currentIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
    currentIndex = (currentIndex + 1) % backgrounds.length; // Cycle through the array
}

// Initial call to set the first background
changeBackground();

// Change background every 5 seconds
setInterval(changeBackground, 3000);
