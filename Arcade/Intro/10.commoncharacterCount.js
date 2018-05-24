console.log('linked');

// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

// PSEUDO
// break the strings and push into new arrays
// loop through the first new array
// find the place of the first letter & splice it from the second new array
// subtract the second argument length from the filtered array length
// gives the number of common characters

function commonCharacterCount(s1, s2) {

    let counter = 0;

    let strOne = s1.split("");
    let strTwo = s2.split("");

    console.log(strOne, strTwo);


    for (let i = 0; i < strOne.length; i++) {

        let idx = strTwo.indexOf(strOne[i]);

        if ( idx != -1){
            // console.log(idx);
            let removed = strTwo.splice(idx, 1);
            counter++;
            console.log(removed);

        }
        // console.log(counter);
    }
    return counter;
}


// answer: 3
console.log(commonCharacterCount( "aabcc", "adcaa"));

// // answer: 4
console.log(commonCharacterCount( "zzzz", "zzzzzzz"));

// // answer: 3
// console.log(commonCharacterCount("abca", "xyzbac"));

// // answer: 0
// console.log(commonCharacterCount("a", "b"));

// // answer: 1
// console.log(commonCharacterCount("a", "aaa"));