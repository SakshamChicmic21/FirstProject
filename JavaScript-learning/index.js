"use-strict";
// let stand = function walk() {
//   console.log("You are standing still.");
// };

// let stand2 = function walk() {
//   console.log("you are standing still2.");
// };

// // walk();
// // stand();
// // stand2();

// let jump = stand;

// jump();

// // var x = 1
// // x = 2;
// // console.log(x);

// console.log( "fdsd" - 55);

// // all type of coercion general in js
// console.log( "5" + 5); // "55"
// console.log( "5" - 5); // 0
// console.log( "5" * 5); // 25
// console.log( "5" / 5); // 1
// console.log( "5" % 2); // 1

// console.log( true + 1); // 2
// console.log( false + 1); // 1

// console.log( null + 1); // 1
// console.log( undefined + 1); // NaN
// console.log( "5" + true);// "5true"
// console.log( "5" + false);// "5false"

// console.log( "5" + null);// "5null"
// console.log( "5" + undefined);// "5undefined"

// console.log( 5 + true);// 6
// console.log( 5 + false);// 5
// console.log( 5 + null);// 5
// console.log( 5 + undefined);// NaN

// console.log( "5" - true);// 4
// console.log( "5" - false);// 5

// console.log( "5" - null);// 5
// console.log( "5" - undefined);// NaN
// console.log( 5 - true);// 4
// console.log( 5 - false);// 5

// console.log( 5 - null);// 5
// console.log( 5 - undefined);// NaN

// console.log( NaN === NaN);// false
// console.log( undefined === undefined);// true

// console.log( Number("123") ); // 123
// console.log( Number("123.45") ); // 123.45

// console.log( Number("123abc") );// NaN
// console.log( Number("abc123") );// NaN

// console.log( parseInt("123") );// 123
// console.log( parseFloat("123.45") );// 123.45
// console.log( parseInt("123abc") );// 123
// console.log( parseFloat("123.45abc") );// 123.45

// console.log( +"123" );  // 123
// console.log( +"123.45" ); // 123.45
// console.log( -"123abc" ); // NaN
// console.log( +"abc123" ); // NaN

// console.log( Boolean(1) ); // true
// console.log( Boolean(0) ); // false
// console.log( Boolean(-1) ); // true
// console.log( Boolean("") ); // false
// console.log( Boolean("hello") ); // true
// console.log( Boolean(null) ); // false
// console.log( Boolean(undefined) ); // false
// console.log( Boolean(NaN) );  // false
// console.log( Boolean([]) ); // true
// console.log( Boolean({}) ); // true
// console.log( Boolean(function() {}) ); // true

// console.log( !!1 );// true
// console.log( !!-1 ); // true
// console.log( !!"hello" ); // true
// console.log( !![] ); // true
// console.log( !!{} ); // true
// console.log( !!function() {} ); // true
// console.log( !!0 ); // false
// console.log( !!"" ); // false
// console.log( !!null ); // false
// console.log( !!undefined ); // false
// console.log( !!NaN );  // false

// console.log( String(123) ); // "123"
// console.log( String(123.45) ); // "123.45"
// console.log( String(null) );//  "null"
// console.log( String(undefined) );// "undefined"
// console.log( String(true) );// "true"
// console.log( String(false) );// "false"
// console.log( String([1,2,3]) );// "1,2,3"
// console.log( String({a:1, b:2}) );// "[object Object]"
// console.log( String(function() {}) );// "function() {}"

// console.log( 123.toString() ); // "123"
// console.log( (123).toString() );// "123"
// console.log( (123.45).toString() );// "123.45"
// console.log( true.toString() );// "true"
// console.log( false.toString() );// "false"
// console.log( [1,2,3].toString() );// "1,2,3"
// console.log( ({a:1, b:2}).toString() );// "[object Object]"
// console.log( (function() {}).toString() );// "function() {}"
// console.log( (function() {}).toString().slice(0,20) + "..." );// "function() {..."
// console.log( (function namedFunc() {}).toString().slice(0,20) + "..." );//"function namedFunc() {..."
// console.log( null + "" ); // "null"
// console.log( undefined + "" ); // "undefined"

