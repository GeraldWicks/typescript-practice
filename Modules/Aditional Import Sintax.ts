export let pi = 3.14;

/*
An import can be renamed usind a format like import { old as new };

import { pi as π } from "./archiveName.ts"

console.log(π);
*/

export let phi = 1.61;
export let squareTwo = 1.41;

// You can take all the exported objects and put them into a single namespace using * as name, ex:
/*
import * as math from "./archiveName.ts";

console.log(math.phi);
console.log(math.squareTwo);
*/

// We also can use export to type and interface;

export type Cat = { breed: string, yearOfBirth: number };

export interface Dog {
    name: string,
    color: string
}

// Typescript has extended the import sintax with two concepts for declaring an import of type
// ex:

/*

import type { Cat } from "./archiveName.ts";

or just use:

import { Cat, Dog } from "./archiveName.ts";

*/