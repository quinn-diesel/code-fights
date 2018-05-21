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

    let longest = [];

    for(i = 0; i < inputArray.length; i++ ){
        const stringOne =  inputArray[i].split(" ").join("");
        const stringTwo =  inputArray[i+1].split(" ").join("");

        if (stringOne.length <= stringTwo.length){
           return longest.push(stringOne)
        }
        // console.log(stringOne.length)
        // console.log(stringTwo.length)

    }
    // console.log(longest)
}



console.log(allLongestStrings(["aba", "aa", "ad", "vcd","aba"]))

//  console.log(allLongestStrings("aa"]));

//  console.log(allLongestStrings(["abc", "eeee", "abcd", "dcd"]));

//  console.log(allLongestStrings(inputArray: ["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"]));