// console.log( {} + "" );// "[object Object]"
// console.log( [] + "" );// ""
// console.log( [1,2,3] + "" ); // "1,2,3"

// console.log( {} + 1 ); // "[object Object]1"
// console.log( [] + 1 ); // "1"
// console.log( [1,2,3] + 1 ); // "1,2,31"

// console.log( {} - 1 ); // NaN
// console.log( [] - 1 ); // -1
// console.log( [1,2,3] - 1 ); // NaN

// console.log( "5" + [] );
// console.log( "5" + {} );
// console.log( "5" + [1,2,3] );

// console.log( "5" - [] );
// console.log( "5" - {} );
// console.log( "5" - [1,2,3] );
// console.log( "5" * [] );
// console.log( "5" * {} );
// console.log( "5" * [1,2,3] );
// console.log( "5" / [] );
// console.log( "5" / {} );
// console.log( "5" / [1,2,3] );
// console.log( "5" % [] );
// console.log( "5" % {} );
// console.log( "5" % [1,2,3] );

// console.log( "" + [] );
// console.log( "" + {} );
// console.log( "" + [1,2,3] );

// console.log( "" - [] );
// console.log( "" - {} );
// console.log( "" - [1,2,3] );
// console.log( "" * [] );
// console.log( "" * {} );
// console.log( "" * [1,2,3] );
// console.log( "" / [] );
// console.log( "" / {} );
// console.log( "" / [1,2,3] );
// console.log( "" % [] );
// console.log( "" % {} );
// console.log( "" % [1,2,3] );

// console.log( null + [] );
// console.log( null + {} );
// console.log( null + [1,2,3] );
// console.log( null - [] );
// console.log( null - {} );
// console.log( null - [1,2,3] );
// console.log( null * [] );
// console.log( null * {} );
// console.log( null * [1,2,3] );
// console.log( null / [] );
// console.log( null / {} );
// console.log( null / [1,2,3] );
// console.log( null % [] );
// console.log( null % {} );
// console.log( null % [1,2,3] );

// console.log( undefined + [] );
// console.log( undefined + {} );
// console.log( undefined + [1,2,3] );

// console.log( undefined - [] );
// console.log( undefined - {} );
// console.log( undefined - [1,2,3] );
// console.log( undefined * [] );
// console.log( undefined * {} );
// console.log( undefined * [1,2,3] );
// console.log( undefined / [] );
// console.log( undefined / {} );
// console.log( undefined / [1,2,3] );
// console.log( undefined % [] );
// console.log( undefined % {} );
// console.log( undefined % [1,2,3] );
console.log(Boolean([]));
console.log(Boolean([1, 2, 3]));
console.log(Boolean({}));
console.log(Boolean(function () {}));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean([1, 2, 3]));
console.log(Boolean({ a: 1, b: 2 }));
console.log(Boolean(function () {}));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean([1, 2, 3]));
console.log(Boolean({ a: 1, b: 2 }));
console.log(Boolean(function () {}));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean([1, 2, 3]));
console.log(Boolean({ a: 1, b: 2 }));
console.log(Boolean(function () {}));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean([1, 2, 3]));
console.log(Boolean({ a: 1, b: 2 }));
console.log(Boolean(function () {}));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean([1, 2, 3]));
console.log(Boolean({ a: 1, b: 2 }));
console.log(Boolean(function () {}));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean([1, 2, 3]));
console.log(Boolean({ a: 1, b: 2 }));
console.log(Boolean(function () {}));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean([1, 2, 3]));
console.log(Boolean({ a: 1, b: 2 }));
console.log(Boolean(function () {}));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean([1, 2, 3]));
console.log(Boolean({ a: 1, b: 2 }));
console.log(Boolean(function () {}));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean([1, 2, 3]));
console.log(Boolean({ a: 1, b: 2 }));
console.log(Boolean(function () {}));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean([1, 2, 3]));
console.log(Boolean({ a: 1, b: 2 }));
console.log(Boolean(function () {}));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean([1, 2, 3]));
console.log(Boolean({ a: 1, b: 2 }));
console.log(Boolean(function () {}));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean([1, 2, 3]));
console.log(Boolean({ a: 1, b: 2 }));
console.log(Boolean(function () {}));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean([1, 2, 3]));
console.log(Boolean({ a: 1, b: 2 }));
console.log(Boolean(function () {}));
console.log(Boolean(null));
// } while (i < 5);

