//Given a non-empty string, 's', and a dictionary, 'wordDict', containing a list of non-emtpy words,
// determine if 's' can be segmented into a space seprated sequence of one or more dictionary words.


/*
s = "facebook"
wordDict =  {
  face: "face",
  book: "book",
  facebook: "facebook"
}

return an object container the wordDict words and corresponding booleans that show which were in string 's'


PESUDO CODE
0....s.length
append idx, if character, to temp string
check if current temp string is in wordDict


*/