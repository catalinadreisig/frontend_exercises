const list = document.querySelector("ul");
const valueArr = [];

// Funktion til at generere og opdatere søjler
function genererSoejle() {
  // Tilføj et tilfældigt nummer mellem 0 og 100 til valueArr
  valueArr.push(Math.round(Math.random() * 100));

  // Hvis længden af valueArr er større end 20, skal vi fjerne den ældste værdi
  if (valueArr.length > 20) {
    valueArr.shift(); // Fjern den første værdi i arrayet
    list.firstElementChild.remove(); // Fjern den første søjle i DOM'en
  }

  // Opdater søjlediagrammet med de seneste værdier
  list.innerHTML = ""; // Fjern alt indhold fra <ul>
  valueArr.forEach((value) => {
    const li = document.createElement("li");
    li.style.setProperty("--height", value);
    list.appendChild(li);
  });
}

// Kør funktionen genererSoejle hvert sekund
setInterval(genererSoejle, 1000);
