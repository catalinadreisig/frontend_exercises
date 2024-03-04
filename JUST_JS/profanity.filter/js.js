const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

document.querySelector("button").addEventListener("pointerdown", checkIfSentenceContainsProfanity);

function checkIfSentenceContainsProfanity() {
  const theText = document.querySelector("p").textContent;
  theText.replaceAll("var", "const");
  console.log("Hej", theText);
}
