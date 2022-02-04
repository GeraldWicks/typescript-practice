class Animal {
    move(animal: string) {
        console.log(`Move ${animal} !`);
    }
}

class Dog extends Animal {
    dontMove() {
        console.log(`Don't move !`);
    }

    moveCallFromDog(animal: string) {
        super.move(animal);
    }
}

const dog = new Dog();
dog.move("dog");
dog.moveCallFromDog("cat");
dog.dontMove();