// let x = 0;
// let z = 0;
// labelCancelLoops: while (true) {
//   console.log("Outer loops:", x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log("Inner loops:", z);
//     z += 1;
//     if (z === 10 && x === 10) {
//       break labelCancelLoops;
//     } else if (z === 10) {
//       break;
//     }
//   }
// }

// let i = 0;
// let n = 0;
// while (i < 5) {
//   i++;
//   if (i === 3) {
//     continue;
//   }
//   n += i;
//   console.log(i);
// }
// Logs:
// 1 3 7 12

// const arr = [3, 5, 7];
// arr.foo = "hello";

// for (const i in arr) {
//   console.log(i);
// }
// // "0" "1" "2" "foo"

// for (const i of arr) {
//   console.log(i);
// }
// // Logs: 3 5 7
// const colors = ["red", "yellow", "blue"];
// colors[5] = "purple";
// colors.forEach((item, index) => {
//   console.log(`${index}: ${item}`);
// });
// // Output:
// // 0: red
// // 1: yellow
// // 2: blue
// // 5: purple

// colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']
// console.log(colors);

// const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
// const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
// console.log([0].concat(obj1, obj2));
// // [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]

// let arr = [1, 2, 3,4,5];
// console.log(arr.filter(()=> false));

// const months = ["March", "Jan", "Feb", "Dec"];
// months.sort();
// console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"];

// const array = [1, 30, 4, 21, 100000];
// array.sort();
// array.sort((a, b) => a - b);
// console.log(array);

// const items = [
//   { name: "Edward", value: 21 },
//   { name: "Sharpe", value: 37 },
//   { name: "And", value: 45 },
//   { name: "Ahe", value: 5 },
//   { name: "Magnetic", value: 13 },
//   { name: "Zeros", value: 37 },
//   { name:"The",value:5}
// ];

// // sort by value
// // items.sort((a, b) => a.value - b.value);

// // sort by name
// items.sort((a, b) => {
//   if (a.value==b.value){
//     const nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     const nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     const res = nameA < nameB ? -1:1;
//     return res ?? 0;
//   }else{
//     return a.value - b.value;
//   }
// //   // names must be equal
// });

// console.log(items);

// the array to be sorted
// const data = ["delta", "alpha", "charlie", "bravo"];

// // temporary array holds objects with position and sort-value
// const mapped = data.map((v, i) => ({ i, value: v.toLowerCase() }));

// // sorting the mapped array containing the reduced values
// mapped.sort((a, b) => {
//   if (a.value > b.value) {
//     return 1;
//   }
//   if (a.value < b.value) {
//     return -1;
//   }
//   return 0;
// });

// console.log(mapped);
// const result = mapped.map((v) => data[v.i]);
// console.log(result);
// let a=20;
// const obj={
//   a :10,
//   fun: function () {console.log(this.a)}
// }
// obj.fun();

// (function a(x){
//   return (function b(y){
//     console.log(x);
//   })(2);
// })(1);

// console.log("😄".split("")); // ['\ud83d', '\ude04']; splits into two lone surrogates

