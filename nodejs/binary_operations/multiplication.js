import { binaryAddition } from "./binaryAddition.js";

export function binaryMultiplication(a, b) {
  if (a === '0' || b === '0') {
    return 0;
  }
  let acc = '';

  for (let i = 0; i < b.length; i++) {
    if (b.at(-1 -i) === '1') {
      const product = a + '0'.repeat(i);
      acc = binaryAddition(acc, product);
    }
  }
  return acc;
}

console.log(binaryMultiplication('1101', '1'));
console.log(binaryMultiplication('1010', '101'));
console.log(binaryMultiplication('11', '11'));