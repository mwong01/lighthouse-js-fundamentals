function range (start, end, step) {
	var result = [];
	if(start === undefined || end === undefined || start > end || step <= 0) {
		result = [];
	} else {
		for (var x = start; x <= end; x = x + step) {
			result.push(x);
		}
	}
	return result;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));