
// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

// For a = [2, 1, 3, 5, 3, 2], the output should be
// firstDuplicate(a) = 3.

// There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.

// For a = [2, 4, 3, 5, 1], the output should be
// firstDuplicate(a) = -1.


// ----- ANSWER ----- 
function firstDuplicate(a) {
    const arr = {};
    let result = -1;
    
    for(let i = 0; i < a.length; i++){
        const el = a[i];
        const duplicate = arr[el];
        if (duplicate){
            result = el;
            break;
        }
        arr[el] = true;
    };
    return result;
}


// ----- NOTES FROM CHARLEY -----
// use the foreach loop as it better to read 
// the for loop however is better because it enables you to break out of the loop when the condition has been met
// remember to put thing
// ES6 will use const a lot more than let
// usually you will not change let. although it will probably be used more in a commercial sense

