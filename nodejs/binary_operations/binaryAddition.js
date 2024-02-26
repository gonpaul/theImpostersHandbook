import { fullAdder } from './adders.js';

export function binaryAddition(a, b) {
  const result = [];
  let carry = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    const fa = fullAdder(a[i], b[i], carry);
    result.unshift(fa[0]);
    carry = fa[1];
  }
  return carry ? [carry, ...result] : result;
}

console.log(binaryAddition([1, 0, 1, 0], [1, 1, 0, 1])); // 10111
console.log(binaryAddition([0, 1, 0, 0], [1, 1, 0, 1])); // 10001

export function binaryAddition2(a, b) { 
  return (a | b) + (a & b);
}

console.log(binaryAddition2(10, 13)); // 23