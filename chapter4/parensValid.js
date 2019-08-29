//Create a function that, given an input string str, 
//returns a boolean whether parentheses in str are valid.

//Valid examples: "Y(3(p)p(3)r)s"  |  "A(sd(s)s(d)d)dd"
//Invalid example: "N(0(p)3("   |   "a(l)lsd)p(p)p)"    => ())())


//BREAK:
//If the first parens is ) or if the last parens is ( return false

//PSEUDO CODE
//For every open parens there is a closed parens that follows (Equal number of both)
//Store openParensCount & closedParensCount & lastParens


function parensValid(str) {
    let openParens = '(';
    let closedParens = ')';
    let lastParens;
    let openParensCount = 0;
    let closedParensCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == closedParens && openParensCount == 0) {
            return false;
        };
        if(str[i] == openParens) {
            openParensCount += 1;
            lastParens = openParens;
        } else if(str[i] == closedParens) {
            closedParensCount += 1;
            lastParens = closedParens;
        }
    };

    return openParensCount == closedParensCount && lastParens != openParens
};

console.log(parensValid("Y(3(p)p(3)r)s"));
console.log(parensValid("N(0(p)3("));

module.exports = {
    parensValid
}


//In a counted solution, determining the "balance" of parens is still necessary but, I don't need to push or pop items in/out of an array.