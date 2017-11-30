function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var die = 0;

  return function() {
    var tempDie = die;
    die++;
    return list[tempDie];
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6


var countdownGenerator = function (x) {
  var countdownNum = x;

  return function(){
    var tempCountdown = countdownNum;
    var text = '';
    if(tempCountdown > 0){
      text = "T-minus " + tempCountdown + "...";
    }
    else if(tempCountdown === 0){
      text = "Blast Off!"
    }
    else {
      text = "Rockets already gone, bub!";
    }
    countdownNum--;
    console.log(text);
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
