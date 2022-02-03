type Person = { age: number, name: string, isValid: boolean };
type Age = Person["age"]; // type Age = number

type I1 = Person["age"| "name"]; // type I1 = string | number

type I2 = Person[keyof Person]; // type I2 = string | number | boolean

type AgeOrName = "age" | "name";
type I3 = Person[AgeOrName];// type I3 = string | boolean;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 }
]

type User = typeof MyArray[number]; // type User = { name: string, age: number }

type UserAge = typeof MyArray[number]["age"]; // type UserAge = number;

type UserAge2 = User["age"]; // type UserAge2 = number;