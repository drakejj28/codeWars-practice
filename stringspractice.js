// 1 Complete the function getCharCount such that it returns the number of characters in the str parameter that it receives.

/**
 * @param {string} str
 */
function getCharCount(str) {
    return str.length;
}

// Sample usage - do not modify
console.log(getCharCount("Sam")); // 3
console.log(getCharCount("Alex 123")); // 8
console.log(getCharCount("Charley is here")); // 15

// 2 Complete the function shoutMyName such that it returns the name parameter it receives all in upper case.

/**
 * @param {string} name
 */
function shoutMyName(name) {
    return name.toUpperCase();
}

// Sample usage - do not modify
console.log(shoutMyName("Sam")); // "SAM"
console.log(shoutMyName("Charley")); // "CHARLEY"
console.log(shoutMyName("alex")); // "ALEX"

// 3 Complete the function lowerName such that it returns the name parameter it receives all in lower case.

/**
 * @param {string} name
 */
function lowerName(name) {
    return name.toLowerCase();
}

// Sample usage - do not modify
console.log(lowerName("Sam")); // "sam"
console.log(lowerName("ALEX")); // "alex"

// 4 Complete the function getFirstCharacter such that it returns the first character of the name parameter it receives.

/**
 * @param {string} name
 */
function getFirstCharacter(name) {
    return name.charAt(0);
}

// Sample usage - do not modify
console.log(getFirstCharacter("Amsterdam")); // "A"
console.log(getFirstCharacter("Japan")); // "J"

// 5 Complete the function getLastCharacter such that it returns the last character of the name parameter it receives.

/**
 * @param {string} name
 */
function getLastCharacter(name) {
    return name.charAt(name.length - 1);
}

// Sample usage - do not modify
console.log(getLastCharacter("Amsterdam")); // "m"
console.log(getLastCharacter("Japan")); // "n"

// 6 Complete the function skipFirstCharacter such that it returns all the characters except the first one from the text parameter it receives.

/**
 * @param {string} text
 */
function skipFirstCharacter(text) {
    return text.substring(1);
}

// Sample usage - do not modify
console.log(skipFirstCharacter("Xcode")); // "code"
console.log(skipFirstCharacter("Hello")); // "ello"

// 7 Complete the function getDescription such that it returns the first 10 characters of the text parameter it receives.

/**
 * @param {string} text
 */
export function getDescription(text) {
    return text.substring(0, 10);
}

// 8 Complete the function concatInitials such that it returns the firstNameInitial followed by the lastNameInitial.

/**
 * @param {string} firstNameInitial
 * @param {string} lastNameInitial
 */
function concatInitials(firstNameInitial, lastNameInitial) {
    return firstNameInitial + lastNameInitial;
}

// Sample usage - do not modify
console.log(concatInitials("J", "D")); // "JD"
console.log(concatInitials("S", "B")); // "SB"

// 9 Complete the function getDescription such that it returns the first 10 characters of the text parameter it receives followed by an ellipsis. An ellipsis is the dot character written 3 times: ...

/**
 * @param {string} text
 */
export function getDescription(text) {
    return text.substring(0, 10) + "...";
}

//  10 Complete the function sayHello such that it interpolates the variable name into a string "Hello name".

/**
 * @param {string} name
 */
function sayHello(name) {
    return `Hello ${name}`;
}

// Sample usage - do not modify
console.log(sayHello("Alex")); // "Hello Alex"
console.log(sayHello("Sam")); // "Hello Sam"

// 11 Complete the function getFullName such that it returns the full name of the person using interpolation.

/**
 * @param {string} firstName
 * @param {string} lastName
 */
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// Sample usage - do not modify
console.log(getFullName("Alex", "Smith")); // "Alex Smith"
console.log(getFullName("Sam", "Johnson")); // "Sam Johnson"

// 12 Complete the function getMultilineString such that it returns the following multiline string:
// I am learning JavaScript  
// and I found it to be  
// quite fun!

function getMultilineString() {
    return `I am learning JavaScript  
    and I found it to be  
    quite fun!`;
    }
    
    
    // Sample usage - do not modify
    console.log(getMultilineString());

// 13 Complete the function renderTableRow such that it returns the following HTML:
/* <tr>
    <td>label here</td>
    <td>value here</td>
</tr> */

/**
 * @param {string} label
 * @param {string} value
 */
export function renderTableRow(label, value) {
    return `<tr>
    <td>${label}</td>
    <td>${value}</td>
</tr>`;
}

// 14 Complete the function capitalize such that it capitalizes the word parameter it receives. There's no capitalize method in JavaScript, so you have to write it yourself.

/**
 * @param {string} word
 */
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Sample usage - do not modify
console.log(capitalize("sam")); // "Sam"
console.log(capitalize("ALEX")); // "Alex"
console.log(capitalize("chARLie")); // "Charlie"


