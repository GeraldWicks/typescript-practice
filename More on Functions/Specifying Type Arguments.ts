function combine<Type>(arr1: Type[], arr2: Type[]): void {
    console.log(arr1);
    console.log(arr2);
}

// If you intended to do this, however you could manually specify Type:
combine<string | number>([1, 2, 3], ["hello"]);