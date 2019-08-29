// Write a function that accepts as a parameter a string containing someone’s name. 
// Return a string containing the following oh-so-cool greeting: strip off the first letter of the name, 
// capitalize this new word, and add " to the [first letter] !" Given "Dylan" , return "Ylan to the D!"


//Start a loop at 2nd letter of name, capitalize the first, add letters to new string.
//When loop is done add " to the " with the first letter of the name appended to the end with a "!"
//return new string

//Time: O(n)
//Space: O(n)

//Given Dylan -> Ylan

function getJiggy(name) {
    let greeting = ""

    for(let i = 1; i < name.length; i++) {
        greeting += i === 1 ? name[i].toUpperCase() : name[i]
    };

    return greeting += " to the "+name[0].toUpperCase()+"!"
};

// console.log(getJiggy("Dylan"))
// console.log(getJiggy("Scott"))