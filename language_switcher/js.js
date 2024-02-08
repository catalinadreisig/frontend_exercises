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

const locale = "da"; // Initial language set to Danish

function changeLanguage(locale) {
  const languageTexts = texts[locale];
  if (!languageTexts) return; // If language not found in texts object, do nothing

  languageTexts.texts.forEach(({ text, location }) => {
    const element = document.querySelector(location);
    if (element) {
      element.textContent = text;
    }
  });
}

// Initial language setup
changeLanguage(locale);

// Example: Changing language to German after 2 seconds
setTimeout(() => {
  const newLocale = "de";
  changeLanguage(newLocale);
}, 2000);
