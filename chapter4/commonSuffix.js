// Write a function that, when given a word array, returns the largest suffix (word-end) common to all words in the array. 
// For inputs ["deforestation", "citation", "conviction", "incarceration"] , return "tion" (not all that creative a rhyming point). 
// If it is ["nice", "ice", "baby"] , return "" , because that’s just … not .

// Build a string that's the reverse of the first word and compare the last letters accordingly of each word that comes after
// If the letters match at a length of >= 2 store it as the suffix and compare the next words to it.
//If we can't build a suffix from the word immediately after return ""
// if the other words to match the found suffix return ""

//store backwards word of arr[0]
//commonSuffix = ""
//Loop from end to front of each word in array

// Time: O(n)
// Space: O(n)

function commonSuffix(arr) {
    let reverseReference = ""
    let commonSuffix = ""

    for (let i = 0; i < arr.length; i++) {
        for (let j = arr[i].length - 1; j >= 0; j--) {
            if(i === 0) {
                reverseReference += arr[i][j];
            } else {
                if(arr[i][j] === reverseReference[reverseReference.length - 1 - j]) {
                    commonSuffix += arr[i][j]
                }
            }
            
        }
    };
    if(commonSuffix.length > 4) {
        commonSuffix.length = 4
    } 
    console.log(commonSuffix)

};

console.log(commonSuffix(["deforestation", "citation", "conviction", "incarceration"]))

module.exports = {
    commonSuffix
};