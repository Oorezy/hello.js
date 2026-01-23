alert("Hello World!");
const makeAdder = (x) => {
  return (y) => x + y;
}
const incr = makeAdder(1); 
console.log(incr(2)); 