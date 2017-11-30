var words = ["ground", "control", "to", "major", "tom"];

var map = function(arr, cb){
  var result = [];

  for(var i = 0; i < arr.length; i++) {
   var item = arr[i];
   result.push(cb(item));
 }
 return result;
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
