function twoNumberSum(array, targetSum) {
  const hash = {}
  for (let i = 0; i < array.length; i++) {
      hash[array[i]] = array[i];
		  let hashValue = targetSum - array[i]
      if (hash[hashValue] + array[i] === targetSum && array[i] !== hash[hashValue]){
          return [array[i], hash[hashValue]];
    	}
    }
	return [];
}
// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;