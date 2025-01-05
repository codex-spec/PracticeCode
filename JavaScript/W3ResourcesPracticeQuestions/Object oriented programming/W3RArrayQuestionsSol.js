//questions left to do 21, 23, 25, 
//w3resource array questions 

console.log("some random code");
var sa = [8986,543,214,12,7889,143,-12,0,34];
sa.sort();
console.log(sa);


//Q1 
var is_array = function(input) {
  if (toString.call(input) === "[object Array]") return true;
    
  return false;   
};

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

//Q2 
function cloneAnArray(array) {
  var res = [];
  array.forEach((ele) => {
    res.push(ele);
  });
  return res;
};

var output = [2,67,2,[1,4,65], 3,67,12,45, [1,67,34,[56,34, [1,2,3] ] ], "soemnthing", "2sd4542fgh"];
console.log(cloneAnArray(output));

//Q3 
function first(array, n) {
  if (array == null) return void 0;
  if (n == null) return array[0];
  if (n < 0) return [];

  return array.slice(0, n);
};

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

//Q4 
function last(array, n) {
  if (array == null) return void 0;
  if (n == null) return array[array.length-1];
  
  return array.slice(Math.max(array.length - n, 0));
};
console.log("\nquestion 4")
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

//Q5
myColor = ["Red", "Green", "White", "Black"];

// Using the toString method to convert the array to a string
console.log(myColor.toString());

// Using the default join method to concatenate array elements into a string separated by commas
console.log(myColor.join());


//Q6
// console.log("\n question 6");
// var num = window.prompt();

// var str = num.toString();

// var result = [str[0]];

// for (var x = 1; x < str.length; x++) {
//   if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
//     result.push('-', str[x]);
//   } else {
//     result.push(str[x]);
//   }
// }

// console.log(result.join(''));

console.log("\nq7");
//Q7
function sortArray(someArray) {
  return someArray.sort(function(a, b){return a - b});
};

var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
var arr2 = [1,56,87,2,586,1124,4,9];

console.log(sortArray(arr1));
console.log(sortArray(arr2));


//Q8 
console.log("\nquestion 8");
function highestC(array) {
  var resI = 0, maxC = 0;
  for(let i = 0; i < array.length; i++) {
    var currC = 1;
    for(var j = 1; j < array.length; j++) {
      if(i === j) continue;
      else if(array[i] === array[j]) {
          currC++;
      }
      if(currC > maxC) {
          maxC = currC;
          resI = i;
      }
    }
  }
  return array[resI];
};

var sa = [1,56,87,2,586,1124,7,7,087,12,4,4,78,534,4,787,4,9];
console.log(highestC(sa));

//Q9 
console.log("\nq9");

function swapEachCharCase(strings) {
  var res = "";
  
  for(var i = 0; i < strings.length; i++) {
    var hold = 0;
  }
  
};

var str = 'The Quick Brown Fox';
console.log(swapEachCharCase(str));

//Q10
console.log("\nq10\n");

function printArray(someArr) {
  for(var i = 0; i < someArr.length; i++) {
    console.log("row " + i);
    for(var j = 0; j < someArr[i].length; j++) {
      console.log("" + someArr[i][j]);
    }
  }
}

var sa = [[12,34,67,89], [12,87,34,67], [34,65,87], [12,45,768,23]];
console.log(printArray(sa));

//Q11

function sum_sq(array) {
  var sum = 0, 
      i = array.length;
  while (i--) 
   sum += Math.pow(array[i], 2);
  return sum;
}
 
console.log(sum_sq([0,1,2,3,4]));

//Q12 
function sumAndProductOfAnArray(ar) {
  var sAndP = [];
  var sum = 0, product = 1;
  for(var i = 0; i < ar.length; i++) {
    sum += ar[i];
    product*=ar[i];
  }
  sAndP.push(sum);
  sAndP.push(ptoduct);
  return sAndP;
};

//Q13 skip this question as it requires html 
// <!DOCTYPE html>
// <html>
//   <head>
//         <meta charset=utf-8 />
//         <title>JS Bin</title>
//       <style>
//         body {padding-top:50px} 
//       </style>   
//   </head>
//   <body>
//         <input type="text" id="text1"></input>
//         <input type="button" id="button1" value="Add" onclick="add_element_to_array();"></input>
//         <input type="button" id="button2" value="Display" onclick="display_array();"></input>
//         <div id="Result"></div> 
//   </body>
// </html>
// var x = 0;

