

// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

// Example

// For statues = [6, 2, 3, 8], the output should be
// makeArrayConsecutive2(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.

// ----- PSEUDO CODE ----- //
// need to organise in the order of smallest to largest
// make a new array adding in the new numbers
// add the same number to a new array
// finish the loop when the array is finished
// count the length of the new array
// return that length

function compareNumbers (a,b){
    return a - b;
}



var orderArr = [];

// ----- SORTING THE ARRAY ----- //
function makeArrayConsecutive2(statues) {
    
    const order = statues.sort(compareNumbers);

    orderArr.push.order;
    // console.log(order);
    // return order;
}

console.log(orderArr);

// ----- EVALUATE EACH ELEMENT OF THE ARRAY ----- //

var eval = [];

for (let index = 0; index < makeArrayConsecutive2.length; index++) {

    eval.push(makeArrayConsecutive2[index + 1] - makeArrayConsecutive2[index] );

}

console.log(eval);



// function missing (makeArrayConsecutive2){

//     var split = console.log(makeArrayConsecutive2.split());

//     console.log(makeArrayConsecutive2);

//     // take the split

//     // split();
//     // if ( diff > 1){
//     //     console.log('the number difference' + diff);
//     // }
// }


// ----- ANSWERS ----- //

makeArrayConsecutive2([6, 2, 3, 8]);
// return 3

// makeArrayConsecutive2([0, 3]);
// // return 2

// makeArrayConsecutive2([5, 4, 6]);
// // return 0

// makeArrayConsecutive2([6, 3]);
// // return 2

// makeArrayConsecutive2([1])
// // return 0

// console.log('missing' + missing());