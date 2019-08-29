// "baaab" -> "bab"

function superReducedString(str) {
  let reduced = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1] || reduced[reduced.length - 1] === str[i]) {
      i++;
    } else {
      reduced = `${reduced}${str[i]}`;
    };
    console.log(reduced, str[i])
  };
  return !reduced.length ? "Empty String" : reduced;
};



// function superReducedString(s) {
//   let arr = s.split('');

//   for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] === arr[i + 1]) {
//           arr.splice(i, 2);
//           i -= 2;
//       };
//   };

//   return arr.length ? arr.join('') : "Emtpy String"
// };

console.log(superReducedString("baab"));