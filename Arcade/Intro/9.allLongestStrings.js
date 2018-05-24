// console.log('linked');


// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

// PSEUDO
// loop through the array
// split the strings
// count the number of incedents in the array
// find the length of all everything in the array

// function allLongestStrings(inputArray) {

//     let wordsArray = [];
//     console.log('wordsArray: ' +  wordsArray);
//     let longestWord = inputArray[0].length;
//     // console.log('longestWord: ' + longestWord)

//     for(i = 0; i < inputArray.length; i++ ){

//         // const stringOne =  inputArray[i].split(" ").join("");
//         const stringOne = inputArray[i].length;
//         // console.log(stringOne);
//         // const stringTwo =  inputArray[i-1].split(" ").join("");
//         // const stringTwo = inputArray[i+1].length;

//         if( longestWord < stringOne) {
//             // console.log('longestWord < stringOn');
//             // longestWord = stringOne;
//             wordsArray.push(stringOne);
//             // return;
//         } if ( longestWord === stringOne ){
//             wordsArray.push(stringOne)
//         } else {
//             wordsArray.push(longestWord)
//         }

//         // wordsArray = stringOne.filter(element => {
//         //     return element.length = longestWord;
//         // })

//         // return wordsArray
//     //     } else if (stringTwo >= stringOne ){
//     //         let push = longestWords.push(stringTwo)
//     //        console.log(longestWords)
//     //     } else {
//     //         longestWords.push(stringOne)
//     //     }
//     // }
//     // console.log(longest)
//     return wordsArray;
// }
// }

// -- ANSWER -->

// function allLongestStrings(inputArray){
//     let longestLength = inputArray[0].length;

//     for (i = 1; i < inputArray.length; i++){
//         if (longestLength < inputArray[i].length) {
//             longestlength = inputArray[i].length;
//             console.log(longestLength)
//         }
//     }
    
//     inputArray = inputArray.filter((element) => {
//         return element.length === longestLength;
//     });

//     return inputArray;

// }

function allLongestStrings(inputArray){

   let wordLength = [];
   let longestPlace = [];
   let longestWord = [];

    // looping for length
    for( i = 0; i < inputArray.length; i++){
        length = inputArray[i].length;
        wordLength.push(length);
    }

    // finding the max
    let max = Math.max(...wordLength);
    console.log(max);
    // console.log(longestWords);

    for (j = 0; j< inputArray.length; j++){
        if (inputArray[j].length === max){
            longestWord.push(inputArray[j])
        }
        // console.log(longestWord);
    }
    return longestWord;


    // // finding all the occurences of the max
    // let idx = wordLength.indexOf(max);

    // while (idx != -1){
    //     longestPlace.push(idx);
    //     idx = wordLength.indexOf(max, idx+1);
    //     // longestWord.push(idx(inputArray));
    // }
    // // array of where the max lengths are
    // console.log(longestPlace);
    // 
}


console.log(allLongestStrings(["aba", "aa", "ad", "vcd","aba"]));

 console.log(allLongestStrings(["aa"]));

 console.log(allLongestStrings(["abc", "eeee", "abcd", "dcd"]));

 console.log(allLongestStrings(["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"]));

// ---- TOP ANSWERS ---- //

// function allLongestStrings(inputArray) {
//     'use strict';
//     let maxSize = Math.max(...inputArray.map(x => x.length));
//     return inputArray.filter(x => x.length === maxSize);
// }



// function allLongestStrings(inputArray) {
//     var result = [], len = 0;
//     for (var i=0; i<inputArray.length; i++) {
//         if (inputArray[i].length > len) {            
//             result.length = 0;
//             result.push(inputArray[i]);
//             len = inputArray[i].length;
//         }
//         else if (inputArray[i].length == len) { 
//             result.push(inputArray[i]);
//         }
//     }
//     return result;
// }



// function allLongestStrings(inputArray) {
//     var max = Math.max(...inputArray.map(function(i){ return i.length}));
//     return inputArray.filter(function(i){ return i.length === max});
// }
