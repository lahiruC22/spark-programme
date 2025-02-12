/**
 * Checks if a given string is a palindrome.
 *
 * This function ignores case, spaces, and punctuation.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} - Returns true if the string is a palindrome, false otherwise.
 *
 * The function works as follows:
 * 1. It first removes all non-alphanumeric characters from the string and converts it to lowercase.
 * 2. It then compares the cleaned string to its reverse.
 * 3. If they are the same, the function returns true, indicating that the string is a palindrome.
 * 4. Otherwise, it returns false.
 */
function isPalindrome(str) {

    const correctedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const reversedStr = correctedStr.split('').reverse().join('');

    return cleanedStr === reversedStr;
}

console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("racecar"))
console.log(isPalindrome("hello"));
