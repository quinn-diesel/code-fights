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

// answer 

// b =  array.slice().map( function(row){ return row.slice(); });

// console.log('linked');

// function matrixElementsSum(matrix) {

//     matrix.slice().map(
//         function(row){
//             console.log( row.slice());
//             // return row.slice();
//         }
//     )
// }

function matrixElementsSum(matrix){
    let priceTotal = 0;
    
    let bannedIndex = [];

    for ( let i = 0; i < matrix.length; i++){
        // console.log('matrix.length: ' + matrix.length)
        for(let j = 0; j < matrix[i].length; j++){
            // console.log('matrix.length[i][j]: ' + matrix[i][j])
            if(matrix[i][j] === 0 ){
                // console.log('bannedIndex: ' + bannedIndex)
                bannedIndex.push(j);
            } else if ( bannedIndex.indexOf(j) === -1){
                // console.log( 'bannedIndex.indexOf: ' + bannedIndex.indexOf(j))
                priceTotal += matrix[i][j];
            }
        }
    }
    console.log(priceTotal);
    return priceTotal;
}

// key for understanding remmember the indexOf is going to check if another index is in the banned area. this will return 0.

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



// ---- TOP ANSWERS ----- //

// function almostIncreasingSequence(seq) {
//     var bad=0
//     for(var i=1;i<seq.length;i++) if(seq[i]<=seq[i-1]) {
//       bad++
//       if(bad>1) return false
//       if(seq[i]<=seq[i-2]&&seq[i+1]<=seq[i-1]) return false
//     }
//     return true
//   }
  


// function almostIncreasingSequence(sequence) {    
//     if(sequence.length == 2) return true;

//     var error = 0;

//     for(var i = 0; i < sequence.length - 1; i++){
//         // if current value is greater than next value
//         if(sequence[i] >= sequence[i+1]){
//             // Test whether stepping back or forwards can bridge the hump or pothole
//             var noStepBack = sequence[i-1] && sequence[i-1] >= sequence[i+1];
//             var noStepFoward = sequence[i+2] && sequence[i] >= sequence[i+2];
//             // We only test for bridge gaps when i > 0
//             if(i > 0 && noStepBack && noStepFoward) {
//                 // Cannot step back over gap forwards or backwards
//                 // Counts as two errors ONLY WHEN BOTH PRESENT
//                 error+=2;
//             }else{
//                 // Typical error
//                 error++;
//             }
//         }

//         // Early dropout cause if you ever get more than one error, then its game over anyway
//         if(error > 1) return false;
//     }

//     return true;
// }


// function almostIncreasingSequence(sequence) {
//     let product = sequence[1] - sequence[0];
    
//     // console.log(product)
//     counter = 0;

//     for (var i = 0; i < sequence.length; i++) {
//         if ( sequence[i] <= sequence[i-1]){
//             counter++;
//             if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]){
//                 return false;
//             }
//         }
//     }

//     console.log(counter);
//     return counter <= 1;

// }