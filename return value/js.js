/**RETURN VALUE MOMS */
function momsBeregner(belob, moms) {
  return belob + (belob * moms) / 100;
}

let beregnetMoms = momsBeregner(100);
console.log("beregnetMoms", beregnetMoms);

/***RETURN VALUE GREETING */
function greeting(firstName) {
  return `Hello ${firstName}`;
}
const result = greeting("Klaus");
console.log(result);
