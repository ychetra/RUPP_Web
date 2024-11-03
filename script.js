document.addEventListener('DOMContentLoaded', function () {
    // Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            preloader.style.display = 'none';
        });
    }

    // Add preview thumbnails to carousel controls
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');
    const slides = document.querySelectorAll('.carousel-item');

    if (prevButton && nextButton) {
        // Add preview containers
        prevButton.innerHTML += '<div class="preview-thumbnail"><img src="" alt="Previous"></div>';
        nextButton.innerHTML += '<div class="preview-thumbnail"><img src="" alt="Next"></div>';

        const prevThumb = prevButton.querySelector('img');
        const nextThumb = nextButton.querySelector('img');

        function updatePreviews() {
            const activeSlide = document.querySelector('.carousel-item.active');
            const activeIndex = Array.from(slides).indexOf(activeSlide);
            
            // Calculate prev and next indices
            const prevIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
            const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;

            // Update preview images
            prevThumb.src = slides[prevIndex].querySelector('img').src;
            nextThumb.src = slides[nextIndex].querySelector('img').src;
        }

        // Update previews initially
        updatePreviews();

        // Update previews when slide changes   
        document.getElementById('heroCarousel').addEventListener('slid.bs.carousel', updatePreviews);
    }

    // Initialize carousel
    var myCarousel = document.querySelector('#heroCarousel')
    if (myCarousel) {
        var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 5000,
            pause: 'hover',
            wrap: true
        });
    }
});
