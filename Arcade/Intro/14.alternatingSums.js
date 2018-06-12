// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

// You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

// Example

// For a = [50, 60, 60, 45, 70], the output should be
// alternatingSums(a) = [180, 105].

// console.log('linked');

// function alternatingSums(a) {
//     // console.log(a)
    
//     let teamOne = 0;
//     let teamTwo = 0;

//     for(i = 0; i< a.length; i++){
//         if(i % 2 === 0){
//             teamOne += a[i];
//         } else {
//             teamTwo += a[i];
//             // console.log('odd');
//         }
//     }
//     console.log('1: ' + teamOne);
//     console.log('2: ' + teamTwo);
//     const arr = [teamOne, teamTwo];
//     return arr;
//     console.log(arr);
// }

// refactor

function alternatingSums(a){
    let teamOne = 0;
    let teamTwo = 0;

    for(i = 0; i < a.length; i++){
        (i % 2 === 0 ) ? teamOne += a[i] : teamTwo += a[i];
    }
    return [teamOne, teamTwo];
    console.log([teamOne, teamTwo]);
}


// ----- TOP ANSWERS -----


// function alternatingSums(a) {
//     var team1 = 0;
//     var team2 = 0;
    
//     for (var i = 0; i < a.length; i++) {
//         if (i % 2 == 0) {
//             team1 += a[i];
//         } else {
//             team2 += a[i];
//         }
//     }
    
//     return [team1, team2];
// }



// Test 1
// Input:
alternatingSums([50, 60, 60, 45, 70]);
// Expected Output:
// [180, 105]

// Test 2
// Input:
alternatingSums([100, 50]);
// Expected Output:
// [100, 50]

// Test 3
// Input:
alternatingSums([80]);
// Expected Output:
// [80, 0]
