// Take an array and remove every second element out of that array.
// Always keep the first element and start removing with the next element.
//
// Example:
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
// None of the arrays will be empty, so you don't have to worry about that!
//
// https://www.codewars.com/kata/removing-elements/train/javascript
var myArr1 = ['Hello', 'Goodbye', 'Hello Again'];
var myArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeEveryOther(arr){
  let arr2 = [];
  for (let i=0;i<arr.length;i++) {
    if (i % 2 == 0) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}

removeEveryOther(myArr1);
