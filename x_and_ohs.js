// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.
// The string can contain any char.
//
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// https://www.codewars.com/kata/exes-and-ohs/train/javascript
function XO(str) {
    let x = 0; let o = 0;
    for (let i=0;i<str.length;i++) {
      if (str.charAt(i) === 'x' || str.charAt(i) === 'X') x++;
      else if (str.charAt(i) === 'o' || str.charAt(i) === 'O') o++;
    }
    return x == o ? true : false;
}

XO("ooxx"); // => true
XO("xooxx"); // => false
XO("ooxXm"); // => true
XO("zpzpzpp"); // => true
XO("zzoo"); // => false
