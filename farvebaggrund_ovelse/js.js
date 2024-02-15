const colorBlock = document.getElementById("colorBlock");

document.addEventListener("mousemove", function (e) {
  const xPosition = e.clientX;
  const windowWidth = window.innerWidth;
  const percentage = (xPosition / windowWidth) * 100;
  const lightness = percentage; // this multiplier for sensitivity

  colorBlock.style.setProperty("--lightness", `${lightness}%`);
});
