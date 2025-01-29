// Funzione per mostrare/nascondere la sezione "Chi Siamo"
function toggleAbout() {
    let aboutSection = document.getElementById("about-section");
    let arrow = document.getElementById("arrow");

    // Alterna la visibilità
    if (aboutSection.style.display === "block") {
        aboutSection.style.display = "none";
        arrow.innerHTML = "▼"; // Mostra freccia in giù
    } else {
        aboutSection.style.display = "block";
        arrow.innerHTML = "▲"; // Mostra freccia in su
    }
}

document.getElementById("about-toggle").addEventListener("click", function() {
    let aboutSection = document.getElementById("about");
    aboutSection.style.display = (aboutSection.style.display === "none" || aboutSection.style.display === "") ? "block" : "none";
    document.body.style.height = "auto"; // Permette l’espansione della pagina su Android
});