// var array = Array();
// function add_element_to_array() {
//   array[x] = document.getElementById("text1").value;
//   alert("Element: " + array[x] + " Added at index " + x);
//   x++;
//   document.getElementById("text1").value = "";
// }

// function display_array() {
//   var e = "<hr/>"; 
//   for (var y = 0; y < array.length; y++) {
//     e += "Element " + y + " = " + array[y] + "<br/>";
//   }
//   document.getElementById("Result").innerHTML = e;
// }



//Q14
console.log("\nQ14");

function removeDuplicant(passedA) {
  var res = [];
  for(var i = 0; i < passedA.length; i++) {
    if(!res.includes(passedA[i])) {
      res.push(passedA[i]);
    }
  }
  return res.sort();
};
var testA = [1,4,7,2,6,3,5,2,1,3,56,7623,-123];
console.log(removeDuplicant(testA));


//Q15 
console.log("\nq15");
function appendTh(sa) {
  var o = ["th","st","nd","rd"];
  for(let i = 0; i < sa.length; i++) {
    if(i === 0) {
      console.log("1st choice is " + sa[i]);
    }else if(i === 1) {
      console.log("2nd choice is " + sa[i]);
    }else if(i === 2) {
      console.log("3rd choice is " + sa[i]);
    }else {
      console.log((i+1) + "th choice is " + sa[i]);
    }
  }
}; 

var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
console.log(appendTh(color));

//Q16 
console.log("\nq16");
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
      return true;
    } else {
      return false;
    }
};

// take input
const year = 2015;

console.log(checkLeapYear(year));

//Q17 
console.log("\nq17");

const getRandomIntegerInclusive = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min
}

function shuffleArray(someA) {
  var rand = getRandomIntegerInclusive(0, someA.length-1);
  for(let i = 0; i < someA.length*2; i++) {
    var hold = someA[rand];
    someA[rand] = someA[i];
    someA[i] = hold;
  }
  return someA;
};

//Q18
console.log("\nQ18");
function binarySearch(arr, val) {
  arr.sort(function(a, b){return a - b}); //if array is not sorted
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === val) return mid;
    

    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1; //means index not found
}

const array = [0,1,2,3,4,6,100,10000];

console.log(binarySearch(array, 100)); 
var items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binarySearch(items, 1));
console.log(binarySearch(items, 5));



//Q19 
console.log("\nQ19");
const getSumOfIndivdualInd = (ar1, ar2) => {
  var sA = (ar1.length < ar2.length) ? ar1 : ar2;
  var res = [], j = 0;
  
  for(let i = 0; i < sA.length; i++) {
    if(sA == ar1) res.push(sA[i] + ar2[i]);
    else res.push(sA[i] + ar1[i]);
    j = i;
  }
  var lA = (ar1.length > ar2.length) ? ar1 : ar2;
  for(let k = j; k < lA.length; k++) {
    res.push(lA[k]);
  }
  return res;  
};

let arrOne = [2,5,8,12,45], arrTwo = [3,5,1,8,3,7,9,1];
console.log(getSumOfIndivdualInd(arrOne, arrTwo));




//Q20 
console.log("\nq20");

function findDuplicant(someArray) {
  var sa = [];
  
  for(var i = 0; i < someArray.length; i++) {
    for(var j = 0; j < someArray.length; j++) {
      if(i == j || sa.includes(someArray[i])) {
        continue;
      }else {
        if(someArray[i] == someArray[j]) {
          sa.push(someArray[j]);
        }
      }
    }
  }
  return sa.sort();
};

var ar = [2,4,7,34,12,12,76,3,4,4,57,57,7,7,8,8,34,8,0,1,2,1,0,-123];
console.log(findDuplicant(ar));

//Q21
console.log("\nQ21");

function flatten() {
  
};



console.log("\nq22");
//Q22 
function arrayUnion(arrOne, arrTwo) {
  var res = [];
  for(var i = 0; i < arrOne.length; i++) res.push(arrOne[i]);
  for(var j = 0; j < arrTwo.length; j++) res.push(arrTwo[j]);
  res.sort(function(a, b){return a - b});
  return res;
};

var testArO = [2,5,78,12,76,20], testArrT = [34,67,17,87,23,122,785,867];

console.log(arrayUnion(testArO, testArrT));

