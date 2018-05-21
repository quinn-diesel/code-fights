console.log('linked');


// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

// PSEUDO
// loop through the array
// split the strings
// count the number of incedents in the array
// find the length of all everything in the array

function allLongestStrings(inputArray) {

    let longestWords = [];

    for(i = 1; i < inputArray.length; i++ ){

        const stringOne =  inputArray[i].split(" ").join("");
        const stringTwo =  inputArray[i-1].split(" ").join("");
        
        if( i === (inputArray.length)) {
            console.log('return last');
            // return;
        } else if (stringTwo.length >= stringOne.length ){
            let push = longestWords.push(stringTwo)
           console.log(longestWords)
        } else {
            longestWords.push(stringOne)
        }
    }
    // console.log(longest)
    return longestWords
}

// -- ANSWER -->

// function allLongestStrings(inputArray){
//     let longestLength = inputArray[0].length;

//     for (i = 1; i < inputArray.length; i++){
//         if (longestLength < inputArray[i].length) {
//             longestlength = inputArray[i].length;
//         }
//     }
    
//     inputArray = inputArray.filter((element) => {
//         return element.length === longestLength;
//     });

//     return inputArray;

// }

console.log(allLongestStrings(["aba", "aa", "ad", "vcd","aba"]))

 console.log(allLongestStrings(["aa"]));

//  console.log(allLongestStrings(["abc", "eeee", "abcd", "dcd"]));

//  console.log(allLongestStrings(inputArray: ["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"]));

