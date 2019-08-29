//Build a standalone function to remove strings of even lengths from a given array. 
//For array containing ["Nope!","Its","Kris","starting","with","K!","instead","of","Chris","with","C)","."], 
//change that same array to ["Nope!","Its","Chris","."].


//Are we only dealing with an array of Strings?
//Can we build a helper shift() function to help us return the same array at the end. Otherwise we can use splice to this for us.


//once we get to an even length string, shift all values after it over from right to left and cut off arr.length by 1
    //this will mean we'll need our own shift() that returns the shortened array and is called for every even length string we find. 

function shiftArrayRightToLeft(arr, idx) {
    for(var i = idx; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];  
    };
    arr.length = arr.length - 1;
    return arr;
};

// console.log(shiftArrayRightToLeft(["0", "1", "2", "3"], 2))

function removeEvenLengthStrings(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].length % 2 == 0) {
            arr = shiftArrayRightToLeft(arr, i); 
            i -= 1;
        };
    };
    return arr;
};

console.log(removeEvenLengthStrings(['Nope!','Its','Kris','starting','with','K!','instead','of','Chris','with','C)','.']));

module.exports = {
    removeEvenLengthStrings
}