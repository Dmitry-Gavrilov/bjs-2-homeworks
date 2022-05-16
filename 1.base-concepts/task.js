function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь

  "use strict";
  let d = Math.pow(b, 2) - 4*a*c;
  
  
  if (d < 0) {
    arr = [];
  } 
  
  if (d === 0) {
    arr = [(-b / (2 * a))];
    
   
  } 
  if (d > 0) {

    arr = [((-b + Math.sqrt(d) ) / (2 * a)) , ((-b - Math.sqrt(d) ) / (2 * a))];
    
  }


  return arr; // array
};

function calculateTotalMortgage(percent, contribution, amount, date) {
 


  // код для задачи №2 писать здесь
}