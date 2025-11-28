function buildArray() {
  const arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function() {
      console.log(i);
    });
  }
  return arr;
}
const fns = buildArray();
fns[0]();
fns[1]();
fns[2]();


console.log(Date.now());

setInterval(() => console.log(new Date()), 10000);