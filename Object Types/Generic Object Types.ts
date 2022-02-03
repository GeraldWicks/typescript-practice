interface Box {
    value: unknown
}

let myBox: Box = { value: [1, 2, 3] };

console.log((myBox.value as number[]).length);

interface BestBox<Type> {
    value: Type
}

let myBestBox: BestBox<string> = { value: "gerrard" };

console.log((myBestBox));

type otherBox<Type> = {
    value: Type
};

type OrNull<Type> = Type | null; 