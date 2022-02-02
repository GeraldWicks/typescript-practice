/*

Let’s take a look at what happens when we compile the above function greet with tsc to output JavaScript:

"use strict";
function greet(person, date) {
    console.log("Hello " + person + ", today is " + date.toDateString() + "!");
}
greet("Maddison", new Date());
 
Try
Notice two things here:

1.Our person and date parameters no longer have type annotations.
2.Our “template string” - that string that used backticks (the ` character) - was converted to plain strings with concatenations (+).

*/