//recreate .map


//map - takes a function that instantiates said fuction on every item in an array and then returns a new array with
    //the manipulated values.


    // map(array, function) => new array


    function map(arr, callback) {
        let newArray = [];

        for(let i = 0; i < arr.length; i++) {
           const result = callback(i);
           newArray.push(result);
        };

        return newArray;
    };

    console.log(map([1,2,3,4], num => num * 2));