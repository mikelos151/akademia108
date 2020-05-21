var num1 = 2;
var num2 = 5;

function compare(first, second) {
  if (first > second) {return first};
  if (second > first) {return second};
  return "liczby są takie same";
}

console.log(compare(num1, num2));