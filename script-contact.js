// Attendre que le contenu de la page soit chargé
document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner le formulaire
    const form = document.querySelector("form");

    // Ajouter un événement pour la soumission du formulaire
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Empêche le rechargement automatique de la page

        // Récupérer les valeurs des champs
        const nom = document.getElementById("nom").value; // Champ "Nom"
        const prenom = document.getElementById("prenom").value; 
        const email = document.getElementById("email").value; 
        const psw = document.getElementById("psw").value; 
        const message = document.getElementById("message").value; 

        // Vérifier si un champ est vide
        if (nom === "" || prenom === "" || email === "" || psw === "" || message === "") {
            alert("Veuillez remplir tous les champs."); // Affiche un message si un champ est vide
        } else {
            alert("Formulaire envoyé avec succès !"); // Affiche un message si tout est rempli
            form.reset(); // Réinitialise le formulaire
        }
    });
});


