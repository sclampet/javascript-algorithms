
let arr;

function buildParensCombos(resultStr, openCount, closedCount, n) {
  if (openCount === n && closedCount === n) {
    arr.push(resultStr);
    return;
  };

  if (openCount + 1 <= n) {
    buildParensCombos(resultStr += '(', openCount + 1, closedCount, n);
  };

  if (closedCount + 1 <= n && closedCount + 1 <= openCount) {
    buildParensCombos(resultStr += ')', openCount, closedCount + 1, n);
  };

}


function generateParens(n) {
  arr = [];
  buildParensCombos('', 0, 0, n);
  return arr;
};


console.log(generateParens(3))