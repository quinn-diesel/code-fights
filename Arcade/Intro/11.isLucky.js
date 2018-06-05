// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.

// ----- ANSWER -----

// PSEUDO 
// convert to array 

function isLucky(n) {
    
    // half n length
    const string = n.toString();
    const length = string.length;
    const half = (length / 2);

    const arr = n.toString().split('');

    for(i = 0; i < half; i++){
       let firstHalf =  i + (i + 1);
        console.log('firstHalf: ' + firstHalf);
        return firstHalf;
    }

    console.log('half: ' = half);

    for(i = half; i < length; i++){
        let secondHalf = i + (i + 1);
        console.log('secondHalf: ' + secondHalf);
        return 
    }

    if(firstHalf === lastHalf){
        return true;
    } else {
        return false;
    }
    // console.log(arr);
    // console.log(half);
}




// ---- TESTS ----- 

console.log(isLucky(1230));

// Test 1
// Input:
// n: 1230
// Expected Output:
// true


// Test 2
// Input:
// n: 239017
// Expected Output:
// false

// Test 5
// Input:
// n: 134008
// Expected Output:
// true


// Test 4
// Input:
// n: 10
// Expected Output:
// false


// Test 5
// Input:
// n: 11
// Expected Output:
// true


// Test 6
// Input:
// n: 1010
// Expected Output:
// true


// Test 7
// Input:
// n: 261534
// Expected Output:
// false


// Test 8
// Input:
// n: 100000
// Expected Output:
// false


// Test 9
// Input:
// n: 999999
// Expected Output:
// true


// Test 10
// Input:
// n: 123321
// Expected Output:
// true


