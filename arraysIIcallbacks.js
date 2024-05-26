// 1 Complete the function getPositiveTemperatures such that it returns an array containing the positive temperatures (the temperatures that are above 0).

/**
 * @param {number[]} temperatures
 */
function getPositiveTemperatures(temperatures) {
    return temperatures.filter(temp => temp > 0);
}

// Sample usage - do not modify
console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]
console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]

// 2 Complete the function getFreezingTemperatures such that it returns an array containing the freezing temperatures (the temperatures that are below 0).

/**
 * @param {number[]} temperatures
 */
function getFreezingTemperatures(temperatures) {
    return temperatures.filter(temp => temp < 0);
}

// Sample usage - do not modify
console.log(getFreezingTemperatures([-5, 12, 3])); // [-5]
console.log(getFreezingTemperatures([1, -3, -2, 4, 10])); // [-3, -2]

// 3 Complete the function getYear such that it returns the searchYear (passed as 2nd parameter) when it's found in the array. Otherwise, it should return undefined.

/**
 * @param {number[]} years
 * @param {number} searchYear
 */
function getYear(years, searchYear) {
    return years.find(year => year === searchYear);
}

// Sample usage - do not modify
console.log(getYear([2019, 2020, 2021], 2020)); // 2020
console.log(getYear([2019, 2020, 2021], 1990)); // undefined

// 4 Complete the function getOddYears such that it returns all the years that are odd from the years parameter it receives.

/**
 * @param {number[]} years
 */
function getOddYears(years) {
    return years.filter(year => year % 2 !== 0);
}

// Sample usage - do not modify
console.log(getOddYears([2019, 2020, 2021])); // [2019, 2021]
console.log(getOddYears([2000, 2015, 2018, 2020])); // [2015]

// 5 Complete the function isAppUsed such that it returns true when the app parameter it receives exists in the apps parameter, and false otherwise.

/**
 * @param {string[]} apps
 * @param {string} app
 */
function isAppUsed(apps, app) {
    return apps.includes(app);
}

// Sample usage - do not modify
console.log(isAppUsed(["Twitter", "Calculator"], "Calculator")); // true
console.log(isAppUsed(["Clock", "Calculator"], "Safari")); // false

// 6 Complete the function isAppUsed such that it returns true when the app parameter it receives exists in the apps parameter, and false otherwise.

/**
 * @param {string[]} apps
 * @param {string} app
 */
function isAppUsed(apps, app) {
    return apps.includes(app);
}

// Sample usage - do not modify
console.log(isAppUsed(["Twitter", "Calculator"], "Calculator")); // true
console.log(isAppUsed(["Clock", "Calculator"], "Safari")); // false

// 7 Complete the function getStringSizes such that it returns an array of the number of characters for every string it receives in the strings parameter.

/**
 * @param {string[]} strings
 */
function getStringSizes(strings) {
    return strings.map(string => string.length);
}

// Sample usage - do not modify
console.log(getStringSizes(["a", "abc"])); // [1, 3]
console.log(getStringSizes(["Sam", "Alex", "Charlie"])); // [3, 4, 7]
console.log(getStringSizes(["Hello", "Blue"])); // [5, 4]


