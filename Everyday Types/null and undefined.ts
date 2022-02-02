/*
strictNullChecks off

with strctNullChecks off, values that might be null or undefined can still be accessed normally,
and the values null and undefined can be assigned to a property of any type.


strictNullChecks on

with strictNullChecks on, when a value is null or undefined, you will need to test for those values before
using methods or properties on that value. Just like checking for undefined before using an optional property, we can use 
narrowing to check for values that might be null

*/