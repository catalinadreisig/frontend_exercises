"use strict";

// Define the Animal prototype
const Animal = {
  name: "",
  desc: "",
  type: "",
};

window.addEventListener("DOMContentLoaded", start);

let animals;

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      animals = jsonData;

      // when loaded, prepare objects
      prepareObjects();
    });
}

function prepareObjects() {
  const animalObjects = [];

  animals.forEach((jsonObject) => {
    // Create a new object from the Animal prototype
    const animal = Object.create(Animal);

    // Find values for name, desc, and type
    const { fullname: name, age } = jsonObject;
    const desc = `is ${age} years old`;
    const type = jsonObject.fullname.split(" ")[2]; // assuming the type is the third word in fullname

    // Set properties in the new object
    animal.name = name;
    animal.desc = desc;
    animal.type = type;

    // Add the new object to the array of animals
    animalObjects.push(animal);
  });

  // Display the list
  displayList(animalObjects);
}

function displayList(animals) {
  // Clear the list
  document.querySelector("#list").innerHTML = "";

  // Build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // Create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // Set clone data
  clone.querySelector("[data-field=fullname]").textContent = animal.name;
  clone.querySelector("[data-field=age]").textContent = animal.desc;

  // Append clone to list
  document.querySelector("#list").appendChild(clone);
}