// "Backhand Index Pointing Right: Dark Skin Tone"
// console.log([..."👉🏿"]); // ['👉', '🏿']
// splits into the basic "Backhand Index Pointing Right" emoji and
// the "Dark skin tone" emoji

// "Family: Man, Boy"
// console.log([..."👨‍👦"]); // [ '👨', '‍', '👦' ]
// splits into the "Man" and "Boy" emoji, joined by a ZWJ

// The United Nations flag
// console.log([..."🇺🇳"]); // [ '🇺', '🇳' ]
// splits into two "region indicator" letters "U" and "N".
// All flag emojis are formed by joining two region indicator letters

// Shallow Copy:
// A shallow copy creates a new object or array, but it only copies the top-level properties or elements by value. If any of these properties or elements are themselves objects or arrays (i.e., nested data structures), only their references are copied, not the actual nested data. This means that both the original and the copied object will point to the same nested objects in memory.
// Characteristics of Shallow Copy:
// Shared References for Nested Data: Changes made to a nested object or array in the shallow copy will also affect the original object, and vice versa, because they both refer to the same underlying data.
// Faster and More Memory Efficient: Since it only copies references for nested data, shallow copying is generally faster and uses less memory than deep copying.
// Methods for Shallow Copy:
// Object.assign({}, originalObject)
// Spread syntax ({ ...originalObject } for objects, [ ...originalArray ] for arrays)
// Array.prototype.slice() for arrays
// Array.from() for arrays
// Example of Shallow Copy:
// JavaScript

// let originalObject = { a: 1, b: { c: 2 } };
// let shallowCopy = { ...originalObject };

// shallowCopy.a = 5; // Modifies top-level property in shallowCopy only
// shallowCopy.b.c = 3; // Modifies nested object, affects both original and shallowCopy

// console.log(originalObject.a); // Output: 1
// console.log(shallowObject.a); // Output: 5
// console.log(originalObject.b.c); // Output: 3 (original affected)
// console.log(shallowObject.b.c); // Output: 3
// Deep Copy:
// A deep copy, in contrast, creates a completely independent duplicate of the original object or array, including all nested objects and arrays. It recursively copies all levels of the data structure, ensuring that no references are shared between the original and the copy.
// Characteristics of Deep Copy:
// Complete Independence: Modifications to the deep copy, including changes to nested objects or arrays, will not affect the original object, and vice versa.
// Slower and More Memory Intensive: Due to the recursive copying of all levels, deep copying can be slower and consume more memory, especially for complex or deeply nested data structures.
// Methods for Deep Copy:
// JSON.parse(JSON.stringify(originalObject)): This is a common method, but it has limitations (e.g., cannot copy functions, undefined, Date objects lose their type).
// structuredClone(): A modern JavaScript API designed for deep cloning, addressing many of the limitations of the JSON method.
// Libraries like Lodash (_.cloneDeep()) provide robust deep cloning functionalities.
// Example of Deep Copy:
// JavaScript

// let originalObject = { a: 1, b: { c: 2 } };
// let deepCopy = JSON.parse(JSON.stringify(originalObject)); // Using JSON method for simplicity

// deepCopy.a = 5; // Modifies top-level property in deepCopy only
// deepCopy.b.c = 3; // Modifies nested object in deepCopy only

// console.log(originalObject.a); // Output: 1
// console.log(deepCopy.a); // Output: 5
// console.log(originalObject.b.c); // Output: 2 (original unaffected)
// console.log(deepCopy.b.c); // Output: 3
// When to Choose Which:
// Shallow Copy: Suitable for flat objects or arrays without nested objects, or when you intend to share references to nested data.
// Deep Copy: Necessary when you need a completely independent copy of an object or array, especially with nested structures, to prevent unintended side effects on the original data.

// for(let i=0;i<10;i++){
//   setTimeout(function(){
//     console.log(i);
//   },1000);
// }

