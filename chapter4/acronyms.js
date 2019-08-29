//Create a function that, given a string, returns the string’s acronym (first letters only, capitalized).

//Can we assume that the string given is a gramatically correct sentence? Meaning there won't be things like double spaces, random punctuation, etc...
//Can we assume that the string will only contain words? Or could there potentially be gibberish in there that we should account for?
//Should we return the Acornym in a particular format? i.e. L.F.N.Y.I.S.N or LFNYISN?
//Should I write my own function to capitalize the letters I pull or is it acceptable to user toUpperCase() on the final string when returning?


//Pseudo:
//A function that accepts and returns a string
//Take the first character of the current sequence ad place that in our return string
  //First character = string[0] or the previous value is a blank space

//return string of first character, capatalized 
//O(n) time complexity


function toAcronym(string) {
  let acronym = string[0] != " " ? string[0] : "";

  for(var i = 0; i < string.length; i++) {
    if(string[i - 1] == " ") {
      acronym += string[i];
    }
  }
  acronymsList.push(acronym.toUpperCase)

  return acronym.toUpperCase();
};

console.log(toAcronym(" Live from New York, it's Saturday Night!"))

module.exports = {
  toAcronym
}


