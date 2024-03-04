"use strict";

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

// Funktion til at ændre sproget baseret på den valgte værdi i dropdown-menuen
function changeLanguage(locale) {
  const languageTexts = texts[locale];
  if (!languageTexts) return; // Hvis sproget ikke findes i tekstobjektet, skal der ikke gøres noget

  languageTexts.texts.forEach(({ text, location }) => {
    const element = document.querySelector(location);
    if (element) {
      element.textContent = text;
    }
  });
}

// Funktion til at opdatere sproget, når der vælges en ny værdi i dropdown-menuen
document.getElementById("language-select").addEventListener("change", function () {
  changeLanguage(this.value);
});

// Initial sprogopsætning
const initialLocale = "da";
changeLanguage(initialLocale);
