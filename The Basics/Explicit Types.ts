// tsc "Explicit Types.ts"
// node "Explicit Types.js"

function greetSecond(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}`)
}

greetSecond("Joao", new Date());