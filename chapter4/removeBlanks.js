function removeBlanks(string) {
  let newString = ""

  for (let char of string) {
    if(char != ' ') {
      newString += char;
    }
  }
  return newString;
};

console.log(removeBlanks(" a asdf asd "))


module.exports = {
  removeBlanks
};