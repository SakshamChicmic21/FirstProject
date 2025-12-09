// function buildArray() {
//   const arr = [];
//   for (var i = 0; i < 3; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
// const fns = buildArray();
// console.log(fns[0]);
// console.log(fns[1]);
// console.log(fns[2]);

// console.log(Date.now());

// setInterval(() => console.log(new Date()), 10000);

// You are given an array. Write a function that returns an object where each key comes from an element at an odd index, and its corresponding value comes from the element at the next even index. If the array has an odd length, the final key should have a value of null

// const arr = [1,2,3,4,5,6,7,8];
// const obj = {};

// arr.forEach((ele,idx)=>{
//     if (idx % 2!=0){ // odd idx
//         if (!arr[idx+1]){
//             obj[arr[idx]] = null;
//         }else{
//             obj[arr[idx]]=arr[idx+1];
//         }
//     }
// })

// console.log(obj);

// function createObjectFromOddEvenPairs(arr) {
//   const result = {};
//   for (let i = 1; i < arr.length; i += 2) { // Start at index 1 (first odd index)
//     const key = arr[i];
//     const value = (i + 1 < arr.length) ? arr[i + 1] : null; // Check for next even index
//     result[key] = value;
//   }
//   return result;
// }

// const obj1 = createObjectFromOddEvenPairs(arr);

// console.log(obj1);

// ['1', '2', '5', 1, 'olleh', 'gnirts' , {'{'3, 2, 1': a}': cba }, ['6', ['8', '7', '5', '3', '7'], '5', '4', '3']];
// let obj={
//     "abc":"saksham",
//     "[1,2,3]":"done"
// }
// console.log(obj);
// let arr = [
//   1,
//   2,
//   5,
//   true,
//   "hello",
//   "string",
//   { abc: { a: [1, 2, 3] } },
//   [3, 4, 5, [7, 3, 5, 7, 8], 6],
// ];
// function reverseObject(temp) {
//   let rev = temp.reverse();
//   let n = rev.length;
//   for (let i = 0; i < n; i++) {
//     let ch = temp[i];
//     if (ch== "{" || ch == "}" || ch == "[" || ch == "]" || ch == "") {
//         if (ch=='{'){
//             temp[i]='}';
//         }else if (ch=='}'){
//             temp[i]='{';
//         }else if (ch == '['){
//             temp[i]=']';
//         }else {
//             temp[i]='[';
//         }
//     }
//   }
//   return temp.join("");
// }
// let res= arr.map((ele)=>{
//     if (typeof ele != "object" || ele === null){
//         if (typeof ele === "string"){
//             return ele.split("").reverse().join("");
//         }
//         else if (typeof ele === "boolean"){
//             return Number(ele);
//         }else{
//             return ele.toString();
//         }
//     }else {
//         let jsonstr = JSON.stringify(ele).split("");
//         return reverseObject(jsonstr);
//     }
// })

// console.log(res);

// async function sum(){
//     return new Promise((res,rej)=>{
//         res("5");
//     })
// }
// async function fun(){
//     const res = await sum();
//     return res;
// }

// console.log(fun());

// async function test(){
//     try {
//         throw new Error("E");
//     } catch (error) {
//         console.log("E->",error);
//     }finally{
//         return "err2";
//     }
// }
// test().then(console.log);

// async function async1() {
//     console.log("async1 start")
//     await async2();
//     console.log("async1 end");
// }

// async function async2(){
//     console.log("async 2");
// }
// setTimeout(function (){
//     console.log("setTimeout");
// },0);
// console.log("script start");

// async1();

// Promise.resolve().then(()=>{
//     console.log("promise1");
// }).then(()=>{
//     console.log("promise2");
// })

// console.log("script end");

// Explanation of closure
// function foo()
// {
//     let b = 1;
//     function inner() { return b; }
//     return inner;
// }
// let get_func_inner = foo();

// console.log(get_func_inner());
// console.log(get_func_inner());
// console.log(get_func_inner());

// Promise.resolve('A').then((val)=>{
//     throw new Error("B");
// }).catch((err)=>{
//     console.log("caught ",err.message);
//     return "fdaf"
// }).then(()=>{
//     console.log('C');
// }).finally(()=>{
//     console.log('d')
// })

// Promise.resolve()
//   .then(() => console.log("A"))
//   .then(() => console.log("B"))
//   .then(() => console.log("C"));

// Promise.resolve()
//   .then(() => console.log("X"))
//   .then(() => console.log("Y"))
//   .then(() => console.log("Z"));

// async function async1(){
//     console.log("async1 start");
//     await async2();
//     console.log("async1 end");
// }

// async function async2(){
//     console.log("async2");
// }
// console.log("script start");

// setTimeout(function (){
//     console.log("setTimeout");
// },0);

// async1();

// new Promise(function (resolve){
//     console.log("promise 1");
//     resolve();
// }).then(function (){
//     console.log("promise 2");
// })

// console.log("script end");

// console.log(a);
// var a;

// function greet(){
//     return `hello, ${this.name}`;
// }

// const person1 = {name:"Alice"};
// const person2 = {name:"Bob"};
// const bg = greet.bind(person1);
// console.log(bg.apply(person2));
// let strname = "saksham";
// let str = [...strname];

let apiData = [
    {
        name:"sam",
    },
    {
        class:"8th"
    },
    {
        phoneno:3224
    },{},{class:"9th"}
]

let obj = [
    {
        name:"sam",
        class:"9th",
        phoneno:243
    },
    {
        name:"sam2",
        class:"6th",
        phoneno:2
    },
    {
        name:"sam3",
        class:"45th",
        phoneno:24
    },
]

let res = apiData.map((obj1,idx)=>{
    obj[idx] = {...obj[idx],...obj1};
    return obj[idx];
})
console.log(JSON.parse(JSON.stringify(res)));

// let myCar = {
//     // Parameters (Properties)
//     make: "Ford",
//     model: "Mustang",
//     year: 1969,
    
//     // A method (a function as a property)
//     displayCar: function() {
//         const result = `A beautiful ${this.year} ${this.make} ${this.model}`;
//         console.log(result);
//     },

//     // A modern, concise method syntax (ES6+)
//     startEngine() {
//         console.log("Engine started!");
//     }
// };

// let obj = JSON.parse(JSON.stringify(myCar));
// console.log(obj);

// let arr = [1,2,5,3,4];

// console.log(arr.find((e)=>e>2));

// let str1= "tle";
// let str2 = "elt";

// let arr1= str1.split("").sort().join("");
// let arr2= str2.split("").sort().join("");

// console.log(arr1===arr2);
