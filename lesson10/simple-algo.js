O();

const arr = [1, 2, 3, 4, 5];

function sum(arr) {
  const s = 0;

  for (let el of arr) {
    s = s + el;
  }

  return s;
}

const digits = [1, 2, 3, 4, 5];

function findNumberInArray(arr, target) {
  for (let el of arr) {
    if (el === target) return true;
  }

  return false;
}

console.log(findNumberInArray(digits, 3));
console.log(findNumberInArray(digits, 7));

O(n);
