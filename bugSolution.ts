function add(a: number, b: number): number {
  return a + b;
}

function isNumber(arg: any): arg is number {
  return typeof arg === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    console.error("Invalid input. Both arguments must be numbers.");
    return 0; // Or throw an error
  }
}

let result1 = addSafe(5, 10); // valid
let result2 = addSafe("hello", 5); // Invalid, prints error message to console