
document.addEventListener('DOMContentLoaded', function() {
    let counterIndex = 0;

    const prevArrow = document.querySelector('.tagSection .tagSectionContainer .tagSlider .navArrows #prevArrow');
    const nextArrow = document.querySelector('.tagSection .tagSectionContainer .tagSlider .navArrows #nextArrow');
    const tagSliderBlock = document.querySelector('.tagSlider .tagSliderBlock'); // Contenedor del carrusel
    const tagBanner = document.querySelectorAll('.tagSlider .tagSliderBlock .tagBanner'); // Las imágenes
    const total = tagBanner.length; // Total de imágenes

    prevArrow.addEventListener('click', () => {
        moveSlide(-1);
    });

    nextArrow.addEventListener('click', () => {
        moveSlide(1);
    });

    function moveSlide(direction) {
        counterIndex += direction;

        if (counterIndex < 0) {
            counterIndex = total - 1;
        } else if (counterIndex >= total) {
            counterIndex = 0;
        }

        tagSliderBlock.style.transform = `translateX(-${counterIndex * (100 / total)}%)`;
    }

    // Opcional: Mover automáticamente las diapositivas cada 3 segundos
    setInterval(() => {
        moveSlide(1);
    }, 5000);
});
