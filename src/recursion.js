// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n, product=1) {
  // base case
  if(n < 0 ){
    return null;
  } else if (n === 0){
    return product;
  }
  // recursion
  product *= n;

  return factorial(n - 1, product);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, add=0) {
  // base case
  if (array.length === 0){
    return add;
  }
  // recursion
  add += array[0];

  return sum(array.slice(1), add);
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  // skip for now
};

// 4. Check if a number is even.
var isEven = function(n) {
  // use absolute value to make negative numbers work
  n = Math.abs(n);
  
  // base case
  if (n === 1){
    return false;
  } else if (n === 0){
    return true;
  }
  // recursion
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n, sum=0) {
  // if positive number
  if (n >= 0){
    // base case
    if (n === 0){
      return sum;
    }
    // recursion
    sum += n - 1;
  
    return sumBelow(n - 1, sum);
  } else {  // if negative 
    // base case taken care of above
    // recursion
    sum += n + 1;

    return sumBelow(n + 1, sum);
  } 
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, output=[]) {
  // base / edge cases
  if (x === y){
    return output;
  } else if (x === y - 1){
    return output;
  } 
  
  if (x < y){
    // base case handled above
    // recursion
    output.push(x + 1);
  
    return range(x + 1, y, output)

  } else if (x > y){
    // base case
    if (x === y + 1){
      return output;
    }
    // recursion
    output.push(x - 1);

    return range(x - 1, y, output);
  }
  
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp, product=1) {
  // base case
  if (exp === 0){
    return product / 1.0000;
  }

  if (exp > 0){
    // recursion
    product *= base;
  
    return exponent(base, exp - 1, product);
  } else if (exp < 0){
    
    // recursion
    product *= (1 / base);

    return exponent(base, exp + 1, product);
  }
  // final return returns inexact number but is essentially the same
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true  1 = 1 * 1
// powerOfTwo(16); // true  16 = 4 * 4 // 16 ^ (1/2) = 4 
// powerOfTwo(10); // false  10 = 5 * 2
var powerOfTwo = function(n, test=1) {
  // base case
  if (n === 0 || test * test > n){
    return false;
  } else if (n === 2 || test * test === n){
    return true;
  }

  // recursion
  test += 1;

  return powerOfTwo(n, test);
};

// 9. Write a function that accepts a string and reverses it.
var reverse = function(string, revString='') {
  // base case 
  if (string.length === 0){
    return revString;
  }
  // recursion
  revString += string[string.length - 1];

  return reverse(string.slice(0, string.length - 1), revString);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function (string) {
  // standardize string
  let charsOnly = string.replace(/\s/g, "").toLowerCase()
  
  // base case
  if (charsOnly.length <= 1){
    return true;
  }
  // recursion
  if (charsOnly[0] !== charsOnly[charsOnly.length -1]){
    return false;
  }
    
  return palindrome(charsOnly.slice(1, charsOnly.length -1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1 ... 2r1
// modulo(17,5) // 2 ... 3r2
// modulo(22,6) // 4 ... 3r4
var modulo = function(x, y, remainder=0) {
  // skip for now
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y, product=0) {
  if (y === 0){
    return product;
  } else if (x === 0){
    return 0;
  }
  if ((x < 0 && y < 0)){
    product -= x;

    return multiply(x, y + 1, product);
    
  } else if (x < 0 || y < 0){
    if (x < 0 && y > 0){
      product += x;
  
      return multiply(x, y - 1, product);
    } else if (x > 0 && y < 0){
      product += x;

      return multiply(x, y + 1, product);
    }
  } else {
    if (y === 0){
      return product;
    } else if (x === 0){
      return 0;
    }
    product += x;

    return multiply(x, y - 1, product);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
  // skip for now
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // base case
  if (str1.length === 0 && str2.length === 0){
    return true;
  }

  // recursion
  if (str1[0] === str2[0]){
    return compareStr(str1.slice(1), str2.slice(1));
  } else {
    return false;
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, output=[]){
  // base case
  if (str.length === 0){
    return output;
  }

  // recursion
  output.push(str[0]);

  return createArray(str.slice(1), output);
};

// 17. Reverse the order of an array
var reverseArr = function (array, reverse=[]) {
  // base case
  if (array.length === 0){
    return reverse;
  }

  // recursion
  reverse.unshift(array[0]);

  return reverseArr(array.slice(1), reverse)
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, array=[]) {
  // base case 
  if (length === 0){
    return array;
  }

  // recursion
  array.push(value);

  return buildList(value, length - 1, array);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count=0) {
  // base case
  if (array.length === 0){
    return count;
  }

  // recursion
  if (array[0] === value){
    count++;
  }
  return countOccurrence(array.slice(1), value, count);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, output=[]) {
    // base case
    if (array.length === 0){
      return output;
    }

    // recursion
    output.push(callback(array[0]));

    return rMap(array.slice(1), callback, output);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
  // skip for now
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
  // skip for now
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
  // skip for now
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
  // skip for now
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n, index=2, fiboArray=[0, 1]) {
  // base case
  if (n < 0){
    return null;
  } else if (n < index){
    return fiboArray[n]
  } else if (n === index - 1){
    return fiboArray[n];
  } 

  // recursion
  // build fibonacci sequence by index
  fiboArray[index] = fiboArray[index - 2] + fiboArray[index - 1]; 

  return nthFibo(n, index + 1, fiboArray)
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, output=[]) {
  // base case
  if (input.length === 0){
    return output;
  }

  // recursion
  // capitalize each word, push to output
  output.push(input[0].toUpperCase());

  return capitalizeWords(input.slice(1), output);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, output=[]) {
  // base case
  if (array.length === 0){
    return output;
  }

  // recursion
  // capitalize each string's first letter, add rest of word, push to output
  output.push(array[0][0].toUpperCase() + array[0].slice(1));

  return capitalizeFirst(array.slice(1), output);
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  // skip for now
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
  // skip for now
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj={}) {
  // base case
  if (str.length === 0){
    return obj;
  }

  // recursion
  // if letter exists as a property already
  if (obj.hasOwnProperty(str[0])){
    // add to count value
    obj[str[0]]++;
  } else { 
    // create and initialize to 1
    obj[str[0]] = 1;
  }

  return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, nonConsec=0, nonConsecs=[]) {
  // base case
  if (list.length === 0){
    return nonConsecs;
  } 

  // recursion
  // determine if number is NOT consecutive in input array
  if (list[0] !== list[1]){
    // assign to number to push
    nonConsec = list[0];
  }
  // determine is number is NOT consecutive in output array
  if (nonConsecs[nonConsecs.length - 1] !== nonConsec){
    // push nonConsec number to output array
    nonConsecs.push(nonConsec)
  }

  return compress(list.slice(1), nonConsec, nonConsecs);
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  // skip for now
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, singleZero=[]) {
  // base case
  if (array.length === 0){
    return singleZero;
  } 

  // recursion
  // if number is not zero
  if (array[0] !== 0){
    // push to array
    singleZero.push(array[0])
  } else if (array[0] === 0){   // else if number is 0
    // and if it is not consecutive
    if (array[0] !== array[1]){
      singleZero.push(array[0])
    }
  }

  return minimizeZeroes(array.slice(1), singleZero);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, alt=[]) {
  // base case
  if (array.length === 0){
    return alt;
  }

  // recursion
  // push number to new array
  alt.push(array[0]);
  // if new array is on an even index, the element will be a negative number
  // else if new array on odd index, the element will be a positive number
  if (alt.length % 2 !== 0 && array[0] <0){
    alt[alt.length - 1] = -array[0];
  } else if (alt.length % 2 === 0 && array[0] >= 0){
    alt[alt.length - 1] = -array[0];
  }

  return alternateSign(array.slice(1), alt);
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, newStr='') {
  // number word array
  let digitWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  // base case 
  if (str.length === 0){
    return newStr;
  }

  // recursion
  // if char is a digit
  if (str[0] >= '0' && str[0] <= '9'){
    // new digit string variable, assigned to corresponding index in digitWords array
    let digStr = digitWords[str[0]];
    // add to output string
    newStr += digStr;  
  } else {
    newStr += str[0];
  }

  return numToText(str.slice(1), newStr);
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------