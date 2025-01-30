function toggleAbout() {
    const aboutSection = document.getElementById('about-section');
    const arrow = document.getElementById('arrow');
    
    // Controlliamo se la sezione è già aperta o no
    if (aboutSection.classList.contains("hidden")) {
        // Aggiungiamo la classe "show" e rimuoviamo "hidden" per espandere
        aboutSection.classList.remove("hidden");
        aboutSection.style.maxHeight = aboutSection.scrollHeight + "px"; // Espandiamo la sezione
        arrow.innerHTML = '▲'; // Cambiamo la freccia in su
    } else {
        // Se è già aperta, la nascondiamo
        aboutSection.style.maxHeight = "0px"; // Nascondiamo la sezione
        aboutSection.classList.add("hidden");
        arrow.innerHTML = '▼'; // Cambiamo la freccia in giù
    }
}