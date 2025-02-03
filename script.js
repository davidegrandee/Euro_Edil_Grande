function toggleAbout() {
    var aboutSection = document.getElementById('about-section');
    var arrow = document.getElementById('arrow');
    
    if (aboutSection.classList.contains('hidden')) {
        aboutSection.classList.remove('hidden');
        arrow.innerHTML = '▲';  // Modifica la freccia per chiudere
    } else {
        aboutSection.classList.add('hidden');
        arrow.innerHTML = '▼';  // Modifica la freccia per aprire
    }
}


// Effetto di scorrimento lento per le immagini
document.addEventListener("scroll", function() {
    let slides = document.querySelectorAll(".slide");
    slides.forEach((slide, index) => {
        let speed = (index + 1) * 0.3; 
        slide.style.transform = `translateY(${window.scrollY * speed}px)`;
    });
});

let slideIndex = 0;
        showSlides();

        function showSlides() {
            let slides = document.getElementsByClassName("slide");
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 3000); // Cambia slide ogni 3 secondi
        }

        function changeSlide(n) {
            slideIndex += n - 1;
            showSlides();
        }