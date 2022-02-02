// to run: type tsc --target es2020 bigint.ts

// Creating a bigint via the BigInt function
const oneHundread: bigint = BigInt(100);
console.log(typeof oneHundread);

// Creating a BigInt via the literal syntax
const anotherHundred: bigint = 100n;