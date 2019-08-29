// Given a sequence of parentheses, braces and brackets, determine whether it is valid. 
// Example: "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true . "D(i{a}l[ t]o)n{e" => false . "A(1)s[O (n]0{t) 0}k" => false .

//What we'll need:
    //A array that holds all open braces - stack ['(', '{']
    //A object that holds key,value pairs that equal each brace type opened and closed - ref = {'(':')', '{': '}'...}
    //return true || false

//BREAK:
    //if stack has any open braces in it return false. This means there is a missing closing brace.
    //if stack isEmpty upon finding first closing brace return false.
    //As soon we find that a closing brace doesn't match the last item in our stack return false.

//Time Complexity:
    //Only having to iterate through given string once = O(n)
    //At worst we'll have to perform string.length operations on our stack = ???


function bracesValid(str) {
    let stack = [];
    const bracesRef = {
        '(': ')',
        '{': '}',
        '[':']'
    };

    for(let i = 0; i < str.length; i++) {

        if(str[i] == '(' || str[i] == '{' || str[i] == '[') {
            stack.push(str[i]);
        } 
        else if(str[i] === ')' || str[i] === '}' || str[i] === ']') {
            let last = stack.pop();

            if(str[i] != bracesRef[last]) {
                return false;
            };
        };
    };

    return stack.length === 0;
};

console.log(bracesValid("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"))

module.exports = {
    bracesValid
};