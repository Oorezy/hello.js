alert("Hello World!");
const makeAdder = (x) => {
  return (y) => x + y;
}
const incr = makeAdder(1); 
console.log(incr(2)); 

//Exercise
const addSum = (f,m) =>{
  let sum = 0;
  f.forEach(f1 => {
    m.forEach(m1 =>{
      if(m1 % f1 === 0){
        sum += m1;
      }
    });
  });
  return sum;
}

console.log("This is the sum: "+ addSum([3,5],[1,2,3,4,5,6,7,8,9]))