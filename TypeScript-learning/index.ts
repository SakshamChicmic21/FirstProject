// console.log("ts");
// let message = "Hello, TypeScript!";
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

// interface Backpack<Type> {
//   add: (obj: Type) => void;
//   get: () => Type;
// }
// class stringbackpack implements Backpack<string> {
//   private item:string= "";

//   add(obj:string):void{
//     this.item = obj;
//   }
//   get():string {
//     return this.item;
//   }
// };

// const backpack : Backpack<string> = new stringbackpack();
// backpack.add("saksham");
// const object = backpack.get();
// console.log(object);

// union type
let value: string | number;
value = "hello";
value = 10;

console.log(value);

// intersection type
interface A {
  x: number;
}
interface B {
  y: number;
}

type C = A & B;
// const obj: C = { x: 1, y: 2 };

// type Aliases
type id = string | number;
let userId: id = 133;

// literal types
let direction : "up" | "down" | "left" | "right";
direction = "up";

// nullable types
// let name: string | null = null;

// function types
type Add = (a:number ,b: number)=> number;
const sum: Add = (x,y) => x+y;

// interface User {
//     readonly id : number;
//     name: string;    
// }
// const u: User = { id:1,name:"Saksham"};
// // u.id = 2;
// u.name = "sdf";


interface stringArray{
    [index:number] : string
}
// let arr : stringArray=["a","b","c"];
// console.log(arr);

type Role = "admin" | "user";
const permission: Record<Role,boolean>={
    admin: true,
    user:false
}

console.log(permission.user);
interface User{
    name: string,
    age:number
}

const updateUser: Partial<User> = {age:25};
console.log(updateUser.age);
type fullUser = Required<User>;
type BasicUser = Pick<User,"name">
type withoutAge = Omit<User,"age">
console.log(updateUser.age);
type LockedUser = Readonly<User>;

type Optional<T> ={
    [K in keyof T]?: T[K];
}

type newUser = Optional<User>;
// let message: string = "Hello, TypeScript!";
// console.log(message);

// interface Person {
//     name: string;
//     age: number;
//     greet(): void;
// }

// class User{
//     name: string;
//     age: number;
    
//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }

//     greet(): void {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// const user : Person = new User("Alice", 30);
// user.greet();

interface Backpack<T> {
    item: T;
  add(obj: T): void;
  get(): T;
}

const backpack: Backpack<string> = {
  item: "",
  add(str) {
    this.item = str;
  },
  get() {
    return this.item;
  }
};

backpack.add("saksham");
console.log(backpack.get());
