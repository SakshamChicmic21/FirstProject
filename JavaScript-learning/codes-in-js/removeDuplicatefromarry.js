// let uniqueArr=[];
// let arr=[1,2,3,4,5,2,3,4,5,6,7,8,9,1,2,3,4,5];

// for (let i=0;i<arr.length;i++){
//     if (!uniqueArr.includes(arr[i])){
//         uniqueArr.push(arr[i]);
//     }
// }

// console.log(uniqueArr);

// sort an array of objects by age

// let objarr=[
//     {
//         name:"alice",
//         age:34
//     },
//     {
//         name:"alice1",
//         age:25
//     },
//     {
//         name:"alice2",
//         age:785
//     },
//     {
//         name:"alice3",
//         age:86
//     },
// ]

// objarr.sort((a,b)=> a.age-b.age);
// console.log(objarr);

// let str = "saksham";
// let vowel = "aeiouAEIOU";

// let cnt = 0;
// for (let i = 0; i < str.length; i++) {
//   if (vowel.indexOf(str[i]) != -1) {
//     cnt++;
//   }
// }
// console.log(cnt);

let str = "this is a dog";
let arr = str.split(" ");
let res = [];
 arr.forEach((ele)=>{
    let earr = ele.split("");
    if(earr.length > 1){
        earr[0]= ele.charAt(0).toUpperCase();
    }
    res.push(earr.join(""));
})
console.log(res.join(" "));
