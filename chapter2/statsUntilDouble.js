function roll20SidedDie() {
  return Math.floor((Math.random() * 20) + 1);
}
// console.log(roll20SidedDie())

function calculateAvg(array) {
  var sum = 0;
  for(var i = 0; i < array.length - 1; i++) {
    sum += array[i];
  }
  return Math.floor(sum / array.length);
}
// console.log(calculateAvg([1,2,3,4]))

function statsUntilDouble() {
  var weRolledADuplicate = false;
  var rollRecord = [];
  var roll;
  var stats = {
    min: null,
    max: null,
    avg: 0,
    numRolls: 0,
  }

  while(!weRolledADuplicate) {
    //roll the die
    roll = roll20SidedDie();
    //if this is the first roll, initialize min and max with roll value
    if(rollRecord.length < 1) {
      stats.min = roll;
      stats.max = roll;
    } else {
      //set min, max, and numRolls
      stats.min = roll < stats.min ? roll : stats.min;
      stats.max = roll > stats.max ? roll : stats.max;
      stats.numRolls += 1;
    }
    //if we have a duplicate stop the loop, calculate the avg and return stats
    if(rollRecord.includes(roll)) {
      // console.log("Duplicate = "+roll);
      weRolledADuplicate = true;
      stats.avg = calculateAvg(rollRecord);

      return stats;
    } else {
      //if we haven't seen this roll add it to the record and continue
      rollRecord.push(roll);
    }
  }
}

console.log(statsUntilDouble())