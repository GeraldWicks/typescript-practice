function logValue(x: Date | string) {
    if (x instanceof Date) console.log(`The date is ${x}`);
    else console.log(`string = ${x}`);
}

logValue(new Date());
logValue("hello");