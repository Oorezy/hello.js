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

console.log("This is the sum for multiples: "+ addSum([3,5],[1,2,3,4,5,6,7,8,9]))
fetchAndDisplay(url);

let url = "https://pokeapi.co/api/v2/pokemon/ditto";
async function fetchAndDisplay(url) {
  const response = await fetch(url);
  const data = await response.json();

  document.getElementById("output").textContent =
    JSON.stringify(data, null, 2);
}