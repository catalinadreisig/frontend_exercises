const list = document.querySelector("ul");

const li = document.createElement("li");
const valueArr = [];
li.style.setProperty("-height", "10");
list.appendChild(li);

setInterval(genererSoejle, 1000);

function genererSoejle() {
  valueArr.push(Math.round(Math.random() * 100));
  console.log(valueArr);
  const li = document.createElement("li");
  li.style.setProperty("--height", "10");
  list.appendChild(li);

  console.log("genererSoejle");
}
