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
let arr = [
  1,
  2,
  5,
  true,
  "hello",
  "string",
  { abc: { a: [1, 2, 3] } },
  [3, 4, 5, [7, 3, 5, 7, 8], 6],
];
function reverseObject(temp) {
  let rev = temp.reverse();
  let n = rev.length;
  for (let i = 0; i < n; i++) {
    let ch = temp[i];
    if (ch== "{" || ch == "}" || ch == "[" || ch == "]" || ch == "") {
        if (ch=='{'){
            temp[i]='}';
        }else if (ch=='}'){
            temp[i]='{';
        }else if (ch == '['){
            temp[i]=']';
        }else {
            temp[i]='[';
        }
    }
  }
  return temp.join("");
}
let res= arr.map((ele)=>{
    if (typeof ele != "object" || ele === null){
        if (typeof ele === "string"){
            return ele.split("").reverse().join("");
        }
        else if (typeof ele === "boolean"){
            return Number(ele);
        }else{
            return ele.toString();
        }
    }else {
        let jsonstr = JSON.stringify(ele).split("");
        return reverseObject(jsonstr);
    }
})

console.log(res);
