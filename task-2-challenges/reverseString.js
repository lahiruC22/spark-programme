/**
 * Reverses a given string.
 *
 * @param {string} str - The string to be reversed.
 * @returns {string} - The reversed string.
 *
 * @example
 * console.log(reverseString("hello")); // Output: "olleh"
 * 
 * This function first split the string into an array of characters using the split() method.
 * Then, it reverses the array using the reverse() method.
 * Finally, it joins the array back into a string using the join() method.
 * All of these methods are chanined togethor and they are inbuilt methods of JavaScript.
 */
function reverseString(str){
    return str.split("").reverse().join("");
}

// Test cases
console.log(reverseString("This is the reverse string."));
console.log(reverseString("Is john okay?"));
console.log(reverseString("a"));
console.log(reverseString(""));