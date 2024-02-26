import { fullAdder } from './adders.js';

export function binaryAddition(a, b) {
  const result = [];
  let carry = 0;
  [a, b] = [a.join(''), b.join('')];
  
  while (a.length !== b.length) {
    const [alen, blen] = [a.length, b.length];
    if (alen > blen) {
      b = b.padStart(alen, "0"); // Update b with padded zeros
    } else if (alen < blen) {
      a = a.padStart(blen, "0"); // Update a with padded zeros
    }
  }

  for (let i = a.length - 1; i >= 0; i--) {
    const fa = fullAdder(a[i], b[i], carry);
    result.unshift(fa[0]);
    carry = fa[1];
  }
  return carry ? [carry, ...result] : result;
}

console.log(binaryAddition([1, 0, 1, 0], [1, 1, 0, 1])); // 10111
console.log(binaryAddition([0, 1, 0, 0], [1, 1, 0, 1])); // 10001
console.log(binaryAddition([0, 0, 1], [1, 1, 0, 0, 1])) // 11010

export function binaryAddition2(a, b) { 
  return (a | b) + (a & b);
}

console.log(binaryAddition2(10, 13)); // 23