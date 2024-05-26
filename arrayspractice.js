// 1 Complete the function getEmptyArray such that it returns an empty array.

function getEmptyArray() {
    return [];
}

// Sample usage - do not modify
console.log(getEmptyArray());  // Output: []

// 2 Complete the function getNumberOfElements such that it returns the number of items contained in the elements array it receives.

/**
 * @param {array} elements
 */
function getNumberOfElements(elements) {
    return elements.length;
}

// Sample usage - do not modify
console.log(getNumberOfElements(['a', 'b', 'c'])); // 3
console.log(getNumberOfElements([])); // 0

// 3 Complete the function useCalculator such that it adds the "Calculator" string to the apps array it receives. Then, return the apps array.

/**
 * @param {array} apps
 */
function useCalculator(apps) {
    apps.push("Calculator");
    return apps;
}

// Sample usage - do not modify
console.log(useCalculator(["Clock", "Twitter"])); // ["Clock", "Twitter", "Calculator"]
console.log(useCalculator(["Weather"])); // ["Weather", "Calculator"]

// 4 Complete the function such that the app variable is added to the apps array. Then, return the apps array.

/**
 * @param {array} apps
 * @param {string} app
 */
function useApp(apps, app) {
    apps.push(app);
    return apps;
}

// Sample usage - do not modify
console.log(useApp(["Clock", "Twitter"], "Firefox")); // ["Clock", "Twitter", "Firefox"]
console.log(useApp([], "Safari")); // ["Safari"]

// 5 Complete the function getFirstApp such that it returns the first element from the apps array it receives as a parameter.

/**
 * @param {array} apps
 */
function getFirstApp(apps) {
    return apps[0];
}

// Sample usage - do not modify
console.log(getFirstApp(["Chrome", "Clock", "Twitter"])); // "Chrome"
console.log(getFirstApp(["Clock", "Contacts"])); // "Clock"

// 6 Complete the function getLastApp such that it returns the last element from the apps array it receives as a parameter.

/**
 * @param {array} apps
 */
function getLastApp(apps) {
    return apps[apps.length - 1];
}

// Sample usage - do not modify
console.log(getLastApp(["Chrome", "Clock", "Twitter"])); // "Twitter"
console.log(getLastApp(["Safari", "Contacts"])); // "Contacts"

// 7 Complete the function loopThroughElements such that it iterates over every item in the elements array it receives and logs it to the console (using console.log).

/**
 * @param {array} elements
 */
function loopThroughElements(elements) {
    elements.forEach(function(element) {
        console.log(element);
    });
}

// Sample usage - do not modify
loopThroughElements(["Sam", "Charlie", "Alex"]); // should log every name to the console

// 8 Complete the function logUserIds such that it iterates over every item in the userIds array it receives and logs it to the console (using console.log).

/**
 * @param {number[]} userIds
 */
function logUserIds(userIds) {
    userIds.forEach(function(userId) {
        console.log(userId);
    });
}

// Sample usage - do not modify
logUserIds([10, 15, 14]); // should log every userId to the console

// 9 Complete the function sumGrades such that it returns the sum of all the grades it receives as a parameter. We haven't seen reduce yet, so try to solve it using what you have learned so far.

/**
 * @param {number[]} grades
 */
function sumGrades(grades) {
    return grades.reduce((a, b) => a + b, 0);
}

// Sample usage - do not modify
console.log(sumGrades([15, 5, 10])); // 30
console.log(sumGrades([12, 10, 13, 19])); // 54

// 10 Complete the function sumPositiveNumbers such that it returns the sum of all positive numbers from the numbers parameter it receives.

/**
 * @param {number[]} numbers
 */
function sumPositiveNumbers(numbers) {
    return numbers.filter(n => n > 0).reduce((a, b) => a + b, 0);
}

// Sample usage - do not modify
console.log(sumPositiveNumbers([15, -5, 10])); // 25
console.log(sumPositiveNumbers([-3, 4, -2, 1])); // 5

// 11 Complete the function sumOddNumbers such that it returns the sum of all the odd numbers from the numbers parameter it receives.

/**
 * @param {number[]} numbers
 */
function sumOddNumbers(numbers) {
    return numbers.filter(n => n % 2 !== 0).reduce((a, b) => a + b, 0);
}

// Sample usage - do not modify
console.log(sumOddNumbers([15, 5, 10])); // 20
console.log(sumOddNumbers([2, 3, 4, 5, 6])); // 8
console.log(sumOddNumbers([-2, -3, 4, 5, 6])); // 2

// 12 Complete the function getDropdown such that it returns the following HTML that will fill the existing <select></select> element. The HTML that's returned should look like the following:
// It should start with: <option value="">Please select</option>
// Then, for every country you should have the <option> for that. For example, for the country "Netherlands", you should have the following <option value="netherlands">Netherlands</option>
// Notice how the value contains the country name in lower case. The remaining countries will need to show up as well following the same criteria.

/**
 * @param {string[]} countries
 */
export function getDropdown(countries) {
    let dropdownHTML = '<option value="">Please select</option>';
    countries.forEach(country => {
        dropdownHTML += `<option value="${country.toLowerCase()}">${country}</option>`;
    });
    return dropdownHTML;
}
