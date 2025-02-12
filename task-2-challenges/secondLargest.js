/**
 * Returns the second largest element in an array of numbers.
 *
 * @param {number[]} arr - The array of numbers to search through.
 * @returns {number|null} - The second largest number in the array, or null if the array has fewer than two elements.
 *
 * The function works as follows:
 * 1. First checks if the array has fewer than two elements. If so, it returns null because a second largest element cannot be determined.
 * 2. Initializes two variables, `largest` and `secondLargest`, to negative infinity. These will hold the largest and second largest values found in the array.
 * 3. Iterates over each number in the array using a `for...of` loop.
 * 4. For each number, it checks if the number is greater than `largest`. If so, it updates `secondLargest` to be `largest` and then updates `largest` to be the current number.
 * 5. If the number is not greater than `largest` but is greater than `secondLargest` and not equal to `largest`, it updates `secondLargest` to be the current number.
 * 6. After iterating through the array, it checks if `secondLargest` is still negative infinity. If so, it returns null, indicating that there was no valid second largest element.
 * 7. Otherwise, it returns the value of `secondLargest`.
 */

function secondLargestElement(arr) {

    if (arr.length < 2) return null;

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (const num of arr) {

        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }

    return secondLargest === -Infinity ? null : secondLargest;

}

console.log(secondLargestElement([12, 5, 7, 17, 8, 17]));
console.log(secondLargestElement([5, 5, 5, 5]));
console.log(secondLargestElement([-3, -1, -2]));
console.log(secondLargestElement([42]));