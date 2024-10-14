// Iteration #1: Find the maximum
function maxOfTwoNumbers(a, b) {
  return a > b ? a : b;
}

// Iteration #2: Find longest word
function findLongestWord(words) {
  if(words.length === 0) 
    return null;
  let longestWord = words[0];
  for(let word of words) {
    if(word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// Iteration #3: Calculate the sum
function sumNumbers(numbers) {
  let sum=0;
  for(let num of numbers) {
    sum += num;
  }
  return sum;
}

// Iteration #3.1 Bonus:
function sum(mixedArr) {
  let total = 0;
  for (let item of mixedArr) {
    if (typeof item === 'number') {
      total += item;
    } else if (typeof item === 'string') {
      total += item.length;
    } else if (typeof item === 'boolean') {
      total += item ? 1 : 0;
    } else if (typeof item === 'object' || Array.isArray(item)) {
      throw new Error("Unsupported data type sir or ma'am");
    }
  }
  return total;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
function averageNumbers(numbersAvg) {
  if (numbersAvg.length === 0) 
    return null;
  let sum = sumNumbers(numbersAvg);
  return sum / numbersAvg.length;
}

// Level 2: Array of strings
function averageWordLength(wordsArr) {
  if (wordsArr.length === 0) 
    return null;
  let totalLength = 0;
  for (let word of wordsArr) {
    totalLength += word.length;
  }
  return totalLength / wordsArr.length;
}

// Bonus - Iteration #4.1
function avg(arr) {
  if (arr.length === 0) {
    return null;
  }
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i];
      count++;
    } else if (typeof arr[i] === 'string') {
      sum += arr[i].length;
      count++;
    } else if (typeof arr[i] === 'boolean') {
      sum += arr[i] ? 1 : 0;
      count++;
    } else if (typeof arr[i] === 'object' || Array.isArray(arr[i])) {
      throw new Error("Unsupported data type sir or ma'am");
    }
  }
  return sum / count;
}

// Iteration #5: Unique arrays
function uniquifyArray(arr) {
  if (arr.length === 0) {
    return null;
  }
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

// Iteration #6: Find elements
function doesWordExist(arr, word) {
  if (arr.length === 0) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      return true;
    }
  }
  return false;
}

// Iteration #7: Count repetition
function howManyTimes(arr, word) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      count++;
    }
  }
  return count;
}

// Iteration #8: Bonus
function greatestProduct(matrix) {
  let maxProduct = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (j < matrix[i].length - 3) {
        const horizontalProduct = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
        maxProduct = Math.max(maxProduct, horizontalProduct);
      }
      if (i < matrix.length - 3) {
        const verticalProduct = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
        maxProduct = Math.max(maxProduct, verticalProduct);
      }
    }
  }
  return maxProduct;
}

// Bonus - Iteration #8.1: Product of diagonals
function greatestProductOfDiagonals(matrix) {
  let maxProduct = 0;
  for (let i = 0; i < matrix.length - 3; i++) {
    for (let j = 0; j < matrix[i].length - 3; j++) {
      // top-left to bottom-right
      const diagonalProduct1 = matrix[i][j] * matrix[i + 1][j + 1] * matrix[i + 2][j + 2] * matrix[i + 3][j + 3];
      maxProduct = Math.max(maxProduct, diagonalProduct1);
      // top-right to bottom-left
      const diagonalProduct2 = matrix[i][j + 3] * matrix[i + 1][j + 2] * matrix[i + 2][j + 1] * matrix[i + 3][j];
      maxProduct = Math.max(maxProduct, diagonalProduct2);
    }
  }
  return maxProduct;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
