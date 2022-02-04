// Mapped types work well with other features in this type manipulation section, for example here is a mapped type using conditional type which returns 
// either a true or false depending on wheter an object has the property pii set to the literal true:

type ExtractPII<Type> = {
    [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};

type DBFields = {
    id: { format: "incrementing" },
    name: { type: string, pi: true };
}

type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>; 
// type ObjectsNeedingGDPRDeletion = {
// id: false,
// name: true
// }