function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > sum + 1) {
      return sum + 1;
    } else {
      sum += coins[i];
    }
  }
  return sum + 1;
}
console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
