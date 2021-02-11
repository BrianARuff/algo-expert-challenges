/* Solution #1: Time -> O(n^2), Space = O(1) */
function twoNumberSum(array, targetSum) {
  // Write your code here.
  let x;
  let y;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] + array[j] === targetSum && array[i] !== array[j]) {
        x = array[i];
        y = array[j];
        return [x, y];
      }
    }
  }
  return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

/* Solution #2: Time -> O(n log n), O(1) */
function twoNumberSum(array, targetSum) {
  // sort mech
  array.sort((a, b) => a - b);
  let rightIndex = array.length - 1;
  let leftIndex = 0;
  for (
    let i = 0, l = array[leftIndex], r = array[rightIndex];
    i < array.length;
    i++
  ) {
    const sum = l + r;
    if (sum === targetSum && l !== r) {
      return [l, r];
    } else {
      if (sum <= targetSum) {
        leftIndex++;
        l = array[leftIndex];
      } else {
        rightIndex--;
        r = array[rightIndex];
      }
    }
  }
  return [];
}

/* Solution #3 Time -> O(n), Space -> O(n) */
function twoNumberSum(array, targetSum) {
  const hash = {};
  for (let i = 0; i < array.length; i++) {
    hash[array[i]] = array[i];
  }
  for (let i = 0; i < array.length; i++) {
    let hashValue = targetSum - array[i];
    if (
      hash[hashValue] + array[i] === targetSum &&
      array[i] !== hash[hashValue]
    ) {
      return [array[i], hash[hashValue]];
    }
  }
  return [];
}
