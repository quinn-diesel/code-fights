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

// function sortByHeight(a) {
//     // const constSort = a.sort();
//     // let letSort = a.sort();
    
//     // console.log(constSort);
//     // console.log(letSort);
    
//     // console.log(...a)

//     let bigs = a.filter(function (x){
//         console.log( x > 1)
//     })
    
//     for (i = 0; i< a.length; i++){
//         // const index = a.indexOf(-1, 0);
//         // console.log(index);
        
//         // if(i === -1){
//         //     console.log(a.splice(index));
//         // }
//         let bigVar = [];
//         console.log(parseFloat(i));
//         // if (i >= 1){
//         //     bigVar.push(i);
//         //     console.log(bigVar);
//         // }
//     }

// }

// ----- TOP RESEARCHED ANSWERS ------
i=0

// sortByHeight = a => a.map(v => v < 0 ? v : b[i++], b = a.filter(v => v >= 0).sort((a,b) => a-b))

function sortByHeight(a) {
    var treePos = [];
    var heights = [];
    for(var i = 0; i < a.length; i++) {
      if(a[i] === -1) {
          treePos.push(i);
      } else {
          heights.push(a[i]);
      }
    }
    var sortedHeights = heights.sort(function(aa, bb) {
        return aa - bb;
    });
    for(var j = 0; j < a.length; j++) {
      if(treePos.indexOf(j) !== - 1) {
        sortedHeights.splice(j, 0, -1);
      }
    }
    return sortedHeights;
}

// sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);


// ---- TESTS ----- //

// Test 1
// Input:
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
// Expected Output:
// [-1, 150, 160, 170, -1, -1, 180, 190]

// Test 2
// Input:
console.log([-1, -1, -1, -1, -1]);
// Expected Output:
// [-1, -1, -1, -1, -1]

// Test 3
// Input:
console.log([4, 2, 9, 11, 2, 16]);
// Expected Output:
// [2, 2, 4, 9, 11, 16]