//Q23 
console.log("\nQ23");

function getDiff(ar1, ar2) {
  ar1.sort(function(a, b){return a - b});
  ar2.sort(function(a, b){return a - b});
  //sort both of the funcitons to make the logic eaiser
  var res = [], la = [];
  // var sa = (ar1.length < ar2.length) ? ar1 : ar2;
  // sa = (sa === ar1) ? la = ar2 : la = ar1; 
  
  for(var i = 0; i < ar1.length; i++) {
    if(!ar2.includes(ar1[i])) {
      res.push(ar1[i]);
    }
  }
  
  for(var i = 0; i < ar2.length; i++) {
    if(!ar1.includes(ar2[i])) {
      res.push(ar2[i]);
    }
  }
  
  return res;
};

console.log(getDiff([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
console.log(getDiff([1, 2, 3], [100, 2, 1, 10]));

//Q24 

function removeNull(array) {
  var checkA = ['null', '0', '""', 'false', 'undefined', 'NaN'];
  var res = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i] === 'null' || array[i] === 'o' || array[i] === '""' || array[i] === 'false' ||
    array[i] === 'undefined' || array[i] === 'NaN') {;} else {
      res.push(array[i]);
    }
  }
  return res;
};



//Q26 

function checkIfPairEqualsTarget(arr, target) {
  
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr.length; j++) {
      if(i === j) continue;
      else {
        if((arr[i] + arr[j]) === target) {
          return [i, j];  
        }
      }
    }
  }
  return 0; //no elements found which match the target
};

//Q29 come back to finish the questions
console.log("\nQ29");

// function num_string_range(sv, ev, cv) {
//   if(((sv >= '0' && sv <= '9') && !(ev >= '0' && ev <= '9')) || 
//   (!(sv >= '0' && sv <= '9') && (ev >= '0' && ev <= '9'))) {
//     console.log("the values are not the same incorrect inputs");
//   }else if(
//       ((sv.length === 1 && sv.match(/[a-z]/i)) && !(ev.length === 1 && ev.match(/[a-z]/i))  
//     ) || (
//       (ev.length === 1 && ev.match(/[a-z]/i)) && !(sv.length === 1 && sv.match(/[a-z]/i))
//       ) || (!(sv.match(/[a-z]/i)) && !(ev.match(/[a-z]/i)))  { 
//           console.log("the values are not the same incorrect inputs");
//   }else {
//       var testCharAr = ['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'];
//         if((sv >= '0' && sv <= '9') && (ev >= '0' && ev <= '9')) {
//           var res = [];
//           for(var i  =sv; i < ev; i+=cv) {
//             res.push(i);
//           }
//         }else if(sv.match(/[a-z]/i) && ev.match(/[a-z]/i)) {
//           var restr = [];
//           var svi = testCharAr.
//           for(var i  =testCharAr; i < ev; i+=cv) {
//             res.push(i);
//           }
//         }
    
//       }
// };

//Q30

function mergeAndRemoveDuplicates(arr1, arr2) {
  var res = [];
  for(let i = 0; i < arr1.length; i++) {
    res.push(arr1[i]);
  }
  for(let j = 0; j < arr2.length; j++) {
    res.push(arr2[i]);
  }
  removeDuplicant(res);

  return res;
};

//Q31 
console.log("\nQ31");
function removeTarget(arr, target) {
  var res = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === target) {
      continue;
    }else res.push(arr[i]);
  }
  return res;
};

console.log(removeTarget([2, 5, 9, 6], 9));


//Q32
console.log("\nQ32");

function hasElement(arr, target) {
  
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === target) return true;
  }
  return false;
};
var arr = [2, 5, 9, 6];
console.log(hasElement(arr, 0));


//Q34 
console.log("\nq34");

function nthLargest(tar, nthVal) {
  tar.sort(function(a, b){return a - b});
  return tar[tar.length-nthVal];
};

console.log(nthLargest([ 43, 56, 23, 89, 88, 90, 99, 652], 3));
console.log(nthLargest([ 43, 56, 23, 89], 2));


//Q35 
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function getRandFromArray(ar) {
  var randIndex = randomIntegerInRange(0, ar.length-1);
  return ar[randIndex];
};

//Q36 
console.log("\nq36");
function array_filled(v1, v2) {
  var res =[];
  var i = 0;
  while(i < v1) {
    res.push(v2);
    i++;
  }
  return res;
};

//Q37
console.log("\nQ37");

function array_filled_strings(v, s) {
  var ress = [];
  var j = 0; 
  while(j < v) {
    ress.push(s);
    j++;
  }
  return ress;
};

console.log(array_filled_strings(4, 'password'));

//Q38
console.log("\nq38");

function move(arr, p1, p2) {
  if((p1 < 0 && p2 < 0) || (p1 < 0 && p2 > 0) || (p1 > 0 && p2 < 0) 
  || (p1 > arr.length-1 && p2 < arr.length-1) || (p1 < arr.length-1 && p2 > arr.length-1)
  || (p1 > arr.length-1 && p2 > arr.length-1) )  return arr;
  else {
    var hold = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = hold;
    return arr;
  }
};

//Q40
console.log("\nQ40");
const increaseFSP = (sp, il) => {
  var res = [];
  for(let i = 0; i < il; i++) {
    res.push(sp);
    sp++;
  }
  return res;
};

//Q45
console.log("\nQ45");
const unique_Elements = arr => [...new Set(arr)];
// Output the result of applying unique_Elements to an array with duplicate elements
console.log(unique_Elements([1, 2, 2, 3, 4, 4, 5]));
// Output the result of applying unique_Elements to an array without duplicate elements
console.log(unique_Elements([1, 2, 3, 4, 5]));
// Output the result of applying unique_Elements to an array with negative and duplicate elements
console.log(unique_Elements([1, -2, -2, 3, 4, -5, -6, -5]));


const getArrayValsHigherThanX = (someA, target) => {
    someA.sort();
    newArray = [];
    for(let i = 0; i < someA.length; i++) {
      if(someA[i] > target) newArray.push(someA[i]);
    }
    
    return newArray;
};

//Q47 
console.log("\nQ47");
const compactObject = val => {
  // Use ternary operator to filter out falsy values for arrays, otherwise use the provided value
  const data = Array.isArray(val) ? val.filter(Boolean) : val;
  // Reduce the object to a compacted version, removing falsy values recursively
  return Object.keys(data).reduce(
    (acc, key) => {
      const value = data[key];
      // Check if the value is truthy before including it in the result
      if (Boolean(value))
        // Recursively compact object values, if applicable
        acc[key] = typeof value === 'object' ? compactObject(value) : value;
      return acc;
    },
    // Initialize the result as an empty array for arrays, otherwise an empty object
    Array.isArray(val) ? [] : {}
  );
};

//Q48
console.log("\nQ48");
const FIfENINP = (sa) => {
  var arr = [2,3,4,5,6,7,8,9];
  
  for(var i = 0; i < sa.length; i++) {
    for(var j = 0; j < arr.length; j++) 
      if((sa[i] % arr[j] == 0) && (sa[i] != arr[j])) return false;
  }
  return true;
}

var ta = [1,3,5,7,11,13,17,19];
console.log(FIfENINP(ta));

//Q49
console.log("\nQ49");
const getThirdSmallestNum = (someArr) => {
  someArr.sort();
  return someArr[2];
};

//Q50 
console.log("\nQ50");
function getSumOfAllNums(ar) {
  var sum = 0;
  for(var i = 0; i < ar.length; i++) {
    if(ar[i] >= '0' && ar[i] <= '9') {
      sum += ar[i];
    }
  }
  return sum;
};


//Q51
console.log("\nQ51");
function test(nums) { 
  for (var i = 0; i < nums.length - 1; i++) {
    // Check if the next element is not a factor of the current element
    if (nums[i + 1] % nums[i] != 0) {
      // If not, the array does not form a factor chain
      return false;            
    }
  }
  // If the loop completes without returning, the array forms a factor chain
  return true;
}

// Test the function with an array that forms a factor chain
nums = [2, 4, 8, 16, 32];
console.log("Original array: ", nums);
console.log("Check the said array is a factor chain or not?");
console.log(test(nums));

// Test the function with another array that forms a factor chain
nums = [2, 4, 16, 32, 64];
console.log("Original array: ", nums);
console.log("Check the said array is a factor chain or not?");
console.log(test(nums));

// Test the function with an array that does not form a factor chain
nums = [2, 4, 16, 32, 68];
console.log("Original array: ", nums);
console.log("Check the said array is a factor chain or not?");
console.log(test(nums));

