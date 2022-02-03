type Point = { x: number, y: number };
type P = keyof Point;

// type P = "x" | "y";

let point: P = "x";
let otherPoint: P = "y";

// If the type has a string or number index signaturem keyof will return thoses types instead:

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish; /// type A = number
let number: A = 10;

type Mapish = { [k: string]: boolean };
type M = keyof Mapish; // type M = string | number