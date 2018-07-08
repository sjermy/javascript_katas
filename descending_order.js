//Test.assertEquals(descendingOrder(0), 0)
//Test.assertEquals(descendingOrder(1), 1)
//Test.assertEquals(descendingOrder(123456789), 987654321)

//Your task is to make a function that can take any non-negative integer as
//an argument and return it with its digits in descending order.
//Essentially, rearrange the digits to create the highest possible number.
//Examples:
//Input: 21445 Output: 54421
//Input: 145263 Output: 654321
//Input: 1254859723 Output: 9875543221
//
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function descendingOrder(n){
  var nums = Array.from("" + n);
  nums.reverse().sort(function(a,b) {
    if (a>b) return -1;
    else if (a<b) return 1;
    return 0;
  });
  return Number(nums.join(''));
}

var num = descendingOrder(145263);
console.log(num);
