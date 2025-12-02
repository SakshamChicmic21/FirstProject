
let arr = [1,2,3,4,5,2,4,5,6,43,5];
let str = "hello world javascript"
let freq = new Map();
for(let i=0;i<arr.length;i++){
    if (freq.has(arr[i])){
        freq.set(arr[i],freq.get(arr[i])+1);
    }else{
        freq.set(arr[i],1);
    }
}

console.log(freq);
// for (let [key,value] of freq) {
//     console.log(key,"->",value);
// }
let freq2= new Map();
for(let ch of str){
    if (freq2.has(ch)){
        freq2.set(ch,freq2.get(ch)+1);
    }else{
        freq2.set(ch,1);
    }
}
// console.log(freq2);
for(const [key,value] of freq2){
    console.log(key,"->",value);
}
