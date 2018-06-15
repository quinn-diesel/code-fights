
// You have a string s that consists of English letters, punctuation marks, whitespace characters, and brackets. It is guaranteed that the parentheses in s form a regular bracket sequence.

// Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair. The results string should not contain any parentheses.

// Example

// For string s = "a(bc)de", the output should be
// reverseParentheses(s) = "acbde".

function reverseParentheses(s) {
    if (s.includes('(')){
        // console.log(reverseParentheses(reverseOnce(s)))
        return reverseParentheses(reverseOnce(s));
    } else {     
        // console.log(s);
        return s;
    }
}

function reverseOnce(s){
    var regexp = /\(([^()]*)\)/i;
    // console.log(regexp)
    var subStr = regexp.exec(s)[1];
    console.log(subStr)
    subStr = subStr.split('').reverse().join('');
    console.log(s.replace(regexp, subStr));
    return s.replace(regexp, subStr);
}




// ---- TESTS ----- //

// Test 1
// Input:
// s: "a(bc)de"
reverseParentheses("a(bc)de")
// Expected Output:
// "acbde"


// Test 2
// Input:
// s: "a(bcdefghijkl(mno)p)q"
// Expected Output:
// "apmnolkjihgfedcbq"


// Test 3
// Input:
// s: "co(de(fight)s)"
// Expected Output:
// "cosfighted"

// Test 4
// Input:
// s: "Code(Cha(lle)nge)"
// Expected Output:
// "CodeegnlleahC"


// Test 5
// Input:
// s: "Where are the parentheses?"
// Expected Output:
// "Where are the parentheses?"


// Test 6
// Input:
// s: "abc(cba)ab(bac)c"
// Expected Output:
// "abcabcabcabc"


// Test 7
// Input:
// s: "The ((quick (brown) (fox) jumps over the lazy) dog)"
// Expected Output:
// "The god quick nworb xof jumps over the lazy"
