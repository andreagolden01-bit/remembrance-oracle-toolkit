// BAD CODE EXAMPLE - Low Coherency Demo
// This is intentionally messy for testing the Oracle

function doStuff(x,y){let z=x+y; if(z>10){console.log('big number!!!');}else{ for(let i=0;i<100;i++){if(i%2===0)console.log(i)}} return z*2;}

var globalVar = 'bad practice';

// TODO: fix this mess later
async function fetchData(url) {
  const response = await fetch(url); // no error handling
  const data = await response.json();
  console.log(data);
  return data;
}

const result = doStuff(5, 20);
console.log(result);

// Duplicate logic everywhere
if(true){console.log('always true');}

module.exports = {doStuff, fetchData};