// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// PSEUDO
// push * on the front of each array
// push * on the end of each array
// get the new length
// create a new element of *
// multiply by the length of the first element

// split('').string().

function addBorder(picture) {

    for (let i = 0; i < picture.length; i++) {
        // console.log(picture);
        // console.log(will give length)
        // const element = picture[i].split('').push('*');
        const element = picture[i].split('').join();
        // const firstStar = element.push('*');
        // console.log(firstStar);
        console.log(element);
        
    }

}


// Example

// For

addBorder(["abc",
           "ded"]);
// the output should be

// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]



// Test 1
// Input:
// picture: ["abc", 
//  "ded"]
// Expected Output:
// ["*****", 
//  "*abc*", 
//  "*ded*", 
//  "*****"]


// Test 2
// Input:
// picture: ["a"]
// Expected Output:
// ["***", 
//  "*a*", 
//  "***"]


// Test 4
// Input:
// picture: ["abcde", 
//  "fghij", 
//  "klmno", 
//  "pqrst", 
//  "uvwxy"]
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
// picture: ["wzy**"]
// Expected Output:
// ["*******", 
//  "*wzy***", 
//  "*******"]
