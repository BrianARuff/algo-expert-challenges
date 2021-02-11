// O(n*m), o(1) space
function isValidSubsequence(array, sequence) {
  for(let i = 0; i < sequence.length; i ++ ){
   for (let j = 0; j < array.length; j++) {
     if (sequence[i] === array[j] && sequence.length) {
       sequence.splice(i, 1);
     }
   } 
  }
  return sequence.length > 0 ? false : true;
}

// o(n) time, o(1) space
function isValidSubsequence(array, sequence) {
	let p1 = 0;
	let p2 = 0;
	let res = 0;
	while (p1 < array.length) {
		if (array[p1] === sequence[p2]) {
			p2++
		}
		p1++
	}
	return p2 === sequence.length ? true : false;
}

console.log(isValidSubsequence( [5, 1, 22, 25, 6, -1, 8, 10],  [1, 6, -1, 10]));