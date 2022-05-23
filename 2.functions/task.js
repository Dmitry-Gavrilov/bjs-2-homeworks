function getArrayParams(arr) {
  let min, max, sum, avg;
  // Ваш код
 
  //min = Infinity;
  //max = -Infinity;
  min = arr[0];
  max = arr[0];
  sum = 0; 
     
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
   else if (arr[i] < min) {
     min = arr[i];
  }
  sum = sum + arr[i];
  avg = +(sum / arr.length).toFixed(2);
}

console.log('Задание №1.')

   return { min: min, max: max, avg: avg};
  
}
console.log(getArrayParams([-99, 99, 10]));
;

// Задание 2
console.log('\nЗадание №2');
function worker(arr) {
  let sum;
   // Ваш код
  sum = 0;
for (let i = 0; i < arr.length; i++) {
   sum += arr[i];
}
   return sum;
}

function makeWork(arrOfArr, func) {

  let sum = 0;
  let max = func(arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i++) {
    sum = func(arrOfArr[i]);
    if (max < sum) {
      max = sum;
    }

  } return max;
}

            // Задание 3
console.log('\nЗадание №3');
function worker2(arr) {
  // Ваш код
  let arrParams = getArrayParams(arr);
  return Math.abs(arrParams.max - arrParams.min);
 
}


