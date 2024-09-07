interface Animal {
    name: string;
    age: number;
    habitat: string;
    legs?: number;
    canFly?: boolean;
    swim?(): void;
    walk?(): void;
    fly?() : void;
}

class Cat implements Animal{
    name: string;
    age: number;
    habitat: string;
    legs: number =4;

    constructor(name: string, age: number, habitat: string){
        this.name = name;
        this.age = age;
        this.habitat = habitat;
    }

    walk(){
        console.log(`${this.name} is walking on ${this.legs} legs.`)
    }

}

class Bird implements Animal{
    name: string;
    age: number;
    habitat: string;
    legs: number = 4;
    canFly: boolean = true;

    constructor(name: string, age: number, habitat: string){
        this.name = name;
        this.age = age;
        this.habitat = habitat;
    }

    walk(){
        console.log(`${this.name} is walking on ${this.legs} legs.`)
    }

    fly(){
        if(this.canFly){
            console.log(`${this.name} is flying.`)
        }
    }
}

class Fish implements Animal{
    name: string;
    age: number;
    habitat: string;

    constructor(name: string, age: number, habitat: string){
        this.name = name;
        this.age = age;
        this.habitat = habitat;
    }

    swim(){
        console.log(`${this.name} is swiming.`)
    }
}

const myCat = new Cat("Chupapi", 1, "house");
myCat.walk();

const myBird = new Bird("Munyanyo", 1, "forest");
myBird.walk();
myBird.fly();

const myFish = new Fish("Bayayayo", 1,"fish tank");
myFish.swim();

