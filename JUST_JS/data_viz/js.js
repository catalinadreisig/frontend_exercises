// Simuler ændringer i inQueue
setInterval(() => {
  let newValue = Math.floor(Math.random() * 10); // Simuler ny værdi
  updateSpeedometer(newValue);
}, 10000);

function updateSpeedometer(value) {
  let degree = (value / 10) * 180 - 90; // Konverter inQueue-værdi til grad
  document.getElementById("needle").style.transform = `rotate(${degree}deg)`;
  document.getElementById("speed").innerText = value;
}
