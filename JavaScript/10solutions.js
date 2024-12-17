//Q1
const reversedString = str => str.split(' ').reverse().join(' ');

//Q2
const uniqueArray = arr => [...new Set(arr)];

//Q3
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

//Q4
const currentDate = () => new Date().toISOString().split('T')[0];

//Q5
const cumulativeSum = arr => arr.reduce((acc, num) => [...acc, acc.length ? acc[acc.length - 1] + num : num], []);

//Q6
const chunkArray = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));

//Q7
const longestConsecutiveSequence = (arr, element) => Math.max(...arr.join('').split(element).map(group => group.length));

//Q8 
const transposeMatrix = matrix => matrix[0].map((col, i) => matrix.map(row => row[i]));

//Q9
const toCamelCase = str => str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());

//Q10
//[a, b] = [b, a];