// The default visibility of class member is public. A public member can be accessed anywhere.

class Greeter {
    public greet() {
        console.log("Hi !");
    }

    protected logName() {
        console.log("Gerald");
    }

    private x = 0; // private is like protected, but doesn't allow access to the member even from subclasses
}

class SpecialGreeter extends Greeter {
    myGreet() {
        super.greet();
    }

    myLogName() {
        super.logName(); // here we can access
// The main thing to note here is that in the derived class, we need to be careful to repeat the protected modifier if this exposure isn’t intentional.
    }

   getX() {
       //console.log(this.x); // Error: property 'x' is private and only accessible within class 'Greeter'
   }
}

const greeter = new Greeter();
greeter.greet();
// greeter.logName(); // Error: property 'logName' is protected and only accessible with class 'Greeter' and its subclasses