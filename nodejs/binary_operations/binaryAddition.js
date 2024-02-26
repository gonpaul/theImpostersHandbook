import { fullAdder } from './adders.js';

export function binaryAddition(a, b) {
  const result = [];
  let carry = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    const fa = fullAdder(a[i], b[i], carry);
    result.unshift(fa[1]);
    carry = fa[0];
  }
  return result;
}

console.log(binaryAddition([1, 0, 1, 0], [1, 1, 0, 1])); // [1, 0, 0, 0, 1]

export function binaryAddition2(a, b) {
  return (a | b) + (a & b);
}

console.log(binaryAddition2(10, 13)); // 23