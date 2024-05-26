// 1 Implement the function canVote such that it returns true whenever the age is 18 or above and false in all other scenarios.

/**
 * @param {number} age
 */
function canVote(age) {
    return age >= 18;
}

// Sample usage - do not modify
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(10)); // false

// 2 Complete the function getNextAge such that it returns the age next year (by adding 1 to the current age).

/**
 * @param {string} age
 */
export function getNextAge(age) {
    if (age === "") {
        return 0;
    }
    return Number(age) + 1;
}

// 3 Complete the function getDescription such that it returns the first 10 characters of the text parameter it receives followed by an ellipsis. An ellipsis is the dot character written 3 times: ...

/**
 * @param {string} text
 */
export function getDescription(text) {
    if (text.length <= 10) {
        return text;
    }
    return text.substring(0, 10) + "...";
}

// 4 Implement the function canVote such that it returns true whenever the age is 18 or above and false in all other scenarios. You should not use an if condition (or ternary).

/**
 * @param {number} age
 */
function canVote(age) {
    return age >= 18;
}

// Sample usage - do not modify
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(17)); // false

// 5 Complete the function evenOrOdd such that it returns the string "even" when the number parameter it receives is even and "odd" otherwise. Can you make it work with negative numbers too?

/**
 * @param {number} number
 */
export function evenOrOdd(number) {
    return number % 2 === 0 ? "even" : "odd";
}