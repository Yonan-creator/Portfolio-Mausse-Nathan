// --- MENU BURGER ---
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Fermer le menu quand on clique sur un lien (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// --- FORMULAIRE DE CONTACT (Simulation) ---
const form = document.getElementById("contact-form");
const responseMsg = document.getElementById("response-msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    responseMsg.textContent = "Merci " + name + " ! Votre message a été simulé comme envoyé.";
    responseMsg.style.color = "lightgreen";
    form.reset();
  } else {
    responseMsg.textContent = "Veuillez remplir tous les champs.";
    responseMsg.style.color = "salmon";
  }
});

// --- ANIMATION D'APPARITION DES SECTIONS (IntersectionObserver) ---
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Anime une seule fois
      }
    });
  }, {
    threshold: 0.1 // Déclenche quand 10% de la section est visible
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});

// --- GESTION DU THÈME (Sombre/Clair) ---
const toggle = document.getElementById("themeToggle");
const body = document.body;

// 1. Fonction pour appliquer le thème
function applyTheme(theme) {
  if (theme === "light") {
    body.classList.add("light-theme");
  } else {
    body.classList.remove("light-theme");
  }
}

// 2. Charger le thème sauvegardé au chargement
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  applyTheme(savedTheme);
}

// 3. Écouteur de clic sur l'interrupteur
toggle.addEventListener("click", () => {
  if (body.classList.contains("light-theme")) {
    applyTheme("dark");
    localStorage.setItem("theme", "dark");
  } else {
    applyTheme("light");
    localStorage.setItem("theme", "light");
  }
});