function setupSlider(sliderSection) {
    const prevButton = sliderSection.querySelector('.prev');
    const nextButton = sliderSection.querySelector('.next');
    const slider = sliderSection.querySelector('.slider-slider');
    let scrollAmount = 0;
    const slideWidth = sliderSection.querySelector('.slider-item').offsetWidth + 16; // Ajuste para a margem

    prevButton.addEventListener('click', () => {
        slider.scrollLeft -= slideWidth;
    });

    nextButton.addEventListener('click', () => {
        slider.scrollLeft += slideWidth;
    });
}

document.querySelectorAll('.slider-section').forEach(sliderSection => {
    setupSlider(sliderSection);
});