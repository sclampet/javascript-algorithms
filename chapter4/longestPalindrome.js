// For this challenge, we will look not only at the entire string provided, but also at the substrings within it. 
//Return the longest palindromic substring. Given "what up, daddy-o?" , return "dad" . Given "uh... not much" , return "u" . 
//Include spaces as well (i.e. be strict, as in previous challenge): given "Yikes! my favorite racecar erupted!" , return "e racecar e" .

//We need to see how long of a palindrome each letter in a string is a part of, if at all. 
//We can loop through the string start to end, and at each iteration create a "sub string" to loop from the end of the string 
//towards the current front every time.

//Time & Space
//This however I think is exponenial time complexity
    //we are re touching every index for every iteration
//Space I beleive is constant....?

//BREAK:
    //If the string is less than 2 return false



const isPalindrome = require('../chapter4/isPlaindrome').isPalindrome

function longestPalind(s){
    let longestPalindrome = '';
    let max_length = 0;
      
    for(let i = 0; i < s.length; i++) {
      let subString = s.substr(i, s.length);
        
      for(let j = subString.length; j >= 0; j--) {
        let sub_subString = subString.substr(0, j);
        console.log('checking: '+ sub_subString);

        if (sub_subString.length <= 1)
            continue;
          
        if (isPalindrome(sub_subString)) {
          if (sub_subString.length > max_length) {
              max_length = sub_subString.length;
              longestPalindrome = sub_subString;
          }
        }
      }
    }
    return longestPalindrome;
  }

  console.log(longestPalind("what up, daddy-o?"))
  console.log(longestPalind("Yikes! my favorite racecar erupted!"))