// debouncing and throttling code
// Debouncing
// function debounce(func, delay) {
//   let timeoutId;
//   return function(...args) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// }

// Example usage of debounce
// const handleResize = debounce(() => {
//   console.log('Window resized');
// }, 500);

// window.addEventListener('resize', handleResize);

// Throttling
// function throttle(func, limit) {
//   let lastFunc;
//   let lastRan;
//   return function(...args) {
//     if (!lastRan) {
//       func.apply(this, args);
//       lastRan = Date.now();
//     } else {
//       clearTimeout(lastFunc);
//       lastFunc = setTimeout(() => {
//         if ((Date.now() - lastRan) >= limit) {
//           func.apply(this, args);
//           lastRan = Date.now();
//         }
//       }, limit - (Date.now() - lastRan));
//     }
//   };
// }

// Example usage of throttle
// const handleScroll = throttle(() => {
//   console.log('Window scrolled');
// }, 1000);

// function JSClock() {
//   const time = new Date();
//   const hour = time.getHours();
//   const minute = time.getMinutes();
//   const second = time.getSeconds();
//   let temp = String(hour % 12);
//   if (temp === "0") {
//     temp = "12";
//   }
//   temp += (minute < 10 ? ":0" : ":") + minute;
//   temp += (second < 10 ? ":0" : ":") + second;
//   temp += hour >= 12 ? " P.M" : " A.M";
//   // return temp;
//   console.log(temp);
// }
// setInterval(JSClock,1000);

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render = () => {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   };

//   stop = () => {
//     clearInterval(this.timer);
//   };

//   start = () => {
//     this.render();
//     this.timer = setInterval(this.render, 1000);
//   };
// }

// let clock = new Clock({ template: 'h:m:s' });
// clock.start();

// function timer(){
//   const time = new Date();
//   // const currtime = time.getHours();
//   // const minutes = time.getMinutes();

//   console.log(time);
// }

// setInterval(timer,1000);

// let str = "Helllllo";

// let allocc = str.lastIndexOf("l") - str.indexOf("l")+1;
// console.log(allocc);

// let arr = [1,2,3,2,4,2,5];
// let narr = [];
// let idx = arr.indexOf(2);
// while (idx !== -1) {
//   narr.push(idx);
//   idx = arr.indexOf(2, idx + 1);
// }

// console.log(narr);

// let arr2 = [1,2,3,4,5];

// let narr2 = [];
// let sum=0;
// arr2.forEach((item,index)=>{
//   sum+=item;
//   narr2.push(sum);
// })

// // console.log(narr2);

// // with reduce method
// let sum2=0;
// let narr3=[];
// arr2.reduce((acc,curr)=>{
//   sum2=acc+curr
//   //console.log(acc,"+",curr," => ",sum2);
//   narr3.push(sum2);
//   return sum2;
// },0);
// console.log(narr3);

// let arrs=[
//   ['name', 'John'],
//   ['age', 30],
//   ['email', 'john@example.com'],
//   ['city', 'New York'],
//   ['isActive', true],
//   ['skills', ['JS', 'React', 'Node']],
//   ['score', 92]
// ]
// let obj ={};
// arrs.forEach((arr)=>{
//   obj[arr[0]] = arr[1];
// })

// console.log(obj);

// let arr=[1, 5, "test", 9, "JS", "React", 22, 56, "Hello"]; //["olleH", 56, 22, "tcaeR", "SJ", 9, "tset", 5, 1]
// const res = arr.reverse().map((item,idx)=>{
//   if(typeof item === "string"){
//     let revstr = item.split("").reverse().join("");
//     return revstr;
//   }else{
//     return item;
//   }
// })

// console.log(res);

// In JavaScript, call(), apply(), and bind() are methods available on all functions that allow explicit control over the this keyword's value within a function's execution context.
// 1. call():
// The call() method immediately invokes a function with a specified this value and arguments provided individually.
// Syntax: function.call(thisArg, arg1, arg2, ...)
// Example:
// JavaScript

