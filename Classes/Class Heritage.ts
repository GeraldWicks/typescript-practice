interface Pingable {
    ping(): void;
}

class Sonar implements Pingable {
    ping() {
        console.log("ping ping");
    }
}

// class Ball implements Pingable {  //Class 'Ball' implements interface 'Pingable'. Property 'ping' is missing type 'Ball' but required on type 'Pingable'
//     pong() { console.log("pong") }
// }

// It's important to understand that an implements clause is only a check that the class can be treated
// as the interface type. It doesn't change the type of the class or its methods at all. A common source
// of error is to assume that an implements clause will change the class type - it doesn't