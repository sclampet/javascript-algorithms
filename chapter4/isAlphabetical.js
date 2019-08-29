

//Given a string, return whether all contained letters are in alphabetical order.


//Given Ads => true. Bill => true
//Given Bored => false

//Store a reference {} of all letters and their weight
//Compare each index's weight to the last weight given.
    //if the current index weight is less than the last weight given return false
    //if we get to the end of the string and each weight progressively gets heavier return true


//Time & Space
    //Time: O(n)
    //Spcae: O(n)


function isAlphabetical(string) {
    const lowerCaseString = string.toLowerCase()

    for(let i = 1; i < lowerCaseString.length; i++) {
        if(lowerCaseString.charCodeAt(i) < lowerCaseString.charCodeAt(i - 1)) {
            return false 
        }
    }
    return true;
};

// console.log(isAlphabetical("bilL"))
// console.log(isAlphabetical("Ads"))
// console.log(isAlphabetical("bored"))

module.exports = {
    isAlphabetical
}