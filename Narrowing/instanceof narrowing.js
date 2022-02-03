function logValue(x) {
    if (x instanceof Date)
        console.log("The date is ".concat(x));
    else
        console.log("string = ".concat(x));
}
logValue(new Date());
logValue("hello");
