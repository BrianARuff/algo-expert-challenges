"use strict";
// function twoNumberSum(array, targetSum) {
//   const hash = {}
//   for (let i = 0; i < array.length; i++) {
//       hash[array[i]] = array[i];
// 		  let hashValue = targetSum - array[i]
//       if (hash[hashValue] + array[i] === targetSum && array[i] !== hash[hashValue]){
//           return [array[i], hash[hashValue]];
//     	}
//     }
// 	return [];
// }
exports.__esModule = true;
exports.example = void 0;
function example(array, targetSum) {
    var hash = {};
    for (var i = 0; i < array.length; i++) {
        hash[array[i]] = array[i];
    }
    return [];
}
exports.example = example;
