"use strict";
let place = ["Paris", "Tokyo", "New York", "Rome", "Sydney"];
console.log("Orignal order", place);
console.log("Alphabetical order:", [...place].slice().sort());
console.log("Orignal order", place);
console.log("Reverse Alphabetical order:", [...place].sort());
console.log("Orignal order (again)", [...place].sort().reverse());
console.log("Reverse alphabetical order:", [...place].slice().sort().reverse());
console.log("Original order (again):", place);
console.log("Reversed order:", [...place].slice().reverse());
console.log("Original order (again):", place);
console.log("Sorted in alphabetical order:", place.slice().sort());
console.log("Sorted in reverse alphabetical order:", place.slice().sort().reverse());
