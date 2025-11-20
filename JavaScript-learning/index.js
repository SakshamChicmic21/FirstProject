
let stand = function walk() {
  console.log("You are standing still.");
};

let stand2 = function walk() {
  console.log("you are standing still2.");
};

// walk();
// stand();
// stand2();

let jump = stand;

jump();

var x = 1
x = 2;
console.log(x);

console.log( "fdsd" - 55);

// all type of coercion general in js
console.log( "5" + 5); // "55"
console.log( "5" - 5); // 0
console.log( "5" * 5); // 25
console.log( "5" / 5); // 1
console.log( "5" % 2); // 1

console.log( true + 1); // 2
console.log( false + 1); // 1

console.log( null + 1); // 1
console.log( undefined + 1); // NaN
console.log( "5" + true);// "5true"
console.log( "5" + false);// "5false"

console.log( "5" + null);// "5null"
console.log( "5" + undefined);// "5undefined"

console.log( 5 + true);// 6
console.log( 5 + false);// 5
console.log( 5 + null);// 5
console.log( 5 + undefined);// NaN

console.log( "5" - true);// 4
console.log( "5" - false);// 5

console.log( "5" - null);// 5
console.log( "5" - undefined);// NaN
console.log( 5 - true);// 4
console.log( 5 - false);// 5

console.log( 5 - null);// 5
console.log( 5 - undefined);// NaN  

console.log( NaN === NaN);// false

console.log( Number("123") );// 123
console.log( Number("123.45") );// 123.45

console.log( Number("123abc") );// NaN
console.log( Number("abc123") );// NaN

console.log( parseInt("123") );// 123
console.log( parseFloat("123.45") );// 123.45
console.log( parseInt("123abc") );// 123
console.log( parseFloat("123.45abc") );// 123.45

console.log( +"123" );  // 123
console.log( +"123.45" ); // 123.45
console.log( -"123abc" ); // NaN
console.log( +"abc123" ); // NaN

console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false
console.log( Boolean(-1) ); // true
console.log( Boolean("") ); // false
console.log( Boolean("hello") ); // true
console.log( Boolean(null) ); // false
console.log( Boolean(undefined) ); // false
console.log( Boolean(NaN) );  // false
console.log( Boolean([]) ); // true
console.log( Boolean({}) ); // true
console.log( Boolean(function() {}) ); // true

console.log( !!1 );// true
console.log( !!0 ); // false
console.log( !!-1 ); // true
console.log( !!"" ); // false
console.log( !!"hello" ); // true
console.log( !!null ); // false
console.log( !!undefined ); // false
console.log( !!NaN );  // false
console.log( !![] ); // true
console.log( !!{} ); // true
console.log( !!function() {} ); // true

console.log( String(123) );    
console.log( String(null) );
console.log( String(undefined) );
console.log( String(true) );
console.log( String(false) );
console.log( String([1,2,3]) );
console.log( String({a:1, b:2}) );
console.log( String(function() {}) );

console.log( 123..toString() );
console.log( (123).toString() );
console.log( true.toString() );
console.log( false.toString() );
console.log( [1,2,3].toString() );
console.log( ({a:1, b:2}).toString() );
console.log( (function() {}).toString() );
console.log( (function() {}).toString().slice(0,20) + "..." );
console.log( (function namedFunc() {}).toString().slice(0,20) + "..." );
console.log( null + "" );
console.log( undefined + "" );

console.log( {} + "" );
console.log( [] + "" );
console.log( [1,2,3] + "" );

console.log( {} + 1 );
console.log( [] + 1 );
console.log( [1,2,3] + 1 );

console.log( {} - 1 );
console.log( [] - 1 );
console.log( [1,2,3] - 1 );

console.log( "5" + [] );
console.log( "5" + {} );
console.log( "5" + [1,2,3] );

console.log( "5" - [] );
console.log( "5" - {} );
console.log( "5" - [1,2,3] );
console.log( "5" * [] );
console.log( "5" * {} );
console.log( "5" * [1,2,3] );
console.log( "5" / [] );
console.log( "5" / {} );
console.log( "5" / [1,2,3] );
console.log( "5" % [] );
console.log( "5" % {} );
console.log( "5" % [1,2,3] );

console.log( "" + [] );
console.log( "" + {} );
console.log( "" + [1,2,3] );

console.log( "" - [] );
console.log( "" - {} );
console.log( "" - [1,2,3] );
console.log( "" * [] );
console.log( "" * {} );
console.log( "" * [1,2,3] );
console.log( "" / [] );
console.log( "" / {} );
console.log( "" / [1,2,3] );
console.log( "" % [] );
console.log( "" % {} );
console.log( "" % [1,2,3] );

console.log( null + [] );
console.log( null + {} );
console.log( null + [1,2,3] );

console.log( null - [] );

console.log( null - {} );
console.log( null - [1,2,3] );
console.log( null * [] );
console.log( null * {} );
console.log( null * [1,2,3] );
console.log( null / [] );
console.log( null / {} );
console.log( null / [1,2,3] );
console.log( null % [] );
console.log( null % {} );
console.log( null % [1,2,3] );

console.log( undefined + [] );
console.log( undefined + {} );
console.log( undefined + [1,2,3] );

console.log( undefined - [] );
console.log( undefined - {} );
console.log( undefined - [1,2,3] );
console.log( undefined * [] );
console.log( undefined * {} );
console.log( undefined * [1,2,3] );
console.log( undefined / [] );
console.log( undefined / {} );
console.log( undefined / [1,2,3] );
console.log( undefined % [] );
console.log( undefined % {} );
console.log( undefined % [1,2,3] );
