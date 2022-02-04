// IN TypeScript 4.1 and onwards, you can re-map keys in mapped types with an as clause in a mapped type:

type MappedTypeWithNewProperties<Type> = {
    [Properties in keyof Type as string]: Type[Properties];
}

// You can leverage features like template literal types to create new property names from prior ones:

type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};

interface Person {
    name: string,
    age: number,
    location: string
}

type LazyPerson = Getters<Person>; // type LazyPerson = { getName: () => string, getAge: () => number, getLocation: () => string }

// You can filter out keys by producing never via conditional type:

// Remove the 'kind' property
type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
}

interface Circle {
    kind: "circle",
    radius: number
}

type KindlessCircle = RemoveKindField<Circle>; // type KindlessCircle = { radius: number }