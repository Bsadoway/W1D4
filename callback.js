// The second argument/parameter is expected to be a function
function findWaldo(arr) {
  var indexFound = -1;
  arr.forEach(function(currentValue, index) {
    if (currentValue === "Waldo") {
      indexFound = index;
    }
  });
  return indexFound;
}

console.log("Found him at index: " + findWaldo(["Alice", "Bob", "Waldo", "Winston"]));


// The second argument/parameter is expected to be a function
function findWaldo1(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i); // execute callback
    }
  }
}

function actionWhenFound(index) {
  console.log("Found him at index: " + index);
}

findWaldo1(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
