function rollOne() {
  return Math.floor((Math.random() * 6) + 1);
}
// console.log(rollOne())

function playFives(num) {
  var result; 
  while(num) {
    result = rollOne();

    if (result == "5") {
      console.log(result+": That's good luck!");
    } else {
      console.log(result);
    }

    num--
  }
}
// playFives(10)

function playStats() {
  var highestVal = 1;
  var lowestVal = 1;
  var rollResult;

  for(var i = 1; i <= 8; i++) {
    rollResult = rollOne()

    if(rollResult > highestVal) {
      highestVal = rollResult;
    };
    if(rollResult < lowestVal) {
      lowestVal = rollResult;
    };
  }
  return "Highest Roll: " + highestVal + "\nLowest Roll: " + lowestVal+"\nOut of 8 rolls";
}
// console.log(playStats())

function playStats2() {
  var highestVal = 1;
  var lowestVal = 1;
  var rollTotal = 0;
  var rollResult;

  for (var i = 1; i <= 8; i++) {
    rollResult = rollOne()
    rollTotal += rollResult;
    if (rollResult > highestVal) {
      highestVal = rollResult;
    };
    if (rollResult < lowestVal) {
      lowestVal = rollResult;
    };
  }
  return "Total: "+rollTotal+"\nHighest Roll: " + highestVal + "\nLowest Roll: " + lowestVal + "\nOut of 8 rolls";
}
// console.log(playStats2())

function playStats3(num) {
  var highestVal = 1;
  var lowestVal = 1;
  var rollTotal = 0;
  var rollResult;

  for (var i = 1; i <= num; i++) {
    rollResult = rollOne()
    rollTotal += rollResult;
    if (rollResult > highestVal) {
      highestVal = rollResult;
    };
    if (rollResult < lowestVal) {
      lowestVal = rollResult;
    };
  }
  return "Total: " + rollTotal + "\nHighest Roll: " + highestVal + "\nLowest Roll: " + lowestVal + "\nOut of "+num+" rolls";
}
// console.log(playStats3(4))