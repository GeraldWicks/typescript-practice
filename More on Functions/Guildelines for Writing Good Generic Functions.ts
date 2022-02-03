function getFirstElement<Type>(arr: Type[]) {
    return arr[0];
}
const firstElement = getFirstElement([0, 1, 2, 3, 4]);
console.log(firstElement);