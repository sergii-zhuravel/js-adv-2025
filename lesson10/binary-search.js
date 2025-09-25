const digits = [1, 2, 3, 4, 5];

// const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1. find middle - Math.floor((start + end) / 2)
// 2. порівняти мідл з таргет - якщо дорівнює, то ми знайшли
// 3. якщо таргет менше мідл - шукаємо зліва
//     а. start - залишается
//     b. end = mid - 1
//     c. рекурсивно викликаємо алгоритм пошуку на новому масиві
// 4. якщо тарге більше мідл - шукаємо справа
//     а. start - mid + 1
//     b. end - залишается
//     c. рекурсивно викликаємо алгоритм пошуку на новому масиві
// 5. базовий кейс - end < start

function bindarySearch(arr, target, start, end) {
  if (start > end) return false;

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) return true;

  if (arr[mid] > target) {
    return bindarySearch(arr, target, start, mid - 1);
  } else {
    return bindarySearch(arr, target, mid + 1, end);
  }
}

console.log(bindarySearch(digits, 3, 0, digits.length - 1));
console.log(bindarySearch(digits, 1, 0, 4));
console.log(bindarySearch(digits, 5, 0, 4));
console.log(bindarySearch(digits, 7, 0, 4));

// const salaries = [1000, 2000, 500, 500, 300, 400, 4000, 700];

// function binarySearchRecurcive(arr, target, start, end) {
//   // Base Condition
//   if (start > end) return false;

//   // Find the middle index
//   let mid = Math.floor((start + end) / 2);

//   // Compare mid with given target
//   if (arr[mid] === target) return true;

//   // If element at mid is greater than target,
//   // search in the left half of mid
//   if (arr[mid] > target) return recursiveFunction(arr, target, start, mid - 1);
//   // If element at mid is smaller than target,
//   // search in the right half of mid
//   else return recursiveFunction(arr, target, mid + 1, end);
// }

// let binarySearchIterative = function (arr, target) {
//   let start = 0,
//     end = arr.length - 1;

//   // Iterate while start not meets end
//   while (start <= end) {
//     // Find the mid index
//     let mid = Math.floor((start + end) / 2);

//     // If element is present at
//     // mid, return True
//     if (arr[mid] === target) return true;
//     // Else look in left or
//     // right half accordingly
//     else if (arr[mid] < target) start = mid + 1;
//     else end = mid - 1;
//   }

//   return false;
// };
