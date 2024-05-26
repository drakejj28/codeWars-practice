// 1 Complete the function convertNumberToString such that it converts the number it receives into a string.

/**
 * @param {number} number
 */
function convertNumberToString(number) {
    return number.toString();
}

// Sample usage - do not modify
console.log(convertNumberToString(42)); // "42"
console.log(convertNumberToString(97)); // "97"
console.log(convertNumberToString(11)); // "11"

// 2 Complete the function getNextAge such that it returns the age next year (by adding 1 to the current age).

/**
 * @param {string} age
 */
export function getNextAge(age) {
    return Number(age) + 1;
}

// 3 Complete the function getBoxWidth such that it returns the width (as a number) from the string it receives.

/**
 * @param {string} value
 */
export function getBoxWidth(value) {
    return parseInt(value);
}

// 4 Complete the function getDivisionRemainderBy2 such that it returns the division remainder of the number it receives by 2. This means that it should return the division remainder by 2.

/**
 * @param {number} number
 */
export function getDivisionRemainderBy2(number) {
    return number % 2;
}

