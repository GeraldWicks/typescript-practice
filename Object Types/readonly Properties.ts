interface SomeType {
    readonly prop: string;
}

let obj: SomeType = { prop: "hey" };
console.log(obj);

// obj.prop = "hey"; Cannot assign to 'prop' because it is a read-only property.