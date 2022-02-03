var stringArray = ["hello", "world"];
var secondStringArray = ["hello", "world"];
var thirdStringArray = ["a", "b", "c"];
// thirdStringArray[0] = "2"; Index signature in type 'readonly string[]' only permits reading
var fourthStringArray = new Array("d", "e", "f");
console.log(fourthStringArray);
