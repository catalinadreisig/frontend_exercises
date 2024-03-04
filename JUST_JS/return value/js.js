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

/***RETURN AREALET AF REKTANGEL */
function udregnRektangelAreal(width, height) {
  return 2 * (width + height);
}
let beregnetAreal = udregnRektangelAreal(100);
console.log("arealet er lig", beregnetAreal);

/***OMREGNER M2 TIL FT2 */
function convertSquareMToSquareFt(tal) {
  return tal * 10.7639104;
}
let omregnetTal = convertSquareMToSquareFt(100);
console.log(omregnetTal);
