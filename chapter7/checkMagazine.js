const mag = "give me one grand today night"
const note = "give one grand today"

const mag1 = "two times three is not four"
const note1 = "two times two is four"

const mag2 = "ive got a lovely bunch of coconuts"
const note2 = "ive got some coconuts"

function checkMagazine(magazine, note) {
    let ref = {};
    let subStr = ""

    for(let i = 0; i < magazine.length; i++) {
      if(magazine[i] != " ") {
        subStr = `${subStr}${magazine[i]}`
      } 
      else {
        ref[subStr] = subStr;
        subStr = "";
      };
    };

    subStr = "";

    for(let i = 0; i < note.length; i++) {
      if(note[i] != " ") {
        subStr = `${subStr}${note[i]}`;
      } else {
        if(!ref[subStr]) {
          console.log("No");
          return;
        };
        ref[subStr] = null;
        subStr = "";
      };
    }
   console.log("Yes");
   return;
};

checkMagazine(mag, note);
checkMagazine(mag1, note1);
checkMagazine(mag2, note2);