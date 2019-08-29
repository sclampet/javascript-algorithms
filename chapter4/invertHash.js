// Associative arrays are also called hashes (we’ll learn why later). 
// Build invertHash(assocArr) to convert hash keys to values, and values to keys. 
// Example: given {"name": "Zaphod", "charm": "high", "morals": "dicey"} , return object {"Zaphod": "name", "high": "charm", "dicey": "morals"}.

//For...in loop that uses a temp variable to switch key value pairs

// Time & Space: O(n)

function invertHash(obj) {
    let inverse = {}
    for(key in obj) {
        inverse[obj[key]] = key
    }
    
    return inverse
};

console.log(invertHash({"name": "Zaphod", "charm": "high", "morals": "dicey"}))