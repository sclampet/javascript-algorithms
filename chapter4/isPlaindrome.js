// Create a function that returns a boolean whether the string is a strict palindrome. 
// For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and capitalization: 
// if given "Dud" or "oho!", return false.

//"racecar"

//loop from start to middle comparing each idx corresponding end idx

//Time & Space:
    //O(n)


function isPalindrome(str) {
    // let newStr = str.replace(/[\s"'.,-\/#!$%\^&*;:{}=\-_`~()\\\[\]@+|?><]/g,"").toLowerCase()
    const end = str.length - 1;

    for(let i = 0; i < str.length / 2; i++) {
        if(str[i] !== str[end - i]) {
            return false;
        };
    };
    return true;
};

console.log(isPalindrome("e r acecar e"))
// console.log(isPalindrome("oho!"))

module.exports = {
    isPalindrome
}




