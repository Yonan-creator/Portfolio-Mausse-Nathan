// MENU BURGER
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// FERMER MENU QUAND ON CLIQUE SUR UN LIEN
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// FORMULAIRE CONTACT (simulation)
const form = document.getElementById("contact-form");
const responseMsg = document.getElementById("response-msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    responseMsg.textContent = "Merci ! Votre message a été envoyé.";
    responseMsg.style.color = "lightgreen";
    form.reset();
  } else {
    responseMsg.textContent = "Veuillez remplir tous les champs.";
    responseMsg.style.color = "salmon";
  }
});

document.addEventListener("DOMContentLoaded", function () {

  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animation une seule fois
      }
    });
  }, {
    threshold: 0.15
  });

  sections.forEach(section => {
    observer.observe(section);
  });

});

const toggle = document.getElementById("themeToggle");
const body = document.body;

// Charger thème sauvegardé

toggle.addEventListener("click", () => {

document.body.classList.toggle("light-theme");

if(document.body.classList.contains("light-theme")){
localStorage.setItem("theme","light");
}else{
localStorage.setItem("theme","dark");
}

});

if(localStorage.getItem("theme")==="light"){
document.body.classList.add("light-theme");
}