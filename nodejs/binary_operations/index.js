const AsciiTable = require('ascii-table');

// primary logic operations
const and = (a, b) => a && b ? 1 : 0;
const or = (a, b) => a || b ? 1 : 0;
const not = a => a === 0 ? 1 : 0;

// secondary logic operations
const equiv = (a, b) => a === b ? 1 : 0;
const xor = (a, b) => not(equiv(a, b));
const imp = (a, b) => a ? b : 1;

// complement or inverse of primary logic operations
const identity = a => not(not(a)); // same as a => a
const nand = (a, b) => not(and(a, b));
const nor = (a, b) => not(or(a, b));

// complement or inverse of secondary logic operations

const nxor = (a, b) => not(xor(a, b)); // same as equiv
const nequiv = (a, b) => not(equiv(a, b)); // same as xor
const nimp = (a, b) => not(imp(a, b)); // same as and

const ascii = (op, fn) => {
  const tbl = new AsciiTable(`${op}`);
  tbl.setHeading('a', 'b', 'res')
  .addRow(0, 0, fn(0, 0))
  .addRow(0, 1, fn(0, 1))
  .addRow(1, 0, fn(1, 0))
  .addRow(1, 1, fn(1, 1));
  console.log(tbl.toString());
};

ascii('AND', and);
ascii('OR', or);
ascii('NOT', not);
ascii('EQUIV', equiv);
ascii('XOR', xor);
ascii('IMP', imp);
ascii('IDENTITY', identity);
ascii('NAND', nand);
ascii('NOR', nor);
ascii('NXOR', nxor);
ascii('NEQUIV', nequiv);
ascii('NIMP', nimp);
