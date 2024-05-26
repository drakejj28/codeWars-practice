// You will be given an array of objects representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];
// your function should return number 1.

// If, there are no JavaScript developers from Europe then your function should return 0.

// this function counts the number of JavaScript developers from Europe in a given list
function countDevelopers(list) {
    // the filter method is used to create a new array with all elements that pass the test implemented by the provided function
    // the test checks if the developer's language is JavaScript and if the developer's continent is Europe
    var jsDevsFromEurope = list.filter(dev => dev.language === 'JavaScript' && dev.continent === 'Europe');
    
    // the length property of an array returns the number of elements in the array
    // the length of jsDevsFromEurope is the number of JavaScript developers from Europe
    return jsDevsFromEurope.length;
  }

  var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];
  
  console.log(countDevelopers(list1));  // Output: 1

  // Research and knowledge sources
  // https://www.w3schools.com/jsref/jsref_filter.asp
  // https://www.freecodecamp.org/news/javascript-filter-method/
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter