window.addEventListener('DOMContentLoaded', (event) => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Show or hide the button based on scroll position
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (scrollToTopBtn) { // Check if the element exists
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollToTopBtn.style.display = "flex"; // Use flex as it's styled with display:flex for centering
            } else {
                scrollToTopBtn.style.display = "none";
            }
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // For smooth scrolling
            });
        });
    }

    // Optional: Add active class to navbar links based on scroll or page
    // This is a more complex feature and might require more logic based on sections
    // For now, one link is hardcoded with 'active' class in HTML.
});


document.addEventListener('DOMContentLoaded', function () {
    const slidesWrapper = document.querySelector('.slides-wrapper');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.slider-dots');
    const totalSlides = slides.length;
    let currentSlide = 0;

    // Create dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            goToSlide(i);
        });
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');

    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function goToSlide(slideIndex) {
        if (slideIndex < 0 || slideIndex >= totalSlides) {
            console.warn("Invalid slide index");
            return;
        }
        slidesWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
        currentSlide = slideIndex;
        updateDots();
    }

    // Initialize slider
    goToSlide(0); // Start with the first slide

    // Optional: Auto-slide
    // let autoSlideInterval = setInterval(() => {
    //     let nextSlide = (currentSlide + 1) % totalSlides;
    //     goToSlide(nextSlide);
    // }, 5000); // Change slide every 5 seconds

    // Optional: Pause auto-slide on hover
    // const sliderContainer = document.querySelector('.testimonial-slider-container');
    // sliderContainer.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    // sliderContainer.addEventListener('mouseleave', () => {
    //     autoSlideInterval = setInterval(() => {
    //         let nextSlide = (currentSlide + 1) % totalSlides;
    //         goToSlide(nextSlide);
    //     }, 5000);
    // });

    // Scroll to top button functionality (same as before)
    const scrollTopButton = document.getElementById('scrollTopButton');
    if (scrollTopButton) {
        window.onscroll = function() { scrollFunction(); };
        function scrollFunction() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollTopButton.classList.add('show');
            } else {
                scrollTopButton.classList.remove('show');
            }
        }
        scrollTopButton.addEventListener('click', function() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    }
});