


function isValid(str) {
  let ref = {};
  let frequency = [];
  let count = 0;

  for (let char of str) {
    if (ref[char]) {
      ref[char] += 1;
    } else {
      ref[char] = 1;
    };
  };

  const keys = Object.keys(ref);
  for (let i = 0; i < keys.length; i++) {
    frequency.push(ref[keys[i]]);
  }

  const difference = (Math.max(...frequency) - Math.min(...frequency));
  for (let i = 1; i < frequency.length; i++) {
    if (frequency[0] !== frequency[i]) {
      count++;
    };
  };
  console.log(ref);

  if (count <= 1) {
    if (difference <= 1) {
      return "Yes";
    } else {
      return "No";
    };
  }
  return "No";
};

// console.log(isValid("aabbccddeefghi"))
console.log(isValid("ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd"))