// Martin is writing his opus: a book of algorithm challenges, set as lyrics to a suite of a cappella fugues. 
// Some of ‘those fugueing challenges’ are less popular than others, so he needs an index. 
// Given a sorted array of pages where a term appears, produce an index string. 
// Consecutive pages should form ranges separated by a hyphen. For [1,13,14,15,37,38,70] , return string "1, 13-15, 37-38, 70" .

//for every num in array add "num, ".
    //If the num at idx+1 is consecutive then add set a start var to be idx and as soon as the next idx + 1 isn't consecutive 
    //add start and current index with hyphen a continue

//O(n) Time
//O(n) Space
//returnString, min and max, i(index)


//Given [1,13,14,15,18,20,21,30] return [1,13-15,18,20-21,30]


function bookIndex(arr) {
    let stringIndex = "";
    let startRange = 0;
    let endRange = 0;

    for(let i = 0; i < arr.length; i++) {

        if((arr[i] + 1) === arr[i + 1]) {
            if(startRange) {
                endRange = arr[i];
            } else {
                startRange = arr[i];
            };

        } else if(startRange) {
            endRange = arr[i];
            stringIndex += startRange+"-"+endRange+", ";
            startRange = 0;
            endRange = 0;

        } else {
            stringIndex += arr[i]+", ";
        };
    };

    return stringIndex;
};

console.log(bookIndex([1,13,14,15,18,20,21,30]))