/* Non-null Assertion Operator (Postfix !)

Typescript also has a special syntax for removing null and undefined from a type without doing
any explicit checking. Writing ! after any expression is effectively a type assertion that the value isn't
null or undefined.

*/
function doSomething(x) {
    console.log(x.toFixed());
}
doSomething(2);
