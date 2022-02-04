interface IdLabel {
    id: number
}

interface NameLabel {
    name: string
}

type NameOrId<Type extends number | string> = Type extends number ? IdLabel : NameLabel;

function createLabel<Type extends number | string>(idOrName: Type): NameOrId<Type> {
    throw "unimplemented";
}

let a = createLabel("TypeScript"); // let a: NameLabel
let b = createLabel(2.8); // let b: IdLabel

type MessageOf<T extends { message: unknown }> = T["message"];

interface Email {
    message: string
}

type EmailMessageContents = MessageOf<Email>; // type EmailMessageContents = string

type SecondMessageOf<T> = T extends { message: unknown } ? T["message"] : never;

interface Email {
    message: string;
}

interface Dog {
    bark(): void;
}

type SecondEmailMessageContents = SecondMessageOf<Email>; // type SecondEmailMessageContents = string

type DogMessageContents = SecondMessageOf<Dog>; // type DogMessageContents = never

type Flatten<T> = T extends any[] ? T[number]: T;

type Str = Flatten<string[]>; // type Str = string

type Num = Flatten<number>; // type Num = number