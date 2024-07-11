{
    $(document).ready(function () {
        const carouselInterval = 3000;
        const $carousel = $('#carouselExampleCaptions');
    
        // Initialize the carousel
        $carousel.carousel({
            interval: carouselInterval,
            wrap: true,
        });

        // Handle previous button click
        $('.carousel-control-prev').click(function () {
            $('#carouselExampleCaptions').carousel('prev');
        });

        // Handle next button click
        $('.carousel-control-next').click(function () {
            $('#carouselExampleCaptions').carousel('next');
        });
    
        // Automatically switch to the next slide
        function autoSwitchSlide() {
            $carousel.carousel('next');
        }
    
        // Set an interval to trigger autoSwitchSlide
        setInterval(autoSwitchSlide, carouselInterval);
    });
    
}