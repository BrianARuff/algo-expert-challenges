function nonConstructibleChange(coins) {
  let change = [coins.reduce((a,c) => a + c, 0)];
  coins.sort((a,b) => a - b);
  for (let index = 0; index < coins.length; index++) {
    const element = coins[index];
    if (element > change) {
      return element + 1;
    } else {
      change += element
    }
  }
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
