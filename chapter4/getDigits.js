//Given a string of characters and numbers, "0s1a3y5w7h9a2t4?6!8?0" 
//return just the number, 1357924680.

function getDigits(string) {
  let returnNum = "";

  for(let char of string) {
    if(Number(char) || char == "0") {
      returnNum += char;
    };
  };

  return Number(returnNum)
};

// ["0as", "sdfa", " ",  "12dsf4"] -> 0124
function getDigitsFromArr(arr) {
  let returnNum = "";

  for(var i = 0; i < arr.length; i++) {
    for(let char in arr[i]) {
      if (Number(arr[i][char]) || arr[i][char] == "0") {
        returnNum += arr[i][char];
      };
    };
  };

  return Number(returnNum);
};

// console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))
// console.log(getDigitsFromArr(["0as", "sdfa", " ", "12dsf4"]))



module.exports = {
  getDigits
}