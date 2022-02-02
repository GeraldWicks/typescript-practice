
/*

TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.

*/
let obj: any = { x: 0 };

obj.foo();
obj();
obj.bar = 100;
obj = "hello";