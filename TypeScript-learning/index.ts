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
// console.log("ts");
// let message: string = "Hello, TypeScript!";
// console.log(message);

// interface Car{
//     name:string,
//     model:number,
//     brand:string,
//     number: string
// }
// interface Person {
//     name: string;
//     age: number;
//     cars : Car[];
//     greet(): void;
//     addCars(car:Car):void;
// }

// class User {
//     name: string;
//     age: number;
//     cars: Car[]=[];
//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
//     greet(): void {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }

//     addCars(car:Car):void{
//         this.cars.push(car);
//     }

// }

// const user : Person = new User("Alice", 30);
// user.greet();

// let obj = { name: "Corolla", model: 2022, brand: "Toyota", number: "ABC-123" };
// let obj2 = { name: "Corolla2", model: 2023, brand: "Toyota1", number: "ABC-123" };
// let obj3 = { name: "Corolla3", model: 2024, brand: "Toyota2", number: "ABC-123" };
// let obj4 = { name: "Corolla4", model: 2025, brand: "Toyota3", number: "ABC-123" };

// user.addCars(obj);
// user.addCars(obj2);
// user.addCars(obj3);
// user.addCars(obj4);


// console.log(user.cars);


interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}
 
// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;
 
// object is a string, because we declared it above as the variable part of Backpack.

// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add("saksham");
const object = backpack.get();
console.log(object);
