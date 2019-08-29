//Given a string containing a Roman numeral representation of a positive integer, return the integer. 
// Remember that III is 3 , DCIX is 609 and MXDII is 1512.

//Sequence through the given roman numeral and compare each numeral to my reference bank of roman numerals and their values.
//For each numeral given, I can it's corresponding value to a running total. 
//Make sure to check whether the next 2 numerals correspond with a key in ref. If so, take that value and move 2 numerals in the sequence.
//return total. 


// const reference = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};

//III => 3, DCIX => 609
//total = 609

function romanToInt(numeralString) {
    const reference = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let total = 0;

    for(let i = 0; i < numeralString.length; i++) {
        if(reference[numeralString[i]+numeralString[i + 1]]) {
            total += reference[numeralString[i]+numeralString[i + 1]];
            i += 2;
            continue;
        } 
        total += reference[numeralString[i]];
    };
    return total;
};

// console.log(romanToInt('III'));
// console.log(romanToInt('DCIX'));
console.log(romanToInt('MXDII'));


module.exports = {
    romanToInt
}