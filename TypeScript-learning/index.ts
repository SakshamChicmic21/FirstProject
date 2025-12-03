console.log("ts");
let message: string = "Hello, TypeScript!";
console.log(message);

interface Person {
    name: string;
    age: number;
    greet(): void;
}

class User{
    name: string;
    age: number;
    
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const user : Person = new User("Alice", 30);
user.greet();
