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

function calculate() {
const f = document.getElementById("fArray").value
        .split(",")
        .map(n => Number(n.trim()));

  const m = document.getElementById("mArray").value
    .split(",")
    .map(n => Number(n.trim()));

    const ans = addSum(f,m);
    document.getElementById("result").textContent = ans;
}
console.log("This is the sum for multiples: "+ addSum([3,5],[1,2,3,4,5,6,7,8,9]));

let url = "https://pokeapi.co/api/v2/pokemon/ditto";
fetchAndDisplay(url);

async function fetchAndDisplay(url) {
  const response = await fetch(url);
  const data = await response.json();

  document.getElementById("output").textContent =
    JSON.stringify(data, null, 2);
}