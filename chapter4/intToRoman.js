// Given a positive integer that is less than 4000, return a string containing that value in Roman numeral representation. 
// In this representation, I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000. 
// Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV.


//Have a dict of roman numerals and their values for quick look up. => {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}

//while the given number is >= the current roman numeral value, add that numeral to the return string and subtract value from give number;

//CCCXLIX
function intToRomanNumeral(num) {
    const reference = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    var roman = '';

    for(i in reference) {
        while(num >= reference[i]) {
            roman += i;
            num -= reference[i];
        }
    }
    return roman;
};

console.log(intToRomanNumeral(349))
