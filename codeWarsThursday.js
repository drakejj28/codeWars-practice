// Given the following input array:

// var list1 = [
//     { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
//     { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
//   ];
//   write a function that adds the username property to each object in the input array:
  
//   [
//     { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
//       username: 'emilyn1990' },
//     { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
//       username: 'nore2000' }
//   ]
//   The value of the username property is composed by concatenating:
  
//   firstName in lower-case;
//   first letter of the lastName in lower-case; and
//   the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.
//   Notes:
  
//   The input array will always be valid and formatted as in the example above.
//   Age is represented by a number which can be any positive integer.
//   Lastname will always be one upper-cased letter followed by dot, e.g. 'N.'
//   Order of the objects in the array should be maintained but order of the properties in the individual objects does not matter.

function addUsername(list) {
    // gets the current year
    var currentYear = new Date().getFullYear();
  
    // uses the map method to create a new array
    // goes through each developer in the list, returns a new object that includes all properties of the original developer object
    // adds a new property username with the required string value
    return list.map(dev => ({
      ...dev,
      username: `${dev.firstName.toLowerCase()}${dev.lastName[0].toLowerCase()}${currentYear - dev.age}`
    }));
  }
  
  var list1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
  ];
  
  console.log(addUsername(list1));

  // https://stackoverflow.com/questions/1408289/how-can-i-do-string-interpolation-in-javascript
  // https://flexiple.com/javascript/javascript-string-interpolation
  // https://stackoverflow.com/questions/1292394/what-is-the-need-for-the-javascript-function-getutcfullyear
  // https://www.w3schools.com/jsref/jsref_toLowerCase.asp
  // https://www.w3schools.com/jsref/jsref_getfullyear.asp
