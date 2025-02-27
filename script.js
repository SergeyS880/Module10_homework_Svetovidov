//homework#1 (value conversion)

let example = prompt('enter a number')
let numExample = ++example;
alert(typeof numExample)
if (numExample % 2 === 0) {
  alert('number ' + numExample + ' even');
} else {
  alert('number ' + numExample + ' odd');
} if (!numExample) {
  alert("Oops")
}


//homework#2 (type x)

let x = true;
switch (x) {
    case 1:
      console.log('x number');
    break;
    case 'x':
      console.log('x string');
    break;
    case true:
      console.log('x boolean');
    default:
      console.log('undefined')
}


//homework#3 (revers)

function reverseString(str) {
  return str.split("").reverse().join('');
}
console.log(reverseString("Hello"))


//homework#4 (random)

function getRandomRange(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomRange(1, 100))


//homework#5 (array)

let anyNums = [3, 5, 42, 55, 68, 89];
  console.log(anyNums.length);
for (let i = 0; i < anyNums.length; i++) {
  console.log(anyNums[i])
}


//homework#6 (array & elements)

const allEqual = arr => arr.every(val => val === arr[0]);
console.log(allEqual([21, 16, 5, 1, 83, 78]))
console.log(allEqual([3, 3, 3, 3, 3, 3]))


//homework#7 (number of even & odd)

const num = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(n => typeof
n === 'number');
const isOdd = (num) => num % 2 !== 0;
const odd = num.filter(isOdd);
console.log(odd.length)
console.log(num.filter(num => num % 2 == 0).length)


//homework#8 (associative)

let myMap = new Map();
myMap.set("abs", 'string');
myMap.set(123, 'number');
myMap.set(false, 'null');

for (let keys of myMap.keys()) {
  console.log('ключ', keys)
}
for (let name of myMap.values()) {
  console.log('значение', name)
}
 