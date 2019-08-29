// Create a standalone function that accepts an input string, removes leading and trailing white space (at beginning and end only), 
// capitalizes the first letter of every word, and returns that string. 
// If original string contains the word "Mike" anywhere , immediately return "stunned silence" instead.

//When given " hello There buddy " returns "Hello There Buddy"
//When given "Oh hey There Mike " returns "stunned silence"

function dropTheMike(str) {
    let newStr = "";
    let currentWord = ""
    let idx = str[0] === ' ' ? 1 : 0;
    let length = str[str.length - 1] === " " ? str.length - 1 : str.length;

    for (let i = idx; i < length; i++) {

        if (str[i - 1] === ' ') {
            newStr += str[i].toUpperCase();
            currentWord = str[i].toUpperCase();
        } else {
            newStr += str[i];
            currentWord += str[i];
        };

        if (currentWord === "Mike") {
            if(str[i + 1] === ' ' || str[i + 1] === undefined) {
                return "stunned silence";
            }
        };
    
    };

    return newStr;
};

console.log(dropTheMike(" hello There buddy    "));
// console.log(dropTheMike("Oh bob There Mike   "));


module.exports = {
    dropTheMike
}



