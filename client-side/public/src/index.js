
// import everything from fetchAPI.js
// This will allow resources to be referenced as api.BASE_URL, etc.
import * as api from './fetchAPIHelper.js';

//display all products in a table

async function displayAllData(){

  let weight = 0;
  let height = 0;

  // use getElementById() to get values
  // To do: proper validation
  weight = Number(document.getElementById('weight').value);
  height = Number(document.getElementById('height').value);

 
  const bmi = await api.getDataAsync(`${api.BASE_URL}/calculate?weight=${weight}&height=${height}`);
  console.log(bmi);

let output = `
<h1>${bmi.value} is the value</h1>
<h1>${bmi.result} is the result</h1>


`

document.getElementById('data').innerHTML = output;


 
}




// Implement the other calculator functions

function loadCalculator() {
// Add event listners to the buttons
document.getElementById('calculate').addEventListener('click', displayAllData);
}

export {
  loadCalculator,
  displayAllData
}

// load the script
loadCalculator();
displayAllData();