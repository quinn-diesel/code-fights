// After they became famous, the CodeBots all decided to move to a new building and live together. The building is represented by a rectangular matrix of rooms. Each cell in the matrix contains an integer that represents the price of the room. Some rooms are free (their cost is 0), but that's probably because they are haunted, so all the bots are afraid of them. That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable for the bots to live in.

// Help the bots calculate the total price of all the rooms that are suitable for them.

// Example

// For
// matrix = [[0, 1, 1, 2], 
//           [0, 5, 0, 0], 
//           [2, 0, 3, 3]]
// the output should be
// matrixElementsSum(matrix) = 9.

// Here's the rooms matrix with unsuitable rooms marked with 'x':

// [[x, 1, 1, 2], 
//  [x, 5, x, x], 
//  [x, x, x, x]]
// Thus, the answer is 1 + 5 + 1 + 2 = 9.

// For
// matrix = [[1, 1, 1, 0], 
//           [0, 5, 0, 1], 
//           [2, 1, 3, 10]]
// the output should be
// matrixElementsSum(matrix) = 9.

// Here's the rooms matrix with unsuitable rooms marked with 'x':

// [[1, 1, 1, x], 
//  [x, 5, x, x], 
//  [x, 1, x, x]]
// Note that the free room in the first row make the full column unsuitable for bots.

// Thus, the answer is 1 + 1 + 1 + 5 + 1 = 9.


// Want to slice out the first number of each array
// make into new array
// remove any numbers after 0
// add the total of the arrays up
// total

console.log('linked');

function matrixElementsSum(matrix) {

    let arrOne = []
    
    for ( i = 0; i > matrix.length; i++){
        for (let j = 0; j < array.length; j++) {
            // const element = arrOne.push(arr(j));
            console.log(element);
        }
    }

    console.log(arrOne);
}

// for (let index = 0; 
//     index < array.length; index++) {
//     const element = array[index];
    
// }


console.log(matrixElementsSum([[0,1,1,2], 
        [0,5,0,0],
        [2,0,3,3]]));

// answer 9


// matrix: [[1,1,1,0], 
//         [0,5,0,1], 
//         [2,1,3,10]]
// answer 9


// matrix: [[1,1,1], 
//          [2,2,2], 
//          [3,3,3]]

 // answer 18

//  matrix: [[0]]
// answer 0