// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

// console.log('linked sort');

// PSEUDO
// assess each element in the array by themselves
// log out an array of the indices each -1
// remove all the -1ns
// sort the remaining array
// push -1ns back into the arrays

function sortByHeight(a) {
    // const constSort = a.sort();
    // let letSort = a.sort();
    
    // console.log(constSort);
    // console.log(letSort);
    
    // console.log(...a)

    
    for (i = 0; i< a.length; i++){
        const index = a.indexOf(-1, 0);
        console.log(index);
        
        if(i === -1){
            console.log(a.splice(index));
        }
    }

}



// ---- TESTS ----- //

// Test 1
// Input:
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
// Expected Output:
// [-1, 150, 160, 170, -1, -1, 180, 190]

// Test 2
// Input:
// a: [-1, -1, -1, -1, -1]
// Expected Output:
// [-1, -1, -1, -1, -1]

// Test 3
// Input:
// a: [4, 2, 9, 11, 2, 16]
// Expected Output:
// [2, 2, 4, 9, 11, 16]

