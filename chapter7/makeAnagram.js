

function makeAnagram(a, b) {
  let currentWord = a;
  let refWord = b;
  let isChecking = true;
  let numDeletions = 0;

  while (isChecking) {

    let newStr = "";
    let ref = {};
    let duplicates = [];
    //build ref Dict
    for (let letter of refWord) {
      if (ref[letter]) {
        duplicates.push(letter);
      } else {
        ref[letter] = letter;
      }
    };
    //check currentWord against Dict. Accounting for duplicates
    for (let letter of currentWord) {
      if (ref[letter]) {
        newStr = `${newStr}${letter}`;
        if(duplicates.includes(letter)) {
          let letterIndex = duplicates.indexOf(letter);
          duplicates.splice(letterIndex, 1);
        } else {
          ref[letter] = undefined;

        }
      };
    };

    console.log(`newStr: ${newStr} | numDeletions: ${currentWord.length - newStr.length}`);
    numDeletions += currentWord.length - newStr.length;

    if (currentWord === a) {
      currentWord = b;
      refWord = a;
    } else {
      isChecking = false;
    }

    // console.log(`currWord: ${currentWord}, refWord: ${refWord}, deletions: ${currentWord.length - newStr.length}`);
  };
  return numDeletions;
};

const a = "cba";
const b = "abc";
const a2 = "fcrxzwscanmligyxyvym"
const b2 = "jxwtrhvujlmrpdoqbisbwhmgpmeoke"

console.log(makeAnagram(a, b))
// console.log(makeAnagram(a2, b2))