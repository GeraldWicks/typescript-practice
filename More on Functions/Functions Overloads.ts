function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
    return x.length;
}

console.log(len("saodjasodjaosd"));
console.log(len([1, 2, 3, 4]));

function betterLen<Type>(x: Type[] | string) {
    return x.length;
}

console.log(betterLen("saodjasodjaosd"));
console.log(betterLen([1, 2, 3, 4]));