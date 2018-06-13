// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// PSEUDO
// push * on the front of each array
// push * on the end of each array
// get the new length
// create a new element of *
// multiply by the length of the first element

// split('').string().

function addBorder(picture) {

    let arr = []
    let finalArr = []

    if(picture.length === 1) {

    } else {

        for (let i = 0; i < picture.length; i++) {
            // console.log(picture);
            // console.log(will give length)
            // const element = picture[i].split('').push('*');
            const element = picture[i].split('');
            element.push('*');
            element.unshift('*');
            // console.log(element);
            // arr.push('*');
            // console.log(firstStar);
            // console.log(element);
            arr.push(element);
        }

        // make into new strings
        for(let j = 0; j < arr.length; j++){
            const strings = arr[j].join('');
            finalArr.push(strings);
            // console.log(strings);
        }
        // adding stars
        // console.log(arr[1].length);
        const stars = ('*').repeat(arr[1].length);
        // console.log(stars);
        finalArr.push(stars);
        finalArr.unshift(stars);

        console.log(finalArr);
        return finalArr;

        // console.log(arr);
    }



}

// console.log('*');

// Example

// For

// addBorder(["abc",
//            "ded"]);
// the output should be

// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]



// Test 1
// Input:
addBorder(["abc", 
 "ded"]);
// Expected Output:
// ["*****", 
//  "*abc*", 
//  "*ded*", 
//  "*****"]


// Test 2
// Input:
addBorder(["a"]);
// Expected Output:
// ["***", 
//  "*a*", 
//  "***"]


// Test 4
// Input:
addBorder(["abcde",
 "fghij",
 "klmno",
 "pqrst",
 "uvwxy"]); 
// Expected Output:
// ["*******", 
//  "*abcde*", 
//  "*fghij*", 
//  "*klmno*", 
//  "*pqrst*", 
//  "*uvwxy*", 
//  "*******"]


// Test 5
// Input:
addBorder(["wzy**"]);
// Expected Output:
// ["*******", 
//  "*wzy***", 
//  "*******"]