//    const person = { name: 'Alice' };
//     function greet(message) {
//       console.log(`${message}, ${this.name}!`);
//     }
//     greet.call(person, 'Hello'); // Output: Hello, Alice!
// 2. apply():
// The apply() method immediately invokes a function with a specified this value and arguments provided as an array or an array-like object.
// Syntax: function.apply(thisArg, [argsArray])
// Example:
// JavaScript

//     const person = { name: 'Bob' };
//     function showDetails(age, city) {
//       console.log(`${this.name} is ${age} years old and lives in ${city}.`);
//     }
//     const details = [30, 'New York'];
//     showDetails.apply(person, details); // Output: Bob is 30 years old and lives in New York.
// 3. bind():
// The bind() method returns a new function with a specified this value and optional initial arguments. The original function is not immediately invoked. The new function can be called later.
// Syntax: function.bind(thisArg, arg1, arg2, ...)
// Example:
// JavaScript

// const user1 = { name: "Charlie" };
// const user2 = { name: "Alice" };
// function introduce() {
//   console.log(`My name is ${this.name}.`);
// }
// const introduceUser = introduce.bind(user1);
// introduceUser.call(user2); // Output: My name is Charlie.

// function greet() {
//   return `Hello, ${this.name}!`;
// }
// const person1 = { name: "Alice" };
// const person2 = { name: "Bob" };
// const boundGreet = greet.bind(person1);
// console.log(boundGreet.call(person2));

// Key Differences:
// call() and apply() execute the function immediately, while bind() returns a new function for later execution.
// call() takes arguments individually, while apply() takes arguments as an array.
// bind() can also pre-set some arguments for the returned function.

// const theOneFunc = delay => {
//   console.log('Hello after ' + delay + ' seconds');
// };
// setTimeout(theOneFunc, 4 * 1000, 4);
// setTimeout(theOneFunc, 8 * 1000, 8);

// const user ={
//   name: "saksham",
//   greet(){
//     console.log("hello", this.name);
//   }
// }

// const greetFn = user.greet;
// // greetFn();
// greetFn.call(user);

// user.greet();

// class MyClass {
//   constructor() {
//     this.myField = "foo";
//     return {};
//   }
// }

// console.log(new MyClass().myField); // undefined

// console.log("start");
// setTimeout(()=> console.log("timeout"),0);
// setImmediate(()=> console.log("immediate"));

// Promise.resolve().then(() => console.log("promise"));
// console.log("End");

// console.log("start");
// setTimeout(()=> console.log("timeout")); // macrostack
// setTimeout(()=> console.log("timeout 2")); // macrostack

// Promise.resolve().then(()=> console.log("promise"));// microstack
// console.log("End")

// function mysetInterval(fun,delay){
//   let id =null;

//   function tick(){
//     fun();
//     id = setTimeout(tick,delay);
//   }
//   id = setTimeout(tick,delay);
//   return ()=> clearTimeout(id);
// }

// const clear  = mysetInterval(()=> console.log("Hi"),1000);

// clear();

// for(var i=0;i<3;i++){
//   (function (x){
//     setTimeout(()=> console.log(x),5000);
//   })(i)
// }

//* Promise

// function customPromise(dataId){
//   return new Promise((res,rej)=>{
//     setTimeout(()=>{
//       console.log("This is inside Promise",dataId);
//       res("Success")
//     },4000);
//   })
// }

// function api(dataId){
//   return customPromise(dataId);
// }
// function getDataById(dataId){
//   return customPromise(dataId);
// }

// console.log("Fetching data by Id1...");

