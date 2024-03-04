document.querySelector("button").addEventListener("click", btn_klik);

function btn_klik(evt) {
  document.querySelector("#ball").addEventListener("animationend", animationIterateAndEnd);
  document.querySelector("#ball").addEventListener("animationiteration", animationIterateAndEnd);
  document.querySelector("#ball").classList.add("ani");
}

function animationIterateAndEnd(evt) {
  console.log("animationIterateAndENd", evt.type);
  if (evt.type === animationend) {
    document.querySelector("#ball").classList.remove("ani");
  }
}
