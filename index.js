var amountOfWater = function(array) {
var water = 0;
var left = 0;
var right = 0;
var sum = 0;

array.filter(function (element, index) {
  if (left > element){
    sum += left - element;	
  } else {
      left = element;
      water = index;
    }
  }
);

  for (i = array.length - 1; i > water; i--) {
    if (array[i] > right) {
      right = array[i];	
    } sum -= array[water] - right;
  }
  return sum;
};
			
console.log(amountOfWater([2, 5, 1, 3, 1, 2, 1, 7, 7, 6]));    // 17
console.log(amountOfWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0])); // 10
console.log(amountOfWater([7, 0, 1, 3, 4, 1, 2, 1]));          // 9
console.log(amountOfWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0])); // 10
console.log(amountOfWater([2, 2, 1, 2, 2, 3, 0, 1, 2]));       // 4
console.log(amountOfWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8])); // 24
console.log(amountOfWater([2, 2, 2, 2, 2]));                   //0