//* Promise chaining
// getDataById(1).then((res)=>{
//   console.log("Fetch data by Id1...",res,"\n");
//   return getDataById(2);
// }).then((res)=>{
//   console.log("Fetch data by Id2...",res,"\n");
//   return getDataById(3);
// }).then((res)=>{
//   console.log("Fetchdata by Id3...",res,"\n");
//   return getDataById(4);
// }).then((res)=>{
//   console.log("Fetched last data",res);
// })

// async function getAllDataById() {
//   for(let i=0;i<10;i++){
//     console.log("Fetching data id",i,"...");
//     const res = await api(i);
//     console.log("Data fetched id",i,"response => ",res,"\n");
//   }
// }
// getAllDataById();

// function createIterator(arr) {
//   let idx=0;
//   return {
//     next() {
//       if (idx < arr.length) {
//         return { value: arr[idx++], done: false };
//       }
//       return { value: undefined, done: true };
//     },
//   };
// }

// let arr = [1, 2, 3, 4, 5, 6];
// let g = createIterator(arr);

// let res = g.next();
// while (!res.done) {
//   console.log(res.value);
//   res = g.next();
// }

// function* generator(){
//   yield 10;
//   yield 20;
//   yield 30;
// }

// for(let x of generator()){
//   console.log(x);
// }

// function* cal(){
//   const num = yield 10;
//   yield num * 2;
// }

// const g = cal();

// console.log(g.next());
// console.log(g.next(5));

// function* infy(){
//   let i=0;
//   while(true){
//     yield i++;
//   }
// }

// const g = infy();
// console.log(g.next());
// console.log(g.next());

// function* range(start,end){
//   for(let i=start;i<=end;i++){
//     yield i;
//   }
// }
// const g = range(1,5);
// for(let x of g){
//   console.log(x);
// }

// promise quesions output
// q1 -> A C B
// q2 -> 1 4 3 2
// q3 -> Z X Y
// q4 -> ouside inside promise then 1: 10
// q5 -> 1 2 caught after catch
// q6 -> catch
// q7 -> 1 2 caught 3
// q8 -> start end promise 1 promise 2 timeout
// q9 -> global start f start global end f middle
// q10 -> after call then : 42
// q11 -> catch fast
// q12 -> all: A C all2 error
// q13 -> fullfilled rejected
// q14 -> fast
// q15 -> 1 6 3 4 5 2

// const p1 = Promise.resolve("A");
// const p2 = Promise.reject("B");
// const p3 = Promise.resolve("C");
// Promise.any([p1,p3]).then(values => console.log("all:",values)).catch((err=> console.log("all2 error")));

//* debouncing in js

// function debounce(fun, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => fun.apply(this, args), delay);
//   };
// }

// const handleInput = debounce((arr)=>{
//   console.log("Api call");
//   console.log(arr);
// },500);
// handleInput([1,2,3]); // user for => auto save, search input, preventing api calls

// setTimeout(() => {
//   debounce(() => {
//     console.log("Api call1");
//   }, 500)();
// }, 300);
// setTimeout(() => {
//   debounce(() => {
//     console.log("Api call2");
//   }, 500)();
// }, 800);
// setTimeout(() => {
//   debounce(() => {
//     console.log("Api call3");
//   }, 500)();
// }, 100);

// function throttle(fn,delay){
//   let last =0;
//   return function (...args){
//     const now = Date.now();
//     // console.log(now," ",last," ",now-last);
//     if (now - last >= delay){
//       last = now;
//       fn.apply(this,args);
//     }
//   };
// }

// const onScroll= throttle(()=>{console.log("throttled scroll")},500);
// onScroll();

// debouncing ensures a function to run only after the user stops triggering the event for a certain time.

// throttling ensures a function to run at most once in given interval of time.

// console.log("Start");
// function asynFun(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             console.log("inside Promise");
//         },2000);
//         res("successfully");
//     })
// }
// asynFun();

// setTimeout(()=>{
//     console.log("inside settimeout");
// },2000);

// console.log("end");

// console.log();

// console.log(Boolean({}));
