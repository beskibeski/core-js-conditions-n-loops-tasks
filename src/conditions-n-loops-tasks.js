/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return Math.sign(number) === 1 || number === 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > c && a > b) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }
  if (Math.abs(king.x - queen.x) === Math.abs(king.y - queen.y)) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (
    (a === b && a + b > c && c !== 0) ||
    (a === c && a + c > b && b !== 0) ||
    (b === c && b + c > a && a !== 0)
  ) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romanNumbers = [
    { arabic: 1, roman: 'I' },
    { arabic: 4, roman: 'IV' },
    { arabic: 5, roman: 'V' },
    { arabic: 9, roman: 'IX' },
    { arabic: 10, roman: 'X' },
  ];
  let number = num;
  let romanNumber = '';
  for (let i = romanNumbers.length - 1; number > 0; i -= 1) {
    while (number >= romanNumbers[i].arabic) {
      romanNumber = `${romanNumber}${romanNumbers[i].roman}`;
      number -= romanNumbers[i].arabic;
    }
  }
  return romanNumber;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let str = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '1':
        str = `${str} one`;
        break;
      case '2':
        str = `${str} two`;
        break;
      case '3':
        str = `${str} three`;
        break;
      case '4':
        str = `${str} four`;
        break;
      case '5':
        str = `${str} five`;
        break;
      case '6':
        str = `${str} six`;
        break;
      case '7':
        str = `${str} seven`;
        break;
      case '8':
        str = `${str} eight`;
        break;
      case '9':
        str = `${str} nine`;
        break;
      case '0':
        str = `${str} zero`;
        break;
      case '.':
        str = `${str} point`;
        break;
      case ',':
        str = `${str} point`;
        break;
      case '-':
        str = `${str} minus`;
        break;
      default:
        break;
    }
  }
  let strTrim = '';
  for (let i = 1; i < str.length; i += 1) {
    strTrim = `${strTrim}${str[i]}`;
  }
  return strTrim;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    newStr = `${newStr}${str[i]}`;
  }
  return str === newStr;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = `${num}`;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === `${digit}`) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let leftSum = 0;
    for (let j = 0; j <= i; j += 1) {
      leftSum += arr[j];
    }
    let rightSum = 0;
    for (let j = arr.length - 1; j > i; j -= 1) {
      if (rightSum === leftSum && j - i === 1) {
        return i + 1;
      }
      rightSum += arr[j];
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const array = [];
  for (let i = 0; i < size; i += 1) {
    array[i] = new Array(size);
  }
  const numberMax = size * size;
  let number = 1;
  let arrayLineLeft = 0;
  let arrayLineRight = size;
  let arrayLineTop = 0;
  let arrayLineBottom = size;

  do {
    for (let i = arrayLineLeft; i <= arrayLineRight - 1; i += 1) {
      array[arrayLineTop][i] = number;
      number += 1;
    }
    arrayLineTop += 1;
    for (let i = arrayLineTop; i <= arrayLineBottom - 1; i += 1) {
      array[i][arrayLineRight - 1] = number;
      number += 1;
    }
    arrayLineRight -= 1;
    if (arrayLineTop <= arrayLineBottom) {
      for (let i = arrayLineRight - 1; i >= arrayLineLeft; i -= 1) {
        array[arrayLineBottom - 1][i] = number;
        number += 1;
      }
      arrayLineBottom -= 1;
    }
    if (arrayLineLeft <= arrayLineRight) {
      for (let i = arrayLineBottom - 1; i >= arrayLineTop; i -= 1) {
        array[i][arrayLineLeft] = number;
        number += 1;
      }
      arrayLineLeft += 1;
    }
  } while (number !== numberMax + 1);
  return array;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const newMatrix = matrix;
  const rows = newMatrix.length;
  const columns = newMatrix[0].length;
  for (let i = 0; i < rows; i += 1) {
    for (let j = i; j < columns - i - 1; j += 1) {
      const topCell = newMatrix[i][j];
      const bottomCell = newMatrix[rows - i - 1][columns - j - 1];
      const rightCell = newMatrix[j][columns - i - 1];
      const leftCell = newMatrix[rows - j - 1][i];
      newMatrix[j][columns - i - 1] = topCell;
      newMatrix[rows - j - 1][i] = bottomCell;
      newMatrix[rows - i - 1][columns - j - 1] = rightCell;
      newMatrix[i][j] = leftCell;
    }
  }
  return newMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const newArray = arr;

  function divideArray(arrayToDivide, first, last) {
    const newArrayToDivide = arrayToDivide;
    const mainElement = newArrayToDivide[last];
    let newFirst = first;
    for (let i = first; i <= last; i += 1) {
      if (newArrayToDivide[i] < mainElement) {
        [newArrayToDivide[newFirst], newArrayToDivide[i]] = [
          newArrayToDivide[i],
          newArrayToDivide[newFirst],
        ];
        newFirst += 1;
      }
    }
    [newArrayToDivide[newFirst], newArrayToDivide[last]] = [
      newArrayToDivide[last],
      newArrayToDivide[newFirst],
    ];
    return newFirst;
  }

  function quickSort(array, firstElement, lastElement) {
    if (firstElement < lastElement) {
      const centerIndex = divideArray(array, firstElement, lastElement);
      quickSort(array, firstElement, centerIndex - 1);
      quickSort(array, centerIndex + 1, lastElement);
    }
  }

  quickSort(newArray, 0, newArray.length - 1);
  return newArray;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  function makeOneIteration(string) {
    let oddStr = '';
    let evenStr = '';
    for (let i = 0; i < string.length; i += 1) {
      if (i % 2 !== 0) {
        oddStr = `${oddStr}${string[i]}`;
      } else {
        evenStr = `${evenStr}${string[i]}`;
      }
    }
    return evenStr + oddStr;
  }

  const stringMutations = {};
  let stringForMutation = str;
  let iterationsForMutation = 0;
  while (!Object.hasOwn(stringMutations, stringForMutation)) {
    stringMutations[stringForMutation] = iterationsForMutation;
    stringForMutation = makeOneIteration(stringForMutation);
    iterationsForMutation += 1;
  }

  let countMutations = iterations % iterationsForMutation;
  let resultString = str;

  while (countMutations > 0) {
    resultString = makeOneIteration(resultString);
    countMutations -= 1;
  }
  return resultString;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const numberToArray = [];
  let newNumber = number;
  while (newNumber > 0) {
    numberToArray.unshift(newNumber % 10);
    newNumber = Math.floor(newNumber / 10);
  }
  let firstPartOfNumber = [];
  let secondPartOfNumber = [];
  for (let i = numberToArray.length; i > 1; i -= 1) {
    if (numberToArray[i] > numberToArray[i - 1]) {
      let numberToReverseFromStart = 0;
      let numberToReverseFromEnd = 0;
      numberToReverseFromStart = numberToArray[i - 1];
      firstPartOfNumber = numberToArray;
      secondPartOfNumber = numberToArray.splice(i - 1);
      secondPartOfNumber.shift();
      secondPartOfNumber = secondPartOfNumber.sort((a, b) => a - b);
      let indexToDelete = 0;
      numberToReverseFromEnd = secondPartOfNumber.find((element, index) => {
        indexToDelete = index;
        return element > numberToReverseFromStart;
      });

      secondPartOfNumber.splice(indexToDelete, 1);
      secondPartOfNumber.push(numberToReverseFromStart);
      secondPartOfNumber.sort((a, b) => a - b);
      const newArrayOfNumbers = [
        ...firstPartOfNumber,
        numberToReverseFromEnd,
        ...secondPartOfNumber,
      ];
      newNumber = 0;
      for (
        let k = newArrayOfNumbers.length - 1, j = 0;
        k >= 0;
        k -= 1, j += 1
      ) {
        newNumber += newArrayOfNumbers[k] * 10 ** j;
      }
      return newNumber;
    }
  }
  return number;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
