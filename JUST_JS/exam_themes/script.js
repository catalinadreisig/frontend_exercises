"use strict";

const root = document.documentElement,
  btn = document.querySelector("button");

let currentTheme = localStorage.getItem("theme") || "boring";

function applyTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}

function toggleTheme() {
  if (currentTheme === "boring") {
    currentTheme = "party";
  } else if (currentTheme === "party") {
    currentTheme = "boring";
  }
  applyTheme(currentTheme);
}
applyTheme(currentTheme);

btn.addEventListener("click", toggleTheme);
