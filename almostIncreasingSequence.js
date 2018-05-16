// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Example

// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false;

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer sequence

// Guaranteed constraints:
// 2 ≤ sequence.length ≤ 105,
// -105 ≤ sequence[i] ≤ 105.

// [output] boolean

// Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.


// PSEUDO DO
// create assessment product of  sequence[0] to sequence[1]
// for loop to go through 
// if the product is not equal to 1 || 0 || -1 then counter ++
// if the counter is greater than 1 return false

console.log('linked');

function almostIncreasingSequence(sequence) {
    let product = sequence[1] - sequence[0];
    
    // console.log(product)
    counter = 0;

    for (var i = 0; i < sequence.length; i++) {
        if ( sequence[i] <= sequence[i-1]){
            counter++;
            if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]){
                return false;
            }
        }
    }

    console.log(counter);
    return counter <= 1;

}

    // return false
// console.log(almostIncreasingSequence([1, 3, 2, 1]));
    
    // return true
// console.log(almostIncreasingSequence([1, 3, 2]));

    // return false
console.log(almostIncreasingSequence([1, 2, 1, 2]));

//     // return false
// console.log(almostIncreasingSequence([1, 4, 10, 4, 2]));

//     // return true
// console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5]));

//     // return false
// console.log(almostIncreasingSequence([1, 1, 1, 2, 3]));

//     // return true
// console.log(almostIncreasingSequence([0, -2, 5, 6]));

//     // return false
console.log(almostIncreasingSequence([1, 2, 3, 4, 5, 3, 5, 6]));

//     // return false
console.log(almostIncreasingSequence([40, 50, 60, 10, 20, 30]));

//     // return true
// console.log(almostIncreasingSequence([1, 1]));

//     // return true
// console.log(almostIncreasingSequence([1, 2, 5, 3, 5]));

//     // return false
// console.log(almostIncreasingSequence([1, 2, 5, 5, 5]));

//     // return false
// console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5, 6, 1]));

//     // return true
// console.log(almostIncreasingSequence([1, 2, 3, 4, 3, 6]));

//     // return true
// console.log(almostIncreasingSequence([1, 2, 3, 4, 99, 5, 6]));

//     // return true
// console.log(almostIncreasingSequence([123, -17, -5, 1, 2, 3, 12, 43, 45]));