/*

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
/* 
ELECTRIC
function isElectric(vehicle) {
  if (vehicle.isElectric === true) {
    return vehicle;
  }
}
const allElectricVehicles = vehicles.filter(isElectric);

PASSENGERS
function passengers(vehicle) {
  if (vehicle.passengers > 1) {
    return true;
  }
  return false;
}

const passengersVehicles = vehicles.filter(passengers);

JONAS
function ownedBy(vehicle) {
  if (vehicle.ownedBy === "Jonas" || vehicle.ownedBy === "Vingegård") {
    return true;
  }
  return false;
}
const jonasVehicles = vehicles.filter(ownedBy);

RUGBRØD
function rugbrod(vehicle) {
  if (vehicle.fuel === "Rugbrød" && vehicle.passengers > 1) {
    return true;
  }
  return false;
}

const rugbrodVehicles = vehicles.filter(rugbrod);
*/

showTheseVehicles(rugbrodVehicles);

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    ulPointer.innerHTML += `<li>${each.type}</li>`;
    ulPointer.innerHTML += `<li>${each.fuel}</li>`;
    ulPointer.innerHTML += `<li>${each.passengers}</li>`;
    ulPointer.innerHTML += `<li>${each.stops}</li>`;
    ulPointer.innerHTML += `<li>${each.ownedBy}</li>`;
    ulPointer.innerHTML += `<li>${each.isElectric}</li>`;
    ulPointer.innerHTML += `<li>${each.isTandem}</li>`;
  });
}
