/*
DYR FILTERS
const animals = [
  {
    name: "Mandu",
    type: "cat",
  },
  {
    name: "Mia",
    type: "cat",
  },
  {
    name: "Leeloo",
    type: "dog",
  },
  {
    name: "ScoobyDoo",
    type: "dog",
  },
];

function isCat(animal) {
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}

function isDog(animal) {
  if (animal.type === "dog") {
    return true;
  } else {
    return false;
  }
}
let onlyCats = animals.filter(isCat);
console.log("Cats", onlyCats);
let onlyDogs = animals.filter(isDog);
console.log("Dogs", onlyDogs);
*/

"use strict";
const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const ulPointer = document.querySelector("ul");

function showTheseVehicles(arr) {
  ulPointer.innerHTML = ""; // Clear previous list items
  arr.forEach((each) => {
    const li = document.createElement("li");
    let stops = each.stops ? each.stops.join(", ") : ""; // Check if stops array exists

    li.innerHTML = `
      <p>Type: ${each.type}</p>
      <p>Fuel: ${each.fuel}</p>
      <p>Passengers: ${each.passengers}</p>
      <p>Stops: ${stops}</p>
      <p>Owned by: ${each.ownedBy || "Unknown"}</p>
      <p>Electric: ${each.isElectric ? "Yes" : "No"}</p>
      <p>Tandem: ${each.isTandem ? "Yes" : "No"}</p>
    `;

    ulPointer.appendChild(li);
  });
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", btnFiltersEvtListener);
});

function btnFiltersEvtListener(evt) {
  const filterType = evt.currentTarget.dataset.filter;
  let filteredVehicles = [];

  switch (filterType) {
    case "all":
      filteredVehicles = vehicles;
      break;
    case "electric":
      filteredVehicles = vehicles.filter((vehicle) => vehicle.isElectric);
      break;
    case "passengers":
      filteredVehicles = vehicles.filter((vehicle) => vehicle.passengers > 1);
      break;
    case "jonas":
      filteredVehicles = vehicles.filter((vehicle) => vehicle.ownedBy === "Jonas" || vehicle.ownedBy === "Vingegård");
      break;
    case "rugbrod":
      filteredVehicles = vehicles.filter((vehicle) => vehicle.fuel === "Rugbrød" && vehicle.passengers > 1);
      break;
    default:
      filteredVehicles = vehicles;
  }

  showTheseVehicles(filteredVehicles);
}
