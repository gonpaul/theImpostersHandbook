import { fullAdder } from './adders.js';

export function binaryAddition(a, b) {
  const result = [];
  let carry = 0;
  if (typeof a !== 'string') {
    [a, b] = [a.join(''), b.join('')];
    // throw Error('only string input support!!!');
  }
  
  while (a.length !== b.length) {
    const [alen, blen] = [a.length, b.length];
    if (alen > blen) {
      b = b.padStart(alen, "0"); // Update b with padded zeros
    } else if (alen < blen) {
      a = a.padStart(blen, "0"); // Update a with padded zeros
    }
  }

  // turn a and b into arrays
  a = a.split('');
  b = b.split('');


  for (let i = a.length - 1; i >= 0; i--) {
    const fa = fullAdder(parseInt(a[i]), parseInt(b[i]), carry);
    result.unshift(fa[0]);
    carry = fa[1];
  }
  return carry ? [carry, ...result].join('') : result.join('');
}

// console.log(binaryAddition('1', '11001')) // 11010
// console.log(binaryAddition('1101', '10000')); // 11101

export function binaryAddition2(a, b) { 
  return (a | b) + (a & b);
}

// console.log(binaryAddition2(10, 13)); // 23