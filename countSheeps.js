// Consider an array of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array
// (true means present).
//
// Hint: Don't forget to check for bad values like null/undefined
// https://www.codewars.com/kata/counting-sheep-dot-dot-dot/train/javascript

var sheeps = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true];

function countSheeps(arrayOfSheep) {
  var count = 0;
  if (typeof arrayOfSheep !== "object") return count;
  for (var i=0;i<arrayOfSheep.length;i++) {
    if (arrayOfSheep[i] === true) count++;
  }
  return count;
}

console.log(countSheeps(sheeps));

// new solutions
let countSheeps = x => x.filter( s => s ).length;

const countSheeps = arrayOfSheeps => arrayOfSheeps.filter(s => s).length;
