let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function checkEven(number) {
  if (number % 2 == 0) return true;
  else return false;
}

let evenNumbers = num.filter(checkEven);
console.log(evenNumbers);
