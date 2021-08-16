// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(x,y) {
  if(x>y) {
    return x;
  }
  else if(y>x) {
    return y;
  }
  else {
    return x;
  }
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(scaryWord) {
  let large = "";
  if (scaryWord.length == 0) {
    large = null;
  } else {
    for (let i = 0; i < scaryWord.length; i++) {
      if (scaryWord[i].length > large.length) {
        large = scaryWord[i];
      } else if (scaryWord[i].length === large.length) {
        large = large;
      }
    }
  }
  return large;
}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(price) {
  let sum = 0;
  for (let i=0;i<price.length;i++) {
    sum = sum+ price[i];
  }
  return sum;
}
// Bonus: Calculate the sum
function add(cal) {
 let sum = 0;
   for(let i=0;i<cal.length;i++) {
     if(typeof cal[i] == "string") {
       sum = sum + cal[i].length;
     }
     else if(typeof cal[i] == "boolean") {
       if(cal[i] === true) {
         sum += 1;
       }
       else {
         sum;
       }
     }
     else if(typeof cal[i] == "number") {
       sum = sum + cal[i];
     }
     else {
       throw new Error("Unsupported data type sir or ma'am");
     }
   }
return sum;
}
// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(array) {
  let average = 0;
  if(array.length === 0) {
    return null;
  }
  else {
    for(let i=0;i<array.length;i++){
      average = average + array[i];
    }
    return average/array.length;
  }
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(avglength) {
  let average = 0;
  if(avglength.length === 0) {
    return null;
  }
  else {
    for (let i=0;i<avglength.length;i++)
    {
      average += avglength[i].length;
    }
    return average/avglength.length;
  }
}
// Bonus: 4.3
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function avg(arr) {
  let mix = 0;
  if(arr.length === 0) {
    return null;
  }
  else {
    for (let i = 0; i < arr.length; i++) {
      if(typeof arr[i] == "string") {
        mix += arr[i].length;
      } 
      else if(typeof arr[i] == "boolean") {
        if(arr[i] === true) {
          mix = mix +1;
        }
        else {
          mix;
        }
      }
      else if(typeof arr[i] == "number") {
        mix = mix + arr[i];
      }
      else {
        throw new Error("Unsupported Data Type");
      } 
    }
  }
  return parseFloat((mix/arr.length).toFixed(2));
}
// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(uniarray) {
  let unique = [];
  if(uniarray.length === 0) {
    unique = null;
  }
  else {
    for(let i=0;i<uniarray.length;i++) {
      if(unique.indexOf(uniarray[i]) == -1)
        unique[i] = uniarray[i];
    }
  }
  return unique;
}
// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(arr , word) {
  let search = false;
  if (arr.length === 0){
    search = null;
  }
  else {
    for(let i=0;i<arr.length;i++) {
      if(arr[i] === word){
        search = true;
      }
    }
  }
  return search;
}
// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(arrayOfWord, element) {
  let repeat = 0;
  if(arrayOfWord === 0) {
    repeat = 0;
  }
  else {
    for(let i = 0;i<arrayOfWord.length;i++) {
      if(arrayOfWord[i] === element) {
      repeat = repeat + 1;
    }
  }
}
  return repeat;
}
// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
function maximumProduct(matrix) {
  let product = 0;
  let maxproduct;
  for(let i=0;i<matrix.length;i++) {
    for(let j=0;j<matrix.length;j++) {
      if(j - 3 >= 0) {
        maxproduct = matrix[i][j]*matrix[i][j-1]*matrix[i][j-2]*matrix[i][j-3];
        if (product < maxproduct) {
          product = maxproduct;
        }
      }
      if(i-3 >= 0) {
        maxproduct = matrix[i][j] * matrix[i-1][j] * matrix[i-2][j] * matrix[i-3][j];
        if(product < maxproduct) {
          product = maxproduct;
        }
      }
    }
  }
  return product;
}
