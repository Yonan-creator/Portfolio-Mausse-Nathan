// GESTION DU THÈME
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Appliquer thème sauvegardé
const savedTheme = localStorage.getItem("nathan-portfolio-theme");
if (savedTheme === "light") {
  body.classList.add("light-theme");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  
  if (body.classList.contains("light-theme")) {
    localStorage.setItem("nathan-portfolio-theme", "light");
  } else {
    localStorage.setItem("nathan-portfolio-theme", "dark");
  }
});

// MENU BURGER
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
if (burger) {
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// FORMULAIRE DE CONTACT
const form = document.getElementById("contact-form");
const responseMsg = document.getElementById("response-msg");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    responseMsg.textContent = "Merci Nathan ! Message simulé avec succès.";
    responseMsg.style.color = "var(--accent)";
    form.reset();
  });
}