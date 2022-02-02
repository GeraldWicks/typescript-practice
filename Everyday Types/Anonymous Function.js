// NO type annotations here, but Typescript can spot the bug
var names = ["Tinkwiki", "Lala", "Poo"];
// Note that you don't need to say what type "name" is, TypeScript used the types of the forEach function, 
// along with the inferred type of the array, to determine the type "name" will have.
names.forEach(function (name) {
    console.log(name.toUpperCase());
});
