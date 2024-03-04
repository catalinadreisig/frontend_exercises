"use strict";

document.querySelector("#theme_select").addEventListener("change", theChange);

function theChange(evt) {
  console.log("change", evt.target.value);
  document.querySelector("body").dataset.theme = evt.target.value;
}
