//
// // console.log('working');

// function centuryFromYear(year) {

//     var div = (year/ 100)
//     console.log(div)

//     if (year <= 100){
//         console.log(1)
//         // return (1)

//     } else if (div % 1 != 0){
//         console.log(div)
//         // return ((math.floor(div)) + 1)
//     } else {
//         // return (div)
//     }
// }

// console.log(centuryFromYear(1900));

// function checkPalindrome(inputString) {

//     console.log(inputString);

//     let og = inputString;
//     let reverse = inputString.split.string.reverse;

//     console.log(reverse);

//     if ( og === reverse ) {
//         return true
//     } else {
//         return false
//     }

// }

// checkPalindrome('aabbaa');

// console.log(inputArray)
// create array of the multiples
// compare the numbers in that array
//

// ----- ADAJCENT ELEMENTS PRODUCT ----- //

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer inputArray

// An array of integers containing at least two elements.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
// -1000 ≤ inputArray[i] ≤ 1000.

// [output] integer

// The largest product of adjacent elements.

// var inputArray = [3, 6, -2, -5, 7, 3];
// console.log(inputArray.length);

function adjacentElementsProduct(inputArray) {
  // console.log(inputArray);
  var multiples = [];

  // now evaluating all the pairs
  for (let index = 0; index < inputArray.length; index++) {
    const element = inputArray[index] * inputArray[index + 1];

    function checkNum(element) {
       

        if ( isNaN(element) === true ) {
            return element = 0;
        } else if (element >= 0 ){
            return element;
        } else {
            return element * element;
        }
      }

    multiples.push(element);
    // console.log(multiples);
  }

    // multiples.slice(NaN)
    // console.log(multiples);
// other ways -- slice off the NaN
// think of ways to get rid of the NaN

// Hint

// function adjacentElementsProduct(???) {
//     return Math.???(...arr.slice(?).map((x,?)=>[x*arr[?]]))
//   }
  

  let wholeNumber = multiples.filter( checkNum );
  var index = multiples.indexOf(NaN);

  if ( index === -1){
      multiples.splice(index, 1);
  }
  console.log(multiples);

  var max = Math.max(...wholeNumber);
  if ( max === -Infinity ){
      return 0;
    // console.log('max === infinity');
  }else if ( max > 0 ) {
      return max;
  } else if ( max < 0 ){
      return max;
  } else {
      console.log( 'else');
    //   return (1 / max) ;
  }

}


console.log(adjacentElementsProduct([-23, 4, -3, 8, -12]));
console.log(adjacentElementsProduct([1, 0, 1, 0, 1000]));


