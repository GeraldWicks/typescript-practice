// ES Module Sintax
// A file can declare a main export via export default:

export default function helloWorld() {
    console.log("Hello, world");
}

/*
This is the imported via: (Inside another file)
import helloWorld from "./archiveName.ts"
*/

export var pi = 3.14;
export let squareTwo = 1.41;
export const phi  = 1.61;

/* 
These can be used in another file via the import sintax:

import { pi, squareTwom phi } from "./archiveName.ts"
*/