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

// console.log( Number("123") );// 123
// console.log( Number("123.45") );// 123.45

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

// console.log( 123..toString() ); // "123"
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

// console.log( {} + "" );
// console.log( [] + "" );
// console.log( [1,2,3] + "" );

// console.log( {} + 1 );
// console.log( [] + 1 );
// console.log( [1,2,3] + 1 );

// console.log( {} - 1 );
// console.log( [] - 1 );
// console.log( [1,2,3] - 1 );

// console.log( "5" + [] );
// console.log( "5" + {} );
// console.log( "5" + [1,2,3] );

// console.log( "5" - [] );//
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





// let i = 0;
// do {
//   i += 1;
//   console.log(i);
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
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array = [1, 30, 4, 21, 100000];
// array.sort();
// console.log(array);

// const items = [
//   { name: "Edward", value: 21 },
//   { name: "Sharpe", value: 37 },
//   { name: "And", value: 45 },
//   { name: "The", value: -12 },
//   { name: "Magnetic", value: 13 },
//   { name: "Zeros", value: 37 },
//   { name:"The",value:5}
// ];

// // sort by value
// items.sort((a, b) => a.value - b.value);

// // sort by name
// items.sort((a, b) => {
//   const nameA = a.name.toUpperCase(); // ignore upper and lowercase
//   const nameB = b.name.toUpperCase(); // ignore upper and lowercase
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }

//   // names must be equal
//   return 0;
// });

// console.log(items);

// the array to be sorted
const data = ["delta", "alpha", "charlie", "bravo"];

// temporary array holds objects with position and sort-value
const mapped = data.map((v, i) => ({ i, value: someSlowOperation(v) }));

// sorting the mapped array containing the reduced values
mapped.sort((a, b) => {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

const result = mapped.map((v) => data[v.i]);
console.log(result);