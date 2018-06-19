// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

// Example

// For a = [1, 2, 3] and b = [1, 2, 3], the output should be
// areSimilar(a, b) = true.

// The arrays are equal, no need to swap any elements.

// For a = [1, 2, 3] and b = [2, 1, 3], the output should be
// areSimilar(a, b) = true.

// We can obtain b from a by swapping 2 and 1 in b.

// For a = [1, 2, 2] and b = [2, 1, 1], the output should be
// areSimilar(a, b) = false.

// Any swap of any two elements either in a or in b won't make a and b equal.

// console.log('linked');

// want to loop through the first array
// check to see if the value is in b
// if it is, need to return where it is in the array
// pop off that value
// at the end if there is nothing left with b then return true,
// else return false

function areSimilar(a, b) {

    if (a === b) {
		for (var i = 0; i < a.length; i++) {
            if (areSimilar(a[i], b[i]) === false) {
            console.log('false')
            return false;}
		}
	} else {
		for (var key in a) {
			if (a.hasOwnProperty(key)) {
				if (areSimilar(a[key], a[key]) === false) return false;
			}
		}
	}

}

// ------  LONG ANSWER -------

// var areSimilar = function (value, other) {

// 	// Get the value type
// 	var type = Object.prototype.toString.call(value);

// 	// If the two objects are not the same type, return false
// 	if (type !== Object.prototype.toString.call(other)) return false;

// 	// If items are not an object or array, return false
// 	if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

// 	// Compare the length of the length of the two items
// 	var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
// 	var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
// 	if (valueLen !== otherLen) return false;

// 	// Compare two items
// 	var compare = function (item1, item2) {

// 		// Get the object type
// 		var itemType = Object.prototype.toString.call(item1);

// 		// If an object or array, compare recursively
// 		if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
// 			if (!isEqual(item1, item2)) return false;
// 		}

// 		// Otherwise, do a simple comparison
// 		else {

// 			// If the two items are not the same type, return false
// 			if (itemType !== Object.prototype.toString.call(item2)) return false;

// 			// Else if it's a function, convert to a string and compare
// 			// Otherwise, just compare
// 			if (itemType === '[object Function]') {
// 				if (item1.toString() !== item2.toString()) return false;
// 			} else {
// 				if (item1 !== item2) return false;
// 			}

// 		}
// 	};

// 	// Compare properties
// 	if (type === '[object Array]') {
// 		for (var i = 0; i < valueLen; i++) {
// 			if (compare(value[i], other[i]) === false) return false;
// 		}
// 	} else {
// 		for (var key in value) {
// 			if (value.hasOwnProperty(key)) {
// 				if (compare(value[key], other[key]) === false) return false;
// 			}
// 		}
// 	}

// 	// If nothing failed, return true
// 	return true;

// };


// Test 1
// Input:
// areSimilar([1, 2, 3], [1, 2, 3])
// Expected Output:
// true


// Test 2
// Input:
areSimilar([1, 2, 3], [2, 1, 3])
// Expected Output:
// true


// Test 3
// Input:
// areSimilar([1, 2, 2], [2, 1, 1])
// Expected Output:
// false


// Test 4
// Input:
// areSimilar([1, 1, 4], [1, 2, 3])
// Expected Output:
// false


// Test 5
// Input:
// areSimilar([1, 2, 3], [1, 10, 2])
// Expected Output:
// false


// Test 6
// Input:
// areSimilar([2, 3, 1], [1, 3, 2])
// Expected Output:
// true

//Test 7
// Input:
// areSimilar([2, 3, 9], [10, 3, 2])
// Expected Output:
// false


// Test 8
// Input:
// areSimilar([4, 6, 3], [3, 4, 6])
// Expected Output:
// false


// Test 9
// Input:
// areSimilar([832, 998, 148, 570, 533, 561, 894, 147, 455, 279], [832, 998, 148, 570, 533, 561, 455, 147, 894, 279])
// Expected Output:
// true

// Test 10
// Input:
// areSimilar([832, 998, 148, 570, 533, 561, 894, 147, 455, 279], [832, 570, 148, 998, 533, 561, 455, 147, 894, 279])
// Expected Output:
// false
