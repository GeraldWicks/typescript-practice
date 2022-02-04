type Greeting = "Hello, world";
type ShoutyGreeting = Uppercase<Greeting>; // type ShoutGreeting = "HELLO, WORLD";

type NewGreeting = "Hello, world";
type QuietGreeting = Lowercase<NewGreeting>; // type QuietGreeting = "hello, world";

type CapitalizedGreeting = Capitalize<NewGreeting>; // type CapitalizedGreeting = "Hello, world"

type UncapitalizedGreeting = Uncapitalize<CapitalizedGreeting>; // type UncapitalizedGreeting = "hello, world"