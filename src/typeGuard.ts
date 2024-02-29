//! TYPESCRIPT TUPLE AND TYPE GUARDS
type MilesWithStringTuple = [string, string];
function isMilesWithString(value: unknown): value is MilesWithStringTuple {
  if (
    Array.isArray(value) &&
    value.length === 2 &&
    typeof value[0] === "string" &&
    typeof value[1] === "string"
  ) {
    return true;
  }
  return false;
}

function milesToKm(miles: unknown): number {
  if (typeof miles === "number") {
    return miles * 1.6;
  } else if (typeof miles === "string") {
    const splitMiles = miles.split(" ");
    const validateMiles = isMilesWithString(splitMiles);
    if (!validateMiles) throw new Error("Invalid input format");
    const getMiles = parseInt(splitMiles[0]);
    return getMiles * 1.6;
  }
  throw new Error("Invalid input format");
}
//! Allowed input formats
console.log(milesToKm(2));
console.log(milesToKm("2 miles"));
//! Invalid input formats
console.log(milesToKm(true));
console.log(milesToKm("2"));
console.log(milesToKm("2 miles 2"));

function numberGuard(value: unknown): value is number {
  return typeof value === "number";
}
//* My unknown value will get the type when the type guard function gets called  */
const myUnknownValue: unknown = 2;
if (numberGuard(myUnknownValue)) {
  // myUnknownValue is now a number
  const tempValue = myUnknownValue;
  console.log(tempValue);
}
